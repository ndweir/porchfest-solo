import React, { useEffect, useState, useMemo } from 'react';
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import AboutPage from '../AboutPage/AboutPage';
import UserPage from '../UserPage/UserPage';
import InfoPage from '../InfoPage/InfoPage';
import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import themeRTL from "../assets/theme/theme-rtl";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";


// Material Dashboard 2 React themes
import theme from "../assets/theme";
import './App.css';

// Create rtl cache
const rtlCache = createCache({
  key: "muirtl",
  stylisPlugins: [rtlPlugin],
});

function App() {
  const dispatch = useDispatch();
  const user = useSelector(store => store.user);

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
  }, [dispatch]);

  return (

    <CacheProvider value={rtlCache}>
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <Router>
      <div>
        <Nav />
        <Routes>
          {/* Visiting localhost:5173 will redirect to localhost:5173/home */}
          <Route exact path= "/" element={<Navigate  to="/home"/>} />

          {/* Visiting localhost:5173/about will show the about page. */}
          <Route exact path= "/about" element={<AboutPage />} />

          {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:5173/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:5173/user */}
          
          <Route exact path= "/user" element={<ProtectedRoute isAuthenticated={user.isAuthenticated}  ><UserPage /></ProtectedRoute>} />
          
          <Route exact path= "/info" element={<ProtectedRoute isAuthenticated={user.isAuthenticated}  ><InfoPage /></ProtectedRoute>} />

          <Route exact path= "/registration" element={user.id ?
              // If the user is already logged in, 
              // redirect to the /user page
              <Navigate to="/user" />
              :
              // Otherwise, show the login page
              <RegisterPage />
            } />         
            
            <Route exact path= "/home" element={user.id ? <Navigate to="/user" /> : <LandingPage />} />
            <Route exact path= "/login" element={<LoginPage />} />
            <Route path="*" element={<h1>404</h1>} />
             {/* <ProtectedRoute
            // logged in shows InfoPage else shows LoginPage
            exact
            path="/info"
          >
            <InfoPage />
          </ProtectedRoute> */}

          {/* <Route
            exact
            path="/login"
          >
            
          </Route> */}

          {/* <Route
            exact
            path="/registration"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect them to the /user page
              <Navigate to="/user" />
              :
              // Otherwise, show the registration page
              <RegisterPage />
            }
          </Route> */}

          {/* <Route
            exact
            path="/home"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect them to the /user page
              <Navigate to="/user" />
              :
              // Otherwise, show the Landing page
              <LandingPage />
            }
          </Route> */}

          {/* If none of the other routes matched, we will show a 404. */}
          {/* <Route>
            <h1>404</h1>
          </Route> */}
        </Routes>
        <Footer />
      </div>
    </Router>
  </ThemeProvider>
  </CacheProvider>
  );
}

export default App;
