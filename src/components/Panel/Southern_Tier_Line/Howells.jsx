import React, { Component } from 'react';
// Import CSS style sheet
import '../../../css/Southern_Tier_Line/howells.css';

// Import Images
// Switch Images
import SW_U_W from '../../../../public/images/SW_U_W.png';
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


class Howells extends Component {
    state = {  }
    render() { 
        return (  
            <div>
                <div className="howells_title">CP HOWELLS</div>
                <div className="howells_milepost">MP 69.1SR</div>
                
                <div className="howells_2_west"></div>
                <div className="howells_1_west"></div>

                <div className="howells_SW_3"><img src={SW_U_W}/></div>

                <div className="howells_east"></div>

                <div className="howells_sig_2es"><img src={SIG_E}/></div>
                <div className="howells_sig_2e"><img src={SIG_E}/></div>

                <div className="howells_sig_2w"><img src={SIG_W}/></div>
            </div>
        );
    }
}
 
export default Howells;