import React from "react";
import Layout from "../components/Layout";
import Post from "../components/Post";
import ProfileImage from "../components/ProfileImage";

function Profile() {
  return (
    <>
      <Layout>
        <div class="profile-wrapper">
          <div className="cover-image"></div>
          <div className="main-profile">
            <ProfileImage />
            <div className="profile-name"></div>
          </div>
        </div>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </Layout>
    </>
  );
}

export default Profile;
