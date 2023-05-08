import { LocalMap } from "./map";

export interface MapsIdsResponse {
   ids: string[];
   notFound: string[]
}

export interface PageRequest {
   offset?: number;
   limit?: number;
}

export interface MapsResponse {
   maps: LocalMap[];
   offset: number;
   hasMore: boolean;
   time?: number;
}
