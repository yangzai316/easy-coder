import React, { useEffect, useState } from "react"; 
import './../../../style/space-work.scss'
import ORIGIN_TREE from "../../../data/origin-tree";
import { mixComponentToTree } from "./../helper";

// 中间操作栏
const AreaMaker = ({ setCurrentUid }) => {
  const [update, setUpdate] = useState(1);

  // 添加拖拽事件
  useEffect(() => {
    const dragOver = (e) => {
      e.preventDefault();
    };
    const drop = (e) => {
      e.preventDefault();
      mixComponentToTree(
        e.dataTransfer.getData("text/plain"),
        e.target.dataset.id
      );
      // 更新视图
      setUpdate(update + 1);
    };

    const spaceWork = document.getElementById("work-space");
    spaceWork.addEventListener("dragover", dragOver, false);
    spaceWork.addEventListener("drop", drop, false);
    return () => {
      spaceWork.removeEventListener("dragOver", dragOver, false);
      spaceWork.removeEventListener("drop", drop, false);
    };
  }, [update]);

  return (
    <div id="work-space" className="work-space">
      {createElement(ORIGIN_TREE["id-root"], setCurrentUid)}
    </div>
  );
};
// 根据 json 创建 react 元素，循环递归
const createElement = (data, setCurrentUid) => {
  let children = [];
  if (data.children && data.children.length) {
    children = data.children.map((item) => {
      return createElement(item, setCurrentUid);
    });
  }
  return React.createElement(
    data.component,
    {
      key: data.id,
      style: data.style,
      "data-id": data.id,
      onClick: (e) => {
        e.stopPropagation();
        setCurrentUid(e.target.dataset.id);
      },
    },
    [...children]
  );
};

export default AreaMaker;
