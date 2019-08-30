import React, { Component } from 'react';
import '../../../css/Bergen_County_Line/bergenCounty.css';

const Empty = '#999999';
const Route = '#75fa4c';
const Occupied = '#eb3323';

class BergenTracks extends Component {
    state = {  }
    render() { 
        return (  
            <div>
                <div className="bt_nysw_tag">NYS&W RR</div>
                <div className="pascack_line_tag">Pascack Valley</div>
                <div className="hx_line_tag">Norfolk Southern Croxton Yard</div>

                <div className="b_croxton_1"></div>
                <div className="b_croxton_2"></div>

                <div className="b_laurel_hx_1_west"></div>
                <div className="b_laurel_hx_1_diag"></div>
                <div className="b_laurel_hx_1_east"></div>
                <div className="b_laurel_hx_2_west"></div>
                <div className="b_laurel_hx_2_diag"></div>
                <div className="b_laurel_hx_2_east"></div>

                <div className="b_hx_pascack_1"></div>
                <div className="b_hx_pascack_2"></div>

                <div className="b_pascack_bt_1"></div>
                <div className="b_pascack_bt_2"></div>

                <div className="b_pascack_1"></div>
                <div className="b_pascack_2"></div>

                <div className="b_nysw"></div>

                <div className="b_bt_ridgewood_1_east"></div>
                <div className="b_bt_ridgewood_1_diag"></div>
                <div className="b_bt_ridgewood_1_west"></div>
                <div className="b_bt_ridgewood_2_east"></div>
                <div className="b_bt_ridgewood_2_diag"></div>
                <div className="b_bt_ridgewood_2_west"></div>
            </div>
        );
    }
}
 
export default BergenTracks;