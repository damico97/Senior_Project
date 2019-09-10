import React, { Component } from 'react';

import '../../../css/Southern_Tier_Line/southernTier.css';

class SouthernTierTracks extends Component {
    state = {  }
    render() { 
        return (  
            <div>
                {/* Tags */}
                <div className="port_jervis_tag_1">Port Jervis</div>
                <div className="port_jervis_tag_2">Yard</div>
                <div className="crippple_tag">Cripple</div>
                <div className="buckleys_tag">Buckley's</div>
                <div className="hall_yard_tag">Campbell Hall Yard</div>
                <div className="hudson_nysw_tag">NYS&W RR</div>
                <div className="harriman_int_tag">Harriman</div>
                <div className="harriman_int_tag_2">Industrial</div>

                {/* First Line */}
                {/* Sterling to Harriman */}
                <div className="s_sterling_harriman"></div>

                {/* Harriman to Screen */}
                <div className="s_screen_harriman_1"></div>
                <div className="s_screen_harriman_2"></div>
                <div className="s_harriman_industrial"></div>


                {/* Second Line */}
                {/* Screen to Central Valley */}
                <div className="s_central_valley_screen_2"></div>
                <div className="s_central_valley_screen_1"></div>

                {/* Central Valley to Hudson Junction */}
                <div className="s_hudson_valley"></div>

                {/* NYS&W Hudson Junction Lead */}
                <div className="s_hudson_nysw"></div>

                {/* Hudson Junction to Hall */}
                <div className="s_hall_hudson_2"></div>
                <div className="s_hall_hudson_1"></div>

                {/* Howells to Hall */}
                <div className="s_howells_hall"></div>

                {/* Hall Yard Lead */}
                <div className="s_hall_yard"></div>

                {/* Howells to Screen */}
                <div className="s_screen_howells_2"></div>
                <div className="s_screen_howells_1"></div>


                {/* Third Line */}
                {/* Screen to OV */}
                <div className="s_ov_screen_2"></div>
                <div className="s_ov_screen_1"></div>

                {/* OV to BC */}
                <div className="s_ov_bc"></div>

                {/* BC to Port Jervis */}
                <div className="s_bc_port_1"></div>

                {/* Port Jervis to PA */}
                <div className="s_port_pa_1"></div>
                <div className="s_bc_pa_2"></div>

                {/* Port Jervis Yard */}
                <div className="s_port_yard_west"></div>
                <div className="s_port_yard_east"></div>

                {/* PA to Sparrow */}
                <div className="s_sparrow_pa_1"></div>
                <div className="s_sparrow_pa_2"></div>

                {/* Sparrow Cripple */}
                <div className="s_sparrow_cripple"></div>

                {/* Buckleys */}
                <div className="s_buckleys_west"></div>
                <div className="s_buckleys_east"></div>

                {/* Sparrow to Screen */}
                <div className="s_screen_sparrow"></div>
            </div>
        );
    }
}
 
export default SouthernTierTracks;