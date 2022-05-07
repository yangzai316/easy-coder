import AddFormItem from "./form-add-item";
import AddFormItemContent from "./form-item-add-content";
import AddOptionUseFormList from "./add-option-use-formlist";
import AddOptionUseMonaco from "./add-option-use-monaco";
import AddChild from "./add-child";
import AddOptionForCarousel from "./add-optioin-for-carousel";
import AddPanelForCollapse from "./add-panel-for-collapse";
import AddDataForTable from "./add-data-for-table";
import AddDataForTree from "./add-data-for-tree";
import AddDataForChartLine from "./add-data-for-chart-line";
import AddDataForChartColumn from "./add-data-for-chart-column";

const AdvancedSetup = ({ name, currentUid, updateView }) => {
  const _MAP = {
    Form: <AddFormItem parentUid={currentUid} updateView={updateView} />,
    FormItem: (
      <AddFormItemContent parentUid={currentUid} updateView={updateView} />
    ),
    Select: (
      <AddOptionUseFormList parentUid={currentUid} updateView={updateView} />
    ),
    CheckboxGroup: (
      <AddOptionUseFormList parentUid={currentUid} updateView={updateView} />
    ),
    RadioGroup: (
      <AddOptionUseFormList parentUid={currentUid} updateView={updateView} />
    ),
    Cascader: (
      <AddOptionUseMonaco parentUid={currentUid} updateView={updateView} />
    ),
    Badge: (
      <AddChild
        parentUid={currentUid}
        updateView={updateView}
        targetMap={{ Avatar: "头像" }}
      />
    ),
    Carousel: (
      <AddOptionForCarousel parentUid={currentUid} updateView={updateView} />
    ),
    Collapse: (
      <AddPanelForCollapse parentUid={currentUid} updateView={updateView} />
    ),
    Table: <AddDataForTable parentUid={currentUid} updateView={updateView} />,
    Timeline: (
      <AddChild
        parentUid={currentUid}
        updateView={updateView}
        targetMap={{ TimelineItem: "时间轴子项" }}
      />
    ),
    Tree: <AddDataForTree parentUid={currentUid} updateView={updateView} />,
    ChartLine: (
      <AddDataForChartLine currentUid={currentUid} updateView={updateView} />
    ),
    MultiChartLine: (
      <AddDataForChartLine currentUid={currentUid} updateView={updateView} />
    ),
    ChartColumn: (
      <AddDataForChartColumn currentUid={currentUid} updateView={updateView} />
    ),
    MultiChartColumn: (
      <AddDataForChartColumn
        currentUid={currentUid}
        updateView={updateView}
        showEditMeta={false}
      />
    ),
  };

  return _MAP[name];
};
export default AdvancedSetup;
