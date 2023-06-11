type params = {
    [key: string]: string | number | Function
}
export type NotifyFn = ((options?: params) => any) & Function
export type NotifyTypedFn = (options?: params) => any

export interface Notify extends NotifyFn {
    success: NotifyTypedFn;
    warning: NotifyTypedFn;
    error: NotifyTypedFn;
    info: NotifyTypedFn;
}