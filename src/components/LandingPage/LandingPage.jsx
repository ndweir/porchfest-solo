import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';
import hugeCrowd from "./porchfestCrowd.jpg"
import TheReplacements from "./TheReplacements.jpg"
import Trumpets from "./Trumpets.jpg"
import smallCrowd from "./porchfestCrowdSmall.jpg"

// CUSTOM COMPONENTS
import LoginForm from '../LoginForm/LoginForm'

function LandingPage() {
  const [heading, setHeading] = useState('Welcome to Porchfest');
  const navigate = useNavigate();

  const onRegister = (event) => {
    navigate('/registration');
  };

  return (
    <div className="container">
      <h2>{heading}</h2>
      <img
      src={Trumpets}
      height={350}
      ></img>
      <img
      src={TheReplacements}
      height={350}
      ></img>
      <img
      src={smallCrowd}
      height={350}
      ></img>

      <div className="grid">
        <div className="grid-col grid-col_8">
          <p style={{ marginBottom: '20px' }}>
            Porchfest will feature multiple, spread-out, overlapping concerts
             during a single afternoon that attendees can enjoy while 
             wandering the neighborhood.
          </p>

          <p style={{ marginBottom: '20px' }}>
          It provides an opportunity to explore the Wedge neighborhood
           of Uptown in an intimate and novel way. Attendees can 
           discover new musicians, support local businesses, 
           and celebrate the diverse, eclectic history of this neighborhood.
          </p>

          <p>
            Countless musicians have found their footing in this neighborhood.
            Uptown has a history of diversity, creativity, and community. 
            It is both a destination and a home for artists and those that appreciate them.
            The Replacements (famously pictured here at their home in the Wedge) 
            got their start here, Rhymesayers was rooted here for decades, and 
            musical shoutouts from Prince (and countless others) highlight the 
            true fashion of Uptown as a place where anybody can be themselves 
            and find support and community along the way.
          </p>
        </div>
        <div className="grid-col grid-col_4">
          <LoginForm />

          <center>
            <h4>Not a Member?</h4>
            <button className="btn btn_sizeSm" onClick={onRegister}>
              Register
            </button>
          </center>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
