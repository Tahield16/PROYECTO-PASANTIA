import { Genres } from "./genreType";
import { Tag } from "./tag";
import { Requirements } from "./requirements";
import { Platforms } from "./platform";
import type { Screenshots } from "./shortScreenshots";
import type { Stores } from "./storesType";
import type { ratings } from "./note";
export interface Game {
  _id: number; // id del juego
  name: string; // nombre
  tba: boolean; // to be announced
  description: string; // descripción larga (HTML a veces)
  release: string; // released (fecha lanzamiento)
  rating: number; // promedio de rating
  backgroundImage: string | undefined; // background_image
  genres: Genres; // relación con Genre tipado abajo
  favorite: boolean; // flag manual
  source: "API" | "DATABASE"; // de dónde viene
  developedBy: string[]; // developers
  platforms: Platform[]; // plataformas disponibles
  requirements?: Requirements;
  stores?: Stores;
  tags?: Tag[];
  publishers?:string[];
  shortScreenshots?: Screenshots;
  ratings?: ratings;
}
type Games = Game[];
