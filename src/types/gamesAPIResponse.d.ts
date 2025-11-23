import { Game } from "./gameType";
export interface GamesResponse {
  results: Game[];
  seo_title: string;
  seo_description: string;
  seo_keywords: string;
  seo_h1: string;
  noindex: boolean;
  nofollow: boolean;
  description: string;
  filters: any;
  nofollow_collections: string[];
}