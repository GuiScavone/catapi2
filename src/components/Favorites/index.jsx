import React from "react";

export const Favorites = ({ favourites }) => {
    return (
       <>
        <div>
            <h2>Favourites</h2>
            <ul>
                {favourites.map((favourites, index) => (
                    <li key={index}>
                        <img src={favourites.url} alt={`Favourite cat ${index+1}`} />
                    </li>
                ))}
            </ul>
        </div>
       </>
    )
}