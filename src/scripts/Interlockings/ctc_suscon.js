

const Empty = '#999999';
const Lined = '#75fa4c';
const Occupied = '#eb3323';

class CTC_Suscon {
    /**
     * 
     */
    constructor() {
        this.route_w_trk_1 = null;
        this.route_w_trk_2 = null;
        this.route_e_trk_1 = null;
        this.route_e_trk_2 = null;
        this.occupied_trk_1 = false;
        this.occupied_trk_2 = false;

        this.sw_1 = false;
        this.sw_3 = false;
        this.cross_over = false;

        this.sig_2w = false;
        this.sig_2e = false;
        this.sig_4w = false;
        this.sig_4e = false;
    }

    /**
     * 
     * @param {*} sigNum 
     */
    click_sig(sigNum, next_block_1, next_block_2) {
        if (sigNum === "2W") {
            if (this.sw_3) {
                return;
            }
            else if (!this.sw_1 && !this.sw_3) {
                if (this.sig_2w) {
                    this.route_w_trk_1 = null;
                    this.sig_2w = false;
                    return;
                }
                else {
                    if (next_block_1 === Occupied || next_block_1 === Lined) {
                        alert("Cannot Line Route Because Conflict With Next Block");
                        return;
                    }
                    this.route_w_trk_1 = "W_1_1__|__1_ridgewood_suscon";
                    this.sig_2w = true;
                }
            }
            else if (this.sw_1 && !this.sw_3){
                if (this.sig_2w) {
                    this.route_w_trk_1 = null;
                    this.sig_2w = false;
                    this.cross_over = false;
                    return;
                }
                else {
                    if (next_block_2 === Occupied || next_block_2 === Route) {
                        alert("Cannot Line Route Because Conflict With Next Block");
                        return;
                    }
                    this.route_w_trk_1 = "W_1_2__|__2_ridgewood_suscon";
                    this.sig_2w = true;
                    this.cross_over = true;
                }
            }
        }
        else if (sigNum === "4W") {
            if (this.sw_1) {
                return;
            }
            else if (!this.sw_1 && !this.sw_3) {
                if (this.sig_4w) {
                    this.route_w_trk_2 = null;
                    this.sig_4w = false;
                    this.routes = [];
                }
                else {
                    if (next_block_2 === Occupied || next_block_2 === Route) {
                        alert("Cannot Line Route Because Conflict With Next Block");
                        return;
                    }
                    this.route_w_trk_2 = "W_2_2__|__2_ridgewood_suscon";
                    this.sig_4w = true;
                }
            }
            else if (!this.sw_1 && this.sw_3) {
                if (this.sig_4w) {
                    this.route_w_trk_2 = null;
                    this.sig_4w = false;
                    this.cross_over = false;
                }
                else {
                    if (next_block_1 === Occupied || next_block_1 === Lined) {
                        alert("Cannot Line Route Because Conflict With Next Block");
                        return;
                    }
                    this.route_w_trk_2 = "W_2_1__|__1_ridgewood_suscon";
                    this.sig_4w = true;
                    this.cross_over = true;
                }
            }
        }
        else if (sigNum === "2E") {
            if (this.sw_1) {
                return;
            }
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
                    this.route_e_trk_1 = "E_1_1__|__1_suscon_mill";
                    this.sig_2e = true;
                }
            }
            else if (!this.sw_1 && this.sw_3) {
                if (this.sig_2e) {
                    this.route_e_trk_1 = null;
                    this.sig_2e = false;
                    this.cross_over = false;
                }
                else {
                    if (next_block_2 === Occupied || next_block_2 === Lined) {
                        alert("Cannot Line Route Because Conflict With Next Block");
                        return;
                    }
                    this.route_e_trk_1 = "E_1_2__|__2_suscon_mill";
                    this.sig_2e = true;
                    this.cross_over = true;
                }
            }
        }
        else if (sigNum === "4E") {
            if (this.sw_3) {
                return;
            }
            else if (!this.sw_1 && !this.sw_3) {
                if (this.sig_4e) {
                    this.route_e_trk_2 = null;
                    this.sig_4e = false;
                }
                else {
                    if (next_block_2 === Occupied || next_block_2 === Lined) {
                        alert("Cannot Line Route Because Conflict With Next Block");
                        return;
                    }
                    this.route_e_trk_2 = "E_2_2__|__2_suscon_mill";
                    this.sig_4e = true;
                }
            }
            else if (this.sw_1 && !this.sw_3) {
                if (this.sig_4e) {
                    this.route_e_trk_2 = null;
                    this.sig_4e = false;
                    this.cross_over = false;
                }
                else {
                    if (next_block_1 === Occupied || next_block_1 === Lined) {
                        alert("Cannot Line Route Because Conflict With Next Block");
                        return;
                    }
                    this.route_e_trk_2 = "E_2_1__|__1_suscon_mill";
                    this.sig_4e = true;
                    this.cross_over = true;
                }
            }
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
                return this.route_w_trk_1;
            }
            else {
                return this.route_w_trk_2;
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

    /**
     * 
     */
    get_interlocking_status() {
        var status = {
            sw_1: this.sw_1,
            sw_3: this.sw_3,
            occupied_trk_1: this.occupied_trk_1,
            occupied_trk_2: this.occupied_trk_2,
            routes: this.get_routes()
        };

        return status;
    }

    set_trk_1_occupied() {
        this.occupied_trk_1 = true;
    }

    set_trk_1_clear() {
        this.occupied_trk_1 = false;
        this.route_trk_1 = null;
    }
}

export default CTC_Suscon;