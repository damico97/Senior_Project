import React, { Component } from 'react';
// Import CSS style sheet
import '../../../css/Main_Line/sf.css';

// Import Images
// Switch Images 
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

import SW_D_W from '../../../../public/images/SW_D_W.png';
import SW_D_W_Lined from '../../../../public/images/SW_D_W_Lined.png';
import SW_D_W_Occupied from '../../../../public/images/SW_D_W_Occupied.png';
import SW_D_W_R from '../../../../public/images/SW_D_W_R.png';
import SW_D_W_R_Lined from '../../../../public/images/SW_D_W_R_Lined.png';
import SW_D_W_R_Occupied from '../../../../public/images/SW_D_W_R_Occupied.png';

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


class SF extends Component {
    state = {  
        sw_1: this.props.status.sw_1,
        sw_3: this.props.status.sw_3,
        sw_1_src: SW_D_W,
        sw_3_src: CX_225,

        tail_1_w: Empty,
        tail_2_w: Empty,
        tail_yard: Empty,
        tail_1_e: Empty,
        tail_2_e: Empty,

        sig_2w_src: SIG_W,
        sig_4w_src: SIG_W,
        sig_2e_src: SIG_E,
        sig_4e1_src: SIG_E,
        sig_4e2_src: SIG_E,

        occupied_1: this.props.status.occupied_trk_1,
        occupied_2: this.props.status.occupied_trk_2,
        route_1: this.props.status.routed_trk_1,
        route_2: this.props.status.routed_trk_2,
        routes: this.props.status.routes
    };

    componentWillReceiveProps(nextProps){
        this.setState({
            sw_1: nextProps.status.sw_1, 
            sw_3: nextProps.status.sw_3,
            occupied_1: nextProps.status.occupied_trk_1,
            occupied_2: nextProps.status.occupied_trk_2,
            route_1: nextProps.status.routed_trk_1,
            route_2: nextProps.status.routed_trk_2,
            routes: nextProps.status.routes
        });
    }

    render() { 
        this.reset_drawings();
        this.set_switch_img();
        this.set_route_drawings();

        return (  
            <div>
                <div className="sf_title">SF</div>
                <div className="sf_milepost">MP 30.5</div>

                <div className="sf_1_west" style={{background: this.state.tail_1_w}}></div>
                <div className="sf_2_west" style={{background: this.state.tail_2_w}}></div>
                <div className="sf_yard" style={{background: this.state.tail_yard}}></div>

                <div className="sf_SW_1" onClick={this.props.throw_sw_1}><img src={this.state.sw_1_src}/></div>
                <div className="sf_SW_3" onClick={this.props.throw_sw_3}><img src={this.state.sw_3_src}/></div>

                <div className="sf_1_center_west" style={{background: this.state.tail_1_e}}></div>
                <div className="sf_2_center_west" style={{background: this.state.tail_2_e}}></div>

                <div className="sf_sig_2e" onClick={this.props.click_sig_2e}><img src={this.state.sig_2e_src}/></div>
                <div className="sf_sig_4e-1" onClick={this.props.click_sig_4e_1}><img src={this.state.sig_4e1_src}/></div>
                <div className="sf_sig_4e-2" onClick={this.props.click_sig_4e_2}><img src={this.state.sig_4e2_src}/></div>
                <div className="sf_sig_2w" onClick={this.props.click_sig_2w}><img src={this.state.sig_2w_src}/></div>
                <div className="sf_sig_4w" onClick={this.props.click_sig_4w}><img src={this.state.sig_4w_src}/></div>
            </div>
        );
    }

