import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
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
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom" as const,
      labels: {
        useBorderRadius: true,
        boxWidth: 9,
        boxHeight: 9,
        borderRadius: 5,
      },
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        display: true,
        color: "#DBDADE",
        drawTicks: false,
        offset: true,
      },
      ticks: {},
      min: 0,
    },
  },
};

const labels = ["01", "02", "03", "04", "05", "06"];

export const data = {
  labels,
  datasets: [
    {
      label: "This Week",
      data: [1.8, 1.2, 3.45, 2.0, 1.8, 3.45],
      borderColor: "#7367F0",
      backgroundColor: "#7367F0",
      fill: false,
      tension: 0.1,
    },
    {
      label: "Last Week",
      data: [2.2, 4.0, 1.8, 4.0, 2.5, 2.8],
      borderColor: "#FFE600",
      backgroundColor: "#FFE600",
    },
  ],
};

const Summary = () => {
  return (
    <article className="bg-white rounded-lg p-4 h-full">
      <div>
        <div>
          <div className="flex justify-between items-start mb-3 capitalize">
            <h2 className="font-bold text-black-100">Sales Summary</h2>
            <div>
              <span className="text-gray-300 text-sm">view report</span>
            </div>
          </div>
        </div>
        <div className="relative">
          <Line
            className=""
            data={data}
            options={{ ...options, maintainAspectRatio: false }}
          />
        </div>
      </div>
    </article>
  );
};

export default Summary;
