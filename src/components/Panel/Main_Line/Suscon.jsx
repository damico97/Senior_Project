/**
 * @file Mill.jsx
 * @author Joey Damico
 * @date September 25, 2019
 * @summary React JSX Component Class that is for Mill Interlocking
 *
 * Extends the React Component Class and is the UI part of the Mill Interlocking,
 * this class controls all the drawings of routes, and also gives a visual reprenstation
 * of that status of the interlocking
 */

import React, { Component } from 'react';
// Import CSS style sheet
import '../../../css/Main_Line/suscon.css';
 
// Import Images
// Switch Images
// Images for a 135 Crossover
import CX_135 from '../../../../public/images/CX_135.png';
import CX_135_Lined_Top from '../../../../public/images/CX_135_Lined_Top.png';
import CX_135_Lined_Bottom from '../../../../public/images/CX_135_Lined_Bottom.png';
import CX_135_Lined_Both from '../../../../public/images/CX_135_Lined_Both.png';
import CX_135_R from '../../../../public/images/CX_135_R.png';
import CX_135_R_Lined from '../../../../public/images/CX_135_R_Lined.png';
import CX_135_Lined_Top_Occupied_Bottom from '../../../../public/images/CX_135_Lined_Top_Occupied_Bottom.png';
import CX_135_Occupied_Top_Lined_Bottom from '../../../../public/images/CX_135_Occupied_Top_Lined_Bottom.png';
import CX_135_Occupied_Top from '../../../../public/images/CX_135_Occupied_Top.png';
import CX_135_Occupied_Bottom from '../../../../public/images/CX_135_Occupied_Bottom.png';
import CX_135_Occupied_Both from '../../../../public/images/CX_135_Occupied_Both.png';
import CX_135_R_Occupied from '../../../../public/images/CX_135_R_Occupied.png';

// Images for a 225 Crossover
import CX_225 from '../../../../public/images/CX_225.png';
import CX_225_Lined_Top from '../../../../public/images/CX_225_Lined_Top.png';
import CX_225_Lined_Bottom from '../../../../public/images/CX_225_Lined_Bottom.png';
import CX_225_Lined_Both from '../../../../public/images/CX_225_Lined_Both.png';
import CX_225_R from '../../../../public/images/CX_225_R.png';
import CX_225_R_Lined from '../../../../public/images/CX_225_R_Lined.png';
import CX_225_Lined_Top_Occupied_Bottom from '../../../../public/images/CX_225_Lined_Top_Occupied_Bottom.png';
import CX_225_Occupied_Top_Lined_Bottom from '../../../../public/images/CX_225_Occupied_Top_Lined_Bottom.png';
import CX_225_Occupied_Top from '../../../../public/images/CX_225_Occupied_Top.png';
import CX_225_Occupied_Bottom from '../../../../public/images/CX_225_Occupied_Bottom.png';
import CX_225_Occupied_Both from '../../../../public/images/CX_225_Occupied_Both.png';
import CX_225_R_Occupied from '../../../../public/images/CX_225_R_Occupied.png';

// Signal Images
import SIG_W from '../../../../public/images/SIG_W.png';
import SIG_W_Clear from '../../../../public/images/SIG_W_Clear.png';
import SIG_W_Stop from '../../../../public/images/SIG_W_Stop.png';
import SIG_E from '../../../../public/images/SIG_E.png';
import SIG_E_Clear from '../../../../public/images/SIG_E_Clear.png';
import SIG_E_Stop from '../../../../public/images/SIG_E_Stop.png';

// Color Constants For Drawing Routes
const Empty = '#999999';
const Green = '#75fa4c';
const Red = '#eb3323';


/**
 * The React JSX Component Class for the Suscon Interlocking
 * 
 * This class is a JSX React Component for the Suscon Interlocking, this will control all the UI for the comonent,
 * and the click events that will pass reference between the backend and the user. This also controls drawing the 
 * route drawings to show if a route(s) is setup in the interlocking or if the route is occupied
 */
