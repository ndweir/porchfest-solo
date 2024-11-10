import React, {useState, useEffect} from 'react';
import { Grid, Card, CardContent, CardMedia, CardActions, Button, Typography } from '@mui/material';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import card from "../assets/theme/components/card/index"

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

export default function ArtistDashboard(){
  const [mapViewVisible, setMapViewVisible] = useState(false);
  const [currentLocation, setCurrentLocation] = useState(null);
  const user = useSelector((store) => store.user);
  const [currentVenueTitle, setCurrentVenueTitle] = useState('');

  const VenueData = [
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

  useEffect(() => {
    if(currentLocation){
      initMap(currentLocation);
    }
  }, [currentLocation]);

  useEffect(() => {

  })


  let map;

  async function initMap(location) {
    if(!window.google){
      console.error('Google Maps API Not Loaded');
      return;
    }

    const position = { lat: -25.344, lng: 131.031 }

    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

    map = new Map(document.getElementById("map"), {
      zoom: 16,
      center: location,
      mapId: "DEMO_MAP_ID",
    });

   const marker = new AdvancedMarkerElement({
      map: map,
      position: location,
    });
  }; 

  const handleMapViewClick = (venue) => {
    if (mapViewVisible && currentLocation && currentLocation.lat === venue.latLng.lat && currentLocation.lng === venue.latLng.lng) {
      setMapViewVisible(false);
      setCurrentLocation(null);
      setCurrentVenueTitle('');
    } else {
      setCurrentLocation(venue.latLng);
      setMapViewVisible(true);
      setCurrentVenueTitle(venue.title);
    }
  };
  
  return (
    <div>
      <h2>Artist Dashboard</h2>
      {mapViewVisible && 
      <>
        <h1 style={{ textAlign: 'center'}}>{currentVenueTitle}</h1>
        <div id="map" style={{ height: '350px' }}></div>
      </>
      }
      
      <Grid container spacing={3}>
        {VenueData.map((item) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={item.img}
                alt={item.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.title}
                </Typography>
              </CardContent>
              <CardActions>
                <Button onClick={() => handleMapViewClick(item)}>
                  {mapViewVisible ? 'Hide Map View' : 'Map View'}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}