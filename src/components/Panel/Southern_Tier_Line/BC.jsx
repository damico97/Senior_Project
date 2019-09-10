import React, { Component } from 'react';
// Import CSS style sheet
import '../../../css/Southern_Tier_Line/bc.css';

// Import Images
// Switch Images
import SW_U_W from '../../../../public/images/SW_U_W_R.png';
// Signal Images
import SIG_W from '../../../../public/images/SIG_W.png';
import SIG_W_Clear from '../../../../public/images/SIG_W_Clear.png';
import SIG_W_Stop from '../../../../public/images/SIG_W_Stop.png';
import SIG_E from '../../../../public/images/SIG_E.png';
import SIG_E_Clear from '../../../../public/images/SIG_E_Clear.png';
import SIG_E_Stop from '../../../../public/images/SIG_E_Stop.png';

class BC extends Component {
    state = {  }
    render() { 
        return (  
            <div>
                <div className="bc_title">CP BC</div>
                <div className="bc_milepost">MP 86.7SR</div>

                <div className="bc_1_west"></div>
                <div className="bc_2_west"></div>

                <div className="bc_SW_1"><img src={SW_U_W}/></div>

                <div className="bc_east"></div>

                <div className="bc_sig_2e"><img src={SIG_E}/></div>
                <div className="bc_sig_4e"><img src={SIG_E}/></div>
                <div className="bc_sig_2w"><img src={SIG_W}/></div>
            </div>
        );
    }
}
 
export default BC;