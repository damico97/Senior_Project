const Empty = '#999999';
const Lined = '#75fa4c';
const Occupied = '#eb3323';

class CTC_Laurel {
    constructor() {
        this.sw_1 = false;
        this.sw_3 = false;
        this.sw_7 = false;
        this.sw_9 = false;
        this.sw_11 = false;
        this.sw_13 = false;

        this.sig_2w = false;
        this.sig_4w = false;
        this.sig_8w = false;
        this.sig_10w = false;

        this.sig_6e = false;
        this.sig_12e = false;
        this.sig_8e = false;
        this.sig_4e = false;

        this.route_w_trk_3 = null;
        this.route_w_trk_4 = null;
        this.route_w_trk_1 = null;
        this.route_w_trk_2 = null;
        this.route_e_trk_3 = null;
        this.route_e_trk_4 = null;
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
            else if (track === "3") {
                return this.route_e_trk_3;
            }
            else {
                return this.route_e_trk_4;
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
    click_sig_2w(next_block_1, next_block_2, next_block_3) {
        if (this.sw_11 || this.sw_1) {
            return;
        }
        else if (!this.sw_7 && !this.sw_3) {
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
                this.route_w_trk_1 = "W_1_1__|__2_hx_laurel"
                this.sig_2w = true;
            }
        }
        else if (!this.sw_7 && this.sw_3) {
            if (this.sig_2w) {
                this.route_w_trk_1 = null;
                this.sig_2w = false;
            }
            else {
                if (next_block_3 === Occupied || next_block_3 === Lined) {
                    alert("Cannot Line Route Because Conflict With Next Block");
                    return;
                }
                this.route_w_trk_1 = "W_1_3__|__1_hx_laurel"
                this.sig_2w = true;
            }
        }
        else if (this.sw_7) {
            if (this.sig_2w) {
                this.route_w_trk_1 = null;
                this.sig_2w = false;
                return;
            }
            else {
                if (next_block_2 === Occupied || next_block_2 === Lined) {
                    alert("Cannot Line Route Because Conflict With Next Block");
                    return;
                }
                this.route_w_trk_1 = "W_1_2__|__1_westSecaucus_laurel";
                this.sig_2w = true;
            }
        }
    }

    click_sig_4w(next_block_1, next_block_2, next_block_3) {
        if (this.sw_13 || this.sw_7) {
            return;
        }
        else if (!this.sw_1) {
            if (this.sig_4w) {
                this.route_w_trk_2 = null;
                this.sig_4w = false;
            }
            else {
                if (next_block_2 === Occupied || next_block_2 === Lined) {
                    alert("Cannot Line Route Because Conflict With Next Block");
                    return;
                }
                this.route_w_trk_2 = "W_2_2__|__1_westSecaucus_laurel";
                this.sig_4w = true;
            }
        }
        else if (this.sw_1 && !this.sw_3) {
            if (this.sig_4w) {
                this.route_w_trk_2 = null;
                this.sig_4w = false;
            }
            else {
                if (next_block_1 === Occupied || next_block_1 === Lined) {
                    alert("Cannot Line Route Because Conflict With Next Block");
                    return;
                }
                this.route_w_trk_2 = "W_2_1__|__2_hx_laurel";
                this.sig_4w = true;
            }
        }
        else if (this.sw_1 && this.sw_3) {
            if (this.sig_4w) {
                this.route_w_trk_2 = null;
                this.sig_4w = false;
            }
            else {
                if (next_block_3 === Occupied || next_block_3 === Lined) {
                    alert("Cannot Line Route Because Conflict With Next Block");
                    return;
                }
                this.route_w_trk_2 = "W_2_3__|__1_hx_laurel";
                this.sig_4w = true;
            }
        }
    }

    click_sig_8w(next_block_1, next_block_2, next_block_3, next_block_4) {
        if (!this.sw_13) {
            if (this.sig_8w) {
                this.route_w_trk_4 = null;
                this.sig_8w = false;
            }
            else {
                if (next_block_4 === Occupied || next_block_4 === Lined) {
                    alert("Cannot Line Route Because Conflict With Next Block");
                    return;
                }
                this.route_w_trk_4 = "W_4_4__|__2_westSecaucus_laurel";
                this.sig_8w = true;
            }
        }
        else if (this.sw_13 && !this.sw_7 && !this.sw_1) {
            if (this.sig_8w) {
                this.route_w_trk_4 = null;
                this.sig_8w = false;
            }
            else {
                if (next_block_2 === Occupied || next_block_2 === Lined) {
                    alert("Cannot Line Route Because Conflict With Next Block");
                    return;
                }
                this.route_w_trk_4 = "W_4_2__|__1_westSecaucus_laurel";
                this.sig_8w = true;
            }
        }
        else if (this.sw_13 && !this.sw_7 && this.sw_1 && !this.sw_3) {
            if (this.sig_8w) {
                this.route_w_trk_4 = null;
                this.sig_8w = false;
            }
            else {
                if (next_block_1 === Occupied || next_block_1 === Lined) {
                    alert("Cannot Line Route Because Conflict With Next Block");
                    return;
                }
                this.route_w_trk_4 = "W_4_1__|__2_hx_laurel";
                this.sig_8w = true;
            }
        }
        else if (this.sw_13 && !this.sw_7 && this.sw_1 && this.sw_3) {
            if (this.sig_8w) {
                this.route_w_trk_4 = null;
                this.sig_8w = false;
            }
            else {
                if (next_block_3 === Occupied || next_block_3 === Lined) {
                    alert("Cannot Line Route Because Conflict With Next Block");
                    return;
                }
                this.route_w_trk_4 = "W_4_3__|__1_hx_laurel";
                this.sig_8w = true;
            }
        }
    }

    click_sig_10w(next_block_1, next_block_2, next_block_3) {
        if (!this.sw_11 && !this.sw_3) {
            if (this.sig_10w) {
                this.route_w_trk_3 = null;
                this.sig_10w = false;
            }
            else {
                if (next_block_3 === Occupied || next_block_3 === Lined) {
                    alert("Cannot Line Route Because Conflict With Next Block");
                    return;
                }
                this.route_w_trk_3 = "W_3_3__|__1_hx_laurel";
                this.sig_10w = true;
            }
        }
        else if (this.sw_11 && !this.sw_7 && !this.sw_3 && !this.sw_1) {
            if (this.sig_10w) {
                this.route_w_trk_3 = null;
                this.sig_10w = false;
            }
            else {
                if (next_block_1 === Occupied || next_block_1 === Lined) {
                    alert("Cannot Line Route Because Conflict With Next Block");
                    return;
                }
                this.route_w_trk_3 = "W_3_1__|__2_hx_laurel";
                this.sig_10w = true;
            }
        }
        else if (this.sw_11 && this.sw_7 && !this.sw_1) {
            if (this.sig_10w) {
                this.route_w_trk_3 = null;
                this.sig_10w = false;
            }
            else {
                if (next_block_2 === Occupied || next_block_2 === Lined) {
                    alert("Cannot Line Route Because Conflict With Next Block");
                    return;
                }
                this.route_w_trk_3 = "W_3_2__|__1_westSecaucus_laurel";
                this.sig_10w = true;
            }
        }
    }

    click_sig_6e(next_block_1, next_block_2, next_block_3, next_block_4) {
        if (!this.sw_3 && !this.sw_11) {
            if (this.sig_6e) {
                this.route_e_trk_3 = null;
                this.sig_6e = false;
            }
            else {
                if (next_block_3 === Occupied || next_block_3 === Lined) {
                    alert("Cannot Line Route Because Conflict With Next Block");
                    return;
                }
                this.route_e_trk_3 = "W_3_3__|__3_laurel_westEnd";
                this.sig_6e = true;
            }
        }
        else if (this.sw_3 && !this.sw_1 && !this.sw_7) {
            if (this.sig_6e) {
                this.route_e_trk_3 = null;
                this.sig_6e = false;
            }
            else {
                if (next_block_1 === Occupied || next_block_1 === Lined) {
                    alert("Cannot Line Route Because Conflict With Next Block");
                    return;
                }
                this.route_e_trk_3 = "W_3_1__|__1_laurel_westEnd";
                this.sig_6e = true;
            }
        }
        else if (this.sw_3 && this.sw_1 && !this.sw_7 && !this.sw_13) {
            if (this.sig_6e) {
                this.route_e_trk_3 = null;
                this.sig_6e = false;
            }
            else {
                if (next_block_2 === Occupied || next_block_2 === Lined) {
                    alert("Cannot Line Route Because Conflict With Next Block");
                    return;
                }
                this.route_e_trk_3 = "W_3_2__|__2_laurel_westEnd";
                this.sig_6e = true;
            }
        }
        else if (this.sw_3 && this.sw_1 && !this.sw_7 && this.sw_13) {
            if (this.sig_6e) {
                this.route_e_trk_3 = null;
                this.sig_6e = false;
            }
            else {
                if (next_block_4 === Occupied || next_block_4 === Lined) {
                    alert("Cannot Line Route Because Conflict With Next Block");
                    return;
                }
                this.route_e_trk_3 = "W_3_4__|__4_laurel_westEnd";
                this.sig_6e = true;
            }
        }
    }

    click_sig_12e(next_block_1, next_block_2, next_block_3, next_block_4) {
        if (this.sw_3 || this.sw_7) {
            return;
        }
        else if (!this.sw_1 && !this.sw_11) {
            if (this.sig_12e) {
                this.route_e_trk_3 = null;
                this.sig_12e = false;
            }
            else {
                if (next_block_1 === Occupied || next_block_1 === Lined) {
                    alert("Cannot Line Route Because Conflict With Next Block");
                    return;
                }
                this.route_e_trk_3 = "W_1_1__|__1_laurel_westEnd";
                this.sig_12e = true;
            }
        }
        else if (!this.sw_1 && this.sw_11) {
            if (this.sig_12e) {
                this.route_e_trk_3 = null;
                this.sig_12e = false;
            }
            else {
                if (next_block_3 === Occupied || next_block_3 === Lined) {
                    alert("Cannot Line Route Because Conflict With Next Block");
                    return;
                }
                this.route_e_trk_3 = "W_1_3__|__3_laurel_westEnd";
                this.sig_12e = true;
            }
        }
        else if (this.sw_1 && !this.sw_13) {
            if (this.sig_12e) {
                this.route_e_trk_3 = null;
                this.sig_12e = false;
            }
            else {
                if (next_block_2 === Occupied || next_block_2 === Lined) {
                    alert("Cannot Line Route Because Conflict With Next Block");
                    return;
                }
                this.route_e_trk_3 = "W_1_2__|__2_laurel_westEnd";
                this.sig_12e = true;
            }
        }
        else if (this.sw_1 && this.sw_13) {
            if (this.sig_12e) {
                this.route_e_trk_3 = null;
                this.sig_12e = false;
            }
            else {
                if (next_block_4 === Occupied || next_block_4 === Lined) {
                    alert("Cannot Line Route Because Conflict With Next Block");
                    return;
                }
                this.route_e_trk_3 = "W_1_4__|__4_laurel_westEnd";
                this.sig_12e = true;
            }
        }
    }

    click_sig_4e(next_block_1, next_block_2, next_block_3, next_block_4) {
        if (this.sw_1) {
            return;
        }
        else if (!this.sw_7 && !this.sw_13) {
            if (this.sig_4e) {
                this.route_e_trk_2 = null;
                this.sig_4e = false;
            }
            else {
                if (next_block_2 === Occupied || next_block_2 === Lined) {
                    alert("Cannot Line Route Because Conflict With Next Block");
                    return;
                }
                this.route_e_trk_2 = "W_2_2__|__2_laurel_westEnd";
                this.sig_4e = true;
            }
        }   
        else if (!this.sw_7 && this.sw_13) {
            if (this.sig_4e) {
                this.route_e_trk_2 = null;
                this.sig_4e = false;
            }
            else {
                if (next_block_4 === Occupied || next_block_4 === Lined) {
                    alert("Cannot Line Route Because Conflict With Next Block");
                    return;
                }
                this.route_e_trk_2 = "W_2_4__|__4_laurel_westEnd";
                this.sig_4e = true;
            }
        }   
        else if (this.sw_7 && !this.sw_11) {
            if (this.sig_4e) {
                this.route_e_trk_2 = null;
                this.sig_4e = false;
            }
            else {
                if (next_block_1 === Occupied || next_block_1 === Lined) {
                    alert("Cannot Line Route Because Conflict With Next Block");
                    return;
                }
                this.route_e_trk_2 = "W_2_1__|__1_laurel_westEnd";
                this.sig_4e = true;
            }
        } 
        else if (this.sw_7 && this.sw_11) {
            if (this.sig_4e) {
                this.route_e_trk_2 = null;
                this.sig_4e = false;
            }
            else {
                if (next_block_3 === Occupied || next_block_3 === Lined) {
                    alert("Cannot Line Route Because Conflict With Next Block");
                    return;
                }
                this.route_e_trk_2 = "W_2_3__|__3_laurel_westEnd";
                this.sig_4e = true;
            }
        } 
    }

    click_sig_8e(next_block_4) {
        if (this.sw_13) {
            return;
        }
        else {
            if (this.sig_8e) {
                this.route_e_trk_4 = null;
                this.sig_8e = false;
            }
            else {
                if (next_block_4 === Occupied || next_block_4 === Lined) {
                    alert("Cannot Line Route Because Conflict With Next Block");
                    return;
                }
                this.route_e_trk_4 = "W_4_4__|__4_laurel_westEnd";
                this.sig_8e = true;
            }
        }
    }

    /**
     * 
     */
    get_routes() {
        let routes = [
            this.route_e_trk_1, this.route_e_trk_2, this.route_e_trk_3, this.route_e_trk_4,
            this.route_w_trk_1, this.route_w_trk_2, this.route_w_trk_3, this.route_w_trk_4
        ];

        return routes;
    }

    /**
     * @brief Function to throw switch #1 in the interlocking
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
     * @brief Funtion to throw switch #9 in the interlocking
     * 
     * The function sets the status of the switch, whether it is is the normal possition
     * of reversed, (True = Reversed / False = Normal)
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
     * @brief Funtion to throw switch #11 in the interlocking
     * 
     * The function sets the status of the switch, whether it is is the normal possition
     * of reversed, (True = Reversed / False = Normal)
     */
    throw_sw_11() {
        if (this.sw_11 === false) {
            this.sw_11 = true;
        }
        else {
            this.sw_11 = false;
        }
    }

    /**
     * @brief Funtion to throw switch #13 in the interlocking
     * 
     * The function sets the status of the switch, whether it is is the normal possition
     * of reversed, (True = Reversed / False = Normal)
     */
    throw_sw_13() {
        if (this.sw_13 === false) {
            this.sw_13 = true;
        }
        else {
            this.sw_13 = false;
        }
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
            sw_7: this.sw_7,
            sw_9: this.sw_9,
            sw_11: this.sw_11,
            sw_13: this.sw_13,
            routes: this.get_routes()
        }

        return status;
    }
}

export default CTC_Laurel;