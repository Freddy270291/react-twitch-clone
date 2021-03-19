import React from "react";
import "./Profile.css";
import RecentItem from "./RecentItem";

const Profile = () => {
  return (
    <div className="profile">
      <div className="profile__topLeft">
        <img src="https://i.picsum.photos/id/882/200/200.jpg?hmac=cVjON67mkFjmhVFCS4lYVS-iFp1D3KP-khmMizQxxhQ" />
        <div className="profile__topLeftDetails">
          <h1>cleverprogrammer</h1>
          <h3>816k followers</h3>
        </div>
      </div>
      <div className="profile__topRight">
        <i className="fas fa-heart graybg"></i>
        <i className="fas fa-bell graybg"></i>
        <i className="fas fa-ellipsis-v"></i>
      </div>
      <div className="profile__menu">
        <h2 className="active">Home</h2>
        <h2>About</h2>
        <h2>Schedule</h2>
        <h2>Videos</h2>
        <h2>
          <i className="fas fa-arrow-up"></i>
        </h2>
        <h2>Chat</h2>
      </div>

      <div className="profile__recent">
        <h2>Recent broadcasts</h2>
        <div className="profile__recentItems">
          <RecentItem
            url={"https://www.youtube.com/embed/ktjafK4SgWM"}
            title={"Learn the MERN Stack - Full tutorial for Beginners"}
          />
          <RecentItem
            url={"https://www.youtube.com/embed/DFzP6gA0tkQ"}
            title={"How to earn $1.000 as a freelancer"}
          />
          <RecentItem
            url={"https://www.youtube.com/embed/l1yXs-7RU5E"}
            title={"Let'sbuild an Alexa Skill in 2020"}
          />
          <RecentItem
            url={"https://www.youtube.com/embed/5NlVMTYGlwg"}
            title={"It's time to learn REACT 2.0"}
          />
        </div>
        <div className="profile__categories">
          <h2>cleverprogrammer's recently streamed categories</h2>
          <img src="https://static-cdn.jtvnw.net/ttv-boxart/Science%20&%20Technology-285x380.jpg" />
          <h3>Science & Technology</h3>
        </div>
      </div>
    </div>
  );
};

export default Profile;
