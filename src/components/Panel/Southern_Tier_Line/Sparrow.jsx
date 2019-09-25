/**
 * @file Sparrow.jsx
 * @author Joey Damico
 * @date September 25, 2019
 * @summary React JSX Component Class that is for Sparrow Interlocking
 *
 * Extends the React Component Class and is the UI part of the Sparrow Interlocking,
 * this class controls all the drawings of routes, and also gives a visual reprenstation
 * of that status of the interlocking
 */

// Import React Component
import React, { Component } from 'react';
// Import CSS style sheet
import '../../../css/Southern_Tier_Line/sparrow.css';

// Import Images
// Switch Images
import SW_U_E from '../../../images/SW_U_E.png';
import SW_U_E_Lined from '../../../images/SW_U_E_Lined.png';
import SW_U_E_Occupied from '../../../images/SW_U_E_Occupied.png';
import SW_U_E_R from '../../../images/SW_U_E_R.png';
import SW_U_E_R_Lined from '../../../images/SW_U_E_R_Lined.png';
import SW_U_E_R_Occupied from '../../../images/SW_U_E_R_Occupied.png';
import SW_D_E from '../../../images/SW_D_E.png';
import SW_D_E_Lined from '../../../images/SW_D_E_Lined.png';
import SW_D_E_Occupied from '../../../images/SW_D_E_Occupied.png';
import SW_D_E_R from '../../../images/SW_D_E_R.png';
import SW_D_E_R_Lined from '../../../images/SW_D_E_R_Lined.png';
import SW_D_E_R_Occupied from '../../../images/SW_D_E_R_Occupied.png';

// Signal Images
import SIG_W from '../../../images/SIG_W.png';
import SIG_W_Clear from '../../../images/SIG_W_Clear.png';
import SIG_W_Stop from '../../../images/SIG_W_Stop.png';
import SIG_E from '../../../images/SIG_E.png';
import SIG_E_Clear from '../../../images/SIG_E_Clear.png';
import SIG_E_Stop from '../../../images/SIG_E_Stop.png';

// Color Constants For Drawing Routes
const Empty = '#999999';
const Green = '#75fa4c';
const Red = '#eb3323';


/**
 * The React JSX Component Class for the Sparrow Interlocking
 * 
 * This class is a JSX React Component for the Sparrow Interlocking, this will control all the UI for the component,
 * and the click events that will pass reference between the backend and the user. This also controls drawing the 
 * route drawings to show if a route(s) is setup in the interlocking or if the route is occupied
 */
