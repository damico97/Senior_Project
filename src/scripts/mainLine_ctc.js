import Clock from '../../src/scripts/clock';

import RouteStacker from '../scripts/route_stacker.js';

import CTC_Block from '../../src/scripts/ctc_block.js';

import CTC_Hilburn from '../../src/scripts/Interlockings/ctc_hilburn.js';
import CTC_SF from '../../src/scripts/Interlockings/ctc_sf.js';
import CTC_WC from '../../src/scripts/Interlockings/ctc_wc';
import CTC_Ridgewood from '../../src/scripts/Interlockings/ctc_ridgewood.js';
import CTC_Suscon from '../../src/scripts/Interlockings/ctc_suscon.js';
import CTC_Mill from '../../src/scripts/Interlockings/ctc_mill.js';
import CTC_WestSecaucus from '../../src/scripts/Interlockings/ctc_westSecaucus.js';
import CTC_Laurel from '../../src/scripts/Interlockings/ctc_laurel.js';


const Empty = '#999999';
const Route = '#75fa4c';
const Occupied = '#eb3323';


class MainLine_CTC {
    /**
     * 
     */
    constructor() {
        this.game_clock = new Clock();
        this.game_clock.startClock();

        this.train_list = [];

        this.interlocking_hilburn = new CTC_Hilburn();
        this.interlocking_sf = new CTC_SF();
        this.interlocking_wc = new CTC_WC();
        this.interlocking_ridgewood = new CTC_Ridgewood();
        this.interlocking_suscon = new CTC_Suscon();
        this.interlocking_mill = new CTC_Mill();
        this.interlocking_westSecaucus = new CTC_WestSecaucus();
        this.interlocking_laurel = new CTC_Laurel();

        this.blocks_mainLine = {
            // Main Line Blocks
            block_westEnd_laurel_1: new CTC_Block("1_westEnd_laurel"),
            block_westEnd_laurel_2: new CTC_Block("2_westEnd_laurel"),
            block_westEnd_laurel_3: new CTC_Block("3_westEnd_laurel"),
            block_westEnd_laurel_4: new CTC_Block("4_westEnd_laurel"),

            block_westSecaucus_laurel_1: new CTC_Block("1_laurel_westSecaucus"),
            block_westSecaucus_laurel_2: new CTC_Block("2_laurel_westSecaucus"),

            block_mill_westSecaucus_1: new CTC_Block("1_mill_westSecaucus"),
            block_mill_westSecaucus_2: new CTC_Block("2_mill_westSecaucus"),

            block_suscon_mill_1: new CTC_Block("1_suscon_mill"),
            block_suscon_mill_2: new CTC_Block("2_suscon_mill"),

            block_ridgewood_suscon_1: new CTC_Block("1_ridgewood_suscon", 10),
            block_ridgewood_suscon_2: new CTC_Block("2_ridgewood_suscon", 10),

            block_wc_ridgewood_3: new CTC_Block("3_wc_ridgewood"),
            block_wc_ridgewood_1: new CTC_Block("1_wc_ridgewood"),
            block_wc_ridgewood_2: new CTC_Block("2_wc_ridgewood"),

            block_sf_wc_1: new CTC_Block("1_sf_wc"),
            block_sf_wc_2: new CTC_Block("2_sf_wc"),

            block_hilburn_sf: new CTC_Block("2_hilburn_sf"),

            block_sterling_sf: new CTC_Block("1_sterling_sf"),
            block_sterling_hilburn: new CTC_Block("2_sterling_hilburn"),

            block_hilburn_yard_west: new CTC_Block("1_hilburn_yard_west"),
            block_hilburn_yard_east: new CTC_Block("1_hilburn_yard_east"),
            block_wc_yard: new CTC_Block("1_wc_yard"),

            // Bergen County Blocks
            block_hx_laurel_1: new CTC_Block("1_hx_laurel"),
            block_hx_laurel_2: new CTC_Block("2_hx_laurel"),

            block_pascack_hx_1: new CTC_Block("1_pascack_hx"),
            block_pascack_hx_2: new CTC_Block("2_pascack_hx"),

            block_bt_pascack_1: new CTC_Block("1_bt_pascack"),
            block_bt_pascack_2: new CTC_Block("2_bt_pascack"),

            block_ridgewood_bt_1: new CTC_Block("1_ridgewood_bt"),
            block_ridgewood_bt_2: new CTC_Block("2_ridgewood_bt")
        };
    }


