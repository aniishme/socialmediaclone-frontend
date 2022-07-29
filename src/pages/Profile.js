import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import Layout from "../components/Layout";
import Post from "../components/Post";

import ProfileImage from "../components/ProfileImage";

import "../assets/scss/components/profile.scss";
import { useSelector } from "react-redux";

function Profile() {
  const [postOptions] = useState(true);
  const { user, token } = useSelector((state) => state.authReducer);
  const { userId } = useParams();
  const [profileData, setProfileData] = useState({});
  const [error, setError] = useState(false);

  useEffect(() => {
    setError(false);
    window.scrollTo(0, 0);
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/profile/${userId}`, {
        headers: {
          Authorization: `Bearer ${token.accessToken}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setProfileData(res.data);
      })
      .catch((err) => {
        setError(true);
      });
  }, [userId, token.accessToken]);

  return (
    <>
      <Layout>
        {error ? (
          <h1>
            USER DOESNOT EXISTS
            <br />
            404
          </h1>
        ) : (
          <>
            <div className="profile-wrapper">
              <div className="cover-image"></div>
              <div className="main-profile">
                <div className="main-profile-image">
                  <ProfileImage />
                </div>
                <div className="edit-profile-button">
                  {userId === user.id ? (
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
                    <h3 className="profile-fullname">{profileData.name}</h3>
                    <span className="profile-username light-text">
                      @{profileData.id}
                    </span>
                  </div>
                  <div className="follow-details">
                    <div>
                      {profileData.info && profileData.info.following.length}{" "}
                      <span className="light-text">Following</span>
                    </div>
                    <div>
                      {profileData.info && profileData.info.followers.length}{" "}
                      <span className="light-text">Followers</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="profile-posts">
              <div
                className={
                  postOptions
                    ? "select-posts select-posts-active"
                    : "select-posts"
                }
              >
                Posts
              </div>
              <div
                className={
                  postOptions
                    ? "select-posts"
                    : "select-posts select-posts-active"
                }
              >
                Liked Posts
              </div>
            </div>

            <div className="posts">
              {profileData.post
                ? profileData.post
                    .slice(0)
                    .reverse()
                    .map((item) => {
                      return <Post post={item} key={`profile${item._id}`} />;
                    })
                : "No Posts Found"}
            </div>
          </>
        )}
      </Layout>
    </>
  );
}

export default Profile;