class Sparrow extends Component {
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
        // Switch Status
        sw_1: this.props.status.sw_1,
        sw_3: this.props.status.sw_3,
        // Image File for the switch - Will change depending on route
        sw_1_src: SW_U_E,
        sw_3_src: SW_D_E,
        // Image File for the signals - Will change depending on route
        sig_2w1_src: SIG_W,
        sig_2w2_src: SIG_W,
        sig_2w3_src: SIG_W,
        sig_2e_src: SIG_E,
        // Colors for tail tracks - Will change depending on route
        tail_w: Empty,
        tail_1_e: Empty,
        tail_2_e: Empty,
        tail_cripple: Empty,
        // Information For Interlocking Routes
        occupied: this.props.status.occupied,
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
            occupied: nextProps.status.occupied,
            routes: nextProps.status.routes
        });
    }

    /**
     * render()
     * @summary standard React function that draws the interlocking to the screen
     */
    render() { 
        // Clear all the drawings from the interlocking so if a train clears the route is gone
        this.reset_drawing();
        // Set the switch images based off the state of each crossover
        this.set_switch_img();
        // Draw all the current routes in the interlocking
        this.set_route_drawings();

        // Returns the HTML to draw the interlocking and it's current state to the screen
        return (  
            <div>
                {/* Tags */}
                <div className="sparrow_title">CP SPARROW</div>
                <div className="sparrow_milepost">MP 89.9SR</div>
                {/* West Side Tail Tracks */}
                <div className="sparrow_west" style={{background: this.state.tail_w}}></div>
                {/* Switches */}
                <div className="sparrow_SW_3" onClick={this.props.throw_sw_3}><img src={this.state.sw_3_src}/></div>
                <div className="sparrow_SW_1" onClick={this.props.throw_sw_1}><img src={this.state.sw_1_src}/></div>
                {/* East Side Tail Tracks */}
                <div className="sparrow_cripple" style={{background: this.state.tail_cripple}}></div>
                <div className="sparrow_1_east" style={{background: this.state.tail_1_e}}></div>
                <div className="sparrow_2_east" style={{background: this.state.tail_2_e}}></div>
                {/* Signals */}
                <div className="sparrow_sig_2w-2" onClick={this.props.click_sig_2w_2}><img src={this.state.sig_2w2_src}/></div>
                <div className="sparrow_sig_2w-1" onClick={this.props.click_sig_2w_1}><img src={this.state.sig_2w1_src}/></div>
                <div className="sparrow_sig_2w-3" onClick={this.props.click_sig_2w_3}><img src={this.state.sig_2w3_src}/></div>
                <div className="sparrow_sig_2e" onClick={this.props.click_sig_2e}><img src={this.state.sig_2e_src}/></div>
            </div>
        );
    }
    // ---- END render() ----

    /**
     * @summary Sets the drawing for the route through the interlocking
     * 
     * Function takes what routes are currently set in the Interlocking class and displays that route in the UI, the drawing
     * will change depending on if the interlocking is occupied or not
     */
    set_route_drawings() {
        // Setting the color of the tracks depending on if the interlocking in occupied or not
        let color = null;
        if (this.state.occupied) {
            color = Red;
        }
        else {
            color = Green;
        }

        // Loop through all the routes
        for (let i = 0; i < this.state.routes.length; i++) {
            if (this.state.routes[i] === "W_1_1__|__1_bingo_sparrow" || this.state.routes[i] === "E_1_1__|__1_sparrow_pa") {
                // Tail Tracks
                this.state.tail_1_e = color;
                this.state.tail_w = color;

                // The Route Is Occupied
                if (this.state.occupied) {
                    // Switches
                    this.state.sw_1_src = SW_U_E_Occupied;
                    this.state.sw_3_src = SW_D_E_Occupied;

                    // Signals
                    this.state.sig_2e_src = SIG_E_Stop;
                    this.state.sig_2w1_src = SIG_W_Stop;
                    this.state.sig_2w2_src = SIG_W_Stop;
                    this.state.sig_2w3_src = SIG_W_Stop;
                }
                // The Route Is NOT Occupied
                else {
                    // Switches
                    this.state.sw_1_src = SW_U_E_Lined;
                    this.state.sw_3_src = SW_D_E_Lined;

                    // Signals
                    // West Bound
                    if (this.state.routes[i] === "W_1_1__|__1_bingo_sparrow") {
                        this.state.sig_2e_src = SIG_E_Stop;
                        this.state.sig_2w1_src = SIG_W_Clear;
                        this.state.sig_2w2_src = SIG_W_Stop;
                        this.state.sig_2w3_src = SIG_W_Stop;
                    }
                    // East Bound
                    else {
                        this.state.sig_2e_src = SIG_E_Clear;
                        this.state.sig_2w1_src = SIG_W_Stop;
                        this.state.sig_2w2_src = SIG_W_Stop;
                        this.state.sig_2w3_src = SIG_W_Stop;
                    }
                }
            }
            else if (this.state.routes[i] === "W_2_1__|__1_bingo_sparrow" || this.state.routes[i] === "E_1_2__|__2_sparrow_pa") {
                // Tail Tracks
                this.state.tail_2_e = color;
                this.state.tail_w = color;

                // The Route Is Occupied
                if (this.state.occupied) {
                    // Switches
                    this.state.sw_3_src = SW_D_E_R_Occupied;

                    // Signals
                    this.state.sig_2e_src = SIG_E_Stop;
                    this.state.sig_2w1_src = SIG_W_Stop;
                    this.state.sig_2w2_src = SIG_W_Stop;
                    this.state.sig_2w3_src = SIG_W_Stop;
                }
                // The Route Is NOT Occupied
                else {
                    // Switches
                    this.state.sw_3_src = SW_D_E_R_Lined;

                    // Signals
                    // West Bound
                    if (this.state.routes[i] === "W_2_1__|__1_bingo_sparrow") {
                        this.state.sig_2e_src = SIG_E_Stop;
                        this.state.sig_2w1_src = SIG_W_Stop;
                        this.state.sig_2w2_src = SIG_W_Stop;
                        this.state.sig_2w3_src = SIG_W_Clear;
                    }
                    // East Bound
                    else {
                        this.state.sig_2e_src = SIG_E_Clear;
                        this.state.sig_2w1_src = SIG_W_Stop;
                        this.state.sig_2w2_src = SIG_W_Stop;
                        this.state.sig_2w3_src = SIG_W_Stop;
                    }
                }
            }
            else if (this.state.routes[i] === "W_3_1__|__1_bingo_sparrow" || this.state.routes[i] === "E_1_3__|__0_sparrow_cripple") {
                // Tail Tracks
                this.state.tail_cripple = color;
                this.state.tail_w = color;

                // The Route Is Occupied
                if (this.state.occupied) {
                    // Switches
                    this.state.sw_1_src = SW_U_E_R_Occupied;
                    this.state.sw_3_src = SW_D_E_Occupied;

                    // Signals
                    this.state.sig_2e_src = SIG_E_Stop;
                    this.state.sig_2w1_src = SIG_W_Stop;
                    this.state.sig_2w2_src = SIG_W_Stop;
                    this.state.sig_2w3_src = SIG_W_Stop;
                }
                // The Route Is NOT Occupied
                else {
                    // Switches
                    this.state.sw_1_src = SW_U_E_R_Lined;
                    this.state.sw_3_src = SW_D_E_Lined;

                    // Signals
                    // West Bound
                    if (this.state.routes[i] === "W_3_1__|__1_bingo_sparrow") {
                        this.state.sig_2e_src = SIG_E_Stop;
                        this.state.sig_2w1_src = SIG_W_Stop;
                        this.state.sig_2w2_src = SIG_W_Clear;
                        this.state.sig_2w3_src = SIG_W_Stop;
                    }
                    // East Bound
                    else {
                        this.state.sig_2e_src = SIG_E_Clear;
                        this.state.sig_2w1_src = SIG_W_Stop;
                        this.state.sig_2w2_src = SIG_W_Stop;
                        this.state.sig_2w3_src = SIG_W_Stop;
                    }
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
    set_switch_img() {
        // Set SW #1
        // SW #1 Reversed
        if (this.state.sw_1) {
            this.state.sw_1_src = SW_U_E_R;
        }
        // SW #1 Normal
        else {
            this.state.sw_1_src = SW_U_E;
        }

        // Set SW #3
        // SW #3 Reversed
        if (this.state.sw_3) {
            this.state.sw_3_src = SW_D_E_R;
        }
        // SW #3 Normal
        else {
            this.state.sw_3_src = SW_D_E;
        }
    }
    // ---- END set_switch_img() ----

    /**
     * @summary Function to reset the signal images and track colors
     * 
     * This function is need, because if the player was to remove a route,
     * or when the train clears the interlocking nothing will clear the route
     * the is displaying on the screen, even if it's gone in the backend
     */
    reset_drawing() {
        this.state.tail_1_e = Empty;
        this.state.tail_2_e = Empty;
        this.state.tail_cripple = Empty;
        this.state.tail_w = Empty;

        this.state.sig_2e_src = SIG_E;
        this.state.sig_2w1_src = SIG_W;
        this.state.sig_2w2_src = SIG_W;
        this.state.sig_2w3_src = SIG_W;
    }
    //---- END reset_drawings() ----
}
 
// Export the interlocking to be drawn on the screen
export default Sparrow;