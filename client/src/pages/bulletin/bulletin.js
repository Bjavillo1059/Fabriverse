import React, { useState, useEffect } from "react";
import {useMutation, useQuery } from "@apollo/client";
import "./bulletin.css";
import{ONE_USER_BY_ID} from "../../utils/queries";
import{CREATE_NEW_POST} from "../../utils/mutations";
import Draggable from "react-draggable";
import { v4 as uuidv4 } from "uuid";
var randomColor = require("randomcolor");

function Bulletin() {

  const [createNewPost] = useMutation(CREATE_NEW_POST);

  const {loading, data} = useQuery(ONE_USER_BY_ID, {variables: {_id: "61b2afb56c642157482ff021"}});
  const posts = data?.oneUserById.posts||[];
  const postIts = posts.map((post, index) => {
    return ({       
    id: uuidv4(),
    title: post.title,
    postType: post.postType,
    description: post.description,
    color: randomColor({luminosity: "light"}),
    defaultPos: { x:0, y: 0 }
    })});
 
  
  const [item, setItem] = useState("");

  const[title, setTitle] = useState("");
  const[postType, setPostType] = useState("");
  const[description, setDescription] = useState("");
  const [items, setItems] = useState([...postIts]);

console.log(items);
  const newitem = () => {
    if(title.trim() !=="" && postType.trim() !=="" && description.trim() !=="")
    {

      const newItem = {
        id: uuidv4(),
        title: title,
        postType: postType,
        description: description,

        color: randomColor({
          luminosity: "light",
        }),
        defaultPos: { x: 100, y: 0 },
      };
     createNewPost({variables: {input: {postAuthor: "Amiko", postType: postType, description: description, title: title}}});
      setItems([...items, newItem]);
      setTitle("");
      setPostType("");
      setDescription("");
    } else {
      alert("Enter something for every field");
      setTitle("");
      setPostType("");
      setDescription("");
    }
  };

  const keyPress = (event) => {
    var code = event.keyCode || event.which;
    if (code === 13) {
      newitem();
    }
  };

  useEffect(() => {
    setItems(postIts);
  }, [loading]);

  const updatePos = (data, index) => {
    let newArr = [...items];
    newArr[index].defaultPos = { x: data.x, y: data.y };
  };

  const deleteNote = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };
  return (
    <div className="App">
      <div className="new-item">
          <h2>New Submission</h2>
          <h3>Post Away!</h3>

        <lable>Title:</lable>{""}
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter something..."
          onKeyPress={(e) => keyPress(e)}
        />

        <label>Post Type:</label>{""}
        <select onChange = {(e) => setPostType(e.target.value)}>
              <option value = "" > pick one </option>
              <option value = "offer">offer</option>
              <option value = "request">request</option>
             </select> 

        <label>Description:</label>{""}
          <textArea
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter something..."
          onKeyPress={(e) => keyPress(e)}
        >{description}</textArea>
        
        <button onClick={newitem}>ENTER</button>
      </div>
      {loading ? (
        <div>Loading...</div>
      ) : ( 
      <div>
      {items.map((item, index) => {
        return (
          <Draggable
            key={item.id}
            defaultPosition={item.defaultPos}
            onStop={(e, data) => {
              updatePos(data, index);
            }}
          >
            <div style={{ backgroundColor: item.color, zIndex:-1 }} className="box">
              <p>Title: {`${item.title}`} </p>
              <p>Post Type: {`${item.postType}`}</p>
              <p>Description: {`${item.desciption}`}</p>
              <button id="delete" onClick={(e) => deleteNote(item.id)}>
                X
              </button>
            </div>
          </Draggable>
        );
      })}
      </div>
      )}
    </div>
  );
}

export default Bulletin;