declare type Alaska$SelectField$value = string | number | boolean | Array<string | number | boolean>;

declare type Alaska$SelectField$loadOptionsFn = (keyword: string, callback: (error: Error | void, res: { options: Alaska$SelectField$option[] }) => void) => void;

declare type Alaska$SelectField$Props = {
  allowCreate?: boolean,
  disabled?: boolean,
  multi?: boolean,
  onChange: (value: Alaska$SelectField$value) => void,
  loadOptions?: Alaska$SelectField$loadOptionsFn,
  value: Alaska$SelectField$value,
  options?: Alaska$SelectField$option[]
};

declare module 'alaska-field-select' {
  declare class SelectField extends Alaska$Field {
    number?: boolean;
    boolean: boolean;
    options: Alaska$SelectField$option[]
  }

  declare var exports: Class<SelectField>;
}

declare module 'alaska-field-select/views/Select' {
  declare export default class Select extends React$Component<Alaska$SelectField$Props> {
  }
}

declare module 'alaska-field-select/views/Switch' {
  declare export default class Switch extends React$Component<Alaska$SelectField$Props> {
  }
}

declare module 'alaska-field-select/views/SelectCheckbox' {
  declare export default class SelectCheckbox extends React$Component<Alaska$SelectField$Props> {
  }
}
