export class Result<T> {
    public isSuccess: boolean;
    public error: Error | null;
    private value: T;

    private constructor(isSuccess: boolean, error: Error | null, value?: T){
        if((isSuccess === true && error !== undefined) ||
            isSuccess === false && error === undefined) {

            throw new Error("Cannot succeed and fail at the same time");
        }

        this.isSuccess = isSuccess;
        this.error = !!error === false ? null : error;
        this.value = value;

        Object.freeze(this);
    }

    public getValue(): T {
        if(this.isSuccess === false){
            throw new Error("No value to retrieve if failed");
        }
        return this.value;
    }

    public static ok<V>(value: V): Result<V> {
        return new Result<V>(true, null, value);
    }

    public static ko<V>(error: Error): Result<V> {
        return new Result<V>(false, error);
    }
}