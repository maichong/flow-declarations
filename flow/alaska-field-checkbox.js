declare module 'alaska-field-checkbox/views/Checkbox' {
  declare type Props = {
    className?: string,
    style?: Object,
    radio?: boolean,
    disabled?: boolean,
    label?: string,
    onChange?: Function,
    value: boolean
  };
  declare export default class Checkbox extends React$Component<Props> {
  }
}
