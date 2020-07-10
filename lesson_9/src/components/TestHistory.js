import React from "react";

const TestHistory = ({ children }) => {
  const updateChildrenWithProps = React.Children.map(children, (child) => {
    return React.cloneElement(child, {
      history: { location: window.location },
      method: {
        push: (param) => window.location.assign(param),
      },
    });
  });

  return updateChildrenWithProps;
};

export default TestHistory;
