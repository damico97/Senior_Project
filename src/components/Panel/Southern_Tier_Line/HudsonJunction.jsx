import React, { Component } from 'react';
// Import CSS style sheet
import '../../../css/Southern_Tier_Line/hudsonJunction.css';

// Import Images
// Switch Images
import SW_D_E from '../../../../public/images/SW_D_E.png';
import SW_D_E_R from '../../../../public/images/SW_D_E_R.png';
import SW_U_W from '../../../../public/images/SW_U_W.png';
import SW_U_W_R from '../../../../public/images/SW_U_W_R.png';
// Signal Images
import SIG_W from '../../../../public/images/SIG_W.png';
import SIG_W_Clear from '../../../../public/images/SIG_W_Clear.png';
import SIG_W_Stop from '../../../../public/images/SIG_W_Stop.png';
import SIG_E from '../../../../public/images/SIG_E.png';
import SIG_E_Clear from '../../../../public/images/SIG_E_Clear.png';
import SIG_E_Stop from '../../../../public/images/SIG_E_Stop.png';

class HudsonJunction extends Component {
    state = {  
        sw_1: this.props.status.sw_1,
        sw_3: this.props.status.sw_3,
        sw_1_src: SW_U_W,
        sw_3_src: SW_D_E
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
                <div className="hudson_title">CP HUDSON JUNCTION</div>
                <div className="hudson_milepost">MP 63.4JS</div>
                <div className="hudson_2_west"></div>
                <div className="hudson_1_west"></div>

                <div className="hudson_SW_3" onClick={this.props.throw_sw_3}><img src={this.state.sw_3_src}/></div>
                <div className="hudson_SW_1" onClick={this.props.throw_sw_1}><img src={this.state.sw_1_src}/></div>

                <div className="hudson_east"></div>
                <div className="hudson_nysw"></div>

                <div className="hudson_sig_2es" onClick={this.props.click_sig_2es}><img src={SIG_E}/></div>
                <div className="hudson_sig_2e" onClick={this.props.click_sig_2e}><img src={SIG_E}/></div>

                <div className="hudson_sig_2w" onClick={this.props.click_sig_2w}><img src={SIG_W}/></div>
                <div className="hudson_sig_2ws" onClick={this.props.click_sig_2ws}><img src={SIG_W}/></div>
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

        if (this.state.sw_3) {
            this.state.sw_3_src = SW_D_E_R;
        }
        else {
            this.state.sw_3_src = SW_D_E;
        }
    }
}
 
export default HudsonJunction;