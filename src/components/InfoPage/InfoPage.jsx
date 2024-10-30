import React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function InfoPage() {
  

  return (
    <div className="container">
    <div className='rankTitles'>
      <h2>Previous</h2>
      <h2>Current</h2>
      <h2>Next</h2>
    </div>
    
     <Stack direction="row" spacing={2}>
    <Avatar
      alt="Kendrick Lamar"
      src="https://t.ly/V16Td"
      sx={{ width: 350, height: 350 }}
    />

    <Avatar
      alt="Sabrina Carpenter"
      src="https://t.ly/h6U78"
      sx={{ width: 500, height: 500 }}
    />
    <Avatar
      alt="Pity Party"
      src="https://t.ly/ePmfD"
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

export default InfoPage;
