import React from "react";
import DeleteGame from "./DeleteGame";

const Manager = ({ games, setGames, fetchGames }) => {

    const deleteLast = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8000/api/games/delete-last-game/', {
                method: 'DELETE',
            });
    
            console.log("Response from server:", response);
    
            if (response.ok) {
                console.log("Last game deleted successfully.");
                fetchGames(); 
            } else {
                console.error('Error deleting last game:', response.statusText);
            }
        } catch (error) {
            console.error('Error deleting last game:', error);
        }
    };
    

    const deleteAll = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8000/api/games/delete-all/', {
                method: 'DELETE',
            });
            if (response.ok) {
                fetchGames();  // Refetch games after deletion
            }
        } catch (error) {
            console.error('Error deleting all games:', error);
        }
    };

    return (
        <div>
            <DeleteGame deleteLast={deleteLast} deleteAll={deleteAll} />
        </div>
    );
};

export default Manager;
