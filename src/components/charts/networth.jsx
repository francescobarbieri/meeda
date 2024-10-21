import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts';
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';

const chartData = [
  { month: 'January', investments: 186000, properties: 80000, realestates: 250000},
  { month: 'February', investments: 305000, properties: 200000, realestates: 250000},
  { month: 'March', investments: 237000, properties: 120000, realestates: 250000},
  { month: 'April', investments: 73000, properties: 190000, realestates: 250000},
  { month: 'May', investments: 209000, properties: 130000, realestates: 250000},
  { month: 'June', investments: 214000, properties: 140000, realestates: 250000},
  { month: 'July', investments: 186000, properties: 80000, realestates: 250000},
  { month: 'August', investments: 305000, properties: 200000, realestates: 250000},
  { month: 'September', investments: 237000, properties: 120000, realestates: 250000},
  { month: 'October', investments: 73000, properties: 190000, realestates: 250000},
  { month: 'November', investments: 209000, properties: 130000, realestates: 250000},
  { month: 'December', investments: 214000, properties: 140000, realestates: 250000}
];

const chartConfig = {
  investments: {
    label: 'Investments',
    color: '#2563eb',
  },
  properties: {
    label: 'Properties',
    color: '#60a5fa',
  },
  realestates: {
    label: 'Real Estates',
    color: '#e76f51',
  }
};

const NetworthChart = () => {
  return (
    <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip content={<ChartTooltipContent hideLabel />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar dataKey="investments" stackId="a" fill="var(--color-investments)" radius={[0, 0, 4, 4]} />
        <Bar dataKey="realestates" stackId="a" fill="var(--color-realestates)" />
        <Bar dataKey="properties" stackId="a" fill="var(--color-properties)" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ChartContainer>
  );
};

export default NetworthChart;
