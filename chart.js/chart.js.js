// Converted from https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/chart.js/index.d.ts

declare module 'chart.js' {
  declare export type ChartType = 'line' | 'bar' | 'radar' | 'doughnut' | 'polarArea' | 'bubble' | 'pie';
  declare export type TimeUnit =
    'millisecond'
    | 'second'
    | 'minute'
    | 'hour'
    | 'day'
    | 'week'
    | 'month'
    | 'quarter'
    | 'year';
  declare export type ScaleType = 'category' | 'linear' | 'logarithmic' | 'time' | 'radialLinear';
  declare export type PointStyle =
    'circle'
    | 'cross'
    | 'crossRot'
    | 'dash'
    | 'line'
    | 'rect'
    | 'rectRounded'
    | 'rectRot'
    | 'star'
    | 'triangle';
  declare export type PositionType = 'left' | 'right' | 'top' | 'bottom';
  declare export type ChartColor = string | CanvasGradient | CanvasPattern | string[];

  declare export interface ChartArea {
    top: number,
    right: number,
    bottom: number,
    left: number
  }

  declare export interface ChartLegendItem {
    text?: string,
    fillStyle?: string,
    hidden?: boolean,
    lineCap?: string,
    lineDash?: number[],
    lineDashOffset?: number,
    lineJoin?: string,
    lineWidth?: number,
    strokeStyle?: string,
  }

  declare export interface ChartTooltipItem {
    xLabel?: string,
    yLabel?: string,
    datasetIndex?: number,
    index?: number,
  }

  declare export interface ChartTooltipLabelColor {
    borderColor: ChartColor,
    backgroundColor: ChartColor,
  }

  declare export interface ChartTooltipCallback {
    beforeTitle?: (item: ChartTooltipItem[], data: ChartData) => string | string[],
    title?: (item: ChartTooltipItem[], data: ChartData) => string | string[],
    afterTitle?: (item: ChartTooltipItem[], data: ChartData) => string | string[],
    beforeBody?: (item: ChartTooltipItem[], data: ChartData) => string | string[],
    beforeLabel?: (tooltipItem: ChartTooltipItem, data: ChartData) => string | string[],
    label?: (tooltipItem: ChartTooltipItem, data: ChartData) => string | string[],
    labelColor?: (tooltipItem: ChartTooltipItem, chart: Chart) => ChartTooltipLabelColor,
    labelTextColor?: (tooltipItem: ChartTooltipItem, chart: Chart) => string,
    afterLabel?: (tooltipItem: ChartTooltipItem, data: ChartData) => string | string[],
    afterBody?: (item: ChartTooltipItem[], data: ChartData) => string | string[],
    beforeFooter?: (item: ChartTooltipItem[], data: ChartData) => string | string[],
    footer?: (item: ChartTooltipItem[], data: ChartData) => string | string[],
    afterFooter?: (item: ChartTooltipItem[], data: ChartData) => string | string[],
  }

  declare export interface ChartAnimationParameter {
    chartInstance?: any,
    animationObject?: any,
  }

  declare export interface ChartPoint {
    x?: number | string | Date,
    y?: number,
  }

  declare export interface ChartConfiguration {
    type?: ChartType | string,
    data?: ChartData,
    options?: ChartOptions,
  }

  declare export interface ChartData {
    labels?: Array<string | string[]>,
    datasets?: ChartDataSets[]
  }

  declare export interface ChartOptions {

    responsive?: boolean,
    responsiveAnimationDuration?: number,
    aspectRatio?: number,
    maintainAspectRatio?: boolean,
    events?: string[],
    onClick?: (event?: MouseEvent, activeElements?: Array<{}>) => any,
    title?: ChartTitleOptions,
    legend?: ChartLegendOptions,
    tooltips?: ChartTooltipOptions,
    hover?: ChartHoverOptions,
    animation?: ChartAnimationOptions,
    elements?: ChartElementsOptions,
    layout?: ChartLayoutOptions,
    scales?: ChartScales,
    showLines?: boolean,
    spanGaps?: boolean,
    cutoutPercentage?: number,
    circumference?: number,
    rotation?: number,
    // Plugins can require any options
    plugins?: any
  }

  declare export interface ChartFontOptions {
    defaultFontColor?: ChartColor,
    defaultFontFamily?: string,
    defaultFontSize?: number,
    defaultFontStyle?: string,
  }