class Suscon extends Component {
    /**
     * State
     * @summary Object that holds the state or status information for the component
     * 
     * This object holds all the information for the interlocking that is required to display the routes 
     * correctly
     * 
     * Anything that has "this.props." is passed down from the CTC interlocking class
     */
    state = {
        sw_1: this.props.status.sw_1,
        sw_3: this.props.status.sw_3,
        sw_1_src: CX_225,
        sw_3_src: CX_135,

        sig_2w_src: SIG_W,
        sig_4w_src: SIG_W,
        sig_2e_src: SIG_E,
        sig_4e_src: SIG_E,

        tail_1_e: Empty,
        tail_1_w: Empty,
        tail_2_e: Empty,
        tail_2_w: Empty,

        occupied_trk_1: this.props.status.occupied_trk_1,
        occupied_trk_2: this.props.status.occupied_trk_2,
        route_1: this.props.status.routed_trk_1,
        route_2: this.props.status.routed_trk_2,
        routes: this.props.status.routes
    };

    /**
     * componentWillReceiveProps()
     * @summary Function that updates the state of the component
     * 
     * The data that is being changed is passed down from the CTC classes in the simulation backend
     * 
     * @param nextProps, the new data to set the component state too
     */
    componentWillReceiveProps(nextProps){
        this.setState({
            sw_1: nextProps.status.sw_1, 
            sw_3: nextProps.status.sw_3,
            occupied_trk_1: nextProps.status.occupied_trk_1,
            occupied_trk_2: nextProps.status.occupied_trk_2,
            route_1: nextProps.status.routed_trk_1,
            route_2: nextProps.status.routed_trk_2,
            routes: nextProps.status.routes
        });
    }
    // ---- END componentWillReceiveProps() ----

    /**
     * render()
     * @summary standard React function that draws the interlocking to the screen
     */
    render() { 
        // Clear all the drawings from the interlocking so if a train clears the route is gone
        this.reset_drawings();
        // Set the switch images based off the state of each crossover
        this.set_switch_img();
        // Draw all the current routes in the interlocking
        this.set_route_drawing();
        
        // Returns the HTML to draw the interlocking and it's current state to the screen
        return (
            <div>
                {/* Tags */}
                <div className="suscon_title">SUSCON</div>
                <div className="suscon_milepost">MP 17.5</div>

                {/* West Side Tracks */}
                <div className="suscon_1_west" style={{background: this.state.tail_1_w}}></div>
                <div className="suscon_2_west" style={{background: this.state.tail_2_w}}></div>

                {/* Switches */}
                <div className="suscon_SW_3" onClick={this.props.throw_sw_3}><img src={this.state.sw_3_src}/></div>
                <div className="suscon_SW_1" onClick={this.props.throw_sw_1}><img src={this.state.sw_1_src}/></div>

                {/* East Side Tracks */}
                <div className="suscon_1_east" style={{background: this.state.tail_1_e}}></div>
                <div className="suscon_2_east" style={{background: this.state.tail_2_e}}></div>

                {/* Signals */}
                <div className="suscon_sig_2w" onClick={this.props.click_sig_2w} id="suscon_2w"><img id="suscon_2w_image" src={this.state.sig_2w_src}/></div>
                <div className="suscon_sig_4w" onClick={this.props.click_sig_4w} id="suscon_4w"><img id="suscon_4w_image" src={this.state.sig_4w_src}/></div>
                <div className="suscon_sig_2e" onClick={this.props.click_sig_2e} id="suscon_2e"><img id="suscon_2e_image" src={this.state.sig_2e_src}/></div>
                <div className="suscon_sig_4e" onClick={this.props.click_sig_4e} id="suscon_4e"><img id="suscon_4e_image" src={this.state.sig_4e_src}/></div>
            </div>
        );
    }
    // ---- END render() ----

