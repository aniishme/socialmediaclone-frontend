import CreatePost from "../components/CreatePost";
import Layout from "../components/Layout";
import Post from "../components/Post";
import ProfileImage from "../components/ProfileImage";

import "../assets/scss/components/home.scss";
function Home() {
  return (
    <div>
      <Layout>
        <div className="create-post-wrapper">
          <ProfileImage size={50} />

          <div className="create-post">
            <CreatePost />
          </div>
        </div>
        <Post />
      </Layout>
    </div>
  );
}

export default Home;
