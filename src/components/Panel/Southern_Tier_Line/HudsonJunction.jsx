import React, { Component } from 'react';
// Import CSS style sheet
import '../../../css/Southern_Tier_Line/hudsonJunction.css';

// Import Images
// Switch Images
import SW_D_E from '../../../../public/images/SW_D_E.png';
import SW_U_W from '../../../../public/images/SW_U_W.png';
// Signal Images
import SIG_W from '../../../../public/images/SIG_W.png';
import SIG_W_Clear from '../../../../public/images/SIG_W_Clear.png';
import SIG_W_Stop from '../../../../public/images/SIG_W_Stop.png';
import SIG_E from '../../../../public/images/SIG_E.png';
import SIG_E_Clear from '../../../../public/images/SIG_E_Clear.png';
import SIG_E_Stop from '../../../../public/images/SIG_E_Stop.png';

class HudsonJunction extends Component {
    state = {  }
    render() { 
        return (  
            <div>
                <div className="hudson_title">CP HUDSON JUNCTION</div>
                <div className="hudson_milepost">MP 63.4JS</div>
                <div className="hudson_2_west"></div>
                <div className="hudson_1_west"></div>

                <div className="hudson_SW_3"><img src={SW_D_E}/></div>
                <div className="hudson_SW_1"><img src={SW_U_W}/></div>

                <div className="hudson_east"></div>
                <div className="hudson_nysw"></div>

                <div className="hudson_sig_2es"><img src={SIG_E}/></div>
                <div className="hudson_sig_2e"><img src={SIG_E}/></div>

                <div className="hudson_sig_2w"><img src={SIG_W}/></div>
                <div className="hudson_sig_2ws"><img src={SIG_W}/></div>
            </div>
        );
    }
}
 
export default HudsonJunction;