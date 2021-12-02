import { Temp } from "./temp.model";


export interface Mode {
  dt: number;
  temp: Temp | number;
}
