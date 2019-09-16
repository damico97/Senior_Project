import React, { Component } from 'react';
// Import CSS style sheet
import '../../../css/Southern_Tier_Line/hudsonJunction.css';

// Import Images
// Switch Images
import SW_D_E from '../../../../public/images/SW_D_E.png';
import SW_D_E_Lined from '../../../../public/images/SW_D_E_Lined.png';
import SW_D_E_Occupied from '../../../../public/images/SW_D_E_Occupied.png';
import SW_D_E_R from '../../../../public/images/SW_D_E_R.png';
import SW_D_E_R_Lined from '../../../../public/images/SW_D_E_R_Lined.png';
import SW_D_E_R_Occupied from '../../../../public/images/SW_D_E_R_Occupied.png';
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


class HudsonJunction extends Component {
    state = {  
        sw_1: this.props.status.sw_1,
        sw_3: this.props.status.sw_3,
        sw_1_src: SW_U_W,
        sw_3_src: SW_D_E,

        sig_2w_src: SIG_W,
        sig_2ws_src: SIG_W,
        sig_2e_src: SIG_E,
        sig_2es_src: SIG_E,

        tail_1_w: Empty,
        tail_2_w: Empty,
        tail_e: Empty,
        tail_nysw: Empty,

        occupied: this.props.status.occupied,
        routes: this.props.status.routes
    };

    componentWillReceiveProps(nextProps){
        this.setState({
            sw_1: nextProps.status.sw_1,
            sw_3: nextProps.status.sw_3,
            occupied: nextProps.status.occupied,
            routes: nextProps.status.routes
        });
    }

    render() { 
        this.reset_drawings();
        this.set_switch_img();
        this.set_route_drawings();

        return (  
            <div>
                <div className="hudson_title">CP HUDSON JUNCTION</div>
                <div className="hudson_milepost">MP 63.4JS</div>
                <div className="hudson_2_west" style={{background: this.state.tail_2_w}}></div>
                <div className="hudson_1_west" style={{background: this.state.tail_1_w}}></div>

                <div className="hudson_SW_3" onClick={this.props.throw_sw_3}><img src={this.state.sw_3_src}/></div>
                <div className="hudson_SW_1" onClick={this.props.throw_sw_1}><img src={this.state.sw_1_src}/></div>

                <div className="hudson_east" style={{background: this.state.tail_e}}></div>
                <div className="hudson_nysw" style={{background: this.state.tail_nysw}}></div>

                <div className="hudson_sig_2es" onClick={this.props.click_sig_2es}><img src={this.state.sig_2es_src}/></div>
                <div className="hudson_sig_2e" onClick={this.props.click_sig_2e}><img src={this.state.sig_2e_src}/></div>

                <div className="hudson_sig_2w" onClick={this.props.click_sig_2w}><img src={this.state.sig_2w_src}/></div>
                <div className="hudson_sig_2ws" onClick={this.props.click_sig_2ws}><img src={this.state.sig_2ws_src}/></div>
            </div>
        );
    }

