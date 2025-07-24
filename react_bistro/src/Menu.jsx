// src/Menu.jsx
import React from 'react';
import MenuItem from './MenuItem'; // Import the component we just created
function Menu() {
    return (
        <div className="menu-container">
            <h1>The React Bistro</h1>
            <h2>Our Menu</h2>
            {/* Here we are using our MenuItem component.
We pass unique data to each one using props.
*/}
            <MenuItem
                itemName="The State Burger"
                price={15.99}
                description="A classic beef burger, representing the foundational
state of any good meal."
            />
            <MenuItem
                itemName="Props-peroni Pizza"
                price={18.50}
                description="A delicious pizza where each slice (component) gets its
toppings (props) from the main pie."
            />
            <MenuItem
                itemName="Component Carbonara"
                price={16.75}
                description="A well-structured pasta, where each ingredient is a
self-contained component."
            />
        </div>
    );
}
export default Menu;