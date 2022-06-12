import React from "react";
import "../assets/scss/components/post.scss";
import Interaction from "./Interaction";
import ProfileImage from "./ProfileImage";

function Post() {
  const postObj = {
    title: "This is my first post here...",
    image: "",
    likes: 1,
    comments: [],
  };
  return (
    <div className="post-wrapper">
      <div className="post-profile">
        <div className="post-profile-image">
          <ProfileImage size={50} />
        </div>
        <h4 className="post-profile-name">Anish Sharma</h4>
      </div>
      <div className="post-title">{postObj.title}</div>
      {postObj.image ? (
        <div className="post-image-wrapper">
          <img src={postObj.image} alt={postObj.title} />
        </div>
      ) : (
        ""
      )}
      <Interaction />
    </div>
  );
}

export default Post;
