import React from "react";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h5>FOLLOWED CHANNELS</h5>
      <Channel
        avatar="https://i.picsum.photos/id/888/200/300.jpg?hmac=WJcjbSQSOOzfBpPsUKZHZzjBCJjDv43RwJ8P8Ag2xj4"
        name="cleverprogrammer"
        followers="816k"
      />
      <Channel
        avatar="https://i.picsum.photos/id/379/200/300.jpg?hmac=IEcRQyv-DIaRsldE8jIdMRW5IHCTyemefU-bbCJpY34"
        name="PiNNyBoy"
        followers="215k"
      />
      <h5>RECOMMENDED CHANNELS</h5>
      <Channel
        avatar="https://i.picsum.photos/id/400/200/300.jpg?hmac=FD74WIE42b0qUFf-QggfWsoHPJqcGgjSatRvUM9dAws"
        name="@davidrakosi"
        followers="1625"
      />
      <p className="sidebar__topShowMore">Show More</p>
    </div>
  );
};

export default Sidebar;
