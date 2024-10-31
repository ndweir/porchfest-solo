import React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

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


export default function VenueUnranked(){
    return (
        <div className="container">
            <h1>Rank Artists</h1>
        <div className='rankTitles'>
          <h2>Previous</h2>
          <h2>Current</h2>
          <h2>Next</h2>
        </div>
        
         <Stack direction="row" spacing={2}>
        <Avatar
          alt="The Walker Brothers Band"
          src={TheWalkerBrothers}
          sx={{ width: 350, height: 350 }}
          variant='square'
        />
    
        <Avatar
          alt="Seyi Oyinloye"
          src={SeyiOyinloye}
          sx={{ width: 500, height: 500 }}
          variant='square'
        />
        <Avatar
          alt="drey dk"
          src={dreyDk}
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