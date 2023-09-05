import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const CustomXAxisTick = (props) => {
  const { x, y, payload } = props;

  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={0}
        dy={16}
        fill="#666"
        fontSize="12px"
      >
        {payload.value}
      </text>
    </g>
  );
};

const CustomYAxisTick = (props) => {
  const { x, y, payload } = props;
  const formattedValue = payload.value / 1000 + 'k';

  return (
    <g transform={`translate(${x},${y})`}>
      <text x={0} y={0} dy={4} textAnchor="end" fill="#666">
        {formattedValue}
      </text>
    </g>
  );
};

export const CustomLineChart = ({ data }) => {
  return (
    <div className="w-full h-[160px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} width={500}>
          <CartesianGrid
            strokeDasharray="3 3"
            horizontal={false}
            vertical={false}
          />
          <XAxis
            dataKey="name"
            tickLine={false}
            axisLine={{ stroke: '#28668B1A', strokeWidth: 1 }}
            tick={<CustomXAxisTick />}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={<CustomYAxisTick />}
            tickMargin={25}
          />
          <Tooltip />
          <Line type="monotone" dataKey="pv" stroke="#7D6508" dot={false} />
          <Line type="monotone" dataKey="uv" stroke="#FFCB06" dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
