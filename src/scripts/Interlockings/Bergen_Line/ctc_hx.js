const Empty = '#999999';
const Lined = '#75fa4c';
const Occupied = '#eb3323';

class CTC_HX {
    constructor() {
        this.sw_1 = false;
        this.sw_3 = false;
        this.sw_5 = false;

        this.sig_2w1 = false;
        this.sig_2w2 = false;
        this.sig_2w3 = false;
        this.sig_4w = false;
        this.sig_2e = false;
        this.sig_4e = false;

        this.route_w_trk_1 = null;
        this.route_w_trk_2 = null;
        this.route_e_trk_1 = null;
        this.route_e_trk_2 = null;
    }

    /**
     * 
     */
    get_train_route(direction, track) {
        if (direction === "WEST") {
            if (track === "2") {
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

    click_sig_2w1(next_block_1, next_block_2) {
        if (this.sw_3) {
            return;
        }
        else if (!this.sw_1) {
            if (this.sig_2w1) {
                this.route_w_trk_1 = null;
                this.sig_2w1 = false;
            }
            else {
                if (next_block_1 === Occupied || next_block_1 === Lined) {
                    alert("Cannot Line Route Because Conflict With Next Block");
                    return;
                }
                this.route_w_trk_1 = "W_1_1__|__1_pascack_hx";
                this.sig_2w1 = true;
            }
        }
        else {
            if (this.sig_2w1) {
                this.route_w_trk_1 = null;
                this.sig_2w1 = false;
            }
            else {
                if (next_block_2 === Occupied || next_block_2 === Lined) {
                    alert("Cannot Line Route Because Conflict With Next Block");
                    return;
                }
                this.route_w_trk_1 = "W_1_2__|__2_pascack_hx";
                this.sig_2w1 = true;
            }
        }
    }

    click_sig_2w2(next_block_1, next_block_2) {
        if (!this.sw_3 || this.sw_5) {
            return;
        }
        else if (!this.sw_1) {
            if (this.sig_2w2) {
                this.route_w_trk_1 = null;
                this.sig_2w2 = false;
            }
            else {
                if (next_block_1 === Occupied || next_block_1 === Lined) {
                    alert("Cannot Line Route Because Conflict With Next Block");
                    return;
                }
                this.route_w_trk_1 = "W_3_1__|__1_pascack_hx";
                this.sig_2w2 = true;
            }
        }
        else {
            if (this.sig_2w2) {
                this.route_w_trk_1 = null;
                this.sig_2w2 = false;
            }
            else {
                if (next_block_2 === Occupied || next_block_2 === Lined) {
                    alert("Cannot Line Route Because Conflict With Next Block");
                    return;
                }
                this.route_w_trk_1 = "W_3_2__|__2_pascack_hx";
                this.sig_2w2 = true;
            }
        }
    }

    click_sig_2w3(next_block_1, next_block_2) {
        if (!this.sw_3 || !this.sw_5) {
            return;
        }
        else if (!this.sw_1) {
            if (this.sig_2w3) {
                this.route_w_trk_1 = null;
                this.sig_2w3 = false;
            }
            else {
                if (next_block_1 === Occupied || next_block_1 === Lined) {
                    alert("Cannot Line Route Because Conflict With Next Block");
                    return;
                }
                this.route_w_trk_1 = "W_4_1__|__1_pascack_hx";
                this.sig_2w3 = true;
            }
        }
        else {
            if (this.sig_2w3) {
                this.route_w_trk_1 = null;
                this.sig_2w3 = false;
            }
            else {
                if (next_block_2 === Occupied || next_block_2 === Lined) {
                    alert("Cannot Line Route Because Conflict With Next Block");
                    return;
                }
                this.route_w_trk_1 = "W_4_2__|__2_pascack_hx";
                this.sig_2w3 = true;
            }
        }
    }

    click_sig_4w(next_block_2) {
        if (this.sw_1) {
            return;
        }
        else {
            if (this.sig_4w) {
                this.route_w_trk_2 = null;
                this.sig_4w = false;
            }
            else {
                if (next_block_2 === Occupied || next_block_2 === Lined) {
                    alert("Cannot Line Route Because Conflict With Next Block");
                    return;
                }
                this.route_w_trk_2 = "W_2_2__|__2_pascack_hx";
                this.sig_4w = true;
            }
        }
    }

    click_sig_2e(next_block_1, next_block_3, next_block_4) {
        if (this.sw_1) {
            return;
        }
        else if (!this.sw_3) {
            if (this.sig_2e) {
                this.route_e_trk_1 = null;
                this.sig_2e = false;
            }
            else {
                if (next_block_1 === Occupied || next_block_1 === Lined) {
                    alert("Cannot Line Route Because Conflict With Next Block");
                    return;
                }
                this.route_e_trk_1 = "E_1_1__|__3_hx_laurel";
                this.sig_2e = true;
            }
        }
        else if (this.sw_3 && !this.sw_5) {
            if (this.sig_2e) {
                this.route_e_trk_1 = null;
                this.sig_2e = false;
            }
            else {
                if (next_block_3 === Occupied || next_block_3 === Lined) {
                    alert("Cannot Line Route Because Conflict With Next Block");
                    return;
                }
                this.route_e_trk_1 = "E_1_3__|__1_hx_croxton";
                this.sig_2e = true;
            }
        }
        else if (this.sw_3 && this.sw_5) {
            if (this.sig_2e) {
                this.route_e_trk_1 = null;
                this.sig_2e = false;
            }
            else {
                if (next_block_4 === Occupied || next_block_4 === Lined) {
                    alert("Cannot Line Route Because Conflict With Next Block");
                    return;
                }
                this.route_e_trk_1 = "E_1_4__|__4_hx_croxton";
                this.sig_2e = true;
            }
        }
    }

    click_sig_4e(next_block_1, next_block_2, next_block_3, next_block_4) {
        if (!this.sw_1) {
            if (this.sig_4e) {
                this.route_e_trk_2 = null;
                this.sig_4e = false;
            }
            else {
                if (next_block_2 === Occupied || next_block_2 === Lined) {
                    alert("Cannot Line Route Because Conflict With Next Block");
                    return;
                }
                this.route_e_trk_2 = "E_2_2__|__1_hx_laurel";
                this.sig_4e = true;
            }
        }
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
                this.route_e_trk_2 = "E_2_1__|__3_hx_laurel";
                this.sig_4e = true;
            }
        }
        else if (this.sw_1 && this.sw_3 && !this.sw_5) {
            if (this.sig_4e) {
                this.route_e_trk_2 = null;
                this.sig_4e = false;
            }
            else {
                if (next_block_3 === Occupied || next_block_3 === Lined) {
                    alert("Cannot Line Route Because Conflict With Next Block");
                    return;
                }
                this.route_e_trk_2 = "E_2_3__|__3_hx_croxton";
                this.sig_4e = true;
            }
        }
        else if (this.sw_1 && this.sw_3 && this.sw_5) {
            if (this.sig_4e) {
                this.route_e_trk_2 = null;
                this.sig_4e = false;
            }
            else {
                if (next_block_4 === Occupied || next_block_4 === Lined) {
                    alert("Cannot Line Route Because Conflict With Next Block");
                    return;
                }
                this.route_e_trk_2 = "E_1_4__|__4_hx_croxton";
                this.sig_4e = true;
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
    throw_sw_5() {
        if (this.sw_5 === false) {
            this.sw_5 = true;
        }
        else {
            this.sw_5 = false;
        }
    }

    /**
     * 
     */
    get_routes() {
        let routes = [
            this.route_w_trk_1, this.route_w_trk_2,
            this.route_e_trk_1, this.route_e_trk_2
        ];

        return routes;
    }

    /**
     * 
     */
    get_interlocking_status() {
        var status = {
            sw_1: this.sw_1,
            sw_3: this.sw_3,
            sw_5: this.sw_5
        };

        return status;
    }
}

export default CTC_HX;