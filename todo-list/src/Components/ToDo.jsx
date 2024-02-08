import { useState } from "react";
import { FaTrashAlt, FaPlus } from "react-icons/fa";

const ToDo = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      item: "item1",
    },
    {
      id: 2,
      checked: false,
      item: "item2",
    },
    {
      id: 3,
      checked: true,
      item: "item3",
    },
    {
      id: 4,
      checked: false,
      item: "item4",
    },
  ]);

  const [newItem, setNewItem] = useState("");

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : item;
    const myNewItem = { id, checked: false, item };
    const listItems = [...items, myNewItem];
    setItems(listItems);
    localStorage.setItem("shoppinglist", JSON.stringify(listItems));
  };

  const currentDate = new Date();
  const dayOfWeek = currentDate.getDay();
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentDay = daysOfWeek[dayOfWeek];

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
    localStorage.setItem("shoppinglist", JSON.stringify(listItems));
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    localStorage.setItem("shoppinglist", JSON.stringify(listItems));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem("");
  };

  return (
    <div className="app">
      <div className="main-heading">{/* <h1>To-Do List</h1> */}</div>

      <div className="sub-heading">
        {/* <h2>Whoop,It's {currentDay} 🌝 ☕</h2> */}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          autoFocus
          id="addItem"
          placeholder="what to do...."
          required
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button type="submit" aria-label="Add Item">
          <FaPlus />
        </button>
      </form>
      <div className="todos">
        {items.length ? (
          <ul>
            {items.map((item) => (
              <li className="todo" key={item.id}>
                <input
                  type="checkbox"
                  onChange={() => handleCheck(item.id)}
                  checked={item.checked}
                />
                <label
                  onDoubleClick={() => handleCheck(item.id)}
                  style={
                    item.checked ? { textDecoration: "line-through" } : null
                  }
                >
                  {item.item}
                </label>
                <FaTrashAlt
                  onClick={() => handleDelete(item.id)}
                  role="button"
                  tabIndex="0"
                />
              </li>
            ))}
          </ul>
        ) : (
          <p style={{ marginTop: "2rem" }}>YOUR TO-DO'S ARE EMPTY</p>
        )}
      </div>
    </div>
  );
};
export default ToDo;
