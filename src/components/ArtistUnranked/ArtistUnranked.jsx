import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating';
import MusicNoteSharpIcon from '@mui/icons-material/MusicNoteSharp';
import { sizeof } from 'stylis';
import { Description } from '@mui/icons-material';

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
    const [previousVenue, setPreviousVenue] = useState(() => {
      const savedData = localStorage.getItem('previousVenues');
      return savedData ? JSON.parse(savedData) : [];
    });
    const lastAction = useSelector(store => store.lastAction);
    const [rating, setRating] = useState();
    const user = useSelector(store => store.user);
    const dispatch = useDispatch();
    const deletedVenue = localStorage.getItem('deletedVenue');
    const userId = user.id;
    const [venueData, setVenueData] = useState(() => {
      const savedData = localStorage.getItem('venueData');
      return savedData ? JSON.parse(savedData) : [
        {
          img: RadioDr,
          title: '3 Radio Dr',
          id: 18,
          latLng: { lat: 44.94740635877929, lng: -92.9343309738345 },
        },
        {
          img: SummitAve,
          title: '1006 Summit Ave',
          id: 26,
          latLng: { lat: 44.94120883811483, lng: -93.14256143575612 },
        },
        {
          img: BryantAve,
          title: '824 Bryant Ave',
          id: 19,
          latLng: { lat: 44.97002867915047, lng: -93.29061761616248 },
        },
        {
          img: DaleSt,
          title: '1738 Dale St',
          id: 20,
          latLng: { lat: 44.99408635375921, lng: -93.12509738732587 },
        },
      
        {
          img: DupontAve,
          title: '540 Dupont Road S',
          id: 7,
          latLng: { lat: 44.813153049570786, lng: -93.29360640267596 },
        },
        {
          img: GrandAve,
          title: '1979 Grand Ave',
          id: 6,
          latLng: { lat: 44.94066186892347, lng: -93.18405916635281 },
        },
        {
          img: HennepinAve,
          title: '901 E Hennepin Ave',
          id: 21,
          latLng: { lat: 44.99161477176238, lng: -93.24192975664187 },
        },
        {
          img: IrvingAve,
          title: '2292 Lake of the Isles Pkwy E',
          id: 22,
          latLng: { lat: 44.96155151429921, lng: -93.30199831949783 },
        },
        {
          img: JeffersonAve,
          title: '2229 Jefferson Ave',
          id: 8,
          latLng: { lat: 44.93079580931145, lng: -93.19487673150627 },
        },
        {
          img: LakeSt,
          title: '1999 E Lake St',
          id: 23,
          latLng: { lat: 44.948489069812375, lng: -93.24363177383447 },
        },
        {
          img: LincolnAve,
          title: '5390 Lincoln Ave',
          id: 24,
          latLng: { lat: 44.93908828846518, lng: -93.15732920267035 },
        },
        {
          img: LyndaleAve,
          title: '5136 N Lyndale Ave',
          id: 25,
          latLng: { lat: 45.048760494914035, lng: -93.28399849841527 },
        },
      ];
  });

  useEffect(() => {
    localStorage.setItem('venueData', JSON.stringify(venueData));
  }, [venueData]);

  useEffect(() => {
    localStorage.setItem('previousVenues', JSON.stringify(previousVenue));
  }, [previousVenue]);


  const saveRating = (event) => {
    event.preventDefault();
    // console.log(userId)
    // console.log(rating)

    if(venueData.length === 0) return;

    const PrevPicObj = venueData[0];

    let data = {
      user_id: userId,
      rating: rating,
      artist_id: PrevPicObj.id,
      type: 'Venue',
    };

    dispatch({
      type: "ADD_RATING",
      payload: data,
    });

    venueData[0].rating = rating;
    const removedVenue = venueData.shift()
    const takeOutDupes = venueData.filter(venue => venue.id !== removedVenue.id)
    setPreviousVenue([...takeOutDupes, removedVenue]);
    
    
    setPreviousVenue([...previousVenue, PrevPicObj])

      dispatch({
        type: "ADD_RATED",
        payload: PrevPicObj,
      });
      console.log('previously rated', previousVenue)
};

