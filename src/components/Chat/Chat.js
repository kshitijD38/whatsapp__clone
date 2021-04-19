import { Avatar, IconButton } from "@material-ui/core";
import {
  AttachFile,
  InsertEmoticon,
  Mic,
  SearchOutlined,
} from "@material-ui/icons";
import MoreVert from "@material-ui/icons/MoreVert";
import React, { useState } from "react";
import "./Chat.css";

const Chat = () => {
  const [input, setInput] = useState();

  const sendMessage = () => {};

  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar />
        <div className="chat__headerInfo">
          <h3>Room Name</h3>
          <p>Last Seen at...</p>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          {/* <IconButton>
            <AttachFile />
          </IconButton> */}
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="chat__body">
        <p className="chat__message">
          <span className="chat__name">kshitij</span>MESSAGE
          <span className="chat__timestamp">
            {new Date() /* (message.timestamp?.toDate()) */
              .toUTCString()}
          </span>
        </p>
        <p className="chat__message chat__reciever">
          <span className="chat__name">kshitij</span>MESSAGE
          <span className="chat__timestamp">
            {new Date() /* (message.timestamp?.toDate()) */
              .toUTCString()}
          </span>
        </p>
        <p className="chat__message">
          <span className="chat__name">kshitij</span>MESSAGE
          <span className="chat__timestamp">
            {new Date() /* (message.timestamp?.toDate()) */
              .toUTCString()}
          </span>
        </p>
      </div>
      <div className="chat__footer">
        <IconButton>
          <InsertEmoticon />
        </IconButton>
        <IconButton>
          <AttachFile />
        </IconButton>
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message"
            type="text"
          />
          <button onClick={sendMessage} type="submit">
            Send a message
          </button>
        </form>
        <IconButton>
          <Mic />
        </IconButton>
      </div>
    </div>
  );
};

export default Chat;
