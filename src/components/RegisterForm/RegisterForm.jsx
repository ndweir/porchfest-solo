import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function RegisterForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [type, setType] = useState('')
  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();
  
  const changeType = (event) => {
   
      setType(event.target.value)
   }

  const registerUser = (event) => {
    event.preventDefault();

    dispatch({
      type: 'REGISTER',
      payload: {
        username: username,
        password: password,
        type: type,
      },
    });
  }; // end registerUser

  return (
    <form className="formPanel" onSubmit={registerUser}>
      <h2>Register User</h2>
      {errors.registrationMessage && (
        <h3 className="alert" role="alert">
          {errors.registrationMessage}
        </h3>
      )}
      <div>
        <label htmlFor="username">
          Username:
          <input
            type="text"
            name="username"
            value={username}
            required
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="password">
          Password:
          <input
            type="password"
            name="password"
            value={password}
            required
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="confirmPassword">
          Confirm Password:
          <input
            type="password"
            name="password"
            value={confirmPassword}
            required
            onChange={(event) => setConfirmPassword(event.target.value)}
          />
        </label>
      </div>
      
      <div className='radio-btn-registration'>
      <label>
        <input type="radio" name="accountTypeRadio" value="Artist" onChange={changeType} checked={type === "Artist"} required={type === "Artist" || type === "Admin" ? false : true}  />
        Artist
      </label>
      <label>
        <input type="radio" name="accountTypeRadio" value="Venue" onChange={changeType} checked={type === "Venue"} required={type === "Venue" || type === "Admin" ? false : true}  />
        Venue
      </label>
      </div>

      <div style={{display: 'flex', justifyContent: 'center'}}>
        <input className="btn" type="submit" name="submit" value="Register" />
      </div>
    </form>
  );
}

export default RegisterForm;
