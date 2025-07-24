import React from 'react';
import Menu from './Menu';
import OrderTracker from './OrderTracker';
// The App component is the main component that renders all others.
function App() {
  return (
    // We use a Fragment <>...</> because a component can only return onetop-level element.
    <>
      <Menu />
      <OrderTracker />
    </>
  );
}
export default App;