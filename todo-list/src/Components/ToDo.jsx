import { useState } from "react";
import { FaTrashAlt, FaPlus } from "react-icons/fa";

const ToDo = () => {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("shoppinglist"))
  );

  const [newItem, setNewItem] = useState("");

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : item;
    const myNewItem = { id, checked: false, item };
    const listItems = [...items, myNewItem];
    setItems(listItems);
    localStorage.setItem("shoppinglist", JSON.stringify(listItems));
  };

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
      <div className="header">
        <h1>To-Do List</h1>

        <h2>
          Whoop,It's{" "}
          {new Date().toLocaleDateString("en-US", { weekday: "long" })}🌝 ☕
        </h2>
      </div>
      <form onSubmit={handleSubmit} className="input">
        <input
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
                <div className="left">
                  <input
                    type="checkbox"
                    onChange={() => handleCheck(item.id)}
                    checked={item.checked}
                  />
                </div>
                <label
                  onDoubleClick={() => handleCheck(item.id)}
                  style={
                    item.checked ? { textDecoration: "line-through" } : null
                  }
                >
                  {item.item}
                </label>
                <div className="right">
                  <FaTrashAlt
                    onClick={() => handleDelete(item.id)}
                    role="button"
                    tabIndex="0"
                  />
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p style={{ marginTop: "2rem" }} className="empty">
            YOUR TO-DO'S ARE EMPTY
          </p>
        )}
      </div>
    </div>
  );
};
export default ToDo;
