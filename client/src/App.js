// /client/src/App.js

import React, { useState, useEffect } from "react";

// SERVICES
import gameService from './services/gameService';

function App() {
  const [games, setGames] = useState(null);

  useEffect(() => {
    if(!games) {
      getGames();
    }
  })

  const getGames = async () => {
    let res = await gameService.getAll();
    setGames(res);
  }

  const renderGame = game => {
    return (
      <li key={game._id} className="list__item game">
        <h3 className="game__name">{game.name}</h3>
        <p className="game__description">{game.description}</p>
      </li>
    );
  };

  return (
    <div className="App">
      <ul className="list">
        {(games && games.length > 0) ? (
          games.map(game => renderGame(game))
        ) : (
          <p>No games found</p>
        )}
      </ul>
    </div>
  );
}

export default App;