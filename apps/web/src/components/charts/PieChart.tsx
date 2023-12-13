'use client';

import { VictoryLabel, VictoryPie } from 'victory';

type PieChartProps = {
  data: { x: string; y: number }[];
};

export const PieChart = ({ data }: PieChartProps) => {
  return (
    <VictoryPie
      data={data}
      colorScale={['#fb923c', '#4ade80']}
      animate={{ duration: 500 }}
      labelComponent={<VictoryLabel style={{ display: 'none' }} />}
    />
  );
};
