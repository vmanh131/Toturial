import React from "react";

const Conditional = () => {
  const DisplayOn = () => {
    return <h4>Display ON</h4>;
  };
  const DisplayOff = () => {
    return <h4>Display OFF</h4>;
  };
  const Display = (prop) => {
    const isDisplay = prop.isDisplay;
    if (isDisplay) {
      return <DisplayOn />;
    }
    return <DisplayOff />;
  };
  return <Display isDisplay={true} />;
};

export default Conditional;
