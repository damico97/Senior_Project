const Empty = '#999999';
const Lined = '#75fa4c';
const Occupied = '#eb3323';

class CTC_BC {
    constructor() {
        this.sw_1 = false;

        this.sig_2w = false;
        this.sig_2e = false;
        this.sig_4e = false;

        this.route_w_trk_1 = null;
        this.route_e_trk_1 = null;
        this.route_e_trk_2 = null;
    }

    /**
     * 
     */
    get_train_route(direction, track) {
        if (direction === "WEST") {
            return this.route_w_trk_1;
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

    click_sig_2w(next_block_1, next_block_2) {
        if (this.sw_1) {
            if (this.sig_2w) {
                this.route_w_trk_1 = null;
                this.sig_2w = false;
            }
            else {
                if (next_block_2 === Occupied || next_block_2 === Lined) {
                    alert("Cannot Line Route Because Conflict With Next Block");
                    return;
                }
                this.route_w_trk_1 = "W_1_2__|__2_pa_bc";
                this.sig_2w = true;
            }
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
                this.route_w_trk_1 = "W_1_1__|__1_port_bc";
                this.sig_2w = true;
            }
        }
    }

    click_sig_2e(next_block_1) {
        if (this.sw_1) {
            return;
        }
        else {
            if (this.sig_2e) {
                this.route_e_trk_1 = null;
                this.sig_2e = false;
            }
            else {
                if (next_block_1 === Occupied || next_block_1 === Lined) {
                    alert("Cannot Line Route Because Conflict With Next Block");
                    return;
                }
                this.route_e_trk_1 = "E_1_1__|__1_bc_ov";
                this.sig_2e = true;
            }
        }
    }

    click_sig_4e(next_block_1) {
        if (!this.sw_1) {
            return;
        }
        else {
            if (this.sig_4e) {
                this.route_e_trk_2 = null;
                this.sig_4e = false;
            }
            else {
                if (next_block_1 === Occupied || next_block_1 === Lined) {
                    alert("Cannot Line Route Because Conflict With Next Block");
                    return;
                }
                this.route_e_trk_2 = "E_2_1__|__1_bc_ov";
                this.sig_4e = true;
            }
        }
    }

    /**
     * @brief Funtion to throw switch #1 in the interlocking
     * 
     * The function sets the status of the switch, whether it is is the normal possition
     * of reversed, (True = Reversed / False = Normal)
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
    get_routes() {
        let routes = [
            this.route_w_trk_1,
            this.route_e_trk_1, this.route_e_trk_2
        ];

        return routes;
    }

    /**
     * 
     */
    get_interlocking_status() {
        let status = {
            sw_1: this.sw_1,
            routes: this.get_routes()
        }

        return status;
    }
}

export default CTC_BC;