import React, { useContext } from "react";
import SimpleCard from "../../ui/simpleCard/SimpleCard";
import { ApplicationContext } from "../../context/application/ApplicationContext";

// whith hooks useContext

const Todos = ({ todos, deleteTask }) => {
  const { changeTheme, theme } = useContext(ApplicationContext);
  return (
    <>
      <button onClick={changeTheme}>theme: {!theme ? "dark" : "white"}</button>
      <ul style={{ display: "flex", flexWrap: "wrap" }}>
        {todos.map((task) => (
          <li key={task.id}>
            <SimpleCard deleteTask={deleteTask} {...task} theme={theme} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Todos;

// const Todos = ({ todos, deleteTask }) => {
//   return (
//     <ApplicationContext.Consumer>
//       {({ theme, changeTheme }) => (
//         <>
//           <button onClick={changeTheme}>
//             theme: {!theme ? "dark" : "white"}
//           </button>
//           <ul style={{ display: "flex", flexWrap: "wrap" }}>
//             {todos.map((task) => (
//               <li key={task.id}>
//                 <SimpleCard deleteTask={deleteTask} {...task} theme={theme} />
//               </li>
//             ))}
//           </ul>
//         </>
//       )}
//     </ApplicationContext.Consumer>
//   );
// };

// export default Todos;