    set_route_drawings() {
        let color = null;
        if (this.state.occupied) {
            color = Red;
        }
        else {
            color = Green;
        }

        for (let i = 0; i < this.state.routes.length; i++) {
            if (this.state.routes[i] === "W_1_1__|__1_hall_hudson" || this.state.routes[i] === "E_1_1__|__1_hudson_valley") {
                // Tail Tracks
                this.state.tail_1_w = color;
                this.state.tail_e = color;

                if (this.state.occupied) {
                    this.state.sw_1_src = SW_U_W_Occupied;
                    this.state.sw_3_src = SW_D_E_Occupied;

                    this.state.sig_2w_src = SIG_W_Stop;
                    this.state.sig_2ws_src = SIG_W_Stop;
                    this.state.sig_2e_src = SIG_E_Stop;
                    this.state.sig_2es_src = SIG_E_Stop;
                }
                else {
                    this.state.sw_1_src = SW_U_W_Lined;
                    this.state.sw_3_src = SW_D_E_Lined;

                    if (this.state.routes[i] === "W_1_1__|__1_hall_hudson") {
                        this.state.sig_2w_src = SIG_W_Clear;
                        this.state.sig_2ws_src = SIG_W_Stop;
                        this.state.sig_2e_src = SIG_E_Stop;
                        this.state.sig_2es_src = SIG_E_Stop;
                    }
                    else {
                        this.state.sig_2w_src = SIG_W_Stop;
                        this.state.sig_2ws_src = SIG_W_Stop;
                        this.state.sig_2e_src = SIG_E_Clear;
                        this.state.sig_2es_src = SIG_E_Stop;
                    }
                }
            }
            else if (this.state.routes[i] === "W_1_2__|__2_hall_hudson" || this.state.routes[i] === "E_2_1__|__1_hudson_valley") {
                this.state.tail_2_w = color;
                this.state.tail_e = color;

                if (this.state.occupied) {
                    this.state.sw_1_src = SW_U_W_R_Occupied;
                    this.state.sw_3_src = SW_D_E_Occupied;

                    this.state.sig_2w_src = SIG_W_Stop;
                    this.state.sig_2ws_src = SIG_W_Stop;
                    this.state.sig_2e_src = SIG_E_Stop;
                    this.state.sig_2es_src = SIG_E_Stop;
                }
                else {
                    this.state.sw_1_src = SW_U_W_R_Lined;
                    this.state.sw_3_src = SW_D_E_Lined;

                    if (this.state.routes[i] === "W_1_2__|__2_hall_hudson") {
                        this.state.sig_2w_src = SIG_W_Clear;
                        this.state.sig_2ws_src = SIG_W_Stop;
                        this.state.sig_2e_src = SIG_E_Stop;
                        this.state.sig_2es_src = SIG_E_Stop;
                    }
                    else {
                        this.state.sig_2w_src = SIG_W_Stop;
                        this.state.sig_2ws_src = SIG_W_Stop;
                        this.state.sig_2e_src = SIG_E_Stop;
                        this.state.sig_2es_src = SIG_E_Clear;
                    }
                }
            }
            else if (this.state.routes[i] === "W_3_1__|__1_hall_hudson" || this.state.routes[i] === "E_1_3__|__1_hudson_nysw") {
                this.state.tail_1_w = color;
                this.state.tail_nysw = color;

                if (this.state.occupied) {
                    this.state.sw_1_src = SW_U_W_Occupied;
                    this.state.sw_3_src = SW_D_E_R_Occupied;

                    this.state.sig_2w_src = SIG_W_Stop;
                    this.state.sig_2ws_src = SIG_W_Stop;
                    this.state.sig_2e_src = SIG_E_Stop;
                    this.state.sig_2es_src = SIG_E_Stop;
                }
                else {
                    this.state.sw_1_src = SW_U_W_Lined;
                    this.state.sw_3_src = SW_D_E_R_Lined;

                    if (this.state.routes[i] === "W_3_1__|__1_hall_hudson") {
                        this.state.sig_2w_src = SIG_W_Stop;
                        this.state.sig_2ws_src = SIG_W_Clear;
                        this.state.sig_2e_src = SIG_E_Stop;
                        this.state.sig_2es_src = SIG_E_Stop;
                    }
                    else {
                        this.state.sig_2w_src = SIG_W_Stop;
                        this.state.sig_2ws_src = SIG_W_Stop;
                        this.state.sig_2e_src = SIG_E_Clear;
                        this.state.sig_2es_src = SIG_E_Stop;
                    }
                }
            }
            else if (this.state.routes[i] === "W_3_2__|__2_hall_hudson" || this.state.routes[i] === "E_2_3__|__1_hudson_nysw") {
                this.state.tail_2_w = color;
                this.state.tail_nysw = color;

                if (this.state.occupied) {
                    this.state.sw_1_src = SW_U_W_R_Occupied;
                    this.state.sw_3_src = SW_D_E_R_Occupied;

                    this.state.sig_2w_src = SIG_W_Stop;
                    this.state.sig_2ws_src = SIG_W_Stop;
                    this.state.sig_2e_src = SIG_E_Stop;
                    this.state.sig_2es_src = SIG_E_Stop;
                }
                else {
                    this.state.sw_1_src = SW_U_W_R_Lined;
                    this.state.sw_3_src = SW_D_E_R_Lined;

                    if (this.state.routes[i] === "W_3_2__|__2_hall_hudson") {
                        this.state.sig_2w_src = SIG_W_Stop;
                        this.state.sig_2ws_src = SIG_W_Clear;
                        this.state.sig_2e_src = SIG_E_Stop;
                        this.state.sig_2es_src = SIG_E_Stop;
                    }
                    else {
                        this.state.sig_2w_src = SIG_W_Stop;
                        this.state.sig_2ws_src = SIG_W_Stop;
                        this.state.sig_2e_src = SIG_E_Stop;
                        this.state.sig_2es_src = SIG_E_Clear;
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

        if (this.state.sw_3) {
            this.state.sw_3_src = SW_D_E_R;
        }
        else {
            this.state.sw_3_src = SW_D_E;
        }
    }

    reset_drawings() {
        this.state.tail_1_w = Empty;
        this.state.tail_2_w = Empty;
        this.state.tail_e = Empty;
        this.state.tail_nysw = Empty;

        this.state.sig_2w_src = SIG_W;
        this.state.sig_2ws_src = SIG_W;
        this.state.sig_2e_src = SIG_E;
        this.state.sig_2es_src = SIG_E;
    }
}
 
export default HudsonJunction;