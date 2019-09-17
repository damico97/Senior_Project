import React, { Component } from 'react';
// Import CSS style sheet
import '../../../css/Main_Line/hilburn.css';

// Import Images
// Switch Images
import SW_D_E from '../../../../public/images/SW_D_E.png';
import SW_D_E_Lined from '../../../../public/images/SW_D_E_Lined.png';
import SW_D_E_Occupied from '../../../../public/images/SW_D_E_Occupied.png'
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

// Color Constants For Drawing Routes
const Empty = '#999999';
const Green = '#75fa4c';
const Red = '#eb3323';


class Hilburn extends Component {
    state = {  
        sw_1: this.props.status.sw_1,
        // Image File for the switch - Will change depending on route
        sw_1_src: SW_D_E,
        
        // Image File for the signals - Will change depending on route
        sig_2w1_src: SIG_W,
        sig_2w2_src: SIG_W,
        sig_2e_src: SIG_E,

        // Colors for tail tracks - Will change depending on route
        tail_w: Empty,
        tail_e: Empty,
        tail_yard: Empty,

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
        this.set_route_drawings();

        return (  
            <div>
                <div className="hilburn_title">HILBURN</div>
                <div className="hilburn_milepost">MP 32.3</div>

                <div className="hilburn_west" style={{background: this.state.tail_w}}></div>

                <div className="hilburn_SW_1" onClick={this.props.throw_sw_1}><img src={this.state.sw_1_src}/></div>

                <div className="hilburn_east" style={{background: this.state.tail_e}}></div>
                <div className="hilburn_yard" style={{background: this.state.tail_yard}}></div>

                <div className="hilburn_sig_2w-1" onClick={this.props.click_sig_2w_1}><img src={this.state.sig_2w1_src}/></div>
                <div className="hilburn_sig_2w-2" onClick={this.props.click_sig_2w_2}><img src={this.state.sig_2w2_src}/></div>
                <div className="hilburn_sig_2e" onClick={this.props.click_sig_2e}><img src={this.state.sig_2e_src}/></div>
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
            if (this.state.routes[i] === "W_1_1__|__0_sterling_hilburn" || this.state.routes[i] === "E_1_1__|__0_hilburn_sf") {
                // Tail Tracks
                this.state.tail_e = color;
                this.state.tail_w = color;

                // Drawing if the interlocking is occupied
                if (this.state.occupied) {
                    // Switch Image
                    this.state.sw_1_src = SW_D_E_Occupied;

                    // Signal Images
                    this.state.sig_2w1_src = SIG_W_Stop;
                    this.state.sig_2w2_src = SIG_W_Stop;
                    this.state.sig_2e_src = SIG_E_Stop;
                }
                // Routing is not occupied
                else {
                    // Switch Image
                    this.state.sw_1_src = SW_D_E_Lined;

                    // Signal Images
                    // West Bound
                    if (this.state.routes[i] === "W_1_1__|__0_sterling_hilburn") {
                        this.state.sig_2w1_src = SIG_W_Clear;
                        this.state.sig_2w2_src = SIG_W_Stop;
                        this.state.sig_2e_src = SIG_E_Stop;
                    }
                    // East Bound
                    else {
                        this.state.sig_2w1_src = SIG_W_Stop;
                        this.state.sig_2w2_src = SIG_W_Stop;
                        this.state.sig_2e_src = SIG_E_Clear;
                    }
                }
            }
            // Routes With Track 2 on West Side and Track 1 on East Side
            else if (this.state.routes[i] === "W_2_1__|__0_sterling_hilburn" || this.state.routes[i] === "E_1_2__|__0_hilburn_yard_west") {
                // Tail Tracks
                this.state.tail_yard = color;
                this.state.tail_w = color;

                // Drawing if the interlocking is occupied
                if (this.state.occupied) {
                    // Switch Image
                    this.state.sw_1_src = SW_D_E_Occupied;

                    // Signal Images
                    this.state.sig_2w1_src = SIG_W_Stop;
                    this.state.sig_2w2_src = SIG_W_Stop;
                    this.state.sig_2e_src = SIG_E_Stop;
                }
                // Routing that is not occupied
                else {
                    // Switch Image
                    this.state.sw_1_src = SW_D_E_R_Lined;

                    // Signal Images
                    // West Bound Route
                    if (this.state.routes[i] === "W_2_1__|__0_sterling_hilburn") {
                        this.state.sig_2w1_src = SIG_W_Stop;
                        this.state.sig_2w2_src = SIG_W_Clear;
                        this.state.sig_2e_src = SIG_E_Stop;
                    }
                    // East Bound Route
                    else {
                        this.state.sig_2w1_src = SIG_W_Stop;
                        this.state.sig_2w2_src = SIG_W_Stop;
                        this.state.sig_2e_src = SIG_E_Clear;
                    }
                }
            }
        }
    }

    set_switch_img = () => {
        if (this.state.sw_1) {
            this.state.sw_1_src = SW_D_E_R;
        }
        else {
            this.state.sw_1_src = SW_D_E;
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
        this.state.sig_2w2_src = SIG_W;
        this.state.sig_2w1_src = SIG_W;
        this.state.sig_2e_src = SIG_E;

        this.state.tail_w = Empty;
        this.state.tail_e = Empty;
        this.state.tail_yard = Empty;
    }
}
 
export default Hilburn;