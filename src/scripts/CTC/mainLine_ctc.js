/**
 * @file mainLine_ctc.js
 * @author Joey Damico
 * @date September 25, 2019
 * @summary CTC Controller that uses all the other CTC classes and controlls basically the entire game
 */


// Import my custom clock class
import Clock from '../Trains/clock.js';
// Import the block class, that is a piece of track
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


/**
 * Class that runs the entire railroad, and the routes and train movements. Controlls updating all the blocks and trains, and routes. 
 * It really is the engine behind everything in the simulation.
 *   
 * @member game_clock -> Clock class to keep track of time in the simulation  
 *   
 * @member train_list -> An array that holds all the trains that are on the railroad  
 *   
 * @member interlocking_sparrow -> The CTC class for CP Sparrow  
 * @member interlocking_pa -> The CTC class for CP PA  
 * @member interlocking_port -> The CTC class for CP Port  
 * @member interlocking_bc -> The CTC class for CP BC  
 * @member interlocking_ov -> The CTC class for CP OV  
 * @member interlocking_howells -> The CTC class for CP Howells  
 * @member interlocking_hall -> The CTC class for CP Hall  
 * @member interlocking_hudson -> The CTC class for CP Hudson Junction  
 * @member interlocking_valley -> The CTC class for CP Central Valley  
 * @member interlocking_harriman -> The CTC class for CP Harriman  
 * @member interlocking_sterling -> The CTC class for CP Sterling  
 *   
 * @member interlocking_hilburn -> The CTC class for the Hilburn Interlocking  
 * @member interlocking_sf -> The CTC class for the SF Interlocking  
 * @member interlocking_wc -> The CTC class for the WC Interlocking  
 * @member interlocking_ridgewood -> The CTC class for the Ridgewood Junction Interlocking  
 * @member interlocking_suscon -> The CTC class for the Suscon Interlocking  
 * @member interlocking_mill -> The CTC class for the Mill Interlocking  
 * @member interlocking_westSecacus -> The CTC class for the West Secacus Interlocking  
 *   
 * @member interlocking_bt -> The CTC class for the BT Interlocking  
 * @member interlocking_pascack -> THE CTC class for Pascack Junction Interlocking  
 * @member interlocking_hx -> The CTC class for HX Interlocking  
 *   
 * @member blocks_mainLine -> An object that holds all the Block classes for the railroad  
 */
