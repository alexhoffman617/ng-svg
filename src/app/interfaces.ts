/*
interfaces.ts contains all interface declarations used in the app
*/

// dim interface for a dimension which is defined by a starting point, end point, and label
export interface Idim {
    p1: [number, number],
    p2: [number, number],
    label: string
}

// stat interface for a statistic
export interface Istat {
    label: string;
    value: number;
  }

// point interface for a data point defined by an x and y coordinate
export interface Ipoint {
    x: number;
    y: number;
}

// tile interface for the home component tiles
export interface Itile {
    id: string;
    title: string;
    desc: string;
    img: string;
    order: number;
    url: string;
}
