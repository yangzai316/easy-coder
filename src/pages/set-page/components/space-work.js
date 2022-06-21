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
  useEffect(() => {
    const dragOverEvent = (e) => {
      e.preventDefault();
    };
    const dropEvent = (e) => {
      e.preventDefault();
      const { uid, type } = getNewElementInfo(
        e.dataTransfer.getData("text/plain")
      );

      mixComponentToTree(uid, type, e.target.dataset.uid, () => {
        updateView(uid);
      });
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
