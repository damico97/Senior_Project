import React, { Component } from 'react';
// Import CSS style sheet
import '../../../css/Southern_Tier_Line/pa.css';

// Import Images
// Switch Images
import SW_U_E from '../../../../public/images/SW_U_E.png';
import SW_U_E_R from '../../../../public/images/SW_U_E_R.png';
import CX_225 from '../../../../public/images/CX_225.png';
import CX_225_R from '../../../../public/images/CX_225_R.png';

// Signal Images
import SIG_W from '../../../../public/images/SIG_W.png';
import SIG_W_Clear from '../../../../public/images/SIG_W_Clear.png';
import SIG_W_Stop from '../../../../public/images/SIG_W_Stop.png';
import SIG_E from '../../../../public/images/SIG_E.png';
import SIG_E_Clear from '../../../../public/images/SIG_E_Clear.png';
import SIG_E_Stop from '../../../../public/images/SIG_E_Stop.png';


class PA extends Component {
    state = {  
        sw_1: this.props.status.sw_1,
        sw_3: this.props.status.sw_3,
        sw_5: this.props.status.sw_5,
        sw_1_src: SW_U_E,
        sw_3_src: CX_225,
        sw_5_src: CX_225
    };

    componentWillReceiveProps(nextProps){
        this.setState({
            sw_1: nextProps.status.sw_1,
            sw_3: nextProps.status.sw_3,
            sw_5: nextProps.status.sw_5
        });
    }

    render() { 
        this.set_switch_img();

        return (  
            <div>
                <div className="pa_title">CP PA</div>
                <div className="pa_milepost">MP 87.9SR</div>
                <div className="pa_1_west"></div>
                <div className="pa_2_west"></div>
                <div className="pa_buckleys_west"></div>

                <div className="pa_SW_5" onClick={this.props.throw_sw_5}><img src={this.state.sw_5_src}/></div>
                <div className="pa_SW_3" onClick={this.props.throw_sw_3}><img src={this.state.sw_3_src}/></div>
                <div className="pa_SW_1" onClick={this.props.throw_sw_1}><img src={this.state.sw_1_src}/></div>

                <div className="pa_yard"></div>
                <div className="pa_1_east"></div>
                <div className="pa_2_east"></div>
                <div className="pa_buckleys_east"></div>

                <div className="pa_sig_2w-2" onClick={this.props.click_sig_2w_2}><img src={SIG_W}/></div>
                <div className="pa_sig_2w-1" onClick={this.props.click_sig_2w_1}><img src={SIG_W}/></div>
                <div className="pa_sig_4w" onClick={this.props.click_sig_4w}><img src={SIG_W}/></div>
                <div className="pa_sig_6w" onClick={this.props.click_sig_6w}><img src={SIG_W}/></div>

                <div className="pa_sig_2e" onClick={this.props.click_sig_2e}><img src={SIG_E}/></div>
                <div className="pa_sig_4e" onClick={this.props.click_sig_4e}><img src={SIG_E}/></div>
                <div className="pa_sig_6e" onClick={this.props.click_sig_6e}><img src={SIG_E}/></div>
            </div>
        );
    }

    set_switch_img() {
        if (this.state.sw_1) {
            this.state.sw_1_src = SW_U_E_R;
        }
        else {
            this.state.sw_1_src = SW_U_E;
        }

        if (this.state.sw_3) {
            this.state.sw_3_src = CX_225_R;
        }
        else {
            this.state.sw_3_src = CX_225;
        }

        if (this.state.sw_5) {
            this.state.sw_5_src = CX_225_R;
        }
        else {
            this.state.sw_5_src = CX_225;
        }
    }
}
 
export default PA;