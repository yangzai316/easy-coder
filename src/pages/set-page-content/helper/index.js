import ORIGIN_TREE from "./../../../data/origin-tree";
import { componentList } from "./../../../data/components";
import * as ntd from "antd";
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
  const config = componentList.find((item) => item.name === componentName);
  const newConfig = JSON.parse(JSON.stringify(config));
  const newEle = {
    id: uid,
    ...newConfig,
    component: ntd[newConfig.name],
  };
  ORIGIN_TREE[toEleId].children.push(newEle);
  ORIGIN_TREE[uid] = newEle;
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
