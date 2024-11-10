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
import axios from 'axios';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import { makeStyles } from '@mui/styles';
import card from "../assets/theme/components/card/index"
import Wave from 'react-wavify';

export default function VenueDashboard(){
  const user = useSelector((store) => store.user);
  const [artistData, setArtistData] = useState([
    { img: SeyiOyinloye, title: 'Seyi Oyinloye', id: 15, rating: null, genre: `Contemporary: Afrobeats, Rap, & Pop.`, bio: `An active-driven musical activist with sounds of Afro Beats, Hip Hop, Reggae, and Pop; but not respectfully bound or limited to them as genres. His lyrics vibrate the positive energy of the great liberators of our time. “Our ability to heal is rooted in access to our own stories,” says Oyinloye. He uses his skills, tools, and platforms as a storyteller to empower and encourage empathy, and Justice.`},
    { img: RanchoUnicorno, title: 'Rancho Unicorno', id: 2, rating: null, genre: `Nostalgic Acoustic Cover Duo
`, bio: `Rancho Unicorno formed after college friends Felice and Kareem combined their musical tastes and talents to curate a set of acoustic tunes that'll have y'all dancing and singing to a new generation of classics. Come join us for a celebration of music, humans, and unicorns!` },
    { img: MommyLogBalls, title: 'Mommy Log Balls', id: 16, rating: null, genre: `Garage Rock / Performance Art`, bio: `Mommy Log Balls was formed in the early 90s by members of Duck Kicking Vulture, Yanomamos, and Likehell and continues the tradition of the proto-punk roots of garage rock and avant-garde noise and performance art.` },
    { img: PityParty, title: 'Pity Party', id: 14, rating: null, genre: `Indie rock, acoustic, covers
`, bio: `Pity Party is an indie rock band from Minneapolis, MN. The band is made up of Abbie (vocals, synth), Tim (guitar, vocals), Micah (bass, vocals), and Jonny (drums). They started as a cover band before deciding to start writing together. They are redefining nostalgia with their covers of 80s, 90s, and 00s songs. They are also working on an EP that will be released later this year. At Porchfest, they will have a Mini Party!! Join Micah and Abbie as they sit on a porch and play acoustic covers and original songs!` },
    { img: dreyDk, title: 'drey dk', id: 11, rating: null, genre: `Lo-Fi, Bedroom Pop, Alternative`, bio: `drey dk is a songwriter, multi-instrumentalist, & producer based in Minneapolis, MN. They debuted their first single back in September of 2019, with a couple more singles and two EP’s to follow (as recent as May of 2022). Through minimalism, melodic/harmonic chord building, instrumental looping/layering and soundscapes, drey dk is able to pull you into their sonic yet emotive realm they create. Drawing inspiration from artists like Cocteau Twins, Beach House, and Caroline Polachek.` },
    { img: AnnieBang, title: 'Annie and the Bang Bang', id: 1, rating: null, genre: 'Rock And Roll Story Songs', bio: `Annie and the Bang Bang are a four-piece rock band from Minneapolis. Inspired by music they heard as kids in the seventies and by the songs they put on mixtapes in the nineties, they're a little Fleetwood Mac meets Nirvana or Heart meets R.E.M. A classic sound from a parallel universe, they make little drive-in movies you can dance to.` },
    { img: AtomicLights, title: 'Atomic Lights', id: 3, rating: null, genre: `Punk, PopPunk`, bio: `Atomic Lights are a 3 piece punk band from Minneapolis. They started in the summer of 2012 and have been melting faces ever since.` },
    { img: CheapBouquet, title: 'Cheap Bouquet', id: 5, rating: null, genre: `Pop-Punk/Emo`, bio: `Brand new 3-piece powerhouse Cheap Bouquet has hit the ground running in Minneapolis and aren't looking back. The trio is carving out a new path in the pop punk scene, through unapologetic authenticity and drawing influence from icons across the rock and alternative spectrum. Fronted by long time listener, first time frontman Sam Awad, with Twin City scene vets Chelsea Oxborough and Brandon Evilla on guitars, Cheap Bouquet is the amalgamation of a broad range of individual experience. The band has found their footing with a dynamic sound, candid storytelling, and, more than anything else, a genuine joy to be sharing their music.`  },
    { img: HoneyPlease, title: 'Honey Please', id: 17, rating: null, genre: `Indie Pop Rock`, bio: `Honey Please is an indie pop rock band out of Minneapolis Minnesota. Through a shared joy of musical expression and a love of performing, they have delighted many ears around the Twin Cities area. The band formed in the fall of 2022 and have been creating new tunes since. All original songs are written by singer-guitarist Sam Scheuneman who has been writing songs since he learned to speak. Bassist Dawson Ludvigson adds intricate bass melodies under a light melody sung by Sam. Guitarist Jack Nobel shreds lead lines to give each song its unique timbre. On the drums, Joe Kiser continues to keep beats fresh and alive with a lively and energetic tone. Together these musicians create a sound that feels complete and is full of emotion. When playing live the audience just cannot stop dancing and moving along to the beat. Honey Please has released two singles "Losing Composure/Flute" in December '23 and are currently working on their first studio album set to release August '24.` },
    { img: KingSizedCoffin, title: 'King Sized Coffin', id: 9, rating: null, genre: `Gothic Jazz / Doom Folk
`, bio: `King Sized Coffin is a Minneapolis band with a lot of members, a lot of instruments, and a lot of spooky songs. For Fans of Tom Waits, Nick Cave, Harley Poe, The Cure, and The Misfits.` },
    { img: TheWalkerBrothers, title: 'The Walker Brothers', id: 12, rating: null, genre: `Folk, Funk, Latino, Singer/Songwriter
`, bio: `Rooted in the Twin Cities, brothers Jay and Joseph Walker proudly express their Colombian/American heritage through original compositions which feature lyrics in English, Spanish, and Portuguese. Their performances feature expressive interpretations of timeless classics, showcasing an eclectic repertoire and wide range of musical abilities.
` },
    { img: TheWeepingCovenant, title: 'The Weeping Covenant', id: 13, rating: null, genre: `Americana / Cathartic Country
`, bio: `Based in St. Paul, MN, The Weeping Covenant is headed by vocalist and songwriter, Michael Beatrez. Writing from a lyrically driven perspective, he generally touches on themes of hope, vulnerability, and love. Beatrez leans into his comfortable sweet spot by singing over soft fingerstyle guitar ballads and rock songs that drive with measured intensity.`},
  ]);

  const [player, setPlayer] = useState(null);
  const [isPaused, setIsPaused] = useState(true);
  const [currentTrack, setCurrentTrack] = useState(null);
  const [deviceId, setDeviceId] = useState(null);
  const [accessToken, setAccessToken] = useState(`BQCHA032HVCfHgafxIX_o9beeq3l5L9uzYU7gcj_3b_Vyqsgr5QgDit1paRmoIKTkHP8J8lBNnV1_KyXz5qwwAmxv7Xx9uYIsQvbcuwakn21dxT-lk9Cc99dejyNNjshJ99m5Kqo3SBHmJ743VEGlAq_8Ag3GR4nZQdzJrzllq7INQ3xDhujP36Hn5UtaQSRbt9AAuJXM_TttNK_
`); 
 const [expandedBio, setExpandedBio] = useState(null);

useEffect(() => {
  if (!accessToken) return;
  const script = document.createElement('script');
  script.src = 'https://sdk.scdn.co/spotify-player.js';
  script.async = true;
  document.body.appendChild(script);

  window.onSpotifyWebPlaybackSDKReady = () => {
      const player = new window.Spotify.Player({
          name: 'Web Playback SDK',
          getOAuthToken: cb => { 
            cb(accessToken);
             },
          volume: 0.5,
          robustness: 'SW_SECURE_CRYPTO'
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
        console.log('Artist URI', artistUri)
        return { ...artist, spotifyUri: artistUri };
      }));
      setArtistData(updatedArtistData);
    };

    if(accessToken){
      fetchArtistUris();
    }

  }, [accessToken]);


  const playArtist = async (spotifyUri) => {
    if(!player){
      console.error('Player is not initialized!');
      return;
    }

    try {
      if (currentTrack && currentTrack.artists[0].uri === spotifyUri) {
          if(isPaused){
            player.resume().then(() => {
              setIsPaused(false);
            }).catch((error) => {
              console.error('Error Pausing Playback', error);
            });
          } else {
            player.pause().then(() => {
              setIsPaused(true);
            }).catch((err) => {
              console.error('Error Pausing', err)
            });
          }
      } else {
        const token = accessToken;
        const response = await fetch(`https://api.spotify.com/v1/artists/${spotifyUri.split(':')[2]}/top-tracks?market=US`, {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
        const data = await response.json();
        const topTrackUri = data.tracks[0]?.uri;

        if (topTrackUri) {
          player._options.getOAuthToken((access_token) => {
             fetch(`https://api.spotify.com/v1/me/player`, {
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
                body: JSON.stringify({ uris: [topTrackUri] }),
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${access_token}`,
                },
              }).then(() => {
                setIsPaused(false);
                setCurrentTrack(data.tracks[0]);
              }).catch((error) => {
                console.error('Error playing track:', error);
              });
            }).catch((error) => {
              console.error('Error transferring playback:', error);
            });
          });
        }
      }
    } catch (error) {
      console.error('Error in playArtist:', error);
    }
  };

  const [previousArr, setPreviousArr] = useState(() => {
    const savedData = localStorage.getItem('previousArr');
    return savedData ? JSON.parse(savedData) : [];
  });

  const sortedArtists = artistData.sort(function(a, b){
    if(a.title < b.title){
      return -1;
    }

    if(a.title > b.title){
      return 1;
    }
    return 0;
  })

  const handleBioClick = (id) => {
    setExpandedBio(expandedBio === id ? null : id);
  }

  const getCardMediaStyle = (id) => {
    const moveDownIds = [1, 3, 9, 12, 13, 17];
    return moveDownIds.includes(id) ? {objectFit: 'cover', objectPosition: 'top'} : {}
  }

  console.log("sorted artists a-z!!", sortedArtists)


  const cardStyles = makeStyles(() => ({
    root: card.styleOverrides.root,
  }));

  // font-family: "Ewert", serif;
  // font-weight: 400;
  // font-style: normal;

  return (
    

    <div>
      <h2 style={{ display: 'flex', justifyContent: 'center', fontFamily: "Ewert", fontWeight: '400', fontStyle: 'normal'}}>{user.type} Dashboard</h2>

      {currentTrack && (
        <div style={{ marginTop: '20px', textAlign: 'center' }}>
          <Typography variant="h4" style={{marginBottom: '10px', fontFamily: "Rye"}}>
            Now Playing: {currentTrack.name} by {currentTrack.artists[0].name}
          </Typography>
        </div>
      )}

      {isPaused ? (
        <Wave fill='	#1DB954'
         paused={true}
         style={{ display: 'flex' }}
         options={{
         height: 20,
         amplitude: 20,
         speed: 0.3,
         points: 3
       }} />

      ) : (
        <Wave fill='	#1DB954'
         paused={false}
         style={{ display: 'flex' }}
         options={{
         height: 40,
         amplitude: 40,
         speed: 0.3,
         points: 3
       }} />

      )
    
    }
      {/* font-family: "Ewert", serif;
  font-weight: 400;
  font-style: normal; */}

      <Grid container spacing={3}>
        {sortedArtists.map((item) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={item.img}
                alt={item.title}
                style={getCardMediaStyle(item.id)}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" style={{fontFamily: "Rye"}}>
                  {item.title}
                </Typography>
                <Typography 
                variant="body2" 
                color="text.secondary"
                noWrap= {!expandedBio || expandedBio !== item.id}
                onClick={() => handleBioClick(item.id)}
                style={{ cursor: 'pointer', fontFamily: "Sancreek" }}
                >
                  {item.bio}
                </Typography>
              </CardContent>
              <CardActions>
                <IconButton onClick={() => playArtist(item.spotifyUri)}>
                  {currentTrack && currentTrack.artists[0].name === item.title && !isPaused ? (
                    <PauseIcon />
                  ) : (
                    <PlayArrowIcon />
                  )}
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      
    </div>

  );
}

