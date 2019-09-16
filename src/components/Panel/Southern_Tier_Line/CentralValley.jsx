import React, { Component } from 'react';
// Import CSS style sheet
import '../../../css/Southern_Tier_Line/centralValley.css';

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


class CentralValley extends Component {
    state = {  
        sw_21: this.props.status.sw_21,
        sw_21_src: SW_U_E,

        sig_2w_src: SIG_W,
        sig_1w_src: SIG_W,
        sig_1e_src: SIG_E,

        tail_w: Empty,
        tail_1_e: Empty,
        tail_2_e: Empty,

        occupied: this.props.status.occupied,
        routes: this.props.status.routes
    };

    componentWillReceiveProps(nextProps){
        this.setState({
            sw_21: nextProps.status.sw_21,
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
                <div className="valley_title">CP CENTRAL VALLEY</div>
                <div className="valley_milepost">MP 47.8JS</div>
                
                <div className="valley_west" style={{background: this.state.tail_w}}></div>

                <div className="valley_SW_21" onClick={this.props.throw_sw_21}><img src={this.state.sw_21_src}/></div>

                <div className="valley_2_east" style={{background: this.state.tail_2_e}}></div>
                <div className="valley_1_east" style={{background: this.state.tail_1_e}}></div>

                <div className="valley_sig_2w" onClick={this.props.click_sig_2w}><img src={this.state.sig_2w_src}/></div>
                <div className="valley_sig_1w" onClick={this.props.click_sig_1w}><img src={this.state.sig_1w_src}/></div>

                <div className="valley_sig_1e" onClick={this.props.click_sig_1e}><img src={this.state.sig_1e_src}/></div>
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
            if (this.state.routes[i] === "W_1_1__|__1_hudson_valley" || this.state.routes[i] === "E_1_1__|__1_valley_harriman") {
                // Tail Tracks
                this.state.tail_1_e = color;
                this.state.tail_w = color;

                // Drawing if the interlocking is occupied
                if (this.state.occupied) {
                    // Switch Image
                    this.state.sw_21_src = SW_U_E_Occupied;

                    // Signal Images
                    this.state.sig_2w_src = SIG_W_Stop;
                    this.state.sig_1w_src = SIG_W_Stop;
                    this.state.sig_1e_src = SIG_E_Stop;
                }
                // Routing is not occupied
                else {
                    // Switch Image
                    this.state.sw_21_src = SW_U_E_Lined;

                    // Signal Images
                    // West Bound
                    if (this.state.routes[i] === "W_1_1__|__1_hudson_valley") {
                        this.state.sig_2w_src = SIG_W_Stop;
                        this.state.sig_1w_src = SIG_W_Clear;
                        this.state.sig_1e_src = SIG_E_Stop;
                    }
                    // East Bound
                    else {
                        this.state.sig_2w_src = SIG_W_Stop;
                        this.state.sig_1w_src = SIG_W_Stop;
                        this.state.sig_1e_src = SIG_E_Clear;
                    }
                }
            }
            else if (this.state.routes[i] === "W_2_1__|__1_hudson_valley" || this.state.routes[i] === "E_1_2__|__2_valley_harriman") {
                // Tail Tracks
                this.state.tail_2_e = color;
                this.state.tail_w = color;

                // Drawing if the interlocking is occupied
                if (this.state.occupied) {
                    // Switch Image
                    this.state.sw_21_src = SW_U_E_Occupied;

                    // Signal Images
                    this.state.sig_2w_src = SIG_W_Stop;
                    this.state.sig_1w_src = SIG_W_Stop;
                    this.state.sig_1e_src = SIG_E_Stop;
                }
                // Routing that is not occupied
                else {
                    // Switch Image
                    this.state.sw_21_src = SW_U_E_R_Lined;

                    // Signal Images
                    // West Bound Route
                    if (this.state.routes[i] === "W_2_1__|__1_hudson_valley") {
                        this.state.sig_2w_src = SIG_W_Clear;
                        this.state.sig_1w_src = SIG_W_Stop;
                        this.state.sig_1e_src = SIG_E_Stop;
                    }
                    // East Bound Route
                    else {
                        this.state.sig_2w_src = SIG_W_Stop;
                        this.state.sig_1w_src = SIG_W_Stop;
                        this.state.sig_1e_src = SIG_E_Clear;
                    }
                }
            }
        }
    }

    set_switch_img() {
        if (this.state.sw_21) {
            this.state.sw_21_src = SW_U_E_R;
        }
        else {
            this.state.sw_21_src = SW_U_E;
        }
    }

    reset_drawings() {
        this.state.sig_2w_src = SIG_W;
        this.state.sig_1w_src = SIG_W;
        this.state.sig_1e_src = SIG_E;

        this.state.tail_w = Empty;
        this.state.tail_1_e = Empty;
        this.state.tail_2_e = Empty;
    }
}
 
export default CentralValley;