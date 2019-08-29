import React, { Component } from 'react';
// Import CSS style sheet
import '../css/bt.css';

// Import Images
// Switch Images
import CX_135 from '../../public/images/CX_135.png';
import CX_135_Lined_Top from '../../public/images/CX_135_Lined_Top.png';
import CX_135_R from '../../public/images/CX_135_R.png';
import CX_225 from '../../public/images/CX_225.png';
import CX_225_Lined_Top from '../../public/images/CX_225_Lined_Top.png';
import CX_225_R from '../../public/images/CX_225_R.png';
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


class BT extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <div className="bt_1_west"></div>
                <div className="bt_2_west"></div>

                <div className="bt_SW_1"><img src={CX_135}/></div>
                <div className="bt_SW_3"><img src={CX_225}/></div>
                <div className="bt_SW_5"><img src={SW_U_E}/></div>

                <div className="bt_1_east"></div>
                <div className="bt_2_east"></div>
                <div className="bt_3_east"></div>
            </div>
        );
    }
}
 
export default BT;