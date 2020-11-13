/* eslint-disable react/prop-types */
import TableCell from '@material-ui/core/TableCell';
import React, { useState, useEffect } from 'react';
import TableRow from '@material-ui/core/TableRow';
import gameService from '../../services/gameService';
import BetModal from '../BetModal';

function Game({ info }) {
  const [homeTeamName, setHome] = useState('');
  const [awayTeamName, setAway] = useState('');

  const getHomeTeam = async (id) => {
    const res = await gameService.getTeam(id);
    setHome(res);
  };
  const getAwayTeam = async (id) => {
    const res = await gameService.getTeam(id);
    setAway(res);
  };

  const { homeTeamID } = info;
  const { awayTeamID } = info;
  const { startTime } = info;
  const { gameID } = info;
  const { status } = info;

  useEffect(() => {
    getHomeTeam(homeTeamID);
    getAwayTeam(awayTeamID);
  });

  return (
    <TableRow key={gameID}>
      <TableCell align="center">
        {homeTeamName}
      </TableCell>
      <TableCell align="center">
        {awayTeamName}
      </TableCell>
      <TableCell align="center">{startTime}</TableCell>
      <TableCell align="center">{status}</TableCell>
      <TableCell align="center">
        <BetModal gameID={gameID} team1={{ name: `${homeTeamName}`, id: `${homeTeamID}` }} team2={{ name: `${awayTeamName}`, id: `${awayTeamID}` }} />
      </TableCell>
    </TableRow>
  );
}
export default Game;
