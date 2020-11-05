import React from "react";
import { zoomIn } from "react-animations";
import Radium, { StyleRoot } from "radium";

const styles = {
  bounce: {
    animation: "1s",
    animationName: Radium.keyframes(zoomIn, "zoomIn"),
  },
};

const Animation = ({ children }) => {
  return (
    <StyleRoot>
      <div className="animation" style={styles.bounce}>
        {children}
      </div>
    </StyleRoot>
  );
};

export default Animation;
