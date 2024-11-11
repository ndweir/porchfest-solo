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
      </span>;
    }
    
    IconContainer.propTypes = {
      value: PropTypes.number.isRequired,
    };
    
    return (
      <div className="container" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                  <h1>Rate Venues</h1>
              
                <>
                  <h1 style={{display: 'flex', justifyContent: 'center', fontFamily: "Ewert"}}>{venueData[0].title}</h1>
                  <h2 style={{display: 'flex', justifyContent: 'center', marginBottom: '10px'}}>{venueData[0].genre}</h2>
                </>
              
                     <div className="tooltip" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                            <h4 style={{display: 'flex', justifyContent: 'center'}}>Your current rating: {rating}</h4>
                            <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
                            <form onSubmit={saveRating}>
                
                            
                                    <StyledRating
                                        name="highlight-selected-only"
                                        defaultValue={3}
                                        IconContainerComponent={IconContainer}
                                        getLabelText={(value) => {customIcons[value].label}}
                                        highlightSelectedOnly
                                        size='large'
                                        value={rating}
                                        onChange={(event, newValue) => setRating(newValue)}
                                        style={{margin: '20px'}}
                                      />
                                <button className='Rating-btn' type='submit'>Save Rating</button>
                                <button className='Rating-btn' onClick={skipRating}  style={{margin: '10px'}} >Skip</button>

                                   
                                
                        </form>
                        </div>
                            
                          </div>
            
            {
      
            <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
              <Card style={{maxWidth: 350, maxHeight: 375, width: 350, height:  400, opacity: '0.5'}}>
              <CardMedia
                component="img"
                height="450"
                image={previousVenue[previousVenue.length - 1].img}
                alt={previousVenue[previousVenue.length - 1].title}
                style={{maxWidth: 300, maxHeight: 275, width: 300, height:  275, alignSelf: 'center'}}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" style={{fontFamily: "Rye", alignSelf: 'center'}}>
                {previousVenue[previousVenue.length - 1].title}
                </Typography>
              </CardContent> 
            </Card>

            <Card style={{maxWidth: 600, maxHeight: 450, width: 650, height:  450, boxShadow: '0 16px 16px rgb(0, 0, 0, 0.4)'}}>
              <CardMedia
                component="img"
                height="750"
                width="750"
                image={venueData[0].img}
                alt={venueData[0].title}
                style={{maxWidth: 550, maxHeight: 350, width: 550, height:  350, alignSelf: 'center'}}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" style={{fontFamily: "Rye", alignSelf: 'center'}}>
                {venueData[0].title}
                </Typography>
              </CardContent> 
            </Card>
          



      
            <Card style={{maxWidth: 350, maxHeight: 375, width: 350, height:  400, opacity: '0.5'}}>
              <CardMedia
                component="img"
                height="450"
                image={venueData[1].img}
                alt={venueData[1].title}
                style={{maxWidth: 300, maxHeight: 275, width: 300, height:  275, alignSelf: 'center'}}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" style={{fontFamily: "Rye"}}>
                {venueData[1].title}
                </Typography>
              </CardContent> 
            </Card>

            </div>
      
      


 
      
      }
          
            
    

            </div>


    );
}

