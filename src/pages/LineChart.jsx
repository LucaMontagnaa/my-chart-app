import { useEffect } from "react"
import { Chart } from "chart.js";
function Example() {
  useEffect(() => {
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ["0", "2", "4", "6", "8", "10", "12"],
        datasets: [{
          data: [5, 10, 15, 20, 25, 34, 35],
          label: "Applied",
          borderColor: "#3e95cd",
          backgroundColor: "#7bb6dd",
          fill: true,
        }  
        ]
      },
    });
  }, [])
  return (
    <>
      {/* line chart */}
      <h1 className="w-[110px] mx-auto mt-10 text-xl font-semibold capitalize ">Temperatura</h1>
      <div className="w-[1100px] h-screen flex mx-auto my-auto">
        <div className='border border-gray-400 pt-0 rounded-xl  w-full h-fit my-auto  shadow-xl'>
          <canvas id='myChart'></canvas>
        </div>
      </div>
    </>
  )
}

export default Example;