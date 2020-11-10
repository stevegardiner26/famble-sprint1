/* eslint-disable no-unused-vars */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser, logout } from '../store/slices/userSlice';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
// import gameService from '../services/gameService';
const useStyles = makeStyles((theme) => ({
  table: {
    minWidth:650,
  },
}));
function createData(game, time, gameId){
  return {game, time, gameId};
}
function Dashboard(props) {
  const [games, setGames] = useState(null);
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
      <Container maxWidth="sm">
        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }}>
          <Table className = {classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Game</TableCell>
              <TableCell align="right">Date</TableCell>
              <TableCell align="right">Bet link</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {games.map((row)=>(
              <TableRow key = {row.game}>
                <TableCell align = "right"> {row.time}</TableCell>
                <TableCell align = "right"><Button/></TableCell>
              </TableRow>
            ))}
          </TableBody>
          </Table>
        </Typography>
      </Container>
    </React.Fragment>
  );
}

export default Dashboard;
