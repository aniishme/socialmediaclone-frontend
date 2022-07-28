import React from "react";

import "../assets/scss/components/commentbox.scss";
import ProfileImage from "./ProfileImage";

function CommentBox() {
  return (
    <div>
      <div className="comment-wrapper">
        <ProfileImage size={40} />
        <input
          type="text"
          placeholder="Write a comment..."
          className="comment-input"
        />
      </div>
    </div>
  );
}

export default CommentBox;
