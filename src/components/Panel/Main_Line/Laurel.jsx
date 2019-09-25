/**
 * @file Laurel.jsx
 * @author Joey Damico
 * @date September 25, 2019
 * @summary React JSX Component Class that is for Laurel Interlocking
 *
 * Extends the React Component Class and is the UI part of the Laurel Interlocking,
 * this class controls all the drawings of routes, and also gives a visual reprenstation
 * of that status of the interlocking
 */

// Import React Component
import React, { Component } from 'react';
// Import CSS Style Sheet
import '../../../css/Main_Line/laurel.css';

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
 * The React JSX Component Class for the Laurel Interlocking
 * 
 * This class is a JSX React Component for the Laurel Interlocking, this will control all the UI for the comonent,
 * and the click events that will pass reference between the backend and the user. This also controls drawing the 
 * route drawings to show if a route(s) is setup in the interlocking or if the route is occupied
 */
class Laurel extends Component {
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
        sw_7: this.props.status.sw_7,
        sw_9: this.props.status.sw_9,
        sw_11: this.props.status.sw_11,
        sw_13: this.props.status.sw_13,
        // Image File for the switch - Will change depending on route
        sw_1_src: CX_135,
        sw_3_src: CX_135,
        sw_7_src: CX_225,
        sw_11_src: CX_225,
        sw_13_src: CX_135,
        // Image File for the signals - Will change depending on route
        sig_2w_src: SIG_W,
        sig_4w_src: SIG_W,
        sig_8w_src: SIG_W,
        sig_10w_src: SIG_W,
        sig_4e_src: SIG_E,
        sig_6e_src: SIG_E,
        sig_8e_src: SIG_E,
        sig_12e_src: SIG_E,
        // Colors for tail tracks - Will change depending on route
        tail_3_e: Empty,
        tail_1_e: Empty,
        tail_2_e: Empty,
        tail_4_e: Empty,
        tail_3_center: Empty,
        tail_3_w: Empty,
        tail_1_w: Empty,
        tail_2_w: Empty,
        tail_4_w: Empty,
        // Information For Interlocking Routes
        routes: this.props.status.routes,
        routed_1: this.props.status.routed_1,
        routed_2: this.props.status.routed_2,
        routed_3: this.props.status.routed_3,
        routed_4: this.props.status.routed_4,
        occupied_1: this.props.status.occupied_1,
        occupied_2: this.props.status.occupied_2,
        occupied_3: this.props.status.occupied_3,
        occupied_4: this.props.status.occupied_4,
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
            sw_7: nextProps.status.sw_7,
            sw_11: nextProps.status.sw_11,
            sw_13: nextProps.status.sw_13,

            routed_1: nextProps.status.routed_1,
            routed_2: nextProps.status.routed_2,
            routed_3: nextProps.status.routed_3,
            routed_4: nextProps.status.routed_4,
            occupied_1: nextProps.status.occupied_1,
            occupied_2: nextProps.status.occupied_2,
            occupied_3: nextProps.status.occupied_3,
            occupied_4: nextProps.status.occupied_4,
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
        this.set_route_drawings();

