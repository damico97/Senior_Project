import Clock from '../Trains/clock.js';

import CTC_Block from '../CTC/ctc_block.js';

// Southern Tier Interlockings
import CTC_Sparrow from '../Interlockings/Southern_Tier/ctc_sparrow.js';
import CTC_PA from '../Interlockings/Southern_Tier/ctc_pa.js';
import CTC_Port from '../Interlockings/Southern_Tier/ctc_port.js';
import CTC_BC from '../Interlockings/Southern_Tier/ctc_bc.js';
import CTC_OV from '../Interlockings/Southern_Tier/ctc_ov.js';
import CTC_Howells from '../Interlockings/Southern_Tier/ctc_howells.js';
import CTC_Hall from '../Interlockings/Southern_Tier/ctc_hall.js';
import CTC_Hudson from '../Interlockings/Southern_Tier/ctc_hudson.js';
import CTC_Valley from '../Interlockings/Southern_Tier/ctc_valley.js';
import CTC_Harriman from '../Interlockings/Southern_Tier/ctc_harriman.js';
import CTC_Sterling from '../Interlockings/Southern_Tier/ctc_sterling.js';

// Main Line Interlockings
import CTC_Hilburn from '../Interlockings/Main_Line/ctc_hilburn.js';
import CTC_SF from '../Interlockings/Main_Line/ctc_sf.js';
import CTC_WC from '../Interlockings/Main_Line/ctc_wc';
import CTC_Ridgewood from '../Interlockings/Main_Line/ctc_ridgewood.js';
import CTC_Suscon from '../Interlockings/Main_Line/ctc_suscon.js';
import CTC_Mill from '../Interlockings/Main_Line/ctc_mill.js';
import CTC_WestSecaucus from '../Interlockings/Main_Line/ctc_westSecaucus.js';
import CTC_Laurel from '../Interlockings/Main_Line/ctc_laurel.js';

