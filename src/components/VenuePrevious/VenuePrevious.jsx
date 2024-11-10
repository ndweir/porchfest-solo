import React, { useEffect, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { useSelector, useDispatch } from 'react-redux';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import Rating from '@mui/material/Rating';
import MusicNoteSharpIcon from '@mui/icons-material/MusicNoteSharp';
import { sizeof } from 'stylis';
import Swal from 'sweetalert2';
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
import Wave from 'react-wavify';

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
import previouslyRated from '../../redux/reducers/previouslyRated.reducer';




export default function VenuePrevious(){
  console.log("Venue Pervious")
  const [previousArr, setPreviousArr] = useState(() => {
    const savedData = localStorage.getItem('previousArr');
    console.log("set previous artist", !!savedData, JSON.parse(savedData))
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
  
      if(previousArr.length === 0) return;

      const firstRatedObj = previousArr[0];

      if(!firstRatedObj){
        console.error('Rank to Display Previous Ranked!')
        return;
      }

      let data = {
        user_id: userId,
        rating: rating,
        artist_id: firstRatedObj.id,
        type: 'Artist',
      };
  
      dispatch({
        type:'UPDATE_RATING',
        payload: data,
      });
      
      console.log('BEFORE PUT: ', previousArr)
      const updatedArtist = {...firstRatedObj, rating: rating};
      const removedArtist = previousArr.shift()
      console.log('AFTER SHIFT: ', previousArr)
      const takeOutDupes = previousArr.filter(artist => artist.id !== removedArtist.id)
      console.log('TAKE OUT DUPES AFTER FILTER', takeOutDupes)
      setPreviousArr([...takeOutDupes, updatedArtist]);
      console.log('AFTER PUT: ', previousArr)

    }

    const skipRating = (event) => {
      event.preventDefault();

      if(previousArr.length === 0) return;

      const skippedArtist = previousArr.shift();
      const takeOutDupes = previousArr.filter(artist => artist.id !== skippedArtist.id)
      setPreviousArr([...takeOutDupes, skippedArtist]);
      console.log('AFTER Skip', previousArr)
    }


  const deleteRating = (event) => {
    console.log("--- delete rating function ---")
    event.preventDefault();
    console.log("previous array length",previousArr.length)
    if(previousArr.length === 0) return;

    const firstRatedObj = previousArr[0];

    let data = {
      id: userId,
      artist_id: firstRatedObj.id,
      type: 'Artist',
    }

    dispatch({
      type: "DELETE_RATING",
      payload: data,
    });


    const removedArtist = previousArr.shift();  
    console.log("AFTER DELETE:", previousArr)
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

      

      const currentObj = previousArr[0];
     // console.log('PREVIOUS ADD AT 0', previousArr.previouslyRated[0])
      if (previousArr.length === 0) {
        return (<p>No previously rated artists, Rate some!</p>);
      } 
      
      if(!currentObj){
        return (<p>No artist found</p>);
      }

      
    return (
        <div className="container" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
            
            <h1>Previously Rated Artists</h1>

                <h1 style={{display: 'flex', justifyContent: 'center', fontFamily: "Ewert"}}>{currentObj.title}</h1>
                <h2  className='rankTitles'>{currentObj.genre}</h2>
                  <h3 className='rankTitles'>Current Rating: {currentObj.rating}</h3>
                  <h3 style={{display: 'flex', justifyContent: 'center'}}>New Rating: {rating}</h3>


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

<div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
<Card style={{maxWidth: 450, maxHeight: 350, width: 450, height:  350}}>
        <CardMedia
          component="img"
          maxHeight={400}
          maxWidth = {300}
          height={300}
          width={400}
          image={currentObj.img}
          alt={currentObj.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" style={{fontFamily: "Rye"}}>
          {currentObj.title}
          </Typography>
        </CardContent> 
      </Card>


</div>
     


      <div className='rankTitles' style={{fontFamily: 'Ewert'}}>
          <h2>Current Previously Rated</h2>
        </div>
       
        {/* <h4>Select a rating below, click to confirm your selection</h4>
        <h4>Once your selection is confirmed, click save to save your rating and move to the next selection</h4>
        <h4 style={{ marginBottom: '40px' }}>Click Skip to go to the next selection without saving your rating</h4>

        */}

      
      </div>

    );
}