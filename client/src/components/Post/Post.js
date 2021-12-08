import React from "react";
import styled from "styled-components";

const PostStyled = styled(Post)`
:root {
  --color1: #505857;
  --color2: #567a6f;
  --color3: #669d7b;
  --color4: #87be7d;
  --color5: #b9dd78;
  --color6: #f9f871;
  --color7: rgb(0, 0, 0);
  --font-family-2: Arial;
  --font-family-3: sans-serif;
}

width: 100%;
.form-group {
  width: 100%;
  margin-bottom: 2rem;
}
`;

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
