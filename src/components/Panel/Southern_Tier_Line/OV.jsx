import React, { Component } from 'react';
// Import CSS style sheet
import '../../../css/Southern_Tier_Line/ov.css';

// Import Images
// Switch Images
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
const Green = '#75fa4c';
const Red = '#eb3323';


class OV extends Component {
    state = {  
        sw_1: this.props.status.sw_1,
        sw_1_src: SW_U_E,

        tail_w: Empty,
        tail_1_e: Empty,
        tail_2_e: Empty,

        sig_2w_src: SIG_W,
        sig_2ws_src: SIG_W,
        sig_2e_src: SIG_E,

        occupied: false,
        routes: this.props.status.routes
    };

    componentWillReceiveProps(nextProps){
        this.setState({
            sw_1: nextProps.status.sw_1,
            routes: nextProps.status.routes
        });
    }

    render() { 
        this.reset_drawings();
        this.set_switch_img();
        this.set_route_drawing();

        return (  
            <div>
                <div className="ov_title">CP OV</div>
                <div className="ov_milepost">MP 75.0SR</div>
                
                <div className="ov_west" style={{background: this.state.tail_w}}></div>

                <div className="ov_SW_1" onClick={this.props.throw_sw_1}><img src={this.state.sw_1_src}/></div>

                <div className="ov_1_east" style={{background: this.state.tail_1_e}}></div>
                <div className="ov_2_east" style={{background: this.state.tail_2_e}}></div>

                <div className="ov_sig_2w" onClick={this.props.click_sig_2w}><img src={this.state.sig_2w_src}/></div>
                <div className="ov_sig_2ws" onClick={this.props.click_sig_2ws}><img src={this.state.sig_2ws_src}/></div>
                <div className="ov_sig_2e" onClick={this.props.click_sig_2e}><img src={this.state.sig_2e_src}/></div>
            </div>
        );
    }

    set_route_drawing() {
        let color = null;
        if (this.state.occupied) {
            color = Red;
        }
        else {
            color = Green;
        }

        for (let i = 0; i < this.state.routes.length; i++) {
            if (this.state.routes[i] === "W_1_1__|__1_bc_ov" || this.state.routes[i] === "E_1_1__|__1_ov_howells") {
                // Tail Tracks
                this.state.tail_1_e = color;
                this.state.tail_w = color;

                if (this.state.occupied) {
                    this.state.sw_1_src = SW_U_E_Occupied;

                    this.state.sig_2w_src = SIG_W_Stop;
                    this.state.sig_2ws_src = SIG_W_Stop;
                    this.state.sig_2e_src = SIG_E_Stop;
                }
                else {
                    this.state.sw_1_src = SW_U_E_Lined;

                    if (this.state.routes[i] === "W_1_1__|__1_bc_ov") {
                        this.state.sig_2w_src = SIG_W_Clear;
                        this.state.sig_2ws_src = SIG_W_Stop;
                        this.state.sig_2e_src = SIG_E_Stop;
                    }
                    else {
                        this.state.sig_2w_src = SIG_W_Stop;
                        this.state.sig_2ws_src = SIG_W_Stop;
                        this.state.sig_2e_src = SIG_E_Clear;
                    }
                }
            }
            else if (this.state.routes[i] === "W_2_1__|__1_bc_ov" || this.state.routes[i] === "E_1_2__|__2_ov_howells") {
                // Tail Tracks
                this.state.tail_2_e = color;
                this.state.tail_w = color;

                if (this.state.occupied) {
                    this.state.sw_1_src = SW_U_E_R_Occupied;

                    this.state.sig_2w_src = SIG_W_Stop;
                    this.state.sig_2ws_src = SIG_W_Stop;
                    this.state.sig_2e_src = SIG_E_Stop;
                }
                else {
                    this.state.sw_1_src = SW_U_E_R_Lined;

                    if (this.state.routes[i] === "W_2_1__|__1_bc_ov") {
                        this.state.sig_2ws_src = SIG_W_Clear;
                        this.state.sig_2w_src = SIG_W_Stop;
                        this.state.sig_2e_src = SIG_E_Stop;
                    }
                    else {
                        this.state.sig_2w_src = SIG_W_Stop;
                        this.state.sig_2ws_src = SIG_W_Stop;
                        this.state.sig_2e_src = SIG_E_Clear;
                    }
                }
            }
        }
    }

    set_switch_img() {
        if (this.state.sw_1) {
            this.state.sw_1_src = SW_U_E_R;
        }
        else {
            this.state.sw_1_src = SW_U_E;
        }
    }

    reset_drawings() {
        this.state.tail_1_e = Empty;
        this.state.tail_2_e = Empty;
        this.state.tail_w = Empty;

        this.state.sig_2w_src = SIG_W;
        this.state.sig_2ws_src = SIG_W;
        this.state.sig_2e_src = SIG_E;
    }
}
 
export default OV;