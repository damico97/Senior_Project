import React, { Component } from 'react';
// Import CSS style sheet
import '../../../css/Southern_Tier_Line/sparrow.css';

// Import Images
// Switch Images
import SW_U_E from '../../../../public/images/SW_U_E.png';
import SW_D_E from '../../../../public/images/SW_D_E.png';
// Signal Images
import SIG_W from '../../../../public/images/SIG_W.png';
import SIG_W_Clear from '../../../../public/images/SIG_W_Clear.png';
import SIG_W_Stop from '../../../../public/images/SIG_W_Stop.png';
import SIG_E from '../../../../public/images/SIG_E.png';
import SIG_E_Clear from '../../../../public/images/SIG_E_Clear.png';
import SIG_E_Stop from '../../../../public/images/SIG_E_Stop.png';

class Sparrow extends Component {
    state = {  }
    render() { 
        return (  
            <div>
                <div className="sparrow_title">CP SPARROW</div>
                <div className="sparrow_milepost">MP 89.9SR</div>
                
                <div className="sparrow_west"></div>

                <div className="sparrow_SW_3"><img src={SW_D_E}/></div>
                <div className="sparrow_SW_1"><img src={SW_U_E}/></div>

                <div className="sparrow_cripple"></div>
                <div className="sparrow_1_east"></div>
                <div className="sparrow_2_east"></div>

                <div className="sparrow_sig_2w-2"><img src={SIG_W}/></div>
                <div className="sparrow_sig_2w-1"><img src={SIG_W}/></div>
                <div className="sparrow_sig_2w-3"><img src={SIG_W}/></div>
                <div className="sparrow_sig_2e"><img src={SIG_E}/></div>
            </div>
        );
    }
}
 
export default Sparrow;