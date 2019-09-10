import React, { Component } from 'react';
// Import CSS style sheet
import '../../../css/Southern_Tier_Line/harriman.css';

// Import Images
// Switch Images
import SW_U_W from '../../../../public/images/SW_U_W.png';
import SW_D_W from '../../../../public/images/SW_D_W.png';
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


class Harriman extends Component {
    state = {  }
    render() { 
        return (  
            <div>
                <div className="harriman_title">CP HARRIMAN</div>
                <div className="harriman_milepost">MP 45.0JS</div>

                <div className="harriman_1_west"></div>
                <div className="harriman_2_west"></div>
                <div className="harriman_industrial"></div>

                <div className="harriman_SW_21"><img src={SW_U_W}/></div>
                <div className="harriman_SW_32"><img src={SW_D_W}/></div>

                <div className="harriman_1_east"></div>

                <div className="harriman_sig_2e"><img src={SIG_E}/></div>
                <div className="harriman_sig_1e"><img src={SIG_E}/></div>
                <div className="harriman_sig_3e"><img src={SIG_E}/></div>

                <div className="harriman_sig_1w"><img src={SIG_W}/></div>
            </div>
        );
    }
}
 
export default Harriman;