  declare export interface ChartTitleOptions {
    display?: boolean,
    position?: PositionType,
    fullWdith?: boolean,
    fontSize?: number,
    fontFamily?: string,
    fontColor?: ChartColor,
    fontStyle?: string,
    padding?: number,
    text?: string,
  }

  declare export interface ChartLegendOptions {
    display?: boolean,
    position?: PositionType,
    fullWidth?: boolean,
    onClick?: (event: MouseEvent, legendItem: ChartLegendItem) => void,
    onHover?: (event: MouseEvent, legendItem: ChartLegendItem) => void,
    labels?: ChartLegendLabelOptions,
    reverse?: boolean
  }

  declare export interface ChartLegendLabelOptions {
    boxWidth?: number,
    fontSize?: number,
    fontStyle?: string,
    fontColor?: ChartColor,
    fontFamily?: string,
    padding?: number,
    generateLabels?: (chart: any) => any,
  }

  declare export interface ChartTooltipOptions {
    enabled?: boolean,
    custom?: (a: any) => void,
    mode?: string,
    intersect?: boolean,
    backgroundColor?: ChartColor,
    titleFontFamily?: string,
    titleFontSize?: number,
    titleFontStyle?: string,
    titleFontColor?: ChartColor,
    titleSpacing?: number,
    titleMarginBottom?: number,
    bodyFontFamily?: string,
    bodyFontSize?: number,
    bodyFontStyle?: string,
    bodyFontColor?: ChartColor,
    bodySpacing?: number,
    footerFontFamily?: string,
    footerFontSize?: number,
    footerFontStyle?: string,
    footerFontColor?: ChartColor,
    footerSpacing?: number,
    footerMarginTop?: number,
    xPadding?: number,
    yPadding?: number,
    caretSize?: number,
    cornerRadius?: number,
    multiKeyBackground?: string,
    callbacks?: ChartTooltipCallback,
    filter?: (item: ChartTooltipItem) => boolean,
    itemSort?: (itemA: ChartTooltipItem, itemB: ChartTooltipItem) => number,
    position?: "average" | "nearest",
    caretPadding?: number,
    displayColors?: boolean,
    borderColor?: ChartColor,
    borderWidth?: number,
  }

  declare export interface ChartHoverOptions {
    mode?: string,
    animationDuration?: number,
    intersect?: boolean,
    onHover?: (active: any) => void,
  }

  declare export interface ChartAnimationObject {
    currentStep?: number,
    numSteps?: number,
    easing?: string,
    render?: (arg: any) => void,
    onAnimationProgress?: (arg: any) => void,
    onAnimationComplete?: (arg: any) => void,
  }

  declare export interface ChartAnimationOptions {
    duration?: number,
    easing?: string,
    onProgress?: (chart: any) => void,
    onComplete?: (chart: any) => void,
  }

  declare export interface ChartElementsOptions {
    point?: ChartPointOptions,
    line?: ChartLineOptions,
    arc?: ChartArcOptions,
    rectangle?: ChartRectangleOptions,
  }


  declare export interface ChartArcOptions {
    backgroundColor?: ChartColor,
    borderColor?: ChartColor,
    borderWidth?: number,
  }

  declare export interface ChartLineOptions {
    tension?: number,
    backgroundColor?: ChartColor,
    borderWidth?: number,
    borderColor?: ChartColor,
    borderCapStyle?: string,
    borderDash?: any[],
    borderDashOffset?: number,
    borderJoinStyle?: string,
    capBezierPoints?: boolean,
    fill?: 'zero' | 'top' | 'bottom' | boolean,
    stepped?: boolean,
  }

  declare export interface ChartPointOptions {
    radius?: number,
    pointStyle?: PointStyle,
    backgroundColor?: ChartColor,
    borderWidth?: number,
    borderColor?: ChartColor,
    hitRadius?: number,
    hoverRadius?: number,
    hoverBorderWidth?: number,
  }

  declare export interface ChartRectangleOptions {
    backgroundColor?: ChartColor,
    borderWidth?: number,
    borderColor?: ChartColor,
    borderSkipped?: string,
  }

  declare export interface ChartLayoutOptions {
    padding?: ChartLayoutPaddingObject | number,
  }

  declare export interface ChartLayoutPaddingObject {
    top?: number,
    right?: number,
    bottom?: number,
    left?: number,
  }

