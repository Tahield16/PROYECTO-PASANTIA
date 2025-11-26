import type { Game } from "./gameType";
import { Slug } from "./slugType";
export interface Store extends Slug{
  games:Game[];
  domain:string
}
export interface StoreGameDetail {
  id: number;
  url: string;
  store: {
    id: number;
    name: string;
    slug: string;
    domain: string;
    games_count: number;
    image_background: string;
  };
}
