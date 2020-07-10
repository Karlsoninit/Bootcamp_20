import React from "react";
import Spinner from "react-loader-spinner";

const Loader = () => {
  return (
    <div
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <Spinner
        type="Puff"
        color="red"
        height={200}
        width={200}
        timeout={3000} //3 secs
      />
    </div>
  );
};

export default Loader;
