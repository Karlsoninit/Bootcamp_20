import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getFriendWishes } from "../../redux/wishes/wishesOperations";

const UserList = () => {
  const { data } = useSelector((state) => state.wishes);
  const dispatch = useDispatch();
  return (
    <ul>
      {data.map((doc) => (
        <li
          style={{
            border: "1px solid green",
            width: 200,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 15,
            flexDirection: "column",
          }}
        >
          <h2>{doc.nickName}</h2>
          <button
            onClick={() => {
              console.log("click");
              dispatch(getFriendWishes(doc.nickName, doc.collectionId));
            }}
          >
            show {doc.nickName.toUpperCase()} wishes
          </button>
        </li>
      ))}
    </ul>
  );
};

export default UserList;
