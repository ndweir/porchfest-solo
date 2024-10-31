import React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

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


export default function ArtistUnranked(){
     
    return (
        <div className="container">
    <h1>Rank Venues</h1>
    <div className='rankTitles'>
      <h2>Previous</h2>
      <h2>Current</h2>
      <h2>Next</h2>
    </div>
    
     <Stack direction="row" spacing={2}>
    <Avatar
      alt="540 Dupont Ave"
      src={DupontAve}
      sx={{ width: 350, height: 350 }}
      variant='square'
    />
   

    <Avatar
      alt="1738 Dale St"
      src={DaleSt}
      sx={{ width: 500, height: 500 }}
      variant='square'
    />

    <Avatar
      alt="5390 Lincoln Ave"
      src={LincolnAve}
      sx={{ width: 350, height: 350 }}
      variant='square'
    />
  </Stack>

  <form style={{display: 'flex', justifyContent: 'center'}}>
      <input placeholder='Rank'></input>
      <button className='btn'>Submit</button>
      <button className='btn'>Skip</button>
    </form>
  </div>

    );
}

