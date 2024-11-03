import React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';

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

import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating';
import MusicNoteSharpIcon from '@mui/icons-material/MusicNoteSharp';
import { sizeof } from 'stylis';

export default function ArtistPrevious(){
  const [rating, setRating] = useState();
  const user = useSelector(store => store.user);
  const dispatch = useDispatch();
  const userId = user.id;
  const testVenueId = 8;

  const deleteRating = (event) => {
    event.preventDefault();

    let data = {
      id: userId,
      venue_id: testVenueId,
      type: 'Venue',
    }

    dispatch({
      type: "DELETE_RATING",
      payload: data,
    })

  }

  const saveRating = (event) => {
    event.preventDefault();
    console.log(userId)
    console.log(rating)

    let data = {
      user_id: userId,
      rating: rating,
      venue_id: testVenueId,
      type: 'Venue',
    };

    dispatch({
      type: "ADD_RATING",
      payload: data,
    });

    // iterate to next photo, change out artistID 


}


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
            <h1>Previously Ranked Venues</h1>
    <div className='rankTitles'>
      <h2>Previous</h2>
      <h2>Current</h2>
      <h2>Next</h2>
    </div>
    
     <Stack direction="row" spacing={2}>
    <Avatar
      alt="5136 Lyndale Ave"
      src={LyndaleAve}
      sx={{ width: 350, height: 350 }}
      variant='square'
    />

    <Avatar
      alt="901 Hennepin Ave"
      src={HennepinAve}
      sx={{ width: 500, height: 500 }}
      variant='square'
    />
    <Avatar
      alt="1999 Lake St"
      src={LakeSt}
      sx={{ width: 350, height: 350 }}
      variant='square'
    />
  </Stack>

  <h4>Select a rating below, click to confirm your selection</h4>
  <h4>Once your selection is confirmed, click save to save your rating and move to the next selection</h4>
  <h4>Click Skip to go to the next selection without saving your rating</h4>

  <form style={{display: 'flex', justifyContent: 'center'}} onSubmit={saveRating}>
  <StyledRating
            name="highlight-selected-only"
            defaultValue={3}
            IconContainerComponent={IconContainer}
            getLabelText={(value) => customIcons[value].label}
            highlightSelectedOnly
            size='large'
            value={rating}
            onChange={(event, newValue) => {setRating(newValue)}}
          />
      <button className='btn' type='submit'>Save Rating</button>
      <button className='btn'>Skip</button>
      <button className='btn' onClick={deleteRating}>Delete</button>
    </form>
  </div>

    );
}