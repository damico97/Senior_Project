import React, { Component } from 'react';
import '../../../css/Main_Line/laurel.css';

// Import Images
// Switch Images
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

// Track Colors
const Empty = '#999999';
const Green = '#75fa4c';
const Red = '#eb3323';


class Laurel extends Component {
    state = {  
        sw_1: this.props.status.sw_1,
        sw_3: this.props.status.sw_3,
        sw_7: this.props.status.sw_7,
        sw_9: this.props.status.sw_9,
        sw_11: this.props.status.sw_11,
        sw_13: this.props.status.sw_13,
        sw_1_src: CX_135,
        sw_3_src: CX_135,
        sw_7_src: CX_225,
        sw_11_src: CX_225,
        sw_13_src: CX_135,

        sig_2w_src: SIG_W,
        sig_4w_src: SIG_W,
        sig_8w_src: SIG_W,
        sig_10w_src: SIG_W,
        sig_4e_src: SIG_E,
        sig_6e_src: SIG_E,
        sig_8e_src: SIG_E,
        sig_12e_src: SIG_E,

        tail_3_e: Empty,
        tail_1_e: Empty,
        tail_2_e: Empty,
        tail_4_e: Empty,
        tail_3_center: Empty,
        tail_3_w: Empty,
        tail_1_w: Empty,
        tail_2_w: Empty,
        tail_4_w: Empty,

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

    render() { 
        this.reset_drawings();
        this.set_switch_img();
        this.set_route_drawings();

        return (  
            <div>
                <div className="laurel_title">LAUREL</div>
                <div className="laurel_milepost">MP 4.3</div>

                <div className="b_laurel_3_west" style={{background: this.state.tail_3_w}}></div>
                <div className="b_laurel_2_west" style={{background: this.state.tail_1_w}}></div>
                <div className="m_laurel_2_west" style={{background: this.state.tail_2_w}}></div>
                <div className="m_laurel_4_west" style={{background: this.state.tail_4_w}}></div>

                <div className="laurel_SW_1" onClick={this.props.throw_sw_1}><img src={this.state.sw_1_src}/></div>
                <div className="laurel_SW_3" onClick={this.props.throw_sw_3}><img src={this.state.sw_3_src}/></div>
                <div className="laurel_SW_7" onClick={this.props.throw_sw_7}><img src={this.state.sw_7_src}/></div>
                <div className="laurel_SW_11" onClick={this.props.throw_sw_11}><img src={this.state.sw_11_src}/></div>
                <div className="laurel_SW_13" onClick={this.props.throw_sw_13}><img src={this.state.sw_13_src}/></div>

                <div className="m_laurel_3_center" style={{background: this.state.tail_3_center}}></div>

                <div className="m_laurel_3_east" style={{background: this.state.tail_3_e}}></div>
                <div className="m_laurel_1_east" style={{background: this.state.tail_1_e}}></div>
                <div className="m_laurel_2_east" style={{background: this.state.tail_2_e}}></div>
                <div className="m_laurel_4_east" style={{background: this.state.tail_4_e}}></div>

                <div className="laurel_sig_10w" onClick={this.props.click_sig_10w}><img src={this.state.sig_10w_src}/></div>
                <div className="laurel_sig_2w" onClick={this.props.click_sig_2w}><img src={this.state.sig_2w_src}/></div>
                <div className="laurel_sig_4w" onClick={this.props.click_sig_4w}><img src={this.state.sig_4w_src}/></div>
                <div className="laurel_sig_8w" onClick={this.props.click_sig_8w}><img src={this.state.sig_8w_src}/></div>

                <div className="laurel_sig_4e" onClick={this.props.click_sig_4e}><img src={this.state.sig_4e_src}/></div>
                <div className="laurel_sig_6e" onClick={this.props.click_sig_6e}><img src={this.state.sig_6e_src}/></div>
                <div className="laurel_sig_8e" onClick={this.props.click_sig_8e}><img src={this.state.sig_8e_src}/></div>
                <div className="laurel_sig_12e" onClick={this.props.click_sig_12e}><img src={this.state.sig_12e_src}/></div>
            </div>
        );
    }

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
            if (this.state.routes[i] === "W_1_1__|__1_hx_laurel" || this.state.routes[i] === "E_1_1__|__1_laurel_westEnd") {
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
                    if (this.state.routes.includes("W_2_2__|__2_westSecaucus_laurel") || this.state.routes.includes("E_2_2__|__2_laurel_westEnd")) {
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
                    if (this.state.routes[i] === "W_1_1__|__1_hx_laurel") {
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
                    this.state.sw_3_src = CX_135_Occupied_Top;
                    this.state.sw_11_src = CX_225_Occupied_Top;

                    // Signals
                    this.state.sig_10w_src = SIG_W_Stop;
                    this.state.sig_6e_src = SIG_E_Stop;
                }
                // The Route Is NOT Occupied
                else {
                    // Switches
                    this.state.sw_3_src = CX_135_Lined_Top;
                    this.state.sw_11_src = CX_225_Lined_Top;

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

                if (this.state.occupied_4) {
                    // Switches
                    this.state.sw_13_src = CX_135_Occupied_Bottom;

                    // Signals
                    this.state.sig_8w_src = SIG_W_Stop;
                    this.state.sig_8e_src = SIG_E_Stop;
                }
                else {
                    // Switches
                    this.state.sw_13_src = CX_135_Lined_Bottom;

                    // Signals
                    if (this.state.routes[i] === "W_4_4__|__4_westSecaucus_laurel") {
                        this.state.sig_8w_src = SIG_W_Clear;
                        this.state.sig_8e_src = SIG_E_Stop
                    }
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

                if (this.state.occupied_3) {
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
                else {
                    // Switches
                    this.state.sw_3_src = CX_135_Lined_Bottom;
                    this.state.sw_11_src = CX_225_R_Lined;
                    this.state.sw_1_src = CX_135_Lined_Top;
                    this.state.sw_7_src = CX_225_Lined_Top;

                    // Signals
                    this.state.sig_10w_src = SIG_W_Clear;
                    this.state.sig_2w_src = SIG_W_Stop;
                    this.state.sig_6e_src = SIG_E_Stop;
                    this.state.sig_12e_src = SIG_E_Stop;
                }
            }
            else if (this.state.routes[i] === "W_3_2__|__2_westSecaucus_laurel") {
                // Set Tail Track Colors
                this.state.tail_3_e = color_3;
                this.state.tail_2_w = color_3;

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
        }
    }

    set_switch_img = () => {
        if (this.state.sw_1) {
            this.state.sw_1_src = CX_135_R;
        }
        else {
            this.state.sw_1_src = CX_135;
        }
        
        if (this.state.sw_3) {
            this.state.sw_3_src = CX_135_R;
        }
        else {
            this.state.sw_3_src = CX_135;
        }

        if (this.state.sw_7) {
            this.state.sw_7_src = CX_225_R;
        }
        else {
            this.state.sw_7_src = CX_225;
        }

        if (this.state.sw_9) {
            this.state.sw_9_src = CX_135_R;
        }
        else {
            this.state.sw_9_src = CX_135;
        }

        if (this.state.sw_11) {
            this.state.sw_11_src = CX_225_R;
        }
        else {
            this.state.sw_11_src = CX_225;
        }

        if (this.state.sw_13) {
            this.state.sw_13_src = CX_135_R;
        }
        else {
            this.state.sw_13_src = CX_135;
        }
    }

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
}
 
export default Laurel;