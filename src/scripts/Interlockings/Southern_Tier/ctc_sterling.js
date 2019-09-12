const Empty = '#999999';
const Lined = '#75fa4c';
const Occupied = '#eb3323';

class CTC_Sterling {
    constructor() {
        this.sw_21 = false;

        this.sig_2w = false;
        this.sig_2ws = false;
        this.sig_1e = false;

        this.route_w_trk_1 = null;
        this.route_w_trk_2 = null;
        this.route_e_trk_1 = null;
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
            return this.route_e_trk_1;
            
        }
    }

    click_sig_2w(next_block_1) {
        if (this.sw_21) {
            return;
        }
        else {
            if (this.sig_2w) {
                this.route_w_trk_1 = null;
                this.sig_2w = false;
            }
            else {
                if (next_block_1 === Occupied || next_block_1 === Lined) {
                    alert("Cannot Line Route Because Conflict With Next Block");
                    return;
                }
                this.route_w_trk_2 = "W_1_1__|__1_harriman_sterling";
                this.sig_2w = true;
            }
        }
    }

    click_sig_2ws(next_block_1) {
        if (!this.sw_21) {
            return;
        }
        else {
            if (this.sig_2ws) {
                this.route_w_trk_1 = null;
                this.sig_2ws = false;
            }
            else {
                if (next_block_1 === Occupied || next_block_1 === Lined) {
                    alert("Cannot Line Route Because Conflict With Next Block");
                    return;
                }
                this.route_w_trk_1 = "W_2_1__|__1_harriman_sterling";
                this.sig_2ws = true;
            }
        }
    }

    click_sig_1e(next_block_1, next_block_2) {
        if (!this.sw_21) {
            if (this.sig_1e) {
                this.route_e_trk_1 = null;
                this.sig_1e = false;
            }
            else {
                if (next_block_2 === Occupied || next_block_2 === Lined) {
                    alert("Cannot Line Route Because Conflict With Next Block");
                    return;
                }
                this.route_e_trk_1 = "E_1_2__|__2_sterling_hilburn";
                this.sig_1e = true;
            }
        }
        else {
            if (this.sig_1e) {
                this.route_e_trk_1 = null;
                this.sig_1e = false;
            }
            else {
                if (next_block_1 === Occupied || next_block_1 === Lined) {
                    alert("Cannot Line Route Because Conflict With Next Block");
                    return;
                }
                this.route_e_trk_1 = "E_1_1__|__1_sterling_sf";
                this.sig_1e = true;
            }
        }
    }

    /**
     * @brief Funtion to throw switch #21 in the interlocking
     * 
     * The function sets the status of the switch, whether it is is the normal possition
     * of reversed, (True = Reversed / False = Normal)
     */
    throw_sw_21() {
        if (this.sw_21 === false) {
            this.sw_21 = true;
        }
        else {
            this.sw_21 = false;
        }
    }

    /**
     * 
     */
    get_routes() {
        let routes = [
            this.route_w_trk_1, this.route_w_trk_2,
            this.route_e_trk_1
        ];

        return routes;
    }

    /**
     * 
     */
    get_interlocking_status() {
        let status = {
            sw_21: this.sw_21
        }

        return status;
    }
}

export default CTC_Sterling;