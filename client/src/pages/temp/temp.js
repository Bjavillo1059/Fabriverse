import React, { useState, useEffect } from "react";
import { useMutation, useQuery } from "@apollo/client";
import "./bulletin.css";
import img from "../../../src/images/bulletin-img2.jpg";

import { GET_ME } from "../../utils/queries";
import { CREATE_NEW_POST, DELETE_POST } from "../../utils/mutations";

import Draggable from "react-draggable";
import { v4 as uuidv4 } from "uuid";
var randomColor = require("randomcolor");

function Bulletin() {
  const [createNewPost] = useMutation(CREATE_NEW_POST);
  const[deletePost] = useMutation(DELETE_POST);

  const {loading, data, error} = useQuery(GET_ME);
  const posts = data?.me.posts||[];
  const postIts = posts.map((post, index) => {
    return ({       
    id: uuidv4(),
    postId: post._id,
    title: post.title,
    postType: post.postType,
    description: post.description,
    color: randomColor({luminosity: "light"}),
    defaultPos: { x:0, y: 0 }
    })});
 
  const[title, setTitle] = useState("");
  const[postType, setPostType] = useState("");
  const[description, setDescription] = useState("");
  const [items, setItems] = useState([...postIts]);

  console.log(items);
  const newitem = () => {
    if(title.trim() !=="" && postType.trim() !=="" && description.trim() !=="")
    {
      const post = createNewPost({variables: {input: {postType: postType, description: description, title: title}}});
      const newItem = {
        id: uuidv4(),
        postId: post._id,
        title: title,
        postType: postType,
        description: description,

        color: randomColor({
          luminosity: "light",
        }),
        defaultPos: { x: 100, y: 0 },
      };
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

  const deleteNote = (id, postId) => {
    deletePost({variables:{_id : postId}});
    setItems(items.filter((item) => item.id !== id));
  };
  if (loading) return null;
  if (error) return `Error! ${error}`;
  return (
    <>
      <img src={img} alt="bulletin-img2" />
      <div className="App">
        <div className="new-item">
          <div className="new-item-input">
            <h2>New Submission</h2>
            <h3>Post Away!</h3>

            <div className="title-input">
              <lable>Title:</lable>
              {""}
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter something..."
                onKeyPress={(e) => keyPress(e)}
              />
            </div>

            <div className="post-type-input">
              <label>Post Type:</label>
              {""}
              <select value = {postType} onChange={(e) => setPostType(e.target.value)}>
                <option value=""> pick one </option>
                <option value="offer">offer</option>
                <option value="request">request</option>
              </select>
            </div>

            <div className="description-input">
              <label>Description:</label>
              {""}
              <textarea
              value = {description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter something..."
                onKeyPress={(e) => keyPress(e)}
              />
                
              <button onClick={newitem}>ENTER</button>
            </div>
          </div>
        </div>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div>
            {items.map((item, index) => {
              return (
                <>
                  <div className="post-item-container">
                    <Draggable
                      key={item.id}
                      defaultPosition={item.defaultPos}
                      onStop={(e, data) => {
                        updatePos(data, index);
                      }}
                    >
                      <div
                        style={{ backgroundColor: item.color, zIndex: -1, width: "50%" }}
                        className="box"
                      >
                        <p>Title: {`${item.title}`} </p>
                        <p>Post Type: {`${item.postType}`}</p>
                        <p>Description: {`${item.description}`}</p>
                        <button
                          id="delete"
                          onClick={(e) => deleteNote(item.id)}
                        >
                          X
                        </button>
                      </div>
                    </Draggable>
                  </div>
                </>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}

export default Bulletin;
