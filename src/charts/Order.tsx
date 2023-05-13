import {
  BarChart,
  Bar,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
const data = [
  {
    name: "01",
    "This Week": 4000,
    "Last Week": 2400,
  },
  {
    name: "02",
    "This Week": 3000,
    "Last Week": 1398,
  },
  {
    name: "03",
    "This Week": 2000,
    "Last Week": 9800,
  },
  {
    name: "04",
    "This Week": 2780,
    "Last Week": 3908,
  },
  {
    name: "05",
    "This Week": 1890,
    "Last Week": 4800,
  },
  {
    name: "06",
    "This Week": 2390,
    "Last Week": 3800,
  },
  {
    name: "07",
    "This Week": 3490,
    "Last Week": 4300,
  },
];

const Order = () => {
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
        <ResponsiveContainer width="100%" height={200}>
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 0,
              right: 0,
              left: 0,
              bottom: 0,
            }}
            barSize={7}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" />
            <Tooltip />
            <Bar dataKey="Last Week" fill="#7367F0" />
            <Bar dataKey="This Week" fill="#FFE600" />
          </BarChart>
        </ResponsiveContainer>
        <ul className="my-4 flex gap-12">
          <li className="flex items-center gap-1">
            <span className="h-2 w-2 rounded-full inline-block bg-[#7367F0]"></span>
            <span className="text-sm text-black-100 capitalize">this week</span>
          </li>
          <li className="flex items-center gap-1">
            <span className="h-2 w-2 rounded-full inline-block bg-[#FFE600]"></span>
            <span className="text-sm text-black-100 capitalize">last week</span>
          </li>
        </ul>
      </div>
    </article>
  );
};

export default Order;
