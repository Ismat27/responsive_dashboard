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
import SmallChartsWrapper from "./SmallChartsWrapper";

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
      display: false,
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
      display: false,
    },
  },
};

const labels = ["T", "W", "T", "F"];

export const data = {
  labels,
  datasets: [
    {
      label: "This Week",
      data: [1, 1, 1, 10],
      borderColor: "#7367F0",
      backgroundColor: "#7367F0",
      barThickness: 8,
      borderRadius: 8,
    },
  ],
};

const PendingOrders = () => {
  return (
    <article className="bg-white rounded-lg p-4 h-full grid grid-rows-[auto_1fr_auto]">
      <h2 className="text-sm font-bold text-black-200 mb-1">
        Total Pendinding Order
      </h2>
      <SmallChartsWrapper>
        <Bar data={data} options={{ ...options }} />
      </SmallChartsWrapper>
      <div>
        <p className="text-sm text-black-100 font-bold">Current Daily Order</p>
      </div>
    </article>
  );
};

export default PendingOrders;
