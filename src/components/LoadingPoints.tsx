import React from "react";
import { Button, Form, Input } from "antd";
const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};
const checkPoints = (_: any, value: number) => {
  console.log(value);
  if (Number(value)) {
    return Promise.resolve();
  }
  return Promise.reject(new Error("Введите количество загружаемых данных"));
};
type FieldType = {
  points?: string;
};

interface ILoadingprops {
  onFinish: (values: number) => void;
}
const LoadingPoints: React.FC<ILoadingprops> = ({ onFinish }) => (
  <Form
    name="basic"
    layout="inline"
    style={{ maxWidth: 900, margin: "20px" }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item<FieldType>
      name="points"
      rules={[
        {
          required: true,
          message: "Введите количество загружаемых данных",
          validator: checkPoints,
        },
      ]}
    >
      <Input placeholder="Введите количество загружаемых данных" />
    </Form.Item>

    <Form.Item>
      <Button type="default" htmlType="submit">
        Загрузить
      </Button>
    </Form.Item>
  </Form>
);

export default LoadingPoints;
