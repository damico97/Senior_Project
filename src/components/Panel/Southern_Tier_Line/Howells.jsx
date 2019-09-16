import React, { Component } from 'react';
// Import CSS style sheet
import '../../../css/Southern_Tier_Line/howells.css';

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


class Howells extends Component {
    state = {  
        sw_3: this.props.status.sw_3,
        sw_3_src: SW_U_W,

        tail_1_w: Empty,
        tail_2_w: Empty,
        tail_e: Empty,

        sig_2w_src: SIG_W,
        sig_2e_src: SIG_E,
        sig_2es_src: SIG_E,

        occupied: false,
        routes: this.props.status.routes
    };

    componentWillReceiveProps(nextProps){
        this.setState({
            sw_3: nextProps.status.sw_3,
            routes: nextProps.status.routes
        });
    }

    render() { 
        this.reset_drawings();
        this.set_switch_img();
        this.set_route_drawings();

        return (  
            <div>
                <div className="howells_title">CP HOWELLS</div>
                <div className="howells_milepost">MP 69.1SR</div>
                
                <div className="howells_2_west" style={{background: this.state.tail_2_w}}></div>
                <div className="howells_1_west" style={{background: this.state.tail_1_w}}></div>

                <div className="howells_SW_3" onClick={this.props.throw_sw_3}><img src={this.state.sw_3_src}/></div>

                <div className="howells_east" style={{background: this.state.tail_e}}></div>

                <div className="howells_sig_2es" onClick={this.props.click_sig_2es}><img src={this.state.sig_2es_src}/></div>
                <div className="howells_sig_2e" onClick={this.props.click_sig_2e}><img src={this.state.sig_2e_src}/></div>

                <div className="howells_sig_2w" onClick={this.props.click_sig_2w}><img src={this.state.sig_2w_src}/></div>
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
            if (this.state.routes[i] === "W_1_1__|__1_ov_howells" || this.state.routes[i] === "E_1_1__|__1_howells_hall") {
                // Tail Tracks
                this.state.tail_e = color;
                this.state.tail_1_w = color;

                if (this.state.occupied) {
                    this.state.sw_3_src = SW_U_W_Occupied;

                    this.state.sig_2w_src = SIG_W_Stop;
                    this.state.sig_2e_src = SIG_E_Stop;
                }
                else {
                    this.state.sw_3_src = SW_U_W_Lined;

                    if (this.state.routes[i] === "W_1_1__|__1_ov_howells") {
                        this.state.sig_2w_src = SIG_W_Clear;
                        this.state.sig_2e_src = SIG_E_Stop;
                        this.state.sig_2es_src = SIG_E_Stop;
                    }
                    else {
                        this.state.sig_2w_src = SIG_W_Stop;
                        this.state.sig_2e_src = SIG_E_Clear;
                        this.state.sig_2es_src = SIG_E_Stop;
                    }
                }
            }
            else if (this.state.routes[i] === "W_1_2__|__2_ov_howells" || this.state.routes[i] === "E_2_1__|__1_howells_hall") {
                // Tail Tracks
                this.state.tail_e = color;
                this.state.tail_2_w = color;

                if (this.state.occupied) {
                    this.state.sw_3_src = SW_U_W_R_Occupied;

                    this.state.sig_2w_src = SIG_W_Stop;
                    this.state.sig_2e_src = SIG_E_Stop;
                }
                else {
                    this.state.sw_3_src = SW_U_W_R_Lined;

                    if (this.state.routes[i] === "W_1_2__|__2_ov_howells") {
                        this.state.sig_2w_src = SIG_W_Clear;
                        this.state.sig_2e_src = SIG_E_Stop;
                        this.state.sig_2es_src = SIG_E_Stop;
                    }
                    else {
                        this.state.sig_2w_src = SIG_W_Stop;
                        this.state.sig_2e_src = SIG_E_Stop;
                        this.state.sig_2es_src = SIG_E_Clear;
                    }
                }
            }
        }
    }

    set_switch_img() {
        if (this.state.sw_3) {
            this.state.sw_3_src = SW_U_W_R;
        }
        else {
            this.state.sw_3_src = SW_U_W;
        }
    }

    reset_drawings() {
        this.state.tail_1_w = Empty;
        this.state.tail_2_w = Empty;
        this.state.tail_e = Empty;

        this.state.sig_2w_src = SIG_W;
        this.state.sig_2e_src = SIG_E;
        this.state.sig_2es_src = SIG_E;
    }
}
 
export default Howells;