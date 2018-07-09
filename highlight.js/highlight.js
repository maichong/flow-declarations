declare module 'highlight.js' {

  declare interface IHighlightResultBase {
    relevance: number;
    language: string;
    value: string;
  }

  declare interface IAutoHighlightResult extends IHighlightResultBase {
    second_best?: IAutoHighlightResult;
  }

  declare interface IHighlightResult extends IHighlightResultBase {
    top: ICompiledMode;
  }

  declare interface HLJSStatic {
    inherit(parent: Object, obj: Object): Object;

    // Common regexps
    IDENT_RE: string;
    UNDERSCORE_IDENT_RE: string;
    NUMBER_RE: string;
    C_NUMBER_RE: string;
    BINARY_NUMBER_RE: string;
    RE_STARTERS_RE: string;

    // Common modes
    BACKSLASH_ESCAPE: IMode;
    APOS_STRING_MODE: IMode;
    QUOTE_STRING_MODE: IMode;
    PHRASAL_WORDS_MODE: IMode;
    C_LINE_COMMENT_MODE: IMode;
    C_BLOCK_COMMENT_MODE: IMode;
    HASH_COMMENT_MODE: IMode;
    NUMBER_MODE: IMode;
    C_NUMBER_MODE: IMode;
    BINARY_NUMBER_MODE: IMode;
    CSS_NUMBER_MODE: IMode;
    REGEX_MODE: IMode;
    TITLE_MODE: IMode;
    UNDERSCORE_TITLE_MODE: IMode;
  }

  // Reference:
  // https://github.com/isagalaev/highlight.js/blob/master/docs/reference.rst
  declare interface IModeBase {
    className?: string;
    aliases?: string[];
    begin?: (string | RegExp);
    end?: (string | RegExp);
    case_insensitive?: boolean;
    beginKeyword?: string;
    endsWithParent?: boolean;
    lexems?: string;
    illegal?: string;
    excludeBegin?: boolean;
    excludeEnd?: boolean;
    returnBegin?: boolean;
    returnEnd?: boolean;
    starts?: string;
    subLanguage?: string;
    subLanguageMode?: string;
    relevance?: number;
    variants?: IMode[];
  }

  declare interface IMode extends IModeBase {
    keywords?: any;
    contains?: IMode[];
  }

  declare interface ICompiledMode extends IModeBase {
    compiled: boolean;
    contains?: ICompiledMode[];
    keywords?: Object;
    terminators: RegExp;
    terminator_end?: string;
  }

  declare interface IOptions {
    classPrefix?: string;
    tabReplace?: string;
    useBR?: boolean;
    languages?: string[];
  }

  declare interface Node { }

  declare module.exports : {
    highlight(
      name: string,
      value: string,
      ignore_illegals ?: boolean,
      continuation ?: ICompiledMode): IHighlightResult;
    highlightAuto(
      value: string,
      languageSubset ?: string[]): IAutoHighlightResult;

    fixMarkup(value: string): string;

    highlightBlock(block: Node): void;

    configure(options: IOptions): void;

    initHighlighting(): void;
    initHighlightingOnLoad(): void;

    registerLanguage(
      name: string,
      language: (hljs?: HLJSStatic) => IModeBase): void;
    listLanguages(): string[];
    getLanguage(name: string): IMode;

    inherit(parent: Object, obj: Object): Object;

    COMMENT(
      begin: (string | RegExp),
      end: (string | RegExp),
      inherits: IModeBase): IMode;

    // Common regexps
    IDENT_RE: string;
    UNDERSCORE_IDENT_RE: string;
    NUMBER_RE: string;
    C_NUMBER_RE: string;
    BINARY_NUMBER_RE: string;
    RE_STARTERS_RE: string;

    // Common modes
    BACKSLASH_ESCAPE: IMode;
    APOS_STRING_MODE: IMode;
    QUOTE_STRING_MODE: IMode;
    PHRASAL_WORDS_MODE: IMode;
    C_LINE_COMMENT_MODE: IMode;
    C_BLOCK_COMMENT_MODE: IMode;
    HASH_COMMENT_MODE: IMode;
    NUMBER_MODE: IMode;
    C_NUMBER_MODE: IMode;
    BINARY_NUMBER_MODE: IMode;
    CSS_NUMBER_MODE: IMode;
    REGEX_MODE: IMode;
    TITLE_MODE: IMode;
    UNDERSCORE_TITLE_MODE: IMode;
  }


}
