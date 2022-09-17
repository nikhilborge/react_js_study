import React from "react";
import classes from "../Custome.module.css";
import { Button } from "react-bootstrap";

function StyleCss() {
  return (
    <div>
      <h2 className="primary">Style type 1 in react js </h2>
      <h2 style={{ color: "blue", backgroundColor: "green " }}>
        Style type 2 in react js{" "}
      </h2>
      <h2 className={classes.success}>Style type 3 in react js </h2>
      <Button>Bootastrap test</Button>
      <Button variant="primary">Primary</Button>{" "}
      <Button variant="secondary">Secondary</Button>{" "}
    </div>
  );
}

export default StyleCss;
