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

export default function VenueDashboard(){
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

  const sortedArtists = ArtistData.sort(function(a, b){
    if(a.title < b.title){
      return -1;
    }

    if(a.title > b.title){
      return 1;
    }
    return 0;
  })

  console.log("sorted artists a-z!!", sortedArtists)

  const user = useSelector((store) => store.user);
  return (
    <>
     <div className="container">
      <h1>Welcome, {user.username}!</h1>
        <p>Your ID is: {user.id}</p>
        <h2 style={{display:'flex', justifyContent: 'center'}}>{user.type} Dashboard</h2>
      </div>
      
      <div className='div-imageList-title'>
        <h3>All Artists</h3>
        {previousArr.length === 0 ? <p></p> : (
           <h3>Recently Rated Artists </h3>
        ) }
      </div>
      
    <div className='image-list-div'>
    <ImageList sx={{ width: 500, height: 450 }}>
      {sortedArtists.map((item) => (
        <ImageListItem key={item.img}>
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
      <ImageList sx={{ width: 500, height: 450 }}>
      
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
      
    </>
    
  );
}