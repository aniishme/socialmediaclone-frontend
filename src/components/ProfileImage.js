import React from "react";
import "../assets/scss/components/profileImage.scss";
function ProfileImage({ size }) {
  return (
    <div className="profile-image">
      <img
        style={{ height: size, width: size }}
        src="https://pbs.twimg.com/profile_images/1240654311199133696/a65_QMnN_400x400.jpg"
        alt="profile-image"
      />
    </div>
  );
}

export default ProfileImage;
