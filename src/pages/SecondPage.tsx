import React, { FC } from "react";
import { useAppDispatch, useAppSelector } from "../hook";
import LoadingPoints from "../components/LoadingPoints";
import { getPoints } from "../API/api";
import { setLoadingPoints, setPoints } from "../store/secondPageSlice";
import MyGraph from "../components/MyGraph";
import { Spin } from "antd";

const SecondPage: FC = () => {
  const points = useAppSelector((state) => state.second.points);
  const loading = useAppSelector((state) => state.second.loadingPoints);
  const [err, setErr] = React.useState(false);
  const dispatch = useAppDispatch();
  const onFinish = (values: any) => {
    setErr(false);
    getPoints(
      "https://v1336-api-test.onrender.com/getPointsFast",
      values.points,
      dispatch,
      setLoadingPoints,
      setPoints,
      setErr
    );
  };

  return (
    <div>
      <LoadingPoints onFinish={onFinish} />
      {loading ? (
        <div className="spinContainer">
          <Spin size="large" />
        </div>
      ) : err ? (
        <div className="spinContainer">Ошибка загрузки</div>
      ) : (
        <MyGraph data={points} />
      )}
    </div>
  );
};

export default SecondPage;
