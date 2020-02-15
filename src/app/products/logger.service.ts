
export class Logger {
    log(message: string) {
        console.log(new Date() + " : " + message);
    }

    error(message: string) {
        console.warn(new Date() + " : " + message);
    }
}