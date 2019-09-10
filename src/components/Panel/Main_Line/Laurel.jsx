import React, { Component } from 'react';
import '../../../css/Main_Line/laurel.css';

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

// Signal Images
import SIG_W from '../../../../public/images/SIG_W.png';
import SIG_W_Clear from '../../../../public/images/SIG_W_Clear.png';
import SIG_W_Stop from '../../../../public/images/SIG_W_Stop.png';
import SIG_E from '../../../../public/images/SIG_E.png';
import SIG_E_Clear from '../../../../public/images/SIG_E_Clear.png';
import SIG_E_Stop from '../../../../public/images/SIG_E_Stop.png';

const Empty = '#999999';
const Lined = '#75fa4c';
const Occupied = '#eb3323';


class Laurel extends Component {
    state = {  
        sw_1: this.props.status.sw_1,
        sw_3: this.props.status.sw_3,
        sw_7: this.props.status.sw_7,
        sw_9: this.props.status.sw_9,
        sw_11: this.props.status.sw_11,
        sw_13: this.props.status.sw_13,
        sw_1_src: CX_135,
        sw_3_src: CX_135,
        sw_7_src: CX_225,
        sw_11_src: CX_225,
        sw_13_src: CX_135
    };

    componentWillReceiveProps(nextProps){
        this.setState({
            sw_1: nextProps.status.sw_1, 
            sw_3: nextProps.status.sw_3,
            sw_7: nextProps.status.sw_7,
            sw_11: nextProps.status.sw_11,
            sw_13: nextProps.status.sw_13
        });
    }

    render() { 
        this.set_switch_img();

        return (  
            <div>
                <div className="laurel_title">LAUREL</div>
                <div className="laurel_milepost">MP 4.3</div>

                <div className="b_laurel_3_west"></div>
                <div className="b_laurel_2_west"></div>
                <div className="m_laurel_2_west"></div>
                <div className="m_laurel_4_west"></div>

                <div className="laurel_SW_1" onClick={this.props.throw_sw_1}><img src={this.state.sw_1_src}/></div>
                <div className="laurel_SW_3" onClick={this.props.throw_sw_3}><img src={this.state.sw_3_src}/></div>
                <div className="laurel_SW_7" onClick={this.props.throw_sw_7}><img src={this.state.sw_7_src}/></div>
                <div className="laurel_SW_11" onClick={this.props.throw_sw_11}><img src={this.state.sw_11_src}/></div>
                <div className="laurel_SW_13" onClick={this.props.throw_sw_13}><img src={this.state.sw_13_src}/></div>

                <div className="m_laurel_3_center"></div>

                <div className="m_laurel_1_east"></div>
                <div className="m_laurel_2_east"></div>
                <div className="m_laurel_3_east"></div>
                <div className="m_laurel_4_east"></div>

                <div className="laurel_sig_10w" onClick={this.props.click_sig_10w}><img src={SIG_W}/></div>
                <div className="laurel_sig_2w" onClick={this.props.click_sig_2w}><img src={SIG_W}/></div>
                <div className="laurel_sig_4w" onClick={this.props.click_sig_4w}><img src={SIG_W}/></div>
                <div className="laurel_sig_8w" onClick={this.props.click_sig_8w}><img src={SIG_W}/></div>

                <div className="laurel_sig_4e" onClick={this.props.click_sig_4e}><img src={SIG_E}/></div>
                <div className="laurel_sig_6e" onClick={this.props.click_sig_6e}><img src={SIG_E}/></div>
                <div className="laurel_sig_8e" onClick={this.props.click_sig_8e}><img src={SIG_E}/></div>
                <div className="laurel_sig_12e" onClick={this.props.click_sig_12e}><img src={SIG_E}/></div>
            </div>
        );
    }

    set_switch_img = () => {
        if (this.state.sw_1) {
            this.state.sw_1_src = CX_135_R;
        }
        else {
            this.state.sw_1_src = CX_135;
        }
        
        if (this.state.sw_3) {
            this.state.sw_3_src = CX_135_R;
        }
        else {
            this.state.sw_3_src = CX_135;
        }

        if (this.state.sw_7) {
            this.state.sw_7_src = CX_225_R;
        }
        else {
            this.state.sw_7_src = CX_225;
        }

        if (this.state.sw_9) {
            this.state.sw_9_src = CX_135_R;
        }
        else {
            this.state.sw_9_src = CX_135;
        }

        if (this.state.sw_11) {
            this.state.sw_11_src = CX_225_R;
        }
        else {
            this.state.sw_11_src = CX_225;
        }

        if (this.state.sw_13) {
            this.state.sw_13_src = CX_135_R;
        }
        else {
            this.state.sw_13_src = CX_135;
        }
    }
}
 
export default Laurel;