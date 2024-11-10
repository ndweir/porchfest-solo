import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Swal from 'sweetalert2';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating';
import MusicNoteSharpIcon from '@mui/icons-material/MusicNoteSharp';
import { sizeof } from 'stylis';

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



export default function VenuePrevious(){
  console.log("venue Pervious")
  const [previousVenue, setPreviousVenue] = useState(() => {
    const savedData = localStorage.getItem('previousVenues');
    console.log("set previous venue", !!savedData, JSON.parse(savedData))
    return savedData ? JSON.parse(savedData) : [];
  });

    const [rating, setRating] = useState();
    const user = useSelector(store => store.user);
    const dispatch = useDispatch();
    const userId = user.id;

    const handleUpdateRating = (event) => {
      event.preventDefault();
      Swal.fire({
        title:'Are you sure?',
        text: 'If you update now your current rating will be deleted',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#5cb85c',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes',
        cancelButtonText: 'Cancel'
      }).then((result) => {
        if(result.isConfirmed){
          putRating(event);
        }
      })
    }

    const handleDeleteRating = (event) => {
      event.preventDefault();
      Swal.fire({
        title:'Are you sure?',
        text: 'If you delete now not your current rating will be deleted',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#5cb85c',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes',
        cancelButtonText: 'Cancel'
      }).then((result) => {
        if(result.isConfirmed){
          deleteRating(event);
        }
      })
    }


    const putRating = (event) => {
      event.preventDefault();
  
      if(previousVenue.length === 0) return;

      const firstRatedObj = previousVenue[0];

      if(!firstRatedObj){
        console.error('Rank to Display Previous Ranked!')
        return;
      }

      let data = {
        user_id: userId,
        rating: rating,
        venue_id: firstRatedObj.id,
        type: 'Venue',
      };
  
      dispatch({
        type:'UPDATE_RATING',
        payload: data,
      });
      
      console.log('BEFORE PUT: ', previousVenue)
      const updatedVenue = {...firstRatedObj, rating: rating};
      const removedVenue = previousVenue.shift()
      console.log('AFTER SHIFT: ', previousVenue)
      const takeOutDupes = previousVenue.filter(venue => venue.id !== removedVenue.id)
      console.log('TAKE OUT DUPES AFTER FILTER', takeOutDupes)
      setPreviousVenue([...takeOutDupes, updatedVenue]);
      console.log('AFTER PUT: ', previousVenue)

    }

    const skipRating = (event) => {
      event.preventDefault();

      if(previousVenue.length === 0) return;

      const skippedVenue = previousVenue.shift();
      const takeOutDupes = previousVenue.filter(venue => venue.id !== skippedVenue.id)
      setPreviousVenue([...takeOutDupes, skippedVenue]);
      console.log('AFTER Skip', previousVenue)
    }


  const deleteRating = (event) => {
    console.log("--- delete rating function ---")
    event.preventDefault();
    console.log("previous array length",previousVenue.length)
    if(previousVenue.length === 0) return;

    const firstRatedObj = previousVenue[0];

    let data = {
      id: userId,
      venue_id: firstRatedObj.id,
      type: 'Venue',
    }

    dispatch({
      type: "DELETE_RATING",
      payload: data,
    });


    const removedVenue = previousVenue.slice(1);
    setPreviousVenue(removedVenue)  
    console.log("AFTER DELETE:", removedVenue)
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
        {/* <h6>{customIcons[value].label}</h6> */}
        </span>;
      }
      
      IconContainer.propTypes = {
        value: PropTypes.number.isRequired,
      };

      

      const currentObj = previousVenue[0];
     // console.log('PREVIOUS ADD AT 0', previousVenue.previouslyRated[0])
      if (previousVenue.length === 0) {
        return (<p>No previously rated venuess, Rate some!</p>);
      } 
      
      if(!currentObj){
        return (<p>No venue found</p>);
      }

    return (
      <div className="container" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
      <h1>Previously Rated Venuess</h1>

          <h1 className='rankTitles'>{currentObj.title}</h1>
          <h2 style={{fontStyle: 'italic'}} className='rankTitles'>{currentObj.genre}</h2>
            <h2 className='rankTitles'>Current Rating: {currentObj.rating}</h2>

          <form style={{display: 'flex', justifyContent: 'center'}} onSubmit={handleUpdateRating}>
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
        <button className='btn' type='submit'>Update Rating</button>
        <button className='btn' onClick={skipRating}>Skip</button>
        <button className='btn' onClick={handleDeleteRating}>Delete</button>
      </form>
  

  
  
   <Stack direction="row" spacing={2} justifyContent={"center"} style={{ marginBottom: '20px' }}>
  <Avatar
    alt={currentObj.title}
    src={currentObj.img}
    sx={{ width: 850, height: 600}}
    variant='square'
  />
</Stack >

<div className='rankTitles'>
    <h2>Current Previously Rated</h2>
  </div>

</div>
    );
}