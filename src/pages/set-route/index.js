import React from 'react'; 
import { Collapse } from 'antd';

const { Panel } = Collapse;

function callback(key) {
  console.log(key);
}

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const SetRoute =  () => (
  <Collapse defaultActiveKey={['1']}  >
    <Panel header="This is panel header 1" key="1" onClick={()=>{
      callback(123)
    }}>
      <p>{text}</p>
    </Panel> 
  </Collapse>
);

export default SetRoute;
