import React, { Component } from 'react';
import '../css/mill.css';

// Import Images
// Switch Images
import CX_135 from '../../public/images/CX_135.png';
import CX_135_R from '../../public/images/CX_135_R.png';
import CX_225 from '../../public/images/CX_225.png';
import CX_225_R from '../../public/images/CX_225_R.png';
// Signal Images
import SIG_W from '../../public/images/SIG_W.png';
import SIG_E from '../../public/images/SIG_E.png';

class Mill extends Component {
    state = {
        sw_1: false,
        sw_3: false,
        sw_1_src: CX_225,
        sw_3_src: CX_135,
        sig_2w_src: SIG_W,
        sig_4w_src: SIG_W,
        sig_2e_src: SIG_E,
        sig_4e_src: SIG_E
    };

    render() { 
        return (  
            <div>
                {/* Tags */}
                <div className="mill_title">MILL</div>
                <div className="mill_milepost">MP 11.1</div>

                {/* East Side Tail Tracks */}
                <div className="mill_1_east" id="mill_1_east"></div>
                <div className="mill_2_east" id="mill_2_east"></div>

                {/* Switches */}
                <div className="mill_SW_3" onClick={this.click_SW_3} id="mill_SW_3"><img id="mill_SW_3_image" src={this.state.sw_3_src}/></div>
                <div className="mill_SW_1" onClick={this.click_SW_1} id="mill_SW_1"><img id="mill_SW_1_image" src={this.state.sw_1_src}/></div>

                {/* West Side Tail Tracks */}
                <div className="mill_1_west" id="mill_1_west"></div>
                <div className="mill_2_west" id="mill_2_west"></div>

                {/* Signals */}
                <div className="mill_sig_2e" id="mill_2e"><img id="mill_2e_image" src={this.state.sig_2e_src}/></div>
                <div className="mill_sig_4e" id="mill_4e"><img id="mill_4e_image" src={this.state.sig_4e_src}/></div>
                <div className="mill_sig_2w" id="mill_2w"><img id="mill_2w_image" src={this.state.sig_2w_src}/></div>
                <div className="mill_sig_4w" id="mill_4w"><img id="mill_4w_image" src={this.state.sig_4w_src}/></div>
            </div>
        );
    }

    click_SW_1 = () => {
        if (this.state.sw_1 === true) {
            this.setState({sw_1: false, sw_1_src: CX_225});
        }
        else {
            this.setState({sw_1: true, sw_1_src: CX_225_R});
        }
    }

    click_SW_3 = () => {
        if (this.state.sw_3) {
            this.setState({sw_3: false, sw_3_src: CX_135});
        }
        else {
            this.setState({sw_3: true, sw_3_src: CX_135_R});
        }
    }
}
 
export default Mill;