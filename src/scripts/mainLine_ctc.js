import CTC_Block from '../../src/scripts/ctc_block.js';
import CTC_Suscon from '../../src/scripts/ctc_suscon.js';

const Empty = '#999999';
const Route = '#75fa4c';
const Occupied = '#eb3323';

class MainLine_CTC {
    constructor() {
        this.interlocking_suscon = new CTC_Suscon();

        this.block_westSecaucus_mill_1 = new CTC_Block("1_westSecaucus_mill", Route);
        this.block_westSecaucus_mill_2 = new CTC_Block("2_westSecaucus_mill", Occupied);
    }

    get_suscon() {
        return this.interlocking_suscon;
    }

    get_block_1_status() {
        return this.block_westSecaucus_mill_1.get_block_status();
    }

    get_block_2_status() {
        return this.block_westSecaucus_mill_2.get_block_status();
    }
}

export default MainLine_CTC;