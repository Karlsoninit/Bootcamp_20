import React from "react";
import Select from "react-select";

const options = [
  {
    value: "low",
    label: "Low",
  },
  {
    value: "high",
    label: "High",
  },
];

const CustomSelect = ({ onHandleChoosePriority }) => (
  <Select options={options} onChange={onHandleChoosePriority} />
);

export default CustomSelect;
