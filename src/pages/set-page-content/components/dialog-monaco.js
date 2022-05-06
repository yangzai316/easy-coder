import React, { useRef, useState } from "react";
import { Modal, Alert, Button } from "antd";
import Editor from "@monaco-editor/react";

const DialogMonaco = ({ isModalVisible, cb, defaultValue,message }) => {
  const editorRef = useRef(null);
  const handleEditorDidMount = (editor) => {
    editorRef.current = editor;
  };

  const [value, setValue] = useState("");
  const inHelpData = () => {
    setValue(defaultValue);
  };
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
        <Alert
          message={message}
          type="error"
          action={
            <Button size="small" type="ghost" onClick={inHelpData}>
              一键代入范例数据
            </Button>
          }
        />
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
