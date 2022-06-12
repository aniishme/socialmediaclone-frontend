import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Layout from "../components/Layout";
import Post from "../components/Post";
import ProfileImage from "../components/ProfileImage";

import "../assets/scss/components/profile.scss";
import { useSelector } from "react-redux";
function Profile() {
  const [postOptions, setpostOptions] = useState(true);
  const { user } = useSelector((state) => state.authReducer);
  const { userId } = useParams();
  const [owner, setOwner] = useState(userId === user.id ? true : false);

  useEffect(() => {}, [userId]);
  return (
    <>
      <Layout>
        <div className="profile-wrapper">
          <div className="cover-image"></div>
          <div className="main-profile">
            <div className="main-profile-image">
              <ProfileImage />
            </div>
            <div className="edit-profile-button">
              {owner ? (
                <button type="button" className="button">
                  Edit Profile
                </button>
              ) : (
                <button type="button" className="button">
                  Follow
                </button>
              )}
            </div>

            <div className="profile-details">
              <div className="profile-name">
                <h3 className="profile-fullname">{user.name}</h3>
                <span className="profile-username light-text">@{user.id}</span>
              </div>
              <div className="follow-details">
                <div>
                  70 <span className="light-text">Following</span>
                </div>
                <div>
                  40 <span className="light-text">Followers</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="profile-posts">
          <div
            className={
              postOptions ? "select-posts select-posts-active" : "select-posts"
            }
          >
            Posts
          </div>
          <div
            className={
              postOptions ? "select-posts" : "select-posts select-posts-active"
            }
          >
            Liked Posts
          </div>
        </div>
        <div className="posts">
          <Post />
        </div>
      </Layout>
    </>
  );
}

export default Profile;
