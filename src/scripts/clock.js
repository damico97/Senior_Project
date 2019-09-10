
class Clock {
    constructor() {
        this.start_time;
    }

    startClock() {
        this.start_time = new Date().getTime() / 1000;
    }

    getTimeFromStart = () => {
        var current_time = new Date().getTime() / 1000;
        var diff = current_time - this.start_time;

        return diff;
    }
}

export default Clock;