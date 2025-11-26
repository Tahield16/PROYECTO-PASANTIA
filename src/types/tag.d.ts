import type { Slug } from "./slugType";
import type { Game } from "./gameType";
export interface Tag extends Slug {
  games:Game[];
  language:string;
}
interface TagResponse{
    next:string;
    prev:string;
    count:number;
    results:Tag[];
}