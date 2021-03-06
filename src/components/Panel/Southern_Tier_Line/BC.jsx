/**
 * @file BC.jsx
 * @author Joey Damico
 * @date September 25, 2019
 * @summary React JSX Component Class that is for BC Interlocking
 *
 * Extends the React Component Class and is the UI part of the BC Interlocking,
 * this class controls all the drawings of routes, and also gives a visual reprenstation
 * of that status of the interlocking
 */

// Import React Component
import React, { Component } from 'react';
// Import CSS style sheet
import '../../../css/Southern_Tier_Line/bc.css';

// Import Images
// Switch Images
import SW_U_W from '../../../images/SW_U_W_R.png';
import SW_U_W_Lined from '../../../images/SW_U_W_R_Lined.png';
import SW_U_W_Occupied from '../../../images/SW_U_W_R_Occupied.png';
import SW_U_W_R from '../../../images/SW_U_W.png';
import SW_U_W_R_Lined from '../../../images/SW_U_W_Lined.png';
import SW_U_W_R_Occupied from '../../../images/SW_U_W_Occupied.png';

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
 * The React JSX Component Class for the BC Interlocking
 * 
 * This class is a JSX React Component for the BC Interlocking, this will control all the UI for the comonent,
 * and the click events that will pass reference between the backend and the user. This also controls drawing the 
 * route drawings to show if a route(s) is setup in the interlocking or if the route is occupied
 */
class BC extends Component {
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
        // Image File for the switch - Will change depending on route
        sw_1_src: SW_U_W,
        // Image File for the signals - Will change depending on route
        sig_2w_src: SIG_W,
        sig_2e_src: SIG_E,
        sig_4e_src: SIG_E, 
        // Colors for tail tracks - Will change depending on route
        tail_1_w: Empty,
        tail_2_w: Empty,
        tail_e: Empty,
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
            occupied: nextProps.status.occupied,
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
                <div className="bc_title">CP BC</div>
                <div className="bc_milepost">MP 86.7SR</div>
                {/* West Side Tail Tracks */}
                <div className="bc_1_west" style={{background: this.state.tail_1_w}}></div>
                <div className="bc_2_west" style={{background: this.state.tail_2_w}}></div>
                {/* Switches */}
                <div className="bc_SW_1" onClick={this.props.throw_sw_1}><img src={this.state.sw_1_src} alt="Switch #1"/></div>
                {/* East Side Tail Tracks */}
                <div className="bc_east" style={{background: this.state.tail_e}}></div>
                {/* Signals */}
                <div className="bc_sig_2e" onClick={this.props.click_sig_2e}><img src={this.state.sig_2e_src} alt="Signal 2e"/></div>
                <div className="bc_sig_4e" onClick={this.props.click_sig_4e}><img src={this.state.sig_4e_src} alt="Signal 4e"/></div>
                <div className="bc_sig_2w" onClick={this.props.click_sig_2w}><img src={this.state.sig_2w_src} alt="Signal 2w"/></div>
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
    set_route_drawing() {
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
            if (this.state.routes[i] === "W_1_1__|__1_port_bc" || this.state.routes[i] === "E_1_1__|__1_bc_ov") {
                // Tail Tracks
                this.setState({tail_e: color});
                this.setState({tail_1_w: color});

                // The Route Is Occupied
                if (this.state.occupied) {
                    // Switches
                    this.setState({sw_1_src: SW_U_W_Occupied});

                    // Signals
                    this.setState({sig_2w_src: SIG_W_Stop});
                    this.setState({sig_2e_src: SIG_E_Stop});
                }
                // The Route Is NOT Occupied
                else {
                    // Switches
                    this.setState({sw_1_src: SW_U_W_Lined});

                    // Signals
                    // West Bound Signals
                    if (this.state.routes[i] === "W_1_1__|__1_port_bc") {
                        this.setState({sig_2w_src: SIG_W_Clear});
                        this.setState({sig_2e_src: SIG_E_Stop});
                        this.setState({sig_4e_src: SIG_E_Stop});
                    }
                    // East Bound Signals
                    else {
                        this.setState({sig_2w_src: SIG_W_Stop});
                        this.setState({sig_2e_src: SIG_E_Clear});
                        this.setState({sig_4e_src: SIG_E_Stop});
                    }
                }
            }
            else if (this.state.routes[i] === "W_1_2__|__2_pa_bc" || this.state.routes[i] === "E_2_1__|__1_bc_ov") {
                // Tail Tracks
                this.setState({tail_e: color});
                this.setState({tail_2_w: color});

                // The Route Is Occupied
                if (this.state.occupied) {
                    // Switches
                    this.setState({sw_1_src: SW_U_W_R_Occupied});

                    // Signals
                    this.setState({sig_2w_src: SIG_W_Stop});
                    this.setState({sig_2e_src: SIG_E_Stop});
                    this.setState({sig_4e_src: SIG_E_Stop});
                }
                // The Route Is NOT Occupied
                else {
                    // Switches
                    this.setState({sw_1_src: SW_U_W_R_Lined});

                    // Signals
                    // West Bound Signals
                    if (this.state.routes[i] === "W_1_2__|__2_pa_bc") {
                        this.setState({sig_2w_src: SIG_W_Clear});
                        this.setState({sig_2e_src: SIG_E_Stop});
                        this.setState({sig_4e_src: SIG_E_Stop});
                    }
                    // East Bound Signals
                    else {
                        this.setState({sig_2w_src: SIG_W_Stop});
                        this.setState({sig_2e_src: SIG_E_Stop});
                        this.setState({sig_4e_src: SIG_E_Clear});
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
            this.setState({sw_1_src: SW_U_W_R});
        }
        // SW #1 Normal
        else {
            this.setState({sw_1_src: SW_U_W});
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
    reset_drawings() {
        this.setState({tail_1_w: Empty});
        this.setState({tail_2_w: Empty});
        this.setState({tail_e: Empty});

        this.setState({sig_2e_src: SIG_E});
        this.setState({sig_4e_src: SIG_E});
        this.setState({sig_2w_src: SIG_W});
    }
    //---- END reset_drawings() ----
}
 
// Export the interlocking to be drawn on the screen
export default BC;