import React, { Component } from 'react';
import '../../../css/Main_Line/west_secaucus.css';

import SW_D_E from '../../../../public/images/SW_D_E.png';
import SW_D_W from '../../../../public/images/SW_D_W.png';

import SIG_W from '../../../../public/images/SIG_W.png';
import SIG_E from '../../../../public/images/SIG_E.png';

class WestSecaucus extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <div className="m_westSecaucus_1_east" id="westSecaucus_1_east"></div>
                <div className="m_westSecaucus_2_east" id="westSecaucus_2_east"></div>

                <div className="westSecaucus_SW_1" id="westSecaucus_SW_1"><img id="westSecaucus_SW_1_image" src={SW_D_E}/></div>
                <div className="m_westSecaucus_bridge" id="westSecaucus_bridge"></div>
                <div className="westSecaucus_SW_3" id="westSecaucus_SW_3"><img id="westSecaucus_SW_3_image" src={SW_D_W}/></div>

                <div className="m_westSecaucus_1_west" id="westSecaucus_1_west"></div>
                <div className="m_westSecaucus_2_west" id="westSecaucus_2_west"></div>

                <div className="westSecaucus_sig_2e" id="westSecaucus_2e"><img id="westSecaucus_2e_image" src={SIG_E}/></div>
                <div className="westSecaucus_sig_4e" id="westSecaucus_4e"><img id="westSecaucus_4e_image" src={SIG_E}/></div>
                <div className="westSecaucus_sig_2w" id="westSecaucus_2w"><img id="westSecaucus_2w_image" src={SIG_W}/></div>
                <div className="westSecaucus_sig_4w" id="westSecaucus_4w"><img id="westSecaucus_4w_image" src={SIG_W}/></div>
            </div>
        );
    }
}
 
export default WestSecaucus;