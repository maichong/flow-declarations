declare module 'react-autocomplete' {
  declare type Props = {
    items: any[],
    value?: any,
    onChange?: Function,
    onSelect?: Function,
    shouldItemRender?: Function,
    isItemSelectable?: Function,
    sortItems?: Function,
    getItemValue: Function,
    renderItem: Function,
    renderMenu?: Function,
    menuStyle?: Object,
    renderInput?: Function,
    inputProps?: Object,
    wrapperProps?: Object,
    wrapperStyle?: Object,
    autoHighlight?: boolean,
    selectOnBlur?: boolean,
    onMenuVisibilityChange?: Function,
    open?: boolean,
    debug?: boolean
  };
  declare export default class Autocomplete extends React$Component<Props> {
  }
}
