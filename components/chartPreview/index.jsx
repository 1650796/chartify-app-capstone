import styles from "../../styles/Home.module.css";
import { Chart } from "react-google-charts";

export default function ChartPreview({
  options,
  data
}) {
  return (
    <div className={[styles.chart, styles.grid]}>
          <Chart
            chartType="PieChart"
            data={data}
            options={options}
            width={"600px"}
            height={"400px"}
          />
      </div>
  )
}