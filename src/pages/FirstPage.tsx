import React, { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hook";

import MySelect from "../components/MySelect";
import { Brigade } from "../store/firstPageSlice";
import { Col, Row, Space, Spin } from "antd";
import MyCard from "../components/MyCard";

const FirstPage: FC = () => {
  const connectionState = useAppSelector(
    (state) => state.first.connectionState
  );
  const brigades = useAppSelector((state) => state.first.brigades);
  const departments = useAppSelector((state) => state.first.departments);
  const [chooseDepartments, setChooseDepartments] = React.useState<
    number | null
  >(null);
  const [chooseConnection, setChooseConnection] = React.useState<number | null>(
    null
  );
  const loadingItems = useAppSelector((state) => state.first.loadingBrigades);
  const Filtering = (item: Brigade, value: number | null, type: string) => {
    switch (type) {
      case "connection":
        if (value === 0) return item.connectionStateId === value;
        if (value) return item.connectionStateId === value;
        else return true;
      case "department":
        if (value === 0) return item.department.id === value;
        if (value) return item.department.id === value;
        else return true;
    }
  };

  const selectConnection = (value: number) => {
    setChooseConnection(value);
  };
  const selectDepartments = (value: number) => {
    setChooseDepartments(value);
  };
  return (
    <Row>
      <Space>
        <MySelect
          placeholder="Соединение"
          items={connectionState}
          onChange={selectConnection}
        />
        <MySelect
          placeholder="Департамент"
          items={departments}
          onChange={selectDepartments}
        />
      </Space>

      {loadingItems ? (
        <div className="spinContainer">
          <Spin size="large" />
        </div>
      ) : (
        <Row style={{ marginTop: "30px" }} gutter={[24, 16]}>
          {brigades
            .filter((item) => {
              return Filtering(item, chooseConnection, "connection");
            })
            .filter((item) => {
              return Filtering(item, chooseDepartments, "department");
            })
            .map((brigade: Brigade) => (
              <Col xs={24} sm={12} md={12} lg={8} xl={6}>
                <MyCard brigade={brigade} departments={departments} />
              </Col>
            ))}
        </Row>
      )}
    </Row>
  );
};

export default FirstPage;
