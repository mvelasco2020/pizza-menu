import React from 'react'
import Pizza from './pizza'
import pizzaData from "../data"

const Menu = () => {
    return (
        <main className='menu'>
            <h2>Our Menu</h2>
            <ul className='pizzas'>
                {
                    pizzaData.map(item => (
                        <Pizza
                            key={item.name}
                            name={item.name}
                            ingredient={item.ingredients}
                            photoName={item.photoName}
                            price={item.price}
                            soldOut={item.soldOut}
                        />))
                }
            </ul>

        </main>
    )
}
export default Menu
