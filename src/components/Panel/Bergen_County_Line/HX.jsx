import React, { Component } from 'react';
// Import CSS style sheet
import '../../../css/Bergen_County_Line/hx.css';

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


class HX extends Component {
    state = {  }
    render() { 
        return (  
            <div>
                <div className="hx_title">HX</div>
                <div className="hx_milepost">MP 5.4</div>

                <div className="hx_1_west"></div>
                <div className="hx_2_west"></div>

                <div className="hx_SW_1"><img src={CX_225}/></div>
                <div className="hx_SW_3"><img src={SW_U_E}/></div>
                <div className="hx_SW_5"><img src={SW_U_E}/></div>

                <div className="hx_1_east"></div>
                <div className="hx_2_east"></div>
                <div className="hx_croxton_1"></div>
                <div className="hx_croxton_2"></div>
                
                <div className="hx_sig_2w-3"><img src={SIG_W}/></div>
                <div className="hx_sig_2w-2"><img src={SIG_W}/></div>
                <div className="hx_sig_2w-1"><img src={SIG_W}/></div>
                <div className="hx_sig_4w"><img src={SIG_W}/></div>

                <div className="hx_sig_2e"><img src={SIG_E}/></div>
                <div className="hx_sig_4e"><img src={SIG_E}/></div>
            </div>
        );
    }
}
 
export default HX;