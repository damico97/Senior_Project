import React, { Component } from 'react';
// Import CSS style sheet
import '../../../css/Southern_Tier_Line/ov.css';

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


class OV extends Component {
    state = {  }
    render() { 
        return (  
            <div>
                <div className="ov_title">CP OV</div>
                <div className="ov_milepost">MP 75.0SR</div>
                
                <div className="ov_west"></div>

                <div className="ov_SW_1"><img src={SW_U_E}/></div>

                <div className="ov_1_east"></div>
                <div className="ov_2_east"></div>

                <div className="ov_sig_2w"><img src={SIG_W}/></div>
                <div className="ov_sig_2ws"><img src={SIG_W}/></div>
                <div className="ov_sig_2e"><img src={SIG_E}/></div>
            </div>
        );
    }
}
 
export default OV;