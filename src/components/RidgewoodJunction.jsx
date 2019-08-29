import React, { Component } from 'react';
import '../css/ridgewood_jct.css';

import CX_135 from '../../public/images/CX_135.png';
import CX_225 from '../../public/images/CX_225.png';
import SW_2_S from '../../public/images/SW_U_E.png';


class RidgewoodJunction extends Component {
    state = {  }
    render() { 
        return (  
            <div>
                <div className="m_ridgewood_3_west"></div>
                <div className="m_ridgewood_1_west"></div>
                <div className="m_ridgewood_2_west"></div>

                <div className="ridgewood_1"><img src={CX_135}/></div>
                <div className="ridgewood_3"><img src={CX_135}/></div>
                <div className="ridgewood_5"><img src={CX_225}/></div>
                <div className="ridgewood_7"><img src={CX_225}/></div>
                <div className="ridgewood_9"><img src={SW_2_S}/></div>

                <div className="m_ridgewood_3_center"></div>
                <div className="m_ridgewood_1_center"></div>

                <div className="m_ridgewood_1_east"></div>
                <div className="m_ridgewood_2_east"></div>
            
                <div className="b_ridgewood_1_Diag"></div>
                <div className="b_ridgewood_1"></div>
                <div className="b_ridgewood_2"></div>
            </div>
        );
    }
}
 
export default RidgewoodJunction;