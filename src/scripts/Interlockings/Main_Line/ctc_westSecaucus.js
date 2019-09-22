const Empty = '#999999';
const Lined = '#75fa4c';
const Occupied = '#eb3323';

class CTC_WestSecaucus {
    constructor() {
        this.sw_1 = false;
        this.sw_3 = false;

        this.sig_2w = false;
        this.sig_2e = false;
        this.sig_4w = false;
        this.sig_4e = false;

        this.route_w_trk_1 = null;
        this.route_w_trk_2 = null;
        this.route_e_trk_1 = null;
        this.route_e_trk_2 = null;

        this.int_occupied = false;
        this.time_occupied = null;
    }

    click_sig(sigNum, next_block_1, next_block_2) {
        if (sigNum === "2W") {
            if (this.sw_3) {
                return
            }
            // Route W_1_1
            else if (!this.sw_1 && !this.sw_3) {
                if (this.sig_2w) {
                    this.route_w_trk_1 = null;
                    this.sig_2w = false;
                }
                else {
                    if (next_block_1 === Occupied || next_block_1 === Lined) {
                        alert("Cannot Line Route Because Conflict With Next Block");
                        return;
                    }
                    this.route_w_trk_1 = "W_1_1__|__1_mill_westSecaucus"
                    this.sig_2w = true;
                }
            }
            // Route W_1_2
            else if (this.sw_1 && !this.sw_3) {
                if (this.sig_2w) {
                    this.route_w_trk_1 = null;
                    this.sig_2w = false;
                }
                else {
                    if (next_block_2 === Occupied || next_block_2 === Lined) {
                        return;
                    }
                    this.route_w_trk_1 = "W_1_2__|__2_mill_westSecaucus"
                    this.sig_2w = true;
                }
            }
        }
        else if (sigNum === "4W") {
            if (!this.sw_3) {
                return;
            }
            // Route W_2_1
            if (!this.sw_1 && this.sw_3) {
                if (this.sig_4w) {
                    this.route_w_trk_2 = null;
                    this.sig_4w = false;
                }
                else {
                    if (next_block_1 === Occupied || next_block_1 === Lined) {
                        alert("Cannot Line Route Because Conflict With Next Block");
                        return;
                    }
                    this.route_w_trk_2 = "W_2_1__|__1_mill_westSecaucus"
                    this.sig_4w = true;
                }
            }
            // Route W_2_2
            else if (this.sw_1 && this.sw_3) {
                if (this.sig_4w) {
                    this.route_w_trk_2 = null;
                    this.sig_4w = false;
                }
                else {
                    if (next_block_2 === Occupied || next_block_2 === Lined) {
                        alert("Cannot Line Route Because Conflict With Next Block");
                        return;
                    }
                    this.route_w_trk_2 = "W_2_2__|__2_mill_westSecaucus"
                    this.sig_4w = true;
                }
            }
        }
        else if (sigNum === "2E") {
            if (this.sw_1) {
                return;
            }
            // Route E_1_1
            else if (!this.sw_1 && !this.sw_3) {
                if (this.sig_2e) {
                    this.route_e_trk_1 = null;
                    this.sig_2e = false;
                }
                else {
                    if (next_block_1 === Occupied || next_block_1 === Lined) {
                        alert("Cannot Line Route Because Conflict With Next Block");
                        return;
                    }
                    this.route_e_trk_1 = "E_1_1__|__2_westSecaucus_laurel"
                    this.sig_2e = true;
                }
            }
            // Route E_1_2
            else if (!this.sw_1 && this.sw_3) {
                if (this.sig_2e) {
                    this.route_e_trk_1 = null;
                    this.sig_2e = false;
                }
                else {
                    if (next_block_2 === Occupied || next_block_2 === Lined) {
                        alert("Cannot Line Route Because Conflict With Next Block");
                        return;
                    }
                    this.route_e_trk_1 = "E_1_2__|__4_westSecaucus_laurel"
                    this.sig_2e = true;
                }
            }
        }
        else if (sigNum === "4E") {
            if (!this.sw_1) {
                return;
            }
            // Route E_2_1
            else if (this.sw_1 && !this.sw_3) {
                if (this.sig_4e) {
                    this.route_e_trk_2 = null;
                    this.sig_4e = false;
                }
                else {
                    if (next_block_1 === Occupied || next_block_1 === Lined) {
                        alert("Cannot Line Route Because Conflict With Next Block");
                        return;
                    }
                    this.route_e_trk_2 = "E_2_1__|__2_westSecaucus_laurel";
                    this.sig_4e = true;
                }
            }
            // Route E_2_2
            else if (this.sw_1 && this.sw_3) {
                if (this.sig_4e) {
                    this.route_e_trk_2 = null;
                    this.sig_4e = false;
                }
                else {
                    if (next_block_2 === Occupied || next_block_2 === Lined) {
                        alert("Cannot Line Route Because Conflict With Next Block");
                        return;
                    }
                    this.route_e_trk_2 = "E_2_2__|__4_westSecaucus_laurel"
                    this.sig_4e = true;
                }
            }
        }
    }

    /**
     * 
     * @param {*} n_state 
     */
    set_occupied(n_state) {
        if (n_state === true) {
            this.int_occupied = n_state;
            this.time_occupied = new Date().getTime() / 1000;
        }
        else {
            console.log("ERROR");
        }
    }

    /**
     * 
     */
    can_clear() {
        //console.log(new Date().getTime() / 1000 - this.time_occupied)
        let current_time = new Date().getTime() / 1000;
        if (current_time - this.time_occupied > 4 && current_time - this.time_occupied < 100000) {
            this.sig_2w = false;
            this.sig_2e = false;
            this.sig_4e = false;

            this.route_w_trk_1 = null;
            this.route_e_trk_1 = null;
            this.route_e_trk_2 = null;

            this.int_occupied = false;
            this.time_occupied = null;
        }
    }
    
    /**
     * 
     */
    get_routes() {
        let routes = [this.route_w_trk_1, this.route_w_trk_2, this.route_e_trk_1, this.route_e_trk_2];
        return routes;
    }

    /**
     * 
     */
    get_train_route(direction, track) {
        if (direction === "WEST") {
            if (track === "1") {
                return this.route_w_trk_2;
            }
            else {
                return this.route_w_trk_1;
            }
        }
        else {
            if (track === "1") {
                return this.route_e_trk_1;
            }
            else {
                return this.route_e_trk_2;
            }
        }
    }

    /**
     * 
     */
    throw_sw_1() {
        if (this.sw_1 === false) {
            this.sw_1 = true;
        }
        else {
            this.sw_1 = false;
        }
    }

    /**
     * 
     */
    throw_sw_3() {
        if (this.sw_3 === false) {
            this.sw_3 = true;
        }
        else {
            this.sw_3 = false;
        }
    }

    get_interlocking_status() {
        let status = {
            sw_1: this.sw_1,
            sw_3: this.sw_3,
            routes: this.get_routes(),
            occupied: this.int_occupied
        }

        return status;
    }
}

export default CTC_WestSecaucus;