    /**
     *  
     */
    update_route_blocks() {
        this.reset_route_mainLine_blocks();

        let routes = this.interlocking_suscon.get_routes();
        routes = routes.concat(this.interlocking_mill.get_routes());
        routes = routes.concat(this.interlocking_westSecaucus.get_routes());
        routes = routes.concat(this.interlocking_ridgewood.get_routes());
        routes = routes.concat(this.interlocking_laurel.get_routes());
        routes = routes.concat(this.interlocking_wc.get_routes());
        routes = routes.concat(this.interlocking_sf.get_routes());
        routes = routes.concat(this.interlocking_hilburn.get_routes());

        for (var i = 0; i < routes.length; i++) {
            if (routes[i] === null) {
                
            }
            else {
                //console.log(routes[i].substr(10, routes[i].size))
                let name = routes[i].substr(routes[i].indexOf("|") + 3, routes[i].size);
                this.get_block_by_name(name).set_block_status("Route");
            }
        }
    }
    
    /**
     *  
     */
    update_trains() {
        for (let i = 0; i < this.train_list.length; i++) {
            if (this.train_list[i].can_update_location()) {
                let new_route = this.get_interlocking_route(this.train_list[i].get_location(), this.train_list[i].get_direction());
                if (new_route === null) {
                    // Do Nothing
                    // Train Cannot Move
                }
                else {
                    this.get_block_by_name(this.train_list[i].get_location()).set_block_status("Empty");
                    let block = new_route.substr(10, new_route.size);
                    this.train_list[i].update_location(block);
                }
            }
        }
    }

    /**
     * 
     */
    get_hilburn() {
        return this.interlocking_hilburn;
    }

    /**
     * 
     */
    get_sf() {
        return this.interlocking_sf;
    }

    /**
     * 
     */
    get_wc() {
        return this.interlocking_wc;
    }

    /**
     * 
     */
    get_ridgewood() {
        return this.interlocking_ridgewood;
    }

    /**
     * 
     */
    get_suscon() {
        return this.interlocking_suscon;
    }

    /**
     * 
     */
    get_mill() {
        return this.interlocking_mill;
    }

    /**
     * 
     */
    get_westSecaucus() {
        return this.interlocking_westSecaucus;
    }

    /**
     * 
     */
    get_laurel() {
        return this.interlocking_laurel;
    }


    /**
     * 
     */
    add_train(new_train) {
        this.train_list.push(new_train);
        console.log(this.train_list);
    }


    /**
     * 
     */
    test_block() {
        for (let i = 0; i < this.train_list.length; i++) {
            let block = this.get_block_by_name(this.train_list[i].get_location());

            if (block === false) {
                //this.get_interlocking_by_name(this.train_list[i].get_location()).set_trk_1_occupied();
            }
            else {
                block.set_block_status("Occupied");
            }
        }
    }

    /**
     * 
     */
    reset_route_mainLine_blocks() {
        this.blocks_mainLine.block_westEnd_laurel_1.reset_block();
        this.blocks_mainLine.block_westEnd_laurel_2.reset_block();
        this.blocks_mainLine.block_westEnd_laurel_3.reset_block();
        this.blocks_mainLine.block_westEnd_laurel_4.reset_block();

        this.blocks_mainLine.block_westSecaucus_laurel_1.reset_block();
        this.blocks_mainLine.block_westSecaucus_laurel_2.reset_block();

        this.blocks_mainLine.block_mill_westSecaucus_1.reset_block();
        this.blocks_mainLine.block_mill_westSecaucus_2.reset_block();

        this.blocks_mainLine.block_suscon_mill_1.reset_block();
        this.blocks_mainLine.block_suscon_mill_2.reset_block();

        this.blocks_mainLine.block_ridgewood_suscon_1.reset_block();
        this.blocks_mainLine.block_ridgewood_suscon_2.reset_block();

        this.blocks_mainLine.block_wc_ridgewood_3.reset_block();
        this.blocks_mainLine.block_wc_ridgewood_1.reset_block();
        this.blocks_mainLine.block_wc_ridgewood_2.reset_block();

        this.blocks_mainLine.block_sf_wc_1.reset_block();
        this.blocks_mainLine.block_sf_wc_2.reset_block();

        this.blocks_mainLine.block_hilburn_sf.reset_block();

        this.blocks_mainLine.block_sterling_sf.reset_block();
        this.blocks_mainLine.block_sterling_hilburn.reset_block();

        this.blocks_mainLine.block_hilburn_yard_west.reset_block();
        this.blocks_mainLine.block_hilburn_yard_east.reset_block();

        this.blocks_mainLine.block_wc_yard.reset_block();

        this.blocks_mainLine.block_hx_laurel_1.reset_block();
        this.blocks_mainLine.block_hx_laurel_2.reset_block();

        this.blocks_mainLine.block_pascack_hx_1.reset_block();
        this.blocks_mainLine.block_pascack_hx_2.reset_block();

        this.blocks_mainLine.block_bt_pascack_1.reset_block();
        this.blocks_mainLine.block_bt_pascack_2.reset_block();

        this.blocks_mainLine.block_ridgewood_bt_1.reset_block();
        this.blocks_mainLine.block_ridgewood_bt_2.reset_block();
    }

