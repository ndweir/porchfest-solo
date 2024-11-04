import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Avatar, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import Rating from '@mui/material/Rating';
import MusicNoteSharpIcon from '@mui/icons-material/MusicNoteSharp';

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
  const previousArr = useSelector(store => store.previouslyRated);
  const lastAction = useSelector(store => store.lastAction);
  const [rating, setRating] = useState();
  const user = useSelector(store => store.user);
  const dispatch = useDispatch();
  const userId = user.id;
  const [previous, setPrevious] = useState([]);

  const [artistData, setArtistData] = useState([
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
  ])

  // const ArtistData = [
  //   {
  //     img: SeyiOyinloye,
  //     title: 'Seyi Oyinloye',
  //     id: 15,
  //   },
  //   {
  //     img: RanchoUnicorno,
  //     title: 'Rancho Unicorno',
  //     id: 2,
  //   },
  //   {
  //     img: MommyLogBalls,
  //     title: 'Mommy Log Balls',
  //     id: 16,
  //   },
  //   {
  //     img: PityParty,
  //     title: 'Pity Party',
  //     id: 14,
  //   },
  //   {
  //     img: dreyDk,
  //     title: 'drey dk',
  //     id: 11,
  //   },
  //   {
  //     img: AnnieBang,
  //     title: 'Annie and the Bang Bang',
  //     id: 1,
  //   },
  //   {
  //     img: AtomicLights,
  //     title: 'Atomic Lights',
  //     id: 3,
  //   },
  //   {
  //     img: CheapBouquet,
  //     title: 'Cheap Bouquet',
  //     id: 5,
  //   },
  //   {
  //     img: HoneyPlease,
  //     title: 'Honey Please',
  //     id: 17,
  //   },
  //   {
  //     img: KingSizedCoffin,
  //     title: 'King Sized Coffin',
  //     id: 9,
  //   },
  //   {
  //     img: TheWalkerBrothers,
  //     title: 'The Walker Brothers',
  //     id: 12,
  //   },
  //   {
  //     img: TheWeepingCovenant,
  //     title: 'The Weeping Covenant',
  //     id: 13,
  //   },
  // ]

        const saveRating = (event) => {
            event.preventDefault();
            // console.log(userId)
            // console.log(rating)

            if(artistData.length === 0) return;

            const PrevPicObj = artistData[0]
      
            let data = {
              user_id: userId,
              rating: rating,
              artist_id: PrevPicObj.id,
              type: 'Artist',
            };
      
            dispatch({
              type: "ADD_RATING",
              payload: data,
            });
      
            // shift to next photo, change out artistID
            const removedArtist = artistData.shift()
            removedArtist.rating = rating;

            setPrevious([...previous, removedArtist])
            setArtistData([...artistData]);
            
            console.log('ARTIST DATA AFTER SHIFT', artistData)
           
              dispatch({
                type: "ADD_RATED",
                payload: removedArtist,
              });
              console.log('previous', previous)
        };
            
        const skipRating = (event) => {
          event.preventDefault();
    
          if(artistData.length === 0) return;
          
          const skippedArtist = artistData.shift();
          setPrevious([...previous, skippedArtist])
          artistData.push(skippedArtist);
    
          console.log('AFTER Skip', artistData)
        }
      
        const addArtistBack = (artist) => {
          setArtistData([...artistData, artist]);
        };

        useEffect(() => {
          if(lastAction && lastAction.type === "ADD_ARTIST_BACK"){
            addArtistBack(lastAction.payload)
          }  
        }, [lastAction]);

        if(artistData.length === 0){
          return <p>No More Artists to Rate!</p>
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
                  <h1>Rank Artists</h1>
              <div className='rankTitles'>
                {previous.length > 0 && (
                  <h2>Previous</h2>
                )}
                <h2>Current</h2>
                <h2>Next</h2>
              </div>
              
              <Stack direction="row" spacing={2}>
                {previous.length > 0 && (
                  <Avatar
                  alt={previous[previous.length - 1].title}
                  src={previous[previous.length - 1].img}
                  sx={{ width: 350, height: 350 }}
                  variant='square'
                  />
                )}

                    <Avatar
                    alt={artistData[0].title}
                    src={artistData[0].img}
                    sx={{ width: 500, height: 500 }}
                    variant='square'
                    />
                    
                    <Avatar
                    alt={artistData[1].title}
                    src={artistData[1].img}
                    sx={{ width: 350, height: 350 }}
                    variant='square'
                    />

            </Stack>
            {previous.length > 0 && (
              <h2 style={{display: 'flex', justifyContent: 'center'}}>{artistData[0].title}</h2>
            )}
            

              <h4>Select a rating below, click to confirm your selection</h4>
              <h4>Once your selection is confirmed, click save to save your rating and move to the next selection</h4>
              <h4>Click Skip to go to the next selection without saving your rating</h4>
          
            <form style={{display: 'flex', justifyContent: 'center'}} onSubmit={saveRating}>
              <StyledRating
                    name="highlight-selected-only"
                    defaultValue={3}
                    IconContainerComponent={IconContainer}
                    getLabelText={(value) => {customIcons[value].label}}
                    highlightSelectedOnly
                    size='large'
                    value={rating}
                    onChange={(event, newValue) => {setRating(newValue)}}
                  />
                <button className='btn' type='submit'>Save Rating</button>
                <button className='btn' onClick={skipRating}>Skip</button>
              </form>
      
            </div>
      
          );
};