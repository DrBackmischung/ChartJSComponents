export interface ChartNgData {
    data: any;
    measure: string;
    color: ChartNgColor;
}

export declare type ChartNgColor = string | CanvasGradient | CanvasPattern | string[];

export declare type ChartNgLabel = string;

export interface ChartNgOptions {
    responsive: boolean;
}