import React from "react";
import "./Body.css";
import Profile from "./Profile";

const Body = () => {
  return (
    <div className="body">
      <div className="body--left">
        <Profile />
      </div>
      <div className="body--rightPlaceholder"></div>
    </div>
  );
};

export default Body;
