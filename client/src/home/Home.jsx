/* eslint-disable no-underscore-dangle, no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
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
      auth_type: 'google',
    };
    const res = await userService.signIn(payload);
    dispatch(login(res.user));
  };

  const responseFacebook = async (response) => {
    const payload = {
      name: response.name,
      profile_image: response.picture.data.url,
      email: response.email,
      auth_type: 'facebook',
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
          <GoogleLogin
            className={styles.google}
            clientId="405646879728-34aukb2l8lsknikc11pprr5i53pt3lvo.apps.googleusercontent.com"
            buttonText="Sign In"
            onSuccess={responseGoogle}
          />
        </p>
        <p>
          <FacebookLogin
            appId="392101635039578"
            autoLoad={false}
            fields="name,email,picture"
            callback={responseFacebook}
          />
        </p>
      </Jumbotron>
      <InfoCard imgSide="left" title="Features" content="What you made and what it does" image="https://via.placeholder.com/250" />
      <InfoCard imgSide="right" title="Our Mission" content="Why you’ve made it and why it matters" image="https://via.placeholder.com/250" />
      <InfoCard imgSide="left" title="Our Team" content="Who you (collectively) are" image="https://via.placeholder.com/250" />
      <InfoCard imgSide="right" title="Development" content="How you made it and what technologies were used" image="https://via.placeholder.com/250" />
      <br />
    </div>
  );
}

export default Home;
