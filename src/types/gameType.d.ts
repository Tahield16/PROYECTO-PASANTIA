import { Genres } from "./genreType";
import { Tag } from "./tag";
import { Requirements } from "./requirements";
import { Platforms } from "./platform";
import type { Screenshots } from "./shortScreenshots";
import type { Stores } from "./storesType";
import type { ratings } from "./note";
export interface Game {
  id: number; // id del juego
  name: string; // nombre
  tba: boolean; // to be announced
  description: string; // descripción larga (HTML a veces)
  released: string; // released (fecha lanzamiento)
  rating: number; // promedio de rating
  background_image: string | undefined; // background_image
  genres: Slug[]; // relación con Genre tipado abajo
  favorite: boolean; // flag manual
  source: "API" | "DATABASE"; // de dónde viene
  developedBy: Slug[]; // developers
  platforms: Slug[]; // plataformas disponibles
  requirements?: Requirements;
  stores?: Slug[];
  tags?: Slug[];
  publishers?: Slug[];
  shortScreenshots?: Screenshots;
  ratings?: ratings;
}
export type GamesFilter = {
  page?: number;
  pageSize?: number;
  genres?: number[]; // ids
  tags?: number[]; // ids
  publishers?: number[]; // ids
  source?: "API" | "DATABASE";
  search?: string; // search text
  sort?: string;
};