    /**
     * 
     */
    get_mainLine_blocks_status() {
        var status = {
            block_westEnd_laurel_1: this.blocks_mainLine.block_westEnd_laurel_1.get_block_status(),
            block_westEnd_laurel_2: this.blocks_mainLine.block_westEnd_laurel_2.get_block_status(),
            block_westEnd_laurel_3: this.blocks_mainLine.block_westEnd_laurel_3.get_block_status(),
            block_westEnd_laurel_4: this.blocks_mainLine.block_westEnd_laurel_4.get_block_status(),

            block_laurel_westSecaucus_1: this.blocks_mainLine.block_westSecaucus_laurel_1.get_block_status(),
            block_laurel_westSecaucus_2: this.blocks_mainLine.block_westSecaucus_laurel_2.get_block_status(),

            block_mill_westSecaucus_1: this.blocks_mainLine.block_mill_westSecaucus_1.get_block_status(),
            block_mill_westSecaucus_2: this.blocks_mainLine.block_mill_westSecaucus_2.get_block_status(),

            block_suscon_mill_1: this.blocks_mainLine.block_suscon_mill_1.get_block_status(),
            block_suscon_mill_2: this.blocks_mainLine.block_suscon_mill_2.get_block_status(),

            block_ridgewood_suscon_1: this.blocks_mainLine.block_ridgewood_suscon_1.get_block_status(),
            block_ridgewood_suscon_2: this.blocks_mainLine.block_ridgewood_suscon_2.get_block_status(),

            block_wc_ridgewood_3: this.blocks_mainLine.block_wc_ridgewood_3.get_block_status(),
            block_wc_ridgewood_1: this.blocks_mainLine.block_wc_ridgewood_1.get_block_status(),
            block_wc_ridgewood_2: this.blocks_mainLine.block_wc_ridgewood_2.get_block_status(),

            block_sf_wc_1: this.blocks_mainLine.block_sf_wc_1.get_block_status(),
            block_sf_wc_2: this.blocks_mainLine.block_sf_wc_2.get_block_status(),

            block_hilburn_sf: this.blocks_mainLine.block_hilburn_sf.get_block_status(),

            block_sterling_sf: this.blocks_mainLine.block_sterling_sf.get_block_status(),
            block_sterling_hilburn: this.blocks_mainLine.block_sterling_hilburn.get_block_status(),

            block_hilburn_yard_west: this.blocks_mainLine.block_hilburn_yard_west.get_block_status(),
            block_hilburn_yard_east: this.blocks_mainLine.block_hilburn_yard_east.get_block_status(),

            block_wc_yard: this.blocks_mainLine.block_wc_yard.get_block_status()
        };

        return status;
    }

    get_bergen_blocks_status() {
        let status = {
            block_hx_laurel_1: this.blocks_mainLine.block_hx_laurel_1.get_block_status(),
            block_hx_laurel_2: this.blocks_mainLine.block_hx_laurel_2.get_block_status(),

            block_pascack_hx_1: this.blocks_mainLine.block_pascack_hx_1.get_block_status(),
            block_pascack_hx_2: this.blocks_mainLine.block_pascack_hx_2.get_block_status(),

            block_bt_pascack_1: this.blocks_mainLine.block_bt_pascack_1.get_block_status(),
            block_bt_pascack_2: this.blocks_mainLine.block_bt_pascack_2.get_block_status(),

            block_ridgewood_bt_1: this.blocks_mainLine.block_ridgewood_bt_1.get_block_status(),
            block_ridgewood_bt_2: this.blocks_mainLine.block_ridgewood_bt_2.get_block_status()
        };

        return status;
    }

    /**
     * 
     * @param {*} name 
     */
    get_interlocking_route(key, direction) {
        let first_index = key.indexOf("_");
        let second_index = key.lastIndexOf("_");
        let track = key.substr(0, first_index);
        let interlocking = key.substr(first_index + 1, second_index - 2);
        //console.log(key);
        console.log(track, interlocking);
        if (interlocking === "hilburn") {
            return this.get_hilburn().get_train_route(direction, track);
        }
        if (interlocking === "sf") {
            return this.get_sf().get_train_route(direction, track);
        }
        if (interlocking === "wc") {
            return this.get_wc().get_train_route(direction, track);
        }
        if (interlocking === "ridgewood") {
            return this.get_ridgewood().get_train_route(direction, track);
        }
        if (interlocking === "suscon") {
            return this.get_suscon().get_train_route(direction, track);
        }
        if (interlocking === "mill") {
            return this.get_mill().get_train_route(direction, track);
        }
        if (interlocking === "westSecaucus") {
            return this.get_westSecaucus().get_train_route(direction, track);
        }
        if (interlocking === "laurel") {
            return this.get_laurel().get_train_route(direction, track);
        }
    }

