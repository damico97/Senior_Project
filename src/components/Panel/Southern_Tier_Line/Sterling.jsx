import React, { Component } from 'react';
// Import CSS style sheet
import '../../../css/Southern_Tier_Line/sterling.css';

// Import Images
// Switch Images
import SW_U_E from '../../../../public/images/SW_U_E.png';
import SW_D_W from '../../../../public/images/SW_D_W.png';
// Signal Images
import SIG_W from '../../../../public/images/SIG_W.png';
import SIG_W_Clear from '../../../../public/images/SIG_W_Clear.png';
import SIG_W_Stop from '../../../../public/images/SIG_W_Stop.png';
import SIG_E from '../../../../public/images/SIG_E.png';
import SIG_E_Clear from '../../../../public/images/SIG_E_Clear.png';
import SIG_E_Stop from '../../../../public/images/SIG_E_Stop.png';


class Sterling extends Component {
    state = {  }
    render() { 
        return (  
            <div>
                <div className="sterling_title">CP STERLING</div>
                <div className="sterling_milepost">MP 34.5JS</div>
                
                <div className="sterling_west"></div>

                <div className="sterling_SW_21"><img src={SW_U_E}/></div>

                <div className="sterling_1_east"></div>
                <div className="sterling_2_east"></div>

                <div className="sterling_sig_2ws"><img src={SIG_W}/></div>
                <div className="sterling_sig_2w"><img src={SIG_W}/></div>
                <div className="sterling_sig_1e"><img src={SIG_E}/></div>
            </div>
        );
    }
}
 
export default Sterling;