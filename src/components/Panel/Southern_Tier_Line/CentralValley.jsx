import React, { Component } from 'react';
// Import CSS style sheet
import '../../../css/Southern_Tier_Line/centralValley.css';

// Import Images
// Switch Images
import SW_U_E from '../../../../public/images/SW_U_E.png';
// Signal Images
import SIG_W from '../../../../public/images/SIG_W.png';
import SIG_W_Clear from '../../../../public/images/SIG_W_Clear.png';
import SIG_W_Stop from '../../../../public/images/SIG_W_Stop.png';
import SIG_E from '../../../../public/images/SIG_E.png';
import SIG_E_Clear from '../../../../public/images/SIG_E_Clear.png';
import SIG_E_Stop from '../../../../public/images/SIG_E_Stop.png';


class CentralValley extends Component {
    state = {  }
    render() { 
        return (  
            <div>
                <div className="valley_title">CP CENTRAL VALLEY</div>
                <div className="valley_milepost">MP 47.8JS</div>
                
                <div className="valley_west"></div>

                <div className="valley_SW_21"><img src={SW_U_E}/></div>

                <div className="valley_2_east"></div>
                <div className="valley_1_east"></div>

                <div className="valley_sig_2w"><img src={SIG_W}/></div>
                <div className="valley_sig_1w"><img src={SIG_W}/></div>

                <div className="valley_sig_1e"><img src={SIG_E}/></div>
            </div>
        );
    }
}
 
export default CentralValley;