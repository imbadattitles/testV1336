import { Card } from "antd";
import React from "react";
import { Brigade, Department } from "../store/firstPageSlice";

interface ICard {
  brigade: Brigade;
  departments: Department[];
}

const MyCard: React.FC<ICard> = ({ brigade, departments }) => {
  return (
    <Card size="small" title={brigade.brigade_name}>
      <span className="department">
        {departments.map((item) => {
          if (item.id === brigade.department.id) {
            return item.name;
          }
        })}
      </span>
      <div className="info">
        <p className={brigade.connectionStateId ? "green" : " red"}>
          Соединение:
          <span className="desc">
            {brigade.connectionStateId ? " В норме" : " Нет связи"}
          </span>
        </p>
        <p>
          Кластер: <span className="desc">{brigade.position.cluster}</span>
        </p>
        <p>
          Поле: <span className="desc">{brigade.position.field}</span>
        </p>
        <p>
          Скважина: <span className="desc">{brigade.position.well}</span>
        </p>
      </div>
    </Card>
  );
};

export default MyCard;
