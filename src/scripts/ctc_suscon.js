class CTC_Suscon {
    constructor() {
        this.sw_1 = false;
        this.sw_3 = false;
    }

    throw_sw_1() {
        if (this.sw_1 === false) {
            this.sw_1 = true;
        }
        else {
            this.sw_1 = false;
        }

        //console.log(this.sw_1, this.sw_3);
    }

    get_status_sw_1() {
        if (this.sw_1 === true) {
            return true;
        }
        else {
            return false;
        }
    }

    throw_sw_3() {
        if (this.sw_3 === false) {
            this.sw_3 = true;
        }
        else {
            this.sw_3 = false;
        }

        //console.log(this.sw_1, this.sw_3);
    }

    get_status_sw_3() {
        if (this.sw_3 === true) {
            return true;
        }
        else {
            return false;
        }
    }

    get_interlocking_status() {
        var status = {
            sw_1: this.get_status_sw_1(),
            sw_3: this.get_status_sw_3()
        };

        return status;
    }
}

export default CTC_Suscon;