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


import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating';
import MusicNoteSharpIcon from '@mui/icons-material/MusicNoteSharp';
import { sizeof } from 'stylis';

export default function VenuePrevious(){

    const StyledRating = styled(Rating)(({ theme }) => ({
        '& .MuiRating-iconEmpty .MuiSvgIcon-root': {
          color: theme.palette.action.disabled,
        },
      }));
      
      const customIcons = {
        1: {
          icon: <MusicNoteSharpIcon  color="error" />,
          label: 'Yikes',
        },
        2: {
          icon: <MusicNoteSharpIcon  color="yellow" />,
          label: 'Meh',
        },
        3: {
          icon: <MusicNoteSharpIcon  color="blue" />,
          label: 'OK',
        },
        4: {
          icon: <MusicNoteSharpIcon  color="success" />,
          label: 'Great',
        },
        5: {
          icon: <MusicNoteSharpIcon  color="success" />,
          label: 'Amazing',
        },
      };
      
      function IconContainer(props) {
        const { value, ...other } = props;
        return <span {...other}>
        <div>{customIcons[value].icon}</div>
        <h6>{customIcons[value].label}</h6>
        </span>;
      }
      
      IconContainer.propTypes = {
        value: PropTypes.number.isRequired,
      };


    return (
        <div className="container" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
            <h1>Previously Ranked Artists</h1>
        <div className='rankTitles'>
          <h2>Previous</h2>
          <h2>Current</h2>
          <h2>Next</h2>
        </div>
        
         <Stack direction="row" spacing={2}>
        <Avatar
          alt="Mommy Log Balls"
          src={MommyLogBalls}
          sx={{ width: 350, height: 350 }}
          variant='square'
        />
    
        <Avatar
          alt="Pity Party"
          src={PityParty}
          sx={{ width: 500, height: 500 }}
          variant='square'
        />
        <Avatar
          alt="Cheap Bouquet"
          src={CheapBouquet}
          sx={{ width: 350, height: 350 }}
          variant='square'
        />
      </Stack>

        <h4>Select a rating below, click to confirm your selection</h4>
        <h4>Once your selection is confirmed, click save to save your rating and move to the next selection</h4>
        <h4>Click Skip to go to the next selection without saving your rating</h4>

      <form style={{display: 'flex', justifyContent: 'center'}}>
      <StyledRating
            name="highlight-selected-only"
            defaultValue={3}
            IconContainerComponent={IconContainer}
            getLabelText={(value) => customIcons[value].label}
            highlightSelectedOnly
            size='large'
          />
          <button className='btn'>Save Rating</button>
          <button className='btn'>Skip</button>
          <button className='btn'>Delete</button>
        </form>
      </div>

    );
}