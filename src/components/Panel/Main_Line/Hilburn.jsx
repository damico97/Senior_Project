import React, { Component } from 'react';
// Import CSS style sheet
import '../../../css/Main_Line/hilburn.css';

// Import Images
// Switch Images
import SW_D_E from '../../../../public/images/SW_D_E.png';
import SW_D_E_Lined from '../../../../public/images/SW_D_E_Lined.png';
import SW_D_E_Occupied from '../../../../public/images/SW_D_E_Occupied.png'
import SW_D_E_R from '../../../../public/images/SW_D_E_R.png';
import SW_D_E_R_Lined from '../../../../public/images/SW_D_E_R_Lined.png';
import SW_D_E_R_Occupied from '../../../../public/images/SW_D_E_R_Occupied.png';

// Signal Images
import SIG_W from '../../../../public/images/SIG_W.png';
import SIG_W_Clear from '../../../../public/images/SIG_W_Clear.png';
import SIG_W_Stop from '../../../../public/images/SIG_W_Stop.png';
import SIG_E from '../../../../public/images/SIG_E.png';
import SIG_E_Clear from '../../../../public/images/SIG_E_Clear.png';
import SIG_E_Stop from '../../../../public/images/SIG_E_Stop.png';


class Hilburn extends Component {
    state = {  
        sw_1: this.props.status.sw_1,
        sw_1_src: SW_D_E
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
                <div className="hilburn_title">HILBURN</div>
                <div className="hilburn_milepost">MP 32.3</div>

                <div className="hilburn_west"></div>

                <div className="hilburn_SW_1" onClick={this.props.throw_sw_1}><img src={this.state.sw_1_src}/></div>

                <div className="hilburn_east"></div>
                <div className="hilburn_yard"></div>

                <div className="hilburn_sig_2w-1" onClick={this.props.click_sig_2w_1}><img src={SIG_W}/></div>
                <div className="hilburn_sig_2w-2" onClick={this.props.click_sig_2w_2}><img src={SIG_W}/></div>
                <div className="hilburn_sig_2e" onClick={this.props.click_sig_2e}><img src={SIG_E}/></div>
            </div>
        );
    }

    set_switch_img = () => {
        if (this.state.sw_1) {
            this.state.sw_1_src = SW_D_E_R;
        }
        else {
            this.state.sw_1_src = SW_D_E;
        }
    }
}
 
export default Hilburn;