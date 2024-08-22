import React, { useState, useEffect } from 'react';
import GameList from './GameList';
import Manager from './DeleteHandler';
import UpdateGame from './UpdateGame';

import styles from '../styles/styles.module.css';


const App = () => {
    const [games, setGames] = useState([]);
    const [error, setError] = useState(null);

    const fetchGames = () => {
        fetch('http://127.0.0.1:8000/api/games/')
            .then(response => response.json())
            .then(data => {
                setGames(data);
            })
            .catch(error => {
                console.error('Error fetching games:', error);
                setError('Failed to load games');
            });
    }
    useEffect(() => {
        fetchGames();
    }, []);

    return (
        <div>
            <GameList games={games} fetchGames={fetchGames} error={error} className={styles.tableContainer}/>
            <Manager games={games} setGames={setGames} fetchGames={fetchGames} />
            <UpdateGame onUpdate={fetchGames}/>
        </div>
    );
};

export default App;
