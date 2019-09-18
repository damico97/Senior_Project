import React, { Component } from 'react';
// Import CSS style sheet
import '../../../css/Southern_Tier_Line/sterling.css';

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

// Color Constants For Drawing Routes
const Empty = '#999999';
const Green = '#75fa4c';
const Red = '#eb3323';


class Sterling extends Component {
    state = {  
        sw_21: this.props.status.sw_21,
        sw_21_src: SW_U_E,

        sig_2w_src: SIG_W,
        sig_2ws_src: SIG_W,
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
                <div className="sterling_title">CP STERLING</div>
                <div className="sterling_milepost">MP 34.5JS</div>
                
                <div className="sterling_west" style={{background: this.state.tail_w}}></div>

                <div className="sterling_SW_21" onClick={this.props.throw_sw_21}><img src={this.state.sw_21_src}/></div>

                <div className="sterling_1_east" style={{background: this.state.tail_2_e}}></div>
                <div className="sterling_2_east" style={{background: this.state.tail_1_e}}></div>

                <div className="sterling_sig_2ws" onClick={this.props.click_sig_2ws}><img src={this.state.sig_2ws_src}/></div>
                <div className="sterling_sig_2w" onClick={this.props.click_sig_2w}><img src={this.state.sig_2w_src}/></div>
                <div className="sterling_sig_1e" onClick={this.props.click_sig_1e}><img src={this.state.sig_1e_src}/></div>
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
            // Routes with Track 1 on both the West and East sides
            if (this.state.routes[i] === "W_1_1__|__1_harriman_sterling" || this.state.routes[i] === "E_1_2__|__2_sterling_hilburn") {
                // Tail Tracks
                this.state.tail_1_e = color;
                this.state.tail_w = color;

                // Drawing if the interlocking is occupied
                if (this.state.occupied) {
                    // Switch Image
                    this.state.sw_21_src = SW_U_E_Occupied;

                    // Signal Images
                    this.state.sig_2ws_src = SIG_W_Stop;
                    this.state.sig_2w_src = SIG_W_Stop;
                    this.state.sig_1e_src = SIG_E_Stop;
                }
                // Routing is not occupied
                else {
                    // Switch Image
                    this.state.sw_21_src = SW_U_E_Lined;

                    // Signal Images
                    // West Bound
                    if (this.state.routes[i] === "W_1_1__|__1_harriman_sterling") {
                        this.state.sig_2ws_src = SIG_W_Stop;
                        this.state.sig_2w_src = SIG_W_Clear;
                        this.state.sig_1e_src = SIG_E_Stop;
                    }
                    // East Bound
                    else {
                        this.state.sig_2ws_src = SIG_W_Stop;
                        this.state.sig_2w_src = SIG_W_Stop;
                        this.state.sig_1e_src = SIG_E_Clear;
                    }
                }
            }
            // Routes With Track 2 on West Side and Track 1 on East Side
            else if (this.state.routes[i] === "W_2_1__|__1_harriman_sterling" || this.state.routes[i] === "E_1_1__|__1_sterling_sf" ) {
                // Tail Tracks
                this.state.tail_2_e = color;
                this.state.tail_w = color;

                // Drawing if the interlocking is occupied
                if (this.state.occupied) {
                    // Switch Image
                    this.state.sw_21_src = SW_U_E_R_Occupied;

                    // Signal Images
                    this.state.sig_2ws_src = SIG_W_Stop;
                    this.state.sig_2w_src = SIG_W_Stop;
                    this.state.sig_1e_src = SIG_E_Stop;
                }
                // Routing that is not occupied
                else {
                    // Switch Image
                    this.state.sw_21_src = SW_U_E_R_Lined;

                    // Signal Images
                    // West Bound Route
                    if (this.state.routes[i] === "W_2_1__|__1_harriman_sterling") {
                        this.state.sig_2ws_src = SIG_W_Clear;
                        this.state.sig_2w_src = SIG_W_Stop;
                        this.state.sig_1e_src = SIG_E_Stop;
                    }
                    // East Bound Route
                    else {
                        this.state.sig_2ws_src = SIG_W_Stop;
                        this.state.sig_2w_src = SIG_W_Stop;
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
        this.state.sig_2ws_src = SIG_W;
        this.state.sig_1e_src = SIG_E;

        this.state.tail_w = Empty;
        this.state.tail_1_e = Empty;
        this.state.tail_2_e = Empty;
    }
}
 
export default Sterling;