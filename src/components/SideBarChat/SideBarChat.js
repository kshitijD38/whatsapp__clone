import { Avatar } from "@material-ui/core";
import React from "react";
import "./SideBarChat.css";

const SideBarChat = () => {
  return (
    <div className="sidebarchat">
      <Avatar />
      <div className="sidebarchat__info">
        <h2>Room Name</h2>
        <p>Last message</p>
      </div>
    </div>
  );
};

export default SideBarChat;
