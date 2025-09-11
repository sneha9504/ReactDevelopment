import { useState } from "react";
import "./App.css";

const Dropdown = ({ items }) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  return (
    <div className="dropdown">
      <div className="dropdown-btn" onClick={() => setOpen(!open)}>
        {selected ? selected.value : "Select an option"}
      </div>
      {open && (
        <div className="dropdown-content">
          {items.map((item) => (
            <div
              className="dropdown-item"
              key={item.id}
              onClick={() => {
                setSelected(item);
                setOpen(false);
              }}
            >
              {item.value}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

function App() {
  const items = [
    { id: 1, value: "Option 1" },
    { id: 2, value: "Option 2" },
    { id: 3, value: "Option 3" },
    { id: 4, value: "Option 4" },
  ];

  return (
    <div className="App">
      <h1>Custom Dropdown</h1>
      <Dropdown items={items} />
    </div>
  );
}

export default App;
