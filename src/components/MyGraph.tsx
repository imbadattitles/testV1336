import React from "react";
import { render } from "react-dom";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { Point } from "../store/secondPageSlice";
import { useAppSelector } from "../hook";

interface IGrapgh {
  data: Point[];
}

const MyGraph: React.FC<IGrapgh> = ({ data }) => {
  let dataParse = data.map((item) => {
    const date = Date.parse(item.x);
    return [date, item.y];
  });
  const length = useAppSelector((item) => item.second.pointsLength);
  const options = {
    chart: {
      type: "line",
    },
    title: {
      text: `График для ${length} точек`,
    },
    xAxis: {
      type: "datetime",
      dateTimeLabelFormats: {
        day: "%a %d %b %Y",
      },
    },
    series: [
      {
        data: dataParse,
        step: "left",
        name: "Размер",
      },
    ],
  };
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default MyGraph;
