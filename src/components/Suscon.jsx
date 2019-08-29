import React, { Component } from 'react';
// Import CSS style sheet
import '../css/suscon.css';

// Import Images
// Switch Images
import CX_135 from '../../public/images/CX_135.png';
import CX_135_Lined_Top from '../../public/images/CX_135_Lined_Top.png';
import CX_135_R from '../../public/images/CX_135_R.png';
import CX_225 from '../../public/images/CX_225.png';
import CX_225_Lined_Top from '../../public/images/CX_225_Lined_Top.png';
import CX_225_R from '../../public/images/CX_225_R.png';
// Signal Images
import SIG_W from '../../public/images/SIG_W.png';
import SIG_W_Clear from '../../public/images/SIG_W_Clear.png';
import SIG_W_Stop from '../../public/images/SIG_W_Stop.png';
import SIG_E from '../../public/images/SIG_E.png';
import SIG_E_Clear from '../../public/images/SIG_E_Clear.png';
import SIG_E_Stop from '../../public/images/SIG_E_Stop.png';

const Empty = '#999999';
const Route = '#75fa4c';
const Occupied = '#eb3323';


const interlocking_name = 'Suscon';

class Suscon extends Component {
    state = {
        sw_1: this.props.status.sw_1,
        sw_3: this.props.status.sw_3,
        sw_1_src: CX_225,
        sw_3_src: CX_135,
        sig_2w_src: SIG_W,
        sig_4w_src: SIG_W,
        sig_2e_src: SIG_E,
        sig_4e_src: SIG_E,
        tail_1_e: Empty,
        tail_1_w: Empty,
        tail_2_e: Empty,
        tail_2_w: Empty,
        route: "W_1_1"
    };

    componentWillReceiveProps(nextProps){
        this.setState({sw_1: nextProps.status.sw_1, sw_3: nextProps.status.sw_3});
    }

    render() { 
        this.set_switch_img();
        this.set_route_drawing();
        return (
            <div>
                {/* Tags */}
                <div className="suscon_title">SUSCON</div>
                <div className="suscon_milepost">MP 17.5</div>

                {/* West Side Tracks */}
                <div className="suscon_1_west" id="suscon_1_east" style={{background: this.state.tail_1_e}}></div>
                <div className="suscon_2_west" id="suscon_2_east" style={{background: this.state.tail_2_e}}></div>

                {/* Switches */}
                <div className="suscon_SW_3" onClick={this.props.throw_sw_3} id="suscon_SW_3"><img id="suscon_SW_3_image" src={this.state.sw_3_src}/></div>
                <div className="suscon_SW_1" onClick={this.props.throw_sw_1} id="suscon_SW_1"><img id="suscon_SW_1_image"src={this.state.sw_1_src}/></div>

                {/* East Side Tracks */}
                <div className="suscon_1_east" id="suscon_1_west" style={{background: this.state.tail_1_w}}></div>
                <div className="suscon_2_east" id="suscon_2_west" style={{background: this.state.tail_2_w}}></div>

                {/* Signals */}
                <div className="suscon_sig_2w" onClick={() => this.click_SIG("2W")} id="suscon_2w"><img id="suscon_2w_image" src={this.state.sig_2w_src}/></div>
                <div className="suscon_sig_4w" onClick={() => this.click_SIG("4W")} id="suscon_4w"><img id="suscon_4w_image" src={this.state.sig_4w_src}/></div>
                <div className="suscon_sig_2e" onClick={() => this.click_SIG("2E")} id="suscon_2e"><img id="suscon_2e_image" src={this.state.sig_2e_src}/></div>
                <div className="suscon_sig_4e" onClick={() => this.click_SIG("4E")} id="suscon_4e"><img id="suscon_4e_image" src={this.state.sig_4e_src}/></div>
            </div>
        );
    }

    set_route_drawing = () => {
        if (this.state.route === null) {
            return;
        }
        else if (this.state.route === "W_1_1") {
            this.state.sw_3_src = CX_135_Lined_Top;
            this.state.sw_1_src = CX_225_Lined_Top;
            this.state.tail_1_e = Route;
            this.state.tail_1_w = Route;
            this.state.sig_2e_src = SIG_E_Stop;
            this.state.sig_2w_src = SIG_W_Clear;
        }
        else {

        }
    }

    set_switch_img = () => {
        if (this.state.sw_1) {
            this.state.sw_1_src = CX_225_R;
        }
        else {
            this.state.sw_1_src = CX_225;
        }
        
        if (this.state.sw_3) {
            this.state.sw_3_src = CX_135_R;
        }
        else {
            this.state.sw_3_src = CX_135;
        }
    }

    click_SIG = (sig_number) => {
        console.log("Signal Clicked " + sig_number);
    }
}
 
export default Suscon;