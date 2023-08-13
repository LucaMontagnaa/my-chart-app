import { useEffect } from "react"
import { Chart } from "chart.js";
import styles from '@/styles/Home.module.css'

function Humedad(props) {
  useEffect(() => {
    let ctx = document.getElementById('myChart2').getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: props.labels,
        datasets: [{
          data: props.data,
          label: "Humedad",
          borderColor: "rgb(53, 204, 141)",
          backgroundColor: "rgb(53, 204, 141)",
          fill: false,
        }  
        ]
      },
    });
  }, [])
  return (
    <>
      {/* line chart */}
      <div className="w-[500px] my-auto absolute right-36 mt-52 top-0">
        <div className={styles.ChartHumedad}>
          <canvas id='myChart2'></canvas>
        </div>
      </div>
    </>
  )
}

export default Humedad;