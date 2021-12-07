import React from "react";
import styled from "styled-components";
// import Request from "../RequestBlog/RequestBlog";

const PostStyled = styled(Post)``;

function Post() {
  return (
    <PostStyled>
      <div className="post-modal modal">
        <div className="modal-content">
          <div className="modal-header">
            <h2 className="modal-title">Post</h2>
          </div>
          <div className="modal-body">
            Request Blog
          </div>
          <div className="modal-footer">
              <button className="btn btn-primary">Close</button>
          </div>
        </div>
      </div>
    </PostStyled>
  );
}

export default Post;
