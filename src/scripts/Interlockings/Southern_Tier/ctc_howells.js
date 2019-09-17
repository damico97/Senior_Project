const Empty = '#999999';
const Lined = '#75fa4c';
const Occupied = '#eb3323';

class CTC_Howells {
    constructor() {
        this.sw_3 = false;

        this.sig_2w = false;
        this.sig_2e = false;
        this.sig_2es = false;

        this.route_w_trk_1 = null;
		this.route_e_trk_1 = null;
        this.route_e_trk_2 = null;
        
        this.int_occupied = false;
        this.time_occupied = null;
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
        if (this.sw_3) {
            if (this.sig_2w) {
                this.route_w_trk_1 = null;
                this.sig_2w = false;
            }
            else {
                if (next_block_2 === Occupied || next_block_2 === Lined) {
                    alert("Cannot Line Route Because Conflict With Next Block");
                    return;
                }
                this.route_w_trk_1 = "W_1_2__|__2_ov_howells";
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
                this.route_w_trk_1 = "W_1_1__|__1_ov_howells";
                this.sig_2w = true;
            }
        }
    }

    click_sig_2e(next_block_1) {
        if (this.sw_3) {
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
                this.route_e_trk_1 = "E_1_1__|__1_howells_hall";
                this.sig_2e = true;
            }
        }
    }

    click_sig_2es(next_block_1) {
        if (!this.sw_3) {
            return;
        }
        else {
            if (this.sig_2es) {
                this.route_e_trk_2 = null;
                this.sig_2es = false;
            }
            else {
                if (next_block_1 === Occupied || next_block_1 === Lined) {
                    alert("Cannot Line Route Because Conflict With Next Block");
                    return;
                }
                this.route_e_trk_2 = "E_2_1__|__1_howells_hall";
                this.sig_2es = true;
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
            this.sig_2es = false;

            this.route_w_trk_1 = null;
	    	this.route_e_trk_1 = null;
            this.route_e_trk_2 = null;
        
            this.int_occupied = false;
            this.time_occupied = null;
        }
    }

    /**
     * @brief Funtion to throw switch #3 in the interlocking
     * 
     * The function sets the status of the switch, whether it is is the normal possition
     * of reversed, (True = Reversed / False = Normal)
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
            sw_3: this.sw_3,
            routes: this.get_routes(),
            occupied: this.int_occupied
        }

        return status;
    }
}

export default CTC_Howells;