    set_route_drawings() {
        let color_1 = Empty;
        let color_2 = Empty;
        if (this.state.route_1) {
            color_1 = Green;
        }
        if (this.state.route_2) {
            color_2 = Green;
        }
        if (this.state.occupied_1) {
            color_1 = Red;
        }
        if (this.state.occupied_2) {
            color_2 = Red;
        }

        for (let i = 0; i < this.state.routes.length; i++) {
            if (this.state.routes[i] === "W_1_1__|__1_sterling_sf" || this.state.routes[i] === "E_1_1__|__1_sf_wc") {
                // Tail Tracks 
                this.state.tail_1_e = color_1;
                this.state.tail_1_w = color_1;

                if (this.state.occupied_1) {
                    if (this.state.route_2) {
                        this.state.sw_3_src = CX_225_Occupied_Top_Lined_Bottom;
                    }
                    else if (this.state.occupied_2) {
                        this.state.sw_3_src = CX_225_Occupied_Both;
                    }
                    else {
                        this.state.sw_3_src = CX_225_Occupied_Top;
                    }

                    this.state.sig_2w_src = SIG_W_Stop;
                    this.state.sig_2e_src = SIG_E_Stop;
                }
                else {
                    if (this.state.route_2) {
                        this.state.sw_3_src = CX_225_Lined_Both;
                    }
                    else if (this.state.occupied_2) {
                        this.state.sw_3_src = CX_225_Lined_Top_Occupied_Bottom;
                    }
                    else {
                        this.state.sw_3_src = CX_225_Lined_Top;
                    }

                    if (this.state.routes[i] === "W_1_1__|__1_sterling_sf") {
                        this.state.sig_2w_src = SIG_W_Clear;
                        this.state.sig_2e_src = SIG_E_Stop;
                    }
                    else {
                        this.state.sig_2w_src = SIG_W_Stop;
                        this.state.sig_2e_src = SIG_E_Clear;
                    }
                }
            }
            else if (this.state.routes[i] === "W_2_2__|__2_hilburn_sf" || this.state.routes[i] === "E_2_2__|__2_sf_wc") {
                // Tail Tracks 
                this.state.tail_2_e = color_2;
                this.state.tail_2_w = color_2;

                if (this.state.occupied_2) {
                    // Switches
                    if (this.state.route_1) {
                        this.state.sw_3_src = CX_225_Lined_Top_Occupied_Bottom;
                    }
                    else if (this.state.occupied_1) {
                        this.state.sw_3_src = CX_225_Occupied_Both;
                    }
                    else {
                        this.state.sw_3_src = CX_225_Occupied_Bottom;
                    }

                    this.state.sw_1_src = SW_D_W_Occupied;

                    // Signals
                    this.state.sig_4w_src = SIG_W_Stop;
                    this.state.sig_4e1_src = SIG_E_Stop;
                    this.state.sig_4e2_src = SIG_E_Stop;
                }
                else {
                    if (this.state.route_1) {
                        this.state.sw_3_src = CX_225_Lined_Both;
                    }
                    else if (this.state.occupied_1) {
                        this.state.sw_3_src = CX_225_Occupied_Top_Lined_Bottom;
                    }
                    else {
                        this.state.sw_3_src = CX_225_Lined_Bottom;
                    }

                    this.state.sw_1_src = SW_D_W_Lined;

                    if (this.state.routes[i] === "W_2_2__|__2_hilburn_sf") {
                        this.state.sig_4w_src = SIG_W_Clear;
                        this.state.sig_4e1_src = SIG_E_Stop;
                        this.state.sig_4e2_src = SIG_E_Stop;
                    }
                    else {
                        this.state.sig_4w_src = SIG_W_Stop;
                        this.state.sig_4e1_src = SIG_E_Clear;
                        this.state.sig_4e2_src = SIG_E_Stop;
                    }
                }
            }
            else if (this.state.routes[i] === "W_2_3__|__3_yardHilburn_sf" || this.state.routes[i] === "E_3_2__|__2_sf_wc") {
                // Tail Tracks
                this.state.tail_2_e = color_2;
                this.state.tail_yard = color_2;

                if (this.state.occupied_2) {
                    if (this.state.route_1) {
                        this.state.sw_3_src = CX_225_Lined_Top_Occupied_Bottom;
                    }
                    else if (this.state.occupied_1) {
                        this.state.sw_3_src = CX_225_Occupied_Both;
                    }
                    else {
                        this.state.sw_3_src = CX_225_Occupied_Bottom;
                    }
                    this.state.sw_1_src = SW_D_W_R_Occupied;

                    // Signals
                    this.state.sig_4w_src = SIG_W_Stop;
                    this.state.sig_4e1_src = SIG_E_Stop;
                    this.state.sig_4e2_src = SIG_E_Stop;
                }
                else {
                    if (this.state.route_1) {
                        this.state.sw_3_src = CX_225_Lined_Both;
                    }
                    else if (this.state.occupied_1) {
                        this.state.sw_3_src = CX_225_Occupied_Top_Lined_Bottom;
                    }
                    else {
                        this.state.sw_3_src = CX_225_Lined_Bottom;
                    }
                    this.state.sw_1_src = SW_D_W_R_Lined;

                    // Signals
                    if (this.state.routes[i] === "W_2_3__|__3_yardHilburn_sf") {
                        this.state.sig_4w_src = SIG_W_Clear;
                        this.state.sig_4e1_src = SIG_E_Stop;
                        this.state.sig_4e2_src = SIG_E_Stop;
                    }
                    else {
                        this.state.sig_4w_src = SIG_W_Stop;
                        this.state.sig_4e1_src = SIG_E_Stop;
                        this.state.sig_4e2_src = SIG_E_Clear;
                    }
                }
            }
            else if (this.state.routes[i] === "W_1_2__|__2_hilburn_sf") {
                // Tail Tracks
                this.state.tail_1_e = color_1;
                this.state.tail_2_w = color_1;

                if (this.state.occupied_1) {
                    this.state.sw_3_src = CX_225_R_Occupied;
                    this.state.sw_1_src = SW_D_W_Occupied;

                    this.state.sig_2w_src = SIG_W_Stop;
                    this.state.sig_2e_src = SIG_E_Stop;
                    this.state.sig_4w_src = SIG_W_Stop;
                    this.state.sig_4e1_src = SIG_E_Stop;
                    this.state.sig_4e2_src = SIG_E_Stop;
                }
                else {
                    this.state.sw_3_src = CX_225_R_Lined;
                    this.state.sw_1_src = SW_D_W_Lined;

                    this.state.sig_2w_src = SIG_W_Clear;
                    this.state.sig_2e_src = SIG_E_Stop;
                    this.state.sig_4w_src = SIG_W_Stop;
                    this.state.sig_4e1_src = SIG_E_Stop;
                    this.state.sig_4e2_src = SIG_E_Stop;
                }
            }
            else if (this.state.routes[i] === "E_2_1__|__1_sf_wc") {
                // Tail Tracks
                this.state.tail_1_e = color_2;
                this.state.tail_2_w = color_2;

                if (this.state.occupied_1) {
                    this.state.sw_3_src = CX_225_R_Occupied;
                    this.state.sw_1_src = SW_D_W_Occupied;

                    this.state.sig_2w_src = SIG_W_Stop;
                    this.state.sig_2e_src = SIG_E_Stop;
                    this.state.sig_4w_src = SIG_W_Stop;
                    this.state.sig_4e1_src = SIG_E_Stop;
                    this.state.sig_4e2_src = SIG_E_Stop;
                }
                else {
                    this.state.sw_3_src = CX_225_R_Lined;
                    this.state.sw_1_src = SW_D_W_Lined;

                    this.state.sig_2w_src = SIG_W_Stop;
                    this.state.sig_2e_src = SIG_E_Stop;
                    this.state.sig_4w_src = SIG_W_Stop;
                    this.state.sig_4e1_src = SIG_E_Clear;
                    this.state.sig_4e2_src = SIG_E_Stop;
                }
            }
            else if (this.state.routes[i] === "W_1_3__|__2_yardHilburn_sf") {
                // Tail Tracks
                this.state.tail_1_e = color_1;
                this.state.tail_yard = color_1;

                if (this.state.occupied_1) {
                    // Switches 
                    this.state.sw_3_src = CX_225_R_Occupied;
                    this.state.sw_1_src = SW_D_W_R_Occupied;

                    // Signals
                    this.state.sig_2w_src = SIG_W_Stop;
                    this.state.sig_2e_src = SIG_E_Stop;
                    this.state.sig_4w_src = SIG_W_Stop;
                    this.state.sig_4e1_src = SIG_E_Stop;
                    this.state.sig_4e2_src = SIG_E_Stop;
                }
                else {
                    this.state.sw_3_src = CX_225_R_Lined;
                    this.state.sw_1_src = SW_D_W_R_Lined;

                    this.state.sig_2w_src = SIG_W_Clear;
                    this.state.sig_2e_src = SIG_E_Stop;
                    this.state.sig_4w_src = SIG_W_Stop;
                    this.state.sig_4e1_src = SIG_E_Stop;
                    this.state.sig_4e2_src = SIG_E_Stop;
                }
            }
            else if (this.state.routes[i] === "E_3_1__|__1_sf_wc") {
                // Tail Tracks
                this.state.tail_1_e = color_2;
                this.state.tail_yard = color_2;

                if (this.state.occupied_1) {
                    // Switches 
                    this.state.sw_3_src = CX_225_R_Occupied;
                    this.state.sw_1_src = SW_D_W_R_Occupied;

                    // Signals
                    this.state.sig_2w_src = SIG_W_Stop;
                    this.state.sig_2e_src = SIG_E_Stop;
                    this.state.sig_4w_src = SIG_W_Stop;
                    this.state.sig_4e1_src = SIG_E_Stop;
                    this.state.sig_4e2_src = SIG_E_Stop;
                }
                else {
                    this.state.sw_3_src = CX_225_R_Lined;
                    this.state.sw_1_src = SW_D_W_R_Lined;

                    this.state.sig_2w_src = SIG_W_Stop;
                    this.state.sig_2e_src = SIG_E_Stop;
                    this.state.sig_4w_src = SIG_W_Stop;
                    this.state.sig_4e1_src = SIG_E_Stop;
                    this.state.sig_4e2_src = SIG_E_Clear;
                }
            }
        }
    }

    set_switch_img = () => {
        if (this.state.sw_1) {
            this.state.sw_1_src = SW_D_W_R;
        }
        else {
            this.state.sw_1_src = SW_D_W;
        }
        
        if (this.state.sw_3) {
            this.state.sw_3_src = CX_225_R;
        }
        else {
            this.state.sw_3_src = CX_225;
        }
    }

    reset_drawings() {
        this.state.tail_1_w = Empty;
        this.state.tail_2_w = Empty;
        this.state.tail_yard = Empty;
        this.state.tail_1_e = Empty;
        this.state.tail_2_e = Empty;

        this.state.sig_2w_src = SIG_W;
        this.state.sig_4w_src = SIG_W;
        this.state.sig_2e_src = SIG_E;
        this.state.sig_4e1_src = SIG_E;
        this.state.sig_4e2_src = SIG_E;
    }
}
 
export default SF;