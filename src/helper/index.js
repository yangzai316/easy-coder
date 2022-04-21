import ORIGIN_TREE from "../data/origin-tree";
import { COMPONENT_MAP, all } from "../data/components";
/**
 * 获取新创建组件的信息：uid / componentName
 */

const getNewElementInfo = (str) => {
  const [uid, componentName] = str.split("-&-");
  return {
    uid,
    componentName,
  };
};

/**
 * 新创建的组件添加的 tree 数据中
 */
export const mixComponentToTree = (newEleInfo, toEleId) => {
  const { uid, componentName } = getNewElementInfo(newEleInfo);
  const config = COMPONENT_MAP[componentName];

  const newEle = {
    id: uid,
    name: config.name,
    style: Object.assign({}, config.style),
    children: config.type === "contained" ? [] : null,
    component: all[config.name],
  };
  
  ORIGIN_TREE[toEleId].children.push(newEle);
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
