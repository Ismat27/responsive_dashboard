import {
  YAxis,
  XAxis,
  CartesianGrid,
  Tooltip,
  LineChart,
  Line,
  ResponsiveContainer,
} from "recharts";
const data = [
  {
    name: "01",
    "This Week": 1.8,
    "Last Week": 2.2,
  },
  {
    name: "02",
    "This Week": 1.2,
    "Last Week": 4.0,
  },
  {
    name: "03",
    "This Week": 3.45,
    "Last Week": 1.8,
  },
  {
    name: "04",
    "This Week": 2.0,
    "Last Week": 4.0,
  },
  {
    name: "06",
    "This Week": 1.8,
    "Last Week": 2.5,
  },
  {
    name: "07",
    "This Week": 3.45,
    "Last Week": 2.8,
  },
];
const SaleSummary = () => {
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
        <ResponsiveContainer width="100%" height={200}>
          <LineChart
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
            <XAxis dataKey="name" padding={{ left: 5 }} />
            <YAxis padding={{ bottom: 0, top: 5 }} />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="Last Week"
              stroke="#7367F0"
              strokeWidth={3}
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="This Week"
              stroke="#FFE600"
              strokeWidth={3}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </article>
  );
};

export default SaleSummary;
