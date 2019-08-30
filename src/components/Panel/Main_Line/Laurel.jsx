import React, { Component } from 'react';
import '../../../css/Main_Line/laurel.css';

// Import Images
// Switch Images
import CX_135 from '../../../../public/images/CX_135.png';
import CX_135_Lined_Top from '../../../../public/images/CX_135_Lined_Top.png';
import CX_135_R from '../../../../public/images/CX_135_R.png';
import CX_225 from '../../../../public/images/CX_225.png';
import CX_225_Lined_Top from '../../../../public/images/CX_225_Lined_Top.png';
import CX_225_R from '../../../../public/images/CX_225_R.png';
import SW_U_W from '../../../../public/images/SW_U_W.png';
import SW_U_E from '../../../../public/images/SW_U_E.png';
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



class Laurel extends Component {
    state = {  }
    render() { 
        return (  
            <div>
                <div className="laurel_title">LAUREL</div>
                <div className="laurel_milepost">MP 4.3</div>

                <div className="b_laurel_3_west"></div>
                <div className="b_laurel_2_west"></div>
                <div className="m_laurel_2_west"></div>
                <div className="m_laurel_4_west"></div>

                <div className="laurel_SW_1"><img src={CX_135}/></div>
                <div className="laurel_SW_3"><img src={CX_225}/></div>
                <div className="laurel_SW_7"><img src={CX_225}/></div>
                <div className="laurel_SW_9"><img src={CX_135}/></div>
                <div className="laurel_SW_11"><img src={CX_225}/></div>
                <div className="laurel_SW_13"><img src={CX_135}/></div>

                <div className="m_laurel_3_center"></div>

                <div className="m_laurel_1_east"></div>
                <div className="m_laurel_2_east"></div>
                <div className="m_laurel_3_east"></div>
                <div className="m_laurel_4_east"></div>

                <div className="laurel_sig_10w"><img src={SIG_W}/></div>
                <div className="laurel_sig_2w"><img src={SIG_W}/></div>
                <div className="laurel_sig_4w"><img src={SIG_W}/></div>
                <div className="laurel_sig_8w"><img src={SIG_W}/></div>

                <div className="laurel_sig_4e"><img src={SIG_E}/></div>
                <div className="laurel_sig_6e"><img src={SIG_E}/></div>
                <div className="laurel_sig_8e"><img src={SIG_E}/></div>
                <div className="laurel_sig_12e"><img src={SIG_E}/></div>
            </div>
        );
    }
}
 
export default Laurel;