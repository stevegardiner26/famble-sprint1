/* eslint-disable no-unused-vars */
import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';

import { useSelector, useDispatch } from 'react-redux';
import { selectUser, logout } from '../store/slices/userSlice';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import BetModal from './BetModal';
import { GoogleLogout } from 'react-google-login';
import styles from './Dashboard.module.css';

// import gameService from '../services/gameService';
const CLIENT_ID="405646879728-34aukb2l8lsknikc11pprr5i53pt3lvo.apps.googleusercontent.com"
const useStyles = makeStyles((theme) => ({
  table: {
    minWidth:650,
  },
}));
function createData(name, time, description, score, started, id) {
  return { name, time, description, score, started, id };
}

const games = [
  createData('Cardinals vs Rams', '11/20/20', 'Placeholder Text', '0-0', 'No',1),
  createData('Bengals vs Giants', '11/10/20', 'Placeholder Text', 'Not Yet Determined', 'Yes',2),
  createData('Other game', '11/10/20', 'Placeholder Text', 'Not Yet Determined', 'Yes',3),

];
function Dashboard(props) {
  
  const classes = useStyles();
 
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
      <Container maxWidth="md">
        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }}>
          <img alt = "" src = { user.profile_image }></img>
          <br/>
          <GoogleLogout
          clientId={ CLIENT_ID }
          buttonText='Logout'
          onLogoutSuccess={ handleLogout }
          />
          <br/>
          <TableContainer component={Paper}>
          <Table className = {classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Game</TableCell>
              <TableCell align="center">Date/Time</TableCell>
              <TableCell align="center">Description</TableCell>
              <TableCell align="center">Final Score</TableCell>
              <TableCell align="center">Started?</TableCell>
              <TableCell align="center">Bet link</TableCell>
              
            </TableRow>
          </TableHead>
            <TableBody>
              {games.map((row)=>(
                <TableRow key = {row.id}>
                  <TableCell align = "center"> {row.name}</TableCell>
                  <TableCell align = "center">{row.time}</TableCell>
                  <TableCell align = "center">{row.description}</TableCell>
                  <TableCell align = "center">{row.score}</TableCell>
                  <TableCell align = "center">{row.started}</TableCell>
                  <TableCell align = "center"><BetModal/></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          </TableContainer>
        </Typography>
      </Container>
    </React.Fragment>
  );
}

export default Dashboard;
