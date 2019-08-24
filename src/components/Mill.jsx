import React, { Component } from 'react';
import '../css/mill.css';

class Mill extends Component {
    render() { 
        return (  
            <div>
                {/* Tags */}
                <div className="mill_title">MILL</div>
                <div className="mill_milepost">MP 11.1</div>

                {/* East Side Tail Tracks */}
                <div className="mill_1_east" id="mill_1_east"></div>
                <div className="mill_2_east" id="mill_2_east"></div>

                {/* Switches */}
                <div className="mill_SW_3" id="mill_SW_1"><img id="mill_SW_1_image" src={require('../../public/images/CX_135.png')}/></div>
                <div className="mill_SW_1" id="mill_SW_3"><img id="mill_SW_3_image" src={require('../../public/images/CX_225.png')}/></div>

                {/* West Side Tail Tracks */}
                <div className="mill_1_west" id="mill_1_west"></div>
                <div className="mill_2_west" id="mill_2_west"></div>

                {/* Signals */}
                <div className="mill_sig_2e" id="mill_2e"><img id="mill_2e_image" src={require('../../public/images/SIG_E.png')}/></div>
                <div className="mill_sig_4e" id="mill_4e"><img id="mill_4e_image" src={require('../../public/images/SIG_E.png')}/></div>
                <div className="mill_sig_2w" id="mill_2w"><img id="mill_2w_image" src={require('../../public/images/SIG_W.png')}/></div>
                <div className="mill_sig_4w" id="mill_4w"><img id="mill_4w_image" src={require('../../public/images/SIG_W.png')}/></div>
            </div>
        );
    }
}
 
export default Mill;