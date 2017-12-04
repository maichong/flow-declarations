import type { ChartData, ChartType, ChartLegendOptions, ChartOptions } from 'chart.js';

declare module 'react-chartjs-2' {
  declare type ChartComponentProps = {
    data: ChartData,
    type?: ChartType,
    getDatasetAtEvent?: (e: any) => void,
    getElementAtEvent?: (e: any) => void;
    getElementsAtEvent?: (e: any) => void;
    height?: number;
    legend?: ChartLegendOptions;
    onElementsClick?: (e: any) => void; // alias for getElementsAtEvent (backward compatibility)
    options?: ChartOptions;
    redraw?: boolean;
    width?: number;
  }

  declare export class Line extends React$Component<ChartComponentProps> {
  }
}
