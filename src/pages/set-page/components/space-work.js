import React, { useEffect, useLayoutEffect, useRef } from "react";
import "./../../../style/space-work.scss";
import ORIGIN from "../../../data/ORIGIN_TREE";
import INITIAL_ROOT from "./../../../data/INITIAL_ROOT";
import {
  mixComponentToTree,
  getNewElementInfo,
  getUid,
  focusElement,
  createElement,
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
    const componentJson = JSON.parse(
      readComponentJson(currentProject, currentRoute)
    );
    console.log("first local : ", componentJson);
    ORIGIN.TREE["id-root"] = componentJson.uid
      ? componentJson
      : structuredClone(INITIAL_ROOT); // 深拷贝
    updateView();
  }, []);
  const WORK_SPACE = useRef(null);
  console.log("spacework : ", ORIGIN.TREE);
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
      updateView(uid);
    };

    const clickEvent = (e) => {
      const uid = getUid(e.target);
      if (uid && currentUid !== uid) {
        updateView(uid);
        focusElement(WORK_SPACE.current, uid);
      }
    };
    WORK_SPACE.current.addEventListener("dragover", dragOverEvent, false);
    WORK_SPACE.current.addEventListener("drop", dropEvent, false);
    WORK_SPACE.current.addEventListener("click", clickEvent, false);
    const WORK_SPACE_REF = WORK_SPACE.current;
    return () => {
      WORK_SPACE_REF.removeEventListener("dragOver", dragOverEvent, false);
      WORK_SPACE_REF.removeEventListener("drop", dropEvent, false);
      WORK_SPACE_REF.removeEventListener("click", clickEvent, false);
    };
  }, [currentUid, updateView, WORK_SPACE]);
  // 为新建元素添加高亮效果
  useLayoutEffect(() => {
    focusElement(WORK_SPACE.current, currentUid);
  }, [currentUid, WORK_SPACE]);

  return (
    <div ref={WORK_SPACE} id="WORK_SPACE" className="work-space">
      {createElement(ORIGIN.TREE["id-root"], currentUid)}
    </div>
  );
};

export default SpaceWork;
