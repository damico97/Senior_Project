import React, { Component } from 'react';
import '../../../css/Main_Line/ridgewood_jct.css';

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

import SW_U_E from '../../../../public/images/SW_U_E.png';
import SW_U_E_Lined from '../../../../public/images/SW_U_E_Lined.png';
import SW_U_E_Occupied from '../../../../public/images/SW_U_E_Occupied.png';
import SW_U_E_R from '../../../../public/images/SW_U_E_R.png';
import SW_U_E_R_Lined from '../../../../public/images/SW_U_E_R_Lined.png';
import SW_U_E_R_Occupied from '../../../../public/images/SW_U_E_R_Occupied.png';

// Signal Images
import SIG_W from '../../../../public/images/SIG_W.png';
import SIG_W_Clear from '../../../../public/images/SIG_W_Clear.png';
import SIG_W_Stop from '../../../../public/images/SIG_W_Stop.png';
import SIG_E from '../../../../public/images/SIG_E.png';
import SIG_E_Clear from '../../../../public/images/SIG_E_Clear.png';
import SIG_E_Stop from '../../../../public/images/SIG_E_Stop.png';

const Empty = '#999999';
const Lined = '#75fa4c';
const Occupied = '#eb3323';


class RidgewoodJunction extends Component {
    state = {  
        sw_1: this.props.status.sw_1,
        sw_3: this.props.status.sw_3,
        sw_5: this.props.status.sw_5,
        sw_7: this.props.status.sw_7,
        sw_9: this.props.status.sw_9,
        sw_1_src: CX_135,
        sw_3_src: CX_135,
        sw_5_src: CX_225,
        sw_7_src: CX_225,
        sw_9_src: SW_U_E,

        sig_2w1_src: SIG_W,
        sig_2w2_src: SIG_W,
        sig_4w_src: SIG_W,
        sig_6w_src: SIG_W,
        sig_2e_src: SIG_E,
        sig_4e_src: SIG_E,
        sig_6e_src: SIG_E,

        tail_3_w: Empty,
        tail_1_w: Empty,
        tail_2_w: Empty,
        tail_1_center: Empty,
        tail_3_center: Empty,
        tail_m_1_e: Empty,
        tail_m_2_e: Empty,
        tail_b_1_e: Empty,
        tial_b_2_e: Empty,

        routes: this.props.status.routes,
        lined_track_1: false,
        lined_track_2: false,
        lined_track_3: false,
        occupied_track_1: false,
        occupied_track_2: false,
        occupied_track_3: false
    };

    componentWillReceiveProps(nextProps){
        this.setState({
            sw_1: nextProps.status.sw_1, 
            sw_3: nextProps.status.sw_3,
            sw_5: nextProps.status.sw_5,
            sw_7: nextProps.status.sw_7,
            sw_9: nextProps.status.sw_9,

            routes: this.props.status.routes
        });
    }

    render() { 
        this.set_switch_img();
        this.set_route_drawing();

        return (  
            <div>
                <div className="ridgewood_title">RIDGEWOOD JUNCTION</div>
                <div className="ridgewood_milepost">MP 20.3</div>

                <div className="m_ridgewood_3_west" style={{background: this.state.tail_3_w}}></div>
                <div className="m_ridgewood_1_west" style={{background: this.state.tail_1_w}}></div>
                <div className="m_ridgewood_2_west" style={{background: this.state.tail_2_w}}></div>

                <div className="ridgewood_1" onClick={this.props.throw_sw_1}><img src={this.state.sw_1_src}/></div>
                <div className="ridgewood_3" onClick={this.props.throw_sw_3}><img src={this.state.sw_3_src}/></div>
                <div className="ridgewood_5" onClick={this.props.throw_sw_5}><img src={this.state.sw_5_src}/></div>
                <div className="ridgewood_7" onClick={this.props.throw_sw_7}><img src={this.state.sw_7_src}/></div>
                <div className="ridgewood_9" onClick={this.props.throw_sw_9}><img src={this.state.sw_9_src}/></div>

                <div className="m_ridgewood_3_center" style={{background: this.state.tail_3_center}}></div>
                <div className="m_ridgewood_1_center" style={{background: this.state.tail_1_center}}></div>

                <div className="m_ridgewood_1_east" style={{background: this.state.tail_m_1_e}}></div>
                <div className="m_ridgewood_2_east" style={{background: this.state.tail_m_2_e}}></div>
            
                <div className="b_ridgewood_1_Diag" style={{background: this.state.tail_b_1_e}}></div>
                <div className="b_ridgewood_1" style={{background: this.state.tail_b_1_e}}></div>
                <div className="b_ridgewood_2" style={{background: this.state.tail_b_2_e}}></div>

                <div className="ridgewood_sig_6w" onClick={this.props.click_sig_6w}><img src={this.state.sig_6w_src}/></div>
                <div className="ridgewood_sig_2w-2" onClick={this.props.click_sig_2w_2}><img src={this.state.sig_2w2_src}/></div>
                <div className="ridgewood_sig_2w-1" onClick={this.props.click_sig_2w_1}><img src={this.state.sig_2w1_src}/></div>
                <div className="ridgewood_sig_4w" onClick={this.props.click_sig_4w}><img src={this.state.sig_4w_src}/></div>
                <div className="ridgewood_sig_6e" onClick={this.props.click_sig_6e}><img src={this.state.sig_6e_src}/></div>
                <div className="ridgewood_sig_2e" onClick={this.props.click_sig_2e}><img src={this.state.sig_2e_src}/></div>
                <div className="ridgewood_sig_4e" onClick={this.props.click_sig_4e}><img src={this.state.sig_4e_src}/></div>
            </div>
        );
    }

