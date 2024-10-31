import React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import ArtistPrevious from '../ArtistPrevious/ArtistPrevious';
import VenuePrevious from '../VenuePrevious/VenuePrevious';
import { useSelector } from 'react-redux';

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function InfoPage() {
  const user = useSelector((store) => store.user);

  return (
    <>
      { user.type === 'Artist' ? <ArtistPrevious /> : <VenuePrevious />}
    </>
  );
}

export default InfoPage;
