// Convented from https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/chart.js/index.d.ts

declare module 'chart.js' {
  declare type ChartType = 'line' | 'bar' | 'radar' | 'doughnut' | 'polarArea' | 'bubble' | 'pie';
  declare type TimeUnit = 'millisecond' | 'second' | 'minute' | 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year';
  declare type ScaleType = 'category' | 'linear' | 'logarithmic' | 'time' | 'radialLinear';
  declare type PointStyle =
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
  declare type PositionType = 'left' | 'right' | 'top' | 'bottom';
  declare type ChartColor = string | CanvasGradient | CanvasPattern | string[];

  declare type ChartArea = {
    top: number,
    right: number,
    bottom: number,
    left: number
  }

  declare type ChartLegendItem = {
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

  declare type ChartTooltipItem = {
    xLabel?: string,
    yLabel?: string,
    datasetIndex?: number,
    index?: number,
  }

  declare type ChartTooltipLabelColor = {
    borderColor: ChartColor,
    backgroundColor: ChartColor,
  }

  declare type ChartTooltipCallback = {
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

  declare type ChartAnimationParameter = {
    chartInstance?: any,
    animationObject?: any,
  }

  declare type ChartPoint = {
    x?: number | string | Date,
    y?: number,
  }

  declare type ChartConfiguration = {
    type?: ChartType | string,
    data?: ChartData,
    options?: ChartOptions,
  }

  declare type ChartData = {
    labels?: Array<string | string[]>,
    datasets?: ChartDataSets[]
  }

  declare type ChartOptions = {

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

  declare type ChartFontOptions = {
    defaultFontColor?: ChartColor,
    defaultFontFamily?: string,
    defaultFontSize?: number,
    defaultFontStyle?: string,
  }


  declare type ChartTitleOptions = {
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

  declare type ChartLegendOptions = {
    display?: boolean,
    position?: PositionType,
    fullWidth?: boolean,
    onClick?: (event: MouseEvent, legendItem: ChartLegendItem) => void,
    onHover?: (event: MouseEvent, legendItem: ChartLegendItem) => void,
    labels?: ChartLegendLabelOptions,
    reverse?: boolean
  }

  declare type ChartLegendLabelOptions = {
    boxWidth?: number,
    fontSize?: number,
    fontStyle?: string,
    fontColor?: ChartColor,
    fontFamily?: string,
    padding?: number,
    generateLabels?: (chart: any) => any,
  }

  declare type  ChartTooltipOptions = {
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


  declare type ChartHoverOptions = {
    mode?: string,
    animationDuration?: number,
    intersect?: boolean,
    onHover?: (active: any) => void,
  }

  declare type ChartAnimationObject = {
    currentStep?: number,
    numSteps?: number,
    easing?: string,
    render?: (arg: any) => void,
    onAnimationProgress?: (arg: any) => void,
    onAnimationComplete?: (arg: any) => void,
  }

  declare type ChartAnimationOptions = {
    duration?: number,
    easing?: string,
    onProgress?: (chart: any) => void,
    onComplete?: (chart: any) => void,
  }

  declare type ChartElementsOptions = {
    point?: ChartPointOptions,
    line?: ChartLineOptions,
    arc?: ChartArcOptions,
    rectangle?: ChartRectangleOptions,
  }


  declare type ChartArcOptions = {
    backgroundColor?: ChartColor,
    borderColor?: ChartColor,
    borderWidth?: number,
  }

  declare type ChartLineOptions = {
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

  declare type ChartPointOptions = {
    radius?: number,
    pointStyle?: PointStyle,
    backgroundColor?: ChartColor,
    borderWidth?: number,
    borderColor?: ChartColor,
    hitRadius?: number,
    hoverRadius?: number,
    hoverBorderWidth?: number,
  }

  declare type ChartRectangleOptions = {
    backgroundColor?: ChartColor,
    borderWidth?: number,
    borderColor?: ChartColor,
    borderSkipped?: string,
  }

  declare type ChartLayoutOptions = {
    padding?: ChartLayoutPaddingObject | number,
  }

  declare type ChartLayoutPaddingObject = {
    top?: number,
    right?: number,
    bottom?: number,
    left?: number,
  }

  declare type GridLineOptions = {
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

  declare type ScaleTitleOptions = {
    display?: boolean,
    labelString?: string,
    fontColor?: ChartColor,
    fontFamily?: string,
    fontSize?: number,
    fontStyle?: string,
  }

  declare type TickOptions = {
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
  declare type AngleLineOptions = {
    display?: boolean,
    color?: ChartColor,
    lineWidth?: number,
  }

  declare type PointLabelOptions = {
    callback?: (arg: any) => any,
    fontColor?: ChartColor,
    fontFamily?: string,
    fontSize?: number,
    fontStyle?: string,
  }

  declare type LinearTickOptions = TickOptions & {
    beginAtZero?: boolean,
    min?: number,
    max?: number,
    maxTicksLimit?: number,
    stepSize?: number,
    suggestedMin?: number,
    suggestedMax?: number,
  }

  declare type LogarithmicTickOptions = TickOptions & {
    min?: number,
    max?: number,
  }


  declare type ChartDataSets = {
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

  declare type ChartScales = {
    type?: ScaleType | string,
    display?: boolean,
    position?: PositionType | string,
    gridLines?: GridLineOptions,
    scaleLabel?: ScaleTitleOptions,
    ticks?: TickOptions,
    xAxes?: ChartXAxe[],
    yAxes?: ChartYAxe[],
  }

  declare type CommonAxe = {
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

  declare type ChartXAxe = CommonAxe & {
    categoryPercentage?: number,
    barPercentage?: number,
    time?: TimeScale,
  }

  // tslint:disable-next-line no-empty-declare type
  declare type ChartYAxe = CommonAxe & {}

  declare type LinearScale = ChartScales & {
    ticks?: LinearTickOptions,
  }

  declare type LogarithmicScale = ChartScales & {
    ticks?: LogarithmicTickOptions,
  }

  declare type TimeDisplayFormat = {
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

  declare type TimeScale = ChartScales & {
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

  declare type RadialLinearScale = {
    lineArc?: boolean,
    angleLines?: AngleLineOptions,
    pointLabels?: PointLabelOptions,
    ticks?: TickOptions,
  }

  declare type Size = {
    height: number,
    width: number,
  }

  declare type PluginServiceRegistrationOptions = {
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
