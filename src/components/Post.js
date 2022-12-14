import React from "react";
import { Link } from "react-router-dom";
import "../assets/scss/components/post.scss";

import Interaction from "./Interaction";
import ProfileImage from "./ProfileImage";

function Post({ post }) {
  return (
    <div className="post-wrapper">
      <div className="post-content">
        <div className="post-profile">
          <div className="post-profile-image">
            <ProfileImage size={50} />
          </div>
          <h4 className="post-profile-name">
            <Link to={`/user/${post.userId}`}>{post.username}</Link>
          </h4>
        </div>
        <div className="post-title">
          {post.content.map((item) => {
            return <p key={item.key}>{item.text}</p>;
          })}
        </div>
        {/* {postObj.image ? (
          <div className="post-image-wrapper">
            <img src={postObj.image} alt={postObj.title} />
          </div>
        ) : (
          ""
        )} */}
      </div>

      <Interaction />
    </div>
  );
}

export default Post;
