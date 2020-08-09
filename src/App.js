import React, { useState, useEffect } from "react";
import { FormControl, Input } from "@material-ui/core";
import "./App.css";
import Message from "./Message";
import db from "./firebase";
import firebase from "firebase";
import FlipMove from "react-flip-move";
import SendIcon from "@material-ui/icons/Send";
import { IconButton } from "@material-ui/core";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([{}]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    setUsername(prompt("Please Enter Your Name:"));
  }, []);

  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setMessages(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);

  console.log(messages);

  const sendMessage = (event) => {
    event.preventDefault();

    db.collection("messages").add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
  };
  return (
    <div className="App">
      <h1>Messenger!!</h1>
      <img
        src="data:image/jpeg;base64,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"
        alt="logo"
      />
      <h2>Welcome {username}</h2>
      <form className="app_form">
        <FormControl className="formControl">
          <Input
            className="app_input"
            placeholder="Enter a message..."
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />

          <IconButton
            className="app_icon"
            disabled={!input}
            variant="contained"
            color="primary"
            type="submit"
            onClick={sendMessage}
          >
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>

      <FlipMove>
        {messages.map((message) => (
          <Message
            key={message.timestamp}
            username={username}
            message={message}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default App;
