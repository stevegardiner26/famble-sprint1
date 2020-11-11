/* eslint-disable no-unused-vars */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser, logout } from '../store/slices/userSlice';
import BetModal from './BetModal';
// import gameService from '../services/gameService';

function Dashboard(props) {
  const user = useSelector(selectUser);

  const dispatch = useDispatch();

   // Code to Handle Logout
  const handleLogout = () => {
    dispatch(logout());
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

  // ---------Code for Game List-----
      // {/* <ul className="list">
      //   {(games && games.length > 0) ? (
      //     games.map((game) => renderGame(game))
      //   ) : (
      //     <p>No games found</p>
      //   )}
      // </ul> */}

  return (
    <div>
      Welcome to the dashboard page!
      <button type="button" onClick={handleLogout}>Logout</button>
      <BetModal team1="Chiefs" team2="Seahawks" body="stats" />
    </div>
  );
}

export default Dashboard;
