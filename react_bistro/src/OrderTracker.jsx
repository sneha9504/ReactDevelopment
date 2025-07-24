import React, { useState } from 'react'; // We must import useState to useit!
function OrderTracker() {
    // We use the useState hook to manage the 'totalItems' in our state.
    // 'totalItems' is the current value.
    // 'setTotalItems' is the function we use to update the value.
    // The initial value is 0.
    const [totalItems, setTotalItems] = useState(0);
    // This is our event handler function.
    // It will be called when the button is clicked.
    const handleAddItem = () => {
        // We call our setter function to update the state.
        setTotalItems(totalItems + 1);
    };
    return (
        <div className="order-tracker">
            <h3>Your Order</h3>
            <p>Total Items Added: {totalItems}</p>
            {/* The onClick attribute is our event listener.
When this button is clicked, it calls the handleAddItem function.
*/}
            <button onClick={handleAddItem}>
                Add Random Item to Order
            </button>
        </div>
    );
}
export default OrderTracker;