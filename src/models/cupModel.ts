import { Race } from "./raceModel"

export type Cup = {
    img:string;
    title:string;
    dlc:boolean;
    order:number;
    races:Race[];
}