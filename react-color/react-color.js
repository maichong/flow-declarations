// TODO

declare module 'react-color/lib/components/block/Block' {
  declare type Props = {
    color: string,
    onChange?: Function,
    onChangeComplete?: Function,
    width?: string,
    colors?: string[],
    triangle?: 'hide' | 'top',
    onSwatchHover?: Function
  };
  declare export default class Block extends React$Component<Props> {
  }
}
