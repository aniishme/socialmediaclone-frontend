import React from "react";
import "../assets/scss/components/profileImage.scss";
function ProfileImage({ size }) {
  return (
    <div className="profile-image">
      <img
        style={{ height: size, width: size }}
        src="https://picsum.photos/200"
        alt="profile-image"
      />
    </div>
  );
}

export default ProfileImage;
