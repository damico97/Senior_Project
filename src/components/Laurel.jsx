import React, { Component } from 'react';
import '../css/laurel.css';

import CX_135 from '../../public/images/CX_135.png';
import CX_135_R from '../../public/images/CX_135_R.png';
import CX_225 from '../../public/images/CX_225.png';
import CX_225_R from '../../public/images/CX_225_R.png';

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
            </div>
        );
    }
}
 
export default Laurel;