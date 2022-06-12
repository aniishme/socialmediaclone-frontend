import React from "react";
import {
  AiOutlineComment,
  AiOutlineHeart,
  AiOutlineShareAlt,
} from "react-icons/ai";
import "../assets/scss/components/interaction.scss";
function Interaction() {
  return (
    <div className="interaction-wrapper">
      <div className="interaction interaction-comment">
        <AiOutlineComment size="20px" />
        <span className="interaction-count">1</span>
      </div>
      <div className="interaction interaction-like">
        <AiOutlineHeart size="20px" />
        <span className="interaction-count">1</span>
      </div>
      <div className="interaction interaction-share">
        <AiOutlineShareAlt size="20px" />
        <span className="interaction-count">1</span>
      </div>
    </div>
  );
}

export default Interaction;
