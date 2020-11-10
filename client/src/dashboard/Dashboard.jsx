/* eslint-disable no-unused-vars */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser, logout } from '../store/slices/userSlice';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
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
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }}>
        
        </Typography>
      </Container>
    </React.Fragment>
  );
}

export default Dashboard;
