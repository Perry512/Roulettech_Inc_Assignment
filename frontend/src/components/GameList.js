import React from 'react';
import AddGame from './AddGame';

import styles from '../styles/styles.module.css';

const GameList = ({ games, fetchGames, error }) => {
    return (
        <div>
        <AddGame onAdd={fetchGames} />
        <h1>Game List</h1>
        {error && <p>{error}</p>}
        <div className={styles.table}>
                <div className={styles.tableHeader}>
                    <div className={styles.tableRow}>
                    <div className={styles.tableCell}>Title</div>
                    <div className={styles.tableCell}>Developer</div>
                    <div className={styles.tableCell}>Genre</div>
                    <div className={styles.tableCell}>Release Date</div>
                    <div className={styles.tableCell}>Review</div>
                    </div>
                </div>
                <div className="table-body">
                    {games.map(game => (
                        <div key={game.id} className={styles.tableRow}>
                            <div className={styles.tableCell}>{game.title}</div>
                            <div className={styles.tableCell}>{game.developer}</div>
                            <div className={styles.tableCell}>{game.genre}</div>
                            <div className={styles.tableCell}>{game.release_date}</div>
                            <div className={styles.review}>{game.review}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>  
    );
};

export default GameList;
