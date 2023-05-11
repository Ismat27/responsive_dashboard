import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  maintainAspectRatio: false,
  width: "100%",
  height: "200px",
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
    scales: {
      x: {
        display: false,
        grid: {
          display: false,
          drawOnChartArea: false,
        },
      },
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
      barThickness: 5,
    },
    {
      label: "Last Week",
      data: [2.2, 4.0, 1.8, 4.0, 2.5, 2.8],
      borderColor: "#FFE600",
      backgroundColor: "#FFE600",
      barThickness: 5,
    },
  ],
};

const OrderVoume = () => {
  return (
    <article className="bg-white rounded-lg p-4 h-full">
      <div>
        <div>
          <div className="flex justify-between items-start mb-3 capitalize">
            <h2 className="font-bold text-black-100">Order Volume</h2>
            <div>
              <span className="text-gray-300 text-sm">view report</span>
            </div>
          </div>
        </div>
        <div className="relative">
          <Bar data={data} options={{ ...options }} />
        </div>
      </div>
    </article>
  );
};

export default OrderVoume;
