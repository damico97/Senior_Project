import React, { Component } from 'react';
// Import CSS style sheet
import '../../../css/Southern_Tier_Line/port.css';

// Import Images
// Switch Images
import SW_U_W from '../../../../public/images/SW_U_W.png';
import SW_U_W_Lined from '../../../../public/images/SW_U_W_Lined.png';
import SW_U_W_Occupied from '../../../../public/images/SW_U_W_Occupied.png';
import SW_U_W_R from '../../../../public/images/SW_U_W_R.png';
import SW_U_W_R_Lined from '../../../../public/images/SW_U_W_R_Lined.png';
import SW_U_W_R_Occupied from '../../../../public/images/SW_U_W_R_Occupied.png';
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

class Port extends Component {
    state = {  
        sw_1: this.props.status.sw_1,
        sw_1_src: SW_U_W,

        tail_yard: Empty,
        tail_west: Empty,
        tail_east: Empty,

        sig_2e_1_src: SIG_E,
        sig_2e_2_src: SIG_E,
        sig_2w_src: SIG_W,

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
                <div className="port_title">CP PORT</div>
                <div className="port_milepost">MP 87.5SR</div>
                
                <div className="port_yard" style={{background: this.state.tail_yard}}></div>
                <div className="port_west" style={{background: this.state.tail_west}}></div>

                <div className="port_SW_1" onClick={this.props.throw_sw_1}><img src={this.state.sw_1_src}/></div>

                <div className="port_east" style={{background: this.state.tail_east}}></div>

                <div className="port_sig_2e-2" onClick={this.props.click_sig_2e_2}><img src={this.state.sig_2e_2_src}/></div>
                <div className="port_sig_2e-1" onClick={this.props.click_sig_2e_1}><img src={this.state.sig_2e_1_src}/></div>
                <div className="port_sig_2w" onClick={this.props.click_sig_2w}><img src={this.state.sig_2w_src}/></div>
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
            if (this.state.routes[i] === "W_1_1__|__1_pa_port" || this.state.routes[i] === "E_1_1__|__1_port_bc") {
                // Tail Tracks
                this.state.tail_east = color;
                this.state.tail_west = color;
                
                if (this.state.occupied) {
                    this.state.sw_1_src = SW_U_W_Occupied;

                    this.state.sig_2w_src = SIG_W_Stop;
                    this.state.sig_2e_1_src = SIG_E_Stop;
                    this.state.sig_2e_2_src = SIG_E_Stop;
                }
                else {
                    this.state.sw_1_src = SW_U_W_Lined;

                    if (this.state.routes[i] === "W_1_1__|__1_pa_port") {
                        this.state.sig_2w_src = SIG_W_Clear;
                        this.state.sig_2e_1_src = SIG_E_Stop;
                        this.state.sig_2e_2_src = SIG_E_Stop;
                    }
                    else {
                        this.state.sig_2w_src = SIG_W_Stop;
                        this.state.sig_2e_1_src = SIG_E_Clear;
                        this.state.sig_2e_2_src = SIG_E_Stop;
                    }
                }
            }
            else if (this.state.routes[i] === "W_1_3__|__3_yardEast_port" || this.state.routes[i] === "E_3_1__|__1_port_bc") {
                // Tail Tracks
                this.state.tail_east = color;
                this.state.tail_yard = color;
                
                if (this.state.occupied) {
                    this.state.sw_1_src = SW_U_W_R_Occupied;

                    this.state.sig_2w_src = SIG_W_Stop;
                    this.state.sig_2e_1_src = SIG_E_Stop;
                    this.state.sig_2e_2_src = SIG_E_Stop;
                }
                else {
                    this.state.sw_1_src = SW_U_W_R_Lined;

                    if (this.state.routes[i] === "W_1_3__|__3_yardEast_port") {
                        this.state.sig_2w_src = SIG_W_Clear;
                        this.state.sig_2e_1_src = SIG_E_Stop;
                        this.state.sig_2e_2_src = SIG_E_Stop;
                    }
                    else {
                        this.state.sig_2w_src = SIG_W_Stop;
                        this.state.sig_2e_1_src = SIG_E_Stop;
                        this.state.sig_2e_2_src = SIG_E_Clear;
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
        this.state.tail_yard = Empty;
        this.state.tail_west = Empty;
        this.state.tail_east = Empty;

        this.state.sig_2e_1_src = SIG_E;
        this.state.sig_2e_2_src = SIG_E;
        this.state.sig_2w_src = SIG_W;
    }
}
 
export default Port;