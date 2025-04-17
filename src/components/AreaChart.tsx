import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
);

const AreaChart = () => {
  const data = {
    labels: ["0", "25", "50", "75", "100"],
    datasets: [
      {
        fill: true,
        label: "Detected Techniques",
        data: [15, 45, 45, 45, 85],
        backgroundColor: "rgba(36, 180, 210, 0.4)",
        borderColor: "rgba(36, 180, 210, 1)",
        pointBackgroundColor: "rgba(36, 180, 210, 1)",
        pointBorderColor: "#fff",
        pointRadius: 4,
        tension: 0.4,
      },
      {
        fill: true,
        label: "Total Techniques",
        data: [10, 30, 30, 30, 65],
        backgroundColor: "rgba(172, 66, 77, 0.4)",
        borderColor: "rgba(172, 66, 77, 1)",
        pointBackgroundColor: "rgba(172, 66, 77, 1)",
        pointBorderColor: "#fff",
        pointRadius: 4,
        tension: 0.4,
      },
      {
        fill: true,
        label: "Blocked Techniques",
        data: [5, 15, 15, 15, 30],
        backgroundColor: "rgba(76, 80, 182, 0.4)",
        borderColor: "rgba(76, 80, 182, 1)",
        pointBackgroundColor: "rgba(76, 80, 182, 1)",
        pointBorderColor: "#fff",
        pointRadius: 4,
        tension: 0.4,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
        },
        ticks: {
          color: "rgba(255, 255, 255, 0.7)",
        },
      },
      x: {
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
        },
        ticks: {
          color: "rgba(255, 255, 255, 0.7)",
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        titleFont: {
          size: 12,
        },
        bodyFont: {
          size: 12,
        },
        padding: 10,
        displayColors: true,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return <Line data={data} options={options} data-oid="65k9tau" />;
};

export default AreaChart;