  declare export interface GridLineOptions {
    display?: boolean,
    color?: ChartColor,
    borderDash?: number[],
    borderDashOffset?: number,
    lineWidth?: number,
    drawBorder?: boolean,
    drawOnChartArea?: boolean,
    drawTicks?: boolean,
    tickMarkLength?: number,
    zeroLineWidth?: number,
    zeroLineColor?: ChartColor,
    zeroLineBorderDash?: number[],
    zeroLineBorderDashOffset?: number,
    offsetGridLines?: boolean,
  }

  declare export interface ScaleTitleOptions {
    display?: boolean,
    labelString?: string,
    fontColor?: ChartColor,
    fontFamily?: string,
    fontSize?: number,
    fontStyle?: string,
  }

  declare export interface TickOptions {
    autoSkip?: boolean,
    autoSkipPadding?: boolean,
    callback?: (value: any, index: any, values: any) => string | number,
    display?: boolean,
    fontColor?: ChartColor,
    fontFamily?: string,
    fontSize?: number,
    fontStyle?: string,
    labelOffset?: number,
    maxRotation?: number,
    minRotation?: number,
    mirror?: boolean,
    padding?: number,
    reverse?: boolean,
    min?: any,
    max?: any,
  }

  declare export interface AngleLineOptions {
    display?: boolean,
    color?: ChartColor,
    lineWidth?: number,
  }

  declare export interface PointLabelOptions {
    callback?: (arg: any) => any,
    fontColor?: ChartColor,
    fontFamily?: string,
    fontSize?: number,
    fontStyle?: string,
  }

  declare export type LinearTickOptions = TickOptions & {
    beginAtZero?: boolean,
    min?: number,
    max?: number,
    maxTicksLimit?: number,
    stepSize?: number,
    suggestedMin?: number,
    suggestedMax?: number,
  }

  declare export type LogarithmicTickOptions = TickOptions & {
    min?: number,
    max?: number,
  }


  declare export interface ChartDataSets {
    cubicInterpolationMode?: 'default' | 'monotone',
    backgroundColor?: ChartColor | ChartColor[],
    borderWidth?: number | number[],
    borderColor?: ChartColor | ChartColor[],
    borderCapStyle?: string,
    borderDash?: number[],
    borderDashOffset?: number,
    borderJoinStyle?: string,
    borderSkipped?: PositionType,
    data?: number[] | ChartPoint[],
    fill?: boolean | number | string,
    hoverBackgroundColor?: string | string[],
    hoverBorderColor?: string | string[],
    hoverBorderWidth?: number | number[],
    label?: string,
    lineTension?: number,
    steppedLine?: 'before' | 'after' | boolean,
    pointBorderColor?: ChartColor | ChartColor[],
    pointBackgroundColor?: ChartColor | ChartColor[],
    pointBorderWidth?: number | number[],
    pointRadius?: number | number[],
    pointHoverRadius?: number | number[],
    pointHitRadius?: number | number[],
    pointHoverBackgroundColor?: ChartColor | ChartColor[],
    pointHoverBorderColor?: ChartColor | ChartColor[],
    pointHoverBorderWidth?: number | number[],
    pointStyle?: PointStyle | HTMLImageElement | Array<PointStyle | HTMLImageElement>,
    xAxisID?: string,
    yAxisID?: string,
    type?: string,
    hidden?: boolean,
    hideInLegendAndTooltip?: boolean,
    showLine?: boolean,
    stack?: string,
    spanGaps?: boolean,
  }

  declare export interface ChartScales {
    type?: ScaleType | string,
    display?: boolean,
    position?: PositionType | string,
    gridLines?: GridLineOptions,
    scaleLabel?: ScaleTitleOptions,
    ticks?: TickOptions,
    xAxes?: ChartXAxe[],
    yAxes?: ChartYAxe[],
  }

  declare export interface CommonAxe {
    type?: ScaleType | string,
    display?: boolean,
    id?: string,
    stacked?: boolean,
    position?: string,
    ticks?: TickOptions,
    gridLines?: GridLineOptions,
    barThickness?: number,
    scaleLabel?: ScaleTitleOptions,
    beforeUpdate?: (scale?: any) => void,
    beforeSetDimension?: (scale?: any) => void,
    beforeDataLimits?: (scale?: any) => void,
    beforeBuildTicks?: (scale?: any) => void,
    beforeTickToLabelConversion?: (scale?: any) => void,
    beforeCalculateTickRotation?: (scale?: any) => void,
    beforeFit?: (scale?: any) => void,
    afterUpdate?: (scale?: any) => void,
    afterSetDimension?: (scale?: any) => void,
    afterDataLimits?: (scale?: any) => void,
    afterBuildTicks?: (scale?: any) => void,
    afterTickToLabelConversion?: (scale?: any) => void,
    afterCalculateTickRotation?: (scale?: any) => void,
    afterFit?: (scale?: any) => void,
  }

