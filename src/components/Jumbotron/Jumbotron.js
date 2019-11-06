import React from "react";
import "./Jumbotron.css"

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 100, clear: "both", paddingTop: 40, textAlign: "center" }}
      className="jumbotron dash-head"
    >
      {children}
    </div>
  );
}

export default Jumbotron;