class MainLine_CTC {
    /**
     * constructor()
     * @summary The constructor for the Clock class
     * 
     * @details This will initialize all the member variables when the program is started
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
            block_harriman_sterling_1: new CTC_Block("1_harriman_sterling", 105),

            block_valley_harriman_1: new CTC_Block("1_valley_harriman", 28),
            block_valley_harriman_2: new CTC_Block("2_valley_harriman", 28),
            block_harriman_industrial: new CTC_Block("1_harriman_industrial", 8),

            block_hudson_valley_1: new CTC_Block("1_hudson_valley", 156),
            block_hudson_nysw: new CTC_Block("2_hudson_nysw", 8),

            block_hall_hudson_1: new CTC_Block("1_hall_hudson", 13),
            block_hall_hudson_2: new CTC_Block("2_hall_hudson", 13),
            block_hall_yard: new CTC_Block("2_hall_yard", 8),
            
            block_howells_hall_1: new CTC_Block("1_howells_hall", 132),
            
            block_ov_howells_1: new CTC_Block("1_ov_howells", 59),
            block_ov_howells_2: new CTC_Block("2_ov_howells", 59),

            block_bc_ov_1: new CTC_Block("1_bc_ov", 117),

            block_port_bc_1: new CTC_Block("1_port_bc", 8),
            block_pa_port_1: new CTC_Block("1_pa_port", 8),
            block_pa_bc_2: new CTC_Block("2_pa_bc", 16),
            block_port_yard_west: new CTC_Block("3_port_yard_west", 8),
            block_port_yard_east: new CTC_Block("3_port_yard_east", 8),

            block_buckleys_west: new CTC_Block("4_buckleys_west", 12),
            block_buckleys_east: new CTC_Block("4_buckleys_east", 12),

            block_sparrow_pa_1: new CTC_Block("1_sparrow_pa", 16),
            block_sparrow_pa_2: new CTC_Block("2_sparrow_pa", 16),
            block_sparrow_cripple: new CTC_Block("3_sparrow_cripple", 8),

            block_bingo_sparrow: new CTC_Block("1_bingo_sparrow", 25),

            // Main Line Blocks
            block_westEnd_laurel_1: new CTC_Block("1_westEnd_laurel", 8),
            block_westEnd_laurel_2: new CTC_Block("2_westEnd_laurel", 8),
            block_westEnd_laurel_3: new CTC_Block("3_westEnd_laurel", 8),
            block_westEnd_laurel_4: new CTC_Block("4_westEnd_laurel", 8),

            block_westSecaucus_laurel_1: new CTC_Block("1_laurel_westSecaucus", 8),
            block_westSecaucus_laurel_2: new CTC_Block("2_laurel_westSecaucus", 8),

            block_mill_westSecaucus_1: new CTC_Block("1_mill_westSecaucus", 61),
            block_mill_westSecaucus_2: new CTC_Block("2_mill_westSecaucus", 61),

            block_suscon_mill_1: new CTC_Block("1_suscon_mill", 64),
            block_suscon_mill_2: new CTC_Block("2_suscon_mill", 64),

            block_ridgewood_suscon_1: new CTC_Block("1_ridgewood_suscon", 28),
            block_ridgewood_suscon_2: new CTC_Block("2_ridgewood_suscon", 28),

            block_wc_ridgewood_3: new CTC_Block("3_wc_ridgewood", 33),
            block_wc_ridgewood_1: new CTC_Block("1_wc_ridgewood", 33),
            block_wc_ridgewood_2: new CTC_Block("2_wc_ridgewood", 33),

            block_sf_wc_1: new CTC_Block("1_sf_wc", 69),
            block_sf_wc_2: new CTC_Block("2_sf_wc", 69),

            block_hilburn_sf: new CTC_Block("2_hilburn_sf", 20),

            block_sterling_sf: new CTC_Block("1_sterling_sf", 40),
            block_sterling_hilburn: new CTC_Block("2_sterling_hilburn", 20),

            block_hilburn_yard_west: new CTC_Block("1_hilburn_yard_west", 8),
            block_hilburn_yard_east: new CTC_Block("1_hilburn_yard_east", 8),
            block_wc_yard: new CTC_Block("1_wc_yard", 8),

            // Bergen County Blocks
            block_hx_laurel_1: new CTC_Block("1_hx_laurel", 11),
            block_hx_laurel_2: new CTC_Block("2_hx_laurel", 11),

            block_pascack_hx_1: new CTC_Block("1_pascack_hx", 22),
            block_pascack_hx_2: new CTC_Block("2_pascack_hx", 22),

            block_bt_pascack_1: new CTC_Block("1_bt_pascack", 66),
            block_bt_pascack_2: new CTC_Block("2_bt_pascack", 66),

            block_ridgewood_bt_1: new CTC_Block("1_ridgewood_bt", 61),
            block_ridgewood_bt_2: new CTC_Block("2_ridgewood_bt", 61),

            block_bt_nysw: new CTC_Block("3_bt_nysw", 8),
            block_hx_croxton_1: new CTC_Block("1_hx_croxton", 8),
            block_hx_croxton_2: new CTC_Block("2_hx_croxton", 8)
        };
    }
    // ---- END constructor() ----

    /**
     *  update_route_blocks()
     * @summary Gets all the routes from each interlocking and sets the accoriding blocks
     */
    update_route_blocks() {
        // Reset All The Blocks
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
    // ---- END update_route_blocks() ----
    
    /**
     * updates_trains() 
     * @summary Goes through all the trains in the list and updates their location if they're capable of doing so 
     */
    update_trains() {
        // Loop through all the trains
        for (let i = 0; i < this.train_list.length; i++) {
            if (this.train_list[i].can_update_location()) {
                let new_route = this.get_interlocking_route(this.train_list[i].get_location(), this.train_list[i].get_direction());
                if (new_route === null) {
                    // Do Nothing
                    // Train Cannot Move
                }
                else if (new_route === undefined) {
                    // Clear Previous Block
                    this.get_block_by_name(this.train_list[i].get_location()).set_symbol('');
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
                        this.set_occupy_interlocking(cp_trk, cp);

                        // Occupy the Next Block
                        let block = new_route.substr(10, new_route.size);
                        this.train_list[i].set_block_size(this.get_block_by_name(block).get_size());
                        //this.train_list[i].set_block_size(8);
                        this.train_list[i].update_location(block);
                    }
                    else {
                        let cp_trk = location.substr(0, location.indexOf("_"));
                        let cp = this.train_list[i].get_location();
                        cp = cp.substr(cp.lastIndexOf("_") + 1, cp.size);
                        console.log(cp_trk, cp);
                        this.set_occupy_interlocking(cp_trk, cp);

                        // Occupy the Next Block
                        let block = new_route.substr(10, new_route.size);
                        this.train_list[i].set_block_size(this.get_block_by_name(block).get_size());
                        //this.train_list[i].set_block_size(8);
                        this.train_list[i].update_location(block);
                    }
                }
            }
        }
    }
    // ---- END update_trains() ----

