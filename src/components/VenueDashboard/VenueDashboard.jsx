import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import dreyDk from '../ArtistPhotos/dreyDk.jpeg'
import AnnieBang from '../ArtistPhotos/Annie and the Bang Bang_SmouseintheHouse-6 - Annie Enneking.jpg'
import CheapBouquet from '../ArtistPhotos/CheapBouquet.jpg'
import HoneyPlease from '../ArtistPhotos/HoneyPlease.jpeg'
import KingSizedCoffin from '../ArtistPhotos/KingSizedCoffin.jpg'
import MommyLogBalls from '../ArtistPhotos/MommyLogBalls.jpeg'
import PityParty from '../ArtistPhotos/pityParty.jpg'
import TheWalkerBrothers from '../ArtistPhotos/TheWalkerBrothersBand.jpg'
import TheWeepingCovenant from '../ArtistPhotos/theWeepingCovenant.jpg'
import AtomicLights from '../ArtistPhotos/AtomicLights.jpeg'
import SeyiOyinloye from '../ArtistPhotos/SeyiOyinloye.jpg'
import RanchoUnicorno from '../ArtistPhotos/RanchoUnicorno.jpg'
import { useState } from 'react';
import { useEffect } from 'react';

export default function VenueDashboard(){
  const [accessToken, setAccessToken] = useState(`BQBruo_FOvQQ-rUSTwi4XYqYXbzdZgF1etDNqnGlMbE2WiKTYWK4TSln8OLcAEHuMI9IeTTq19KnN4M0rMJ8MCyNC8kjzDNV9KGKoWfEXkS6MErS90zjuKWSeMIU9BCX_ivaedCCNQqbHAxJnrnB1hva6iPZOJAoPW1wBx-nNs0WM9MhPcv0ROitNj1w1r8_vejwxtp58UG3vjlz
`); // Replace with your initial Spotify OAuth token
  const [refreshToken, setRefreshToken] = useState('YOUR_SPOTIFY_REFRESH_TOKEN'); // Replace with your Spotify refresh token

  const user = useSelector((store) => store.user);
  const [artistData, setArtistData] = useState([
    { img: dreyDk, title: 'drey dk', id: 11 },
    { img: AnnieBang, title: 'Annie and the Bang Bang', id: 1 },
    { img: CheapBouquet, title: 'Cheap Bouquet', id: 5 },
    { img: HoneyPlease, title: 'Honey Please', id: 17 },
    { img: KingSizedCoffin, title: 'King Sized Coffin', id: 9 },
    { img: MommyLogBalls, title: 'Mommy Log Balls', id: 16 },
    { img: PityParty, title: 'Pity Party', id: 14 },
    { img: TheWalkerBrothers, title: 'The Walker Brothers', id: 12 },
    { img: TheWeepingCovenant, title: 'The Weeping Covenant', id: 13 },
    { img: AtomicLights, title: 'Atomic Lights', id: 3 },
    { img: SeyiOyinloye, title: 'Seyi Oyinloye', id: 15 },
    { img: RanchoUnicorno, title: 'Rancho Unicorno', id: 2 },
  ]);

const [player, setPlayer] = useState(null);
const [isPaused, setIsPaused] = useState(true);
const [currentTrack, setCurrentTrack] = useState(null);
const [deviceId, setDeviceId] = useState(null);
const [tokenExpirationTime, setTokenExpirationTime] = useState(Date.now() + 3600 * 500)

useEffect(() => {
  const script = document.createElement("script");
  script.src = "https://sdk.scdn.co/spotify-player.js";
  script.async = true;
  document.body.appendChild(script);

  window.onSpotifyWebPlaybackSDKReady = () => {
      const player = new window.Spotify.Player({
          name: 'Web Playback SDK',
          getOAuthToken: cb => { cb(accessToken); },
          volume: 0.5
      });

      setPlayer(player);

      player.addListener('ready', ({ device_id }) => {
          console.log('Ready with Device ID', device_id);
          setDeviceId(device_id);
      });

      player.addListener('not_ready', ({ device_id }) => {
          console.log('Device ID has gone offline', device_id);
      });

      player.addListener('player_state_changed', (state) => {
        if(!state){
          return;
        }
        setCurrentTrack(state.track_window.current_track);
        setIsPaused(state.paused);
      })
      player.connect();
  };
}, [accessToken]);

  const refreshAccessToken = async () => {
    const response = await axios.post('/refresh_token', { refresh_token: refreshToken })
    setAccessToken(response.data.access_token);
    setTokenExpirationTime(Date.now() + response.data.expires_in * 500)
  };

  useEffect(() => {
    const fetchArtistUris = async () => {
      const token = accessToken;
      const updatedArtistData = await Promise.all(artistData.map(async (artist) => {
        const response = await fetch(`https://api.spotify.com/v1/search?q=${encodeURIComponent(artist.title)}&type=artist`, {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
        const data = await response.json();
        const artistUri = data.artists.items[0]?.uri || '';
        return { ...artist, spotifyUri: artistUri };
      }));
      setArtistData(updatedArtistData);
    };

    fetchArtistUris();
  }, [accessToken]);

  useEffect(() => {
    const interval = setInterval(() => {
      if(Date.now() >= tokenExpirationTime - 60000){
        refreshAccessToken()
      }
    }, 60000)

    return () => clearInterval(interval);
  }, [tokenExpirationTime]);

  const playArtist = async (spotifyUri) => {
    const token = accessToken; // Replace with your Spotify OAuth token
    const response = await fetch(`https://api.spotify.com/v1/artists/${spotifyUri.split(':')[2]}/top-tracks?market=US`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    const data = await response.json();
    const topTrackUri = data.tracks[0]?.uri;

    if (topTrackUri) {
      player._options.getOAuthToken((access_token) => {
        fetch(`https://api.spotify.com/v1/me/player/`, {
          method: 'PUT',
          body: JSON.stringify({ 
            device_ids: [deviceId],
            play: true,
           }),
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${access_token}`,
          },
        }).then(() => {
          fetch(`https://api.spotify.com/v1/me/player/play`, {
            method: 'PUT',
            body: JSON.stringify({uris: [topTrackUri]}),
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${access_token}`,
            }
          })
        })
      });
    }
  };



  const [previousArr, setPreviousArr] = useState(() => {
    const savedData = localStorage.getItem('previousArr');
    return savedData ? JSON.parse(savedData) : [];
  });

  console.log(previousArr)


  const ArtistData = [
    {
      img: SeyiOyinloye,
      title: 'Seyi Oyinloye',
      id: 15,
    },
    {
      img: RanchoUnicorno,
      title: 'Rancho Unicorno',
      id: 2,
    },
    {
      img: MommyLogBalls,
      title: 'Mommy Log Balls',
      id: 16,
    },
    {
      img: PityParty,
      title: 'Pity Party',
      id: 14,
    },
    {
      img: dreyDk,
      title: 'Drey Dk',
      id: 11,
    },
    {
      img: AnnieBang,
      title: 'Annie and the Bang Bang',
      id: 1,
    },
    {
      img: AtomicLights,
      title: 'Atomic Lights',
      id: 3,
    },
    {
      img: CheapBouquet,
      title: 'Cheap Bouquet',
      id: 5,
    },
    {
      img: HoneyPlease,
      title: 'Honey Please',
      id: 17,
    },
    {
      img: KingSizedCoffin,
      title: 'King Sized Coffin',
      id: 9,
    },
    {
      img: TheWalkerBrothers,
      title: 'The Walker Brothers',
      id: 12,
    },
    {
      img: TheWeepingCovenant,
      title: 'The Weeping Covenant',
      id: 13,
    },
  ];

  const sortedArtists = artistData.sort(function(a, b){
    if(a.title < b.title){
      return -1;
    }

    if(a.title > b.title){
      return 1;
    }
    return 0;
  })

  console.log("sorted artists a-z!!", sortedArtists)

  return (
    <>
     <div className="container">
      <h1>Welcome, {user.username}!</h1>
        <h2 style={{display:'flex', justifyContent: 'center'}}>{user.type} Dashboard</h2>
      </div>
      
      <div className='div-imageList-title'>
        <h3>All Artists</h3>
        {previousArr.length === 0 ? <p></p> : (
           <h3>Recently Rated Artists </h3>
        ) }
      </div>
      
    <div className='image-list-div'>
    <ImageList sx={{ width: 800, height: 650 }}>
      {sortedArtists.map((item) => (
        <ImageListItem key={item.img} onClick={() => playArtist(item.spotifyUri)}>
          <img
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=248&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            position="below"
          />
        </ImageListItem>
      ))}
    </ImageList>
    <div>
      
    
    </div>
    <React.Fragment>
      <ImageList sx={{ width: 800, height: 650 }}>
      
      {previousArr.length === 0 ? (
        <p>There are no previously rated artists, Rate some!</p>
      ) : (previousArr.map((item) => (
        <ImageListItem key={item.id}>
          <img
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=248&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            position="below"
          />
        </ImageListItem>)
      ))}
      </ImageList>
      </React.Fragment>
    </div>
      
      {currentTrack && (
        <div>
          <h3>Now Playing: {currentTrack.name} by {currentTrack.artists[0].name}</h3>
          <button onClick={() => player.togglePlay()}>{isPaused ? 'Play' : 'Pause'}</button>

        </div>

      )}

    </>
    
  );
}