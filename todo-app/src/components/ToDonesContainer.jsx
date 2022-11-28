import React from "react";

const ToDonesContainer = () => {
  const toDones = [
    { text: "Make a website", done: true },
    { text: "Call my mom", done: true },
    { text: "Finish reading my book", done: true },
    { text: "Make more moneys", done: true },
  ];

  const toDonesItems = toDones.map((el) => {
    return (
      <div className="todones-item" key={el.text}>
        <p>{el.text}</p>
        <div className="actions">
          <button className="btn">&#8635;</button>
        </div>
      </div>
    );
  });

  return (
    <div className="todones-container">
      <h3>BACKLOG</h3>
      {toDones.length > 0 && toDonesItems}
    </div>
  );
};

export default ToDonesContainer;