    /**
     * update_interlockings()
     * @summary Goes through to see if each interlocking can have a train clear if it's occupied
     */
    update_interlockings() {
        // Bergen County Line
        this.interlocking_hx.can_clear();
        this.interlocking_pascack.can_clear();
        this.interlocking_bt.can_clear();

        // Main Line
        this.interlocking_laurel.can_clear();
        this.interlocking_westSecaucus.can_clear();
        this.interlocking_mill.can_clear();
        this.interlocking_suscon.can_clear();
        this.interlocking_ridgewood.can_clear();
        this.interlocking_wc.can_clear();
        this.interlocking_sf.can_clear();
        this.interlocking_hilburn.can_clear();

        // Southern Tier Line
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
    // ---- END update_interlockings() ----

    /**
     * get_sparrow()
     * @summary Gets reference to the CP Sparrow Interlocking
     * 
     * @returns Reference to the CP Sparrow Interlocking
     */
    get_sparrow() {
        return this.interlocking_sparrow;
    }
    // ---- END get_sparrow() ----

    /**
     * get_pa()
     * @summary Gets reference to the CP PA Interlocking
     * 
     * @returns Reference to the CP PA Interlocking
     */
    get_pa() {
        return this.interlocking_pa;
    }
    // ---- END get_pa() ----

    /**
     * get_port()
     * @summary Gets reference to the CP Port Interlocking
     * 
     * @returns Reference to the CP Port Interlocking
     */
    get_port() {
        return this.interlocking_port;
    }
    // ---- END get_port() ----

    /**
     * get_bc()
     * @summary Gets reference to the CP BC Interlocking
     * 
     * @returns Reference to the CP BC Interlocking
     */
    get_bc() {
        return this.interlocking_bc;
    }
    // ---- END get_bc() ----

    /**
     * get_ov()
     * @summary Gets reference to the CP OV Interlocking
     * 
     * @returns Reference to the CP OV Interlocking
     */
    get_ov() {
        return this.interlocking_ov;
    }
    // ---- END get_ov() ----

    /**
     * get_howells()
     * @summary Gets reference to the CP Howells Interlocking
     * 
     * @returns Reference to the CP Howells Interlocking
     */
    get_howells() {
        return this.interlocking_howells;
    }
    // ---- END get_howells() ----

    /**
     * get_hall()
     * @summary Gets reference to the CP Hall Interlocking
     * 
     * @returns Reference to the CP Hall Interlocking
     */
    get_hall() {
        return this.interlocking_hall;
    }
    // ---- END get_hall() ----

    /**
     * get_hudson()
     * @summary Gets reference to the CP Hudson Junction Interlocking
     * 
     * @returns Reference to the CP Hudson Junction Interlocking
     */
    get_hudson() {
        return this.interlocking_hudson;
    }
    // ---- END get_hudson() ----

    /**
     * get_valley()
     * @summary Gets reference to the CP Central Valley Interlocking
     * 
     * @returns Reference to the CP Central Valley Interlocking
     */
    get_valley() {
        return this.interlocking_valley;
    }
    // ---- END get_valley() ----

    /**
     * get_harriman()
     * @summary Gets reference to the CP Harriman Interlocking
     * 
     * @returns Reference to the CP Harriman Interlocking
     */
    get_harriman() {
        return this.interlocking_harriman;
    }
    // ---- END get_harriman() ----

    /**
     * get_sterling()
     * @summary Gets reference to the CP Sterling Interlocking
     * 
     * @returns Reference to the CP Sterling Interlocking
     */
    get_sterling() {
        return this.interlocking_sterling;
    }
    // ---- END get_sterling() ----

    /**
     * get_hilburn()
     * @summary Gets reference to the Hilburn Interlocking
     * 
     * @returns Reference to the Hilburn Interlocking
     */
    get_hilburn() {
        return this.interlocking_hilburn;
    }
    // ---- END get_hilburn() ----

    /**
     * get_sf()
     * @summary Gets reference to the SF Interlocking
     * 
     * @returns Reference to the SF Interlocking
     */
    get_sf() {
        return this.interlocking_sf;
    }
    // ---- END get_sf() ----

    /**
     * get_wc()
     * @summary Gets reference to the WC Interlocking
     * 
     * @returns Reference to the WC Interlocking
     */
    get_wc() {
        return this.interlocking_wc;
    }
    // ---- END get_wc() ----

    /**
     * get_ridgewood()
     * @summary Gets reference to the Ridgewood Junction Interlocking
     * 
     * @returns Reference to the Ridgewood Junction Interlocking
     */
    get_ridgewood() {
        return this.interlocking_ridgewood;
    }
    // ---- END get_ridgewood() ----

    /**
     * get_suscon()
     * @summary Gets reference to the Suscon Interlocking
     * 
     * @returns Reference to the Suscon Interlocking
     */
    get_suscon() {
        return this.interlocking_suscon;
    }
    // ---- END get_suscon() ----

    /**
     * get_mill()
     * @summary Gets reference to the Mill Interlocking
     * 
     * @returns Reference to the Mill Interlocking
     */
    get_mill() {
        return this.interlocking_mill;
    }
    // ---- END get_mill() ----

    /**
     * get_westSecaucus()
     * @summary Gets reference to the West Secaucus Interlocking
     * 
     * @returns Reference to the West Secaucus Interlocking
     */
    get_westSecaucus() {
        return this.interlocking_westSecaucus;
    }
    // ---- END get_westSecaucus() ----

    /**
     * get_laurel()
     * @summary Gets reference to the Laurel Interlocking
     * 
     * @returns Reference to the Laurel Interlocking
     */
    get_laurel() {
        return this.interlocking_laurel;
    }
    // ---- END get_laurel() ----

    /**
     * get_bt()
     * @summary Gets reference to the BT Interlocking
     * 
     * @returns Reference to the BT Interlocking
     */
    get_bt() {
        return this.interlocking_bt;
    }
    // ---- END get_bt() ----

    /**
     * get_pascack()
     * @summary Gets reference to the Pascack Interlocking
     * 
     * @returns Reference to the Pascack Interlocking
     */
    get_pascack() {
        return this.interlocking_pascack;
    }
    // ---- END get_pascack() ----

    /**
     * get_hx()
     * @summary Gets reference to the HX Interlocking
     * 
     * @returns Reference to the HX Interlocking
     */
    get_hx() {
        return this.interlocking_hx;
    }
    // ---- END get_hx() ----

    /**
     * add_train()
     * @summary Takes in a new train and adds it to the train_list array
     */
    add_train(new_train) {
        this.train_list.push(new_train);
    }
    // ---- END add_train() ----


    /**
     * occupy_blocks()
     * @summary goes through all the trains and finds their current location and occupys the correct block
     */
    occupy_blocks() {
        for (let i = 0; i < this.train_list.length; i++) {
            let block = this.get_block_by_name(this.train_list[i].get_location());

            if (block === false) {

            }
            else {
                block.set_block_status("Occupied");
                block.set_symbol(this.train_list[i].get_symbol());
            }
        }
    }
    // ---- END occupy_blocks() ----

    /**
     * reset_route_mainLine_blocks()
     * @summary Resets all the blocks that are routed
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
    // ---- END reset_route_mainLine_blocks() ----

    /**
     * get_mainLine_blocks_status()
     * @summary Gets the status of all the bloccks on the Southern Tier Section
     * 
     * @returns An object with the status of each block
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
    // ---- END get_mainLine_blocks_status() ----

    /**
     * get_bergen_blocks_status()
     * @summary Gets the status of all the blocks on the Southern Tier Section
     * 
     * @returns An object with the status of each block
     */
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
    // ---- END get_bergen_block_status() ----

    /**
     * get_tier_block_status()
     * @breif Gets the status of all the blocks on the Southern Tier Section
     * 
     * @returns An object with the status of each block
     */
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
    // ---- END get_tier_block_status() ----

    /**
     * get_bergen_symbols()
     * @summary Gets all the symbols for the blocks on the Bergen County Line Section
     * 
     * @returns An obnject with all the block symbols on the Bergen Line
     */
    get_bergen_symbols() {
        let symbols = {
            symbol_ridgewood_bt_1: this.blocks_mainLine.block_ridgewood_bt_1.get_symbol(),
            symbol_ridgewood_bt_2: this.blocks_mainLine.block_ridgewood_bt_2.get_symbol(),
            symbol_bt_pascack_1: this.blocks_mainLine.block_bt_pascack_1.get_symbol(),
            symbol_bt_pascack_2: this.blocks_mainLine.block_bt_pascack_2.get_symbol(),
            symbol_bt_nysw: this.blocks_mainLine.block_bt_nysw.get_symbol(),
            symbol_pascack_hx_1: this.blocks_mainLine.block_pascack_hx_1.get_symbol(),
            symbol_pascack_hx_2: this.blocks_mainLine.block_pascack_hx_2.get_symbol(),
            symbol_hx_laurel_1: this.blocks_mainLine.block_hx_laurel_1.get_symbol(),
            symbol_hx_laurel_2: this.blocks_mainLine.block_hx_laurel_2.get_symbol(),
            symbol_hx_croxton_1: this.blocks_mainLine.block_hx_croxton_1.get_symbol(),
            symbol_hx_croxton_2: this.blocks_mainLine.block_hx_croxton_2.get_symbol(),
        };

        return symbols;
    }
    // ---- END get_bergen_symbols() ----

    /**
     * get_mainLine_symbol()
     * @summary Gets all the symbols for the blocks on the Main Line Section
     * 
     * @returns An object with all the block symbols on the Main Line Section
     */
    get_mainLine_symbols() {
        let symbols = {
            // First Row
            symbol_sterling_sf_1: this.blocks_mainLine.block_sterling_sf.get_symbol(),
            symbol_sterling_hilburn_2: this.blocks_mainLine.block_sterling_hilburn.get_symbol(),
            symbol_hilburn_sf_2: this.blocks_mainLine.block_hilburn_sf.get_symbol(),
            symbol_hilburn_yardWest: this.blocks_mainLine.block_hilburn_yard_west.get_symbol(),
            symbol_hilburn_yardEast: this.blocks_mainLine.block_hilburn_yard_east.get_symbol(),
            symbol_sf_wc_1: this.blocks_mainLine.block_sf_wc_1.get_symbol(),
            symbol_sf_wc_2: this.blocks_mainLine.block_sf_wc_2.get_symbol(),
            symbol_wc_yard: this.blocks_mainLine.block_wc_yard.get_symbol(),
            symbol_wc_ridgewood_1: this.blocks_mainLine.block_wc_ridgewood_1.get_symbol(),
            symbol_wc_ridgewood_2: this.blocks_mainLine.block_wc_ridgewood_2.get_symbol(),
            symbol_wc_ridgewood_3: this.blocks_mainLine.block_wc_ridgewood_3.get_symbol(),
            // Second Row
            symbol_ridgewood_suscon_1: this.blocks_mainLine.block_ridgewood_suscon_1.get_symbol(),
            symbol_ridgewood_suscon_2: this.blocks_mainLine.block_ridgewood_suscon_2.get_symbol(),
            symbol_suscon_mill_1: this.blocks_mainLine.block_suscon_mill_1.get_symbol(),
            symbol_suscon_mill_2: this.blocks_mainLine.block_suscon_mill_2.get_symbol(),
            symbol_mill_westSecaucus_1: this.blocks_mainLine.block_mill_westSecaucus_1.get_symbol(),
            symbol_mill_westSecaucus_2: this.blocks_mainLine.block_mill_westSecaucus_2.get_symbol(),
            symbol_westSecaucus_laurel_1: this.blocks_mainLine.block_westSecaucus_laurel_1.get_symbol(),
            symbol_westSecaucus_laurel_2: this.blocks_mainLine.block_westSecaucus_laurel_2.get_symbol(),
            symbol_laurel_westEnd_1: this.blocks_mainLine.block_westEnd_laurel_1.get_symbol(),
            symbol_laurel_westEnd_2: this.blocks_mainLine.block_westEnd_laurel_2.get_symbol(),
            symbol_laurel_westEnd_3: this.blocks_mainLine.block_westEnd_laurel_3.get_symbol(),
            symbol_laurel_westEnd_4: this.blocks_mainLine.block_westEnd_laurel_4.get_symbol(),
        };

        return symbols;
    }
    // ---- END get_mainLine_symbols() ----

    /**
     * get_tier_symbols()
     * @summary Gets all the symbols for the blocks on the Southern Tier Section
     * 
     * @returns An object with all the block symbols on the Southern Tier Section
     */
    get_tier_symbols() {
        let symbols = {
            // First Row
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
    // ---- END get_tier_symbols() ----

    /**
     * get_interlocking_route()
     * @summary Takes where a train currently is and gets it's next route
     * 
     * @param key, Is ueed to find the trains curent interlocking
     * @param direction, which way the train is traveling
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
    // ---- END get_interlocking_route() ----

    /**
     * set_occupy_interlocking
     * @summary Takes in what interlocking and the track number, and set that the specific interlocking is occupied on the last track
     * 
     * @param track, the track number in the interlocking to occupy, for some interlocking with only one route doesn't need the track
     * @param name, the name of the interlocking to occupy 
     */
    set_occupy_interlocking(track, name) {
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
    // ---- END set_occupy_interlocking() ----

    /**
     * get_block_by_name()
     * @summary takes in the name of a block, and returns the reference to that specific block
     * 
     * @param name, the name of the block to find
     * 
     * @return reference to the block 
     */
    get_block_by_name(name) {
        var block = name.substring(2, name.size);
        var track = name.substring(0, 1);

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
    // ---- END get_block_by_name() ----
}

export default MainLine_CTC;