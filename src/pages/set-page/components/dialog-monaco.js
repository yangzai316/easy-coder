import React, { useRef } from "react";
import { Modal, Alert } from "antd";
import Editor from "@monaco-editor/react";

const DialogMonaco = ({ isModalVisible, cb, defaultValue, message }) => {
  // editor 初始化
  const editorRef = useRef(null);
  const handleEditorDidMount = (editor) => {
    editorRef.current = editor;
  };

  return (
    <>
      <Modal
        title="Editor"
        width="60%"
        visible={isModalVisible}
        onOk={() => {
          cb(false, editorRef.current.getValue());
        }}
        onCancel={() => {
          cb(false, "");
        }}
      >
        <Alert message={message} type="error" />
        <br></br>
        <Editor
          key={+new Date()}
          width="100%"
          height="450px"
          defaultLanguage="json"
          onMount={handleEditorDidMount}
          value={defaultValue}
        />
      </Modal>
    </>
  );
};

export default DialogMonaco;
