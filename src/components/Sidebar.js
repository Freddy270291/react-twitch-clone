import React from "react";
import Channel from "./Channel";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <h5>FOLLOWED CHANNELS</h5>
        <Channel
          avatar="https://i.picsum.photos/id/882/200/200.jpg?hmac=cVjON67mkFjmhVFCS4lYVS-iFp1D3KP-khmMizQxxhQ"
          name="cleverprogrammer"
          followers="816k"
        />
        <Channel
          avatar="https://i.picsum.photos/id/514/200/200.jpg?hmac=ywW8zoc6PM1wbLeZvKJPGczujmQgEM7QOTaWiOTjhjM"
          name="PiNNyBoy"
          followers="215k"
        />
        <h5>RECOMMENDED CHANNELS</h5>
        <Channel
          avatar="https://i.picsum.photos/id/194/200/200.jpg?hmac=f1VYjvgDG_6vPwJyTb-Xl1HpXKM23stmhFUnmPE_yL8"
          name="@davidrakosi"
          followers="1625"
        />
        <p className="sidebar__topShowMore">Show More</p>
      </div>
      <div className="sidebar__bottom">
        <div className="sidebar__bottomContainer">
          <i className="fas fa-search"></i>
          <input type="text" placeholder="Search to Add Friends" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
