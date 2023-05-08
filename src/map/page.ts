export interface PageResponse<T> {
   list: T[];
   offset: number;
   limit: number;
   total: number;
}
