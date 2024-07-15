import styles from './style.module.css'
import { Chart } from "react-google-charts";
import CreateChart from '../../pages/createchart';

/*export const data = [
    [categoryTitle, amountTitle],
    [categoryone, amountone],
    [categorytwo, amounttwo],
    [categorythree, amountthree],
    [categoryfour, amountfour],
    [categoryfive, amountfive],
];

export const options = {
    title: chartName
}
*/
export default function ChartPreview(props) {
  return (
    <div className={styles.preview}>
      <div>
      <Chart 
        chartType="PieChart"
        data={props.data}
        options={props.options}
        width={"600px"}
        height={"400px"} 
        />
      </div>
    </div>
  )
}