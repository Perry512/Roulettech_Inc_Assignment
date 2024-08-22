import React from "react";

const DeleteGame = ({ deleteLast, deleteAll }) => {

    return (
        <div> 
            <button onClick={deleteLast}> Delete last </button>
            <button onClick={deleteAll}> Delete all </button>
        </div>
    )
}

export default DeleteGame;