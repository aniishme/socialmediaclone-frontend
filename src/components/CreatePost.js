import React, { useRef, useState } from "react";

import { Editor, EditorState } from "draft-js";

import "draft-js/dist/Draft.css";

import { convertToHTML } from "draft-convert";
import { convertToRaw } from "draft-js";

import { useDispatch, useSelector } from "react-redux";

import { createPostHandler } from "../store/actions/posts/postAction";

const CreatePost = ({ getState }) => {
  const { user } = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const editor = useRef(null);

  const onClickHandler = () => {
    const contentState = editorState.getCurrentContent();
    const post = convertToRaw(contentState);

    const finalPost = post.blocks.map((item) => {
      return { key: item.key, text: item.text };
    });
    const payload = {
      content: finalPost,
      userId: user.id,
      _id: finalPost[0].key,
    };
    dispatch(createPostHandler(payload));
    console.log(payload);

    setEditorState(() => EditorState.createEmpty());
  };

  return (
    <div className="create-post">
      <Editor
        ref={editor}
        editorState={editorState}
        onChange={setEditorState}
        placeholder="What's Happening"
      />
      <button className="button" onClick={onClickHandler}>
        Post
      </button>
    </div>
  );
};

export default CreatePost;
