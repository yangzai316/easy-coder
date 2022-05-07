import React, { useRef, useState } from "react";
import { Modal, Alert, Button } from "antd";
import Editor from "@monaco-editor/react";

const DialogMonaco = ({ isModalVisible, cb, defaultValue, message }) => {
  const editorRef = useRef(null);
  const handleEditorDidMount = (editor) => {
    editorRef.current = editor;
  };

  const [value, setValue] = useState(defaultValue);

  return (
    <>
      <Modal
        title="Basic Modal"
        width="60%"
        visible={isModalVisible}
        onOk={() => {
          cb(false, editorRef.current.getValue());
          setValue("");
        }}
        onCancel={() => {
          cb(false, "");
        }}
      >
        <Alert message={message} type="error" />
        <br></br>
        <Editor
          width="100%"
          height="450px"
          defaultLanguage="json"
          onMount={handleEditorDidMount}
          value={value}
        />
      </Modal>
    </>
  );
};

export default DialogMonaco;
