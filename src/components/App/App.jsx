import React, { useEffect} from 'react';
import { HashRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeProvider } from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import themeRTL from "../assets/theme/theme-rtl";
import rtlPlugin from "stylis-plugin-rtl";
import createCache from "@emotion/cache";
import theme from "../assets/theme";
import './App.css';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import AboutPage from '../AboutPage/AboutPage';
import UserPage from '../UserPage/UserPage';
import InfoPage from '../InfoPage/InfoPage';
import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import LogOutPage from '../LogOutPage/LogOutPage';
// @mui material components



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
              <Route path= "/" element={<Navigate  to="/home"/>} />
              <Route path= "/about" element={<AboutPage />} />
              <Route path= "/user" element={<ProtectedRoute isAuthenticated={user.isAuthenticated}  ><UserPage /></ProtectedRoute>} />
              <Route path= "/logout" element={<ProtectedRoute isAuthenticated={user.isAuthenticated}  ><LogOutPage /></ProtectedRoute>} />
              <Route path= "/info" element={<ProtectedRoute isAuthenticated={user.isAuthenticated}  ><InfoPage /></ProtectedRoute>} />
              <Route path= "/registration" element={user.id ? <Navigate to="/user" />  :  <RegisterPage />  } /> 
              <Route path= "/home" element={user.id ? <Navigate to="/user" /> : <LandingPage />} />
              <Route path= "/login" element={<LoginPage />} />
              <Route path="*" element={<h1>404</h1>} />            
            </Routes>
            <Footer/>
          </div>
        </Router>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default App;
