import React, { useState } from 'react';

const AddGame = ({onAdd}) => {
    const [title, setTitle] = useState('');
    const [developer, setDeveloper] = useState('');
    const [releaseDate, setReleaseDate] = useState('');
    const [genre, setGenre] = useState('');
    const [review, setReview] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch('http://localhost:8000/api/games/create/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title, developer, release_date: releaseDate, genre, review }),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Game added:', data);
                setTitle('');
                setDeveloper('');
                setReleaseDate('');
                setGenre('');
                setReview('');
                onAdd();
            })
            .catch(error => console.error('Error adding game:', error));
    };
    

    return (
        <form onSubmit={handleSubmit}>
            <h2> Add a new game </h2>
            <input type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" />
            <input type="text" value={developer} onChange={e => setDeveloper(e.target.value)} placeholder="Developer" />
            <input type="text" value={releaseDate} onChange={e => setReleaseDate(e.target.value)} placeholder="Release Date" />
            <input type="text" value={genre} onChange={e => setGenre(e.target.value)} placeholder="Genre" />
            <input type="text" value={review} onChange={e => setReview(e.target.value)} placeholder="Review" />
            <button type="submit">Add game</button>
        </form>
    )
}

export default AddGame;