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
  const [previousArr, setPreviousArr] = useState(() => {
    const savedData = localStorage.getItem('previousArr');
    return savedData ? JSON.parse(savedData) : [];
  });
  const lastAction = useSelector(store => store.lastAction);
  const [rating, setRating] = useState();
  const user = useSelector(store => store.user);
  const dispatch = useDispatch();
  const deletedArtist = localStorage.getItem('deletedArtist');
  const userId = user.id;
  const [artistData, setArtistData] = useState(() => {
    const savedData = localStorage.getItem('artistData');
    return savedData ? JSON.parse(savedData) : [
    { img: SeyiOyinloye, title: 'Seyi Oyinloye', id: 15, rating: null},
    { img: RanchoUnicorno, title: 'Rancho Unicorno', id: 2, rating: null },
    { img: MommyLogBalls, title: 'Mommy Log Balls', id: 16, rating: null },
    { img: PityParty, title: 'Pity Party', id: 14, rating: null },
    { img: dreyDk, title: 'drey dk', id: 11, rating: null },
    { img: AnnieBang, title: 'Annie and the Bang Bang', id: 1, rating: null },
    { img: AtomicLights, title: 'Atomic Lights', id: 3, rating: null },
    { img: CheapBouquet, title: 'Cheap Bouquet', id: 5, rating: null },
    { img: HoneyPlease, title: 'Honey Please', id: 17, rating: null },
    { img: KingSizedCoffin, title: 'King Sized Coffin', id: 9, rating: null },
    { img: TheWalkerBrothers, title: 'The Walker Brothers', id: 12, rating: null },
    { img: TheWeepingCovenant, title: 'The Weeping Covenant', id: 13, rating: null},
  ];
});

  // if(deletedArtist){
  //   const savedData = localStorage.getItem('artistData');
  //   const artistDataArray = savedData ? JSON.parse(savedData) : [];
  //   const deletedArtistObj = deletedArtist ? JSON.parse(deletedArtist) : [];
  //   const newArtistsArray = artistDataArray.concat(deletedArtistObj);

  //   localStorage.setItem('artistData', JSON.stringify(newArtistsArray))
  //   localStorage.removeItem('deletedArtist')
  // }

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
  console.log('ARTIST DATA', artistData)

  console.log("STORE", JSON.parse(localStorage.getItem('artistData')))
  console.log('previous arr', previousArr)
  console.log("LAST ACTION: ", lastAction)

  useEffect(() => {
    localStorage.setItem('artistData', JSON.stringify(artistData));
  }, [artistData]);

  useEffect(() => {
    localStorage.setItem('previousArr', JSON.stringify(previousArr));
  }, [previousArr]);

        const saveRating = (event) => {
            event.preventDefault();
            // console.log(userId)
            // console.log(rating)

            if(artistData.length === 0) return;

            const PrevPicObj = artistData[0];

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

            artistData[0].rating = rating;
            const removedArtist = artistData.shift()
            const takeOutDupes = artistData.filter(artist => artist.id !== removedArtist.id)
            setArtistData([...takeOutDupes, removedArtist]);
            
            
            setPreviousArr([...previousArr, PrevPicObj])

              dispatch({
                type: "ADD_RATED",
                payload: PrevPicObj,
              });
              console.log('previously rated', previousArr)
        };
            
        const skipRating = (event) => {
          event.preventDefault();
    
          if(artistData.length === 0) return;
          
          const skippedArtist = artistData.shift();
          const takeOutDupes = artistData.filter(artist => artist.id !== skippedArtist.id)
          setArtistData([...takeOutDupes, skippedArtist]);
    
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
                  <h1>Rate Artists</h1>
              <div className='rankTitles'>
                {previousArr.length > 0 && (
                  <h1>Previous</h1>
                )}
                <h1>Current</h1>
                <h1>Next</h1>
              </div>
              
              <Stack direction="row" spacing={2} justifyContent={"space-around"} >
                {previousArr.length > 0 && (
                  <Avatar
                  alt={previousArr[previousArr.length - 1].title}
                  src={previousArr[previousArr.length - 1].img}
                  sx={{ width: 450, height: 450 }}
                  variant='square'
                  />
                )}

                    <Avatar
                    alt={artistData[0].title}
                    src={artistData[0].img}
                    sx={{ width: 750, height: 650 }}
                    variant='square'
                    />
                    
                    <Avatar
                    alt={artistData[1].title}
                    src={artistData[1].img}
                    sx={{ width: 450, height: 450 }}
                    variant='square'
                    />

            </Stack>
            {previousArr.length > 0 && (
              <h1 style={{display: 'flex', justifyContent: 'center', marginBottom: '30px'}}>{artistData[0].title}</h1>
            )}
            

              {/* <h4>Select a rating below, click to confirm your selection</h4>
              <h4>Once your selection is confirmed, click save to save your rating and move to the next selection</h4>
              <h4>Click Skip to go to the next selection without saving your rating</h4> */}
          
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
    
          );
};