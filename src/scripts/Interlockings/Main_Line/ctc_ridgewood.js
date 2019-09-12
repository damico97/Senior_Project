const Empty = '#999999';
const Lined = '#75fa4c';
const Occupied = '#eb3323';

class CTC_Ridgewood {
    /**
     * 
     */
    constructor() {

        this.sw_1 = false;
        this.sw_3 = false;
        this.sw_5 = false;
        this.sw_7 = false;
        this.sw_9 = false;

        this.sig_2w_1 = false;
        this.sig_2w_2 = false;

        this.routes = [];
        this.route_w_trk_3 = null;
        this.route_w_trk_4 = null;
        this.route_w_trk_1 = null;
        this.route_w_trk_2 = null;

        this.route_e_trk_3 = null;
        this.route_e_trk_1 = null;
        this.route_e_trk_2 = null;
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
            else if (track === "3") {
                return this.route_w_trk_3;
            }
            else {
                return this.route_w_trk_4;
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

    /**
     * 
     * @param {*} sigNum 
     * @param {*} next_block_1 
     * @param {*} next_block_2 
     * @param {*} next_block_3 
     * @param {*} next_block_4 
     */
    click_sig(sigNum, next_block_1, next_block_2, next_block_3, next_block_4) {
        if (sigNum === "2W-1") {
            if (this.sw_3 || this.sw_7 || this.sw_9) {
                return;
            }
            else if (!this.sw_1 && !this.sw_5) {
                if (this.sig_2w_1) {
                    this.route_w_trk_1 = null;
                    this.sig_2w_1 = false;
                    return;
                }
                else {
                    if (next_block_1 === Occupied || next_block_1 === Lined) {
                        alert("Cannot Line Route Because Conflict With Next Block");
                        return;
                    }
                    this.route_w_trk_1 = "W_1_1__|__1_wc_ridgewood";
                    this.sig_2w_1 = true;
                }
            }
            else if (this.sw_1 && !this.sw_5) {
                if (this.sig_2w_1) {
                    this.route_w_trk_1 = null;
                    this.sig_2w_1 = false;
                    return;
                }
                else {
                    if (next_block_3 === Occupied || next_block_3 === Lined) {
                        alert("Cannot Line Route Because Conflict With Next Block");
                        return;
                    }
                    this.route_w_trk_1 = "W_1_3__|__3_wc_ridgewood";
                    this.sig_2w_1 = true;
                }
            }
            else if (!this.sw_1 && this.sw_5) {
                if (this.sig_2w_1) {
                    this.route_w_trk_1 = null;
                    this.sig_2w_1 = false;
                    return;
                }
                else {
                    if (next_block_3 === Occupied || next_block_3 === Lined) {
                        alert("Cannot Line Route Because Conflict With Next Block");
                        return;
                    }
                    this.route_w_trk_1 = "W_1_2__|__2_wc_ridgewood";
                    this.sig_2w_1 = true;
                }
            }
        }
        else if (sigNum === "2W-2") {
            if (this.sw_3 || this.sw_7) {
                return;
            }
            if (this.sw_9) {
                if (!this.sw_1 && !this.sw_5) {
                    if (this.sig_2w_2) {
                        this.route_w_trk_4 = null;
                        this.sig_2w_2 = false;
                        return;
                    }
                    else {
                        if (next_block_1 === Occupied || next_block_1 === Lined) {
                            alert("Cannot Line Route Because Conflict With Next Block");
                            return;
                        }
                        this.route_w_trk_4 = "W_4_1__|__1_wc_ridgewood";
                        this.sig_2w_2 = true;
                    }
                }
                else if (this.sw_1 && !this.sw_5) {
                    if (this.sig_2w_2) {
                        this.route_w_trk_4 = null;
                        this.sig_2w_2 = false;
                        return;
                    }
                    else {
                        if (next_block_3 === Occupied || next_block_3 === Lined) {
                            alert("Cannot Line Route Because Conflict With Next Block");
                            return;
                        }
                        this.route_w_trk_4 = "W_4_3__|__3_wc_ridgewood";
                        this.sig_2w_2 = true;
                    }
                }
                else if (!this.sw_1 && this.sw_5) {
                    if (this.sig_2w_2) {
                        this.route_w_trk_4 = null;
                        this.sig_2w_2 = false;
                        return;
                    }
                    else {
                        if (next_block_3 === Occupied || next_block_3 === Lined) {
                            alert("Cannot Line Route Because Conflict With Next Block");
                            return;
                        }
                        this.route_w_trk_4 = "W_4_2__|__2_wc_ridgewood";
                        this.sig_2w_2 = true;
                    }
                }
            }
        }
        else if (sigNum === "4W") {
            if (this.sw_5) {
                return;
            }
            if (!this.sw_3) {
                if (this.sig_4w) {
                    this.route_w_trk_2 = null;
                    this.sig_4w = false;
                    return;
                }
                else {
                    if (next_block_3 === Occupied || next_block_3 === Lined) {
                        alert("Cannot Line Route Because Conflict With Next Block");
                        return;
                    }
                    this.route_w_trk_2 = "W_2_2__|__2_wc_ridgewood";
                    this.sig_4w = true;
                }
            }
            else if (!this.sw_1 && this.sw_3) {
                if (this.sig_4w) {
                    this.route_w_trk_2 = null;
                    this.sig_4w = false;
                    return;
                }
                else {
                    if (next_block_1 === Occupied || next_block_1 === Lined) {
                        alert("Cannot Line Route Because Conflict With Next Block");
                        return;
                    }
                    this.route_w_trk_2 = "W_2_1__|__1_wc_ridgewood";
                    this.sig_4w = true;
                }
            }
            else if (this.sw_1 && this.sw_3) {
                if (this.sig_4w) {
                    this.route_w_trk_2 = null;
                    this.sig_4w = false;
                    return;
                }
                else {
                    if (next_block_1 === Occupied || next_block_1 === Lined) {
                        alert("Cannot Line Route Because Conflict With Next Block");
                        return;
                    }
                    this.route_w_trk_2 = "W_2_3__|__3_wc_ridgewood";
                    this.sig_4w = true;
                }
            }
        }
        else if (sigNum === "6W") {
            if (this.sw_1) {
                return;
            }
            else if (!this.sw_7) {
                if (this.sig_4w) {
                    this.route_w_trk_3 = null;
                    this.sig_4w = false;
                    return;
                }
                else {
                    if (next_block_1 === Occupied || next_block_1 === Lined) {
                        alert("Cannot Line Route Because Conflict With Next Block");
                        return;
                    }
                    this.route_w_trk_3 = "W_3_3__|__3_wc_ridgewood";
                    this.sig_4w = true;
                }
            }
            else if (this.sw_7 && !this.sw_5 && !this.sw_3) {
                if (this.sig_4w) {
                    this.route_w_trk_3 = null;
                    this.sig_4w = false;
                    return;
                }
                else {
                    if (next_block_1 === Occupied || next_block_1 === Lined) {
                        alert("Cannot Line Route Because Conflict With Next Block");
                        return;
                    }
                    this.route_w_trk_3 = "W_3_1__|__1_wc_ridgewood";
                    this.sig_4w = true;
                }
            }
            else if (this.sw_7 && this.sw_5 && !this.sw_3) {
                if (this.sig_4w) {
                    this.route_w_trk_3 = null;
                    this.sig_4w = false;
                    return;
                }
                else {
                    if (next_block_1 === Occupied || next_block_1 === Lined) {
                        alert("Cannot Line Route Because Conflict With Next Block");
                        return;
                    }
                    this.route_w_trk_3 = "W_3_2__|__2_wc_ridgewood";
                    this.sig_4w = true;
                }
            }
        }
        else if (sigNum === "2E") {
            if (this.sw_1 || this.sw_5) {
                return;
            }
            else if (!this.sw_3 && !this.sw_7 && !this.sw_9) {
                if (this.sig_2e) {
                    this.route_e_trk_1 = null;
                    this.sig_2e = false;
                    return;
                }
                else {
                    if (next_block_1 === Occupied || next_block_1 === Lined) {
                        alert("Cannot Line Route Because Conflict With Next Block");
                        return;
                    }
                    this.route_e_trk_1 = "E_1_1__|__1_ridgewood_suscon";
                    this.sig_2e = true;
                }
            }
            else if (this.sw_3 && !this.sw_7 && !this.sw_9) {
                if (this.sig_2e) {
                    this.route_e_trk_1 = null;
                    this.sig_2e = false;
                    return;
                }
                else {
                    if (next_block_1 === Occupied || next_block_1 === Lined) {
                        alert("Cannot Line Route Because Conflict With Next Block");
                        return;
                    }
                    this.route_e_trk_1 = "E_1_2__|__2_ridgewood_suscon";
                    this.sig_2e = true;
                }
            }
            else if (!this.sw_3 && this.sw_7 && !this.sw_9) {
                if (this.sig_2e) {
                    this.route_e_trk_1 = null;
                    this.sig_2e = false;
                    return;
                }
                else {
                    if (next_block_1 === Occupied || next_block_1 === Lined) {
                        alert("Cannot Line Route Because Conflict With Next Block");
                        return;
                    }
                    this.route_e_trk_1 = "E_1_3__|__1_ridgewood_bt";
                    this.sig_2e = true;
                }
            }
            else if (!this.sw_3 && !this.sw_7 && this.sw_9) {
                if (this.sig_2e) {
                    this.route_e_trk_1 = null;
                    this.sig_2e = false;
                    return;
                }
                else {
                    if (next_block_1 === Occupied || next_block_1 === Lined) {
                        alert("Cannot Line Route Because Conflict With Next Block");
                        return;
                    }
                    this.route_e_trk_1 = "E_1_4__|__2_ridgewood_bt";
                    this.sig_2e = true;
                }
            }
        }
        else if (sigNum === "4E") {
            if (this.sw_3) {
                return;
            }
            else if (!this.sw_5) {
                if (this.sig_4e) {
                    this.route_e_trk_2 = null;
                    this.sig_4e = false;
                    return;
                }
                else {
                    if (next_block_2 === Occupied || next_block_2 === Lined) {
                        alert("Cannot Line Route Because Conflict With Next Block");
                        return;
                    }
                    this.route_e_trk_2 = "E_2_2__|__2_ridgewood_suscon";
                    this.sig_4e = true;
                }
            }
            else if (this.sw_5 && !this.sw_7 && !this.sw_9) {
                if (this.sig_4e) {
                    this.route_e_trk_2 = null;
                    this.sig_4e = false;
                    return;
                }
                else {
                    if (next_block_1 === Occupied || next_block_1 === Lined) {
                        alert("Cannot Line Route Because Conflict With Next Block");
                        return;
                    }
                    this.route_e_trk_2 = "E_2_1__|__1_ridgewood_suscon";
                    this.sig_4e = true;
                }
            }
            else if (this.sw_5 && this.sw_7) {
                if (this.sig_4e) {
                    this.route_e_trk_2 = null;
                    this.sig_4e = false;
                    return;
                }
                else {
                    if (next_block_3 === Occupied || next_block_3 === Lined) {
                        alert("Cannot Line Route Because Conflict With Next Block");
                        return;
                    }
                    this.route_e_trk_2 = "E_2_3__|__1_ridgewood_bt";
                    this.sig_4e = true;
                }
            }
            else if (this.sw_5 && !this.sw_7 && this.sw_9) {
                if (this.sig_4e) {
                    this.route_e_trk_2 = null;
                    this.sig_4e = false;
                    return;
                }
                else {
                    if (next_block_4 === Occupied || next_block_4 === Lined) {
                        alert("Cannot Line Route Because Conflict With Next Block");
                        return;
                    }
                    this.route_e_trk_2 = "E_2_4__|__2_ridgewood_bt";
                    this.sig_4e = true;
                }
            }
        }
        else if (sigNum === "6E") {
            if (this.sw_7) {
                return;
            }
            else if (!this.sw_1) {
                if (this.sig_6e) {
                    this.route_e_trk_3 = null;
                    this.sig_6e = false;
                    return;
                }
                else {
                    if (next_block_3 === Occupied || next_block_3 === Lined) {
                        alert("Cannot Line Route Because Conflict With Next Block");
                        return;
                    }
                    this.route_e_trk_3 = "E_3_3__|__1_ridgewood_bt";
                    this.sig_6e = true;
                }
            }
            else if (this.sw_1 && !this.sw_3 && !this.sw_5 && !this.sw_7 && !this.sw_9) {
                if (this.sig_6e) {
                    this.route_e_trk_3 = null;
                    this.sig_6e = false;
                    return;
                }
                else {
                    if (next_block_2 === Occupied || next_block_2 === Lined) {
                        alert("Cannot Line Route Because Conflict With Next Block");
                        return;
                    }
                    this.route_e_trk_3 = "E_3_1__|__1_ridgewood_suscon";
                    this.sig_6e = true;
                }
            }
            else if (this.sw_1 && !this.sw_3 && !this.sw_5 && !this.sw_7 && this.sw_9) {
                if (this.sig_6e) {
                    this.route_e_trk_3 = null;
                    this.sig_6e = false;
                    return;
                }
                else {
                    if (next_block_2 === Occupied || next_block_2 === Lined) {
                        alert("Cannot Line Route Because Conflict With Next Block");
                        return;
                    }
                    this.route_e_trk_3 = "E_3_4__|__2_ridgewood_bt";
                    this.sig_6e = true;
                }
            }
            else if (this.sw_1 && this.sw_3 && !this.sw_5) {
                if (this.sig_6e) {
                    this.route_e_trk_3 = null;
                    this.sig_6e = false;
                    return;
                }
                else {
                    if (next_block_2 === Occupied || next_block_2 === Lined) {
                        alert("Cannot Line Route Because Conflict With Next Block");
                        return;
                    }
                    this.route_e_trk_3 = "E_3_2__|__2_ridgewood_suscon";
                    this.sig_6e = true;
                }
            }
        }
    }

    get_routes() {
        let routes = [
            this.route_w_trk_1, this.route_w_trk_2, this.route_w_trk_3, this.route_w_trk_4,
            this.route_e_trk_1, this.route_e_trk_2, this.route_e_trk_3
        ];

        return routes;
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
    throw_sw_9() {
        if (this.sw_9 === false) {
            this.sw_9 = true;
        }
        else {
            this.sw_9 = false;
        }
    }

    /**
     * 
     */
    get_interlocking_status() {
        var status = {
            sw_1: this.sw_1,
            sw_3: this.sw_3,
            sw_5: this.sw_5,
            sw_7: this.sw_7,
            sw_9: this.sw_9,
            routes: this.get_routes()
        };

        return status;
    }
}

export default CTC_Ridgewood;