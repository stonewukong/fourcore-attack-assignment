import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
);

const RadarChart = () => {
  const data = {
    labels: [
      "Privilege Escalation",
      "Command And Control",
      "Credential Access",
      "Defense Evasion",
      "Discovery",
      "Execution",
      "Exfiltration",
      "Impact",
      "Initial Access",
      "Lateral Movement",
      "Persistence",
    ],

    datasets: [
      {
        label: "Current",
        data: [65, 83, 70, 42, 56, 70, 60, 65, 35, 60, 50],
        backgroundColor: "rgba(255, 146, 138, 0.2)",
        borderColor: "rgba(255, 146, 138, 0.8)",
        pointBackgroundColor: "rgba(255, 146, 138, 1)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(255, 146, 138, 1)",
      },
      {
        label: "Available",
        data: [90, 34, 95, 56, 55, 75, 80, 52, 50, 67, 87],
        backgroundColor: "rgba(103, 65, 217, 0.2)",
        borderColor: "rgba(103, 65, 217, 0.8)",
        pointBackgroundColor: "rgba(103, 65, 217, 1)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(103, 65, 217, 1)",
      },
    ],
  };

  const options = {
    scales: {
      r: {
        min: 0,
        max: 100,
        ticks: {
          display: false,
          stepSize: 20,
        },
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
        },
        angleLines: {
          color: "rgba(255, 255, 255, 0.1)",
        },
        pointLabels: {
          font: {
            size: 10,
          },
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
    elements: {
      line: {
        borderWidth: 2,
      },
      point: {
        radius: 2,
        hoverRadius: 4,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return <Radar data={data} options={options} />;
};

export default RadarChart;
