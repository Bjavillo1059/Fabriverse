import React, { useState, useEffect } from "react";
import {useMutation, useQuery } from "@apollo/client";
import "./bulletin.css";
import{GET_USER_BY_ID} from "../../utils/queries";
import{CREATE_NEW_POST} from "../../utils/mutations";
import Draggable from "react-draggable";
import { v4 as uuidv4 } from "uuid";
var randomColor = require("randomcolor");

function App() {

  const [createNewPost] = useMutation(CREATE_NEW_POST);
  const [item, setItem] = useState("");
  const [postIt, setPostIt] = useState(
    {
      title: "",
      postType: "",
      description: ""
    }
  );
  const[title, setTitle] = useState("");
  const[postType, setPostType] = useState("offer");
  const[description, setDescription] = useState("");
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("items")) || []
  );

  const newitem = () => {
    if(title && postType && description)
    {
      
    }
    if (item.trim() !== "") {
      const newitem = {
        id: uuidv4(),
        item: item,
        color: randomColor({
          luminosity: "light",
        }),
        defaultPos: { x: 100, y: 0 },
      };
      setItems((items) => [...items, newitem]);
      setItem("");
    } else {
      alert("Enter a item");
      setItem("");
    }
  };

  const keyPress = (event) => {
    var code = event.keyCode || event.which;
    if (code === 13) {
      newitem();
    }
  };

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  const updatePos = (data, index) => {
    let newArr = [...items];
    newArr[index].defaultPos = { x: data.x, y: data.y };
    setItems(newArr);
  };

  const deleteNote = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div className="App">
      <div className="new-item">
          <h2>New Submission</h2>
          <h3>Post Away!</h3>

        <lable>Title:</lable>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter something..."
          onKeyPress={(e) => keyPress(e)}
        />

        <label>Post Type:</label>
        <select onChange = {(e) => setPostType(e.target.value)}>
              <option value = "offer">offer</option>
              <option value = "request">request</option>
             </select> 

        <label>Description:</label>
          <textArea
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter something..."
          onKeyPress={(e) => keyPress(e)}
        >{description}</textArea>
        
        <button onClick={newitem}>ENTER</button>
      </div>
      {items.map((item, index) => {
        return (
          <Draggable
            key={item.id}
            defaultPosition={item.defaultPos}
            onStop={(e, data) => {
              updatePos(data, index);
            }}
          >
            <div style={{ backgroundColor: item.color }} className="box">
              {`${item.item}`}
              <button id="delete" onClick={(e) => deleteNote(item.id)}>
                X
              </button>
            </div>
          </Draggable>
        );
      })}
    </div>
  );
}

export default App;