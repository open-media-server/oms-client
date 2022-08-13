export interface Config {
  base_url: string;
  media: Show[];
}

export interface Show {
  name: string;
  seasons: Season[];
  id: number;
  description?: string;
  original_name?: string;
  air_date?: string;
  rating?: number;
  credits?: any;
  thumbnail?: string;
}

export interface Season {
  name: string;
  number: number;
  id: number;
  episodes: Episode[];
  air_date?: string;
  thumbnail?: string;
}

export interface Episode {
  name: string;
  number: number;
  id: number;
  path: string;
  thumbnail?: string;
}
