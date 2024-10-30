import React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <div className='rankTitles'>
        <h2>Previous</h2>
        <h2>Current</h2>
        <h2>Next</h2>
      </div>
      
       <Stack direction="row" spacing={2}>
      <Avatar
        alt="Prince"
        src="https://shorturl.at/sTiy8"
        sx={{ width: 350, height: 350 }}
      />

      <Avatar
        alt="The Grateful Dead"
        src="https://shorturl.at/zKsMz"
        sx={{ width: 500, height: 500 }}
      />
      <Avatar
        alt="Enya"
        src="https://shorturl.at/Xndzz"
        sx={{ width: 350, height: 350 }}
      />
    </Stack>

    <form style={{display: 'flex', justifyContent: 'center'}}>
      <input placeholder='Rank'></input>
      <button className='btn'>Submit</button>
      <button className='btn'>Skip</button>
    </form>

    </div>
  );
}

export default AboutPage;
