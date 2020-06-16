import React from "react";
import styles from "./sold.module.css";

console.log("styles", styles);

const chooseWidth = () => {
  const windowWidth = window.innerWidth;
  return windowWidth < 768 ? styles.smallImage : styles.mediumImage;
};

const Sold = () => {
  const widthStyle = chooseWidth();
  return (
    <div className={styles.container} style={{ width: 800 }}>
      <h2>SOLD</h2>
      <img
        className={widthStyle}
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2017%2F08%2F18%2F03%2F59%2Fsold-2653722__340.jpg&f=1&nofb=1"
        alt="sold"
      />
    </div>
  );
};

export default Sold;
