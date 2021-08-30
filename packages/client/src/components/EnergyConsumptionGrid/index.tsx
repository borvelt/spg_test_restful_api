import { FC } from "react";
import { EnergyConsumptionGridProps } from "./types";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const EnergyConsumptionGrid: FC<EnergyConsumptionGridProps> = ({
  data,
  ...props
}) => {
  const categories: string[] = [];
  const series: Highcharts.SeriesOptionsType[] = [];
  for (let [energy, consumption] of Object.entries(data)) {
    consumption.forEach((x) => categories.push(`${x.year}/${x.month}`));
    if (consumption.length) {
      series.push({
        name: energy,
        type: "line",
        data: consumption.map((x) => x.consumption),
      });
    }
  }
  const options: Highcharts.Options = {
    title: {
      text: series.map((x) => x.name).join(" - "),
    },
    xAxis: {
      title: {
        text: "Date",
      },
      categories: Array.from(categories),
    },
    yAxis: {
      title: {
        text: "Consumption",
      },
    },
    series,
  };
  return (
    <div {...props}>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default EnergyConsumptionGrid;
