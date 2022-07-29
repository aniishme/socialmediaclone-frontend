import CreatePost from "../components/CreatePost";
import Layout from "../components/Layout";
import Post from "../components/Post";
import ProfileImage from "../components/ProfileImage";

import "../assets/scss/components/home.scss";

import { useSelector } from "react-redux";

import { useEffect } from "react";

function Home() {
  const { posts } = useSelector((state) => state.postReducer);
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div>
      <Layout>
        <div className="create-post-wrapper">
          <ProfileImage size={50} />

          <CreatePost />
        </div>
        {posts
          .slice(0)
          .reverse()
          .map((item) => {
            return <Post post={item} key={`home${item._id}`} />;
          })}
      </Layout>
    </div>
  );
}

export default Home;
