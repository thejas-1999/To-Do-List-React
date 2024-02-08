const ToDo = () => {
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

  return (
    <div>
      <div className="app">
        <div className="main-heading">
          <h1>To-Do List</h1>
        </div>

        <div className="sub-heading">
          <br />
          <h2>Whoop,It's {currentDay} 🌝 ☕</h2>
        </div>
      </div>
    </div>
  );
};
export default ToDo;
