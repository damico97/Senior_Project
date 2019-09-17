import React, { Component } from 'react';
// Import CSS style sheet
import '../../../css/Southern_Tier_Line/bc.css';

// Import Images
// Switch Images
import SW_U_W from '../../../../public/images/SW_U_W_R.png';
import SW_U_W_Lined from '../../../../public/images/SW_U_W_R_Lined.png';
import SW_U_W_Occupied from '../../../../public/images/SW_U_W_R_Occupied.png';
import SW_U_W_R from '../../../../public/images/SW_U_W.png';
import SW_U_W_R_Lined from '../../../../public/images/SW_U_W_Lined.png';
import SW_U_W_R_Occupied from '../../../../public/images/SW_U_W_Occupied.png';
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

class BC extends Component {
    state = {  
        sw_1: this.props.status.sw_1,
        sw_1_src: SW_U_W,

        sig_2w_src: SIG_W,
        sig_2e_src: SIG_E,
        sig_4e_src: SIG_E, 
        
        tail_1_w: Empty,
        tail_2_w: Empty,
        tail_e: Empty,

        occupied: this.props.status.occupied,
        routes: this.props.status.routes
    };

    componentWillReceiveProps(nextProps){
        this.setState({
            sw_1: nextProps.status.sw_1,
            occupied: nextProps.status.occupied,
            routes: nextProps.status.routes
        });
    }

    render() { 
        this.reset_drawings();
        this.set_switch_img();
        this.set_route_drawing();

        return (  
            <div>
                <div className="bc_title">CP BC</div>
                <div className="bc_milepost">MP 86.7SR</div>

                <div className="bc_1_west" style={{background: this.state.tail_1_w}}></div>
                <div className="bc_2_west" style={{background: this.state.tail_2_w}}></div>

                <div className="bc_SW_1" onClick={this.props.throw_sw_1}><img src={this.state.sw_1_src}/></div>

                <div className="bc_east" style={{background: this.state.tail_e}}></div>

                <div className="bc_sig_2e" onClick={this.props.click_sig_2e}><img src={this.state.sig_2e_src}/></div>
                <div className="bc_sig_4e" onClick={this.props.click_sig_4e}><img src={this.state.sig_4e_src}/></div>
                <div className="bc_sig_2w" onClick={this.props.click_sig_2w}><img src={this.state.sig_2w_src}/></div>
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
            if (this.state.routes[i] === "W_1_1__|__1_port_bc" || this.state.routes[i] === 
            "E_1_1__|__1_bc_ov") {
                // Tail Tracks
                this.state.tail_e = color;
                this.state.tail_1_w = color;

                if (this.state.occupied) {
                    this.state.sw_1_src = SW_U_W_Occupied;

                    this.state.sig_2w_src = SIG_W_Stop;
                    this.state.sig_2e_src = SIG_E_Stop;
                }
                else {
                    this.state.sw_1_src = SW_U_W_Lined;

                    if (this.state.routes[i] === "W_1_1__|__1_port_bc") {
                        this.state.sig_2w_src = SIG_W_Clear;
                        this.state.sig_2e_src = SIG_E_Stop;
                        this.state.sig_4e_src = SIG_E_Stop;
                    }
                    else {
                        this.state.sig_2w_src = SIG_W_Stop;
                        this.state.sig_2e_src = SIG_E_Clear;
                        this.state.sig_4e_src = SIG_E_Stop;
                    }
                }
            }
            else if (this.state.routes[i] === "W_1_2__|__2_pa_bc" || this.state.routes[i] === "E_2_1__|__1_bc_ov") {
                // Tail Tracks
                this.state.tail_e = color;
                this.state.tail_2_w = color;

                if (this.state.occupied) {
                    this.state.sw_1_src = SW_U_W_R_Occupied;

                    this.state.sig_2w_src = SIG_W_Stop;
                    this.state.sig_2e_src = SIG_E_Stop;
                    this.state.sig_4e_src = SIG_E_Stop;
                }
                else {
                    this.state.sw_1_src = SW_U_W_R_Lined;

                    if (this.state.routes[i] === "W_1_2__|__2_pa_bc") {
                        this.state.sig_2w_src = SIG_W_Clear;
                        this.state.sig_2e_src = SIG_E_Stop;
                        this.state.sig_4e_src = SIG_E_Stop;
                    }
                    else {
                        this.state.sig_2w_src = SIG_W_Stop;
                        this.state.sig_2e_src = SIG_E_Stop;
                        this.state.sig_4e_src = SIG_E_Clear;
                    }
                }
            }
        }
    }

    set_switch_img() {
        if (this.state.sw_1) {
            this.state.sw_1_src = SW_U_W_R;
        }
        else {
            this.state.sw_1_src = SW_U_W;
        }
    }

    reset_drawings() {
        this.state.tail_1_w = Empty;
        this.state.tail_2_w = Empty;
        this.state.tail_e = Empty;

        this.state.sig_2e_src = SIG_E;
        this.state.sig_4e_src = SIG_E;
        this.state.sig_2w_src = SIG_W;
    }
}
 
export default BC;