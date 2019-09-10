import React, { Component } from 'react';
// Import CSS style sheet
import '../../../css/Southern_Tier_Line/hall.css';

// Import Images
// Switch Images
import CX_225 from '../../../../public/images/CX_225.png';
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


class Hall extends Component {
    state = {  }
    render() { 
        return (  
            <div>
                <div className="hall_title">CP HALL</div>
                <div className="hall_milepost">MP 64.7JS</div>
                
                <div className="hall_yard"></div>
                <div className="hall_west"></div>

                <div className="hall_SW_1"><img src={CX_225}/></div>

                <div className="hall_2_east"></div>
                <div className="hall_1_east"></div>

                <div className="hall_sig_4w"><img src={SIG_W}/></div>
                <div className="hall_sig_2w"><img src={SIG_W}/></div>

                <div className="hall_sig_4e"><img src={SIG_E}/></div>
                <div className="hall_sig_2e"><img src={SIG_E}/></div>
            </div>
        );
    }
}
 
export default Hall;