  declare export type ChartXAxe = CommonAxe & {
    categoryPercentage?: number,
    barPercentage?: number,
    time?: TimeScale,
  }

  // tslint:disable-next-line no-empty-declare export type
  declare export type ChartYAxe = CommonAxe & {}

  declare export type LinearScale = ChartScales & {
    ticks?: LinearTickOptions,
  }

  declare export type LogarithmicScale = ChartScales & {
    ticks?: LogarithmicTickOptions,
  }

  declare export interface TimeDisplayFormat {
    millisecond?: string,
    second?: string,
    minute?: string,
    hour?: string,
    day?: string,
    week?: string,
    month?: string,
    quarter?: string,
    year?: string,
  }

  declare export type TimeScale = ChartScales & {
    displayFormats?: TimeDisplayFormat,
    isoWeekday?: boolean,
    max?: string,
    min?: string,
    parser?: string | ((arg: any) => any),
    round?: TimeUnit,
    tooltipFormat?: string,
    unit?: TimeUnit,
    unitStepSize?: number,
    minUnit?: TimeUnit,
  }

  declare export interface RadialLinearScale {
    lineArc?: boolean,
    angleLines?: AngleLineOptions,
    pointLabels?: PointLabelOptions,
    ticks?: TickOptions,
  }

  declare export interface Size {
    height: number,
    width: number,
  }

  declare export interface PluginServiceRegistrationOptions {
    beforeInit?: (chartInstance: Chart) => void,
    afterInit?: (chartInstance: Chart) => void,

    resize?: (chartInstance: Chart, newChartSize: Size) => void,

    beforeUpdate?: (chartInstance: Chart) => void,
    afterScaleUpdate?: (chartInstance: Chart) => void,
    beforeDatasetsUpdate?: (chartInstance: Chart) => void,
    afterDatasetsUpdate?: (chartInstance: Chart) => void,
    afterUpdate?: (chartInstance: Chart) => void,

    // This is called at the start of a render. It is only called once, even if the animation will run for a number of frames. Use beforeDraw or afterDraw
    // to do something on each animation frame
    beforeRender?: (chartInstance: Chart) => void,

    // Easing is for animation
    beforeDraw?: (chartInstance: Chart, easing: string) => void,
    afterDraw?: (chartInstance: Chart, easing: string) => void,
    // Before the datasets are drawn but after scales are drawn
    beforeDatasetsDraw?: (chartInstance: Chart, easing: string) => void,
    afterDatasetsDraw?: (chartInstance: Chart, easing: string) => void,

    destroy?: (chartInstance: Chart) => void,

    // Called when an event occurs on the chart
    beforeEvent?: (chartInstance: Chart, event: Event) => void,
    afterEvent?: (chartInstance: Chart, event: Event) => void,
  }

  declare class PluginServiceStatic {
    register(plugin?: PluginServiceRegistrationOptions): void;
  }

  declare class Chart {
    static Chart: Class<Chart>;
    constructor(context: string | CanvasRenderingContext2D | HTMLCanvasElement | Array<CanvasRenderingContext2D | HTMLCanvasElement>,
                options: ChartConfiguration): void,
    config: ChartConfiguration;
    data: ChartData;
    destroy: () => {};
    update: (duration?: any, lazy?: any) => {};
    render: (duration?: any, lazy?: any) => {};
    stop: () => {};
    resize: () => {};
    clear: () => {};
    toBase64: () => string;
    generateLegend: () => {};
    getElementAtEvent: (e: any) => {};
    getElementsAtEvent: (e: any) => Array<{}>;
    getDatasetAtEvent: (e: any) => Array<{}>;
    ctx: CanvasRenderingContext2D | null;
    canvas: HTMLCanvasElement | null;
    chartArea: ChartArea;
    static pluginService: PluginServiceStatic;

    static defaults: {
      global: ChartOptions & ChartFontOptions;
    };
  }
}
