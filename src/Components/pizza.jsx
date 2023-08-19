import React from 'react'

const Pizza = ({ price, ingredient, photoName, name, soldOut }) => {
    return (
        <li className={`pizza ${soldOut ? "sold-out" : ""}`}>
            <img src={photoName}
                alt="pizza"></img>
            <div>
                <h3>{name} {soldOut ? "(Sold Out!)" : ""}</h3>
                <p>{ingredient}</p>
                <span>{price}</span>
            </div>
        </li>
    )
}

export default Pizza
