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
    onElementsClick?: (e: any) => void;
    options?: ChartOptions;
    redraw?: boolean;
    width?: number;
  }

  declare export class Doughnut extends React$Component<ChartComponentProps> {
  }

  declare export class Pie extends React$Component<ChartComponentProps> {
  }

  declare export class Line extends React$Component<ChartComponentProps> {
  }

  declare export class Bar extends React$Component<ChartComponentProps> {
  }

  declare export class HorizontalBar extends React$Component<ChartComponentProps> {
  }

  declare export class Radar extends React$Component<ChartComponentProps> {
  }

  declare export class Polar extends React$Component<ChartComponentProps> {
  }

  declare export class Bubble extends React$Component<ChartComponentProps> {
  }
}
