import React, { Component } from 'react';
// Import CSS style sheet
import '../css/suscon.css';

// Import Images
import CX_135 from '../../public/images/CX_135.png';
import CX_135_R from '../../public/images/CX_135_R.png';
import CX_225 from '../../public/images/CX_225.png';
import CX_225_R from '../../public/images/CX_225_R.png';

class Suscon extends Component {
    state = {
        sw_1: false,
        sw_3: false,
        sw_1_src: CX_135,
        sw_3_src: CX_225
    };

    /*
    constructor() {
        super();
        this.click_SW_1 = this.click_SW_1.bind(this);
    }
    */

    render() { 
        return (
            <div>
                {/* Tags */}
                <div className="suscon_title">SUSCON</div>
                <div className="suscon_milepost">MP 17.5</div>

                {/* West Side Tracks */}
                <div className="suscon_1_west" id="suscon_1_east"></div>
                <div className="suscon_2_west" id="suscon_2_east"></div>

                {/* Switches */}
                <div className="suscon_SW_1" onClick={this.click_SW_1} id="suscon_SW_1"><img id="suscon_SW_1_image" src={this.state.sw_1_src}/></div>
                <div className="suscon_SW_2" onClick={this.click_SW_3} id="suscon_SW_3"><img id="suscon_SW_3_image"src={this.state.sw_3_src}/></div>

                {/* East Side Tracks */}
                <div className="suscon_1_east" id="suscon_1_west"></div>
                <div className="suscon_2_east" id="suscon_2_west"></div>

                {/* Signals */}
                <div className="suscon_sig_2w" id="suscon_2w"><img id="suscon_2w_image" src={require('../../public/images/SIG_W.png')}/></div>
                <div className="suscon_sig_4w" id="suscon_4w"><img id="suscon_4w_image" src={require('../../public/images/SIG_W.png')}/></div>
                <div className="suscon_sig_2e" id="suscon_2e"><img id="suscon_2e_image" src={require('../../public/images/SIG_E.png')}/></div>
                <div className="suscon_sig_4e" id="suscon_4e"><img id="suscon_4e_image" src={require('../../public/images/SIG_E.png')}/></div>
            </div>
        );
    }

    click_SW_1 = () => {

        if (this.state.sw_1 === true) {
            this.state.sw_1_src = CX_135;
            this.state.sw_1 = false;
        }
        else {
            this.state.sw_1_src = CX_135_R;
            this.state.sw_1 = true;
        }
        this.forceUpdate();
    }

    click_SW_3 = () => {
        if (this.state.sw_3) {
            this.state.sw_3_src = CX_225;
            this.state.sw_3 = false;
        }
        else {
            this.state.sw_3_src = CX_225_R;
            this.state.sw_3 = true;
        }
        this.forceUpdate();
    }
}
 
export default Suscon;