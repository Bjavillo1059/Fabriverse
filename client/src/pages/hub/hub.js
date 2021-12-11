import React from "react";
import {useMutation, useQuery } from "@apollo/client";
import ReactDOM from "react-dom";
import{ ALL_POSTS } from "../../utils//queries";
import "./hub.css"; 
import img from "../../images/wood_bench.jpg"; 



function Hub() {
   
    const {loading, error, data} =  useQuery(ALL_POSTS);
    console.log(data);
    if (loading) return null;
    if (error) return `Error! ${error}`;

    return(
        <div class="hub">
        <img src={ img } alt="hub-img" />       
            {data.allPosts.map((post) => (
                
                <div class="hubCard">
                    <h1>{post.postType}</h1>
                    <h2>{post.title}</h2>
                    <p>Author: {post.postAuthor}</p>
                    <p>{post.postType}: {post.description}</p>
                    <p>${post.price}</p>
                    <p>Location: {post.location}</p>
                    <br/>
                </div>           
                
            ))}
        </div>
    );
}

export default Hub;