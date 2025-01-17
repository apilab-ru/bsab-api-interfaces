export enum FilterKey {
   bpmFrom = 'bpmFrom',
   bpmTo = 'bpmTo',
   blRanked = 'blRanked',
   dateFrom = 'dateFrom',
   durationFrom = 'durationFrom',
   durationTo = 'durationTo',
   npsFrom = 'npsFrom',
   npsTo = 'npsTo',
   recommended = 'recommended',
   ranked = 'ranked',
   scoreFrom = 'scoreFrom',
   search = 'search',
   showed = 'showed',
   tags = 'tags',
}

export interface FilterRequest {
  tagsPositive?: number[];
  tagsNegative?: number[];
  search?: string;
  npsFrom?: string;
  npsTo?: string;
  dateFrom?: string;
  showed?: string;
}

export interface Tag {
  id: number;
  name: string;
}

export enum OrderField {
  createdAt = 'createdAt',
  minNps = 'minNps',
  maxNps = 'maxNps',
  bpm = 'bpm',
  score = 'score',
}

export enum OrderDirection {
  asc = 'asc',
  desc = 'desc',
}

export enum OrderDirectionDTO {
  asc = 'ASC',
  desc = 'DESC',
}
