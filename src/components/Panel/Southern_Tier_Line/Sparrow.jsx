import React, { Component } from 'react';
// Import CSS style sheet
import '../../../css/Southern_Tier_Line/sparrow.css';

// Import Images
// Switch Images
import SW_U_E from '../../../../public/images/SW_U_E.png';
import SW_U_E_R from '../../../../public/images/SW_U_E_R.png';
import SW_D_E from '../../../../public/images/SW_D_E.png';
import SW_D_E_R from '../../../../public/images/SW_D_E_R.png';
// Signal Images
import SIG_W from '../../../../public/images/SIG_W.png';
import SIG_W_Clear from '../../../../public/images/SIG_W_Clear.png';
import SIG_W_Stop from '../../../../public/images/SIG_W_Stop.png';
import SIG_E from '../../../../public/images/SIG_E.png';
import SIG_E_Clear from '../../../../public/images/SIG_E_Clear.png';
import SIG_E_Stop from '../../../../public/images/SIG_E_Stop.png';

class Sparrow extends Component {
    state = {  
        sw_1: this.props.status.sw_1,
        sw_3: this.props.status.sw_3,
        sw_1_src: SW_U_E,
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
                <div className="sparrow_title">CP SPARROW</div>
                <div className="sparrow_milepost">MP 89.9SR</div>
                
                <div className="sparrow_west"></div>

                <div className="sparrow_SW_3" onClick={this.props.throw_sw_3}><img src={this.state.sw_3_src}/></div>
                <div className="sparrow_SW_1" onClick={this.props.throw_sw_1}><img src={this.state.sw_1_src}/></div>

                <div className="sparrow_cripple"></div>
                <div className="sparrow_1_east"></div>
                <div className="sparrow_2_east"></div>

                <div className="sparrow_sig_2w-2" onClick={this.props.click_sig_2w_2}><img src={SIG_W}/></div>
                <div className="sparrow_sig_2w-1" onClick={this.props.click_sig_2w_1}><img src={SIG_W}/></div>
                <div className="sparrow_sig_2w-3" onClick={this.props.click_sig_2w_3}><img src={SIG_W}/></div>
                <div className="sparrow_sig_2e" onClick={this.props.click_sig_2e}><img src={SIG_E}/></div>
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
            this.state.sw_3_src = SW_D_E_R;
        }
        else {
            this.state.sw_3_src = SW_D_E;
        }
    }
}
 
export default Sparrow;