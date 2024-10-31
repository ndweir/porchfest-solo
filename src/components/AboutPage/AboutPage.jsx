import React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { useSelector } from 'react-redux';
import ArtistUnranked from '../ArtistUnranked/ArtistUnranked';
import VenueUnranked from '../VenueUnranked/VenueUnranked';
// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {

  const user = useSelector((store) => store.user);

  return (
    <>
          { user.type === 'Artist' ? <ArtistUnranked /> : <VenueUnranked />}
    </>
  );
}

export default AboutPage;
