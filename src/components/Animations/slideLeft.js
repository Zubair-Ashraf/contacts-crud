import React from "react";
import { slideInLeft } from "react-animations";
import Radium, { StyleRoot } from "radium";

const styles = {
  bounce: {
    animation: "2s",
    animationName: Radium.keyframes(slideInLeft, "slideInLeft"),
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
