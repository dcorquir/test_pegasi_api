export interface APIBaseResponse<T = any> {
    data: T;
    status: number;
}
