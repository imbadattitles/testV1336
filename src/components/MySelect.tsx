import React from "react";
import { Select } from "antd";
import { ConnectionState, Department } from "../store/firstPageSlice";

interface IMySelectProps {
  placeholder: string;
  onChange: (value: number, setValue: any) => void;
  items: ConnectionState[] | Department[] | any[];
}

const MySelect: React.FC<IMySelectProps> = ({
  placeholder,
  onChange,
  items,
}) => (
  <Select
    allowClear
    placeholder={placeholder}
    onChange={onChange}
    options={items.map((item) => {
      if (item.id + 1) {
        return { label: item.name, value: item.id };
      }
      if (item.connectionStateId + 1) {
        return { label: item.name, value: item.connectionStateId };
      }
      return {};
    })}
  />
);
export default MySelect;
