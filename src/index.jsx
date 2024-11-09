import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './components/App/App';
const googleMapsApiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

window.initMap = () => {
  console.log('Google Maps Api Loaded');
};

const script = document.createElement('script');
script.src = `https://maps.googleapis.com/maps/api/js?key=${googleMapsApiKey}&callback=initMap`;
script.async = true;
script.defer = true;
document.head.appendChild(script);

//const root = ReactDOM.createRoot(document.getElementById('react-root'));

const hash = window.location.hash
  .substring(1)
  .split('&')
  .reduce((initial, item) => {
    if(item){
      const parts = item.split('=');
      initial[parts[0]] = decodeURIComponent(parts[1]);
    }
    return initial;
  }, {});

  window.location.hash = '';

  const accessToken = hash.access_Token;

  if(accessToken){
    localStorage.setItem('access_token', accessToken);
  }

  const refreshAccessToken = async () => {
    const refreshToken = localStorage.getItem('refresh_token');
    const response = await fetch(`http://localhost:5001/refresh_token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({refresh_token: refreshToken}),
    });  
    const data = await response.json();
    localStorage.setItem('access_token', data.access_Token);
  }

setInterval(refreshAccessToken, 3600 * 1000)

ReactDOM.createRoot(document.getElementById('react-root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
