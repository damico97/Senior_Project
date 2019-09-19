import React, { Component } from 'react';
import '../../../css/Main_Line/west_secaucus.css';

import SW_D_E from '../../../../public/images/SW_D_E.png';
import SW_D_E_Lined from '../../../../public/images/SW_D_E_Lined.png';
import SW_D_E_Occupied from '../../../../public/images/SW_D_E_Occupied.png'
import SW_D_E_R from '../../../../public/images/SW_D_E_R.png';
import SW_D_E_R_Lined from '../../../../public/images/SW_D_E_R_Lined.png';
import SW_D_E_R_Occupied from '../../../../public/images/SW_D_E_R_Occupied.png';
import SW_D_W from '../../../../public/images/SW_D_W.png';
import SW_D_W_Lined from '../../../../public/images/SW_D_W_Lined.png';
import SW_D_W_Occupied from '../../../../public/images/SW_D_W_Occupied.png'
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

const Empty = '#999999';
const Lined = '#75fa4c';
const Occupied = '#eb3323';

class WestSecaucus extends Component {
    state = {  
        sw_1: this.props.status.sw_1,
        sw_3: this.props.status.sw_3,
        sw_1_src: SW_D_W,
        sw_3_src: SW_D_E,
        sig_2w_src: SIG_W,
        sig_4w_src: SIG_W,
        sig_2e_src: SIG_E,
        sig_4e_src: SIG_E,
        tail_1_e: Empty,
        tail_1_w: Empty,
        tail_2_e: Empty,
        tail_2_w: Empty,
        routes: this.props.status.routes,
        occupied: this.props.status.occupied
    };

    componentWillReceiveProps(nextProps) {
        this.setState({
            sw_1: nextProps.status.sw_1,
            sw_3: nextProps.status.sw_3,
            sig_2w_src: SIG_W,
            sig_4w_src: SIG_W,
            sig_2e_src: SIG_E,
            sig_4e_src: SIG_E,
            tail_1_e: Empty,
            tail_1_w: Empty,
            tail_center: Empty,
            tail_2_e: Empty,
            tail_2_w: Empty,
            routes: nextProps.status.routes,
            occupied: nextProps.status.occupied
        });
    }
    
    render() { 
        this.set_switch_img();
        this.set_route_drawing();

        return ( 
            <div>
                <div className="westSecaucus_title">WEST SECAUCUS</div>
                <div className="westSecaucus_milepost">MP 5.0</div>
                
                <div className="m_westSecaucus_1_east" style={{background: this.state.tail_1_e}}></div>
                <div className="m_westSecaucus_2_east" style={{background: this.state.tail_2_e}}></div>

                <div className="westSecaucus_SW_1" onClick={this.props.throw_sw_3}><img src={this.state.sw_3_src}/></div>
                <div className="m_westSecaucus_bridge" style={{background: this.state.tail_center}}></div>
                <div className="westSecaucus_SW_3" onClick={this.props.throw_sw_1}><img src={this.state.sw_1_src}/></div>

                <div className="m_westSecaucus_1_west" style={{background: this.state.tail_1_w}}></div>
                <div className="m_westSecaucus_2_west" style={{background: this.state.tail_2_w}}></div>

                <div className="westSecaucus_sig_2e" onClick={this.props.click_sig_2e}><img src={this.state.sig_2e_src}/></div>
                <div className="westSecaucus_sig_4e" onClick={this.props.click_sig_4e}><img src={this.state.sig_4e_src}/></div>
                <div className="westSecaucus_sig_2w" onClick={this.props.click_sig_2w}><img src={this.state.sig_2w_src}/></div>
                <div className="westSecaucus_sig_4w" onClick={this.props.click_sig_4w}><img src={this.state.sig_4w_src}/></div>
            </div>
        );
    }

