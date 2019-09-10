import React, { Component } from 'react';
// Import CSS style sheet
import '../../../css/Southern_Tier_Line/port.css';

// Import Images
// Switch Images
import SW_U_W from '../../../../public/images/SW_U_W.png';
// Signal Images
import SIG_W from '../../../../public/images/SIG_W.png';
import SIG_W_Clear from '../../../../public/images/SIG_W_Clear.png';
import SIG_W_Stop from '../../../../public/images/SIG_W_Stop.png';
import SIG_E from '../../../../public/images/SIG_E.png';
import SIG_E_Clear from '../../../../public/images/SIG_E_Clear.png';
import SIG_E_Stop from '../../../../public/images/SIG_E_Stop.png';


class Port extends Component {
    state = {  }
    render() { 
        return (  
            <div>
                <div className="port_title">CP PORT</div>
                <div className="port_milepost">MP 87.5SR</div>
                
                <div className="port_yard"></div>
                <div className="port_west"></div>

                <div className="port_SW_1"><img src={SW_U_W}/></div>

                <div className="port_east"></div>

                <div className="port_sig_2e-2"><img src={SIG_E}/></div>
                <div className="port_sig_2e-1"><img src={SIG_E}/></div>
                <div className="port_sig_2w"><img src={SIG_W}/></div>
            </div>
        );
    }
}
 
export default Port;