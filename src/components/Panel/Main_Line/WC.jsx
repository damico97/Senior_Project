import React, { Component } from 'react';
// Import CSS style sheet
import '../../../css/Main_Line/wc.css';

// Import Images
// Switch Images
import CX_135 from '../../../../public/images/CX_135.png';
import CX_135_Lined_Top from '../../../../public/images/CX_135_Lined_Top.png';
import CX_135_Lined_Bottom from '../../../../public/images/CX_135_Lined_Bottom.png';
import CX_135_Lined_Both from '../../../../public/images/CX_135_Lined_Both.png';
import CX_135_R from '../../../../public/images/CX_135_R.png';
import CX_135_R_Lined from '../../../../public/images/CX_135_R_Lined.png';
import CX_135_Lined_Top_Occupied_Bottom from '../../../../public/images/CX_135_Lined_Top_Occupied_Bottom.png';
import CX_135_Occupied_Top_Lined_Bottom from '../../../../public/images/CX_135_Occupied_Top_Lined_Bottom.png';
import CX_135_Occupied_Top from '../../../../public/images/CX_135_Occupied_Top.png';
import CX_135_Occupied_Bottom from '../../../../public/images/CX_135_Occupied_Bottom.png';
import CX_135_Occupied_Both from '../../../../public/images/CX_135_Occupied_Both.png';
import CX_135_R_Occupied from '../../../../public/images/CX_135_R_Occupied.png';

import CX_225 from '../../../../public/images/CX_225.png';
import CX_225_Lined_Top from '../../../../public/images/CX_225_Lined_Top.png';
import CX_225_Lined_Bottom from '../../../../public/images/CX_225_Lined_Bottom.png';
import CX_225_Lined_Both from '../../../../public/images/CX_225_Lined_Both.png';
import CX_225_R from '../../../../public/images/CX_225_R.png';
import CX_225_R_Lined from '../../../../public/images/CX_225_R_Lined.png';
import CX_225_Lined_Top_Occupied_Bottom from '../../../../public/images/CX_225_Lined_Top_Occupied_Bottom.png';
import CX_225_Occupied_Top_Lined_Bottom from '../../../../public/images/CX_225_Occupied_Top_Lined_Bottom.png';
import CX_225_Occupied_Top from '../../../../public/images/CX_225_Occupied_Top.png';
import CX_225_Occupied_Bottom from '../../../../public/images/CX_225_Occupied_Bottom.png';
import CX_225_Occupied_Both from '../../../../public/images/CX_225_Occupied_Both.png';
import CX_225_R_Occupied from '../../../../public/images/CX_225_R_Occupied.png';

import SW_U_E from '../../../../public/images/SW_U_E.png';
import SW_U_E_Lined from '../../../../public/images/SW_U_E_Lined.png';
import SW_U_E_Occupied from '../../../../public/images/SW_U_E_Occupied.png';
import SW_U_E_R from '../../../../public/images/SW_U_E_R.png';
import SW_U_E_R_Lined from '../../../../public/images/SW_U_E_R_Lined.png';
import SW_U_E_R_Occupied from '../../../../public/images/SW_U_E_R_Occupied.png';

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
const Route = '#75fa4c';
const Occupied = '#eb3323';


class WC extends Component {
    state = {  
        sw_1: this.props.status.sw_1,
        sw_3: this.props.status.sw_3,
        sw_5: this.props.status.sw_5,
        sw_7: this.props.status.sw_7,
        sw_1_src: CX_225,
        sw_3_src: SW_U_W,
        sw_5_src: CX_135,
        sw_7_src: SW_U_E
    };

    componentWillReceiveProps(nextProps){
        this.setState({
            sw_1: nextProps.status.sw_1, 
            sw_3: nextProps.status.sw_3,
            sw_5: nextProps.status.sw_5,
            sw_7: nextProps.status.sw_7
        });
    }

    render() { 
        this.set_switch_img();

        return (  
            <div>
                <div className="wc_title">WC</div>
                <div className="wc_milepost">MP 23.6</div>
                <div className="wc_1_west"></div>
                <div className="wc_2_west"></div>
                <div className="wc_yard"></div>

                <div className="wc_SW_1" onClick={this.props.throw_sw_1}><img src={this.state.sw_1_src}/></div>
                <div className="wc_SW_3" onClick={this.props.throw_sw_3}><img src={this.state.sw_3_src}/></div>
                <div className="wc_SW_5" onClick={this.props.throw_sw_5}><img src={this.state.sw_5_src}/></div>
                <div className="wc_SW_7" onClick={this.props.throw_sw_7}><img src={this.state.sw_7_src}/></div>

                <div className="wc_2_center"></div>

                <div className="wc_3_east"></div>
                <div className="wc_1_east"></div>
                <div className="wc_2_east"></div>

                <div className="wc_sig_2e-2" onClick={this.props.click_sig_2e_2}><img src={SIG_E}/></div>
                <div className="wc_sig_2e-1" onClick={this.props.click_sig_2e_1}><img src={SIG_E}/></div>
                <div className="wc_sig_4e" onClick={this.props.click_sig_4e}><img src={SIG_E}/></div>

                <div className="wc_sig_2w-2" onClick={this.props.click_sig_2w_2}><img src={SIG_W}/></div>
                <div className="wc_sig_2w-1" onClick={this.props.click_sig_2w_1}><img src={SIG_W}/></div>
                <div className="wc_sig_4w" onClick={this.props.click_sig_4w}><img src={SIG_W}/></div>
            </div>
        );
    }

    set_switch_img = () => {
        if (this.state.sw_1) {
            this.state.sw_1_src = CX_225_R;
        }
        else {
            this.state.sw_1_src = CX_225;
        }
        
        if (this.state.sw_3) {
            this.state.sw_3_src = SW_U_W_R;
        }
        else {
            this.state.sw_3_src = SW_U_W;
        }

        if (this.state.sw_5) {
            this.state.sw_5_src = CX_135_R;
        }
        else {
            this.state.sw_5_src = CX_135;
        }
        
        if (this.state.sw_7) {
            this.state.sw_7_src = SW_U_E_R;
        }
        else {
            this.state.sw_7_src = SW_U_E;
        }
    }
}
 
export default WC;