        // Returns the HTML to draw the interlocking and it's current state to the screen
        return (  
            <div>
                {/* Tags */}
                <div className="laurel_title">LAUREL</div>
                <div className="laurel_milepost">MP 4.3</div>

                {/* West Side Tail Tracks */}
                <div className="b_laurel_3_west" style={{background: this.state.tail_3_w}}></div>
                <div className="b_laurel_2_west" style={{background: this.state.tail_1_w}}></div>
                <div className="m_laurel_2_west" style={{background: this.state.tail_2_w}}></div>
                <div className="m_laurel_4_west" style={{background: this.state.tail_4_w}}></div>

                {/* Switches */}
                <div className="laurel_SW_1" onClick={this.props.throw_sw_1}><img src={this.state.sw_1_src}/></div>
                <div className="laurel_SW_3" onClick={this.props.throw_sw_3}><img src={this.state.sw_3_src}/></div>
                <div className="laurel_SW_7" onClick={this.props.throw_sw_7}><img src={this.state.sw_7_src}/></div>
                <div className="laurel_SW_11" onClick={this.props.throw_sw_11}><img src={this.state.sw_11_src}/></div>
                <div className="laurel_SW_13" onClick={this.props.throw_sw_13}><img src={this.state.sw_13_src}/></div>

                {/* Center Tail Tracks */}
                <div className="m_laurel_3_center" style={{background: this.state.tail_3_center}}></div>

                {/* East Side Tail Tracks */}
                <div className="m_laurel_3_east" style={{background: this.state.tail_3_e}}></div>
                <div className="m_laurel_1_east" style={{background: this.state.tail_1_e}}></div>
                <div className="m_laurel_2_east" style={{background: this.state.tail_2_e}}></div>
                <div className="m_laurel_4_east" style={{background: this.state.tail_4_e}}></div>


                {/* Signals */}
                {/* West Signals */}
                <div className="laurel_sig_10w" onClick={this.props.click_sig_10w}><img src={this.state.sig_10w_src}/></div>
                <div className="laurel_sig_2w" onClick={this.props.click_sig_2w}><img src={this.state.sig_2w_src}/></div>
                <div className="laurel_sig_4w" onClick={this.props.click_sig_4w}><img src={this.state.sig_4w_src}/></div>
                <div className="laurel_sig_8w" onClick={this.props.click_sig_8w}><img src={this.state.sig_8w_src}/></div>
                {/* East Signals */}
                <div className="laurel_sig_4e" onClick={this.props.click_sig_4e}><img src={this.state.sig_4e_src}/></div>
                <div className="laurel_sig_6e" onClick={this.props.click_sig_6e}><img src={this.state.sig_6e_src}/></div>
                <div className="laurel_sig_8e" onClick={this.props.click_sig_8e}><img src={this.state.sig_8e_src}/></div>
                <div className="laurel_sig_12e" onClick={this.props.click_sig_12e}><img src={this.state.sig_12e_src}/></div>
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
     * 
     * There are a lot of possible drawings for this interlocking, which is why the function is so long, I'm not sure if there
     * is a quicker or faster way to accomplish what this function does
     */
    set_route_drawings() {
        let color_1 = Empty;
        let color_2 = Empty;
        let color_3 = Empty;
        let color_4 = Empty;

        // Set Track Colors 
        // If each track has a route
        if (this.state.routed_1) {
            color_1 = Green;
        }
        if (this.state.routed_2) {
            color_2 = Green;
        }
        if (this.state.routed_3) {
            color_3 = Green;
        }
        if (this.state.routed_4) {
            color_4 = Green;
        }
        // If each track is occupied
        if (this.state.occupied_1) {
            color_1 = Red;
        }
        if (this.state.occupied_2) {
            color_2 = Red;
        }
        if (this.state.occupied_3) {
            color_3 = Red;
        }
        if (this.state.occupied_4) {
            color_4 = Red;
        }

        // Loop Through All The Routes
        for (let i = 0; i < this.state.routes.length; i++) {
            if (this.state.routes[i] === "W_1_1__|__2_hx_laurel" || this.state.routes[i] === "E_1_1__|__1_laurel_westEnd") {
                // Setting Tail Track Color
                this.state.tail_1_e = color_1;
                this.state.tail_1_w = color_1;

                if (this.state.occupied_1) {
                    // Switches
                    // Crossovers that could change based off of Track #2
                    if (this.state.routes.includes("W_2_2__|__2_westSecaucus_laurel") || this.state.routes.includes("E_2_2__|__2_laurel_westEnd")) {
                        // Track 2 Routed
                        if (this.state.routed_2) {
                            this.state.sw_1_src = CX_135_Occupied_Top_Lined_Bottom;
                            this.state.sw_7_src = CX_225_Occupied_Top_Lined_Bottom;
                        }
                        // Track 2 Occupied
                        else if (this.state.occupied_2) {
                            this.state.sw_1_src = CX_135_Occupied_Both;
                            this.state.sw_7_src = CX_225_Occupied_Both;
                        }
                    }
                    // Nothing On Track 2
                    else {
                        this.state.sw_1_src = CX_135_Occupied_Top;
                        this.state.sw_7_src = CX_225_Occupied_Top;
                    }
                    // Crossovers that could changed based off of Track #3
                    if (this.state.routes.includes("W_3_3__|__3_hx_laurel") || this.state.routes.includes("E_3_3__|__3_laurel_westEnd")) {
                        // Track 3 Routed
                        if (this.state.routed_3) {
                            this.state.sw_3_src = CX_135_Lined_Top_Occupied_Bottom;
                            this.state.sw_11_src = CX_225_Lined_Top_Occupied_Bottom;
                        }
                        // Track 3 Occupied
                        else if (this.state.occupied_3) {
                            this.state.sw_3_src = CX_135_Occupied_Both;
                            this.state.sw_11_src = CX_225_Occupied_Both;
                        }
                    }
                    // Nothing on Track 3
                    else {
                        this.state.sw_3_src = CX_135_Occupied_Bottom;
                        this.state.sw_11_src = CX_225_Occupied_Bottom;
                    }

                    // Signals
                    this.state.sig_2w_src = SIG_W_Stop;
                    this.state.sig_12e_src = SIG_E_Stop;
                }
                else {
                    // Switches
                    // Crossovers that could change based off of Track #2
                    if (this.state.routes.includes("W_2_2__|__2_westSecaucus_laurel") || this.state.routes.includes("E_2_2__|__2_laurel_westEnd") || this.state.routes.includes("E_2_4__|__4_laurel_westEnd")) {
                        // Track 2 Routed
                        if (this.state.routed_2) {
                            this.state.sw_1_src = CX_135_Lined_Both;
                            this.state.sw_7_src = CX_225_Lined_Both;
                        }
                        // Track 2 Occupied
                        else if (this.state.occupied_2) {
                            this.state.sw_1_src = CX_135_Lined_Top_Occupied_Bottom;
                            this.state.sw_7_src = CX_225_Lined_Top_Occupied_Bottom;
                        }
                    }
                    else if (this.state.routes.includes("W_4_2__|__2_westSecaucus_laurel")) {
                        // Track 2 Routed
                        if (this.state.routed_4) {
                            this.state.sw_1_src = CX_135_Lined_Both;
                            this.state.sw_7_src = CX_225_Lined_Both;
                        }
                        // Track 2 Occupied
                        else if (this.state.occupied_4) {
                            this.state.sw_1_src = CX_135_Lined_Top_Occupied_Bottom;
                            this.state.sw_7_src = CX_225_Lined_Top_Occupied_Bottom;
                        }
                    }
                    // Nothing On Track 2
                    else {
                        this.state.sw_1_src = CX_135_Lined_Top;
                        this.state.sw_7_src = CX_225_Lined_Top;
                    }
                    // Crossovers that could changed based off of Track #3
                    if (this.state.routes.includes("W_3_3__|__3_hx_laurel") || this.state.routes.includes("E_3_3__|__3_laurel_westEnd")) {
                        // Track 3 Routed
                        if (this.state.routed_3) {
                            this.state.sw_3_src = CX_135_Lined_Both;
                            this.state.sw_11_src = CX_225_Lined_Both;
                        }
                        // Track 3 Occupied
                        else if (this.state.occupied_3) {
                            this.state.sw_3_src = CX_135_Occupied_Top_Lined_Bottom;
                            this.state.sw_11_src = CX_225_Occupied_Top_Lined_Bottom;
                        }
                    }
                    // Nothing on Track 3
                    else {
                        this.state.sw_3_src = CX_135_Lined_Bottom;
                        this.state.sw_11_src = CX_225_Lined_Bottom;
                    }

                    // Signals
                    // West Bound Signals
                    if (this.state.routes[i] === "W_1_1__|__2_hx_laurel") {
                        this.state.sig_2w_src = SIG_W_Clear;
                        this.state.sig_12e_src = SIG_E_Stop;
                    }
                    // East Bound Signals
                    else {
                        this.state.sig_2w_src = SIG_W_Stop;
                        this.state.sig_12e_src = SIG_E_Clear;
                    }
                }
            }
            else if (this.state.routes[i] === "W_3_3__|__3_hx_laurel" || this.state.routes[i] === "E_3_3__|__3_laurel_westEnd") {
                // Set Tail Track Colors
                this.state.tail_3_e = color_3;
                this.state.tail_3_center = color_3;
                this.state.tail_3_w = color_3;

                // If The Route Is Occupied
                if (this.state.occupied_3) {
                    // Switches
                    this.state.sw_11_src = CX_225_Occupied_Top;
                
                    // Crossovers that could change based of the status of other Track #1
                    if (this.state.routes.includes("W_4_1__|__2_hx_laurel")) {
                        // Track #1 Is Occupied
                        if (this.state.occupied_4) {
                            this.state.sw_3_src = CX_135_Occupied_Both;
                        }
                        // Track #1 Is Routed
                        else if (this.state.routed_4) {
                            this.state.sw_3_src = CX_135_Occupied_Top_Lined_Bottom;
                        }
                    }
                    else if (this.state.routes.includes("E_1_4__|__4_laurel_westEnd")) {
                        // Track #1 Is Occupied
                        if (this.state.occupied_1) {
                            this.state.sw_3_src = CX_135_Occupied_Both;
                        }
                        // Track #1 Is Routed
                        else if (this.state.routed_1) {
                            this.state.sw_3_src = CX_135_Occupied_Top_Lined_Bottom;
                        }
                    }
                    else {
                        this.state.sw_3_src = CX_135_Occupied_Top;
                    }

                    // Signals
                    this.state.sig_10w_src = SIG_W_Stop;
                    this.state.sig_6e_src = SIG_E_Stop;
                }
                // The Route Is NOT Occupied
                else {
                    // Switches
                    this.state.sw_11_src = CX_225_Lined_Top;
                
                    // Crossovers that could change based of the status of other Track #1
                    if (this.state.routes.includes("W_4_1__|__2_hx_laurel")) {
                        // Track #1 Is Occupied
                        if (this.state.occupied_4) {
                            this.state.sw_3_src = CX_135_Occupied_Top_Lined_Bottom;
                        }
                        // Track #1 Is Routed
                        else if (this.state.routed_4) {
                            this.state.sw_3_src = CX_135_Lined_Both;
                        }
                    }
                    else if (this.state.routes.includes("E_1_4__|__4_laurel_westEnd")) {
                        // Track #1 Is Occupied
                        if (this.state.occupied_1) {
                            this.state.sw_3_src = CX_135_Occupied_Top_Lined_Bottom;
                        }
                        // Track #1 Is Routed
                        else if (this.state.routed_1) {
                            this.state.sw_3_src = CX_135_Lined_Both;
                        }
                    }
                    else {
                        this.state.sw_3_src = CX_135_Lined_Top;
                    }

                    // Signals
                    // West Bound Signals
                    if (this.state.routes[i] === "W_3_3__|__3_hx_laurel") {
                        this.state.sig_10w_src = SIG_W_Clear;
                        this.state.sig_6e_src = SIG_E_Stop;
                    }
                    // East Bound Signals
                    else {
                        this.state.sig_10w_src = SIG_W_Stop;
                        this.state.sig_6e_src = SIG_E_Clear;
                    }
                }
            }
            else if (this.state.routes[i] === "W_2_2__|__2_westSecaucus_laurel" || this.state.routes[i] === "E_2_2__|__2_laurel_westEnd") {
                // Set Tail Track Color
                this.state.tail_2_e = color_2;
                this.state.tail_2_w = color_2;

                // If The Route Is Occupied
                if (this.state.occupied_2) {
                    // Switches
                    // Crossovers that could change based off of Tack #1
                    if (this.state.routes.includes("W_1_1__|__2_westSecaucus_laurel") || this.state.routes.includes("E_1_1__|__1_laurel_westEnd")) {
                        // Track 1 Routed
                        if (this.state.routed_1) {
                            this.state.sw_1_src = CX_135_Lined_Top_Occupied_Bottom;
                            this.state.sw_7_src = CX_225_Lined_Top_Occupied_Bottom;
                        }
                        // Track 1 Occupied
                        else if (this.state.occupied_1) {
                            this.state.sw_1_src = CX_135_Occupied_Both;
                            this.state.sw_7_src = CX_225_Occupied_Both;
                        }
                    }
                    else if (this.state.routes.includes("W_3_1__|__1_hx_laurel")) {
                        if (this.state.routed_3) {
                            this.state.sw_1_src = CX_135_Lined_Top_Occupied_Bottom;
                            this.state.sw_7_src = CX_225_Lined_Top_Occupied_Bottom;
                        }
                        else if (this.state.occupied_3) {
                            this.state.sw_1_src = CX_135_Occupied_Both;
                            this.state.sw_7_src = CX_225_Occupied_Both;
                        }
                    }
                    else if (this.state.routes.includes("E_1_3__|__3_laurel_westEnd")) {
                        if (this.state.routed_1) {
                            this.state.sw_1_src = CX_135_Lined_Top_Occupied_Bottom;
                            this.state.sw_7_src = CX_225_Lined_Top_Occupied_Bottom;
                        }
                        else if (this.state.occupied_1) {
                            this.state.sw_1_src = CX_135_Occupied_Both;
                            this.state.sw_7_src = CX_225_Occupied_Both;
                        }
                    }
                    else if (this.state.routes.includes("W_1_3__|__3_hx_laurel")) {
                        if (this.state.routed_1) {
                            this.state.sw_1_src = CX_135_Lined_Top_Occupied_Bottom;
                            this.state.sw_7_src = CX_225_Lined_Top_Occupied_Bottom;
                        }
                        else if (this.state.occupied_1) {
                            this.state.sw_1_src = CX_135_Occupied_Both;
                            this.state.sw_7_src = CX_225_Occupied_Both;
                        }
                    }
                    else if (this.state.routes.includes("E_3_1__|__1_laurel_westEnd")) {
                        if (this.state.routed_3) {
                            this.state.sw_1_src = CX_135_Lined_Top_Occupied_Bottom;
                            this.state.sw_7_src = CX_225_Lined_Top_Occupied_Bottom;
                        }
                        else if (this.state.occupied_3) {
                            this.state.sw_1_src = CX_135_Occupied_Both;
                            this.state.sw_7_src = CX_225_Occupied_Both;
                        }
                    }
                    // Nothing Track 1
                    else {
                        this.state.sw_1_src = CX_135_Occupied_Bottom;
                        this.state.sw_7_src = CX_225_Occupied_Bottom;
                    }
                    // Crossovers that could change based off of Track #4
                    if (this.state.routes.includes("W_4_4__|__4_westSecaucus_laurel") || this.state.routes.includes("E_4_4__|__4_laurel_westEnd")) {
                        // Track 4 Routed
                        if (this.state.routed_4) {
                            this.state.sw_13_src = CX_135_Occupied_Top_Lined_Bottom;
                        }
                        // Track 4 Occupied
                        else if (this.state.occupied_4) {
                            this.state.sw_13_src = CX_135_Occupied_Both;
                        }
                    }
                    // Nothing on Track 3
                    else {
                        this.state.sw_13_src = CX_135_Occupied_Top;
                    }

                    // Signals
                    this.state.sig_4w_src = SIG_W_Stop;
                    this.state.sig_4e_src = SIG_E_Stop;
                }
                else {
                    // Switches
                    // Crossovers that could change based off of Tack #1
                    if (this.state.routes.includes("W_1_1__|__2_westSecaucus_laurel") || this.state.routes.includes("E_1_1__|__1_laurel_westEnd")) {
                        // Track 1 Routed
                        if (this.state.routed_1) {
                            this.state.sw_1_src = CX_135_Lined_Both;
                            this.state.sw_7_src = CX_225_Lined_Both;
                        }
                        // Track 1 Occupied
                        else if (this.state.occupied_1) {
                            this.state.sw_1_src = CX_135_Occupied_Top_Lined_Bottom;
                            this.state.sw_7_src = CX_225_Occupied_Top_Lined_Bottom;
                        }
                    }
                    else if (this.state.routes.includes("W_3_1__|__1_hx_laurel")) {
                        if (this.state.routed_3) {
                            this.state.sw_1_src = CX_135_Lined_Both;
                            this.state.sw_7_src = CX_225_Lined_Both;
                        }
                        else if (this.state.occupied_3) {
                            this.state.sw_1_src = CX_135_Occupied_Top_Lined_Bottom;
                            this.state.sw_7_src = CX_225_Occupied_Top_Lined_Bottom;
                        }
                    }
                    else if (this.state.routes.includes("E_1_3__|__3_laurel_westEnd")) {
                        if (this.state.routed_1) {
                            this.state.sw_1_src = CX_135_Lined_Both;
                            this.state.sw_7_src = CX_225_Lined_Both;
                        }
                        else if (this.state.occupied_1) {
                            this.state.sw_1_src = CX_135_Occupied_Top_Lined_Bottom;
                            this.state.sw_7_src = CX_225_Occupied_Top_Lined_Bottom;
                        }
                    }
                    else if (this.state.routes.includes("W_1_3__|__3_hx_laurel")) {
                        if (this.state.routed_1) {
                            this.state.sw_1_src = CX_135_Lined_Top_Occupied_Bottom;
                            this.state.sw_7_src = CX_225_Lined_Top_Occupied_Bottom;
                        }
                        else if (this.state.occupied_1) {
                            this.state.sw_1_src = CX_135_Occupied_Both;
                            this.state.sw_7_src = CX_225_Occupied_Both;
                        }
                    }
                    else if (this.state.routes.includes("E_3_1__|__1_laurel_westEnd")) {
                        if (this.state.routed_1) {
                            this.state.sw_1_src = CX_135_Lined_Top_Occupied_Bottom;
                            this.state.sw_7_src = CX_225_Lined_Top_Occupied_Bottom;
                        }
                        else if (this.state.occupied_1) {
                            this.state.sw_1_src = CX_135_Occupied_Both;
                            this.state.sw_7_src = CX_225_Occupied_Both;
                        }
                    }
                    // Nothing Track 1
                    else {
                        this.state.sw_1_src = CX_135_Lined_Bottom;
                        this.state.sw_7_src = CX_225_Lined_Bottom;
                    }
                    // Crossovers that could changed based off of Track #4
                    if (this.state.routes.includes("W_4_4__|__4_westSecaucus_laurel") || this.state.routes.includes("E_4_4__|__4_laurel_westEnd")) {
                        // Track 4 Routed
                        if (this.state.routed_4) {
                            this.state.sw_13_src = CX_135_Lined_Both;
                        }
                        // Track 4 Occupied
                        else if (this.state.occupied_4) {
                            this.state.sw_13_src = CX_135_Lined_Top_Occupied_Bottom;
                        }
                    }
                    // Nothing on Track 3
                    else {
                        this.state.sw_13_src = CX_135_Lined_Top;
                    }

                    // Signals
                    // West Bound Signals
                    if (this.state.routes[i] === "W_2_2__|__2_westSecaucus_laurel") {
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
            else if (this.state.routes[i] === "W_4_4__|__4_westSecaucus_laurel" || this.state.routes[i] === "E_4_4__|__4_laurel_westEnd") {
                // Set Tail Track Colors
                this.state.tail_4_e = color_4;
                this.state.tail_4_w = color_4;

                // If The Route Is Occupied
                if (this.state.occupied_4) {
                    // Switches
                    // Crossovers that could change based on the status of Track #4
                    if (this.state.routes.includes("E_3_2__|__2_laurel_westEnd")) {
                        // Track #4 Occupied
                        if (this.state.occupied_3) {
                            this.state.sw_13_src = CX_135_Occupied_Both;
                        }
                        // Track #4 Routed
                        else if (this.state.routed_3) {
                            this.state.sw_13_src = CX_135_Lined_Top_Occupied_Bottom;
                        }
                    }
                    // Nothing Track #4
                    else {
                        this.state.sw_13_src = CX_135_Occupied_Bottom;
                    }

                    // Signals
                    this.state.sig_8w_src = SIG_W_Stop;
                    this.state.sig_8e_src = SIG_E_Stop;
                }
                // The Route is NOT Occupied
                else {
                    // Switches
                    // Crossovers that could change based on the status of Track #4
                    if (this.state.routes.includes("E_3_2__|__2_laurel_westEnd")) {
                        // Track #4 Occupied
                        if (this.state.occupied_3) {
                            this.state.sw_13_src = CX_135_Occupied_Top_Lined_Bottom;
                        }
                        // Track #4 Routed
                        else if (this.state.routed_3) {
                            this.state.sw_13_src = CX_135_Lined_Both;
                        }
                    }
                    // Nothing Track #4
                    else {
                        this.state.sw_13_src = CX_135_Lined_Bottom;
                    }

                    // Signals
                    // West Bound Signals
                    if (this.state.routes[i] === "W_4_4__|__4_westSecaucus_laurel") {
                        this.state.sig_8w_src = SIG_W_Clear;
                        this.state.sig_8e_src = SIG_E_Stop
                    }
                    // East Bound Signals
                    else {
                        this.state.sig_8w_src = SIG_W_Stop;
                        this.state.sig_8e_src = SIG_E_Clear;
                    }
                }
            }
            else if (this.state.routes[i] === "W_3_1__|__1_hx_laurel") {
                // Set Tail Track Colors
                this.state.tail_3_e = color_3;
                this.state.tail_1_w = color_3;

                // The Route Is Occupied
                if (this.state.occupied_3) {
                    // Switches
                    this.state.sw_3_src = CX_135_Occupied_Bottom;
                    this.state.sw_11_src = CX_225_R_Occupied;

                    if (this.state.routes.includes("W_4_2__|__2_westSecaucus_laurel")) {
                        if (this.state.occupied_4) {
                            this.state.sw_1_src = CX_135_Occupied_Bottom;
                            this.state.sw_7_src = CX_225_Occupied_Bottom;
                        }
                        else if (this.state.routed_4) {
                            this.state.sw_1_src = CX_135_Occupied_Top_Lined_Bottom;
                            this.state.sw_7_src = CX_225_Occupied_Top_Lined_Bottom;
                        }
                    }
                    else {
                        this.state.sw_1_src = CX_135_Occupied_Top;
                        this.state.sw_7_src = CX_225_Occupied_Top;
                    }

                    // Signals
                    this.state.sig_10w_src = SIG_W_Stop;
                    this.state.sig_2w_src = SIG_W_Stop;
                    this.state.sig_6e_src = SIG_E_Stop;
                    this.state.sig_12e_src = SIG_E_Stop;
                }
                // The Route Is NOT Occupied
                else {
                    // Switches
                    this.state.sw_3_src = CX_135_Lined_Bottom;
                    this.state.sw_11_src = CX_225_R_Lined;
                    
                    // Crossovers that could change based on other tracks
                    if (this.state.routes.includes("W_4_2__|__2_westSecaucus_laurel")) {
                        // Other track is Occupied
                        if (this.state.occupied_4) {
                            this.state.sw_1_src = CX_135_Lined_Top_Occupied_Bottom;
                            this.state.sw_7_src = CX_225_Lined_Top_Occupied_Bottom;
                        }
                        // Other track is Routed
                        else if (this.state.routed_4) {
                            this.state.sw_1_src = CX_135_Lined_Both;
                            this.state.sw_7_src = CX_225_Lined_Both;
                        }
                    }
                    else if (this.state.routes.includes("E_2_4__|__4_laurel_westEnd")) {
                        // Other track is Occupied
                        if (this.state.occupied_2) {
                            this.state.sw_1_src = CX_135_Lined_Top_Occupied_Bottom;
                            this.state.sw_7_src = CX_225_Lined_Top_Occupied_Bottom;
                        }
                        // Other track is Routed
                        else if (this.state.routed_2) {
                            this.state.sw_1_src = CX_135_Lined_Both;
                            this.state.sw_7_src = CX_225_Lined_Both;
                        }
                    }
                    else {
                        this.state.sw_1_src = CX_135_Lined_Top;
                        this.state.sw_7_src = CX_225_Lined_Top;
                    }

                    // Signals
                    this.state.sig_10w_src = SIG_W_Clear;
                    this.state.sig_2w_src = SIG_W_Stop;
                    this.state.sig_6e_src = SIG_E_Stop;
                    this.state.sig_12e_src = SIG_E_Stop;
                }
            }
            else if (this.state.routes[i] === "E_1_3__|__3_laurel_westEnd") {
                // Set Tail Track Colors
                this.state.tail_3_e = color_1;
                this.state.tail_1_w = color_1;

                // The Route Is Occupied
                if (this.state.occupied_1) {
                    // Switches
                    this.state.sw_3_src = CX_135_Occupied_Bottom;
                    this.state.sw_11_src = CX_225_R_Occupied;
                    this.state.sw_1_src = CX_135_Occupied_Top;
                    this.state.sw_7_src = CX_225_Occupied_Top;

                    // Signals
                    this.state.sig_10w_src = SIG_W_Stop;
                    this.state.sig_2w_src = SIG_W_Stop;
                    this.state.sig_6e_src = SIG_E_Stop;
                    this.state.sig_12e_src = SIG_E_Stop;
                }
                // The Route Is NOT Occupied
                else {
                    // Switches
                    this.state.sw_3_src = CX_135_Lined_Bottom;
                    this.state.sw_11_src = CX_225_R_Lined;
                    this.state.sw_1_src = CX_135_Lined_Top;
                    this.state.sw_7_src = CX_225_Lined_Top;

                    // Signals
                    this.state.sig_10w_src = SIG_W_Stop;
                    this.state.sig_2w_src = SIG_W_Stop;
                    this.state.sig_6e_src = SIG_E_Stop;
                    this.state.sig_12e_src = SIG_E_Clear;
                }
            }
            else if (this.state.routes[i] === "W_3_2__|__2_westSecaucus_laurel") {
                // Set Tail Track Colors
                this.state.tail_3_e = color_3;
                this.state.tail_2_w = color_3;

                // The Route Is Occupied
                if (this.state.occupied_3) {
                    // Switches
                    this.state.sw_11_src = CX_225_R_Occupied;
                    this.state.sw_7_src = CX_225_R_Occupied;
                    this.state.sw_1_src = CX_135_Occupied_Bottom;

                    // Signals
                    this.state.sig_10w_src = SIG_W_Stop;
                    this.state.sig_2w_src = SIG_W_Stop;
                    this.state.sig_4w_src = SIG_W_Stop;
                    this.state.sig_6e_src = SIG_E_Stop;
                    this.state.sig_12e_src = SIG_E_Stop;
                    this.state.sig_4e_src = SIG_E_Stop;
                }
                // The Route Is NOT Occupied
                else {
                    // Switches
                    this.state.sw_11_src = CX_225_R_Lined;
                    this.state.sw_7_src = CX_225_R_Lined;
                    this.state.sw_1_src = CX_135_Lined_Bottom;

                    // Signals
                    this.state.sig_10w_src = SIG_W_Clear;
                    this.state.sig_2w_src = SIG_W_Stop;
                    this.state.sig_4w_src = SIG_W_Stop;
                    this.state.sig_6e_src = SIG_E_Stop;
                    this.state.sig_12e_src = SIG_E_Stop;
                    this.state.sig_4e_src = SIG_E_Stop;
                }
            }
            else if (this.state.routes[i] === "E_2_3__|__3_laurel_westEnd") {
                // Set Tail Track Colors
                this.state.tail_3_e = color_2;
                this.state.tail_2_w = color_2;

                // The Route Is Occupied
                if (this.state.occupied_2) {
                    // Switches
                    this.state.sw_11_src = CX_225_R_Occupied;
                    this.state.sw_7_src = CX_225_R_Occupied;
                    this.state.sw_1_src = CX_135_Occupied_Bottom;

                    // Signals
                    this.state.sig_10w_src = SIG_W_Stop;
                    this.state.sig_2w_src = SIG_W_Stop;
                    this.state.sig_4w_src = SIG_W_Stop;
                    this.state.sig_6e_src = SIG_E_Stop;
                    this.state.sig_12e_src = SIG_E_Stop;
                    this.state.sig_4e_src = SIG_E_Stop;
                }
                // The Route Is NOT Occupied
                else {
                    // Switches
                    this.state.sw_11_src = CX_225_R_Lined;
                    this.state.sw_7_src = CX_225_R_Lined;
                    this.state.sw_1_src = CX_135_Lined_Bottom;

                    // Signals
                    this.state.sig_10w_src = SIG_W_Stop;
                    this.state.sig_2w_src = SIG_W_Stop;
                    this.state.sig_4w_src = SIG_W_Stop;
                    this.state.sig_6e_src = SIG_E_Stop;
                    this.state.sig_12e_src = SIG_E_Stop;
                    this.state.sig_4e_src = SIG_E_Clear;
                }
            }
            else if (this.state.routes[i] === "W_1_2__|__2_westSecaucus_laurel") {
                // Set Tail Track Colors
                this.state.tail_1_e = color_1;
                this.state.tail_2_w = color_1;

                // The Route Is Occupied
                if (this.state.occupied_1) {
                    // Switches
                    this.state.sw_7_src = CX_225_R_Occupied;
                    this.state.sw_1_src = CX_135_Occupied_Bottom;

                    // Switches
                    this.state.sw_7_src = CX_225_R_Lined;
                    this.state.sw_1_src = CX_135_Lined_Bottom;

                    // Crossovers that could change based of Track #3 Status
                    if (this.state.routes.includes("W_3_3__|__3_hx_laurel") || this.state.routes.includes("E_3_3__|__3_laurel_westEnd")) {
                        // Occupied Track 3
                        if (this.state.occupied_3) {
                            this.state.sw_11_src = CX_225_Occupied_Both;
                        }
                        // Lined Track 3
                        else if (this.state.routed_3) {
                            this.state.sw_11_src = CX_225_Lined_Top_Occupied_Bottom;
                        }
                    }
                    // Nothing Track 3
                    else {
                        this.state.sw_11_src = CX_225_Occupied_Bottom;
                    }

                    // Signals
                    this.state.sig_2w_src = SIG_W_Stop;
                    this.state.sig_4w_src = SIG_W_Stop;
                    this.state.sig_12e_src = SIG_E_Stop;
                    this.state.sig_4e_src = SIG_E_Stop;
                }
                else {
                    // Switches
                    this.state.sw_7_src = CX_225_R_Lined;
                    this.state.sw_1_src = CX_135_Lined_Bottom;

                    // Crossovers that could change based of Track #3 Status
                    if (this.state.routes.includes("W_3_3__|__3_hx_laurel") || this.state.routes.includes("E_3_3__|__3_laurel_westEnd")) {
                        // Occupied Track 3
                        if (this.state.occupied_3) {
                            this.state.sw_11_src = CX_225_Occupied_Top_Lined_Bottom;
                        }
                        // Lined Track 3
                        else if (this.state.routed_3) {
                            this.state.sw_11_src = CX_225_Lined_Both;
                        }
                    }
                    // Nothing Track 3
                    else {
                        this.state.sw_11_src = CX_225_Lined_Bottom;
                    }

                    // Signals
                    this.state.sig_2w_src = SIG_W_Clear;
                    this.state.sig_4w_src = SIG_W_Stop;
                    this.state.sig_12e_src = SIG_E_Stop;
                    this.state.sig_4e_src = SIG_E_Stop;
                }
            }
            else if (this.state.routes[i] === "E_2_1__|__1_laurel_westEnd") {
                // Set Tail Track Colors
                this.state.tail_1_e = color_2;
                this.state.tail_2_w = color_2;

                // The Route Is Occupied
                if (this.state.occupied_2) {
                    // Switches
                    this.state.sw_7_src = CX_225_R_Occupied;
                    this.state.sw_1_src = CX_135_Occupied_Bottom;

                    // Switches
                    this.state.sw_7_src = CX_225_R_Lined;
                    this.state.sw_1_src = CX_135_Lined_Bottom;

                    // Crossovers that could change based of Track #3 Status
                    if (this.state.routes.includes("W_3_3__|__3_hx_laurel") || this.state.routes.includes("E_3_3__|__3_laurel_westEnd")) {
                        // Occupied Track 3
                        if (this.state.occupied_3) {
                            this.state.sw_11_src = CX_225_Occupied_Both;
                        }
                        // Lined Track 3
                        else if (this.state.routed_3) {
                            this.state.sw_11_src = CX_225_Lined_Top_Occupied_Bottom;
                        }
                    }
                    // Nothing Track 3
                    else {
                        this.state.sw_11_src = CX_225_Occupied_Bottom;
                    }

                    // Signals
                    this.state.sig_2w_src = SIG_W_Stop;
                    this.state.sig_4w_src = SIG_W_Stop;
                    this.state.sig_12e_src = SIG_E_Stop;
                    this.state.sig_4e_src = SIG_E_Stop;
                }
                else {
                    // Switches
                    this.state.sw_7_src = CX_225_R_Lined;
                    this.state.sw_1_src = CX_135_Lined_Bottom;

                    // Crossovers that could change based of Track #3 Status
                    if (this.state.routes.includes("W_3_3__|__3_hx_laurel") || this.state.routes.includes("E_3_3__|__3_laurel_westEnd")) {
                        // Occupied Track 3
                        if (this.state.occupied_3) {
                            this.state.sw_11_src = CX_225_Occupied_Top_Lined_Bottom;
                        }
                        // Lined Track 3
                        else if (this.state.routed_3) {
                            this.state.sw_11_src = CX_225_Lined_Both;
                        }
                    }
                    // Nothing Track 3
                    else {
                        this.state.sw_11_src = CX_225_Lined_Bottom;
                    }

                    // Signals
                    this.state.sig_2w_src = SIG_W_Stop;
                    this.state.sig_4w_src = SIG_W_Stop;
                    this.state.sig_12e_src = SIG_E_Stop;
                    this.state.sig_4e_src = SIG_E_Clear;
                }
            }
            else if (this.state.routes[i] === "W_1_3__|__3_hx_laurel") {
                // Set Tail Track Colors
                this.state.tail_1_e = color_1;
                this.state.tail_3_w = color_1;

                // The Route Is Occupied
                if (this.state.occupied_1) {
                    // Switches
                    this.state.sw_11_src = CX_225_Occupied_Bottom;
                    this.state.sw_3_src = CX_135_R_Occupied;

                    // Crossovers that could change based off of Track #3 status
                    if (this.state.routes.includes("W_2_2__|__2_westSecaucus_laurel") || this.state.routes.includes("E_2_2__|__2_laurel_westEnd")) {
                        // Other Track Is Occupied
                        if (this.state.occupied_2) {
                            this.state.sw_1_src = CX_135_Occupied_Both;
                            this.state.sw_7_src = CX_225_Occupied_Both;
                        }
                        // Other Track Routed
                        else if (this.state.routed_2) {
                            this.state.sw_1_src = CX_135_Occupied_Top_Lined_Bottom;
                            this.state.sw_7_src = CX_225_Occupied_Top_Lined_Bottom;
                        }
                    }
                    // Another Possible Route
                    else if (this.state.routes.includes("W_4_2__|__2_westSecaucus_laurel")) {
                        // Other Track Is Occupied
                        if (this.state.occupied_4) {
                            this.state.sw_1_src = CX_135_Occupied_Both;
                            this.state.sw_7_src = CX_225_Occupied_Both;
                        }
                        // Other Track Routed
                        else if (this.state.routed_4) {
                            this.state.sw_1_src = CX_135_Occupied_Top_Lined_Bottom;
                            this.state.sw_7_src = CX_225_Occupied_Top_Lined_Bottom;
                        }
                    }
                    else if (this.state.routes.includes("E_2_4__|__4_laurel_westEnd")) {
                        // Other Track Is Occupied
                        if (this.state.occupied_2) {
                            this.state.sw_1_src = CX_135_Occupied_Both;
                            this.state.sw_7_src = CX_225_Occupied_Both;
                        }
                        // Other Track Routed
                        else if (this.state.routed_2) {
                            this.state.sw_1_src = CX_135_Occupied_Top_Lined_Bottom;
                            this.state.sw_7_src = CX_225_Occupied_Top_Lined_Bottom;
                        }
                    }
                    // Nothing On The Other Track
                    else {
                        this.state.sw_1_src = CX_135_Occupied_Top;
                        this.state.sw_7_src = CX_225_Occupied_Top;
                    }

                    // Signals
                    this.state.sig_2w_src = SIG_W_Stop;
                    this.state.sig_10w_src = SIG_W_Stop;
                    this.state.sig_6e_src = SIG_E_Stop;
                    this.state.sig_12e_src = SIG_E_Stop;
                }
                // The Route Is NOT Occupied
                else {
                    // Switches
                    this.state.sw_11_src = CX_225_Lined_Bottom;
                    this.state.sw_3_src = CX_135_R_Lined;

                    // Crossovers that could change based off of Track #3 status
                    if (this.state.routes.includes("W_2_2__|__2_westSecaucus_laurel") || this.state.routes.includes("E_2_2__|__2_laurel_westEnd")) {
                        // Other Track Is Occupied
                        if (this.state.occupied_2) {
                            this.state.sw_1_src = CX_135_Lined_Top_Occupied_Bottom;
                            this.state.sw_7_src = CX_225_Lined_Top_Occupied_Bottom;
                        }
                        // Other Track Routed
                        else if (this.state.routed_2) {
                            this.state.sw_1_src = CX_135_Lined_Both;
                            this.state.sw_7_src = CX_225_Lined_Both;
                        }
                    }
                    // Another Possible Route
                    else if (this.state.routes.includes("W_4_2__|__2_westSecaucus_laurel")) {
                        // Other Track Is Occupied
                        if (this.state.occupied_4) {
                            this.state.sw_1_src = CX_135_Lined_Top_Occupied_Bottom;
                            this.state.sw_7_src = CX_225_Lined_Top_Occupied_Bottom;
                        }
                        // Other Track Routed
                        else if (this.state.routed_4) {
                            this.state.sw_1_src = CX_135_Lined_Both;
                            this.state.sw_7_src = CX_225_Lined_Both;
                        }
                    }
                    else if (this.state.routes.includes("E_2_4__|__4_laurel_westEnd")) {
                        // Other Track Is Occupied
                        if (this.state.occupied_2) {
                            this.state.sw_1_src = CX_135_Lined_Top_Occupied_Bottom;
                            this.state.sw_7_src = CX_225_Lined_Top_Occupied_Bottom;
                        }
                        // Other Track Routed
                        else if (this.state.routed_2) {
                            this.state.sw_1_src = CX_135_Lined_Both;
                            this.state.sw_7_src = CX_225_Lined_Both;
                        }
                    }
                    // Nothing On The Other Track
                    else {
                        this.state.sw_1_src = CX_135_Lined_Top;
                        this.state.sw_7_src = CX_225_Lined_Top;
                    }

                    // Signals
                    this.state.sig_2w_src = SIG_W_Clear;
                    this.state.sig_10w_src = SIG_W_Stop;
                    this.state.sig_6e_src = SIG_E_Stop;
                    this.state.sig_12e_src = SIG_E_Stop;
                }
            }
            else if (this.state.routes[i] === "E_3_1__|__1_laurel_westEnd") {
                // Set Tail Track Colors
                this.state.tail_1_e = color_3;
                this.state.tail_3_w = color_3;

                // The Route Is Occupied
                if (this.state.occupied_3) {
                    // Switches
                    this.state.sw_11_src = CX_225_Occupied_Bottom;
                    this.state.sw_3_src = CX_135_R_Occupied;

                    // Crossovers that could change based off of Track #3 status
                    if (this.state.routes.includes("W_2_2__|__2_westSecaucus_laurel") || this.state.routes.includes("E_2_2__|__2_laurel_westEnd")) {
                        // Other Track Is Occupied
                        if (this.state.occupied_2) {
                            this.state.sw_1_src = CX_135_Occupied_Both;
                            this.state.sw_7_src = CX_225_Occupied_Both;
                        }
                        // Other Track Routed
                        else if (this.state.routed_2) {
                            this.state.sw_1_src = CX_135_Occupied_Top_Lined_Bottom;
                            this.state.sw_7_src = CX_225_Occupied_Top_Lined_Bottom;
                        }
                    }
                    // Another Possible Route
                    else if (this.state.routes.includes("W_4_2__|__2_westSecaucus_laurel")) {
                        // Other Track Is Occupied
                        if (this.state.occupied_4) {
                            this.state.sw_1_src = CX_135_Occupied_Both;
                            this.state.sw_7_src = CX_225_Occupied_Both;
                        }
                        // Other Track Routed
                        else if (this.state.routed_4) {
                            this.state.sw_1_src = CX_135_Occupied_Top_Lined_Bottom;
                            this.state.sw_7_src = CX_225_Occupied_Top_Lined_Bottom;
                        }
                    }
                    else if (this.state.routes.includes("E_2_4__|__4_laurel_westEnd")) {
                        // Other Track Is Occupied
                        if (this.state.occupied_2) {
                            this.state.sw_1_src = CX_135_Occupied_Both;
                            this.state.sw_7_src = CX_225_Occupied_Both;
                        }
                        // Other Track Routed
                        else if (this.state.routed_2) {
                            this.state.sw_1_src = CX_135_Occupied_Top_Lined_Bottom;
                            this.state.sw_7_src = CX_225_Occupied_Top_Lined_Bottom;
                        }
                    }
                    // Nothing On The Other Track
                    else {
                        this.state.sw_1_src = CX_135_Occupied_Top;
                        this.state.sw_7_src = CX_225_Occupied_Top;
                    }

                    // Signals
                    this.state.sig_2w_src = SIG_W_Stop;
                    this.state.sig_10w_src = SIG_W_Stop;
                    this.state.sig_6e_src = SIG_E_Stop;
                    this.state.sig_12e_src = SIG_E_Stop;
                }
                // The Route Is NOT Occupied
                else {
                    // Switches
                    this.state.sw_11_src = CX_225_Lined_Bottom;
                    this.state.sw_3_src = CX_135_R_Lined;

                    // Crossovers that could change based off of Track #3 status
                    if (this.state.routes.includes("W_2_2__|__2_westSecaucus_laurel") || this.state.routes.includes("E_2_2__|__2_laurel_westEnd")) {
                        // Other Track Is Occupied
                        if (this.state.occupied_2) {
                            this.state.sw_1_src = CX_135_Lined_Top_Occupied_Bottom;
                            this.state.sw_7_src = CX_225_Lined_Top_Occupied_Bottom;
                        }
                        // Other Track Routed
                        else if (this.state.routed_2) {
                            this.state.sw_1_src = CX_135_Lined_Both;
                            this.state.sw_7_src = CX_225_Lined_Both;
                        }
                    }
                    // Another Possible Route
                    else if (this.state.routes.includes("W_4_2__|__2_westSecaucus_laurel")) {
                        // Other Track Is Occupied
                        if (this.state.occupied_4) {
                            this.state.sw_1_src = CX_135_Lined_Top_Occupied_Bottom;
                            this.state.sw_7_src = CX_225_Lined_Top_Occupied_Bottom;
                        }
                        // Other Track Routed
                        else if (this.state.routed_4) {
                            this.state.sw_1_src = CX_135_Lined_Both;
                            this.state.sw_7_src = CX_225_Lined_Both;
                        }
                    }
                    else if (this.state.routes.includes("E_2_4__|__4_laurel_westEnd")) {
                        // Other Track Is Occupied
                        if (this.state.occupied_2) {
                            this.state.sw_1_src = CX_135_Lined_Top_Occupied_Bottom;
                            this.state.sw_7_src = CX_225_Lined_Top_Occupied_Bottom;
                        }
                        // Other Track Routed
                        else if (this.state.routed_2) {
                            this.state.sw_1_src = CX_135_Lined_Both;
                            this.state.sw_7_src = CX_225_Lined_Both;
                        }
                    }
                    // Nothing On The Other Track
                    else {
                        this.state.sw_1_src = CX_135_Lined_Top;
                        this.state.sw_7_src = CX_225_Lined_Top;
                    }

                    // Signals
                    this.state.sig_2w_src = SIG_W_Stop;
                    this.state.sig_10w_src = SIG_W_Stop;
                    this.state.sig_6e_src = SIG_E_Clear;
                    this.state.sig_12e_src = SIG_E_Stop;
                }
            }
            else if (this.state.routes[i] === "W_2_1__|__2_hx_laurel") {
                // Set Tail Track Colors
                this.state.tail_2_e = color_2;
                this.state.tail_1_w = color_2;

                if (this.state.occupied_2) {
                    // Switches
                    this.state.sw_1_src = CX_135_R_Occupied;
                    this.state.sw_7_src = CX_225_Occupied_Bottom;

                    // Crossovers that could change based on the status of Track #3
                    if (this.state.routes.includes("W_3_3__|__3_hx_laurel") || this.state.routes.includes("E_3_3__|__3_laurel_westEnd")) {
                        // Track #3 is Occupied
                        if (this.state.occupied_3) {
                            this.state.sw_3_src = CX_135_Occupied_Both;
                        }
                        // Track #3 is Routed
                        else if (this.state.routed_3) {
                            this.state.sw_3_src = CX_135_Lined_Top_Occupied_Bottom;
                        }
                    }
                    // Nothing Track #3
                    else {
                        this.state.sw_3_src = CX_135_Occupied_Bottom;
                    }

                    // Crossovers that could change based on the status of Track #4
                    if (this.state.routes.includes("W_4_4__|__4_westSecaucus_laurel") || this.state.routes.includes("E_4_4__|__4_laurel_westEnd")) {
                        // Track #4 is Occupied
                        if (this.state.occupied_4) {
                            this.state.sw_13_src = CX_135_Occupied_Both;
                        }
                        // Track #4 is Routed
                        else if (this.state.routed_4) {
                            this.state.sw_13_src = CX_135_Occupied_Top_Lined_Bottom;
                        }
                    }
                    // Nothing Track #4
                    else {
                        this.state.sw_13_src = CX_135_Occupied_Top;
                    }

                    // Signals
                    this.state.sig_4w_src = SIG_W_Stop;
                    this.state.sig_2w_src = SIG_W_Stop;
                    this.state.sig_12e_src = SIG_E_Stop;
                    this.state.sig_4e_src = SIG_E_Stop;
                }
                else {
                    // Switches
                    this.state.sw_1_src = CX_135_R_Lined;
                    this.state.sw_7_src = CX_225_Lined_Bottom;

                    // Crossovers that could change based on the status of Track #3
                    if (this.state.routes.includes("W_3_3__|__3_hx_laurel") || this.state.routes.includes("E_3_3__|__3_laurel_westEnd")) {
                        // Track #3 is Occupied
                        if (this.state.occupied_3) {
                            this.state.sw_3_src = CX_135_Occupied_Top_Lined_Bottom;
                        }
                        // Track #3 is Routed
                        else if (this.state.routed_3) {
                            this.state.sw_3_src = CX_135_Lined_Both;
                        }
                    }
                    // Nothing Track #3
                    else {
                        this.state.sw_3_src = CX_135_Lined_Bottom;
                    }

                    // Crossovers that could change based on the status of Track #4
                    if (this.state.routes.includes("W_4_4__|__4_westSecaucus_laurel") || this.state.routes.includes("E_4_4__|__4_laurel_westEnd")) {
                        // Track #4 is Occupied
                        if (this.state.occupied_4) {
                            this.state.sw_13_src = CX_135_Lined_Top_Occupied_Bottom;
                        }
                        // Track #4 is Routed
                        else if (this.state.routed_4) {
                            this.state.sw_13_src = CX_135_Lined_Both;
                        }
                    }
                    // Nothing Track #4
                    else {
                        this.state.sw_13_src = CX_135_Lined_Top;
                    }

                    // Signals
                    this.state.sig_4w_src = SIG_W_Clear;
                    this.state.sig_2w_src = SIG_W_Stop;
                    this.state.sig_12e_src = SIG_E_Stop;
                    this.state.sig_4e_src = SIG_E_Stop;
                }
            }
            else if (this.state.routes[i] === "E_1_2__|__2_laurel_westEnd") {
                // Set Tail Track Colors
                this.state.tail_2_e = color_1;
                this.state.tail_1_w = color_1;

                if (this.state.occupied_1) {
                    // Switches
                    this.state.sw_1_src = CX_135_R_Occupied;
                    this.state.sw_7_src = CX_225_Occupied_Bottom;

                    // Crossovers that could change based on the status of Track #3
                    if (this.state.routes.includes("W_3_3__|__3_hx_laurel") || this.state.routes.includes("E_3_3__|__3_laurel_westEnd")) {
                        // Track #3 is Occupied
                        if (this.state.occupied_3) {
                            this.state.sw_3_src = CX_135_Occupied_Both;
                        }
                        // Track #3 is Routed
                        else if (this.state.routed_3) {
                            this.state.sw_3_src = CX_135_Lined_Top_Occupied_Bottom;
                        }
                    }
                    // Nothing Track #3
                    else {
                        this.state.sw_3_src = CX_135_Occupied_Bottom;
                    }

                    // Crossovers that could change based on the status of Track #4
                    if (this.state.routes.includes("W_4_4__|__4_westSecaucus_laurel") || this.state.routes.includes("E_4_4__|__4_laurel_westEnd")) {
                        // Track #4 is Occupied
                        if (this.state.occupied_4) {
                            this.state.sw_13_src = CX_135_Occupied_Both;
                        }
                        // Track #4 is Routed
                        else if (this.state.routed_4) {
                            this.state.sw_13_src = CX_135_Occupied_Top_Lined_Bottom;
                        }
                    }
                    // Nothing Track #4
                    else {
                        this.state.sw_13_src = CX_135_Occupied_Top;
                    }

                    // Signals
                    this.state.sig_4w_src = SIG_W_Stop;
                    this.state.sig_2w_src = SIG_W_Stop;
                    this.state.sig_12e_src = SIG_E_Stop;
                    this.state.sig_4e_src = SIG_E_Stop;
                }
                else {
                    // Switches
                    this.state.sw_1_src = CX_135_R_Lined;
                    this.state.sw_7_src = CX_225_Lined_Bottom;

                    // Crossovers that could change based on the status of Track #3
                    if (this.state.routes.includes("W_3_3__|__3_hx_laurel") || this.state.routes.includes("E_3_3__|__3_laurel_westEnd")) {
                        // Track #3 is Occupied
                        if (this.state.occupied_3) {
                            this.state.sw_3_src = CX_135_Occupied_Top_Lined_Bottom;
                        }
                        // Track #3 is Routed
                        else if (this.state.routed_3) {
                            this.state.sw_3_src = CX_135_Lined_Both;
                        }
                    }
                    // Nothing Track #3
                    else {
                        this.state.sw_3_src = CX_135_Lined_Bottom;
                    }

                    // Crossovers that could change based on the status of Track #4
                    if (this.state.routes.includes("W_4_4__|__4_westSecaucus_laurel") || this.state.routes.includes("E_4_4__|__4_laurel_westEnd")) {
                        // Track #4 is Occupied
                        if (this.state.occupied_4) {
                            this.state.sw_13_src = CX_135_Lined_Top_Occupied_Bottom;
                        }
                        // Track #4 is Routed
                        else if (this.state.routed_4) {
                            this.state.sw_13_src = CX_135_Lined_Both;
                        }
                    }
                    // Nothing Track #4
                    else {
                        this.state.sw_13_src = CX_135_Lined_Top;
                    }

                    // Signals
                    this.state.sig_4w_src = SIG_W_Stop;
                    this.state.sig_2w_src = SIG_W_Stop;
                    this.state.sig_12e_src = SIG_E_Clear;
                    this.state.sig_4e_src = SIG_E_Stop;
                }
            }
            else if (this.state.routes[i] === "W_2_3__|__3_hx_laurel") {
                // Set Tail Track Colors
                this.state.tail_2_e = color_2;
                this.state.tail_3_w = color_2;

                // The Route Is Occupied
                if (this.state.occupied_2) {
                    // Switches
                    this.state.sw_7_src = CX_225_Occupied_Bottom;
                    this.state.sw_1_src = CX_135_R_Occupied;
                    this.state.sw_3_src = CX_135_R_Occupied;

                    // Crossovers taht could changed based on the status of Track #4
                    if (this.state.routes.includes("W_4_4__|__4_westSecaucus_laurel") || this.state.routes.includes("E_4_4__|__4_laurel_westEnd")) {
                        // Track #4 is Occupied
                        if (this.state.occupied_4) {
                            this.state.sw_13_src = CX_135_Occupied_Both;
                        }
                        // Track #4 is Routed
                        else if (this.state.routed_4) {
                            this.state.sw_13_src = CX_135_Occupied_Top_Lined_Bottom;
                        }
                    }
                    // Nothing Track #4
                    else {
                        this.state.sw_13_src = CX_135_Occupied_Top;
                    }

                    // Signals
                    this.state.sig_4w_src = SIG_W_Stop;
                    this.state.sig_2w_src = SIG_W_Stop;
                    this.state.sig_10w_src = SIG_W_Stop;
                    this.state.sig_6e_src = SIG_E_Stop;
                    this.state.sig_12e_src = SIG_E_Stop;
                    this.state.sig_4e_src = SIG_E_Stop;
                }
                // The Route Is NOT Occupied
                else {
                    // Switches
                    this.state.sw_7_src = CX_225_Lined_Bottom;
                    this.state.sw_1_src = CX_135_R_Lined;
                    this.state.sw_3_src = CX_135_R_Lined;

                    // Crossovers taht could changed based on the status of Track #4
                    if (this.state.routes.includes("W_4_4__|__4_westSecaucus_laurel") || this.state.routes.includes("E_4_4__|__4_laurel_westEnd")) {
                        // Track #4 is Occupied
                        if (this.state.occupied_4) {
                            this.state.sw_13_src = CX_135_Lined_Top_Occupied_Bottom;
                        }
                        // Track #4 is Routed
                        else if (this.state.routed_4) {
                            this.state.sw_13_src = CX_135_Lined_Both;
                        }
                    }
                    // Nothing Track #4
                    else {
                        this.state.sw_13_src = CX_135_Lined_Top;
                    }

                    // Signals
                    this.state.sig_4w_src = SIG_W_Clear;
                    this.state.sig_2w_src = SIG_W_Stop;
                    this.state.sig_10w_src = SIG_W_Stop;
                    this.state.sig_6e_src = SIG_E_Stop;
                    this.state.sig_12e_src = SIG_E_Stop;
                    this.state.sig_4e_src = SIG_E_Stop;
                }
            }
            else if (this.state.routes[i] === "E_3_2__|__2_laurel_westEnd") {
                // Set Tail Track Colors
                this.state.tail_2_e = color_3;
                this.state.tail_3_w = color_3;

                // The Route Is Occupied
                if (this.state.occupied_3) {
                    // Switches
                    this.state.sw_7_src = CX_225_Occupied_Bottom;
                    this.state.sw_1_src = CX_135_R_Occupied;
                    this.state.sw_3_src = CX_135_R_Occupied;

                    // Crossovers taht could changed based on the status of Track #4
                    if (this.state.routes.includes("W_4_4__|__4_westSecaucus_laurel") || this.state.routes.includes("E_4_4__|__4_laurel_westEnd")) {
                        // Track #4 is Occupied
                        if (this.state.occupied_4) {
                            this.state.sw_13_src = CX_135_Occupied_Both;
                        }
                        // Track #4 is Routed
                        else if (this.state.routed_4) {
                            this.state.sw_13_src = CX_135_Occupied_Top_Lined_Bottom;
                        }
                    }
                    // Nothing Track #4
                    else {
                        this.state.sw_13_src = CX_135_Occupied_Top;
                    }

                    // Signals
                    this.state.sig_4w_src = SIG_W_Stop;
                    this.state.sig_2w_src = SIG_W_Stop;
                    this.state.sig_10w_src = SIG_W_Stop;
                    this.state.sig_6e_src = SIG_E_Stop;
                    this.state.sig_12e_src = SIG_E_Stop;
                    this.state.sig_4e_src = SIG_E_Stop;
                }
                // The Route Is NOT Occupied
                else {
                    // Switches
                    this.state.sw_7_src = CX_225_Lined_Bottom;
                    this.state.sw_1_src = CX_135_R_Lined;
                    this.state.sw_3_src = CX_135_R_Lined;

                    // Crossovers taht could changed based on the status of Track #4
                    if (this.state.routes.includes("W_4_4__|__4_westSecaucus_laurel") || this.state.routes.includes("E_4_4__|__4_laurel_westEnd")) {
                        // Track #4 is Occupied
                        if (this.state.occupied_4) {
                            this.state.sw_13_src = CX_135_Lined_Top_Occupied_Bottom;
                        }
                        // Track #4 is Routed
                        else if (this.state.routed_4) {
                            this.state.sw_13_src = CX_135_Lined_Both;
                        }
                    }
                    // Nothing Track #4
                    else {
                        this.state.sw_13_src = CX_135_Lined_Top;
                    }

                    // Signals
                    this.state.sig_4w_src = SIG_W_Stop;
                    this.state.sig_2w_src = SIG_W_Stop;
                    this.state.sig_10w_src = SIG_W_Stop;
                    this.state.sig_6e_src = SIG_E_Clear;
                    this.state.sig_12e_src = SIG_E_Stop;
                    this.state.sig_4e_src = SIG_E_Stop;
                }
            }
            else if (this.state.routes[i] === "W_4_2__|__2_westSecaucus_laurel") {
                // Set Tail Track Colors
                this.state.tail_4_e = color_4;
                this.state.tail_2_w = color_4;

                if (this.state.occupied_4) {
                    // Switches
                    this.state.sw_13_src = CX_135_R_Occupied;

                    // Crossovers that could change based on the status of Track #1
                    if (this.state.routes.includes("W_1_1__|__1_hx_laurel") || this.state.routes.includes("E_1_1__|__1_laurel_westEnd")) {
                        // Track #1 is Occupied
                        if (this.state.occupied_1) {
                            this.state.sw_7_src = CX_225_Occupied_Both;
                            this.state.sw_1_src = CX_135_Occupied_Both;
                        }
                        // Track #1 is Routed
                        else if (this.state.routed_1) {
                            this.state.sw_7_src = CX_225_Lined_Top_Occupied_Bottom;
                            this.state.sw_1_src = CX_135_Lined_Top_Occupied_Bottom;
                        }
                    }
                    else if (this.state.routes.includes("E_3_1__|__1_laurel_westEnd")) {
                        // Track #1 is Occupied
                        if (this.state.occupied_3) {
                            this.state.sw_7_src = CX_225_Occupied_Both;
                            this.state.sw_1_src = CX_135_Occupied_Both;
                        }
                        // Track #1 is Routed
                        else if (this.state.routed_3) {
                            this.state.sw_7_src = CX_225_Lined_Top_Occupied_Bottom;
                            this.state.sw_1_src = CX_135_Lined_Top_Occupied_Bottom;
                        }
                    }
                    else if (this.state.routes.includes("E_1_3__|__3_laurel_westEnd")) {
                        // Track #1 is Occupied
                        if (this.state.occupied_1) {
                            this.state.sw_7_src = CX_225_Occupied_Both;
                            this.state.sw_1_src = CX_135_Occupied_Both;
                        }
                        // Track #1 is Routed
                        else if (this.state.routed_1) {
                            this.state.sw_7_src = CX_225_Lined_Top_Occupied_Bottom;
                            this.state.sw_1_src = CX_135_Lined_Top_Occupied_Bottom;
                        }
                    }
                    // Nothing Track #1
                    else {
                        this.state.sw_7_src = CX_225_Occupied_Bottom;
                        this.state.sw_1_src = CX_135_Occupied_Bottom;
                    }

                    // Signals
                    this.state.sig_8w_src = SIG_W_Stop;
                    this.state.sig_4w_src = SIG_W_Stop;
                    this.state.sig_4e_src = SIG_E_Stop;
                    this.state.sig_8e_src = SIG_E_Stop;
                }
                else {
                    // Switches
                    this.state.sw_13_src = CX_135_R_Lined;

                    // Crossovers that could change based on the status of Track #1
                    if (this.state.routes.includes("W_1_1__|__1_hx_laurel") || this.state.routes.includes("E_1_1__|__1_laurel_westEnd")) {
                        // Track #1 is Occupied
                        if (this.state.occupied_1) {
                            this.state.sw_7_src = CX_225_Occupied_Top_Lined_Bottom;
                            this.state.sw_1_src = CX_135_Occupied_Top_Lined_Bottom;
                        }
                        // Track #1 is Routed
                        else if (this.state.routed_1) {
                            this.state.sw_7_src = CX_225_Lined_Both;
                            this.state.sw_1_src = CX_135_Lined_Both;
                        }
                    }
                    else if (this.state.routes.includes("E_3_1__|__1_laurel_westEnd")) {
                        // Track #1 is Occupied
                        if (this.state.occupied_3) {
                            this.state.sw_7_src = CX_225_Occupied_Top_Lined_Bottom;
                            this.state.sw_1_src = CX_135_Occupied_Top_Lined_Bottom;
                        }
                        // Track #1 is Routed
                        else if (this.state.routed_3) {
                            this.state.sw_7_src = CX_225_Lined_Both;
                            this.state.sw_1_src = CX_135_Lined_Both;
                        }
                    }
                    else if (this.state.routes.includes("E_1_3__|__3_laurel_westEnd")) {
                        // Track #1 is Occupied
                        if (this.state.occupied_1) {
                            this.state.sw_7_src = CX_225_Occupied_Top_Lined_Bottom;
                            this.state.sw_1_src = CX_135_Occupied_Top_Lined_Bottom;
                        }
                        // Track #1 is Routed
                        else if (this.state.routed_1) {
                            this.state.sw_7_src = CX_225_Lined_Both;
                            this.state.sw_1_src = CX_135_Lined_Both;
                        }
                    }
                    // Nothing Track #1
                    else {
                        this.state.sw_7_src = CX_225_Lined_Bottom;
                        this.state.sw_1_src = CX_135_Lined_Bottom;
                    }

                    // Signals
                    this.state.sig_8w_src = SIG_W_Clear;
                    this.state.sig_4w_src = SIG_W_Stop;
                    this.state.sig_4e_src = SIG_E_Stop;
                    this.state.sig_8e_src = SIG_E_Stop;
                }
            }
            else if (this.state.routes[i] === "E_2_4__|__4_laurel_westEnd") {
                // Set Tail Track Colors
                this.state.tail_4_e = color_2;
                this.state.tail_2_w = color_2;

                if (this.state.occupied_2) {
                    // Switches
                    this.state.sw_13_src = CX_135_R_Occupied;

                    // Crossovers that could change based on the status of Track #1
                    if (this.state.routes.includes("W_1_1__|__1_hx_laurel") || this.state.routes.includes("E_1_1__|__1_laurel_westEnd")) {
                        // Track #1 is Occupied
                        if (this.state.occupied_1) {
                            this.state.sw_7_src = CX_225_Occupied_Both;
                            this.state.sw_1_src = CX_135_Occupied_Both;
                        }
                        // Track #1 is Routed
                        else if (this.state.routed_1) {
                            this.state.sw_7_src = CX_225_Lined_Top_Occupied_Bottom;
                            this.state.sw_1_src = CX_135_Lined_Top_Occupied_Bottom;
                        }
                    }
                    else if (this.state.routes.includes("E_3_1__|__1_laurel_westEnd")) {
                        // Track #1 is Occupied
                        if (this.state.occupied_3) {
                            this.state.sw_7_src = CX_225_Occupied_Both;
                            this.state.sw_1_src = CX_135_Occupied_Both;
                        }
                        // Track #1 is Routed
                        else if (this.state.routed_3) {
                            this.state.sw_7_src = CX_225_Lined_Top_Occupied_Bottom;
                            this.state.sw_1_src = CX_135_Lined_Top_Occupied_Bottom;
                        }
                    }
                    else if (this.state.routes.includes("E_1_3__|__3_laurel_westEnd")) {
                        // Track #1 is Occupied
                        if (this.state.occupied_1) {
                            this.state.sw_7_src = CX_225_Occupied_Both;
                            this.state.sw_1_src = CX_135_Occupied_Both;
                        }
                        // Track #1 is Routed
                        else if (this.state.routed_1) {
                            this.state.sw_7_src = CX_225_Lined_Top_Occupied_Bottom;
                            this.state.sw_1_src = CX_135_Lined_Top_Occupied_Bottom;
                        }
                    }
                    // Nothing Track #1
                    else {
                        this.state.sw_7_src = CX_225_Occupied_Bottom;
                        this.state.sw_1_src = CX_135_Occupied_Bottom;
                    }

                    // Signals
                    this.state.sig_8w_src = SIG_W_Stop;
                    this.state.sig_4w_src = SIG_W_Stop;
                    this.state.sig_4e_src = SIG_E_Stop;
                    this.state.sig_8e_src = SIG_E_Stop;
                }
                else {
                    // Switches
                    this.state.sw_13_src = CX_135_R_Lined;

                    // Crossovers that could change based on the status of Track #1
                    if (this.state.routes.includes("W_1_1__|__1_hx_laurel") || this.state.routes.includes("E_1_1__|__1_laurel_westEnd")) {
                        // Track #1 is Occupied
                        if (this.state.occupied_1) {
                            this.state.sw_7_src = CX_225_Occupied_Top_Lined_Bottom;
                            this.state.sw_1_src = CX_135_Occupied_Top_Lined_Bottom;
                        }
                        // Track #1 is Routed
                        else if (this.state.routed_1) {
                            this.state.sw_7_src = CX_225_Lined_Both;
                            this.state.sw_1_src = CX_135_Lined_Both;
                        }
                    }
                    else if (this.state.routes.includes("E_3_1__|__1_laurel_westEnd")) {
                        // Track #1 is Occupied
                        if (this.state.occupied_3) {
                            this.state.sw_7_src = CX_225_Occupied_Top_Lined_Bottom;
                            this.state.sw_1_src = CX_135_Occupied_Top_Lined_Bottom;
                        }
                        // Track #1 is Routed
                        else if (this.state.routed_3) {
                            this.state.sw_7_src = CX_225_Lined_Both;
                            this.state.sw_1_src = CX_135_Lined_Both;
                        }
                    }
                    else if (this.state.routes.includes("E_1_3__|__3_laurel_westEnd")) {
                        // Track #1 is Occupied
                        if (this.state.occupied_1) {
                            this.state.sw_7_src = CX_225_Occupied_Top_Lined_Bottom;
                            this.state.sw_1_src = CX_135_Occupied_Top_Lined_Bottom;
                        }
                        // Track #1 is Routed
                        else if (this.state.routed_1) {
                            this.state.sw_7_src = CX_225_Lined_Both;
                            this.state.sw_1_src = CX_135_Lined_Both;
                        }
                    }
                    // Nothing Track #1
                    else {
                        this.state.sw_7_src = CX_225_Lined_Bottom;
                        this.state.sw_1_src = CX_135_Lined_Bottom;
                    }

                    // Signals
                    this.state.sig_8w_src = SIG_W_Stop;
                    this.state.sig_4w_src = SIG_W_Stop;
                    this.state.sig_4e_src = SIG_E_Clear;
                    this.state.sig_8e_src = SIG_E_Stop;
                }
            }
            else if (this.state.routes[i] === "W_4_1__|__2_hx_laurel") {
                // Set Tail Track Colors
                this.state.tail_4_e = color_4;
                this.state.tail_1_w = color_4;

                // The Route Is Occupied
                if (this.state.occupied_4) {
                    // Switches
                    this.state.sw_13_src = CX_135_R_Occupied;
                    this.state.sw_7_src = CX_225_Occupied_Bottom;
                    this.state.sw_1_src = CX_135_R_Occupied;

                    // Crossovers that could change based on the state of Track #3
                    if (this.state.routes.includes("W_3_3__|__3_hx_laurel") || this.state.routes.includes("E_3_3__|__3_laurel_westEnd")) {
                        // Track #3 is Occupied
                        if (this.state.occupied_3) {
                            this.state.sw_3_src = CX_135_Occupied_Both;
                        }
                        // Track #3 Is Routed
                        else if (this.state.routed_3) {
                            this.state.sw_3_src = CX_135_Lined_Top_Occupied_Bottom;
                        }
                    }
                    // Nothing Track #3
                    else {
                        this.state.sw_3_src = CX_135_Occupied_Bottom;
                    }

                    // Signals
                    this.state.sig_8w_src = SIG_W_Stop;
                    this.state.sig_4w_src = SIG_W_Stop;
                    this.state.sig_2w_src = SIG_W_Stop;
                    this.state.sig_8e_src = SIG_E_Stop;
                    this.state.sig_4e_src = SIG_E_Stop;
                    this.state.sig_12e_src = SIG_E_Stop;
                }
                // The Route Is NOT Occupied
                else {
                    // Switches
                    this.state.sw_13_src = CX_135_R_Lined;
                    this.state.sw_7_src = CX_225_Lined_Bottom;
                    this.state.sw_1_src = CX_135_R_Lined;

                    // Crossovers that could change based on the state of Track #3
                    if (this.state.routes.includes("W_3_3__|__3_hx_laurel") || this.state.routes.includes("E_3_3__|__3_laurel_westEnd")) {
                        // Track #3 is Occupied
                        if (this.state.occupied_3) {
                            this.state.sw_3_src = CX_135_Occupied_Top_Lined_Bottom;
                        }
                        // Track #3 Is Routed
                        else if (this.state.routed_3) {
                            this.state.sw_3_src = CX_135_Lined_Both;
                        }
                    }
                    // Nothing Track #3
                    else {
                        this.state.sw_3_src = CX_135_Lined_Bottom;
                    }

                    // Signals
                    this.state.sig_8w_src = SIG_W_Clear;
                    this.state.sig_4w_src = SIG_W_Stop;
                    this.state.sig_2w_src = SIG_W_Stop;
                    this.state.sig_8e_src = SIG_E_Stop;
                    this.state.sig_4e_src = SIG_E_Stop;
                    this.state.sig_12e_src = SIG_E_Stop;
                }
            }
            else if (this.state.routes[i] === "E_1_4__|__4_laurel_westEnd") {
                // Set Tail Track Colors
                this.state.tail_4_e = color_1;
                this.state.tail_1_w = color_1;

                // The Route Is Occupied
                if (this.state.occupied_1) {
                    // Switches
                    this.state.sw_13_src = CX_135_R_Occupied;
                    this.state.sw_7_src = CX_225_Occupied_Bottom;
                    this.state.sw_1_src = CX_135_R_Occupied;

                    // Crossovers that could change based on the state of Track #3
                    if (this.state.routes.includes("W_3_3__|__3_hx_laurel") || this.state.routes.includes("E_3_3__|__3_laurel_westEnd")) {
                        // Track #3 is Occupied
                        if (this.state.occupied_3) {
                            this.state.sw_3_src = CX_135_Occupied_Both;
                        }
                        // Track #3 Is Routed
                        else if (this.state.routed_3) {
                            this.state.sw_3_src = CX_135_Lined_Top_Occupied_Bottom;
                        }
                    }
                    // Nothing Track #3
                    else {
                        this.state.sw_3_src = CX_135_Occupied_Bottom;
                    }

                    // Signals
                    this.state.sig_8w_src = SIG_W_Stop;
                    this.state.sig_4w_src = SIG_W_Stop;
                    this.state.sig_2w_src = SIG_W_Stop;
                    this.state.sig_8e_src = SIG_E_Stop;
                    this.state.sig_4e_src = SIG_E_Stop;
                    this.state.sig_12e_src = SIG_E_Stop;
                }
                // The Route Is NOT Occupied
                else {
                    // Switches
                    this.state.sw_13_src = CX_135_R_Lined;
                    this.state.sw_7_src = CX_225_Lined_Bottom;
                    this.state.sw_1_src = CX_135_R_Lined;

                    // Crossovers that could change based on the state of Track #3
                    if (this.state.routes.includes("W_3_3__|__3_hx_laurel") || this.state.routes.includes("E_3_3__|__3_laurel_westEnd")) {
                        // Track #3 is Occupied
                        if (this.state.occupied_3) {
                            this.state.sw_3_src = CX_135_Occupied_Top_Lined_Bottom;
                        }
                        // Track #3 Is Routed
                        else if (this.state.routed_3) {
                            this.state.sw_3_src = CX_135_Lined_Both;
                        }
                    }
                    // Nothing Track #3
                    else {
                        this.state.sw_3_src = CX_135_Lined_Bottom;
                    }

                    // Signals
                    this.state.sig_8w_src = SIG_W_Stop;
                    this.state.sig_4w_src = SIG_W_Stop;
                    this.state.sig_2w_src = SIG_W_Stop;
                    this.state.sig_8e_src = SIG_E_Stop;
                    this.state.sig_4e_src = SIG_E_Stop;
                    this.state.sig_12e_src = SIG_E_Clear;
                }
            }
            else if (this.state.routes[i] === "W_4_3__|__3_hx_laurel") {
                // Set Tail Track Colors
                this.state.tail_4_e = color_4;
                this.state.tail_3_w = color_4;

                if (this.state.occupied_4) {
                    // Switches
                    this.state.sw_13_src = CX_135_R_Occupied;
                    this.state.sw_7_src = CX_225_Occupied_Bottom;
                    this.state.sw_3_src = CX_135_R_Occupied;
                    this.state.sw_1_src = CX_135_R_Occupied;

                    // Signals
                    this.state.sig_8w_src = SIG_W_Stop;
                    this.state.sig_4w_src = SIG_W_Stop;
                    this.state.sig_2w_src = SIG_W_Stop;
                    this.state.sig_10w_src = SIG_W_Stop;
                    this.state.sig_8e_src = SIG_E_Stop;
                    this.state.sig_4e_src = SIG_E_Stop;
                    this.state.sig_6e_src = SIG_E_Stop;
                    this.state.sig_12e_src = SIG_E_Stop;
                }
                else {
                    // Switches
                    this.state.sw_13_src = CX_135_R_Lined;
                    this.state.sw_7_src = CX_225_Lined_Bottom;
                    this.state.sw_3_src = CX_135_R_Lined;
                    this.state.sw_1_src = CX_135_R_Lined;

                    // Signals
                    this.state.sig_8w_src = SIG_W_Clear;
                    this.state.sig_4w_src = SIG_W_Stop;
                    this.state.sig_2w_src = SIG_W_Stop;
                    this.state.sig_10w_src = SIG_W_Stop;
                    this.state.sig_8e_src = SIG_E_Stop;
                    this.state.sig_4e_src = SIG_E_Stop;
                    this.state.sig_6e_src = SIG_E_Stop;
                    this.state.sig_12e_src = SIG_E_Stop;
                }
            }
            else if (this.state.routes[i] === "E_3_4__|__4_laurel_westEnd") {
                // Set Tail Track Colors
                this.state.tail_4_e = color_3;
                this.state.tail_3_w = color_3;

                if (this.state.occupied_3) {
                    // Switches
                    this.state.sw_13_src = CX_135_R_Occupied;
                    this.state.sw_7_src = CX_225_Occupied_Bottom;
                    this.state.sw_3_src = CX_135_R_Occupied;
                    this.state.sw_1_src = CX_135_R_Occupied;

                    // Signals
                    this.state.sig_8w_src = SIG_W_Stop;
                    this.state.sig_4w_src = SIG_W_Stop;
                    this.state.sig_2w_src = SIG_W_Stop;
                    this.state.sig_10w_src = SIG_W_Stop;
                    this.state.sig_8e_src = SIG_E_Stop;
                    this.state.sig_4e_src = SIG_E_Stop;
                    this.state.sig_6e_src = SIG_E_Stop;
                    this.state.sig_12e_src = SIG_E_Stop;
                }
                else {
                    // Switches
                    this.state.sw_13_src = CX_135_R_Lined;
                    this.state.sw_7_src = CX_225_Lined_Bottom;
                    this.state.sw_3_src = CX_135_R_Lined;
                    this.state.sw_1_src = CX_135_R_Lined;

                    // Signals
                    this.state.sig_8w_src = SIG_W_Stop;
                    this.state.sig_4w_src = SIG_W_Stop;
                    this.state.sig_2w_src = SIG_W_Stop;
                    this.state.sig_10w_src = SIG_W_Stop;
                    this.state.sig_8e_src = SIG_E_Stop;
                    this.state.sig_4e_src = SIG_E_Stop;
                    this.state.sig_6e_src = SIG_E_Clear;
                    this.state.sig_12e_src = SIG_E_Stop;
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
        // Set the state of SW #1
        // SW #1 Reversed
        if (this.state.sw_1) {
            this.state.sw_1_src = CX_135_R;
        }
        // SW #1 Normal
        else {
            this.state.sw_1_src = CX_135;
        }
        
        // Set the state of SW #3
        // SW #3 Reversed
        if (this.state.sw_3) {
            this.state.sw_3_src = CX_135_R;
        }
        // SW #3 Normal
        else {
            this.state.sw_3_src = CX_135;
        }

        // Set the state of SW #7
        // SW #7 Reversed
        if (this.state.sw_7) {
            this.state.sw_7_src = CX_225_R;
        }
        // SW #7 Normal
        else {
            this.state.sw_7_src = CX_225;
        }

        // Set the state of SW #9
        // SW #9 Reversed
        if (this.state.sw_9) {
            this.state.sw_9_src = CX_135_R;
        }
        // SW #9 Normal
        else {
            this.state.sw_9_src = CX_135;
        }

        // Set the state of SW #11
        // SW #11 Reversed
        if (this.state.sw_11) {
            this.state.sw_11_src = CX_225_R;
        }
        // SW #11 Normal
        else {
            this.state.sw_11_src = CX_225;
        }

        // Set the state of SW #13
        // SW #13 Reversed
        if (this.state.sw_13) {
            this.state.sw_13_src = CX_135_R;
        }
        // SW #13 Normal
        else {
            this.state.sw_13_src = CX_135;
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
        this.state.sig_2w_src = SIG_W;
        this.state.sig_4w_src = SIG_W;
        this.state.sig_8w_src = SIG_W;
        this.state.sig_10w_src = SIG_W;
        this.state.sig_4e_src = SIG_E;
        this.state.sig_6e_src = SIG_E;
        this.state.sig_8e_src = SIG_E;
        this.state.sig_12e_src = SIG_E;

        this.state.tail_3_e = Empty;
        this.state.tail_1_e = Empty;
        this.state.tail_2_e = Empty;
        this.state.tail_4_e = Empty;
        this.state.tail_3_center = Empty;
        this.state.tail_3_w = Empty;
        this.state.tail_1_w = Empty;
        this.state.tail_2_w = Empty;
        this.state.tail_4_w = Empty;
    }
    //---- END reset_drawings() ----
}
 
// Export the interlocking to be drawn on the screen
export default Laurel;