import { Temp } from "./temp.model";


export interface Period {
  dt: number;
  temp: Temp | number;
}
