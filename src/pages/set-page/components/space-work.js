import React, { useEffect, useLayoutEffect, useRef } from "react";
import "./../../../style/space-work.scss";
import ORIGIN from "../../../data/ORIGIN_TREE";
import INITIAL_ROOT from "./../../../data/INITIAL_ROOT";
import {
  mixComponentToTree,
  exchangeElementSameLevel,
  getNewElementInfo,
  getUid,
  focusElement,
  createElement,
  enrichTree,
} from "./../../../helper";

import { readComponentJson } from "./../../../helper/fs";

// 中间操作栏
const SpaceWork = ({
  currentUid,
  updateView,
  currentProject,
  currentRoute,
}) => {
  // 页面设置界面第一次进来，从本地获取数据，重置TREE["id-root"] 的初时数据
  useEffect(() => {
    const _json = JSON.parse(readComponentJson(currentProject, currentRoute));
    ORIGIN.TREE["id-root"] = _json.uid ? _json : structuredClone(INITIAL_ROOT); // 深拷贝
    enrichTree(_json);
    updateView();
  }, [currentProject, currentRoute, updateView]);
  const WORK_SPACE = useRef(null);
  // 添加拖拽事件
  const dragOverEvent = (e) => {
    e.preventDefault();
  };
  const dropEvent = (e) => {
    e.preventDefault();
    e.target.classList.remove("is-focus");
    // 获取拖拽中携带的信息
    const { uid, tag, type, curIndex } = getNewElementInfo(
      e.dataTransfer.getData("text/plain")
    );
    // 当前元素的uid
    const currentUid = e.target.dataset.uid;
    if (type === "create") {
      // 新建元素逻辑
      mixComponentToTree(uid, tag, currentUid, () => {
        updateView(uid);
      });
    } else {
      // 移动元素逻辑
      const targetIndex = e.target.dataset.index;
      exchangeElementSameLevel(uid, currentUid, curIndex, targetIndex, () => {
        updateView(uid);
      });
    }
  };
  const clickEvent = (e) => {
    const uid = getUid(e.target);
    if (uid && currentUid !== uid) {
      updateView(uid);
      focusElement(WORK_SPACE.current, uid);
    }
  };
  const dragEnterEvent = (e) => {
    e.stopPropagation();
    e.target.classList.add("is-focus");
  };
  const dragLeaveEvent = (e) => {
    e.stopPropagation();
    e.target.classList.remove("is-focus");
  };
  // 为新建元素添加高亮效果
  useLayoutEffect(() => {
    focusElement(WORK_SPACE.current, currentUid);
  }, [currentUid, WORK_SPACE]);

  return (
    <div
      ref={WORK_SPACE}
      id="WORK_SPACE"
      className="work-space"
      onDragOver={dragOverEvent}
      onDrop={dropEvent}
      onClick={clickEvent}
      onDragEnter={dragEnterEvent}
      onDragLeave={dragLeaveEvent}
    >
      {createElement(ORIGIN.TREE["id-root"], currentUid)}
    </div>
  );
};

export default SpaceWork;
