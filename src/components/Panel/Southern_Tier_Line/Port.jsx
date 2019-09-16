import React, { Component } from 'react';
// Import CSS style sheet
import '../../../css/Southern_Tier_Line/port.css';

// Import Images
// Switch Images
import SW_U_W from '../../../../public/images/SW_U_W.png';
import SW_U_W_R from '../../../../public/images/SW_U_W_R.png';
// Signal Images
import SIG_W from '../../../../public/images/SIG_W.png';
import SIG_W_Clear from '../../../../public/images/SIG_W_Clear.png';
import SIG_W_Stop from '../../../../public/images/SIG_W_Stop.png';
import SIG_E from '../../../../public/images/SIG_E.png';
import SIG_E_Clear from '../../../../public/images/SIG_E_Clear.png';
import SIG_E_Stop from '../../../../public/images/SIG_E_Stop.png';


class Port extends Component {
    state = {  
        sw_1: this.props.status.sw_1,
        sw_1_src: SW_U_W
    };

    componentWillReceiveProps(nextProps){
        this.setState({
            sw_1: nextProps.status.sw_1
        });
    }

    render() { 
        this.set_switch_img();

        return (  
            <div>
                <div className="port_title">CP PORT</div>
                <div className="port_milepost">MP 87.5SR</div>
                
                <div className="port_yard"></div>
                <div className="port_west"></div>

                <div className="port_SW_1" onClick={this.props.throw_sw_1}><img src={this.state.sw_1_src}/></div>

                <div className="port_east"></div>

                <div className="port_sig_2e-2" onClick={this.props.click_sig_2e_2}><img src={SIG_E}/></div>
                <div className="port_sig_2e-1" onClick={this.props.click_sig_2e_1}><img src={SIG_E}/></div>
                <div className="port_sig_2w" onClick={this.props.click_sig_2w}><img src={SIG_W}/></div>
            </div>
        );
    }

    set_switch_img() {
        if (this.state.sw_1) {
            this.state.sw_1_src = SW_U_W_R;
        }
        else {
            this.state.sw_1_src = SW_U_W;
        }
    }
}
 
export default Port;