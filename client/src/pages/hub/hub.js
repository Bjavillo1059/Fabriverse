import React from "react";
import {useMutation, useQuery } from "@apollo/client";
import ReactDOM from "react-dom";
import "./hub.css";

import{
  ALL_POSTS
} from "../../utils//queries";   



function Hub() {
   
    const {loading, error, data} =  useQuery(ALL_POSTS);
    console.log(data);
    if (loading) return null;
    if (error) return `Error! ${error}`;

    return(
        <div>
            {data.allPosts.map((post) => (
                <div>
                <p> Post Author: {post.postAuthor}</p>
                </div>
            ))}
        </div>
    );
}

export default Hub;