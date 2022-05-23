import React from "react";
import ORIGIN from "../data/ORIGIN_TREE";
import { ELEMENT_MAP, ELEMENT_ALL } from "./../data/ELEMENT";
import { isArray, isObject } from "../utils";
/**
 * 获取新创建组件的信息：uid / type
 */

export const getNewElementInfo = (str) => {
  const [uid, type] = str.split("-&-");
  return {
    uid,
    type,
  };
};

/**
 * 新创建的组件添加的 tree 数据中
 */
export const mixComponentToTree = (uid, type, parentUid) => {
  const config = ELEMENT_MAP[type];
  // 创建新元素的对象
  let children = config.children;
  if (isArray(config.children)) {
    children = [...config.children];
  }
  const newEle = {
    uid: uid,
    name: config.name,
    style: Object.assign({}, config.style),
    props: Object.assign({}, config.props),
    children,
    //component: ELEMENT_ALL[config.name],
  };
  // 新对象添加父级对象中
  if (isArray(ORIGIN.TREE[parentUid].children)) {
    ORIGIN.TREE[parentUid].children.push(newEle);
  } else {
    ORIGIN.TREE[parentUid].children = newEle;
  }

  ORIGIN.TREE[uid] = newEle;
};
/**
 * 根据 json 创建 react 元素，循环递归
 */
export const createElement = (data, currentUid) => {
  let children = data.children;
  if (Array.isArray(data.children) && data.children.length) {
    children = data.children.map((item) => {
      return createElement(item, currentUid);
    });
  } else if (isObject(data.children)) {
    children = data.children.uid
      ? createElement(data.children, currentUid)
      : null;
  }
  return React.createElement(
    ELEMENT_ALL[data.name],
    {
      key: data.uid,
      ...data.props,
      style: data.style,
      "data-uid": data.uid,
    },
    children
  );
};

/**
 * 修改样式
 */
export const editConfigForStyle = (uid, key, val) => {
  const _old = { ...ORIGIN.TREE[uid].style };

  ORIGIN.TREE[uid].style = {
    ..._old,
    [key]: val,
  };
};
/**
 * 修改样式
 */
export const editConfigForProps = (uid, key, val) => {
  const _old = { ...ORIGIN.TREE[uid].props };

  ORIGIN.TREE[uid].props = {
    ..._old,
    [key]: val,
  };
};

/**
 * 获取uid，当前元素没有uid，则寻找父级uid，直到根节点（uid=id-root）
 */
export const getUid = (target) => {
  if (target.dataset.uid) return target.dataset.uid;
  let parent = target.parentNode;
  while (!parent.dataset.uid) {
    parent = parent.parentNode;
  }
  return parent.dataset.uid;
};

/**
 *
 * 点击时，高亮
 */
export const focusElement = (container, uid) => {
  try {
    const list = Array.from(container.getElementsByClassName("is-focus"));
    list.forEach((item) => {
      item.classList.remove("is-focus");
    });
    container.querySelector(`[data-uid="${uid}"]`).classList.add("is-focus");
  } catch (error) {
    console.error("EasyCoder Error:" + uid + error);
  }
};

/**
 *
 * 辅助线，高亮
 */
export const toggleFocusAllElement = (val) => {
  const spaceWork = document.getElementById("WORK_SPACE");

  spaceWork.querySelectorAll("[data-uid]").forEach((item) => {
    val ? item.classList.add("is-focus") : item.classList.remove("is-focus");
  });
};

/**
 * 对根数据进行丰富
 */
export const enrichTree = (data) => {
  if (Array.isArray(data.children) && data.children.length) {
    data.children.forEach((item) => {
      enrichTree(item);
    });
  }
  if (data.uid !== "id-root") ORIGIN.TREE[data.uid] = data;
};
