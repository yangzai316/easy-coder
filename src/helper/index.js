import ORIGIN_TREE from "../data/ORIGIN_TREE";
import { ELEMENT_MAP, ELEMENT_ALL } from "./../data/ELEMENT";
import { isArray } from "../utils";
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
    component: ELEMENT_ALL[config.name],
  };
  // 新对象添加父级对象中
  if (isArray(ORIGIN_TREE[parentUid].children)) {
    ORIGIN_TREE[parentUid].children.push(newEle);
  } else {
    ORIGIN_TREE[parentUid].children = newEle;
  }

  ORIGIN_TREE[uid] = newEle;
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
 *
 * 将Json 转为 标签字符串
 * {
 *  name:'a',
 *  children:[{
 *      name:'b'    =>  '<a> <b></b> </a>'
 *   }]
 * }
 */

// const formatCode = (data) => {
//   let content = data.children;
//   // 子代存在 > 进入递归
//   if (Array.isArray(data.children) && data.children.length > 0) {
//     content = data.children.reduce((prv, cur, index) => {
//       return prv + formatCode(cur);
//     }, "");
//   }
//   // 处理 style
//   let style = "";
//   if (data.style) {
//     style = ` style={${JSON.stringify(data.style)}}`;
//   }
//   // 处理 props
//   let props = "";
//   if (data.props) {
//     props = Object.keys(data.props).reduce((prv, cur) => {
//       if (isString(data.props[cur])) {
//         return prv + ` ${cur}="${data.props[cur]}"`;
//       } else if (isBoolean(data.props[cur])) {
//         return prv + ` ${cur}={${data.props[cur]}}`;
//       }
//     }, "");
//   }
//   // 自身标签生成 & 拼接子代内容
//   const result = `<${data.name}${style}${props}>${content}</${data.name}>`;

//   return result;
// };
