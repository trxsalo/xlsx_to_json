export class CustomError extends Error {
    constructor(
        public readonly statusCode: number,
        public readonly message: string) {
        super(message);

    }

    static FileNotEncontrado(): CustomError {
        return new CustomError(401, 'Not file');
    }
}