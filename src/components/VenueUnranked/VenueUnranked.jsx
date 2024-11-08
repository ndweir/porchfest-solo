import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Avatar, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import Rating from '@mui/material/Rating';
import MusicNoteSharpIcon from '@mui/icons-material/MusicNoteSharp';
import '../App/App.css';

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
import { Description } from '@mui/icons-material';


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
    { img: SeyiOyinloye, title: 'Seyi Oyinloye', id: 15, rating: null, genre: `Contemporary: Afrobeats, Rap, & Pop.`, bio: `An active-driven musical activist with sounds of Afro Beats, Hip Hop, Reggae, and Pop; but not respectfully bound or limited to them as genres. His lyrics vibrate the positive energy of the great liberators of our time. “Our ability to heal is rooted in access to our own stories,” says Oyinloye. He uses his skills, tools, and platforms as a storyteller to empower and encourage empathy, and Justice.`},
    { img: RanchoUnicorno, title: 'Rancho Unicorno', id: 2, rating: null, genre: `Nostalgic Acoustic Cover Duo
`, bio: `Rancho Unicorno formed after college friends Felice and Kareem combined their musical tastes and talents to curate a set of acoustic tunes that'll have y'all dancing and singing to a new generation of classics. Come join us for a celebration of music, humans, and unicorns!` },
    { img: MommyLogBalls, title: 'Mommy Log Balls', id: 16, rating: null, genre: `Garage Rock / Performance Art`, bio: `Mommy Log Balls was formed in the early 90s by members of Duck Kicking Vulture, Yanomamos, and Likehell and continues the tradition of the proto-punk roots of garage rock and avant-garde noise and performance art.` },
    { img: PityParty, title: 'Pity Party', id: 14, rating: null, genre: `Indie rock, acoustic, covers
`, bio: `Pity Party is an indie rock band from Minneapolis, MN. The band is made up of Abbie (vocals, synth), Tim (guitar, vocals), Micah (bass, vocals), and Jonny (drums). They started as a cover band before deciding to start writing together. They are redefining nostalgia with their covers of 80s, 90s, and 00s songs. They are also working on an EP that will be released later this year. At Porchfest, they will have a Mini Party!! Join Micah and Abbie as they sit on a porch and play acoustic covers and original songs!` },
    { img: dreyDk, title: 'drey dk', id: 11, rating: null, genre: `Lo-Fi, Bedroom Pop, Alternative`, bio: `drey dk is a songwriter, multi-instrumentalist, & producer based in Minneapolis, MN. They debuted their first single back in September of 2019, with a couple more singles and two EP’s to follow (as recent as May of 2022). Through minimalism, melodic/harmonic chord building, instrumental looping/layering and soundscapes, drey dk is able to pull you into their sonic yet emotive realm they create. Drawing inspiration from artists like Cocteau Twins, Beach House, and Caroline Polachek.` },
    { img: AnnieBang, title: 'Annie and the Bang Bang', id: 1, rating: null, genre: 'Rock And Roll Story Songs', bio: `Annie and the Bang Bang are a four-piece rock band from Minneapolis. Inspired by music they heard as kids in the seventies and by the songs they put on mixtapes in the nineties, they're a little Fleetwood Mac meets Nirvana or Heart meets R.E.M. A classic sound from a parallel universe, they make little drive-in movies you can dance to.` },
    { img: AtomicLights, title: 'Atomic Lights', id: 3, rating: null, genre: `Punk, PopPunk`, bio: `Atomic Lights are a 3 piece punk band from Minneapolis. They started in the summer of 2012 and have been melting faces ever since.` },
    { img: CheapBouquet, title: 'Cheap Bouquet', id: 5, rating: null, genre: `Pop-Punk/Emo`, bio: `Brand new 3-piece powerhouse Cheap Bouquet has hit the ground running in Minneapolis and aren't looking back. The trio is carving out a new path in the pop punk scene, through unapologetic authenticity and drawing influence from icons across the rock and alternative spectrum. Fronted by long time listener, first time frontman Sam Awad, with Twin City scene vets Chelsea Oxborough and Brandon Evilla on guitars, Cheap Bouquet is the amalgamation of a broad range of individual experience. The band has found their footing with a dynamic sound, candid storytelling, and, more than anything else, a genuine joy to be sharing their music.`  },
    { img: HoneyPlease, title: 'Honey Please', id: 17, rating: null, genre: `Indie Pop Rock`, bio: `Honey Please is an indie pop rock band out of Minneapolis Minnesota. Through a shared joy of musical expression and a love of performing, they have delighted many ears around the Twin Cities area. The band formed in the fall of 2022 and have been creating new tunes since. All original songs are written by singer-guitarist Sam Scheuneman who has been writing songs since he learned to speak. Bassist Dawson Ludvigson adds intricate bass melodies under a light melody sung by Sam. Guitarist Jack Nobel shreds lead lines to give each song its unique timbre. On the drums, Joe Kiser continues to keep beats fresh and alive with a lively and energetic tone. Together these musicians create a sound that feels complete and is full of emotion. When playing live the audience just cannot stop dancing and moving along to the beat. Honey Please has released two singles "Losing Composure/Flute" in December '23 and are currently working on their first studio album set to release August '24.` },
    { img: KingSizedCoffin, title: 'King Sized Coffin', id: 9, rating: null, genre: `Gothic Jazz / Doom Folk
`, bio: `King Sized Coffin is a Minneapolis band with a lot of members, a lot of instruments, and a lot of spooky songs. For Fans of Tom Waits, Nick Cave, Harley Poe, The Cure, and The Misfits.` },
    { img: TheWalkerBrothers, title: 'The Walker Brothers', id: 12, rating: null, genre: `Folk, Funk, Latino, Singer/Songwriter
`, bio: `Rooted in the Twin Cities, brothers Jay and Joseph Walker proudly express their Colombian/American heritage through original compositions which feature lyrics in English, Spanish, and Portuguese. Their performances feature expressive interpretations of timeless classics, showcasing an eclectic repertoire and wide range of musical abilities.
` },
    { img: TheWeepingCovenant, title: 'The Weeping Covenant', id: 13, rating: null, genre: `Americana / Cathartic Country
`, bio: `Based in St. Paul, MN, The Weeping Covenant is headed by vocalist and songwriter, Michael Beatrez. Writing from a lyrically driven perspective, he generally touches on themes of hope, vulnerability, and love. Beatrez leans into his comfortable sweet spot by singing over soft fingerstyle guitar ballads and rock songs that drive with measured intensity.`},
  ];
});

