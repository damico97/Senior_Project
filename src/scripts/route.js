
class Route {

    constructor(p_start, p_end, p_next) {
        this.start_location = p_start;
        this.end_location = p_end;
        this.next_blocks = [p_next];
    }

    get_start_location() {
        return this.start_location;
    }

    get_end_location() {
        return this.end_location;
    }

    get_next_blocks() {
        return this.next_blocks;
    }

    change_end_loaction(new_location) {
        this.end_location = new_location;
    }
}

export default Route;