export const fetchGames = (setGames) => {
    fetch('http://127.0.0.1:8000/api/games/')
    .then(response => response.json())
    .then(data => setGames(data))
    .catch(error => console.error('Error fetching games:', error));
}
