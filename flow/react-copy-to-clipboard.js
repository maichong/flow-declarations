declare module 'react-copy-to-clipboard' {
  declare type Props = {
    text: string,
    onCopy?: Function,
    options?: {
      debug?: boolean,
      message?: string
    },
    children: React$Node
  };
  declare export default class CopyToClipboard extends React$Component<Props> {
  }
}