    /**
     * set_route_drawings()
     * @summary Sets the drawing for the route through the interlocking
     * 
     * Function takes what routes are currently set in the Interlocking class and displays that route in the UI, the drawing
     * will change depending on if the interlocking is occupied or not.
     */
    set_route_drawing() {
        let color_1 = Empty;
        let color_2 = Empty;

        // Set Track Colors
        // If each track has a route
        if (this.state.route_1) {
            color_1 = Green;
        }
        if (this.state.route_2) {
            color_2 = Green;
        }
        // If each track is occupied
        if (this.state.occupied_trk_1) {
            color_1 = Red;
        }
        if (this.state.occupied_trk_2) {
            color_2 = Red;
        }

        // Loop through all the Routes 
        for (let i = 0; i < this.state.routes.length; i++) {
            if (this.state.routes[i] === "W_1_1__|__1_ridgewood_suscon" || this.state.routes[i] === "E_1_1__|__1_suscon_mill") {
                // Tail Tracks
                this.state.tail_1_e = color_1;
                this.state.tail_1_w = color_1;

                // The Route Is Occupied
                if (this.state.occupied_trk_1) {
                    // Routed Track #2
                    if (this.state.route_2) {
                        this.state.sw_1_src = CX_225_Occupied_Top_Lined_Bottom;
                        this.state.sw_3_src = CX_135_Occupied_Top_Lined_Bottom;
                    }
                    // Occupied Track #2
                    else if (this.state.occupied_trk_2) {
                        this.state.sw_1_src = CX_225_Occupied_Both;
                        this.state.sw_3_src = CX_135_Occupied_Both;
                    }
                    // Nothing Track #2
                    else {
                        this.state.sw_1_src = CX_225_Occupied_Top;
                        this.state.sw_3_src = CX_135_Occupied_Top;
                    }

                    // Signals 
                    this.state.sig_2w_src = SIG_W_Stop;
                    this.state.sig_2e_src = SIG_E_Stop;
                }
                // The Route Is NOT Occupied
                else {
                    // Routed Track #2
                    if (this.state.route_2) {
                        this.state.sw_1_src = CX_225_Lined_Both;
                        this.state.sw_3_src = CX_135_Lined_Both;
                    }
                    // Occupied Track #2
                    else if (this.state.occupied_trk_2) {
                        this.state.sw_1_src = CX_225_Lined_Top_Occupied_Bottom;
                        this.state.sw_3_src = CX_135_Lined_Top_Occupied_Bottom;
                    }
                    // Nothing Track #2
                    else {
                        this.state.sw_1_src = CX_225_Lined_Top;
                        this.state.sw_3_src = CX_135_Lined_Top;
                    }

                    // Signals
                    // West Bound Signals
                    if (this.state.routes[i] === "W_1_1__|__1_ridgewood_suscon") {
                        this.state.sig_2w_src = SIG_W_Clear;
                        this.state.sig_2e_src = SIG_E_Stop;
                    }
                    // East Bound Signals 
                    else {
                        this.state.sig_2w_src = SIG_W_Stop;
                        this.state.sig_2e_src = SIG_E_Clear;
                    }
                }
            }
            else if (this.state.routes[i] === "W_2_2__|__2_ridgewood_suscon" || this.state.routes[i] === "E_2_2__|__2_suscon_mill") {
                // Tail Tracks
                this.state.tail_2_e = color_2;
                this.state.tail_2_w = color_2;

                // If The Route Is Occupied
                if (this.state.occupied_trk_2) {
                    // Routed Track #1
                    if (this.state.route_1) {
                        this.state.sw_1_src = CX_225_Lined_Top_Occupied_Bottom;
                        this.state.sw_3_src = CX_135_Lined_Top_Occupied_Bottom;
                    }
                    // Occupied Track #1
                    else if (this.state.occupied_trk_1) {
                        this.state.sw_1_src = CX_225_Occupied_Both;
                        this.state.sw_3_src = CX_135_Occupied_Both;
                    }
                    // Nothing Track #1
                    else {
                        this.state.sw_1_src = CX_225_Occupied_Bottom;
                        this.state.sw_3_src = CX_135_Occupied_Bottom;
                    }

                    // Signals
                    this.state.sig_4w = SIG_W_Stop;
                    this.state.sig_4e = SIG_E_Stop;
                }
                // The Route Is NOT Occupied
                else {
                    // Routed Track #1
                    if (this.state.route_1) {
                        this.state.sw_1_src = CX_225_Lined_Both;
                        this.state.sw_3_src = CX_135_Lined_Both;
                    }
                    // Occupied Track #1
                    else if (this.state.occupied_trk_1) {
                        this.state.sw_1_src = CX_225_Occupied_Top_Lined_Bottom;
                        this.state.sw_3_src = CX_135_Occupied_Top_Lined_Bottom;
                    }
                    // Nothing Track #1
                    else {
                        this.state.sw_1_src = CX_225_Lined_Bottom;
                        this.state.sw_3_src = CX_135_Lined_Bottom;
                    }

                    // Signals
                    // West Bound Signals
                    if (this.state.routes[i] === "W_2_2__|__2_ridgewood_suscon") {
                        this.state.sig_4w_src = SIG_W_Clear;
                        this.state.sig_4e_src = SIG_E_Stop;
                    }
                    // East Bound Signals
                    else {
                        this.state.sig_4w_src = SIG_W_Stop;
                        this.state.sig_4e_src = SIG_E_Clear;
                    }
                }
            }
            else if (this.state.routes[i] === "W_1_2__|__2_ridgewood_suscon") {
                // Tail Tracks
                this.state.tail_1_e = color_1;
                this.state.tail_2_w = color_1;

                // The Route Is Occupied
                if (this.state.occupied_trk_1) {
                    // Switch Images
                    this.state.sw_1_src = CX_225_R_Occupied;
                    this.state.sw_3_src = CX_135_Occupied_Bottom;

                    // Signal Images
                    this.state.sig_2w_src = SIG_W_Stop;
                    this.state.sig_4w_src = SIG_W_Stop;
                    this.state.sig_2e_src = SIG_E_Stop;
                    this.state.sig_4e_src = SIG_E_Stop;
                }
                // The Route Is NOT Occupied
                else {
                    // Switch Images
                    this.state.sw_1_src = CX_225_R_Lined;
                    this.state.sw_3_src = CX_135_Lined_Bottom;

                    // Signal Images
                    this.state.sig_2w_src = SIG_W_Clear;
                    this.state.sig_4w_src = SIG_W_Stop;
                    this.state.sig_2e_src = SIG_E_Stop;
                    this.state.sig_4e_src = SIG_E_Stop;
                }
            }
            else if (this.state.routes[i] === "E_2_1__|__1_suscon_mill") {
                // Tail Tracks
                this.state.tail_1_e = color_2;
                this.state.tail_2_w = color_2;

                // The Route Is Occupied
                if (this.state.occupied_trk_2) {
                    // Switch Images
                    this.state.sw_1_src = CX_225_R_Occupied;
                    this.state.sw_3_src = CX_135_Occupied_Bottom;

                    // Signal Images
                    this.state.sig_2w_src = SIG_W_Stop;
                    this.state.sig_4w_src = SIG_W_Stop;
                    this.state.sig_2e_src = SIG_E_Stop;
                    this.state.sig_4e_src = SIG_E_Stop;
                }
                // The Route Is NOT Occupied
                else {
                    // Switch Images
                    this.state.sw_1_src = CX_225_R_Lined;
                    this.state.sw_3_src = CX_135_Lined_Bottom;

                    // Signal Images
                    this.state.sig_2w_src = SIG_W_Stop;
                    this.state.sig_4w_src = SIG_W_Stop;
                    this.state.sig_2e_src = SIG_E_Stop;
                    this.state.sig_4e_src = SIG_E_Clear;
                }
            }
            else if (this.state.routes[i] === "W_2_1__|__1_ridgewood_suscon") {
                // Tail Tracks
                this.state.tail_2_e = color_2;
                this.state.tail_1_w = color_2;

                // The Route Is Occupied
                if (this.state.occupied_trk_2) {
                    // Switch Images
                    this.state.sw_1_src = CX_225_Occupied_Bottom;
                    this.state.sw_3_src = CX_135_R_Occupied;

                    // Signal Images
                    this.state.sig_2w_src = SIG_W_Stop;
                    this.state.sig_4w_src = SIG_W_Stop;
                    this.state.sig_2e_src = SIG_E_Stop;
                    this.state.sig_4e_src = SIG_E_Stop;
                }
                // The Route Is NOT Occupied
                else {
                    // Switch Images
                    this.state.sw_1_src = CX_225_Lined_Bottom;
                    this.state.sw_3_src = CX_135_R_Lined;

                    // Signal Images
                    this.state.sig_2w_src = SIG_W_Stop;
                    this.state.sig_4w_src = SIG_W_Clear;
                    this.state.sig_2e_src = SIG_E_Stop;
                    this.state.sig_4e_src = SIG_E_Stop;
                }
            }
            else if (this.state.routes[i] === "E_1_2__|__2_suscon_mill") {
                // Tail Tracks
                this.state.tail_2_e = color_1;
                this.state.tail_1_w = color_1;

                // The Route Is Occupied
                if (this.state.occupied_trk_2) {
                    // Switch Images
                    this.state.sw_1_src = CX_225_Occupied_Bottom;
                    this.state.sw_3_src = CX_135_R_Occupied;

                    // Signal Images
                    this.state.sig_2w_src = SIG_W_Stop;
                    this.state.sig_4w_src = SIG_W_Stop;
                    this.state.sig_2e_src = SIG_E_Stop;
                    this.state.sig_4e_src = SIG_E_Stop;
                }
                // The Route Is NOT Occupied
                else {
                    // Switch Images
                    this.state.sw_1_src = CX_225_Lined_Bottom;
                    this.state.sw_3_src = CX_135_R_Lined;

                    // Signal Images
                    this.state.sig_2w_src = SIG_W_Stop;
                    this.state.sig_4w_src = SIG_W_Stop;
                    this.state.sig_2e_src = SIG_E_Clear;
                    this.state.sig_4e_src = SIG_E_Stop;
                }
            }
        }
    }
    // ---- END set_route_drawings() ----

