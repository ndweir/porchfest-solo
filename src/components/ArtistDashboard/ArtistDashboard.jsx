import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

import RadioDr from '../VenuePhotos/RadioDr.jpeg'
import BryantAve from '../VenuePhotos/BryantAve.jpeg'
import DaleSt from '../VenuePhotos/DaleSt.jpeg'
import DupontAve from '../VenuePhotos/DupontAve.jpeg'
import GrandAve from '../VenuePhotos/GrandAve.jpeg'
import HennepinAve from '../VenuePhotos/HennepinAve.jpeg'
import IrvingAve from '../VenuePhotos/IrvingAve.jpeg'
import JeffersonAve from '../VenuePhotos/JeffersonAve.jpeg'
import LakeSt from '../VenuePhotos/LakeSt.jpeg'
import LincolnAve from '../VenuePhotos/LincolnAve.jpeg'
import LyndaleAve from '../VenuePhotos/LyndaleAve.jpeg'
import SummitAve from '../VenuePhotos/SummitAve.jpeg'

export default function ArtistDashboard(){

  const VenueData = [
    {
      img: RadioDr,
      title: '3 Radio Dr',
      id: 18,
    },
    {
      img: SummitAve,
      title: '1006 Summit Ave',
      id: 26,
    },
    {
      img: BryantAve,
      title: '824 Bryant Ave',
      id: 19,
    },
    {
      img: DaleSt,
      title: '1738 Dale St',
      id: 20,
    },
    {
      img: DupontAve,
      title: '540 Dupont Ave',
      id: 7,
    },
    {
      img: GrandAve,
      title: '1979 Grand Ave',
      id: 6,
    },
    {
      img: HennepinAve,
      title: '901 Hennepin Ave',
      id: 21,
    },
    {
      img: IrvingAve,
      title: '2292 Irving Ave',
      id: 22,
    },
    {
      img: JeffersonAve,
      title: '2229 Jefferson Ave',
      id: 8,
    },
    {
      img: LakeSt,
      title: '1999 Lake St',
      id: 23,
    },
    {
      img: LincolnAve,
      title: '5390 Lincoln Ave',
      id: 24,
    },
    {
      img: LyndaleAve,
      title: '5136 Lyndale Ave',
      id: 25,
    },
  ];

  const user = useSelector((store) => store.user);
  return (
    <>
     <div className="container">
      <h1>Welcome, {user.username}!</h1>
        <h2 style={{display:'flex', justifyContent: 'center'}}>{user.type} Dashboard</h2>
      </div>
      
      <div className='div-imageList-title'>
        <h3>Unrated Venues </h3>
        <h3>Previously Rated Venues</h3>
      </div>
      
    <div className='image-list-div'>
    <React.Fragment>
      <ImageList sx={{ width: 500, height: 450 }}>
      {VenueData.map((item) => (
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
      {VenueData.map((item) => (
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