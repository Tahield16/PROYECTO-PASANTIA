import type { Game } from "./gameType";
import type { Slug } from "./slugType";

export interface publishersType extends Slug{
 games:Game[]
}
export interface publishersApiResponse{
    results:publishersType[]
    next:string | null,
    prev:string | null,
    count:number
}