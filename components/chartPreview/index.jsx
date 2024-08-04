import styles from "../../styles/Home.module.css";
import { Chart } from "react-google-charts";
import db from "../../db";


/*export const options = {
  title: chartName
}
export const data = [
    [categoryTitle, amountTitle],
    [categoryone, amountone],
    [categorytwo, amounttwo],
    [categorythree, amountthree],
    [categoryfour, amountfour],
    [categoryfive, amountfive],
];
*/

/*
export default function ChartPreview(props) {
  return (
    <div className={styles.preview}>
      <Chart 
        chartType="PieChart"
        data={props.chart.data}
        options={props.chart.options}
        width={"600px"}
        height={"400px"} 
        />
    </div>
  )
}*/

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