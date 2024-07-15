import { Chart } from "react-google-charts";
import Link from "next/link"
import styles from './style.module.css'
import ChartPreview from "../chartPreview"

export default function ChartList({charts}) {
    return (
      <div className={styles.list}>
        {charts.map(chart => <Link key={chart.chartId} href={`/chart/${chart.chartId}`} style={{textDecoration: 'none'}}>
          <Chart {...chart} />
        </Link>)}
      </div>
    )
  }