    set_route_drawing = () => {
        for (let i = 0; i < this.state.routes.length; i++) {
            if (this.state.routes[i] === "W_1_1__|__1_mill_westSecaucus" || this.state.routes[i] === "E_1_1__|__2_westSecaucus_laurel") {
                if (this.state.occupied) {
                    this.state.tail_1_e = Occupied;
                    this.state.tail_center = Occupied;
                    this.state.tail_1_w = Occupied;

                    this.state.sw_1_src = SW_D_W_Occupied;
                    this.state.sw_3_src = SW_D_E_Occupied;

                    this.state.sig_2w_src = SIG_W_Stop;
                    this.state.sig_2e_src = SIG_E_Stop;
                    this.state.sig_4w_src = SIG_W_Stop;
                    this.state.sig_4e_src = SIG_E_Stop;
                }
                else {
                    this.state.tail_1_e = Lined;
                    this.state.tail_center = Lined;
                    this.state.tail_1_w = Lined;

                    this.state.sw_1_src = SW_D_W_Lined;
                    this.state.sw_3_src = SW_D_E_Lined;

                    if (this.state.routes[i] === "W_1_1__|__1_mill_westSecaucus") {
                        this.state.sig_2w_src = SIG_W_Clear;
                        this.state.sig_2e_src = SIG_E_Stop;
                        this.state.sig_4w_src = SIG_W_Stop;
                        this.state.sig_4e_src = SIG_E_Stop;
                    }
                    else {
                        this.state.sig_2w_src = SIG_W_Stop;
                        this.state.sig_2e_src = SIG_E_Clear;
                        this.state.sig_4w_src = SIG_W_Stop;
                        this.state.sig_4e_src = SIG_E_Stop;
                    }
                }
            }
            else if (this.state.routes[i] === "W_1_2__|__2_mill_westSecaucus" || this.state.routes[i] === "E_2_1__|__2_westSecaucus_laurel") {
                if (this.state.occupied) {
                    this.state.tail_1_e = Occupied;
                    this.state.tail_center = Occupied;
                    this.state.tail_2_w = Occupied;

                    this.state.sw_1_src = SW_D_W_R_Occupied;
                    this.state.sw_3_src = SW_D_E_Occupied;

                    this.state.sig_2w_src = SIG_W_Stop;
                    this.state.sig_2e_src = SIG_E_Stop;
                    this.state.sig_4w_src = SIG_W_Stop;
                    this.state.sig_4e_src = SIG_E_Stop;
                }
                else {
                    this.state.tail_1_e = Lined;
                    this.state.tail_center = Lined;
                    this.state.tail_2_w = Lined;

                    this.state.sw_1_src = SW_D_W_R_Lined;
                    this.state.sw_3_src = SW_D_E_Lined;

                    if (this.state.routes[i] === "W_1_2__|__2_mill_westSecaucus") {
                        this.state.sig_2w_src = SIG_W_Clear;
                        this.state.sig_2e_src = SIG_E_Stop;
                        this.state.sig_4w_src = SIG_W_Stop;
                        this.state.sig_4e_src = SIG_E_Stop;
                    }
                    else {
                        this.state.sig_2w_src = SIG_W_Stop;
                        this.state.sig_2e_src = SIG_E_Stop;
                        this.state.sig_4w_src = SIG_W_Stop;
                        this.state.sig_4e_src = SIG_E_Clear;
                    }
                }
            }
            else if (this.state.routes[i] === "W_2_1__|__1_mill_westSecaucus" || this.state.routes[i] === "E_1_2__|__4_westSecaucus_laurel") {
                if (this.state.occupied) {
                    this.state.tail_2_e = Occupied;
                    this.state.tail_center = Occupied;
                    this.state.tail_1_w = Occupied;

                    this.state.sw_1_src = SW_D_W_Occupied;
                    this.state.sw_3_src = SW_D_E_R_Occupied;

                    this.state.sig_2w_src = SIG_W_Stop;
                    this.state.sig_2e_src = SIG_E_Stop;
                    this.state.sig_4w_src = SIG_W_Stop;
                    this.state.sig_4e_src = SIG_E_Stop;
                }
                else {
                    this.state.tail_2_e = Lined;
                    this.state.tail_center = Lined;
                    this.state.tail_1_w = Lined;

                    this.state.sw_1_src = SW_D_W_Lined;
                    this.state.sw_3_src = SW_D_E_R_Lined;

                    if (this.state.routes[i] === "W_2_1__|__1_mill_westSecaucus") {
                        this.state.sig_2w_src = SIG_W_Stop;
                        this.state.sig_2e_src = SIG_E_Stop;
                        this.state.sig_4w_src = SIG_W_Clear;
                        this.state.sig_4e_src = SIG_E_Stop;
                    }
                    else {
                        this.state.sig_2w_src = SIG_W_Stop;
                        this.state.sig_2e_src = SIG_E_Clear;
                        this.state.sig_4w_src = SIG_W_Stop;
                        this.state.sig_4e_src = SIG_E_Stop;
                    }
                }
            }
            else if (this.state.routes[i] === "W_2_2__|__2_mill_westSecaucus" || this.state.routes[i] === "E_2_2__|__4_westSecaucus_laurel") {
                if (this.state.occupied) {
                    this.state.tail_2_e = Occupied;
                    this.state.tail_center = Occupied;
                    this.state.tail_2_w = Occupied;

                    this.state.sw_1_src = SW_D_W_R_Occupied;
                    this.state.sw_3_src = SW_D_E_R_Occupied;

                    this.state.sig_2w_src = SIG_W_Stop;
                    this.state.sig_2e_src = SIG_E_Stop;
                    this.state.sig_4w_src = SIG_W_Stop;
                    this.state.sig_4e_src = SIG_E_Stop;
                }
                else {
                    this.state.tail_2_e = Lined;
                    this.state.tail_center = Lined;
                    this.state.tail_2_w = Lined;

                    this.state.sw_1_src = SW_D_W_R_Lined;
                    this.state.sw_3_src = SW_D_E_R_Lined;

                    if (this.state.routes[i] === "W_2_2__|__2_mill_westSecaucus") {
                        this.state.sig_2w_src = SIG_W_Stop;
                        this.state.sig_2e_src = SIG_E_Stop;
                        this.state.sig_4w_src = SIG_W_Clear;
                        this.state.sig_4e_src = SIG_E_Stop;
                    }
                    else {
                        this.state.sig_2w_src = SIG_W_Stop;
                        this.state.sig_2e_src = SIG_E_Stop;
                        this.state.sig_4w_src = SIG_W_Stop;
                        this.state.sig_4e_src = SIG_E_Clear;
                    }
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
            this.state.sw_3_src = SW_D_E_R;
        }
        else {
            this.state.sw_3_src = SW_D_E;
        }
    }
}
 
export default WestSecaucus;