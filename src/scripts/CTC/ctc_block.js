

const Empty = '#999999';
const Route = '#75fa4c';
const Occupied = '#eb3323';

class CTC_Block {
    constructor(p_name, p_size, p_status) {
        this.block_name = p_name;
        this.block_size = p_size;
        this.block_status = p_status;
        this.train_symbol = null;
    }

    get_block_status() {
        return this.block_status;
    }
 
    get_size() {
        return this.block_size;
    }

    set_symbol(n_symbol) {
        this.train_symbol = n_symbol;
    }

    get_symbol() {
        return this.train_symbol;
    }

    reset_block() {
        if (this.block_status === Route) {
            this.block_status = Empty;
        }
    }

    set_block_status(p_status) {
        if (p_status === 'Empty') {
            this.block_status = Empty;
        }
        else if (p_status === 'Route') {
            this.block_status = Route;
        }
        else if (p_status === 'Occupied') {
            this.block_status = Occupied;
        }
        else {
            console.log("ERROR!! - CTC_Block " + this.block_name + " [set_block_status()]");
        }
    }
}

export default CTC_Block;