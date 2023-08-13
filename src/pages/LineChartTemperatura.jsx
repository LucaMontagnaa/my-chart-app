import { useEffect } from "react"
import { Chart } from "chart.js";
import styles from '@/styles/Home.module.css'

function Temperatura(props) {
  useEffect(() => {
    let ctx = document.getElementById('myChart').getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
          labels: props.labels,
          datasets: [{
          data: props.data,
          label: "Temperatura",
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
      <div className="w-[500px] absolute right-36 mt-96 top-32" >
        <div className={styles.ChartTemperatura}>
          <canvas id='myChart'></canvas>
        </div>
      </div>
    </>
  )
}

export default Temperatura;