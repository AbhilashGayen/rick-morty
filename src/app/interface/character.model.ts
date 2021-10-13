export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: OriginRef;
  location: LocationRef;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface LocationRef {
  name: string;
  url: string;
}

export interface OriginRef {
  name: string;
  url: string;
}

export interface CharacterResponse {
  info: PagingInfo;
  results: Character[];
}

export interface PagingInfo {
  count: number;
  pages: number;
  next: string;
  prev: string;
}
