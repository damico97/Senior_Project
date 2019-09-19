import React, { Component } from 'react';
// Import CSS style sheet
import '../../../css/Bergen_County_Line/pascack_jct.css';

// Import Images
// Switch Images
import CX_135 from '../../../../public/images/CX_135.png';
import CX_135_Lined_Top from '../../../../public/images/CX_135_Lined_Top.png';
import CX_135_R from '../../../../public/images/CX_135_R.png';
import CX_225 from '../../../../public/images/CX_225.png';
import CX_225_Lined_Top from '../../../../public/images/CX_225_Lined_Top.png';
import CX_225_R from '../../../../public/images/CX_225_R.png';
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


class PascackJct extends Component {
    state = {  
        sw_1: this.props.status.sw_1,
        sw_3: this.props.status.sw_3,
        sw_1_src: CX_225,
        sw_3_src: CX_135,
    };

    componentWillReceiveProps(nextProps){
        this.setState({
            sw_1: nextProps.status.sw_1, 
            sw_3: nextProps.status.sw_3
        });
    }

    render() { 
        this.set_switch_images();

        return (  
            <div>
                <div className="pascack_title">PASCACK</div>
                <div className="pascack_milepost">MP 7.6</div>

                <div className="pascack_1_west"></div>
                <div className="pascack_2_west"></div>

                <div className="pascack_SW_1" onClick={this.props.throw_sw_1}><img src={this.state.sw_1_src}/></div>
                <div className="pascack_SW_3" onClick={this.props.throw_sw_3}><img src={this.state.sw_3_src}/></div>

                <div className="pascack_1_east"></div>
                <div className="pascack_2_east"></div>

                <div className="pascack_sig_2w" onClick={this.props.click_sig_2w}><img src={SIG_W}/></div>
                <div className="pascack_sig_4w" onClick={this.props.click_sig_4w}><img src={SIG_W}/></div>

                <div className="pascack_sig_2e" onClick={this.props.click_sig_2e}><img src={SIG_E}/></div>
                <div className="pascack_sig_4e" onClick={this.props.click_sig_4e}><img src={SIG_E}/></div>
            </div>
        );
    }

    set_switch_images() {
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
}
 
export default PascackJct;