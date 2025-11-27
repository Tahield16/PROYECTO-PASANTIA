import type { Game } from "./gameType";
import { Slug } from "./slugType";
export interface Store extends Slug{
  games:Game[];
  domain:string
}
export interface StoreGameDetail {
  id: number;
  url: string;
  store: Store;
}
export interface StoreApiResponse{
  count:number,
  next:null | string,
  prev: null | string,
  results: Store[]
}