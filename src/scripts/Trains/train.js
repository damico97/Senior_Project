import Clock from '../Trains/clock.js';

class Train {
    constructor(p_symbol, p_location, p_next_interlocking, p_direction, p_block_size) {
        this.clock = new Clock();
        this.clock.startClock();

        this.symbol = p_symbol;
        this.current_location = p_location;
        this.next_interlocking = p_next_interlocking;
        this.direction = p_direction;
        this.block_size = p_block_size;
        this.block_start = this.clock.getTimeFromStart();

        this.route = true;
    }
 
    get_symbol() {
        return this.symbol;
    }

    update_location(new_next_location) {
        this.current_location = new_next_location;
        this.block_start = this.clock.getTimeFromStart();
    }

    can_update_location() {
        if (this.route) {
            if (this.clock.getTimeFromStart() - this.block_start > this.block_size) {
                return true;
            }
            else {
                return false;
            }
        }
    }

    get_location() {
        return this.current_location;
    }

    can_occupy_interlocking() {
        if (this.route) {
            if (this.clock.getTimeFromStart - this.block_start > this.block_size) {
                return true;
            }
            else {
                return false
            }
        }
    }

    get_block_size() {
        return this.block_size;
    }

    set_block_size(n_size) {
        this.block_size = n_size;
    }

    get_next_interlocking() {
        return this.next_interlocking;
    }

    set_next_interlocking(n_interlocking) {
        this.next_interlocking = n_interlocking;
    }

    get_direction() {
        return this.direction;
    }

    get_route() {
        return this.route;
    }

    set_route(n_route) {
        this.route = n_route;
    }
}

export default Train;