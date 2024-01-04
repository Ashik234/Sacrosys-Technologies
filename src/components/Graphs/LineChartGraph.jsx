import React from "react";
import { LineChart } from "@mui/x-charts/LineChart";

function LineChartGraph() {
  return (
    <div
      style={{
        overflowX: "auto",
        maxWidth: "400px",
      }}
    >
      <LineChart
        xAxis={[{ data: [1, 2, 3, 5, 8, 10, 11, 12, 13, 14, 15, 16, 18] }]}
        series={[
          {
            data: [2, 5.5, 2, 8.5, 1.5, 5, 5, 10, 9, 12, 4, 5],
          },
        ]}
        width={400}
        height={310}
      />
    </div>
  );
}

export default LineChartGraph;
