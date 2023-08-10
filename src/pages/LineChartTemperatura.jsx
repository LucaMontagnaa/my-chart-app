import { useEffect } from "react"
import { Chart } from "chart.js";
function Temperatura() {
  useEffect(() => {
    let ctx = document.getElementById('myChart').getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ["0", "2", "4", "6", "8", "10", "12"],
        datasets: [{
          data: [5, 10, 15, 20, 25, 34, 35],
          label: "Temperatura",
          borderColor: "green",
          backgroundColor: "green",
          fill: false,
        }
        ]
      },
    });
  }, [])
  return (
    <>
      {/* line chart */}
      <div className="w-[500px] h-screen mx-auto my-auto absolute right-10 top-0" >
        <div className='border border-gray-400 pt-0 rounded-xl  w-full h-fit my-auto  shadow-xl'>
          <canvas id='myChart'></canvas>
        </div>
      </div>
    </>
  )
}

export default Temperatura;