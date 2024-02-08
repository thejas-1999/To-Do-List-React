import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

const ToDo = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      item: "Sugar",
    },
    {
      id: 2,
      checked: false,
      item: "Lemon",
    },
    {
      id: 3,
      checked: true,
      item: "Grape",
    },
    {
      id: 4,
      checked: false,
      item: "Rice",
    },
  ]);

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

  return (
    <div className="app">
      <div className="main-heading">{/* <h1>To-Do List</h1> */}</div>

      <div className="sub-heading">
        <br />
        {/* <h2>Whoop,It's {currentDay} 🌝 ☕</h2> */}
      </div>

      <div className="input"></div>
      <div className="todos">
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
                style={item.checked ? { textDecoration: "line-through" } : null}
              >
                {item.item}
              </label>
              <FaTrashAlt role="button" tabIndex="0" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default ToDo;
