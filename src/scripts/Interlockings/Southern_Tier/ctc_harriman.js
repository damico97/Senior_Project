const Empty = '#999999';
const Lined = '#75fa4c';
const Occupied = '#eb3323';

class CTC_Harriman {
	constructor() {
		this.sw_21 = false;
		this.sw_32 = false;

		this.sig_1w = false;
		this.sig_1e = false;
		this.sig_2e = false;
		this.sig_3e = false;

		this.route_w_trk_1 = null;
		this.route_e_trk_1 = null;
		this.route_e_trk_2 = null;
		this.route_e_trk_3 = null;
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
        	else if (track === "2") {
        		return this.route_e_trk_2;
        	}
        	else {
        		return this.route_e_trk_3;
        	}
        }
    }

	click_sig_1w(next_block_1, next_block_2, next_block_3) {
		if (!this.sw_32 && !this.sw_21) {
			if (this.sig_1w) {
				this.route_w_trk_1 = null;
				this.sig_1w = false;
			}
			else {
				if (next_block_1 === Occupied || next_block_1 === Lined) {
                    alert("Cannot Line Route Because Conflict With Next Block");
                    return;
                }
                this.route_w_trk_1 = "W_1_1__|__1_valley_harriman";
                this.sig_1w = true;
			}
		}
		else if (this.sw_32) {
			if (this.sig_1w) {
				this.route_w_trk_1 = null;
				this.sig_1w = false;
			}
			else {
				if (next_block_3 === Occupied || next_block_3 === Lined) {
                    alert("Cannot Line Route Because Conflict With Next Block");
                    return;
                }
                this.route_w_trk_1 = "W_1_3__|__3_harriman_industrial";
                this.sig_1w = true;
			}
		}
		else if (!this.sw_32 && this.sw_21) {
			if (this.sig_1w) {
				this.route_w_trk_1 = null;
				this.sig_1w = false;
			}
			else {
				if (next_block_2 === Occupied || next_block_2 === Lined) {
                    alert("Cannot Line Route Because Conflict With Next Block");
                    return;
                }
                this.route_w_trk_1 = "W_1_2__|__2_valley_harriman";
                this.sig_1w = true;
			}
		}
	}

	click_sig_1e(next_block_1) {
		if (this.sw_21 || this.sw_32) {
			return;
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
                this.route_e_trk_1 = "E_1_1__|__1_harriman_sterling";
                this.sig_1e = true;
			}
		}
	}

	click_sig_2e(next_block_1) {
		if (!this.sw_21) {
			return;
		}
		else {
			if (this.sig_2e) {
				this.route_e_trk_2 = null;
				this.sig_2e = false;
			}
			else {
				if (next_block_1 === Occupied || next_block_1 === Lined) {
                    alert("Cannot Line Route Because Conflict With Next Block");
                    return;
                }
                this.route_e_trk_2 = "E_1_1__|__1_harriman_sterling";
                this.sig_2e = true;
			}
		}
	}

	click_sig_3e(next_block_1) {
		if (!this.sw_32) {
			return;
		}
		else {
			if (this.sig_3e) {
				this.route_e_trk_3 = null;
				this.sig_3e = false;
			}
			else {
				if (next_block_1 === Occupied || next_block_1 === Lined) {
                    alert("Cannot Line Route Because Conflict With Next Block");
                    return;
                }
                this.route_e_trk_3 = "E_1_1__|__1_harriman_sterling";
                this.sig_3e = true;
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
     * @brief Funtion to throw switch #32 in the interlocking
     * 
     * The function sets the status of the switch, whether it is is the normal possition
     * of reversed, (True = Reversed / False = Normal)
     */
    throw_sw_32() {
        if (this.sw_32 === false) {
            this.sw_32 = true;
        }
        else {
            this.sw_32 = false;
        }
    }

    /**
     * 
     */
    get_routes() {
        let routes = [
            this.route_w_trk_1,
            this.route_e_trk_1, this.route_e_trk_2, this.route_e_trk_3
        ];

        return routes;
    }

    /**
     * 
     */
    get_interlocking_status() {
        let status = {
            sw_21: this.sw_21,
            sw_32: this.sw_32
        }

        return status;
    }
}

export default CTC_Harriman;