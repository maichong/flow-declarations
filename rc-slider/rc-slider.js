declare module 'rc-slider' {
  declare type Props = {
    className?: string,
    min?: number,
    max?: number,
    marks?: Object,
    step?: number | null,
    vertical?: boolean,
    handle?: (props: Object) => React$Node,
    included?: boolean,
    disabled?: boolean,
    dots?: boolean,
    onBeforeChange?: Function,
    onChange?: Function,
    onAfterChange?: Function,
    minimumTrackStyle?: Object,
    maximumTrackStyle?: Object,
    handleStyle?: Object | Object[],
    trackStyle?: Object | Object[],
    railStyle?: Object,
    dotStyle?: Object,
    activeDotStyle?: Object
  };
  declare export default class CopyToClipboard extends React$Component<Props> {
  }
}
