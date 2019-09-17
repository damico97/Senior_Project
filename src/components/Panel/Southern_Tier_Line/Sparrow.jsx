import React, { Component } from 'react';
// Import CSS style sheet
import '../../../css/Southern_Tier_Line/sparrow.css';

// Import Images
// Switch Images
import SW_U_E from '../../../../public/images/SW_U_E.png';
import SW_U_E_Lined from '../../../../public/images/SW_U_E_Lined.png';
import SW_U_E_Occupied from '../../../../public/images/SW_U_E_Occupied.png';
import SW_U_E_R from '../../../../public/images/SW_U_E_R.png';
import SW_U_E_R_Lined from '../../../../public/images/SW_U_E_R_Lined.png';
import SW_U_E_R_Occupied from '../../../../public/images/SW_U_E_R_Occupied.png';
import SW_D_E from '../../../../public/images/SW_D_E.png';
import SW_D_E_Lined from '../../../../public/images/SW_D_E_Lined.png';
import SW_D_E_Occupied from '../../../../public/images/SW_D_E_Occupied.png';
import SW_D_E_R from '../../../../public/images/SW_D_E_R.png';
import SW_D_E_R_Lined from '../../../../public/images/SW_D_E_R_Lined.png';
import SW_D_E_R_Occupied from '../../../../public/images/SW_D_E_R_Occupied.png';

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


