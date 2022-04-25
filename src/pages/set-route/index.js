import React from "react";

import Editor from "@monaco-editor/react";

const SetRoute = () => {
  return (
    <Editor
      height="90vh"
      defaultLanguage="json"
      defaultValue="// some comment"
    />
  );
};

export default SetRoute;
