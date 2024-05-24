
export function f_coalesce<T>(...values: (T | null | undefined)[]): T | string {
    for (const value of values) {
        if (value !== null && value !== undefined) {
            return value;
        }
    }
    return '';
}

export function f_vl<T>(data: T | null | undefined, retun: T): T {
    return (data !== null && data !== undefined) ? data : retun;
}

export function f_exite (data1:object, data2:object): any {

}