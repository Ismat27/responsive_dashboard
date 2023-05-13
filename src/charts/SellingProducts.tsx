import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import SmallChartsWrapper from "./SmallChartsWrapper";

ChartJS.register(ArcElement, Tooltip, Legend);

const colors = ["#EF38B1", "#139928", "#558CEE"];
const plotData = [60, 30, 10];

export const data = {
  datasets: [
    {
      label: "Percentage",
      data: plotData,
      backgroundColor: [...colors],
      borderColor: [...colors],
      borderWidth: 1,
    },
  ],
};

const SellingProducts = () => {
  return (
    <article className="bg-white rounded-lg p-4 h-full grid grid-rows-[auto_1fr_auto]">
      <h2 className="text-sm font-bold text-black-200">
        Best Selling Products sales Contribution
      </h2>
      <SmallChartsWrapper>
        <Doughnut data={data} />
      </SmallChartsWrapper>
      <ul className="mt-4">
        <li className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full inline-block bg-[#EF38B1]"></span>
          <span className="text-sm text-black-100">Clothes</span>
        </li>
        <li className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full inline-block bg-[#139928]"></span>
          <span className="text-sm text-black-100">Laptops</span>
        </li>
        <li className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full inline-block bg-[#558CEE]"></span>
          <span className="text-sm text-black-100">Others</span>
        </li>
      </ul>
    </article>
  );
};

export default SellingProducts;
