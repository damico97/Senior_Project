import React, { Component } from 'react';
// Import CSS style sheet
import '../../../css/Southern_Tier_Line/harriman.css';

// Import Images
// Switch Images
import SW_U_W from '../../../../public/images/SW_U_W.png';
import SW_U_W_Lined from '../../../../public/images/SW_U_W_Lined.png';
import SW_U_W_Occupied from '../../../../public/images/SW_U_W_Occupied.png';
import SW_U_W_R from '../../../../public/images/SW_U_W_R.png';
import SW_U_W_R_Lined from '../../../../public/images/SW_U_W_R_Lined.png';
import SW_U_W_R_Occupied from '../../../../public/images/SW_U_W_R_Occupied.png';
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

// Color Constants For Drawing Routes
const Empty = '#999999';
const Green = '#75fa4c';
const Red = '#eb3323';


class Harriman extends Component {
    state = {  
        sw_21: this.props.sw_21,
        sw_32: this.props.sw_32,
        // Image File for the switch - Will change depending on route
        sw_21_src: SW_U_W,
        sw_32_src: SW_D_W,

        // Image File for the signals - Will change depending on route
        sig_1w_src: SIG_W,
        sig_1e_src: SIG_E,
        sig_2e_src: SIG_E,
        sig_3e_src: SIG_E,

        tail_1_w: Empty,
        tail_2_w: Empty,
        tail_ind: Empty,
        tail_e: Empty,

        occupied: this.props.status.occupied,
        routes: this.props.status.routes
    };

