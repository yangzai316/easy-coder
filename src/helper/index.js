import ORIGIN_TREE from "../data/origin-tree";
import { COMPONENT_MAP, all } from "../data/components";
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

  const newEle = {
    uid: uid,
    name: config.name,
    style: Object.assign({}, config.style),
    prop: Object.assign({}, config.prop),
    children: config.type === "contained" ? [] : null,
    component: all[config.name],
  };
  ORIGIN_TREE[parentUid].children.push(newEle);
  ORIGIN_TREE[uid] = newEle;
  console.log(ORIGIN_TREE);
};

/**
 * 修改样式
 */
export const editConfigForStyle = (uid, key, val) => {
  const oldStyle = { ...ORIGIN_TREE[uid].style };
  ORIGIN_TREE[uid].style = {
    ...oldStyle,
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
