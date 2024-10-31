import React from 'react';
import {useSelector} from 'react-redux';
import VenueDashboard from '../VenueDashboard/VenueDashboard';
import ArtistDashboard from '../ArtistDashboard/ArtistDashboard';

function UserPage() {

  const user = useSelector((store) => store.user);
  return (
    <>
      { user.type === 'Artist' ? <ArtistDashboard /> : <VenueDashboard />}
    </>
    
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
