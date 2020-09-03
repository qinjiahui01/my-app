import React, { useState } from "react";
import { Input, Button, Radio } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import "./todo.css";
export default function Todo() {
  const [list, setList] = useState([]);
  const [selectVal, setSelectVal] = useState("");
  const [inpVal, setInpVal] = useState("");


  // 循环生成radio组件
  const listComp = list.map((item, index) => (
    <Radio key={index} value={item}>
      {item}
    </Radio>
  ));
  // 当有单选框被选中时，显示提示文本
  const selectTipCom = selectVal ? <p className="select-text">Select option is {selectVal}</p> : "";

  let tipComp =
    list.length > 0 ? (
      <div className="select-container">
        <Radio.Group
          onChange={(e) => {
            setSelectVal(e.target.value);
          }}
          value={selectVal}
        >
          {listComp}
        </Radio.Group>
        {selectTipCom}
      </div>
    ) : (
      <p>No options yet</p>
    );

  return (
    <div className="container">
      {tipComp}
      <Input
        value={inpVal}
        onChange={(e) => {
          setInpVal(e.target.value);
        }}
      />
      <Button
        className="add-btn"
        type="primary"
        icon={<PlusOutlined />}
        size="large"
        onClick={() => {
          // eslint-disable-next-line
          if (list.filter((val) => val === inpVal).length > 0 || inpVal == "") {
            return;
          }
          setList([...list, inpVal]);
          setInpVal("");
        }}
      >
        Add
      </Button>
    </div>
  );
}
