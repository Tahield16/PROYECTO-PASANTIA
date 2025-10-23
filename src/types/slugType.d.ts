import type { Game } from "./gameType";
export interface Slug {
  id: number;
  name: string;
  slug: string;
  game_count: number;
  image_background: string;
  //games: game[]
}
