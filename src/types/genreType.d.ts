import type { Slug } from "./slugType";
import type { Game } from "./gameType";
export interface Genre extends Slug{
    games:Game[]
}
export interface GenreApiResponse{
    count:number,
    next: string | null,
    previous:string | null,
    results:Genre[],
}