    /**
     * 
     * @param {*} name 
     */
    get_interlocking_by_name(name) {
        if (name === "mill") {
            return this.get_mill();
        }
    }

    /**
     * 
     * @param {*} name 
     */
    get_block_by_name(name) {
        var block = name.substring(2, name.size);
        var track = name.substring(0, 1);
        
        if (block === "laurel_westEnd") {
            if (track === "1") {
                return this.blocks_mainLine.block_westEnd_laurel_1;
            }
            else if (track === "2") {
                return this.blocks_mainLine.block_westEnd_laurel_2;
            }
            else if (track === "3") {
                return this.blocks_mainLine.block_westEnd_laurel_3;
            }
            else if (track === "4") {
                return this.blocks_mainLine.block_westEnd_laurel_4;
            }
        }
        else if (block === "westSecaucus_laurel") {
            if (track === "1") {
                return this.blocks_mainLine.block_westSecaucus_laurel_1;
            }
            else if (track === "2") {
                return this.blocks_mainLine.block_westSecaucus_laurel_2;
            }
        }
        else if (block === "mill_westSecaucus") {
            if (track === "1") {
                return this.blocks_mainLine.block_mill_westSecaucus_1;
            }
            else if (track === "2") {
                return this.blocks_mainLine.block_mill_westSecaucus_2;
            }
        }
        else if (block === "suscon_mill") {
            if (track === "1") {
                return this.blocks_mainLine.block_suscon_mill_1;
            }
            else if (track === "2") {
                return this.blocks_mainLine.block_suscon_mill_2;
            }
        }
        else if (block === "ridgewood_suscon") {
            if (track === "1") {
                return this.blocks_mainLine.block_ridgewood_suscon_1;
            }
            else if (track === "2") {
                return this.blocks_mainLine.block_ridgewood_suscon_2;
            }
        }
        else if (block === "wc_ridgewood") {
            if (track === "1") {
                return this.blocks_mainLine.block_wc_ridgewood_1;
            }
            else if (track === "2") {
                return this.blocks_mainLine.block_wc_ridgewood_2;
            }
            else if (track === "3") {
                return this.blocks_mainLine.block_wc_ridgewood_3;
            }
        }
        else if (block === "sf_wc") {
            if (track === "1") {
                return this.blocks_mainLine.block_sf_wc_1;
            }
            else if (track === "2") {
                return this.blocks_mainLine.block_sf_wc_2;
            }
        } 
        else if (block === "sterling_sf") {
            return this.blocks_mainLine.block_sterling_sf;
        }
        else if (block === "hilburn_sf") {
            return this.blocks_mainLine.block_hilburn_sf;
        }
        else if (block === "sterling_hilburn") {
            return this.blocks_mainLine.block_sterling_hilburn;
        }
        else if (block === "hilburn_yard_west") {
            return this.blocks_mainLine.block_hilburn_yard_west;
        }
        else if (block === "hilburn_yard_east") {
            return this.blocks_mainLine.block_hilburn_yard_east;
        }
        else if (block === "wc_yard") {
            return this.blocks_mainLine.block_wc_yard;
        }
        else if (block === "hx_laurel") {
            if (track === "1") {
                return this.blocks_mainLine.block_hx_laurel_1;
            }
            else {
                return this.blocks_mainLine.block_hx_laurel_2;
            }
        }
        else if (block === "pascack_hx") {
            if (track === "1") {
                return this.blocks_mainLine.block_pascack_hx_1;
            }
            else {
                return this.blocks_mainLine.block_pascack_hx_2;
            }
        }
        else if (block === "bt_pascack") {
            if (track === "1") {
                return this.blocks_mainLine.block_bt_pascack_1;
            }
            else {
                return this.blocks_mainLine.block_bt_pascack_2;
            }
        }
        else if (block === "ridgewood_bt") {
            if (track === "1") {
                return this.blocks_mainLine.block_ridgewood_bt_1;
            }
            else {
                return this.blocks_mainLine.block_ridgewood_bt_2;
            }
        }
        else {
            return false;
        }
    }
}

export default MainLine_CTC;