    set_route_drawing() {
        /*
        "E_3_2__|__2_ridgewood_suscon"
        */
        
        this.state.tail_1_center = Empty;
        this.state.tail_3_center = Empty;
        this.state.tail_1_w = Empty;
        this.state.tail_2_w = Empty;
        this.state.tail_3_w = Empty;
        this.state.tail_m_1_e = Empty;
        this.state.tail_m_2_e = Empty;
        this.state.tail_b_2_e = Empty;
        this.state.tail_b_1_e = Empty;

        this.state.sig_6w_src = SIG_W;
        this.state.sig_2w1_src = SIG_W;
        this.state.sig_2w2_src = SIG_W;
        this.state.sig_4w_src = SIG_W;
        this.state.sig_6e_src = SIG_E;
        this.state.sig_2e_src = SIG_E;
        this.state.sig_4e_src = SIG_E;

        for (let i = 0; i < this.state.routes.length; i++) {
            // Routes From Signal 2W-1 And 2W-2
            // West On Track 1
            if (this.state.routes[i] === "W_1_1__|__1_wc_ridgewood" || this.state.routes[i] === "W_4_1__|__1_wc_ridgewood" 
                || this.state.routes[i] === "E_1_1__|__1_ridgewood_suscon" || this.state.routes[i] === "E_1_4__|__2_ridgewood_bt") {
                // The Route Is Occupied
                if (this.state.occupied_track_1) {
                    // Tail Tracks
                    if (this.state.routes[i] === "W_1_1__|__1_wc_ridgewood" || this.state.routes[i] === "E_1_1__|__1_ridgewood_suscon") {
                        this.state.tail_m_1_e = Occupied;
                    }
                    else {
                        this.state.tail_b_2_e = Occupied;
                    }
                    this.state.tail_1_center = Occupied;
                    this.state.tail_1_w = Occupied;

                    // Switches
                    // Checking If Track 3 has status, and change switch images to match
                    if (this.state.lined_track_3) {
                        this.state.sw_1_src = CX_135_Lined_Top_Occupied_Bottom;
                        this.state.sw_7_src = CX_225_Lined_Top_Occupied_Bottom; 
                    }
                    else if (this.state.occupied_track_3) {
                        this.state.sw_1_src = CX_135_Occupied_Both;
                        this.state.sw_7_src = CX_225_Occupied_Both;
                    }
                    else {
                        this.state.sw_1_src = CX_135_Occupied_Bottom;
                        this.state.sw_7_src = CX_225_Occupied_Bottom; 
                    }

                    // CHeck if track 2 has status, and change switch images to match
                    if (this.state.lined_track_2) {
                        this.state.sw_3_src = CX_135_Occupied_Top_Lined_Bottom;
                        this.state.sw_5_src = CX_225_Occupied_Top_Lined_Bottom;
                    }
                    else if (this.state.occupied_track_2) {
                        this.state.sw_3_src = CX_135_Occupied_Both;
                        this.state.sw_5_src = CX_225_Occupied_Both;
                    }
                    else {
                        this.state.sw_3_src = CX_135_Occupied_Top;
                        this.state.sw_5_src = CX_225_Occupied_Top;
                    }

                    // Set SW_9 depending on the current route
                    if (this.state.routes[i] === "W_4_1__|__1_wc_ridgewood" || this.state.routes[i] === "E_1_4__|__2_ridgewood_bt") {
                        this.state.sw_9_src = SW_U_E_R_Occupied;
                    }
                    else {
                        this.state.sw_9_src = SW_U_E_Occupied;
                    }

                    // Signals
                    this.state.sig_2w1_src = SIG_W_Stop;
                    this.state.sig_2w2_src = SIG_W_Stop;
                    this.state.sig_2e_src = SIG_E_Stop;
                }
                // The Route Is Not Occupied
                else {
                    // Tail Tracks
                    if (this.state.routes[i] === "W_1_1__|__1_wc_ridgewood" || this.state.routes[i] === "E_1_1__|__1_ridgewood_suscon") {
                        this.state.tail_m_1_e = Lined;
                    }
                    else {
                        this.state.tail_b_2_e = Lined;
                    }
                    this.state.tail_1_center = Lined;
                    this.state.tail_1_w = Lined;

                    // Switches
                    // Checking If Track 3 has status, and change switch images to match
                    if (this.state.lined_track_3) {
                        this.state.sw_1_src = CX_135_Lined_Both;
                        this.state.sw_7_src = CX_225_Lined_Both; 
                    }
                    else if (this.state.occupied_track_3) {
                        this.state.sw_1_src = CX_135_Occupied_Top_Lined_Bottom;
                        this.state.sw_7_src = CX_225_Occupied_Top_Lined_Bottom;
                    }
                    else {
                        this.state.sw_1_src = CX_135_Lined_Bottom;
                        this.state.sw_7_src = CX_225_Lined_Bottom; 
                    }

                    // CHeck if track 2 has status, and change switch images to match
                    if (this.state.lined_track_2) {
                        this.state.sw_3_src = CX_135_Lined_Both;
                        this.state.sw_5_src = CX_225_Lined_Both;
                    }
                    else if (this.state.occupied_track_2) {
                        this.state.sw_3_src = CX_135_Lined_Top_Occupied_Bottom;
                        this.state.sw_5_src = CX_225_Lined_Top_Occupied_Bottom;
                    }
                    else {
                        this.state.sw_3_src = CX_135_Lined_Top;
                        this.state.sw_5_src = CX_225_Lined_Top;
                    }

                    // Set SW_9 depending on the current route
                    if (this.state.routes[i] === "W_4_1__|__1_wc_ridgewood" || this.state.routes[i] === "E_1_4__|__2_ridgewood_bt") {
                        this.state.sw_9_src = SW_U_E_R_Lined;
                    }
                    else {
                        this.state.sw_9_src = SW_U_E_Lined;
                    }

                    // Signals
                    if (this.state.routes[i] === "W_1_1__|__1_wc_ridgewood") {
                        this.state.sig_2w1_src = SIG_W_Clear;
                        this.state.sig_2w2_src = SIG_W_Stop;
                        this.state.sig_2e_src = SIG_E_Stop;
                    }
                    else if (this.state.routes[i] === "W_4_1__|__1_wc_ridgewood") {
                        this.state.sig_2w1_src = SIG_W_Stop;
                        this.state.sig_2w2_src = SIG_W_Clear;
                        this.state.sig_2e_src = SIG_E_Stop;
                    }
                    else {
                        this.state.sig_2w1_src = SIG_W_Stop;
                        this.state.sig_2w2_src = SIG_W_Stop;
                        this.state.sig_2e_src = SIG_E_Clear;
                    }
                }
            }
            // West On Track 3
            else if (this.state.routes[i] === "W_1_3__|__3_wc_ridgewood" || this.state.routes[i] === "W_4_3__|__3_wc_ridgewood" 
                || this.state.routes[i] === "E_3_1__|__1_ridgewood_suscon" || this.state.routes[i] === "E_3_4__|__2_ridgewood_bt") {
                // The Route Is Occupied
                if (this.state.occupied_track_1 || this.state.occupied_track_3) {
                    // Tail Tracks
                    if (this.state.routes[i] === "W_1_3__|__3_wc_ridgewood" || this.state.routes[i] === "E_3_1__|__1_ridgewood_suscon") {
                        this.state.tail_m_1_e = Occupied;
                    }
                    else {
                        this.state.tail_b_2_e = Occupied;
                    }
                    this.state.tail_3_w = Occupied;
                    this.state.tail_1_center = Occupied;

                    // Switches 
                    this.state.sw_1_src = CX_135_R_Occupied;
                    this.state.sw_7_src = CX_225_Occupied_Bottom;

                    // Check if track 2 has status, and change switch images to match
                    if (this.state.lined_track_2) {
                        this.state.sw_3_src = CX_135_Lined_Top_Occupied_Bottom;
                        this.state.sw_5_src = CX_225_Lined_Top_Occupied_Bottom;
                    }
                    else if (this.state.occupied_track_2) {
                        this.state.sw_3_src = CX_135_Occupied_Both;
                        this.state.sw_5_src = CX_225_Occupied_Both;
                    }
                    else {
                        this.state.sw_3_src = CX_135_Occupied_Top;
                        this.state.sw_5_src = CX_225_Occupied_Top;
                    }

                    // Set SW-9 based on routing
                    if (this.state.routes[i] === "W_4_3__|__3_wc_ridgewood" || this.state.routes[i] === "E_3_4__|__2_ridgewood_bt") {
                        this.state.sw_9_src = SW_U_E_R_Occupied;
                    }
                    else {
                        this.state.sw_9_src = SW_U_E_Occupied;
                    }

                    // Signals
                    this.state.sig_6w_src = SIG_W_Stop;
                    this.state.sig_2w1_src = SIG_W_Stop;
                    this.state.sig_2w2_src = SIG_W_Stop;
                    this.state.sig_2e_src = SIG_E_Stop;
                    this.state.sig_6e_src = SIG_E_Stop;
                }
                // The Route Is Not Occupied
                else {
                    // Tail Tracks
                    if (this.state.routes[i] === "W_1_3__|__3_wc_ridgewood" || this.state.routes[i] === "E_3_1__|__1_ridgewood_suscon") {
                        this.state.tail_m_1_e = Lined;
                    }
                    else {
                        this.state.tail_b_2_e = Lined;
                    }
                    this.state.tail_3_w = Lined;
                    this.state.tail_1_center = Lined;

                    // Switches 
                    this.state.sw_1_src = CX_135_R_Lined;
                    this.state.sw_7_src = CX_225_Lined_Bottom;

                    // Check if track 2 has status, and change switch images to match
                    if (this.state.lined_track_2) {
                        this.state.sw_3_src = CX_135_Lined_Both;
                        this.state.sw_5_src = CX_225_Lined_Both;
                    }
                    else if (this.state.occupied_track_2) {
                        this.state.sw_3_src = CX_135_Lined_Top_Occupied_Bottom;
                        this.state.sw_5_src = CX_225_Lined_Top_Occupied_Bottom;
                    }
                    else {
                        this.state.sw_3_src = CX_135_Lined_Top;
                        this.state.sw_5_src = CX_225_Lined_Top;
                    }

                    // Set SW-9 based on routing
                    if (this.state.routes[i] === "W_4_3__|__3_wc_ridgewood" || this.state.routes[i] === "E_3_4__|__2_ridgewood_bt") {
                        this.state.sw_9_src = SW_U_E_R_Lined;
                    }
                    else {
                        this.state.sw_9_src = SW_U_E_Lined;
                    }

                    // Signals
                    if (this.state.routes[i] === "W_1_3__|__3_wc_ridgewood") {
                        this.state.sig_6w_src = SIG_W_Stop;
                        this.state.sig_2w1_src = SIG_W_Clear;
                        this.state.sig_2w2_src = SIG_W_Stop;
                        this.state.sig_2e_src = SIG_E_Stop;
                        this.state.sig_6e_src = SIG_E_Stop;
                    }
                    else if (this.state.routes[i] === "E_3_1__|__1_ridgewood_suscon" || this.state.routes[i] === "E_3_4__|__2_ridgewood_bt") {
                        this.state.sig_6w_src = SIG_W_Stop;
                        this.state.sig_2w1_src = SIG_W_Stop;
                        this.state.sig_2w2_src = SIG_W_Stop;
                        this.state.sig_2e_src = SIG_E_Stop;
                        this.state.sig_6e_src = SIG_E_Clear;
                    }
                    else {
                        this.state.sig_6w_src = SIG_W_Stop;
                        this.state.sig_2w1_src = SIG_W_Stop;
                        this.state.sig_2w2_src = SIG_W_Clear;
                        this.state.sig_2e_src = SIG_E_Stop;
                        this.state.sig_6e_src = SIG_E_Stop;
                    }
                }
            }
            // West On Track 2
            else if (this.state.routes[i] === "W_1_2__|__2_wc_ridgewood" || this.state.routes[i] === "W_4_2__|__2_wc_ridgewood"
                || this.state.routes[i] === "E_2_1__|__1_ridgewood_suscon" || this.state.routes[i] === "E_2_4__|__2_ridgewood_bt") {
                // The Route Is Occupied
                if (this.state.occupied_track_1 || this.state.occupied_track_2) {
                    if (this.state.routes[i] === "W_1_2__|__2_wc_ridgewood" || this.state.routes[i] === "E_2_1__|__1_ridgewood_suscon") {
                        this.state.tail_m_1_e = Occupied;
                    }
                    else {
                        this.state.tail_b_2_e = Occupied;
                    }
                    this.state.tail_2_w = Occupied;
                    this.state.tail_1_center = Occupied;
    
                    this.state.sw_3_src = CX_135_Occupied_Bottom;
                    this.state.sw_5_src = CX_225_R_Occupied;
    
                    if (this.state.lined_track_3) {
                        this.state.sw_7_src = CX_225_Lined_Top; 
                    }
                    else if (this.state.occupied_track_3) {
                        this.state.sw_7_src = CX_225_Occupied_Both;
                    }
                    else {
                        this.state.sw_7_src = CX_225_Occupied_Bottom; 
                    }
    
                    if (this.state.routes[i] === "W_4_2__|__2_wc_ridgewood" || this.state.routes[i] === "E_2_4__|__2_ridgewood_bt") {
                        this.state.sw_9_src = SW_U_E_R_Occupied;
                    }
                    else {
                        this.state.sw_9_src = SW_U_E_Occupied;
                    }

                    // Signals
                    this.state.sig_2w1_src = SIG_W_Stop;
                    this.state.sig_2w2_src = SIG_W_Stop;
                    this.state.sig_4w_src = SIG_W_Stop;
                    this.state.sig_2e_src = SIG_E_Stop;
                    this.state.sig_4e_src = SIG_E_Stop;
                }
                // The Route Is Not Occupied
                else {
                    if (this.state.routes[i] === "W_1_2__|__2_wc_ridgewood" || this.state.routes[i] === "E_2_1__|__1_ridgewood_suscon") {
                        this.state.tail_m_1_e = Lined;
                    }
                    else {
                        this.state.tail_b_2_e = Lined;
                    }
                    this.state.tail_2_w = Lined;
                    this.state.tail_1_center = Lined;
    
                    this.state.sw_3_src = CX_135_Lined_Bottom;
                    this.state.sw_5_src = CX_225_R_Lined;
    
                    if (this.state.lined_track_3) {
                        this.state.sw_7_src = CX_225_Lined_Both; 
                    }
                    else if (this.state.occupied_track_3) {
                        this.state.sw_7_src = CX_225_Occupied_Top_Lined_Bottom;
                    }
                    else {
                        this.state.sw_7_src = CX_225_Lined_Bottom; 
                    }
    
                    if (this.state.routes[i] === "W_4_2__|__2_wc_ridgewood" || this.state.routes[i] === "E_2_4__|__2_ridgewood_bt") {
                        this.state.sw_9_src = SW_U_E_R_Lined;
                    }
                    else {
                        this.state.sw_9_src = SW_U_E_Lined;
                    }

                    // Signals
                    if (this.state.routes[i] === "W_1_2__|__2_wc_ridgewood") {
                        this.state.sig_2w1_src = SIG_W_Clear;
                        this.state.sig_2w2_src = SIG_W_Stop;
                        this.state.sig_4w_src = SIG_W_Stop;
                        this.state.sig_2e_src = SIG_E_Stop;
                        this.state.sig_4e_src = SIG_E_Stop;
                    }
                    else if (this.state.routes[i] === "E_2_1__|__1_ridgewood_suscon" || this.state.routes[i] === "E_2_4__|__2_ridgewood_bt") {
                        this.state.sig_2w1_src = SIG_W_Stop;
                        this.state.sig_2w2_src = SIG_W_Stop;
                        this.state.sig_4w_src = SIG_W_Stop;
                        this.state.sig_2e_src = SIG_E_Stop;
                        this.state.sig_4e_src = SIG_E_Clear;
                    }
                    else {
                        this.state.sig_2w1_src = SIG_W_Stop;
                        this.state.sig_2w2_src = SIG_W_Clear;
                        this.state.sig_4w_src = SIG_W_Stop;
                        this.state.sig_2e_src = SIG_E_Stop;
                        this.state.sig_4e_src = SIG_E_Stop;
                    }
                }
            }
            else if (this.state.routes[i] === "W_2_2__|__2_wc_ridgewood" || this.state.routes[i] === "E_2_2__|__2_ridgewood_suscon") {
                if (this.occupied_track_2) {
                    // Tail Tracks
                    this.state.tail_m_2_e = Occupied;
                    this.state.tail_2_w = Occupied;

                    // Switches
                    // Check if track 1 has status, and change switch images to match
                    if (this.state.lined_track_1) {
                        this.state.sw_3_src = CX_135_Lined_Top_Occupied_Bottom;
                        this.state.sw_5_src = CX_225_Lined_Top_Occupied_Bottom;
                    }
                    else if (this.state.occupied_track_1) {
                        this.state.sw_3_src = CX_135_Occupied_Both;
                        this.state.sw_5_src = CX_225_Occupied_Both;
                    }
                    else {
                        this.state.sw_3_src = CX_135_Occupied_Bottom;
                        this.state.sw_5_src = CX_225_Occupied_Bottom;
                    }

                    // Signals
                    this.state.sig_4w_src = SIG_W_Stop;
                    this.state.sig_4e_src = SIG_E_Stop;
                }
                else {
                    // Tail Tracks
                    this.state.tail_m_2_e = Lined;
                    this.state.tail_2_w = Lined;

                    // Switches
                    // Check if track 1 has status, and change switch images to match
                    if (this.state.lined_track_1) {
                        this.state.sw_3_src = CX_135_Lined_Both;
                        this.state.sw_5_src = CX_225_Lined_Both;
                    }
                    else if (this.state.occupied_track_1) {
                        this.state.sw_3_src = CX_135_Occupied_Top_Line_Bottom;
                        this.state.sw_5_src = CX_225_Occupied_Top_Line_Bottom;
                    }
                    else {
                        this.state.sw_3_src = CX_135_Lined_Bottom;
                        this.state.sw_5_src = CX_225_Lined_Bottom;
                    }

                    // Signals
                    if (this.state.routes[i] === "E_2_2__|__2_ridgewood_suscon") {
                        this.state.sig_4w_src = SIG_W_Stop;
                        this.state.sig_4e_src = SIG_E_Clear;
                    }
                    else {
                        this.state.sig_4w_src = SIG_W_Clear;
                        this.state.sig_4e_src = SIG_E_Stop;
                    }
                }
            }
            else if (this.state.routes[i] === "W_2_1__|__1_wc_ridgewood" || this.state.routes[i] === "E_1_2__|__2_ridgewood_suscon") {
                if (this.state.occupied_track_2) {
                    // Tail Tracks
                    this.state.tail_m_2_e = Occupied;
                    this.state.tail_1_w = Occupied;

                    // Switches
                    this.state.sw_3_src = CX_135_R_Occupied;
                    this.state.sw_5_src = CX_225_Occupied_Bottom;

                    // Check if track 3 has status, and change switch images to match
                    if (this.state.lined_track_3) {
                        this.state.sw_1_src = CX_135_Lined_Top_Occupied_Bottom;
                    }
                    else if (this.state.occupied_track_3) {
                        this.state.sw_1_src = CX_135_Occupied_Both;
                    }
                    else {
                        this.state.sw_1_src = CX_135_Occupied_Bottom;
                    }

                    // Signals
                    this.state.sig_2w1_src = SIG_W_Stop;
                    this.state.sig_2w2_src = SIG_W_Stop;
                    this.state.sig_4w_src = SIG_W_Stop;
                    this.state.sig_2e_src = SIG_E_Stop;
                    this.state.sig_4e_src = SIG_E_Stop;
                }
                else {
                    // Tail Tracks
                    this.state.tail_m_2_e = Lined;
                    this.state.tail_1_w = Lined;

                    // Switches
                    this.state.sw_3_src = CX_135_R_Lined;
                    this.state.sw_5_src = CX_225_Lined_Bottom;

                    // Check if track 3 has status, and change switch images to match
                    if (this.state.lined_track_3) {
                        this.state.sw_1_src = CX_135_Lined_Both;
                    }
                    else if (this.state.occupied_track_3) {
                        this.state.sw_1_src = CX_135_Occupied_Top_Line_Bottom;
                    }
                    else {
                        this.state.sw_1_src = CX_135_Lined_Bottom;
                    }

                    // Signals
                    if (this.state.routes[i] === "E_1_2__|__2_ridgewood_suscon") {
                        this.state.sig_2w1_src = SIG_W_Stop;
                        this.state.sig_2w2_src = SIG_W_Stop;
                        this.state.sig_4w_src = SIG_W_Stop;
                        this.state.sig_2e_src = SIG_E_Clear;
                        this.state.sig_4e_src = SIG_E_Stop;
                    }
                    else {
                        this.state.sig_2w1_src = SIG_W_Stop;
                        this.state.sig_2w2_src = SIG_W_Stop;
                        this.state.sig_4w_src = SIG_W_Clear;
                        this.state.sig_2e_src = SIG_E_Stop;
                        this.state.sig_4e_src = SIG_E_Stop;
                    }
                }
            }
            else if (this.state.routes[i] === "W_2_3__|__3_wc_ridgewood" || this.state.routes[i] === "E_3_2__|__2_ridgewood_suscon") {
                if (this.state.occupied_track_2 || this.state.occupied_track_3) {
                    // Tail Tracks
                    this.state.tail_m_2_e = Occupied;
                    this.state.tail_3_w = Occupied;

                    // Switches
                    this.state.sw_1_src = CX_135_R_Occupied;
                    this.state.sw_3_src = CX_135_R_Occupied;
                    this.state.sw_5_src = CX_225_Occupied_Bottom;

                    // Signals
                    this.state.sig_6w_src = SIG_W_Stop;
                    this.state.sig_2w1_src = SIG_W_Stop;
                    this.state.sig_2w2_src = SIG_W_Stop;
                    this.state.sig_4w_src = SIG_W_Stop;
                    this.state.sig_6e_src = SIG_E_Stop;
                    this.state.sig_2e_src = SIG_E_Stop;
                    this.state.sig_4e_src = SIG_E_Stop;
                }
                else {
                    // Tail Tracks
                    this.state.tail_m_2_e = Lined;
                    this.state.tail_3_w = Lined;

                    // Switches
                    this.state.sw_1_src = CX_135_R_Lined;
                    this.state.sw_3_src = CX_135_R_Lined;
                    this.state.sw_5_src = CX_225_Lined_Bottom;

                    // Signals
                    if (this.state.routes[i] === "E_3_2__|__2_ridgewood_suscon") {
                        this.state.sig_6w_src = SIG_W_Stop;
                        this.state.sig_2w1_src = SIG_W_Stop;
                        this.state.sig_2w2_src = SIG_W_Stop;
                        this.state.sig_4w_src = SIG_W_Stop;
                        this.state.sig_6e_src = SIG_E_Clear;
                        this.state.sig_2e_src = SIG_E_Stop;
                        this.state.sig_4e_src = SIG_E_Stop;
                    }
                    else {
                        this.state.sig_6w_src = SIG_W_Stop;
                        this.state.sig_2w1_src = SIG_W_Stop;
                        this.state.sig_2w2_src = SIG_W_Stop;
                        this.state.sig_4w_src = SIG_W_Clear;
                        this.state.sig_6e_src = SIG_E_Stop;
                        this.state.sig_2e_src = SIG_E_Stop;
                        this.state.sig_4e_src = SIG_E_Stop;
                    }
                }
            }
            else if (this.state.routes[i] === "W_3_3__|__3_wc_ridgewood" || this.state.routes[i] === "E_3_3__|__1_ridgewood_bt") {
                if (this.state.occupied_track_3) {
                    // Tail Tracks
                    this.state.tail_b_1_e = Occupied;
                    this.state.tail_3_center = Occupied;
                    this.state.tail_3_w = Occupied;

                    // Switches
                    // Check if track 1 has status, and change switch images to match
                    if (this.state.lined_track_1) {
                        this.state.sw_1_src = CX_135_Occupied_Top_Lined_Bottom;
                        this.state.sw_7_src = CX_225_Occupied_Top_Lined_Bottom;
                    }
                    else if (this.state.occupied_track_1) {
                        this.state.sw_1_src = CX_135_Occupied_Both;
                        this.state.sw_7_src = CX_225_Occupied_Both;
                    }
                    else {
                        this.state.sw_1_src = CX_135_Occupied_Top;
                        this.state.sw_7_src = CX_225_Occupied_Top;
                    }

                    // Signals
                    this.state.sig_6w_src = SIG_W_Stop;
                    this.state.sig_6e_src = SIG_E_Stop;
                }
                else {
                    // Tail Tracks
                    this.state.tail_b_1_e = Lined;
                    this.state.tail_3_center = Lined;
                    this.state.tail_3_w = Lined;

                    // Switches
                    // Check if track 1 has status, and change switch images to match
                    if (this.state.lined_track_1) {
                        this.state.sw_1_src = CX_135_Lined_Both;
                        this.state.sw_7_src = CX_225_Lined_Both;
                    }
                    else if (this.state.occupied_track_1) {
                        this.state.sw_1_src = CX_135_Lined_Top_Occupied_Bottom;
                        this.state.sw_7_src = CX_225_Lined_Top_Occupied_Bottom;
                    }
                    else {
                        this.state.sw_1_src = CX_135_Lined_Top;
                        this.state.sw_7_src = CX_225_Lined_Top;
                    }

                    // Signals
                    if (this.state.routes[i] === "E_3_3__|__1_ridgewood_bt") {
                        this.state.sig_6w_src = SIG_W_Stop;
                        this.state.sig_6e_src = SIG_E_Clear;
                    }
                    else {
                        this.state.sig_6w_src = SIG_W_Clear;
                        this.state.sig_6e_src = SIG_E_Stop;
                    }
                }
            }
            else if (this.state.routes[i] === "W_3_1__|__1_wc_ridgewood" || this.state.routes[i] === "E_1_3__|__1_ridgewood_bt") {
                if (this.state.occupied_track_3) {
                    // Tail Tracks
                    this.state.tail_b_1_e = Occupied;
                    this.state.tail_1_w = Occupied;

                    // Switches
                    this.state.sw_1_src = CX_135_Occupied_Bottom;
                    this.state.sw_7_src = CX_225_R_Occupied;

                    // Check if track 2 has status, and change switch images to match
                    if (this.state.lined_track_2) {
                        this.state.sw_3_src = CX_135_Lined_Top_Occupied_Bottom;
                        this.state.sw_5_src = CX_225_Lined_Top_Occupied_Bottom;
                    }
                    else if (this.state.occupied_track_2) {
                        this.state.sw_3_src = CX_135_Occupied_Both;
                        this.state.sw_5_src = CX_225_Occupied_Both;
                    }
                    else {
                        this.state.sw_3_src = CX_135_Occupied_Top;
                        this.state.sw_5_src = CX_225_Occupied_Top;
                    }

                    // Signals
                    if (this.state.routes[i] === "E_1_3__|__1_ridgewood_bt") {
                        this.state.sig_6w_src = SIG_W_Stop;
                        this.state.sig_2w1_src = SIG_W_Stop;
                        this.state.sig_2w2_src = SIG_W_Stop;
                        this.state.sig_6e_src = SIG_E_Stop;
                        this.state.sig_2e_src = SIG_E_Clear;
                    }
                    else {
                        this.state.sig_6w_src = SIG_W_Clear;
                        this.state.sig_2w1_src = SIG_W_Stop;
                        this.state.sig_2w2_src = SIG_W_Stop;
                        this.state.sig_6e_src = SIG_E_Stop;
                        this.state.sig_2e_src = SIG_E_Stop;
                    }
                }
                else {
                    // Tail Tracks
                    this.state.tail_b_1_e = Lined;
                    this.state.tail_1_w = Lined;

                    // Switches
                    this.state.sw_1_src = CX_135_Lined_Bottom;
                    this.state.sw_7_src = CX_225_R_Lined;

                    // Check if track 2 has status, and change switch images to match
                    if (this.state.lined_track_2) {
                        this.state.sw_3_src = CX_135_Lined_Both;
                        this.state.sw_5_src = CX_225_Lined_Both;
                    }
                    else if (this.state.occupied_track_2) {
                        this.state.sw_3_src = CX_135_Lined_Top_Occupied_Bottom;
                        this.state.sw_5_src = CX_225_Lined_Top_Occupied_Bottom;
                    }
                    else {
                        this.state.sw_3_src = CX_135_Lined_Top;
                        this.state.sw_5_src = CX_225_Lined_Top;
                    }

                    // Signals
                    this.state.sig_6w_src = SIG_W_Clear;
                    this.state.sig_2w1_src = SIG_W_Stop;
                    this.state.sig_2w2_src = SIG_W_Stop;
                    this.state.sig_6e_src = SIG_E_Stop;
                    this.state.sig_2e_src = SIG_E_Stop;
                }
            }
            else if (this.state.routes[i] === "W_3_2__|__2_wc_ridgewood" || this.state.routes[i] === "E_2_3__|__1_ridgewood_bt") {
                if (this.state.occupied_track_3 || this.state.occupied_track_2) {
                    // Tail Tracks
                    this.state.tail_b_1_e = Occupied;
                    this.state.tail_2_w = Occupied;

                    // Switches
                    this.state.sw_3_src = CX_135_Occupied_Bottom;
                    this.state.sw_5_src = CX_225_R_Occupied;
                    this.state.sw_7_src = CX_225_R_Occupied;

                    // Signals
                    this.state.sig_6w_src = SIG_W_Stop;
                    this.state.sig_2w1_src = SIG_W_Stop;
                    this.state.sig_2w2_src = SIG_W_Stop;
                    this.state.sig_4w_src = SIG_W_Stop;
                    this.state.sig_6e_src = SIG_E_Stop;
                    this.state.sig_2e_src = SIG_E_Stop;
                    this.state.sig_4e_src = SIG_E_Stop;
                }
                else {
                    // Tail Tracks
                    this.state.tail_b_1_e = Lined;
                    this.state.tail_2_w = Lined;

                    // Switches
                    this.state.sw_3_src = CX_135_Lined_Bottom;
                    this.state.sw_5_src = CX_225_R_Lined;
                    this.state.sw_7_src = CX_225_R_Lined;

                    // Signals
                    if (this.state.routes[i] === "E_2_3__|__1_ridgewood_bt") {
                        this.state.sig_6w_src = SIG_W_Stop;
                        this.state.sig_2w1_src = SIG_W_Stop;
                        this.state.sig_2w2_src = SIG_W_Stop;
                        this.state.sig_4w_src = SIG_W_Stop;
                        this.state.sig_6e_src = SIG_E_Stop;
                        this.state.sig_2e_src = SIG_E_Stop;
                        this.state.sig_4e_src = SIG_E_Clear;
                    }
                    else {
                        this.state.sig_6w_src = SIG_W_Clear;
                        this.state.sig_2w1_src = SIG_W_Stop;
                        this.state.sig_2w2_src = SIG_W_Stop;
                        this.state.sig_4w_src = SIG_W_Stop;
                        this.state.sig_6e_src = SIG_E_Stop;
                        this.state.sig_2e_src = SIG_E_Stop;
                        this.state.sig_4e_src = SIG_E_Stop;
                    }
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

        if (this.state.sw_5) {
            this.state.sw_5_src = CX_225_R;
        }
        else {
            this.state.sw_5_src = CX_225;
        }
        
        if (this.state.sw_7) {
            this.state.sw_7_src = CX_225_R;
        }
        else {
            this.state.sw_7_src = CX_225;
        }

        if (this.state.sw_9) {
            this.state.sw_9_src = SW_U_E_R;
        }
        else {
            this.state.sw_9_src = SW_U_E;
        }
    }
}
 
export default RidgewoodJunction;