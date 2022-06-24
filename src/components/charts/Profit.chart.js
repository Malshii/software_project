import "../../Styles/chart.css";
import { Chart as ChartJS, registerables } from 'chart.js';
import { Bar } from 'react-chartjs-2';
ChartJS.register(...registerables);

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
  datasets: [
    {
      labels: "income",
      data: [5000, 8000, 7000, 6000, 9000, 10000,5000, 8000, 7000, 6000, 9000, 10000],
      fill: true,
      backgroundColor: "#2e4355",
      pointBorderColor: "#8884d8",
      pointBorderWidth: 5,
      pointRadius: 8,
      tension: 0.4,
    },
  ],
};

const options = {
  plugins:{legend:{display:false}},
  layout: {padding:{bottom:10}},
  scales: {
    y: {
     ticks: {       
       color: "#132737",
       font: {
         size:10
       },          
     },
   },  
   x: {
    ticks: {
      color: "#132737",
      font: {
        size:15
      },          
    },
  },    
  },
};

function ProfitChart() {
  return (
    <div className="profit">
      <h4>Profit Calculations</h4>
      <Bar data={data} options={options} />
    </div>
  );
}

export default ProfitChart;

