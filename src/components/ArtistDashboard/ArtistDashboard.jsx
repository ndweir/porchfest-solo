import React, {useState, useEffect} from 'react';
import { Grid, Card, CardContent, CardMedia, CardActions, Button, Typography } from '@mui/material';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

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

  const VenueData = [
    {
      img: RadioDr,
      title: '3 Radio Dr',
      id: 18,
      latLng: { lat: 44.9778, lng: -93.2650 },
    },
    {
      img: SummitAve,
      title: '1006 Summit Ave',
      id: 26,
      latLng: { lat: 44.9401, lng: -93.1241 },
    },
    {
      img: BryantAve,
      title: '824 Bryant Ave',
      id: 19,
      latLng: { lat: 44.9483, lng: -93.2880 },
    },
    {
      img: DaleSt,
      title: '1738 Dale St',
      id: 20,
      latLng: { lat: 44.9537, lng: -93.1447 },
    },
    {
      img: DupontAve,
      title: '540 Dupont Ave',
      id: 7,
      latLng: { lat: 44.9634, lng: -93.2870 },
    },
    {
      img: GrandAve,
      title: '1979 Grand Ave',
      id: 6,
      latLng: { lat: 44.9398, lng: -93.1783 },
    },
    {
      img: HennepinAve,
      title: '901 Hennepin Ave',
      id: 21,
      latLng: { lat: 44.9778, lng: -93.2750 },
    },
    {
      img: IrvingAve,
      title: '2292 Irving Ave',
      id: 22,
      latLng: { lat: 44.9640, lng: -93.2980 },
    },
    {
      img: JeffersonAve,
      title: '2229 Jefferson Ave',
      id: 8,
      latLng: { lat: 44.9401, lng: -93.1241 },
    },
    {
      img: LakeSt,
      title: '1999 Lake St',
      id: 23,
      latLng: { lat: 44.9483, lng: -93.2880 },
    },
    {
      img: LincolnAve,
      title: '5390 Lincoln Ave',
      id: 24,
      latLng: { lat: 44.9537, lng: -93.1447 },
    },
    {
      img: LyndaleAve,
      title: '5136 Lyndale Ave',
      id: 25,
      latLng: { lat: 44.9634, lng: -93.2870 },
    },
  ];

  useEffect(() => {
    if(currentLocation){
      initMap(currentLocation);
    }
  }, [currentLocation]);

  const initMap = async (location) => {
    if(!window.google){
      console.error('Google Maps API Not Loaded');
      return;
    }

    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

    const map = new google.maps.Map(document.getElementById('map'), {
      center: location.latLng,
      zoom: 16,
    })

    new AdvancedMarkerElement({
      map,
      position: location.latLng, 
      title: location.title,
    });
  }; 

  const handleMapViewClick = (location) => {
    setCurrentLocation(location);
    setMapViewVisible(!mapViewVisible);
  };

  
  return (
    <div>
      <h1>Artist Dashboard</h1>
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
                <Button onClick={() => handleMapViewClick(item.title)}>
                  {mapViewVisible ? 'Hide Map View' : 'Map View'}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      {mapViewVisible && <div id="map" style={{ height: '500px' }}></div>}
    </div>
  );
}