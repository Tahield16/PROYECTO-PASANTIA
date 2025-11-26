import type { Requirement } from "./requirements";
export interface platform {
  id: number;
  name: string;
  slug: string;
  image: string;
  year_end: string;
  year_start: string;
  games_count: number;
  image_background: string;
}
export interface platformsGameDetail {
  platform: platform;
  released_at: string;
  requirements: Requirement;
}

export interface PlatformResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Platform[];
}
