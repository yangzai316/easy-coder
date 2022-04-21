import React, { useEffect, useState } from "react";
import "./../../../style/space-work.scss";
import ORIGIN_TREE from "../../../data/origin-tree";
import {
  mixComponentToTree,
  getNewElementInfo,
  getUid,
} from "./../../../helper";

// 中间操作栏
const SpaceWork = ({ setCurrentUid }) => {
  // 添加拖拽事件
  useEffect(() => {
    const dragOver = (e) => {
      e.preventDefault();
    };
    const drop = (e) => {
      e.preventDefault();
      const { uid, type } = getNewElementInfo(
        e.dataTransfer.getData("text/plain")
      );
      mixComponentToTree(uid, type, e.target.dataset.uid);
      setCurrentUid(uid);
    };

    const spaceWork = document.getElementById("WORK_SPACE");
    spaceWork.addEventListener("dragover", dragOver, false);
    spaceWork.addEventListener("drop", drop, false);
    return () => {
      spaceWork.removeEventListener("dragOver", dragOver, false);
      spaceWork.removeEventListener("drop", drop, false);
    };
  }, []);

  return (
    <div id="WORK_SPACE" className="work-space">
      {createElement(ORIGIN_TREE["id-root"], setCurrentUid)}
    </div>
  );
};
// 根据 json 创建 react 元素，循环递归
const createElement = (data, setCurrentUid) => {
  let children = null;
  if (data.children && data.children.length) {
    children = data.children.map((item) => {
      return createElement(item, setCurrentUid);
    });
  }
  return React.createElement(
    data.component,
    {
      key: data.uid,
      ...data.prop,
      style: data.style,
      "data-uid": data.uid,
      onClick: (e) => {
        e.stopPropagation();
        const uid = getUid(e.target);
        if (uid) {
          setCurrentUid(uid);
        }
      },
    },
    children
  );
};

export default SpaceWork;
