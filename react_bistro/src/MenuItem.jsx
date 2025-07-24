import React from 'react';
// This is a reusable component to display one menu item.
// It receives data via props (itemName, price, description).
function MenuItem({ itemName, price, description }) {
    return (
        <div className="menu-item">
            {/* We use the props to dynamically display the item's details */}
            <h3>{itemName}</h3>
            <p className="price">${price.toFixed(2)}</p>
            <p>{description}</p>
        </div>
    );
}
export default MenuItem;