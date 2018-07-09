
declare module 'marked' {
  declare interface MarkedOptions {
    /**
     * Type: object Default: new Renderer()
     *
     * An object containing functions to render tokens to HTML.
     */
    renderer?: Renderer;

    /**
     * Enable GitHub flavored markdown.
     */
    gfm?: boolean;

    /**
     * Enable GFM tables. This option requires the gfm option to be true.
     */
    tables?: boolean;

    /**
     * Enable GFM line breaks. This option requires the gfm option to be true.
     */
    breaks?: boolean;

    /**
     * Conform to obscure parts of markdown.pl as much as possible. Don't fix any of the original markdown bugs or poor behavior.
     */
    pedantic?: boolean;

    /**
     * Sanitize the output. Ignore any HTML that has been input.
     */
    sanitize?: boolean;

    /**
     * Optionally sanitize found HTML with a sanitizer function.
     */
    sanitizer?: (html: string) => string;

    /**
     * Mangle autolinks (<email@domain.com>).
     */
    mangle?: boolean;

    /**
     * Use smarter list behavior than the original markdown. May eventually be default with the old behavior moved into pedantic.
     */
    smartLists?: boolean;

    /**
     * Shows an HTML error message when rendering fails.
     */
    silent?: boolean;

    /**
     * A function to highlight code blocks. The function takes three arguments: code, lang, and callback.
     */
    highlight?: (code: string, lang?: string, callback?: (error: any | void, code: string) => void) => string;

    /**
     * Set the prefix for code block classes.
     */
    langPrefix?: string;

    /**
     * Use "smart" typograhic punctuation for things like quotes and dashes.
     */
    smartypants?: boolean;

    /**
     * Set the prefix for header tag ids.
     */
    headerPrefix?: string;

    /**
     * Generate closing slash for self-closing tags (<br/> instead of <br>)
     */
    xhtml?: boolean;
  }

  declare class Lexer {
    rules: Rules;
    tokens: TokensList;
    constructor(options?: MarkedOptions): void;
    lex(src: string): TokensList;
  }

  declare interface Rules {
    [ruleName: string]: RegExp | Rules;
  }

  declare type TokensList = Object[] & {
    links: {
      [key: string]: { href: string; title: string; }
    }
  };

  declare class Renderer {
    constructor(options?: MarkedOptions): void;
    code(code: string, language: string, isEscaped: boolean): string;
    blockquote(quote: string): string;
    html(html: string): string;
    heading(text: string, level: number, raw: string): string;
    hr(): string;
    list(body: string, ordered: boolean): string;
    listitem(text: string): string;
    paragraph(text: string): string;
    table(header: string, body: string): string;
    tablerow(content: string): string;
    tablecell(content: string, flags: {
      header: boolean;
      align: 'center' | 'left' | 'right' | null;
    }): string;
    strong(text: string): string;
    em(text: string): string;
    codespan(code: string): string;
    br(): string;
    del(text: string): string;
    link(href: string, title: string, text: string): string;
    image(href: string, title: string, text: string): string;
    text(text: string): string;
  }

  declare type marked = {
    (src: string, options?: MarkedOptions, callback?: Function): string;
    Lexer: Class<Lexer>;
    Renderer: Class<Renderer>;
    defaults: MarkedOptions;
    getDefaults: () => MarkedOptions;
    lexer(src: string, options?: MarkedOptions): TokensList;
    parse(src: string, callback: (error: any | void, parseResult: string) => void): string;
    parse(src: string, options?: MarkedOptions, callback?: (error: any | void, parseResult: string) => void): string;
    parser(src: TokensList, options?: MarkedOptions): string;
    setOptions(options: MarkedOptions): marked;
  };

  declare module.exports: marked;
}
