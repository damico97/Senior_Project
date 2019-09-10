import React, { Component } from 'react';
import '../../../css/Main_Line/mill.css';

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

const Empty = '#999999';
const Route = '#75fa4c';
const Occupied = '#eb3323';

class Mill extends Component {
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
        routes: this.props.status.routes
    };

    componentWillReceiveProps(nextProps){
        this.setState({
            sw_1: nextProps.status.sw_1, 
            sw_3: nextProps.status.sw_3,
            route_trk_1: nextProps.status.route_trk_1,
            route_trk_2: nextProps.status.route_trk_2,
            occupied_trk_1: nextProps.status.occupied_trk_1,
            occupied_trk_2: nextProps.status.occupied_trk_2,
            routes: nextProps.status.routes
        });
    }

    render() { 
        this.set_switch_img();
        //this.set_route_drawing();

        return (  
            <div>
                {/* Tags */}
                <div className="mill_title">MILL</div>
                <div className="mill_milepost">MP 11.1</div>

                {/* East Side Tail Tracks */}
                <div className="mill_1_east" style={{background: this.state.tail_1_w}}></div>
                <div className="mill_2_east" style={{background: this.state.tail_2_w}}></div>

                {/* Switches */}
                <div className="mill_SW_3" onClick={this.props.throw_sw_3}><img src={this.state.sw_3_src}/></div>
                <div className="mill_SW_1" onClick={this.props.throw_sw_1}><img src={this.state.sw_1_src}/></div>

                {/* West Side Tail Tracks */}
                <div className="mill_1_west" style={{background: this.state.tail_1_e}}></div>
                <div className="mill_2_west" style={{background: this.state.tail_2_e}}></div>

                {/* Signals */}
                <div className="mill_sig_2e" onClick={this.props.click_sig_2e}><img src={this.state.sig_2e_src}/></div>
                <div className="mill_sig_4e" onClick={this.props.click_sig_4e}><img src={this.state.sig_4e_src}/></div>
                <div className="mill_sig_2w" onClick={this.props.click_sig_2w}><img src={this.state.sig_2w_src}/></div>
                <div className="mill_sig_4w" onClick={this.props.click_sig_4w}><img src={this.state.sig_4w_src}/></div>
            </div>
        );
    }

    set_route_drawing = () => {
        if (!this.state.route_trk_1) {
            this.state.tail_1_e = Empty;
            this.state.tail_1_w = Empty;
            this.state.sig_2e_src = SIG_E;
            this.state.sig_2w_src = SIG_W;
        }
        if (!this.state.route_trk_2) {
            this.state.tail_2_e = Empty;
            this.state.tail_2_w = Empty;
            this.state.sig_4e_src = SIG_E;
            this.state.sig_4w_src = SIG_W;
        }
        if (!this.state.route_trk_1 && !this.state.route_trk_2) {
            this.state.tail_1_e = Empty;
            this.state.tail_1_w = Empty;
            this.state.tail_2_e = Empty;
            this.state.tail_2_w = Empty;
            this.state.sig_2e_src = SIG_E;
            this.state.sig_2w_src = SIG_W;
            this.state.sig_4e_src = SIG_E;
            this.state.sig_4w_src = SIG_W;
        }

        // Both Tracks Have Routes
        if (this.state.route_trk_1 && this.state.route_trk_2) {
            // Neither Track Is Occupied
            if (!this.state.occupied_trk_1 && !this.state.occupied_trk_2) {
                // Setting Tail Tracks
                this.state.tail_1_e = Route;
                this.state.tail_1_w = Route;
                this.state.tail_2_e = Route;
                this.state.tail_2_w = Route;

                // Setting Switches
                this.state.sw_1_src = CX_225_Lined_Both;
                this.state.sw_3_src = CX_135_Lined_Both;

                // Setting Signals
                // Track 1 West Bound
                if (this.state.route_trk_1 === "W_1_1__|__1_suscon_mill") {
                    this.state.sig_2w_src = SIG_W_Clear;
                    this.state.sig_2e_src = SIG_E_Stop;
                }
                // Track 1 East Bound
                else {
                    this.state.sig_2w_src = SIG_W_Stop;
                    this.state.sig_2e_src = SIG_E_Clear;
                }

                // Track 2 West Bound
                if (this.state.route_trk_2 === "W_2_2__|__2_suscon_mill") {
                    this.state.sig_4w_src = SIG_W_Clear;
                    this.state.sig_4e_src = SIG_E_Stop;
                }
                // Track 2 East Bound
                else {
                    this.state.sig_4w_src = SIG_W_Stop;
                    this.state.sig_4e_src = SIG_E_Clear;
                }
            }
            // Track 1 is Occupied And Track 2 Is Not Occupied
            else if (this.state.occupied_trk_1 && !this.state.occupied_trk_2) {
                // Setting Tail Tracks
                this.state.tail_1_e = Occupied;
                this.state.tail_1_w = Occupied;
                this.state.tail_2_e = Route;
                this.state.tail_2_w = Route;

                // Setting Switches
                this.state.sw_1_src = CX_225_Occupied_Top_Lined_Bottom;
                this.state.sw_3_src = CX_135_Occupied_Top_Lined_Bottom;

                // Setting Signals
                // Track 1
                this.state.sig_2w_src = SIG_W_Stop;
                this.state.sig_2e_src = SIG_E_Stop;

                // Track 2 West Bound
                if (this.state.route_trk_2 === "W_2_2__|__2_suscon_mill") {
                    this.state.sig_4w_src = SIG_W_Clear;
                    this.state.sig_4e_src = SIG_E_Stop;
                }
                // Track 2 East Bound
                else {
                    this.state.sig_4w_src = SIG_W_Stop;
                    this.state.sig_4e_src = SIG_E_Clear;
                }
            }
            // Track 1 is Not Occupied And Track 2 is Occupied
            else if (!this.state.occupied_trk_1 && this.state.occupied_trk_2) {
                // Settign Trail Tracks
                this.state.tail_1_e = Route;
                this.state.tail_1_w = Route;
                this.state.tail_2_e = Occupied;
                this.state.tail_2_w = Occupied;

                // Setting Switches
                this.state.sw_1_src = CX_225_Lined_Top_Occupied_Bottom;
                this.state.sw_3_src = CX_135_Lined_Top_Occupied_Bottom;

                // Setting Signals
                // Track 1 West Bound
                if (this.state.route_trk_1 === "W_1_1__|__1_suscon_mill") {
                    this.state.sig_2w_src = SIG_W_Clear;
                    this.state.sig_2e_src = SIG_E_Stop;
                }
                // Track 1 East Bound
                else {
                    this.state.sig_2w_src = SIG_W_Stop;
                    this.state.sig_2e_src = SIG_E_Clear;
                }

                // Track 2
                this.state.sig_4w_src = SIG_W_Stop;
                this.state.sig_4e_src = SIG_E_Stop;
            }
            // Both Tracks Are Occupied
            else {
                // Settign Tail Tracks
                this.state.tail_1_e = Occupied;
                this.state.tail_1_w = Occupied;
                this.state.tail_2_e = Occupied;
                this.state.tail_2_w = Occupied;

                // Setting Switches
                this.state.sw_1_src = CX_225_Occupied_Both;
                this.state.sw_3_src = CX_135_Occupied_Both;

                // Setting Signals
                this.state.sig_2w_src = SIG_W_Stop;
                this.state.sig_2e_src = SIG_E_Stop;
                this.state.sig_4w_src = SIG_W_Stop;
                this.state.sig_4e_src = SIG_E_Stop;
            }
        }
        // Track 1 Is Empty And Track 2 Is Lined
        else if (!this.state.route_trk_1 && this.state.route_trk_2) {
            // The Track Is Occupied
            if (this.state.occupied_trk_2) {
                // Crossover Using SW_1
                if (this.state.route_trk_2 === "E_2_1__|__1_mill_westSecaucus") {
                    // Setting Tail Tracks
                    this.state.tail_1_e = Occupied;
                    this.state.tail_2_w = Occupied;

                    // Settign Switches
                    this.state.sw_1_src = CX_225_R_Occupied;
                    this.state.sw_3_src = CX_135_Occupied_Bottom;

                    // Setting Signals
                    this.state.sig_2w_src = SIG_W_Stop;
                    this.state.sig_2e_src = SIG_E_Stop;
                    this.state.sig_4w_src = SIG_W_Stop;
                    this.state.sig_4e_src = SIG_E_Stop;
                }
                // Crossover Using SW_3
                else if (this.state.route_trk_2 === "W_2_1__|__1_mill_westSecaucus") {
                    // Setting Tail Tracks
                    this.state.tail_1_w = Occupied;
                    this.state.tail_2_e = Occupied;

                    // Settign Switches
                    this.state.sw_1_src = CX_225_Occupied_Bottom;
                    this.state.sw_3_src = CX_135_R_Occupied;

                    // Setting Signals
                    this.state.sig_2w_src = SIG_W_Stop;
                    this.state.sig_2e_src = SIG_E_Stop;
                    this.state.sig_4w_src = SIG_W_Stop;
                    this.state.sig_4e_src = SIG_E_Stop;
                }
                else {
                    // Setting Tail Tracks
                    this.state.tail_2_e = Occupied;
                    this.state.tail_2_w = Occupied;

                    // Settign Switches
                    this.state.sw_1_src = CX_225_Occupied_Bottom;
                    this.state.sw_3_src = CX_135_Occupied_Bottom;

                    // Setting Signals
                    this.state.sig_4w_src = SIG_W_Stop;
                    this.state.sig_4e_src = SIG_E_Stop;
                }
            }
            // Track 2 Is Lined Westbound
            else if (this.state.route_trk_2 === "W_2_2__|__2_suscon_mill") {
                // Setting Tail Tracks
                this.state.tail_2_e = Route;
                this.state.tail_2_w = Route;

                // Setting Switches
                this.state.sw_1_src = CX_225_Lined_Bottom;
                this.state.sw_3_src = CX_135_Lined_Bottom;

                // Setting Signals
                this.state.sig_4w_src = SIG_W_Clear;
                this.state.sig_4e_src = SIG_E_Stop;
            }
            // Track 2 Is Lined Eastbound
            else if (this.state.route_trk_2 === "E_2_2__|__2_mill_westSecaucus") {
                // Setting Tail Tracks
                this.state.tail_2_e = Route;
                this.state.tail_2_w = Route;

                // Settign Switches
                this.state.sw_1_src = CX_225_Lined_Bottom;
                this.state.sw_3_src = CX_135_Lined_Bottom;

                // Setting Signals
                this.state.sig_4w_src = SIG_W_Stop;
                this.state.sig_4e_src = SIG_E_Clear;
            }
            else if (this.state.route_trk_2 === "W_2_1__|__1_suscon_mill") {
                // Setting Tail Tracks
                this.state.tail_1_w = Route;
                this.state.tail_2_e = Route;

                // Settign Switches
                this.state.sw_1_src = CX_225_Lined_Bottom;
                this.state.sw_3_src = CX_135_R_Lined;

                // Setting Signals
                this.state.sig_2e_src = SIG_E_Stop;
                this.state.sig_4w_src = SIG_W_Clear;
                this.state.sig_2w_src = SIG_W_Stop;
                this.state.sig_4e_src = SIG_E_Stop;
            }
            else if (this.state.route_trk_2 === "E_2_1__|__1_mill_westSecaucus") {
                // Setting Tail Tracks
                this.state.tail_1_e = Route;
                this.state.tail_2_w = Route;

                // Settign Switches
                this.state.sw_1_src = CX_225_R_Lined;
                this.state.sw_3_src = CX_135_Lined_Bottom;

                // Setting Signals
                this.state.sig_2w_src = SIG_W_Stop;
                this.state.sig_4e_src = SIG_E_Clear;
                this.state.sig_2e_src = SIG_E_Stop;
                this.state.sig_4w_src = SIG_W_Stop;
            }
        }
        // Track 1 Is Lined And Track 2 Is Empty
        // Also covers any crossover moves
        else if (this.state.route_trk_1 && !this.state.route_trk_2) {
            // The Track is Occupied
            if (this.state.occupied_trk_1) {
                // Crossover Using SW_1
                if (this.state.route_trk_1 === "W_1_2__|__2_suscon_mill") {
                    // Setting Tail Tracks
                    this.state.tail_1_e = Occupied;
                    this.state.tail_2_w = Occupied;

                    // Settign Switches
                    this.state.sw_1_src = CX_225_R_Occupied;
                    this.state.sw_3_src = CX_135_Occupied_Bottom;

                    // Setting Signals
                    this.state.sig_2w_src = SIG_W_Stop;
                    this.state.sig_2e_src = SIG_E_Stop;
                    this.state.sig_4w_src = SIG_W_Stop;
                    this.state.sig_4e_src = SIG_E_Stop;
                }
                // Crossover Using SW_3
                else if (this.state.route_trk_1 === "E_1_2__|__2_mill_westSecaucus") {
                    // Setting Tail Tracks
                    this.state.tail_1_w = Occupied;
                    this.state.tail_2_e = Occupied;

                    // Settign Switches
                    this.state.sw_1_src = CX_225_Occupied_Bottom;
                    this.state.sw_3_src = CX_135_R_Occupied;

                    // Setting Signals
                    this.state.sig_2w_src = SIG_W_Stop;
                    this.state.sig_2e_src = SIG_E_Stop;
                    this.state.sig_4w_src = SIG_W_Stop;
                    this.state.sig_4e_src = SIG_E_Stop;
                }
                // There is No Crossover
                else {
                    // Setting Tail Tracks
                    this.state.tail_1_e = Occupied;
                    this.state.tail_1_w = Occupied;

                    // Setting Switches 
                    this.state.sw_1_src = CX_225_Occupied_Top;
                    this.state.sw_3_src = CX_135_Occupied_Top;

                    // Setting Signals
                    this.state.sig_2w_src = SIG_W_Stop;
                    this.state.sig_2e_src = SIG_E_Stop;
                }
            }
            // Track 1 Lined Westbound
            else if (this.state.route_trk_1 === "W_1_1__|__1_suscon_mill") {
                // Setting Tail Tracks
                this.state.tail_1_e = Route;
                this.state.tail_1_w = Route;

                // Setting Switches 
                this.state.sw_1_src = CX_225_Lined_Top;
                this.state.sw_3_src = CX_135_Lined_Top;

                // Setting Signals
                this.state.sig_2w_src = SIG_W_Clear;
                this.state.sig_2e_src = SIG_E_Stop;
            }
            // Track 1 Lined Eastbound
            else if (this.state.route_trk_1 === "E_1_1__|__1_mill_westSecaucus") {
                // Setting Tail Tracks
                this.state.tail_1_e = Route;
                this.state.tail_1_w = Route;

                // Setting Switches
                this.state.sw_1_src = CX_225_Lined_Top;
                this.state.sw_3_src = CX_135_Lined_Top;

                // Setting Signals
                this.state.sig_2w_src = SIG_W_Stop;
                this.state.sig_2e_src = SIG_E_Clear;
            }
            // Crossover Using SW_1
            else if (this.state.route_trk_1 === "W_1_2__|__2_suscon_mill") {
                // Setting Tail Tracks
                this.state.tail_1_e = Route;
                this.state.tail_2_w = Route;

                // Settign Switches
                this.state.sw_1_src = CX_225_R_Lined;
                this.state.sw_3_src = CX_135_Lined_Bottom;

                // Setting Signals
                // Westbound
                if (this.state.route_trk_1 === "W_1_2__|__2_suscon_mill") {
                    this.state.sig_2w_src = SIG_W_Clear;
                    this.state.sig_4e_src = SIG_E_Stop;
                }
                // Eastbound
                else {
                    this.state.sig_2w_src = SIG_W_Stop;
                    this.state.sig_4e_src = SIG_E_Clear;
                }

                // Always the same
                this.state.sig_2e_src = SIG_E_Stop;
                this.state.sig_4w_src = SIG_W_Stop;
            }
            // Crossover Using SW_3
            else if (this.state.route_trk_1 === "E_1_2__|__2_mill_westSecaucus") {
                // Setting Tail Tracks
                this.state.tail_1_w = Route;
                this.state.tail_2_e = Route;

                // Settign Switches
                this.state.sw_1_src = CX_225_Lined_Bottom;
                this.state.sw_3_src = CX_135_R_Lined;

                // Setting Signals
                // Eastbound
                this.state.sig_2e_src = SIG_E_Clear;
                this.state.sig_4w_src = SIG_W_Stop;
                this.state.sig_2w_src = SIG_W_Stop;
                this.state.sig_4e_src = SIG_E_Stop;
            }
        }
        else {

        }
    }

    set_switch_img = () => {
        if (this.state.sw_1) {
            this.state.sw_1_src = CX_225_R;
        }
        else {
            this.state.sw_1_src = CX_225;
        }
        
        if (this.state.sw_3) {
            this.state.sw_3_src = CX_135_R;
        }
        else {
            this.state.sw_3_src = CX_135;
        }
    }
}
 
export default Mill;