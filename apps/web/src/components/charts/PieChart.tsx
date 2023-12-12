'use client';

import { useStore } from '@repo/store';
import { VictoryPie } from 'victory';

type PieChartProps = {
  data: { x: string; y: number }[];
};

export const PieChart = ({ data }: PieChartProps) => {
  const lists = useStore();

  console.log('CARD LISTS: ', lists);

  return (
    <VictoryPie
      data={data}
      colorScale={['navy', 'green']}
      animate={{ duration: 500 }}
    />
  );
};
