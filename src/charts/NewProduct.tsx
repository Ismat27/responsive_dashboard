import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const colors = ["#7367F0", "#FFE600"];
const plotData = [1299, 949];

export const data = {
  datasets: [
    {
      label: "Rejected",
      data: plotData,
      backgroundColor: [...colors],
      borderColor: [...colors],
      borderWidth: 1,
    },
  ],
};

const NewProductRejection = () => {
  return (
    <article className="bg-white rounded-lg p-4 h-full grid grid-rows-[auto_1fr_auto]">
      <h2 className="text-sm font-bold text-black-200">
        New Product Creation: Rejected Products
      </h2>
      <div className="self-center relative h-[150px] w-[150px] mx-[auto]">
        <Doughnut data={data} />
      </div>
      <div>
        <ul className="my-4">
          <li className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full inline-block bg-[#7367F0]"></span>
            <span className="text-sm text-black-100 capitalize">
              missing image
            </span>
          </li>
          <li className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full inline-block bg-[#FFE600]"></span>
            <span className="text-sm text-black-100 capitalize">
              poor quality
            </span>
          </li>
        </ul>
        <ul>
          <li className="flex justify-between text-sm text-black-200 border-b-2 border-gray-200">
            <span>Approved</span>
            <span>3928</span>
          </li>
          <li className="flex justify-between text-sm text-black-200">
            <span>Pending</span>
            <span>227</span>
          </li>
        </ul>
      </div>
    </article>
  );
};

export default NewProductRejection;
