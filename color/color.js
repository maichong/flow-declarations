// Converted from https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/color
// for color 2.0

declare module 'color' {

  declare type ColorParam = Color | string | Array<number> | number | { [key: string]: any };

  declare class Color {
    (obj?: ColorParam): Color;

    constructor(obj?: ColorParam): Color;

    static rgb(...val: number[]): Color;

    static rgb(color: ColorParam): Color;

    static hsl(...val: number[]): Color;

    static hsl(color: ColorParam): Color;

    static hsv(...val: number[]): Color;

    static hsv(color: ColorParam): Color;

    static hwb(...val: number[]): Color;

    static hwb(color: ColorParam): Color;

    static cmyk(...val: number[]): Color;

    static cmyk(color: ColorParam): Color;

    static xyz(...val: number[]): Color;

    static xyz(color: ColorParam): Color;

    static lab(...val: number[]): Color;

    static lab(color: ColorParam): Color;

    static lch(...val: number[]): Color;

    static lch(color: ColorParam): Color;

    static ansi16(...val: number[]): Color;

    static ansi16(color: ColorParam): Color;

    static ansi256(...val: number[]): Color;

    static ansi256(color: ColorParam): Color;

    static hcg(...val: number[]): Color;

    static hcg(color: ColorParam): Color;

    static apple(...val: number[]): Color;

    static apple(color: ColorParam): Color;

    // 
    toString(): string;

    toJSON(): Color;

    string(places?: number): string;

    percentString(places?: number): string;

    array(): number[];

    object(): { alpha?: number } & { [key: string]: number };

    unitArray(): number[];

    unitObject(): { r: number, g: number, b: number, alpha?: number };

    round(places?: number): Color;

    alpha(): number;

    alpha(val: number): Color;

    red(): number;

    red(val: number): Color;

    green(): number;

    green(val: number): Color;

    blue(): number;

    blue(val: number): Color;

    hue(): number;

    hue(val: number): Color;

    saturationl(): number;

    saturationl(val: number): Color;

    lightness(): number;

    lightness(val: number): Color;

    saturationv(): number;

    saturationv(val: number): Color;

    value(): number;

    value(val: number): Color;

    chroma(): number;

    chroma(val: number): Color;

    gray(): number;

    gray(val: number): Color;

    white(): number;

    white(val: number): Color;

    wblack(): number;

    wblack(val: number): Color;

    cyan(): number;

    cyan(val: number): Color;

    magenta(): number;

    magenta(val: number): Color;

    yellow(): number;

    yellow(val: number): Color;

    black(): number;

    black(val: number): Color;

    x(): number;

    x(val: number): Color;

    y(): number;

    y(val: number): Color;

    z(): number;

    z(val: number): Color;

    l(): number;

    l(val: number): Color;

    a(): number;

    a(val: number): Color;

    b(): number;

    b(val: number): Color;

    keyword(): string;

    keyword(val: string): Color;

    hex(): string;

    hex(val: string): Color;

    rgbNumber(): number;

    luminosity(): number;

    contrast(color2: Color): number;

    level(color2: Color): 'AAA' | 'AA' | '';

    dark(): boolean;

    light(): boolean;

    negate(): Color;

    lighten(ratio: number): Color;

    darken(ratio: number): Color;

    saturate(ratio: number): Color;

    desaturate(ratio: number): Color;

    whiten(ratio: number): Color;

    blacken(ratio: number): Color;

    grayscale(): Color;

    fade(ratio: number): Color;

    opaquer(ratio: number): Color;

    rotate(degrees: number): Color;

    mix(mixinColor: Color, weight?: number): Color;

    rgb(...args: number[]): Color;

    hsl(...args: number[]): Color;

    hsv(...args: number[]): Color;

    hwb(...args: number[]): Color;

    cmyk(...args: number[]): Color;

    xyz(...args: number[]): Color;

    lab(...args: number[]): Color;

    lch(...args: number[]): Color;

    ansi16(...args: number[]): Color;

    ansi256(...args: number[]): Color;

    hcg(...args: number[]): Color;

    apple(...args: number[]): Color;
  }

  declare module .exports: Class<Color>
;
}
