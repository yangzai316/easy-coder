import ORIGIN_TREE from "../data/origin-tree";
import { COMPONENT_MAP, all } from "../data/components";
import { isObject, isArray } from "../utils";
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
  const config = COMPONENT_MAP[type];
  // 创建新元素的对象
  let children = null;
  if (isArray(config.children)) {
    children = [];
  }
  const newEle = {
    uid: uid,
    name: config.name,
    style: Object.assign({}, config.style),
    props: Object.assign({}, config.props),
    children,
    component: all[config.name],
  };
  // 新对象添加父级对象中
  if (isArray(ORIGIN_TREE[parentUid].children)) {
    ORIGIN_TREE[parentUid].children.push(newEle);
  } else {
    ORIGIN_TREE[parentUid].children = newEle;
  }

  ORIGIN_TREE[uid] = newEle;
  console.log("tree>>>", ORIGIN_TREE);
};

/**
 * 修改样式
 */
export const editConfigForStyle = (uid, key, val) => {
  const _old = { ...ORIGIN_TREE[uid].style };

  ORIGIN_TREE[uid].style = {
    ..._old,
    [key]: val,
  };
};
/**
 * 修改样式
 */
export const editConfigForProps = (uid, key, val) => {
  const _old = { ...ORIGIN_TREE[uid].props };

  ORIGIN_TREE[uid].props = {
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
  const list = Array.from(container.getElementsByClassName("is-focus"));
  list.forEach((item) => {
    item.classList.remove("is-focus");
  });
  container.querySelector(`[data-uid="${uid}"]`).classList.add("is-focus");
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
