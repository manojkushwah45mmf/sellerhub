import React from "react";

import {
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Brush,
  AreaChart,
  Area,
  Legend,
} from "recharts";




const data = [
  {
    name: "1 Apr",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "6 Apr",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "11 Apr",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "16 Apr",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "21 Apr",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "26 Apr",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
];




const Areachart = () => {
  return (
    <div>

  <p className="fw-bold">Gross Revenue</p>

      <AreaChart
        width={430}
        height={250}
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="red" stopOpacity={0.2} />
            <stop offset="95%" stopColor="red" stopOpacity={0} />
          </linearGradient>
        
        </defs>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="uv"
          stroke="#FF0150"
          fillOpacity={1}
          fill="url(#colorUv)"
        />
      
      </AreaChart>
    </div>
  );
};

export default Areachart;
