import styles from './style.module.css'
import { Chart } from "react-google-charts";

export default function ChartPreview({
  title,
  authors
}) {
  return (
    <div className={styles.preview}>
      <div>
      <Chart 
        chartType="PieChart"
        data={data}
        options={options}
        width={"600px"}
        height={"400px"} 
        />
      </div>
    </div>
  )
}