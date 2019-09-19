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

// Track Colors
const Empty = '#999999';
const Green = '#75fa4c';
const Red = '#eb3323';


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
        routed_1: this.props.status.routed_trk_1,
        routed_2: this.props.status.routed_trk_2,
        routed_3: this.props.status.routed_trk_3,
        occupied_track_1: this.props.status.occupied_trk_1,
        occupied_track_2: this.props.status.occupied_trk_2,
        occupied_track_3: this.props.status.occupied_trk_3
    };

    componentWillReceiveProps(nextProps){
        this.setState({
            sw_1: nextProps.status.sw_1, 
            sw_3: nextProps.status.sw_3,
            sw_5: nextProps.status.sw_5,
            sw_7: nextProps.status.sw_7,
            sw_9: nextProps.status.sw_9,

            routed_1: nextProps.status.routed_trk_1,
            routed_2: nextProps.status.routed_trk_2,
            routed_3: nextProps.status.routed_trk_3,
            occupied_track_1: nextProps.status.occupied_trk_1,
            occupied_track_2: nextProps.status.occupied_trk_2,
            occupied_track_3: nextProps.status.occupied_trk_3,
            routes: nextProps.status.routes
        });
    }

    render() { 
        this.reset_drawings();
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
        let color_1 = Empty;
        let color_2 = Empty;
        let color_3 = Empty;
        if (this.state.routed_1) {
            color_1 = Green;
        }
        if (this.state.routed_2) {
            color_2 = Green;
        }
        if (this.state.routed_3) {
            color_3 = Green;
        }
        if (this.state.occupied_track_1) {
            color_1 = Red;
        }
        if (this.state.occupied_track_2) {
            color_2 = Red;
        }
        if (this.state.occupied_track_3) {
            color_3 = Red;
        }

        for (let i = 0; i < this.state.routes.length; i++) {
            if (this.state.routes[i] === "W_1_1__|__1_wc_ridgewood" || this.state.routes[i] === "E_1_1__|__1_ridgewood_suscon") {
                // Tail Tracks
                this.state.tail_m_1_e = color_1;
                this.state.tail_1_center = color_1;
                this.state.tail_1_w = color_1;

                if (this.state.occupied_track_1) {
                    // Switch Images
                    this.state.sw_9_src = SW_U_E_Occupied;

                    if (this.state.routed_3) {
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

                    if (this.state.routed_2) {
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

                    // Signals 
                    this.state.sig_2w1_src = SIG_W_Stop;
                    this.state.sig_2w2_src = SIG_W_Stop;
                    this.state.sig_2e_src = SIG_E_Stop;
                }
                else {
                    // Switch Images
                    this.state.sw_9_src = SW_U_E_Lined;

                    if (this.state.routed_3) {
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

                    if (this.state.routed_2) {
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

                    if (this.state.routes[i] === "W_1_1__|__1_wc_ridgewood") {
                        this.state.sig_2w1_src = SIG_W_Clear;
                        this.state.sig_2w2_src = SIG_W_Stop;
                        this.state.sig_2e_src = SIG_E_Stop;
                    }
                    else {
                        this.state.sig_2w1_src = SIG_W_Stop;
                        this.state.sig_2w2_src = SIG_W_Stop;
                        this.state.sig_2e_src = SIG_E_Clear;
                    }
                }
            }
            else if (this.state.routes[i] === "W_4_1__|__1_wc_ridgewood" || this.state.routes[i] === "E_1_4__|__2_ridgewood_bt") {
                // Tail Tracks
                this.state.tail_b_2_e = color_1;
                this.state.tail_1_center = color_1;
                this.state.tail_1_w = color_1;

                if (this.state.occupied_track_1) {
                    // Switch Images
                    this.state.sw_9_src = SW_U_E_R_Occupied;

                    if (this.state.routed_3) {
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

                    if (this.state.routed_2) {
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

                    // Signals 
                    this.state.sig_2w1_src = SIG_W_Stop;
                    this.state.sig_2w2_src = SIG_W_Stop;
                    this.state.sig_2e_src = SIG_E_Stop;
                }
                else {
                    // Switch Images
                    this.state.sw_9_src = SW_U_E_R_Lined;

                    if (this.state.routed_3) {
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

                    if (this.state.routed_2) {
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

                    if (this.state.routes[i] === "W_4_1__|__1_wc_ridgewood") {
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
            else if (this.state.routes[i] === "W_2_2__|__2_wc_ridgewood" || this.state.routes[i] === "E_2_2__|__2_ridgewood_suscon") {
                // Tail Tracks
                this.state.tail_m_2_e = color_2;
                this.state.tail_2_w = color_2;

                if (this.state.occupied_track_2) {
                    if (this.state.routed_1) {
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
                    if (this.state.routed_1) {
                        this.state.sw_3_src = CX_135_Lined_Both;
                        this.state.sw_5_src = CX_225_Lined_Both;
                    }
                    else if (this.state.occupied_track_1) {
                        this.state.sw_3_src = CX_135_Occupied_Top_Lined_Bottom;
                        this.state.sw_5_src = CX_225_Occupied_Top_Lined_Bottom;
                    }
                    else {
                        this.state.sw_3_src = CX_135_Lined_Bottom;
                        this.state.sw_5_src = CX_225_Lined_Bottom;
                    }

                    if (this.state.routes[i] === "W_2_2__|__2_wc_ridgewood") {
                        this.state.sig_4w_src = SIG_W_Clear;
                        this.state.sig_4e_src = SIG_E_Stop;
                    }
                    else {
                        this.state.sig_4w_src = SIG_W_Stop;
                        this.state.sig_4e_src = SIG_E_Clear;
                    }
                }
            }
            else if (this.state.routes[i] === "W_3_3__|__3_wc_ridgewood" || this.state.routes[i] === "E_3_3__|__1_ridgewood_bt") {
                // Tail Tracks
                this.state.tail_b_1_e = color_3;
                this.state.tail_3_center = color_3;
                this.state.tail_3_w = color_3;

                if (this.state.occupied_track_3) {
                    if (this.state.routes.includes("W_2_1__|__1_wc_ridgewood")) {
                        if (this.state.routed_2) {
                            this.state.sw_1_src = CX_135_Occupied_Top_Lined_Bottom;
                        }
                        else {
                            this.state.sw_1_src = CX_135_Occupied_Both;
                        }
                    }
                    else {
                        this.state.sw_1_src = CX_135_Occupied_Top;
                    }
                    this.state.sw_7_src = CX_225_Occupied_Top;

                    // Signals
                    this.state.sig_6w_src = SIG_W_Stop;
                    this.state.sig_6e_src = SIG_E_Stop;
                }
                else {
                    if (this.state.routes.includes("W_2_1__|__1_wc_ridgewood")) {
                        this.state.sw_1_src = CX_135_Lined_Both;
                    }
                    else {
                        this.state.sw_1_src = CX_135_Lined_Top;
                    }
                    this.state.sw_7_src = CX_225_Lined_Top;

                    if (this.state.routes[i] === "W_3_3__|__3_wc_ridgewood") {
                        this.state.sig_6w_src = SIG_W_Clear;
                        this.state.sig_6e_src = SIG_E_Stop;
                    }
                    else {
                        this.state.sig_6w_src = SIG_W_Stop;
                        this.state.sig_6e_src = SIG_E_Clear;
                    }
                }
            }
            else if (this.state.routes[i] === "W_1_2__|__2_wc_ridgewood") {
                // Tail Tracks
                this.state.tail_m_1_e = color_1;
                this.state.tail_1_center = color_1;
                this.state.tail_2_w = color_1;

                if (this.state.occupied_track_1) {
                    
                }
                else {
                    if (this.state.routed_3) {
                        this.state.sw_7_src = CX_225_Lined_Both;
                    }
                    else if (this.state.occupied_track_3) {
                        this.state.sw_7_src = CX_225_Occupied_Top_Lined_Bottom;
                    }
                    else {
                        this.state.sw_7_src = CX_225_Lined_Bottom;
                    }

                    this.state.sw_9_src = SW_U_E_Lined;
                    this.state.sw_5_src = CX_225_R_Lined;
                    this.state.sw_3_src = CX_135_Lined_Bottom;

                    // Signals
                    this.state.sig_2w1_src = SIG_W_Clear;
                    this.state.sig_2w2_src = SIG_W_Stop;
                    this.state.sig_4w_src = SIG_W_Stop;
                    this.state.sig_2e_src = SIG_E_Stop;
                    this.state.sig_4e_src = SIG_E_Stop;
                }
            }
            else if (this.state.routes[i] === "E_2_1__|__1_ridgewood_suscon") {
                // Tail Tracks
                this.state.tail_m_1_e = color_2;
                this.state.tail_1_center = color_2;
                this.state.tail_2_w = color_2;

                if (this.state.occupied_track_2) {
                    if (this.state.routed_3) {
                        this.state.sw_7_src = CX_225_Lined_Top_Occupied_Bottom;
                    }
                    else if (this.state.occupied_track_3) {
                        this.state.sw_7_src = CX_225_Occupied_Both;
                    }
                    else {
                        this.state.sw_7_src = CX_225_Occupied_Bottom;
                    }

                    this.state.sw_9_src = SW_U_E_Occupied;
                    this.state.sw_5_src = CX_225_R_Occupied;
                    this.state.sw_3_src = CX_135_Occupied_Bottom;

                    // Signals
                    this.state.sig_2w1_src = SIG_W_Stop;
                    this.state.sig_2w2_src = SIG_W_Stop;
                    this.state.sig_4w_src = SIG_W_Stop;
                    this.state.sig_2e_src = SIG_E_Stop;
                    this.state.sig_4e_src = SIG_E_Stop;
                }
                else {
                    if (this.state.routed_3) {
                        this.state.sw_7_src = CX_225_Lined_Both;
                    }
                    else if (this.state.occupied_track_3) {
                        this.state.sw_7_src = CX_225_Occupied_Top_Lined_Bottom;
                    }
                    else {
                        this.state.sw_7_src = CX_225_Lined_Bottom;
                    }

                    this.state.sw_9_src = SW_U_E_Lined;
                    this.state.sw_5_src = CX_225_R_Lined;
                    this.state.sw_3_src = CX_135_Lined_Bottom;

                    // Signals
                    this.state.sig_2w1_src = SIG_W_Stop;
                    this.state.sig_2w2_src = SIG_W_Stop;
                    this.state.sig_4w_src = SIG_W_Stop;
                    this.state.sig_2e_src = SIG_E_Stop;
                    this.state.sig_4e_src = SIG_E_Clear;
                }
            }
            else if (this.state.routes[i] === "E_2_4__|__2_ridgewood_bt") {
                // Tail Tracks
                this.state.tail_b_2_e = color_2;
                this.state.tail_1_center = color_2;
                this.state.tail_2_w = color_2;

                if (this.state.occupied_track_2) {
                    if (this.state.routed_3) {
                        this.state.sw_7_src = CX_225_Lined_Top_Occupied_Bottom;
                    }
                    else if (this.state.occupied_track_3) {
                        this.state.sw_7_src = CX_225_Occupied_Both;
                    }
                    else {
                        this.state.sw_7_src = CX_225_Occupy_Bottom;
                    }

                    this.state.sw_9_src = SW_U_E_R_Occupied;
                    this.state.sw_5_src = CX_225_R_Occupied;
                    this.state.sw_3_src = CX_135_Occupied_Bottom;

                    // Signals
                    this.state.sig_2w1_src = SIG_W_Stop;
                    this.state.sig_2w2_src = SIG_W_Stop;
                    this.state.sig_4w_src = SIG_W_Stop;
                    this.state.sig_2e_src = SIG_E_Stop;
                    this.state.sig_4e_src = SIG_E_Stop;
                }
                else {
                    if (this.state.routed_3) {
                        this.state.sw_7_src = CX_225_Lined_Both;
                    }
                    else if (this.state.occupied_track_3) {
                        this.state.sw_7_src = CX_225_Occupied_Top_Lined_Bottom;
                    }
                    else {
                        this.state.sw_7_src = CX_225_Lined_Bottom;
                    }

                    this.state.sw_9_src = SW_U_E_R_Lined;
                    this.state.sw_5_src = CX_225_R_Lined;
                    this.state.sw_3_src = CX_135_Lined_Bottom;

                    // Signals
                    this.state.sig_2w1_src = SIG_W_Stop;
                    this.state.sig_2w2_src = SIG_W_Stop;
                    this.state.sig_4w_src = SIG_W_Stop;
                    this.state.sig_2e_src = SIG_E_Stop;
                    this.state.sig_4e_src = SIG_E_Clear;
                }
            }
            else if (this.state.routes[i] === "W_4_2__|__2_wc_ridgewood") {
                // Tail Tracks
                this.state.tail_b_2_e = color_1;
                this.state.tail_1_center = color_1;
                this.state.tail_2_w = color_1;

                if (this.state.occupied_track_1) {
                    if (this.state.routed_3) {
                        this.state.sw_7_src = CX_225_Lined_Top_Occupied_Bottom;
                    }
                    else if (this.state.occupied_track_3) {
                        this.state.sw_7_src = CX_225_Occupied_Both;
                    }
                    else {
                        this.state.sw_7_src = CX_225_Occupy_Bottom;
                    }

                    this.state.sw_9_src = SW_U_E_R_Occupied;
                    this.state.sw_5_src = CX_225_R_Occupied;
                    this.state.sw_3_src = CX_135_Occupied_Bottom;

                    // Signals
                    this.state.sig_2w1_src = SIG_W_Stop;
                    this.state.sig_2w2_src = SIG_W_Stop;
                    this.state.sig_4w_src = SIG_W_Stop;
                    this.state.sig_2e_src = SIG_E_Stop;
                    this.state.sig_4e_src = SIG_E_Stop;
                }
                else {
                    if (this.state.routed_3) {
                        this.state.sw_7_src = CX_225_Lined_Both;
                    }
                    else if (this.state.occupied_track_3) {
                        this.state.sw_7_src = CX_225_Occupied_Top_Lined_Bottom;
                    }
                    else {
                        this.state.sw_7_src = CX_225_Lined_Bottom;
                    }

                    this.state.sw_9_src = SW_U_E_R_Lined;
                    this.state.sw_5_src = CX_225_R_Lined;
                    this.state.sw_3_src = CX_135_Lined_Bottom;

                    // Signals
                    this.state.sig_2w1_src = SIG_W_Stop;
                    this.state.sig_2w2_src = SIG_W_Clear;
                    this.state.sig_4w_src = SIG_W_Stop;
                    this.state.sig_2e_src = SIG_E_Stop;
                    this.state.sig_4e_src = SIG_E_Stop;
                }
            }
            else if (this.state.routes[i] === "W_1_3__|__3_wc_ridgewood") {
                // Tail Tracks
                this.state.tail_m_1_e = color_1;
                this.state.tail_1_center = color_1;
                this.state.tail_3_w = color_1;

                if (this.state.occupied_track_1) {
                    this.state.sw_9_src = SW_U_E_Occupied;
                    this.state.sw_7_src = CX_225_Occupied_Bottom;
                    this.state.sw_1_src = CX_135_R_Occupied;

                    if (this.state.routed_2) {
                        this.state.sw_5_src = CX_225_Occupied_Top_Lined_Bottom;
                        this.state.sw_3_src = CX_135_Occupied_Top_Lined_Bottom;
                    }
                    else if (this.state.occupied_track_2) {
                        this.state.sw_5_src = CX_225_Occupied_Both;
                        this.state.sw_3_src = CX_135_Occupied_Both;
                    }
                    else {
                        this.state.sw_5_src = CX_225_Occupied_Top;
                        this.state.sw_3_src = CX_135_Occupied_Top;
                    }

                    // Signals
                    this.state.sig_2w1_src = SIG_W_Stop;
                    this.state.sig_2w2_src = SIG_W_Stop;
                    this.state.sig_6w_src = SIG_W_Stop;
                    this.state.sig_2e_src = SIG_E_Stop;
                    this.state.sig_6e_src = SIG_E_Stop;
                }
                else {
                    this.state.sw_9_src = SW_U_E_Lined;
                    this.state.sw_7_src = CX_225_Lined_Bottom;
                    this.state.sw_1_src = CX_135_R_Lined;

                    if (this.state.routed_2) {
                        this.state.sw_5_src = CX_225_Lined_Both;
                        this.state.sw_3_src = CX_135_Lined_Both;
                    }
                    else if (this.state.occupied_track_2) {
                        this.state.sw_5_src = CX_225_Lined_Top_Occupied_Bottom;
                        this.state.sw_3_src = CX_135_Lined_Top_Occupied_Bottom;
                    }
                    else {
                        this.state.sw_5_src = CX_225_Lined_Top;
                        this.state.sw_3_src = CX_135_Lined_Top;
                    }

                    // Signals
                    this.state.sig_2w1_src = SIG_W_Clear;
                    this.state.sig_2w2_src = SIG_W_Stop;
                    this.state.sig_6w_src = SIG_W_Stop;
                    this.state.sig_2e_src = SIG_E_Stop;
                    this.state.sig_6e_src = SIG_E_Stop;
                }
            }
            else if (this.state.routes[i] === "E_3_1__|__1_ridgewood_suscon") {
                // Tail Tracks
                this.state.tail_m_1_e = color_3;
                this.state.tail_1_center = color_3;
                this.state.tail_3_w = color_3;

                if (this.state.occupied_track_3) {
                    this.state.sw_9_src = SW_U_E_Occupied;
                    this.state.sw_7_src = CX_225_Occupied_Bottom;
                    this.state.sw_1_src = CX_135_R_Occupied;

                    if (this.state.routed_2) {
                        this.state.sw_5_src = CX_225_Occupied_Top_Lined_Bottom;
                        this.state.sw_3_src = CX_135_Occupied_Top_Lined_Bottom;
                    }
                    else if (this.state.occupied_track_2) {
                        this.state.sw_5_src = CX_225_Occupied_Both;
                        this.state.sw_3_src = CX_135_Occupied_Both;
                    }
                    else {
                        this.state.sw_5_src = CX_225_Occupied_Top;
                        this.state.sw_3_src = CX_135_Occupied_Top;
                    }

                    // Signals
                    this.state.sig_2w1_src = SIG_W_Stop;
                    this.state.sig_2w2_src = SIG_W_Stop;
                    this.state.sig_6w_src = SIG_W_Stop;
                    this.state.sig_2e_src = SIG_E_Stop;
                    this.state.sig_6e_src = SIG_E_Stop;
                }
                else {
                    this.state.sw_9_src = SW_U_E_Lined;
                    this.state.sw_7_src = CX_225_Lined_Bottom;
                    this.state.sw_1_src = CX_135_R_Lined;

                    if (this.state.routed_2) {
                        this.state.sw_5_src = CX_225_Lined_Both;
                        this.state.sw_3_src = CX_135_Lined_Both;
                    }
                    else if (this.state.occupied_track_2) {
                        this.state.sw_5_src = CX_225_Lined_Top_Occupied_Bottom;
                        this.state.sw_3_src = CX_135_Lined_Top_Occupied_Bottom;
                    }
                    else {
                        this.state.sw_5_src = CX_225_Lined_Top;
                        this.state.sw_3_src = CX_135_Lined_Top;
                    }

                    // Signals
                    this.state.sig_2w1_src = SIG_W_Stop;
                    this.state.sig_2w2_src = SIG_W_Stop;
                    this.state.sig_6w_src = SIG_W_Stop;
                    this.state.sig_2e_src = SIG_E_Stop;
                    this.state.sig_6e_src = SIG_E_Clear;
                }
            }
            else if (this.state.routes[i] === "W_3_1__|__1_wc_ridgewood") {
                // Tail Tracks
                this.state.tail_b_1_e = color_3;
                this.state.tail_1_w = color_3;

                if (this.state.occupied_track_3) {
                    this.state.sw_7_src = CX_225_R_Occupied;
                    this.state.sw_1_src = CX_135_Occupied_Bottom;

                    if (this.state.routed_2) {
                        this.state.sw_5_src = CX_225_Occupied_Top_Lined_Bottom;
                        this.state.sw_3_src = CX_135_Occupied_Top_Lined_Bottom;
                    }
                    else if (this.state.occupied_track_2) {
                        this.state.sw_5_src = CX_225_Occupied_Both;
                        this.state.sw_3_src = CX_135_Occupied_Both;
                    }
                    else {
                        this.state.sw_5_src = CX_225_Occupied_Top;
                        this.state.sw_3_src = CX_135_Occupied_Top;
                    }

                    // Signals 
                    this.state.sig_6w_src = SIG_W_Stop;
                    this.state.sig_2w1_src = SIG_W_Stop;
                    this.state.sig_2w2_src = SIG_W_Stop;
                    this.state.sig_2e_src = SIG_E_Stop;
                    this.state.sig_6e_src = SIG_E_Stop;
                }
                else {
                    this.state.sw_7_src = CX_225_R_Lined;
                    this.state.sw_1_src = CX_135_Lined_Bottom;

                    if (this.state.routed_2) {
                        this.state.sw_5_src = CX_225_Lined_Both;
                        this.state.sw_3_src = CX_135_Lined_Both;
                    }
                    else if (this.state.occupied_track_2) {
                        this.state.sw_5_src = CX_225_Lined_Top_Occupied_Bottom;
                        this.state.sw_3_src = CX_135_Lined_Top_Occupied_Bottom;
                    }
                    else {
                        this.state.sw_5_src = CX_225_Lined_Top;
                        this.state.sw_3_src = CX_135_Lined_Top;
                    }

                    // Signals 
                    this.state.sig_6w_src = SIG_W_Clear;
                    this.state.sig_2w1_src = SIG_W_Stop;
                    this.state.sig_2w2_src = SIG_W_Stop;
                    this.state.sig_2e_src = SIG_E_Stop;
                    this.state.sig_6e_src = SIG_E_Stop;
                }
            }
            else if (this.state.routes[i] === "E_1_3__|__1_ridgewood_bt") {
                // Tail Tracks
                this.state.tail_b_1_e = color_1;
                this.state.tail_1_w = color_1;

                if (this.state.occupied_track_1) {
                    this.state.sw_7_src = CX_225_R_Occupied;
                    this.state.sw_1_src = CX_135_Occupied_Bottom;

                    if (this.state.routed_2) {
                        this.state.sw_5_src = CX_225_Occupied_Top_Lined_Bottom;
                        this.state.sw_3_src = CX_135_Occupied_Top_Lined_Bottom;
                    }
                    else if (this.state.occupied_track_2) {
                        this.state.sw_5_src = CX_225_Occupied_Both;
                        this.state.sw_3_src = CX_135_Occupied_Both;
                    }
                    else {
                        this.state.sw_5_src = CX_225_Occupied_Top;
                        this.state.sw_3_src = CX_135_Occupied_Top;
                    }

                    // Signals 
                    this.state.sig_6w_src = SIG_W_Stop;
                    this.state.sig_2w1_src = SIG_W_Stop;
                    this.state.sig_2w2_src = SIG_W_Stop;
                    this.state.sig_2e_src = SIG_E_Stop;
                    this.state.sig_6e_src = SIG_E_Stop;
                }
                else {
                    this.state.sw_7_src = CX_225_R_Lined;
                    this.state.sw_1_src = CX_135_Lined_Bottom;

                    if (this.state.routed_2) {
                        this.state.sw_5_src = CX_225_Lined_Both;
                        this.state.sw_3_src = CX_135_Lined_Both;
                    }
                    else if (this.state.occupied_track_2) {
                        this.state.sw_5_src = CX_225_Lined_Top_Occupied_Bottom;
                        this.state.sw_3_src = CX_135_Lined_Top_Occupied_Bottom;
                    }
                    else {
                        this.state.sw_5_src = CX_225_Lined_Top;
                        this.state.sw_3_src = CX_135_Lined_Top;
                    }

                    // Signals 
                    this.state.sig_6w_src = SIG_W_Stop;
                    this.state.sig_2w1_src = SIG_W_Stop;
                    this.state.sig_2w2_src = SIG_W_Stop;
                    this.state.sig_2e_src = SIG_E_Clear;
                    this.state.sig_6e_src = SIG_E_Stop;
                }
            }
            else if (this.state.routes[i] === "W_3_2__|__2_wc_ridgewood") {
                // Tail Tracks
                this.state.tail_b_1_e = color_3;
                this.state.tail_2_w = color_3;

                if (this.state.occupied_track_3) {
                    // Switches
                    this.state.sw_7_src = CX_225_R_Occupied;
                    this.state.sw_5_src = CX_225_R_Occupied;
                    this.state.sw_3_src = CX_135_Occupied_Bottom;

                    // Signals 
                    this.state.sig_6w_src = SIG_W_Stop;
                    this.state.sig_2w1_src = SIG_W_Stop;
                    this.state.sig_2w2_src = SIG_W_Stop;
                    this.state.sig_4w_src = SIG_W_Stop;
                    this.state.sig_2e_src = SIG_E_Stop;
                    this.state.sig_4e_src = SIG_E_Stop;
                    this.state.sig_6e_src = SIG_E_Stop;
                }
                else {
                    // Switches
                    this.state.sw_7_src = CX_225_R_Lined;
                    this.state.sw_5_src = CX_225_R_Lined;
                    this.state.sw_3_src = CX_135_Lined_Bottom;

                    // Signals 
                    this.state.sig_6w_src = SIG_W_Clear;
                    this.state.sig_2w1_src = SIG_W_Stop;
                    this.state.sig_2w2_src = SIG_W_Stop;
                    this.state.sig_4w_src = SIG_W_Stop;
                    this.state.sig_2e_src = SIG_E_Stop;
                    this.state.sig_4e_src = SIG_E_Stop;
                    this.state.sig_6e_src = SIG_E_Stop;
                }
            }
            else if (this.state.routes[i] === "E_2_3__|__1_ridgewood_bt") {
                // Tail Tracks
                this.state.tail_b_1_e = color_2;
                this.state.tail_2_w = color_2;

                if (this.state.occupied_track_2) {
                    // Switches
                    this.state.sw_7_src = CX_225_R_Occupied;
                    this.state.sw_5_src = CX_225_R_Occupied;
                    this.state.sw_3_src = CX_135_Occupied_Bottom;

                    // Signals 
                    this.state.sig_6w_src = SIG_W_Stop;
                    this.state.sig_2w1_src = SIG_W_Stop;
                    this.state.sig_2w2_src = SIG_W_Stop;
                    this.state.sig_4w_src = SIG_W_Stop;
                    this.state.sig_2e_src = SIG_E_Stop;
                    this.state.sig_4e_src = SIG_E_Stop;
                    this.state.sig_6e_src = SIG_E_Stop;
                }
                else {
                    // Switches
                    this.state.sw_7_src = CX_225_R_Lined;
                    this.state.sw_5_src = CX_225_R_Lined;
                    this.state.sw_3_src = CX_135_Lined_Bottom;

                    // Signals 
                    this.state.sig_6w_src = SIG_W_Stop;
                    this.state.sig_2w1_src = SIG_W_Stop;
                    this.state.sig_2w2_src = SIG_W_Stop;
                    this.state.sig_4w_src = SIG_W_Stop;
                    this.state.sig_2e_src = SIG_E_Stop;
                    this.state.sig_4e_src = SIG_E_Clear;
                    this.state.sig_6e_src = SIG_E_Stop;
                }
            }
            else if (this.state.routes[i] === "W_4_3__|__3_wc_ridgewood") {
                // Tail Tracks
                this.state.tail_b_2_e = color_1;
                this.state.tail_1_center = color_1;
                this.state.tail_3_w = color_1;

                if (this.state.occupied_track_1) {
                    // Switches
                    this.state.sw_9_src = SW_U_E_R_Occupied;
                    this.state.sw_7_src = CX_225_Occupied_Bottom;
                    this.state.sw_1_src = CX_135_R_Occupied;

                    if (this.state.routed_2) {
                        this.state.sw_5_src = CX_225_Occupied_Top_Lined_Bottom;
                        this.state.sw_3_src = CX_135_Occupied_Top_Lined_Bottom;
                    }
                    else if (this.state.occupied_track_2) {
                        this.state.sw_5_src = CX_225_Occupied_Both;
                        this.state.sw_3_src = CX_135_Occupied_Both;
                    }
                    else {
                        this.state.sw_5_src = CX_225_Occupied_Top;
                        this.state.sw_3_src = CX_135_Occupied_Top;
                    }

                    // Signals
                    this.state.sig_2w2_src = SIG_W_Stop;
                    this.state.sig_2w1_src = SIG_W_Stop;
                    this.state.sig_6w_src = SIG_W_Stop;
                    this.state.sig_2e_src = SIG_E_Stop;
                    this.state.sig_6e_src = SIG_E_Stop;
                }
                else {
                    // Switches
                    this.state.sw_9_src = SW_U_E_R_Lined;
                    this.state.sw_7_src = CX_225_Lined_Bottom;
                    this.state.sw_1_src = CX_135_R_Lined;

                    if (this.state.routed_2) {
                        this.state.sw_5_src = CX_225_Lined_Both;
                        this.state.sw_3_src = CX_135_Lined_Both;
                    }
                    else if (this.state.occupied_track_2) {
                        this.state.sw_5_src = CX_225_Lined_Top_Occupied_Bottom;
                        this.state.sw_3_src = CX_135_Lined_Top_Occupied_Bottom;
                    }
                    else {
                        this.state.sw_5_src = CX_225_Lined_Top;
                        this.state.sw_3_src = CX_135_Lined_Top;
                    }

                    // Signals
                    this.state.sig_2w2_src = SIG_W_Clear;
                    this.state.sig_2w1_src = SIG_W_Stop;
                    this.state.sig_6w_src = SIG_W_Stop;
                    this.state.sig_2e_src = SIG_E_Stop;
                    this.state.sig_6e_src = SIG_E_Stop;
                }
            }
            else if (this.state.routes[i] === "E_3_4__|__2_ridgewood_bt") {
                // Tail Tracks
                this.state.tail_b_2_e = color_3;
                this.state.tail_1_center = color_3;
                this.state.tail_3_w = color_3;

                if (this.state.occupied_track_3) {
                    // Switches
                    this.state.sw_9_src = SW_U_E_R_Occupied;
                    this.state.sw_7_src = CX_225_Occupied_Bottom;
                    this.state.sw_1_src = CX_135_R_Occupied;

                    if (this.state.routed_2) {
                        this.state.sw_5_src = CX_225_Occupied_Top_Lined_Bottom;
                        this.state.sw_3_src = CX_135_Occupied_Top_Lined_Bottom;
                    }
                    else if (this.state.occupied_track_2) {
                        this.state.sw_5_src = CX_225_Occupied_Both;
                        this.state.sw_3_src = CX_135_Occupied_Both;
                    }
                    else {
                        this.state.sw_5_src = CX_225_Occupied_Top;
                        this.state.sw_3_src = CX_135_Occupied_Top;
                    }

                    // Signals
                    this.state.sig_2w2_src = SIG_W_Stop;
                    this.state.sig_2w1_src = SIG_W_Stop;
                    this.state.sig_6w_src = SIG_W_Stop;
                    this.state.sig_2e_src = SIG_E_Stop;
                    this.state.sig_6e_src = SIG_E_Stop;
                }
                else {
                    // Switches
                    this.state.sw_9_src = SW_U_E_R_Lined;
                    this.state.sw_7_src = CX_225_Lined_Bottom;
                    this.state.sw_1_src = CX_135_R_Lined;

                    if (this.state.routed_2) {
                        this.state.sw_5_src = CX_225_Lined_Both;
                        this.state.sw_3_src = CX_135_Lined_Both;
                    }
                    else if (this.state.occupied_track_2) {
                        this.state.sw_5_src = CX_225_Lined_Top_Occupied_Bottom;
                        this.state.sw_3_src = CX_135_Lined_Top_Occupied_Bottom;
                    }
                    else {
                        this.state.sw_5_src = CX_225_Lined_Top;
                        this.state.sw_3_src = CX_135_Lined_Top;
                    }

                    // Signals
                    this.state.sig_2w2_src = SIG_W_Stop;
                    this.state.sig_2w1_src = SIG_W_Stop;
                    this.state.sig_6w_src = SIG_W_Stop;
                    this.state.sig_2e_src = SIG_E_Stop;
                    this.state.sig_6e_src = SIG_E_Clear;
                }
            }
            else if (this.state.routes[i] === "W_2_3__|__3_wc_ridgewood") {
                // Tail Tracks
                this.state.tail_m_2_e = color_2;
                this.state.tail_3_w = color_2;

                if (this.state.occupied_track_2) {
                    this.state.sw_5_src = CX_225_Occupied_Bottom;
                    this.state.sw_3_src = CX_135_R_Occupied;
                    this.state.sw_1_src = CX_135_R_Occupied;

                    // Signals
                    this.state.sig_4w_src = SIG_W_Stop;
                    this.state.sig_2w1_src = SIG_W_Stop;
                    this.state.sig_2w2_src = SIG_W_Stop;
                    this.state.sig_6w_src = SIG_W_Stop;
                    this.state.sig_2e_src = SIG_E_Stop;
                    this.state.sig_4e_src = SIG_E_Stop;
                    this.state.sig_6e_src = SIG_E_Stop;
                }
                else {
                    this.state.sw_5_src = CX_225_Lined_Bottom;
                    this.state.sw_3_src = CX_135_R_Lined;
                    this.state.sw_1_src = CX_135_R_Lined;

                    // Signals
                    this.state.sig_4w_src = SIG_W_Clear;
                    this.state.sig_2w1_src = SIG_W_Stop;
                    this.state.sig_2w2_src = SIG_W_Stop;
                    this.state.sig_6w_src = SIG_W_Stop;
                    this.state.sig_2e_src = SIG_E_Stop;
                    this.state.sig_4e_src = SIG_E_Stop;
                    this.state.sig_6e_src = SIG_E_Stop;
                }
            }
            else if (this.state.routes[i] === "E_3_2__|__2_ridgewood_suscon") {
                // Tail Tracks
                this.state.tail_m_2_e = color_3;
                this.state.tail_3_w = color_3;

                if (this.state.occupied_track_2) {
                    this.state.sw_5_src = CX_225_Occupied_Bottom;
                    this.state.sw_3_src = CX_135_R_Occupied;
                    this.state.sw_1_src = CX_135_R_Occupied;

                    // Signals
                    this.state.sig_4w_src = SIG_W_Stop;
                    this.state.sig_2w1_src = SIG_W_Stop;
                    this.state.sig_2w2_src = SIG_W_Stop;
                    this.state.sig_6w_src = SIG_W_Stop;
                    this.state.sig_2e_src = SIG_E_Stop;
                    this.state.sig_4e_src = SIG_E_Stop;
                    this.state.sig_6e_src = SIG_E_Stop;
                }
                else {
                    this.state.sw_5_src = CX_225_Lined_Bottom;
                    this.state.sw_3_src = CX_135_R_Lined;
                    this.state.sw_1_src = CX_135_R_Lined;

                    // Signals
                    this.state.sig_4w_src = SIG_W_Stop;
                    this.state.sig_2w1_src = SIG_W_Stop;
                    this.state.sig_2w2_src = SIG_W_Stop;
                    this.state.sig_6w_src = SIG_W_Stop;
                    this.state.sig_2e_src = SIG_E_Stop;
                    this.state.sig_4e_src = SIG_E_Stop;
                    this.state.sig_6e_src = SIG_E_Clear;
                }
            }
            else if (this.state.routes[i] === "W_2_1__|__1_wc_ridgewood") {
                // Tail Tracks
                this.state.tail_m_2_e = color_2;
                this.state.tail_1_w = color_2;

                if (this.state.occupied_track_2) {
                    this.state.sw_5_src = CX_225_Occupied_Bottom;
                    this.state.sw_3_src = CX_135_R_Occupied;

                    if (this.state.routed_3) {
                        this.state.sw_1_src = CX_135_Lined_Top_Occupied_Bottom;
                    }
                    else if (this.state.occupied_track_3) {
                        this.state.sw_1_src = CX_135_Occupied_Both;
                    }
                    else {
                        this.state.sw_1_src = CX_135_Occupied_Bottom;
                    }

                    // Signals
                    this.state.sig_4w_src = SIG_W_Stop;
                    this.state.sig_2w1_src = SIG_W_Stop;
                    this.state.sig_2w2_src = SIG_W_Stop;
                    this.state.sig_4e_src = SIG_E_Stop;
                    this.state.sig_2e_src = SIG_E_Stop;
                }
                else {
                    this.state.sw_5_src = CX_225_Lined_Bottom;
                    this.state.sw_3_src = CX_135_R_Lined;

                    if (this.state.routed_3) {
                        this.state.sw_1_src = CX_135_Lined_Both;
                    }
                    else if (this.state.occupied_track_3) {
                        this.state.sw_1_src = CX_135_Occupied_Top_Lined_Bottom;
                    }
                    else {
                        this.state.sw_1_src = CX_135_Lined_Bottom;
                    }

                    // Signals
                    this.state.sig_4w_src = SIG_W_Clear;
                    this.state.sig_2w1_src = SIG_W_Stop;
                    this.state.sig_2w2_src = SIG_W_Stop;
                    this.state.sig_4e_src = SIG_E_Stop;
                    this.state.sig_2e_src = SIG_E_Stop;
                }
            }
            else if (this.state.routes[i] === "E_1_2__|__2_ridgewood_suscon") {
                // Tail Tracks
                this.state.tail_m_2_e = color_1;
                this.state.tail_1_w = color_1;

                if (this.state.occupied_track_1) {
                    this.state.sw_5_src = CX_225_Occupied_Bottom;
                    this.state.sw_3_src = CX_135_R_Occupied;

                    if (this.state.routed_3) {
                        this.state.sw_1_src = CX_135_Lined_Top_Occupied_Bottom;
                    }
                    else if (this.state.occupied_track_3) {
                        this.state.sw_1_src = CX_135_Occupied_Both;
                    }
                    else {
                        this.state.sw_1_src = CX_135_Occupied_Bottom;
                    }

                    // Signals
                    this.state.sig_4w_src = SIG_W_Stop;
                    this.state.sig_2w1_src = SIG_W_Stop;
                    this.state.sig_2w2_src = SIG_W_Stop;
                    this.state.sig_4e_src = SIG_E_Stop;
                    this.state.sig_2e_src = SIG_E_Stop;
                }
                else {
                    this.state.sw_5_src = CX_225_Lined_Bottom;
                    this.state.sw_3_src = CX_135_R_Lined;

                    if (this.state.routed_3) {
                        this.state.sw_1_src = CX_135_Lined_Both;
                    }
                    else if (this.state.occupied_track_3) {
                        this.state.sw_1_src = CX_135_Occupied_Top_Lined_Bottom;
                    }
                    else {
                        this.state.sw_1_src = CX_135_Lined_Bottom;
                    }

                    // Signals
                    this.state.sig_4w_src = SIG_W_Stop;
                    this.state.sig_2w1_src = SIG_W_Stop;
                    this.state.sig_2w2_src = SIG_W_Stop;
                    this.state.sig_4e_src = SIG_E_Stop;
                    this.state.sig_2e_src = SIG_E_Clear;
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

    reset_drawings() {
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
    }
}
 
export default RidgewoodJunction;