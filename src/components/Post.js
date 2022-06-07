import React from "react";
import "../assets/scss/components/post.scss";
import ProfileImage from "./ProfileImage";

function Post() {
  const postObj = {
    title: "This is my first post here...",
    image:
      "https://images.unsplash.com/photo-1651001990186-20727ee3ab9e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
    likes: 1,
    comments: [],
  };
  return (
    <div className="post-wrapper">
      <div className="post-profile">
        <div className="post-profile-image">
          <ProfileImage size={50} />
        </div>
        <div className="post-profile-name">Anish Sharma</div>
      </div>
      <div className="post-title">{postObj.title}</div>
      {postObj.image ? (
        <div className="post-image-wrapper">
          <img src={postObj.image} alt={postObj.title} />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Post;