class Sparrow extends Component {
    state = {  
        sw_1: this.props.status.sw_1,
        sw_3: this.props.status.sw_3,
        sw_1_src: SW_U_E,
        sw_3_src: SW_D_E,

        sig_2w1_src: SIG_W,
        sig_2w2_src: SIG_W,
        sig_2w3_src: SIG_W,
        sig_2e_src: SIG_E,

        tail_w: Empty,
        tail_1_e: Empty,
        tail_2_e: Empty,
        tail_cripple: Empty,

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
        this.reset_drawing();
        this.set_switch_img();
        this.set_route_drawings();

        return (  
            <div>
                <div className="sparrow_title">CP SPARROW</div>
                <div className="sparrow_milepost">MP 89.9SR</div>
                
                <div className="sparrow_west" style={{background: this.state.tail_w}}></div>

                <div className="sparrow_SW_3" onClick={this.props.throw_sw_3}><img src={this.state.sw_3_src}/></div>
                <div className="sparrow_SW_1" onClick={this.props.throw_sw_1}><img src={this.state.sw_1_src}/></div>

                <div className="sparrow_cripple" style={{background: this.state.tail_cripple}}></div>
                <div className="sparrow_1_east" style={{background: this.state.tail_1_e}}></div>
                <div className="sparrow_2_east" style={{background: this.state.tail_2_e}}></div>

                <div className="sparrow_sig_2w-2" onClick={this.props.click_sig_2w_2}><img src={this.state.sig_2w2_src}/></div>
                <div className="sparrow_sig_2w-1" onClick={this.props.click_sig_2w_1}><img src={this.state.sig_2w1_src}/></div>
                <div className="sparrow_sig_2w-3" onClick={this.props.click_sig_2w_3}><img src={this.state.sig_2w3_src}/></div>
                <div className="sparrow_sig_2e" onClick={this.props.click_sig_2e}><img src={this.state.sig_2e_src}/></div>
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
            if (this.state.routes[i] === "W_1_1__|__1_bingo_sparrow" || this.state.routes[i] === "E_1_1__|__1_sparrow_pa") {
                // Tail Tracks
                this.state.tail_1_e = color;
                this.state.tail_w = color;

                if (this.state.occupied) {
                    this.state.sw_1_src = SW_U_E_Occupied;
                    this.state.sw_3_src = SW_D_E_Occupied;

                    this.state.sig_2e_src = SIG_E_Stop;
                    this.state.sig_2w1_src = SIG_W_Stop;
                    this.state.sig_2w2_src = SIG_W_Stop;
                    this.state.sig_2w3_src = SIG_W_Stop;
                }
                else {
                    this.state.sw_1_src = SW_U_E_Lined;
                    this.state.sw_3_src = SW_D_E_Lined;

                    if (this.state.routes[i] === "W_1_1__|__1_bingo_sparrow") {
                        this.state.sig_2e_src = SIG_E_Stop;
                        this.state.sig_2w1_src = SIG_W_Clear;
                        this.state.sig_2w2_src = SIG_W_Stop;
                        this.state.sig_2w3_src = SIG_W_Stop;
                    }
                    else {
                        this.state.sig_2e_src = SIG_E_Clear;
                        this.state.sig_2w1_src = SIG_W_Stop;
                        this.state.sig_2w2_src = SIG_W_Stop;
                        this.state.sig_2w3_src = SIG_W_Stop;
                    }
                }
            }
            else if (this.state.routes[i] === "W_2_1__|__1_bingo_sparrow" || this.state.routes[i] === "E_1_2__|__2_sparrow_pa") {
                // Tail Tracks
                this.state.tail_2_e = color;
                this.state.tail_w = color;

                if (this.state.occupied) {
                    this.state.sw_3_src = SW_D_E_R_Occupied;

                    this.state.sig_2e_src = SIG_E_Stop;
                    this.state.sig_2w1_src = SIG_W_Stop;
                    this.state.sig_2w2_src = SIG_W_Stop;
                    this.state.sig_2w3_src = SIG_W_Stop;
                }
                else {
                    this.state.sw_3_src = SW_D_E_R_Lined;

                    if (this.state.routes[i] === "W_2_1__|__1_bingo_sparrow") {
                        this.state.sig_2e_src = SIG_E_Stop;
                        this.state.sig_2w1_src = SIG_W_Stop;
                        this.state.sig_2w2_src = SIG_W_Stop;
                        this.state.sig_2w3_src = SIG_W_Clear;
                    }
                    else {
                        this.state.sig_2e_src = SIG_E_Clear;
                        this.state.sig_2w1_src = SIG_W_Stop;
                        this.state.sig_2w2_src = SIG_W_Stop;
                        this.state.sig_2w3_src = SIG_W_Stop;
                    }
                }
            }
            else if (this.state.routes[i] === "W_3_1__|__1_bingo_sparrow" || this.state.routes[i] === "E_1_3__|__0_sparrow_cripple") {
                // Tail Tracks
                this.state.tail_cripple = color;
                this.state.tail_w = color;

                if (this.state.occupied) {
                    this.state.sw_1_src = SW_U_E_R_Occupied;
                    this.state.sw_3_src = SW_D_E_Occupied;

                    this.state.sig_2e_src = SIG_E_Stop;
                    this.state.sig_2w1_src = SIG_W_Stop;
                    this.state.sig_2w2_src = SIG_W_Stop;
                    this.state.sig_2w3_src = SIG_W_Stop;
                }
                else {
                    this.state.sw_1_src = SW_U_E_R_Lined;
                    this.state.sw_3_src = SW_D_E_Lined;

                    if (this.state.routes[i] === "W_3_1__|__1_bingo_sparrow") {
                        this.state.sig_2e_src = SIG_E_Stop;
                        this.state.sig_2w1_src = SIG_W_Stop;
                        this.state.sig_2w2_src = SIG_W_Clear;
                        this.state.sig_2w3_src = SIG_W_Stop;
                    }
                    else {
                        this.state.sig_2e_src = SIG_E_Clear;
                        this.state.sig_2w1_src = SIG_W_Stop;
                        this.state.sig_2w2_src = SIG_W_Stop;
                        this.state.sig_2w3_src = SIG_W_Stop;
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

        if (this.state.sw_3) {
            this.state.sw_3_src = SW_D_E_R;
        }
        else {
            this.state.sw_3_src = SW_D_E;
        }
    }

    reset_drawing() {
        this.state.tail_1_e = Empty;
        this.state.tail_2_e = Empty;
        this.state.tail_cripple = Empty;
        this.state.tail_w = Empty;

        this.state.sig_2e_src = SIG_E;
        this.state.sig_2w1_src = SIG_W;
        this.state.sig_2w2_src = SIG_W;
        this.state.sig_2w3_src = SIG_W;
    }
}
 
export default Sparrow;