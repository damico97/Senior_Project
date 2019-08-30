import React, { Component } from 'react';
import '../css/ridgewood_jct.css';

// Import Images
// Switch Images
import CX_135 from '../../public/images/CX_135.png';
import CX_135_Lined_Top from '../../public/images/CX_135_Lined_Top.png';
import CX_135_R from '../../public/images/CX_135_R.png';
import CX_225 from '../../public/images/CX_225.png';
import CX_225_Lined_Top from '../../public/images/CX_225_Lined_Top.png';
import CX_225_R from '../../public/images/CX_225_R.png';
import SW_U_W from '../../public/images/SW_U_W.png';
import SW_U_E from '../../public/images/SW_U_E.png';
// Signal Images
import SIG_W from '../../public/images/SIG_W.png';
import SIG_W_Clear from '../../public/images/SIG_W_Clear.png';
import SIG_W_Stop from '../../public/images/SIG_W_Stop.png';
import SIG_E from '../../public/images/SIG_E.png';
import SIG_E_Clear from '../../public/images/SIG_E_Clear.png';
import SIG_E_Stop from '../../public/images/SIG_E_Stop.png';

const Empty = '#999999';
const Route = '#75fa4c';
const Occupied = '#eb3323';


class RidgewoodJunction extends Component {
    state = {  }
    render() { 
        return (  
            <div>
                <div className="ridgewood_title">RIDGEWOOD JUNCTION</div>
                <div className="ridgewood_milepost">MP 20.3</div>

                <div className="m_ridgewood_3_west"></div>
                <div className="m_ridgewood_1_west"></div>
                <div className="m_ridgewood_2_west"></div>

                <div className="ridgewood_1"><img src={CX_135}/></div>
                <div className="ridgewood_3"><img src={CX_135}/></div>
                <div className="ridgewood_5"><img src={CX_225}/></div>
                <div className="ridgewood_7"><img src={CX_225}/></div>
                <div className="ridgewood_9"><img src={SW_U_E}/></div>

                <div className="m_ridgewood_3_center"></div>
                <div className="m_ridgewood_1_center"></div>

                <div className="m_ridgewood_1_east"></div>
                <div className="m_ridgewood_2_east"></div>
            
                <div className="b_ridgewood_1_Diag"></div>
                <div className="b_ridgewood_1"></div>
                <div className="b_ridgewood_2"></div>

                <div className="ridgewood_sig_6w"><img src={SIG_W}/></div>
                <div className="ridgewood_sig_2w-2"><img src={SIG_W}/></div>
                <div className="ridgewood_sig_2w-1"><img src={SIG_W}/></div>
                <div className="ridgewood_sig_4w"><img src={SIG_W}/></div>
                <div className="ridgewood_sig_6e"><img src={SIG_E}/></div>
                <div className="ridgewood_sig_2e"><img src={SIG_E}/></div>
                <div className="ridgewood_sig_4e"><img src={SIG_E}/></div>
            </div>
        );
    }
}
 
export default RidgewoodJunction;