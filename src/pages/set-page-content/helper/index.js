import ORIGIN_TREE from "./../../../data/origin-tree";
import { componentList } from "./../../../data/components";
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
  const c = componentList.find((item) => item.name === componentName);
  const newEle = {
    id: uid,
    name: componentName,
    component: c.component,
    style: {},
    children: [],
  };
  ORIGIN_TREE[toEleId].children.push(newEle);
  ORIGIN_TREE[uid] = newEle;
};