    /**
     * set_switch_img()
     * @summary Changes image sources for the switches, depending on switch status
     * 
     * This function uses the data passed in through status from the CTC classes and 
     * shows if the switches are reversed or not on the screen, by changing the image
     * source files, to the correct .png file respectivly
     */
    set_switch_img = () => {
        // Set SW #1
        // SW #1 Reversed
        if (this.state.sw_1) {
            this.state.sw_1_src = CX_225_R;
        }
        // SW #1 Normal
        else {
            this.state.sw_1_src = CX_225;
        }
        
        // Set SW #3
        // SW #3 Reversed
        if (this.state.sw_3) {
            this.state.sw_3_src = CX_135_R;
        }
        // SW #3 Normal
        else {
            this.state.sw_3_src = CX_135;
        }
    }
    // ---- END set_switch_image() ----


    /**
     * reset_drawings()
     * @summary Function to reset the signal images and track colors
     * 
     * This function is need, because if the player was to remove a route,
     * or when the train clears the interlocking nothing will clear the route
     * the is displaying on the screen, even if it's gone in the backend
     */
    reset_drawings() {
        this.state.tail_1_e = Empty;
        this.state.tail_1_w = Empty;
        this.state.tail_2_e = Empty;
        this.state.tail_2_w = Empty;

        this.state.sig_2e_src = SIG_E;
        this.state.sig_2w_src = SIG_W;
        this.state.sig_4e_src = SIG_E;
        this.state.sig_4w_src = SIG_W;
    }
    //---- END reset_drawings() ----
}
 
// Export the interlocking to be drawn on the screen
export default Suscon;