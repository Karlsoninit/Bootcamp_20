import React from "react";

// const priorityContainer = (priority) => {
//   switch (priority) {
//     case "low":
//       return "green";
//     case "high":
//       return "red";
//     default:
//       return "gray";
//   }
// };

const priorityContainer = {
  low: "green",
  high: "red",
};

const WishesListItem = ({ wish, description, deleteWish, id, priority }) => {
  const color = priorityContainer[priority] || "gray";
  console.log("color", color);
  return (
    <div style={{ border: `1px solid ${color}` }}>
      <h2>{wish}</h2>
      <p>{description}</p>
      <button onClick={() => deleteWish(id)}>delete</button>
    </div>
  );
};

export default WishesListItem;
