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
  const _NODE = WORK_SPACE.current;
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
      if (uid) {
        updateView(uid);
        focusElement(_NODE, uid);
      }
    };
    _NODE.addEventListener("dragover", dragOverEvent, false);
    _NODE.addEventListener("drop", dropEvent, false);
    _NODE.addEventListener("click", clickEvent, false);

    return () => {
      _NODE.removeEventListener("dragOver", dragOverEvent, false);
      _NODE.removeEventListener("drop", dropEvent, false);
      _NODE.removeEventListener("click", clickEvent, false);
    };
  }, [updateView, _NODE]);
  // 为新建元素添加高亮效果
  useLayoutEffect(() => {
    focusElement(_NODE, currentUid);
  }, [currentUid, _NODE]);

  return (
    <div ref={WORK_SPACE} id="WORK_SPACE" className="work-space">
      {createElement(ORIGIN_TREE["id-root"], currentUid)}
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
      // className: `${currentUid === data.uid ? "is-focus" : ""}`,
      "data-uid": data.uid,
    },
    children
  );
};

export default SpaceWork;
