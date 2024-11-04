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

export default function VenueDashboard(){
    
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
      title: 'drey dk',
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

  const user = useSelector((store) => store.user);
  return (
    <>
     <div className="container">
      <h1>Welcome, {user.username}!</h1>
        <p>Your ID is: {user.id}</p>
        <h2 style={{display:'flex', justifyContent: 'center'}}>{user.type} Dashboard</h2>
      </div>
      
      <div className='div-imageList-title'>
        <h3>Unranked Artists</h3>
        <h3>Previously Ranked Artists </h3>
      </div>
      
    <div className='image-list-div'>
    <React.Fragment>
      <ImageList sx={{ width: 500, height: 450 }}>
      {ArtistData.map((item) => (
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
      </React.Fragment>
    
    <div>
      <ImageList sx={{ width: 500, height: 450 }}>
      {ArtistData.map((item) => (
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
    
    </div>

    </div>
      
    </>
    
  );
}