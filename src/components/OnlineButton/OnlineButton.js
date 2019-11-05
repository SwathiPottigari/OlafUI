import React from "react";


function OnlineButton(props) {
  return (
      <button type="button" className="btn online-button btn-danger" style={{ float: "right", marginBottom: 10 }}{...props}>Offline</button>
  );
}

export default OnlineButton;