// Bergen County Interlockings
import CTC_BT from '../Interlockings/Bergen_Line/ctc_bt.js';
import CTC_Pascack from '../Interlockings/Bergen_Line/ctc_pascack.js';
import CTC_HX from '../Interlockings/Bergen_Line/ctc_hx.js';

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

        this.interlocking_sparrow = new CTC_Sparrow();
        this.interlocking_pa = new CTC_PA();
        this.interlocking_port = new CTC_Port();
        this.interlocking_bc = new CTC_BC();
        this.interlocking_ov = new CTC_OV();
        this.interlocking_howells = new CTC_Howells();
        this.interlocking_hall = new CTC_Hall();
        this.interlocking_hudson = new CTC_Hudson();
        this.interlocking_valley = new CTC_Valley();
        this.interlocking_harriman = new CTC_Harriman();
        this.interlocking_sterling = new CTC_Sterling();

        this.interlocking_hilburn = new CTC_Hilburn();
        this.interlocking_sf = new CTC_SF();
        this.interlocking_wc = new CTC_WC();
        this.interlocking_ridgewood = new CTC_Ridgewood();
        this.interlocking_suscon = new CTC_Suscon();
        this.interlocking_mill = new CTC_Mill();
        this.interlocking_westSecaucus = new CTC_WestSecaucus();
        this.interlocking_laurel = new CTC_Laurel();

        this.interlocking_bt = new CTC_BT();
        this.interlocking_pascack = new CTC_Pascack();
        this.interlocking_hx = new CTC_HX();

        this.blocks_mainLine = {
            // Southern Tier Blocks
            block_harriman_sterling_1: new CTC_Block("1_harriman_sterling"),

            block_valley_harriman_1: new CTC_Block("1_valley_harriman"),
            block_valley_harriman_2: new CTC_Block("2_valley_harriman"),
            block_harriman_industrial: new CTC_Block("1_harriman_industrial"),

            block_hudson_valley_1: new CTC_Block("1_hudson_valley"),
            block_hudson_nysw: new CTC_Block("2_hudson_nysw"),

            block_hall_hudson_1: new CTC_Block("1_hall_hudson"),
            block_hall_hudson_2: new CTC_Block("2_hall_hudson"),
            block_hall_yard: new CTC_Block("2_hall_yard"),
            
            block_howells_hall_1: new CTC_Block("1_howells_hall"),
            
            block_ov_howells_1: new CTC_Block("1_ov_howells"),
            block_ov_howells_2: new CTC_Block("2_ov_howells"),

            block_bc_ov_1: new CTC_Block("1_bc_ov"),

            block_port_bc_1: new CTC_Block("1_port_bc"),
            block_pa_port_1: new CTC_Block("1_pa_port"),
            block_pa_bc_2: new CTC_Block("2_pa_bc"),
            block_port_yard_west: new CTC_Block("3_port_yard_west"),
            block_port_yard_east: new CTC_Block("3_port_yard_east"),

            block_buckleys_west: new CTC_Block("4_buckleys_west"),
            block_buckleys_east: new CTC_Block("4_buckleys_east"),

            block_sparrow_pa_1: new CTC_Block("1_sparrow_pa"),
            block_sparrow_pa_2: new CTC_Block("2_sparrow_pa"),
            block_sparrow_cripple: new CTC_Block("3_sparrow_cripple"),

            block_bingo_sparrow: new CTC_Block("1_bingo_sparrow"),

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
            block_ridgewood_bt_2: new CTC_Block("2_ridgewood_bt"),

            block_bt_nysw: new CTC_Block("3_bt_nysw"),
            block_hx_croxton_1: new CTC_Block("1_hx_croxton"),
            block_hx_croxton_2: new CTC_Block("2_hx_croxton")
        };
    }


    /**
     *  
     */
    update_route_blocks() {
        this.reset_route_mainLine_blocks();

        let routes = [];

        // Add Main Line Routes
        routes = routes.concat(this.interlocking_laurel.get_routes());
        routes = routes.concat(this.interlocking_westSecaucus.get_routes());
        routes = routes.concat(this.interlocking_mill.get_routes());
        routes = routes.concat(this.interlocking_suscon.get_routes());
        routes = routes.concat(this.interlocking_ridgewood.get_routes());
        routes = routes.concat(this.interlocking_wc.get_routes());
        routes = routes.concat(this.interlocking_sf.get_routes());
        routes = routes.concat(this.interlocking_hilburn.get_routes());

        // Add Bergen County Routes
        routes = routes.concat(this.interlocking_hx.get_routes());
        routes = routes.concat(this.interlocking_pascack.get_routes());
        routes = routes.concat(this.interlocking_bt.get_routes());

        // Add Southern Tier Routes 
        routes = routes.concat(this.interlocking_sterling.get_routes());
        routes = routes.concat(this.interlocking_harriman.get_routes());
        routes = routes.concat(this.interlocking_valley.get_routes());
        routes = routes.concat(this.interlocking_hudson.get_routes());
        routes = routes.concat(this.interlocking_hall.get_routes());
        routes = routes.concat(this.interlocking_howells.get_routes());
        routes = routes.concat(this.interlocking_ov.get_routes());
        routes = routes.concat(this.interlocking_bc.get_routes());
        routes = routes.concat(this.interlocking_port.get_routes());
        routes = routes.concat(this.interlocking_pa.get_routes());
        routes = routes.concat(this.interlocking_sparrow.get_routes());

        // Update all the blocks that have routes 
        for (var i = 0; i < routes.length; i++) {
            if (routes[i] === null) {
                // Do Nothing 
            }
            else {
                let name = routes[i].substr(routes[i].indexOf("|") + 3, routes[i].size);
                this.get_block_by_name(name).set_block_status("Route");
            }
        }
    }
    
    /**
     *  
     */
    update_trains() {
        console.log(this.train_list);
        for (let i = 0; i < this.train_list.length; i++) {
            if (this.train_list[i].can_update_location()) {
                let new_route = this.get_interlocking_route(this.train_list[i].get_location(), this.train_list[i].get_direction());
                if (new_route === null) {
                    // Do Nothing
                    // Train Cannot Move
                }
                else if (new_route === undefined) {
                    // Clear Previous Block
                    this.get_block_by_name(this.train_list[i].get_location()).set_block_status("Empty");

                    this.train_list.splice(i, 1);
                    break;
                }
                else {
                    // Clear Previous Block
                    this.get_block_by_name(this.train_list[i].get_location()).set_symbol('');
                    this.get_block_by_name(this.train_list[i].get_location()).set_block_status("Empty");
                    
                    // Get the last location
                    let location = this.train_list[i].get_location();

                    // Occupy the Interlockings
                    if (this.train_list[i].get_direction() === "WEST") {
                        let cp_trk = location.substr(0, location.indexOf("_"));
                        let cp = this.train_list[i].get_location();
                        cp = cp.substr(cp.indexOf("_") + 1, cp.lastIndexOf("_") - 2);
                        //console.log(cp_trk, cp);
                        this.set_occupy_interlocking(true, cp_trk, cp);

                        // Occupy the Next Block
                        let block = new_route.substr(10, new_route.size);
                        this.train_list[i].update_location(block);
                    }
                    else {
                        let cp_trk = location.substr(0, location.indexOf("_"));
                        let cp = this.train_list[i].get_location();
                        cp = cp.substr(cp.lastIndexOf("_") + 1, cp.size);
                        console.log(cp_trk, cp);
                        this.set_occupy_interlocking(true, cp_trk, cp);

                        // Occupy the Next Block
                        let block = new_route.substr(10, new_route.size);
                        this.train_list[i].update_location(block);
                    }
                }
            }
        }
    }

    /**
     * 
     */
    update_interlockings() {
        this.interlocking_hx.can_clear();
        this.interlocking_pascack.can_clear();
        this.interlocking_bt.can_clear();

        this.interlocking_laurel.can_clear();
        this.interlocking_westSecaucus.can_clear();
        this.interlocking_mill.can_clear();
        this.interlocking_suscon.can_clear();
        this.interlocking_ridgewood.can_clear();
        this.interlocking_wc.can_clear();
        this.interlocking_sf.can_clear();
        this.interlocking_hilburn.can_clear();

        this.interlocking_sterling.can_clear();
        this.interlocking_harriman.can_clear();
        this.interlocking_valley.can_clear();
        this.interlocking_hudson.can_clear();
        this.interlocking_hall.can_clear();
        this.interlocking_howells.can_clear();
        this.interlocking_ov.can_clear();
        this.interlocking_bc.can_clear();
        this.interlocking_port.can_clear();
        this.interlocking_pa.can_clear();
        this.interlocking_sparrow.can_clear();
    }

    /**
     * 
     */
    get_sparrow() {
        return this.interlocking_sparrow;
    }

    /**
     * 
     */
    get_pa() {
        return this.interlocking_pa;
    }

    /**
     * 
     */
    get_port() {
        return this.interlocking_port;
    }

    /**
     * 
     */
    get_bc() {
        return this.interlocking_bc;
    }

    /**
     * 
     */
    get_ov() {
        return this.interlocking_ov;
    }

    /**
     * 
     */
    get_howells() {
        return this.interlocking_howells;
    }

    /**
     * 
     */
    get_hall() {
        return this.interlocking_hall;
    }

    /**
     * 
     */
    get_hudson() {
        return this.interlocking_hudson;
    }

    /**
     * 
     */
    get_valley() {
        return this.interlocking_valley;
    }

    /**
     *
     */
    get_harriman() {
        return this.interlocking_harriman;
    }

    /**
     * 
     */
    get_sterling() {
        return this.interlocking_sterling;
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
    get_bt() {
        return this.interlocking_bt;
    }

    /**
     * 
     */
    get_pascack() {
        return this.interlocking_pascack;
    }

    /**
     * 
     */
    get_hx() {
        return this.interlocking_hx;
    }


    /**
     * 
     */
    add_train(new_train) {
        this.train_list.push(new_train);
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
                block.set_symbol(this.train_list[i].get_symbol());
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

        // Bergen County Line
        this.blocks_mainLine.block_hx_laurel_1.reset_block();
        this.blocks_mainLine.block_hx_laurel_2.reset_block();

        this.blocks_mainLine.block_pascack_hx_1.reset_block();
        this.blocks_mainLine.block_pascack_hx_2.reset_block();

        this.blocks_mainLine.block_bt_pascack_1.reset_block();
        this.blocks_mainLine.block_bt_pascack_2.reset_block();

        this.blocks_mainLine.block_ridgewood_bt_1.reset_block();
        this.blocks_mainLine.block_ridgewood_bt_2.reset_block();

        this.blocks_mainLine.block_bt_nysw.reset_block();
        this.blocks_mainLine.block_hx_croxton_1.reset_block();
        this.blocks_mainLine.block_hx_croxton_2.reset_block();

        // Southern Tier Line
        this.blocks_mainLine.block_harriman_sterling_1.reset_block();

        this.blocks_mainLine.block_valley_harriman_1.reset_block();
        this.blocks_mainLine.block_valley_harriman_2.reset_block();
        this.blocks_mainLine.block_harriman_industrial.reset_block();

        this.blocks_mainLine.block_hudson_valley_1.reset_block();
        this.blocks_mainLine.block_hudson_nysw.reset_block();

        this.blocks_mainLine.block_hall_hudson_1.reset_block();
        this.blocks_mainLine.block_hall_hudson_2.reset_block();
        this.blocks_mainLine.block_hall_yard.reset_block();
            
        this.blocks_mainLine.block_howells_hall_1.reset_block();
            
        this.blocks_mainLine.block_ov_howells_1.reset_block();
        this.blocks_mainLine.block_ov_howells_2.reset_block();

        this.blocks_mainLine.block_bc_ov_1.reset_block();

        this.blocks_mainLine.block_port_bc_1.reset_block();
        this.blocks_mainLine.block_pa_port_1.reset_block();
        this.blocks_mainLine.block_pa_bc_2.reset_block();
        this.blocks_mainLine.block_port_yard_west.reset_block();
        this.blocks_mainLine.block_port_yard_east.reset_block();

        this.blocks_mainLine.block_buckleys_west.reset_block();
        this.blocks_mainLine.block_buckleys_east.reset_block();

        this.blocks_mainLine.block_sparrow_pa_1.reset_block();
        this.blocks_mainLine.block_sparrow_pa_2.reset_block();
        this.blocks_mainLine.block_sparrow_cripple.reset_block();

        this.blocks_mainLine.block_bingo_sparrow.reset_block();
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
            block_ridgewood_bt_2: this.blocks_mainLine.block_ridgewood_bt_2.get_block_status(),

            block_bt_nysw: this.blocks_mainLine.block_bt_nysw.get_block_status(),
            block_hx_croxton_1: this.blocks_mainLine.block_hx_croxton_1.get_block_status(),
            block_hx_croxton_2: this.blocks_mainLine.block_hx_croxton_2.get_block_status()
        };

        return status;
    }

    get_tier_block_status() {
        let status = {
            // Block Status
            block_harriman_sterling_1: this.blocks_mainLine.block_harriman_sterling_1.get_block_status(),

            block_valley_harriman_1: this.blocks_mainLine.block_valley_harriman_1.get_block_status(),
            block_valley_harriman_2: this.blocks_mainLine.block_valley_harriman_2.get_block_status(),
            block_harriman_industrial: this.blocks_mainLine.block_harriman_industrial.get_block_status(),

            block_hudson_valley_1: this.blocks_mainLine.block_hudson_valley_1.get_block_status(),
            block_hudson_nysw: this.blocks_mainLine.block_hudson_nysw.get_block_status(),

            block_hall_hudson_1: this.blocks_mainLine.block_hall_hudson_1.get_block_status(),
            block_hall_hudson_2: this.blocks_mainLine.block_hall_hudson_2.get_block_status(),
            block_hall_yard: this.blocks_mainLine.block_hall_yard.get_block_status(),
            
            block_howells_hall_1: this.blocks_mainLine.block_howells_hall_1.get_block_status(),
            
            block_ov_howells_1: this.blocks_mainLine.block_ov_howells_1.get_block_status(),
            block_ov_howells_2: this.blocks_mainLine.block_ov_howells_2.get_block_status(),

            block_bc_ov_1: this.blocks_mainLine.block_bc_ov_1.get_block_status(),

            block_port_bc_1: this.blocks_mainLine.block_port_bc_1.get_block_status(),
            block_pa_port_1: this.blocks_mainLine.block_pa_port_1.get_block_status(),
            block_pa_bc_2: this.blocks_mainLine.block_pa_bc_2.get_block_status(),
            block_port_yard_west: this.blocks_mainLine.block_port_yard_west.get_block_status(),
            block_port_yard_east: this.blocks_mainLine.block_port_yard_east.get_block_status(),

            block_buckleys_west: this.blocks_mainLine.block_buckleys_west.get_block_status(),
            block_buckleys_east: this.blocks_mainLine.block_buckleys_east.get_block_status(),

            block_sparrow_pa_1: this.blocks_mainLine.block_sparrow_pa_1.get_block_status(),
            block_sparrow_pa_2: this.blocks_mainLine.block_sparrow_pa_2.get_block_status(),
            block_sparrow_cripple: this.blocks_mainLine.block_sparrow_cripple.get_block_status(),

            block_bingo_sparrow: this.blocks_mainLine.block_bingo_sparrow.get_block_status()
        };

        return status;
    }

    get_tier_symbols() {
        let symbols = {
            // Train Symbols
            symbol_bingo_sparrow: this.blocks_mainLine.block_bingo_sparrow.get_symbol(),
            symbol_sparrow_pa_1: this.blocks_mainLine.block_sparrow_pa_1.get_symbol(),
            symbol_sparrow_pa_2: this.blocks_mainLine.block_sparrow_pa_2.get_symbol(),
            symbol_pa_port_1: this.blocks_mainLine.block_pa_port_1.get_symbol(),
            symbol_port_bc_1: this.blocks_mainLine.block_port_bc_1.get_symbol(),
            symbol_pa_bc_2: this.blocks_mainLine.block_pa_bc_2.get_symbol(),
            symbol_port_yardEast: this.blocks_mainLine.block_port_yard_east.get_symbol(),
            symbol_bc_ov: this.blocks_mainLine.block_bc_ov_1.get_symbol(),
            symbol_ov_howells_1: this.blocks_mainLine.block_ov_howells_1.get_symbol(),
            symbol_ov_howells_2: this.blocks_mainLine.block_ov_howells_2.get_symbol(),
            // Second Row
            symbol_howells_hall: this.blocks_mainLine.block_howells_hall_1.get_symbol(),
            symbol_hall_yard: this.blocks_mainLine.block_hall_yard.get_symbol(),
            symbol_hall_hudson_1: this.blocks_mainLine.block_hall_hudson_1.get_symbol(),
            symbol_hall_hudson_2: this.blocks_mainLine.block_hall_hudson_2.get_symbol(),
            symbol_hudson_valley: this.blocks_mainLine.block_hudson_valley_1.get_symbol(),
            symbol_hudson_nysw: this.blocks_mainLine.block_hudson_nysw.get_symbol(),
            symbol_valley_harriman_1: this.blocks_mainLine.block_valley_harriman_1.get_symbol(),
            symbol_valley_harriman_2: this.blocks_mainLine.block_valley_harriman_2.get_symbol(),
            // Third Row
            symbol_harriman_sterling: this.blocks_mainLine.block_harriman_sterling_1.get_symbol(),
            symbol_harriman_industrial: this.blocks_mainLine.block_harriman_industrial.get_symbol(),
        };

        return symbols;
    }

    /**
     * 
     * @param {*} name 
     */
    get_interlocking_route(key, direction) {
        let first_index = key.indexOf("_");
        let second_index = key.lastIndexOf("_");
        let track;
        let interlocking;

        if (direction === "WEST") {
            track = key.substr(0, first_index);
            interlocking = key.substr(first_index + 1, second_index - 2);
        }
        else {
            track = key.substr(0, first_index);
            interlocking = key.substr(second_index + 1, key.size);
        }
        console.log(key);
        console.log(track, interlocking);

        // Southern Tier Line
        if (interlocking === "sparrow") {
            return this.get_sparrow().get_train_route(direction, track);
        }
        if (interlocking === "pa") {
            return this.get_pa().get_train_route(direction, track);
        }
        if (interlocking === "port") {
            return this.get_port().get_train_route(direction, track);
        }
        if (interlocking === "bc") {
            return this.get_bc().get_train_route(direction, track);
        }
        if (interlocking === "ov") {
            return this.get_ov().get_train_route(direction, track);
        }
        if (interlocking === "howells") {
            return this.get_howells().get_train_route(direction, track);
        }
        if (interlocking === "hall") {
            return this.get_hall().get_train_route(direction, track);
        }
        if (interlocking === "hudson") {
            return this.get_hudson().get_train_route(direction, track);
        }
        if (interlocking === "valley") {
            return this.get_valley().get_train_route(direction, track);
        }
        if (interlocking === "harriman") {
            return this.get_harriman().get_train_route(direction, track);
        }
        if (interlocking === "sterling") {
            return this.get_sterling().get_train_route(direction, track);
        }

        // Main Line
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

        // Bergen County Line
        if (interlocking === "bt") {
            return this.get_bt().get_train_route(direction, track);
        }
        if (interlocking === "pascack") {
            return this.get_pascack().get_train_route(direction, track);
        }
        if (interlocking === "hx") {
            return this.get_hx().get_train_route(direction, track);
        }
    }

    /**
     * 
     * @param {*} name 
     */
    set_occupy_interlocking(occupy, track, name) {
        if (name === "hx") {
            if (track === "2") {
                this.get_hx().set_trk_2_occupied(true);
            }
            else {
                this.get_hx().set_trk_1_occupied(true);
            }
        }
        if (name === "pascack") {
            if (track === "1") {
                this.get_pascack().set_trk_1_occupied(true);
            }
            else {
                this.get_pascack().set_trk_2_occupied(true);
            }
        }
        if (name === "bt") {
            if (track === "2") {
                this.get_bt().set_trk_2_occupied(true);
            }
            else {
                this.get_bt().set_trk_1_occupied(true);
            }
        }
        if (name === "laurel") {
            if (track === "1") {
                this.get_laurel().set_trk_1_occupied(true);
            }
            else if (track === "2") {
                this.get_laurel().set_trk_2_occupied(true);
            }
            else if (track === "3") {
                this.get_laurel().set_trk_3_occupied(true);
            }
            else {
                this.get_laurel().set_trk_4_occupied(true);
            }
        }
        if (name === "westSecaucus") {
            this.get_westSecaucus().set_occupied(true);
        }
        if (name === "mill") {
            if (track === "1") {
                this.get_mill().set_trk_1_occupied(true);
            }
            else {
                this.get_mill().set_trk_2_occupied(true);
            }
        }
        if (name === "suscon") {
            if (track === "1") {
                this.get_suscon().set_trk_1_occupied(true);
            }
            else {
                this.get_suscon().set_trk_2_occupied(true);
            }
        }
        if (name === "ridgewood") {
            if (track === "1" || track === "4") {
                this.get_ridgewood().set_trk_1_occupied(true);
            }
            else if (track === "2") {
                this.get_ridgewood().set_trk_2_occupied(true);
            }
            else {
                this.get_ridgewood().set_trk_3_occupied(true);
            }
        }
        if (name === "wc") {
            if (track === "2") {
                this.get_wc().set_trk_2_occupied(true);
            }
            else {
                this.get_wc().set_trk_1_occupied(true);
            }
        }
        if (name === "sf") {
            if (track === "1") {
                this.get_sf().set_trk_1_occupied(true);
            }
            else {
                this.get_sf().set_trk_2_occupied(true);
            }
        }
        if (name === "hilburn") {
            this.get_hilburn().set_occupied(true);
        }
        
        if (name === "sterling") {
            this.get_sterling().set_occupied(true);
        }
        if (name === "harriman") {
            this.get_harriman().set_occupied(true);
        }
        if (name === "valley") {
            this.get_valley().set_occupied(true);
        }
        if (name === "hudson") {
            this.get_hudson().set_occupied(true);
        }
        if (name === "hall") {
            if (track === "1") {
                this.get_hall().set_trk_1_occupied(true);
            }
            else {
                this.get_hall().set_trk_2_occupied(true);
            }
        }
        if (name === "howells") {
            this.get_howells().set_occupied(true);
        }
        if (name === "ov") {
            this.get_ov().set_occupied(true);
        }
        if (name === "bc") {
            this.get_bc().set_occupied(true);
        }
        if (name === "port") {
            this.get_port().set_occupied(true);
        }
        if (name === "pa") {
            if (track === "1") {
                this.get_pa().set_trk_1_occupied(true);
            }
            else {
                this.get_pa().set_trk_2_occupied(true);
            }
        }
        if (name === "sparrow") {
            this.get_sparrow().set_occupied(true);
        }
    }

    /**
     * 
     * @param {*} name 
     */
    get_block_by_name(name) {
        var block = name.substring(2, name.size);
        var track = name.substring(0, 1);
        //console.log(block, track)

        if (block === "harriman_sterling") {
            return this.blocks_mainLine.block_harriman_sterling_1;
        }
        else if (block === "valley_harriman") {
            if (track === "1") {
                return this.blocks_mainLine.block_valley_harriman_1;
            }
            else {
                return this.blocks_mainLine.block_valley_harriman_2;
            }
        }
        else if (block === "industrial_harriman") {
            return this.blocks_mainLine.block_harriman_industrial;
        }
        else if (block === "hudson_valley") {
            return this.blocks_mainLine.block_hudson_valley_1;
        }
        else if (block === "hudson_nysw") {
            return this.blocks_mainLine.block_hudson_nysw;
        }
        else if (block === "hall_hudson"){
            if (track === "1") {
                return this.blocks_mainLine.block_hall_hudson_1;
            }
            else {
                return this.blocks_mainLine.block_hall_hudson_2;
            }
        }
        else if (block === "yard_hall") {
            return this.blocks_mainLine.block_hall_yard;
        }
        else if (block === "howells_hall") {
            return this.blocks_mainLine.block_howells_hall_1;
        }
        else if (block === "ov_howells") {
            if (track === "1") {
                return this.blocks_mainLine.block_ov_howells_1;
            }
            else {
                return this.blocks_mainLine.block_ov_howells_2;
            }
        }
        else if (block === "bc_ov") {
            return this.blocks_mainLine.block_bc_ov_1;
        }
        else if (block === "port_bc") {
            return this.blocks_mainLine.block_port_bc_1;
        }
        else if (block === "pa_port") {
            return this.blocks_mainLine.block_pa_port_1;
        }
        else if (block === "pa_bc") {
            return this.blocks_mainLine.block_pa_bc_2;
        }
        else if (block === "port_yardWest") {
            return this.blocks_mainLine.block_port_yard_west;
        }
        else if (block === "yardEast_port") {
            return this.blocks_mainLine.block_port_yard_east;
        }
        else if (block === "sparrow_pa") {
            if (track === "1") {
                return this.blocks_mainLine.block_sparrow_pa_1;
            }
            else {
                return this.blocks_mainLine.block_sparrow_pa_2;
            }
        }
        else if (block === "sparrow_cripple") {
            return this.blocks_mainLine.block_sparrow_cripple;
        }
        else if (block === "bingo_sparrow") {
            return this.blocks_mainLine.block_bingo_sparrow;
        }
        else if (block === "laurel_westEnd") {
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
            if (track === "2") {
                return this.blocks_mainLine.block_westSecaucus_laurel_1;
            }
            else if (track === "4") {
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
        else if (block === "hilburn_yardWest") {
            return this.blocks_mainLine.block_hilburn_yard_west;
        }
        else if (block === "yardHilburn_sf") {
            return this.blocks_mainLine.block_hilburn_yard_east;
        }
        else if (block === "yard_wc") {
            return this.blocks_mainLine.block_wc_yard;
        }
        else if (block === "hx_laurel") {
            if (track === "3") {
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
            if (track === "1" || track === "3") {
                return this.blocks_mainLine.block_ridgewood_bt_1;
            }
            else {
                return this.blocks_mainLine.block_ridgewood_bt_2;
            }
        }
        else if (block === "bt_nysw") {
            return this.blocks_mainLine.block_bt_nysw;
        }
        else if (block === "hx_croxton") {
            if (track === "1" || track === "4") {
                return this.blocks_mainLine.block_hx_croxton_1;
            }
            else {
                return this.blocks_mainLine.block_hx_croxton_2;
            }
        }
        else {
            return false;
        }
    }
}

export default MainLine_CTC;