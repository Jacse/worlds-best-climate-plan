import React from 'react';
import { ChartProvider, XAxis, YAxis, LineSeries, Tooltip } from 'rough-charts';

const colors = ['rgb(3, 146, 207)', '#fe4a49', '#7bc043', '#f6abb6', '#fed766'];

const data = [
  { year: 1, banana: 2, burger: 30, book: 100, gas: 12, flight: 512.72 },
  { year: 2, banana: 2, burger: 31, book: 101, gas: 13, flight: 567.84 },
  { year: 3, banana: 2, burger: 32, book: 102, gas: 13, flight: 622.96 },
  { year: 4, banana: 2, burger: 33, book: 102, gas: 14, flight: 678.08 },
  { year: 5, banana: 2, burger: 35, book: 104, gas: 15.1, flight: 775.6 },
];

const Chart = () => {
  return (
    <ChartProvider height={400} data={data}>
      <XAxis dataKey="year" />
      <YAxis />
      <LineSeries
        dataKey="banana"
        options={{
          stroke: colors[0],
          strokeWidth: 2,
        }}
      />
      <LineSeries
        dataKey="burger"
        options={{
          stroke: colors[1],
          strokeWidth: 2,
        }}
      />
      <LineSeries
        dataKey="book"
        options={{
          stroke: colors[2],
          strokeWidth: 2,
        }}
      />
      <LineSeries
        dataKey="gas"
        options={{
          stroke: colors[3],
          strokeWidth: 2,
        }}
      />
      <LineSeries
        dataKey="flight"
        options={{
          stroke: colors[4],
          strokeWidth: 2,
        }}
      />
      <Tooltip />
    </ChartProvider>
  );
};

export default Chart;
