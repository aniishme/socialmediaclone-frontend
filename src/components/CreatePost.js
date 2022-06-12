import React from "react";

import { Editor, EditorState } from "draft-js";
import "draft-js/dist/Draft.css";

const CreatePost = () => {
  const [editorState, setEditorState] = React.useState(() =>
    EditorState.createEmpty()
  );

  const contentState = editorState.getCurrentContent();
  console.log(contentState);
  return (
    <Editor
      editorState={editorState}
      onChange={setEditorState}
      placeholder="What's Happening"
    />
  );
};

export default CreatePost;
