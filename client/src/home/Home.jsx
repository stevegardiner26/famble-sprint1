/* eslint-disable no-underscore-dangle, no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import GoogleLogin from 'react-google-login';
import { Jumbotron } from 'reactstrap';
import styles from './Home.module.css';
// SERVICES
import userService from '../services/userService';
import { selectUser, login } from '../store/slices/userSlice';
import InfoCard from './InfoCard';


function Home(props) {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const responseGoogle = async (response) => {
    const payload = {
      name: response.profileObj.name,
      profile_image: response.profileObj.imageUrl,
      email: response.profileObj.email,
      google_id: response.profileObj.googleId,
    };
    const res = await userService.signIn(payload);
    dispatch(login(res.user));
  };

  return (
    <div>
      <Jumbotron className={styles.jumbo}>
        <h1 className={styles.display_text}>Welcome to Famble!</h1>
        <p className={styles.display_subtext}>Sports betting without the cost.</p>
        <p>
          <GoogleLogin className={styles.google}
            clientId="405646879728-34aukb2l8lsknikc11pprr5i53pt3lvo.apps.googleusercontent.com"
            buttonText="Sign In"
            onSuccess={responseGoogle}
          />
        </p>
      </Jumbotron>
      <InfoCard />
      {/* Who you (collectively) are
          What you made and what it does
          How you made it and what technologies were used
          Why you’ve made it and why it matters  */}
    </div>
  );
}

export default Home;
