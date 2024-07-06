// import React from "react";
// import {
//   AreaChart,
//   Area,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";

// // Helper function to generate random datetime within the last 24 hours
// const getRandomDateTime = () => {
//   const now = new Date();
//   const randomTime = new Date(
//     now.getTime() - Math.random() * 24 * 60 * 60 * 1000
//   );
//   return randomTime.toISOString();
// };

// // Generate mock data with datetime
// const data = Array.from({ length: 20 }, (_, index) => ({
//   datetime: getRandomDateTime(),
//   waitingPeriod: Math.floor(Math.random() * 30) + 5, // Random waiting period between 5 and 35
// }));

// // Custom tooltip to display datetime and waiting period
// const CustomTooltip = ({ active, payload, label }) => {
//   if (active && payload && payload.length) {
//     return (
//       <div
//         style={{
//           backgroundColor: "white",
//           padding: "10px",
//           border: "1px solid #ccc",
//         }}
//       >
//         <p>{`Date: ${new Date(label).toLocaleString()}`}</p>
//         <p>{`Waiting Period: ${payload[0].value} minutes`}</p>
//       </div>
//     );
//   }
//   return null;
// };

// const Chart = () => {
//   return (
//     <ResponsiveContainer width="100%" height={300}>
//       <AreaChart
//         data={data}
//         margin={{
//           top: 10,
//           right: 30,
//           left: 0,
//           bottom: 0,
//         }}
//       >
//         <CartesianGrid strokeDasharray="3 3" />
//         <XAxis
//           dataKey="datetime"
//           tick={false} // Hide x-axis labels
//           tickLine={false} // Hide x-axis tick lines
//         />
//         <YAxis />
//         <Tooltip content={<CustomTooltip />} />
//         <Area
//           type="monotone"
//           dataKey="waitingPeriod"
//           stroke="#8884d8"
//           fill="#8884d8"
//         />
//       </AreaChart>
//     </ResponsiveContainer>
//   );
// };

// export default Chart;

import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Helper function to generate random datetime within the last 24 hours
const getRandomDateTime = () => {
  const now = new Date();
  const randomTime = new Date(
    now.getTime() - Math.random() * 24 * 60 * 60 * 1000
  );
  return randomTime.toISOString();
};

// Generate mock data with datetime
const data = Array.from({ length: 20 }, (_, index) => ({
  datetime: getRandomDateTime(),
  waitingPeriod: Math.floor(Math.random() * 30) + 5, // Random waiting period between 5 and 35
})).sort((a, b) => new Date(a.datetime) - new Date(b.datetime)); // Sort by datetime

// Custom tooltip to display datetime and waiting period
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          backgroundColor: "white",
          padding: "10px",
          border: "1px solid #ccc",
        }}
      >
        <p>{`Date: ${new Date(label).toLocaleString()}`}</p>
        <p>{`Waiting Period: ${payload[0].value} minutes`}</p>
      </div>
    );
  }
  return null;
};

const Chart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="datetime"
          tick={false} // Hide x-axis labels
          tickLine={false} // Hide x-axis tick lines
        />
        <YAxis />
        <Tooltip content={<CustomTooltip />} />
        <Line
          type="basisOpen"
          dataKey="waitingPeriod"
          stroke="crimson"
          legendType="square"
        // legendType  'line' | 'plainline' | 'square' | 'rect'| 'circle' | 'cross' | 'diamond' | 'square' | 'star' | 'triangle' | 'wye' | 'none'optional
          //  type:  'basis' | 'basisClosed' | 'basisOpen' | 'bumpX' | 'bumpY' | 'bump' | 'linear' | 'linearClosed' | 'natural' | 'monotoneX' | 'monotoneY' | 'monotone' | 'step' | 'stepBefore' | 'stepAfter' | Function
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Chart;
