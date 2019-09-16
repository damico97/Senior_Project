import React, { Component } from 'react';
// Import CSS style sheet
import '../../../css/Southern_Tier_Line/hall.css';

// Import Images
// Switch Images
import CX_225 from '../../../../public/images/CX_225.png';
import CX_225_R from '../../../../public/images/CX_225_R.png';
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


class Hall extends Component {
    state = {  
        sw_1: this.props.status.sw_1,
        sw_1_src: CX_225
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
                <div className="hall_title">CP HALL</div>
                <div className="hall_milepost">MP 64.7JS</div>
                
                <div className="hall_yard"></div>
                <div className="hall_west"></div>

                <div className="hall_SW_1" onClick={this.props.throw_sw_1}><img src={this.state.sw_1_src}/></div>

                <div className="hall_2_east"></div>
                <div className="hall_1_east"></div>

                <div className="hall_sig_4w" onClick={this.props.click_sig_4w}><img src={SIG_W}/></div>
                <div className="hall_sig_2w" onClick={this.props.click_sig_2w}><img src={SIG_W}/></div>

                <div className="hall_sig_4e" onClick={this.props.click_sig_4e}><img src={SIG_E}/></div>
                <div className="hall_sig_2e" onClick={this.props.click_sig_2e}><img src={SIG_E}/></div>
            </div>
        );
    }

    set_switch_img() {
        if (this.state.sw_1) {
            this.state.sw_1_src = CX_225_R;
        }
        else {
            this.state.sw_1_src = CX_225;
        }
    }
}
 
export default Hall;