// , genre: ``, bio: ``

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
                  <h1>Rate Artists</h1>
              
                <>
                  <h1 style={{display: 'flex', justifyContent: 'center'}}>{artistData[0].title}</h1>
                  <h2 style={{display: 'flex', justifyContent: 'center', marginBottom: '60px'}}>{artistData[0].genre}</h2>
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
                {previousArr.length > 0 && (
                  <Avatar
                  alt={previousArr[previousArr.length - 1].title}
                  src={previousArr[previousArr.length - 1].img}
                  sx={{ maxWidth: 450, maxHeight: 450, width: 450, height: 450}}
                  variant='square'
                  />
                )}

                    <Avatar
                    alt={artistData[0].title}
                    src={artistData[0].img}
                    sx={{ maxWidth: 750, maxHeight: 650, width: 750, height:  650}}
                    variant='square'
                    />
                    
                    <Avatar
                    alt={artistData[1].title}
                    src={artistData[1].img}
                    sx={{ maxWidth: 450, maxHeight: 450, width: 450, height:  450}}
                    variant='square'
                    />

            </Stack>
            
            

              {/* <h4>Select a rating below, click to confirm your selection</h4>
              <h4>Once your selection is confirmed, click save to save your rating and move to the next selection</h4>
              <h4>Click Skip to go to the next selection without saving your rating</h4> */}
              
              <div className='rankTitles'>
                {previousArr.length > 0 && (
                  <h1>Previous</h1>
                )}
                <h1>Current</h1>
                <h1>Next</h1>
              </div>

            </div>
    
          );
};