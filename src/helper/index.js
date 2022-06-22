import React from "react";
import ORIGIN from "../data/ORIGIN_TREE";
import { ELEMENT_MAP, ELEMENT_ALL } from "./../data/ELEMENT";
import { isArray, isObject } from "../utils";
import { message } from "antd";
/**
 * 获取新创建组件的信息：uid / type
 */

export const getNewElementInfo = (str) => JSON.parse(str);

/**
 * 新创建的组件添加的 tree 数据中
 */
export const mixComponentToTree = (uid, type, parentUid, cb) => {
  if (!parentUid || !ORIGIN.TREE[parentUid].children) {
    return message.warning("创建失败，该元素不可添加子级...");
  }

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
    realName: config.realName,
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
  cb && cb();
};
/**
 * 同一父级内，元素位置互换
 */
export const exchangeElementSameLevel = (curUid, curIndex, targetIndex, cb) => {
  if (curIndex === undefined || targetIndex === undefined) return;

  const spaceWork = document.getElementById("WORK_SPACE");
  try {
    const parentUid = getUid(
      spaceWork.querySelector(`[data-uid="${curUid}"]`).parentNode
    );

    [
      ORIGIN.TREE[parentUid].children[curIndex],
      ORIGIN.TREE[parentUid].children[targetIndex],
    ] = [
      ORIGIN.TREE[parentUid].children[targetIndex],
      ORIGIN.TREE[parentUid].children[curIndex],
    ];
    cb();
  } catch (error) {
    console.error(error);
  }
};
/**
 * 根据 json 创建 react 元素，循环递归
 */
export const createElement = (data, currentUid, index) => {
  let children = data.children;
  if (Array.isArray(data.children) && data.children.length) {
    children = data.children.map((item, i) => {
      return createElement(item, currentUid, i);
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
      "data-index": index,
      draggable: true,
      onDragStart: (e) => {
        e.dataTransfer.setData(
          "text/plain",
          JSON.stringify({
            type: "move",
            curIndex: e.target.dataset.index,
          })
        );
        e.stopPropagation();
      },
    },
    children
  );
};

/**
 * 修改数据源-样式
 */
export const editConfigForStyle = (uid, key, val) => {
  const _old = { ...ORIGIN.TREE[uid].style };

  ORIGIN.TREE[uid].style = {
    ..._old,
    [key]: val,
  };
};
/**
 * 修改数据源-dataSource-api交互部分
 */
export const editConfigForDataSource = (uid, val) => {
  ORIGIN.TREE[uid].dataSource = val;
};
/**
 * 修改数据源-属性
 */
export const editConfigForProps = (uid, key, val) => {
  const _old = { ...ORIGIN.TREE[uid].props };
  ORIGIN.TREE[uid].props = {
    ..._old,
    [key]: val,
  };
};
/**
 * 修改数据源-事件
 */
export const editConfigForEvent = (uid, val) => {
  const event = ORIGIN.TREE[uid].event || {};
  event[val.eventType] = val;
  ORIGIN.TREE[uid].event = event;
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
  if (data.uid && data.uid !== "id-root") ORIGIN.TREE[data.uid] = data;
};

/**
 * 通过 id 寻找对应的元素 , 元素移除
 */
export const deleteElementById = (uid, cb) => {
  const findNodeAndDelete = (data, index, parentList) => {
    if (data.uid === uid) {
      delete ORIGIN.TREE[uid];
      parentList.splice(index, 1);
      cb();
    } else if (data?.children?.length) {
      data.children.forEach((item, index) => {
        findNodeAndDelete(item, index, data.children);
      });
    }
  };
  findNodeAndDelete(ORIGIN.TREE["id-root"], uid);
};
