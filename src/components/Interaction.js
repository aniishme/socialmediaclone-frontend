import React, { useState } from "react";
import {
  AiOutlineComment,
  AiOutlineHeart,
  AiOutlineShareAlt,
} from "react-icons/ai";
import "../assets/scss/components/interaction.scss";
import CommentBox from "./CommentBox";
function Interaction() {
  const [showComment, setShowComment] = useState(true);
  const toggleComment = () => setShowComment(showComment ? false : true);
  return (
    <div>
      <div className="interaction-wrapper">
        <div
          className="interaction interaction-comment"
          onClick={toggleComment}
        >
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
      {showComment && <CommentBox />}
    </div>
  );
}

export default Interaction;
