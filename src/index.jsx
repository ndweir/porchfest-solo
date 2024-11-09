import React from 'react';
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

ReactDOM.createRoot(document.getElementById('react-root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
