import React from 'react'

const Footer = () => {
    const hour = new Date().getHours();
    const openHour = 9;
    const closeHour = 22;

    return (
        <div className='footer'>
            <div className='order'>
                <button className='btn'>Order Now</button>
            </div>
            {
                hour >= openHour && hour < closeHour ?
                    `${new Date().toLocaleString()}. Come see us we are currently open!`
                    : "Shucks you missed us, come back tomorrow at 9AM!"
            }

        </div>
    )
}

export default Footer
