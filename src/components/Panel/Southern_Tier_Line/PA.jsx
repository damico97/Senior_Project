import React, { Component } from 'react';
// Import CSS style sheet
import '../../../css/Southern_Tier_Line/pa.css';

// Import Images
// Switch Images
import SW_U_E from '../../../../public/images/SW_U_E.png';
import CX_225 from '../../../../public/images/CX_225.png';
// Signal Images
import SIG_W from '../../../../public/images/SIG_W.png';
import SIG_W_Clear from '../../../../public/images/SIG_W_Clear.png';
import SIG_W_Stop from '../../../../public/images/SIG_W_Stop.png';
import SIG_E from '../../../../public/images/SIG_E.png';
import SIG_E_Clear from '../../../../public/images/SIG_E_Clear.png';
import SIG_E_Stop from '../../../../public/images/SIG_E_Stop.png';


class PA extends Component {
    state = {  }
    render() { 
        return (  
            <div>
                <div className="pa_title">CP PA</div>
                <div className="pa_milepost">MP 87.9SR</div>
                <div className="pa_1_west"></div>
                <div className="pa_2_west"></div>
                <div className="pa_buckleys_west"></div>

                <div className="pa_SW_5"><img src={CX_225}/></div>
                <div className="pa_SW_3"><img src={CX_225}/></div>
                <div className="pa_SW_1"><img src={SW_U_E}/></div>

                <div className="pa_yard"></div>
                <div className="pa_1_east"></div>
                <div className="pa_2_east"></div>
                <div className="pa_buckleys_east"></div>

                <div className="pa_sig_2w-2"><img src={SIG_W}/></div>
                <div className="pa_sig_2w-1"><img src={SIG_W}/></div>
                <div className="pa_sig_4w"><img src={SIG_W}/></div>
                <div className="pa_sig_6w"><img src={SIG_W}/></div>

                <div className="pa_sig_2e"><img src={SIG_E}/></div>
                <div className="pa_sig_4e"><img src={SIG_E}/></div>
                <div className="pa_sig_6e"><img src={SIG_E}/></div>
            </div>
        );
    }
}
 
export default PA;