    componentWillReceiveProps(nextProps){
        this.setState({
            sw_21: nextProps.status.sw_21,
            sw_32: nextProps.status.sw_32,
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
                <div className="harriman_title">CP HARRIMAN</div>
                <div className="harriman_milepost">MP 45.0JS</div>

                <div className="harriman_1_west" style={{background: this.state.tail_1_w}}></div>
                <div className="harriman_2_west" style={{background: this.state.tail_2_w}}></div>
                <div className="harriman_industrial" style={{background: this.state.tail_ind}}></div>

                <div className="harriman_SW_21" onClick={this.props.throw_sw_21}><img src={this.state.sw_21_src}/></div>
                <div className="harriman_SW_32" onClick={this.props.throw_sw_32}><img src={this.state.sw_32_src}/></div>

                <div className="harriman_1_east" style={{background: this.state.tail_e}}></div>

                <div className="harriman_sig_2e" onClick={this.props.click_sig_2e}><img src={this.state.sig_2e_src}/></div>
                <div className="harriman_sig_1e" onClick={this.props.click_sig_1e}><img src={this.state.sig_1e_src}/></div>
                <div className="harriman_sig_3e" onClick={this.props.click_sig_3e}><img src={this.state.sig_3e_src}/></div>

                <div className="harriman_sig_1w" onClick={this.props.click_sig_1w}><img src={this.state.sig_1w_src}/></div>
            </div>
        );
    }
    /**
     * @brief Sets the drawing for the route through the interlocking
     * 
     * Function takes what routes are currently set in the Interlocking class and displays that route in the UI, the drawing
     * will change depending on if the interlocking is occupied or not
     */
    set_route_drawings() {
        // Setting the color of the tracks depending on if the interlocking in occupied or not
        let color = null;
        if (this.state.occupied) {
            color = Red;
        }
        else {
            color = Green;
        }
        for (let i = 0; i < this.state.routes.length; i++) {
            if (this.state.routes[i] === "W_1_1__|__1_valley_harriman" || this.state.routes[i] === "E_1_1__|__1_harriman_sterling") {
                // Tail Tracks
                this.state.tail_1_w = color;
                this.state.tail_e = color;

                if (this.state.occupied) {
                    // Switch Images
                    this.state.sw_21_src = SW_U_W_Occupied;
                    this.state.sw_32_src = SW_D_W_Occupied;

                    // Signal Images
                    this.state.sig_1w_src = SIG_W_Stop;
                    this.state.sig_1e_src = SIG_E_Stop;
                    this.state.sig_2e_src = SIG_E_Stop;
                    this.state.sig_3e_src = SIG_E_Stop;
                }
                else {
                    // Switch Images
                    this.state.sw_21_src = SW_U_W_Lined;
                    this.state.sw_32_src = SW_D_W_Lined;

                    // Signal Images
                    if (this.state.routes[i] === "W_1_1__|__1_valley_harriman") {
                        this.state.sig_1w_src = SIG_W_Clear;
                        this.state.sig_1e_src = SIG_E_Stop;
                        this.state.sig_2e_src = SIG_E_Stop;
                        this.state.sig_3e_src = SIG_E_Stop;
                    }
                    else {
                        this.state.sig_1w_src = SIG_W_Stop;
                        this.state.sig_1e_src = SIG_E_Clear;
                        this.state.sig_2e_src = SIG_E_Stop;
                        this.state.sig_3e_src = SIG_E_Stop;
                    }
                }
            }
            else if (this.state.routes[i] === "W_1_2__|__2_valley_harriman" || this.state.routes[i] === "E_2_1__|__1_harriman_sterling") {
                // Tail Tracks
                this.state.tail_2_w = color;
                this.state.tail_e = color;

                if (this.state.occupied) {
                    // Switch Images
                    this.state.sw_21_src = SW_U_W_R_Occupied;
                    this.state.sw_32_src = SW_D_W_Occupied;

                    // Signal Images
                    this.state.sig_1w_src = SIG_W_Stop;
                    this.state.sig_1e_src = SIG_E_Stop;
                    this.state.sig_2e_src = SIG_E_Stop;
                    this.state.sig_3e_src = SIG_E_Stop;
                }
                else {
                    // Switch Images
                    this.state.sw_21_src = SW_U_W_R_Lined;
                    this.state.sw_32_src = SW_D_W_Lined;

                    // Signal Images
                    if (this.state.routes[i] === "W_1_2__|__2_valley_harriman") {
                        this.state.sig_1w_src = SIG_W_Clear;
                        this.state.sig_1e_src = SIG_E_Stop;
                        this.state.sig_2e_src = SIG_E_Stop;
                        this.state.sig_3e_src = SIG_E_Stop;
                    }
                    else {
                        this.state.sig_1w_src = SIG_W_Stop;
                        this.state.sig_1e_src = SIG_E_Stop;
                        this.state.sig_2e_src = SIG_E_Clear;
                        this.state.sig_3e_src = SIG_E_Stop;
                    }
                }
            }
            else if (this.state.routes[i] === "W_1_3__|__3_industrial_harriman" || this.state.routes[i] === "E_3_1__|__1_harriman_sterling") {
                // Tail Tracks
                this.state.tail_ind = color;
                this.state.tail_e = color;

                if (this.state.occupied) {
                    // Switch Images
                    this.state.sw_32_src = SW_D_W_R_Occupied;

                    // Signals
                    this.state.sig_1w_src = SIG_W_Stop;
                    this.state.sig_1e_src = SIG_E_Stop;
                    this.state.sig_2e_src = SIG_E_Stop;
                    this.state.sig_3e_src = SIG_E_Stop;
                }
                else {
                    // Switch Images
                    this.state.sw_32_src = SW_D_W_R_Lined;

                    // Signal Images
                    if (this.state.routes[i] === "W_1_3__|__3_industrial_harriman") {
                        this.state.sig_1w_src = SIG_W_Clear;
                        this.state.sig_1e_src = SIG_E_Stop;
                        this.state.sig_2e_src = SIG_E_Stop;
                        this.state.sig_3e_src = SIG_E_Stop;
                    }
                    else {
                        this.state.sig_1w_src = SIG_W_Stop;
                        this.state.sig_1e_src = SIG_E_Stop;
                        this.state.sig_2e_src = SIG_E_Stop;
                        this.state.sig_3e_src = SIG_E_Clear;
                    }
                }
            }
        }
    }

    set_switch_img() {
        if (this.state.sw_21) {
            this.state.sw_21_src = SW_U_W_R;
        }
        else {
            this.state.sw_21_src = SW_U_W;
        }

        if (this.state.sw_32) {
            this.state.sw_32_src = SW_D_W_R;
        }
        else {
            this.state.sw_32_src = SW_D_W;
        }
    }

    /**
     * @brief Function to reset the signal images and track colors
     * 
     * This function is need, because if the player was to remove a route,
     * or when the train clears the interlocking nothing will clear the route
     * the is displaying on the screen, even if it's gone in the backend
     */
    reset_drawings() {
        this.state.sig_1w_src = SIG_W;
        this.state.sig_1e_src = SIG_E;
        this.state.sig_2e_src = SIG_E;
        this.state.sig_3e_src = SIG_E;

        this.state.tail_1_w = Empty;
        this.state.tail_2_w = Empty;
        this.state.tail_ind = Empty;
        this.state.tail_e = Empty;
    }
}
 
export default Harriman;