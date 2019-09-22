const Empty = '#999999';
const Lined = '#75fa4c';
const Occupied = '#eb3323';

class CTC_WC {
    constructor() {
        this.sw_1 = false;
        this.sw_3 = false;
        this.sw_5 = false;
        this.sw_7 = false;

        this.sig_2w_2 = false;
        this.sig_2w_1 = false;
        this.sig_4w = false;

        this.sig_2e_2 = false;
        this.sig_2e_1 = false;
        this.sig_4e = false;

        this.route_w_trk_1 = null;
        this.route_w_trk_2 = null;
        this.route_w_trk_3 = null;
        this.route_e_trk_1 = null;
        this.route_e_trk_2 = null;
        this.route_e_trk_3 = null;

        this.routed_trk_1 = false;
        this.routed_trk_2 = false;
        this.trk_1_time = null;
        this.trk_2_time = null;
        this.trk_1_occupied = false;
        this.trk_2_occupied = false;
    }

    /**
     * 
     */
    get_train_route(direction, track) {
        if (direction === "WEST") {
            if (track === "1") {
                return this.route_w_trk_1;
            }
            else if (track === "2") {
                return this.route_w_trk_2;
            }
            else {
                return this.route_w_trk_3;
            }
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

    click_sig_2w_1(next_block_1, next_block_2, next_block_3) {
        if (this.sw_5 || this.sw_7) {
            return;
        }
        else if (!this.sw_1 && !this.sw_3) {
            if (this.sig_2w_1) {
                this.route_w_trk_1 = null;
                this.routed_trk_1 = false;
                this.sig_2w_1 = false;
            }
            else {
                if (next_block_1 === Occupied || next_block_1 === Lined) {
                    alert("Cannot Line Route Because Conflict With Next Block");
                    return;
                }
                this.route_w_trk_1 = "W_1_1__|__1_sf_wc";
                this.routed_trk_1 = true;
                this.sig_2w_1 = true;
            }
        }
        else if (this.sw_1 && !this.sw_3) {
            if (this.sig_2w_1) {
                this.route_w_trk_1 = null;
                this.routed_trk_1 = false;
                this.sig_2w_1 = false;
            }
            else {
                if (next_block_2 === Occupied || next_block_2 === Lined) {
                    alert("Cannot Line Route Because Conflict With Next Block");
                    return;
                }
                this.route_w_trk_1 = "W_1_2__|__2_sf_wc";
                this.routed_trk_1 = true;
                this.sig_2w_1 = true;
            }
        }
        else if (this.sw_3) {
            if (this.sig_2w_1) {
                this.route_w_trk_1 = null;
                this.routed_trk_1 = false;
                this.sig_2w_1 = false;
            }
            else {
                if (next_block_3 === Occupied || next_block_3 === Lined) {
                    alert("Cannot Line Route Because Conflict With Next Block");
                    return;
                }
                this.route_w_trk_1 = "W_1_3__|__0_yard_wc";
                this.routed_trk_1 = true;
                this.sig_2w_1 = true;
            }
        }
    }

    click_sig_2w_2(next_block_1, next_block_2, next_block_3) {
        if(!this.sw_7 || this.sw_5) {
            return;
        }
        else if (!this.sw_1 && !this.sw_3) {
            if (this.sig_2w_2) {
                this.route_w_trk_3 = null;
                this.routed_trk_1 = false;
                this.sig_2w_2 = false;
            }
            else {
                if (next_block_1 === Occupied || next_block_1 === Lined) {
                    alert("Cannot Line Route Because Conflict With Next Block");
                    return;
                }
                this.route_w_trk_3 = "W_3_1__|__1_sf_wc";
                this.routed_trk_1 = true;
                this.sig_2w_2 = true;
            }
        }
        else if (this.sw_1 && !this.sw_3) {
            if (this.sig_2w_2) {
                this.route_w_trk_3 = null;
                this.routed_trk_1 = false;
                this.sig_2w_2 = false;
            }
            else {
                if (next_block_2 === Occupied || next_block_2 === Lined) {
                    alert("Cannot Line Route Because Conflict With Next Block");
                    return;
                }
                this.route_w_trk_3 = "W_3_2__|__2_sf_wc";
                this.routed_trk_1 = true;
                this.sig_2w_2 = true;
            }
        }
        else if (this.sw_3) {
            if (this.sig_2w_2) {
                this.route_w_trk_3 = null;
                this.routed_trk_1 = false;
                this.sig_2w_2 = false;
            }
            else {
                if (next_block_3 === Occupied || next_block_3 === Lined) {
                    alert("Cannot Line Route Because Conflict With Next Block");
                    return;
                }
                this.route_w_trk_3 = "W_3_3__|__0_yard_wc";
                this.routed_trk_1 = true;
                this.sig_2w_2 = true;
            }
        }
    }

    click_sig_4w(next_block_1, next_block_2, next_block_3) {
        if (this.sw_1) {
            return;
        }
        else if (!this.sw_5) {
            if (this.sig_4w) {
                this.route_w_trk_2 = null;
                this.routed_trk_2 = false;
                this.sig_4w = false;
            }
            else {
                if (next_block_2 === Occupied || next_block_2 === Lined) {
                    alert("Cannot Line Route Because Conflict With Next Block");
                    return;
                }
                this.route_w_trk_2 = "W_2_2__|__2_sf_wc";
                this.routed_trk_2 = true;
                this.sig_4w = true;
            }
        }
        else if (!this.sw_3 && this.sw_5) {
            if (this.sig_4w) {
                this.route_w_trk_2 = null;
                this.routed_trk_2 = false;
                this.sig_4w = false;
            }
            else {
                if (next_block_1 === Occupied || next_block_1 === Lined) {
                    alert("Cannot Line Route Because Conflict With Next Block");
                    return;
                }
                this.route_w_trk_2 = "W_2_1__|__1_sf_wc";
                this.routed_trk_2 = true;
                this.sig_4w = true;
            }
        }
        else if (this.sw_3 && this.sw_5) {
            if (this.sig_4w) {
                this.route_w_trk_2 = null;
                this.routed_trk_2 = false;
                this.sig_4w = false;
            }
            else {
                if (next_block_3 === Occupied || next_block_3 === Lined) {
                    alert("Cannot Line Route Because Conflict With Next Block");
                    return;
                }
                this.route_w_trk_2 = "W_2_3__|__0_yard_wc";
                this.routed_trk_2 = true;
                this.sig_4w = true;
            }
        }
    }

    click_sig_2e_1(next_block_1, next_block_2, next_block_3) {
        if (this.sw_1 || this.sw_3) {
            return;
        }
        else if (!this.sw_5 && !this.sw_7) {
            if (this.sig_2e_1) {
                this.route_e_trk_1 = null;
                this.routed_trk_1 = false;
                this.sig_2e_1 = false;
            }
            else {
                if (next_block_1 === Occupied || next_block_1 === Lined) {
                    alert("Cannot Line Route Because Conflict With Next Block");
                    return;
                }
                this.route_e_trk_1 = "E_1_1__|__1_wc_ridgewood";
                this.routed_trk_1 = true;
                this.sig_2e_1 = true;
            }
        }
        else if (this.sw_5) {
            if (this.sig_2e_1) {
                this.route_e_trk_1 = null;
                this.routed_trk_1 = false;
                this.sig_2e_1 = false;
            }
            else {
                if (next_block_2 === Occupied || next_block_2 === Lined) {
                    alert("Cannot Line Route Because Conflict With Next Block");
                    return;
                }
                this.route_e_trk_1 = "E_1_2__|__2_wc_ridgewood";
                this.routed_trk_1 = true; 
                this.sig_2e_1 = true;
            }
        }
        else if (!this.sw_5 && this.sw_7) {
            if (this.sig_2e_1) {
                this.route_e_trk_1 = null;
                this.routed_trk_1 = false;
                this.sig_2e_1 = false;
            }
            else {
                if (next_block_3 === Occupied || next_block_3 === Lined) {
                    alert("Cannot Line Route Because Conflict With Next Block");
                    return;
                }
                this.route_e_trk_1 = "E_1_3__|__3_wc_ridgewood";
                this.routed_trk_1 = true;
                this.sig_2e_1 = true;
            }
        }
    }

    click_sig_2e_2(next_block_1, next_block_2, next_block_3) {
        if (!this.sw_3) {
            return;
        }
        else if (!this.sw_5 && !this.sw_7) {
            if (this.sig_2e_2) {
                this.route_e_trk_3 = null;
                this.routed_trk_1 = false;
                this.sig_2e_2 = false;
            }
            else {
                if (next_block_1 === Occupied || next_block_1 === Lined) {
                    alert("Cannot Line Route Because Conflict With Next Block");
                    return;
                }
                this.route_e_trk_3 = "E_3_1__|__1_wc_ridgewood";
                this.routed_trk_1 = true;
                this.sig_2e_2 = true;
            }
        }
        else if (this.sw_5) {
            if (this.sig_2e_2) {
                this.route_e_trk_3 = null;
                this.routed_trk_1 = false;
                this.sig_2e_2 = false;
            }
            else {
                if (next_block_2 === Occupied || next_block_2 === Lined) {
                    alert("Cannot Line Route Because Conflict With Next Block");
                    return;
                }
                this.route_e_trk_3 = "E_3_2__|__2_wc_ridgewood";
                this.routed_trk_1 = true;
                this.sig_2e_2 = true;
            }
        }
        else if (!this.sw_5 && this.sw_7) {
            if (this.sig_2e_2) {
                this.route_e_trk_3 = null;
                this.routed_trk_1 = false;
                this.sig_2e_2 = false;
            }
            else {
                if (next_block_3 === Occupied || next_block_3 === Lined) {
                    alert("Cannot Line Route Because Conflict With Next Block");
                    return;
                }
                this.route_e_trk_3 = "E_3_3__|__3_wc_ridgewood";
                this.routed_trk_1 = true;
                this.sig_2e_2 = true;
            }
        }
    }

    click_sig_4e(next_block_1, next_block_2, next_block_3) {
        if (this.sig_5) {
            return;
        }
        else if (!this.sw_1 && !this.sw_5) {
            if (this.sig_4e) {
                this.route_e_trk_2 = null;
                this.routed_trk_2 = false;
                this.sig_4e = false;
            }
            else {
                if (next_block_2 === Occupied || next_block_2 === Lined) {
                    alert("Cannot Line Route Because Conflict With Next Block");
                    return;
                }
                this.route_e_trk_2 = "E_2_2__|__2_wc_ridgewood";
                this.routed_trk_2 = true;
                this.sig_4e = true;
            }
        }
        else if (this.sw_1 && !this.sw_3 && !this.sw_5 && !this.sw_7) {
            if (this.sig_4e) {
                this.route_e_trk_2 = null;
                this.routed_trk_2 = false;
                this.sig_4e = false;
            }
            else {
                if (next_block_1 === Occupied || next_block_1 === Lined) {
                    alert("Cannot Line Route Because Conflict With Next Block");
                    return;
                }
                this.route_e_trk_2 = "E_2_1__|__1_wc_ridgewood";
                this.routed_trk_2 = true;
                this.sig_4e = true;
            }
        }
        else if (this.sw_1 && !this.sw_3 && !this.sw_5 && this.sw_7) {
            if (this.sig_4e) {
                this.route_e_trk_2 = null;
                this.routed_trk_2 = false;
                this.sig_4e = false;
            }
            else {
                if (next_block_3 === Occupied || next_block_3 === Lined) {
                    alert("Cannot Line Route Because Conflict With Next Block");
                    return;
                }
                this.route_e_trk_2 = "E_2_3__|__3_wc_ridgewood";
                this.routed_trk_2 = true;
                this.sig_4e = true;
            }
        }
    }

    /**
     * 
     */
    set_trk_1_occupied(n_state) {
        if (n_state === true) {
            this.trk_1_occupied = n_state;
            this.routed_trk_1 = false;
            this.trk_1_time = new Date().getTime() / 1000;
        }
        else {
            console.log("ERROR");
        }
    }

    /**
     * 
     */
    set_trk_2_occupied(n_state) {
        if (n_state === true) {
            this.trk_2_occupied = n_state;
            this.routed_trk_2 = false;
            this.trk_2_time = new Date().getTime() / 1000;
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
        if (current_time - this.trk_1_time > 4 && current_time - this.trk_1_time< 100000) {
            this.sig_2w = false;
            this.sig_2e = false;

            this.route_w_trk_1 = null;
            this.route_e_trk_1 = null;
            this.route_w_trk_3 = null;
            this.route_e_trk_3 = null;
            this.routed_trk_1 = false;

            this.trk_1_occupied = false;
            this.trk_1_time = null;
        }
        if (current_time - this.trk_2_time > 4 && current_time - this.trk_2_time< 100000) {
            this.sig_4w = false;
            this.sig_4e_1 = false;
            this.sig_4e_2 = false;

            this.route_w_trk_2 = null;
            this.route_e_trk_2 = null;
            this.routed_trk_2 = false;

            this.trk_2_occupied = false;
            this.trk_2_time = null;
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
     * @brief Funtion to throw switch #5 in the interlocking
     * 
     * The function sets the status of the switch, whether it is is the normal possition
     * of reversed, (True = Reversed / False = Normal)
     */
    throw_sw_5() {
        if (this.sw_5 === false) {
            this.sw_5 = true;
        }
        else {
            this.sw_5 = false;
        }
    }

    /**
     * @brief Funtion to throw switch #7 in the interlocking
     * 
     * The function sets the status of the switch, whether it is is the normal possition
     * of reversed, (True = Reversed / False = Normal)
     */
    throw_sw_7() {
        if (this.sw_7 === false) {
            this.sw_7 = true;
        }
        else {
            this.sw_7 = false;
        }
    }

    /**
     * 
     */
    get_routes() {
        let routes = [
            this.route_w_trk_1, this.route_w_trk_3,
            this.route_e_trk_1, this.route_e_trk_3,
            this.route_e_trk_2, this.route_w_trk_2,
        ];

        return routes;
    }

    /**
     * @brief Function that returns the status of the interlocking for the jsx class to set the drawings
     * 
     * @return
     */
    get_interlocking_status() {
        let status = {
            sw_1: this.sw_1,
            sw_3: this.sw_3,
            sw_5: this.sw_5,
            sw_7: this.sw_7,
            routes: this.get_routes(),
            routed_trk_1: this.routed_trk_1,
            routed_trk_2: this.routed_trk_2,
            occupied_trk_1: this.trk_1_occupied,
            occupied_trk_2: this.trk_2_occupied
        }

        return status;
    }
}

export default CTC_WC;