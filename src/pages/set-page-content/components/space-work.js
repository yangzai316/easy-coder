import React, { useEffect, useLayoutEffect, useRef } from "react";
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
const SpaceWork = ({ currentUid, updateView }) => {
  const WORK_SPACE = useRef(null);
  // const WORK_SPACE.current = WORK_SPACE.current;
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
      {createElement(ORIGIN_TREE["id-root"], currentUid)}
    </div>
  );
};
// 根据 json 创建 react 元素，循环递归
const createElement = (data, currentUid) => {
  let children = data.children;
  if (Array.isArray(data.children) && data.children.length) {
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
      "data-uid": data.uid,
    },
    children
  );
};

export default SpaceWork;
