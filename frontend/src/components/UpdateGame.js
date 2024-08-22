import React, { useState } from 'react';

const UpdateGame = ({ onUpdate }) => {
    const [title, setTitle] = useState('');
    const [review, setReview] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        // Fetch game by game id
        fetch(`http://127.0.0.1:8000/api/games/`)
            .then((response) => response.json())
            .then((games) => {
                const game = games.find((g) => g.title.toLowerCase() === title.toLowerCase());
                if (game) {
                    return fetch(`http://127.0.0.1:8000/api/games/${game.id}/update/`, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ review }),
                    });
                } else {
                    throw new Error('Game not found');
                }
            })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Failed to update');
                }
                onUpdate(); 
                setTitle('');
                setReview('');
            })
            .catch((error) => setError(error.message));
    };

    return (
        <div>
            <h2>Update Game Review</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Game Title:</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>New Review:</label>
                    <input
                        type="text"
                        value={review}
                        onChange={(e) => setReview(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Update Review</button>
            </form>
        </div>
    );
};

export default UpdateGame;
