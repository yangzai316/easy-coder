import React, { useEffect, useState } from "react";
import "./../../../style/space-work.scss";
import ORIGIN_TREE from "../../../data/origin-tree";
import {
  mixComponentToTree,
  getNewElementInfo,
  getUid,
  focusElement,
} from "./../../../helper";
import { isObject } from "../../../utils";

// 中间操作栏
const SpaceWork = ({ currentUid, setCurrentUid }) => {
  // 添加拖拽事件
  useEffect(() => {
    const dragOverEvent = (e) => {
      e.preventDefault();
    };
    const dropEvent = (e) => {
      e.preventDefault();
      const { uid, type } = getNewElementInfo(
        e.dataTransfer.getData("text/plain")
      );
      mixComponentToTree(uid, type, e.target.dataset.uid);
      setCurrentUid(uid);
    };

    const clickEvent = (e) => {
      e.preventDefault();
      e.stopPropagation();
      const uid = getUid(e.target);
      if (uid) {
        setCurrentUid(uid);
        focusElement(uid);
      }
    };
    const spaceWork = document.getElementById("WORK_SPACE");
    spaceWork.addEventListener("dragover", dragOverEvent, false);
    spaceWork.addEventListener("drop", dropEvent, false);
    spaceWork.addEventListener("click", clickEvent, false);

    return () => {
      spaceWork.removeEventListener("dragOver", dragOverEvent, false);
      spaceWork.removeEventListener("drop", dropEvent, false);
      spaceWork.removeEventListener("click", clickEvent, false);
    };
  }, []);

  return (
    <div id="WORK_SPACE" className="work-space">
      {createElement(ORIGIN_TREE["id-root"], currentUid, setCurrentUid)}
    </div>
  );
};
// 根据 json 创建 react 元素，循环递归
const createElement = (data, currentUid) => {
  let children = null;
  if (data.children && data.children.length) {
    children = data.children.map((item) => {
      return createElement(item, currentUid);
    });
  } else if (isObject(data.children)) {
    children = createElement(data.children, currentUid);
  }
  return React.createElement(
    data.component,
    {
      key: data.uid,
      ...data.props,
      style: data.style,
      className: `${currentUid === data.uid ? "is-focus" : ""}`,
      "data-uid": data.uid,
    },
    children
  );
};

export default SpaceWork;