const skipRating = (event) => {
  event.preventDefault();

  if(venueData.length === 0) return;
  
  const skippedVenue = venueData.shift();
  const takeOutDupes = venueData.filter(venue => venue.id !== skippedVenue.id)
  setVenueData([...takeOutDupes, skippedVenue]);

  console.log('AFTER Skip', venueData)
}

const addVenueBack = (venue) => {
  setVenueData([...venueData, venue]);
};

useEffect(() => {
  if(lastAction && lastAction.type === "ADD_VENUE_BACK"){
    addVenueBack(lastAction.payload)
  }  
}, [lastAction]);

if(venueData.length === 0){
  return <p>No More Venues to Rate!</p>
}




    
    const StyledRating = styled(Rating)(({ theme }) => ({
      '& .MuiRating-iconEmpty .MuiSvgIcon-root': {
        color: theme.palette.secondary.main,
      },
    }));
      
    const customIcons = {
      1: {
        icon: <MusicNoteSharpIcon  color="error" />,
        label: 'Yikes',
      },
      2: {
        icon: <MusicNoteSharpIcon  color="warning" />,
        label: 'Meh',
      },
      3: {
        icon: <MusicNoteSharpIcon  color="yellow" />,
        label: 'OK',
      },
      4: {
        icon: <MusicNoteSharpIcon  color="info" />,
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
    
    return (
      <div className="container" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
      <h1>Rate Venues</h1>
  
    <>
      <h1 style={{display: 'flex', justifyContent: 'center'}}>{venueData[0].title}</h1>
      <h2 style={{display: 'flex', justifyContent: 'center', marginBottom: '60px'}}>{venueData[0].genre}</h2>
    </>
  
         <div className="tooltip" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                <span className="tooltiptext">Rate 1 to 5</span>
                <form style={{display: 'flex', justifyContent: 'center'}} onSubmit={saveRating}>
    

                    <StyledRating
                      name="highlight-selected-only"
                      defaultValue={3}
                      IconContainerComponent={IconContainer}
                      getLabelText={(value) => {customIcons[value].label}}
                      highlightSelectedOnly
                      size='large'
                      value={rating}
                      onChange={(event, newValue) => setRating(newValue)}
                    />
              <button className='btn' type='submit'>Save Rating</button>
              <button className='btn' onClick={skipRating}>Skip</button>
            </form>
  
                
              </div>
        
  <Stack direction="row" spacing={2} justifyContent={"space-around"} >
    {previousVenue.length > 0 && (
      <Avatar
      alt={previousVenue[previousVenue.length - 1].title}
      src={previousVenue[previousVenue.length - 1].img}
      sx={{ maxWidth: 450, maxHeight: 450, width: 450, height: 450}}
      variant='square'
      />
    )}

        <Avatar
        alt={venueData[0].title}
        src={venueData[0].img}
        sx={{ maxWidth: 750, maxHeight: 650, width: 750, height:  650}}
        variant='square'
        />
        
        <Avatar
        alt={venueData[1].title}
        src={venueData[1].img}
        sx={{ maxWidth: 450, maxHeight: 450, width: 450, height:  450}}
        variant='square'
        />

</Stack>



  {/* <h4>Select a rating below, click to confirm your selection</h4>
  <h4>Once your selection is confirmed, click save to save your rating and move to the next selection</h4>
  <h4>Click Skip to go to the next selection without saving your rating</h4> */}
  
  <div className='rankTitles'>
    {previousVenue.length > 0 && (
      <h1>Previous</h1>
    )}
    <h1>Current</h1>
    <h1>Next</h1>
  </div>

</div>

    );
}

