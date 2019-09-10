import React, { Component } from 'react';
// Import CSS style sheet
import '../../../css/Main_Line/sf.css';

// Import Images
// Switch Images
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

const Empty = '#999999';
const Route = '#75fa4c';
const Occupied = '#eb3323';


class SF extends Component {
    state = {  
        sw_1: this.props.status.sw_1,
        sw_3: this.props.status.sw_3,
        sw_1_src: SW_D_W,
        sw_3_src: CX_225
    };

    componentWillReceiveProps(nextProps){
        this.setState({
            sw_1: nextProps.status.sw_1, 
            sw_3: nextProps.status.sw_3
        });
    }

    render() { 
        this.set_switch_img();

        return (  
            <div>
                <div className="sf_title">SF</div>
                <div className="sf_milepost">MP 30.5</div>

                <div className="sf_1_west"></div>
                <div className="sf_2_west"></div>
                <div className="sf_yard"></div>

                <div className="sf_SW_1" onClick={this.props.throw_sw_1}><img src={this.state.sw_1_src}/></div>
                <div className="sf_SW_3" onClick={this.props.throw_sw_3}><img src={this.state.sw_3_src}/></div>

                <div className="sf_1_center_west"></div>
                <div className="sf_2_center_west"></div>

                <div className="sf_sig_2e" onClick={this.props.click_sig_2e}><img src={SIG_E}/></div>
                <div className="sf_sig_4e-1" onClick={this.props.click_sig_4e_1}><img src={SIG_E}/></div>
                <div className="sf_sig_4e-2" onClick={this.props.click_sig_4e_2}><img src={SIG_E}/></div>
                <div className="sf_sig_2w" onClick={this.props.click_sig_2w}><img src={SIG_W}/></div>
                <div className="sf_sig_4w" onClick={this.props.click_sig_4w}><img src={SIG_W}/></div>
            </div>
        );
    }

    set_switch_img = () => {
        if (this.state.sw_1) {
            this.state.sw_1_src = SW_D_W_R;
        }
        else {
            this.state.sw_1_src = SW_D_W;
        }
        
        if (this.state.sw_3) {
            this.state.sw_3_src = CX_225_R;
        }
        else {
            this.state.sw_3_src = CX_225;
        }
    }
}
 
export default SF;