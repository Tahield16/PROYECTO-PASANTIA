import { Genres } from "./genreType";
import { Tag } from "./tag";
import { Requirement } from "./requirements";
import { Platforms } from "./platform";
import type { Screenshots } from "./shortScreenshots";
import type { StoreList } from "./storesType";
import type { ratings } from "./note";
import type { Slug } from "./slugType";
import type { Platform } from "./platformType";
export interface Game {
  id: number; // id del juego
  name: string; // nombre
  tba: boolean; // to be announced
  description: string; // descripción larga (HTML a veces)
  description_raw: string;
  released: string; // released (fecha lanzamiento)
  rating: number; // promedio de rating
  background_image: string | undefined; // background_image
  background_image_additional:string | undefined;
  genres: Slug[]; // relación con Genre tipado abajo
  favorite: boolean; // flag manual
  source: "API" | "DATABASE"; // de dónde viene
  developers: Slug[]; // developers
  platforms: Platform[]; // plataformas disponibles
  requirements?: Requirement;
  stores?: StoreList;
  tags?: Slug[];
  publishers?: Slug[];
  shortScreenshots?: Screenshots;
  ratings?: ratings;
}

export type FilterGameList = {
  page: number;
  pageSize: number;
  genres?: number[] | string[]; // ids
  tags?: number[] | string[]; // ids
  developmentTeam?: number[] | string[];
  publishers?: number[] | string[]; // ids
  source?: "API" | "DATABASE" | "ALL";
  search?: string; // search text
  ordering?: string;
  dates?:{releaseFrom?:string,releaseTo?:string}
};