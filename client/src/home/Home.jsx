/* eslint-disable no-underscore-dangle, no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import GoogleLogin from 'react-google-login';

// SERVICES
// import gameService from '../services/gameService';
import userService from '../services/userService';
import { selectUser, login } from '../store/slices/userSlice';

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

  // Code for getting the games -----------------
  // const [games, setGames] = useState(null);
  // const getGames = async () => {
  //   const res = await gameService.getAll();
  //   setGames(res);
  // };

  // useEffect(() => {
  //   if (!games) {
  //     getGames();
  //   }
  // });

  // const renderGame = (game) => (
  //   <li key={game._id} className="list__item game">
  //     <h3 className="game__name">{game.name}</h3>
  //     <p className="game__description">{game.description}</p>
  //   </li>
  // );
  // -------------------

  return (
    <div>
      <GoogleLogin
          clientId="405646879728-34aukb2l8lsknikc11pprr5i53pt3lvo.apps.googleusercontent.com"
          buttonText="Sign In"
          onSuccess={responseGoogle}
      />
      {/* ---------Code for Game List----- */}
      {/* <ul className="list">
        {(games && games.length > 0) ? (
          games.map((game) => renderGame(game))
        ) : (
          <p>No games found</p>
        )}
      </ul> */}
    </div>
  );
}

export default Home;
