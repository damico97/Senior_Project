import React, { Component } from 'react';

import '../../../css/Southern_Tier_Line/southernTier.css';

class SouthernTierTracks extends Component {
    state = {  
        harriman_sterling_1: this.props.blocks.block_harriman_sterling_1,

        valley_harriman_1: this.props.blocks.block_valley_harriman_1,
        valley_harriman_2: this.props.blocks.block_valley_harriman_2,
        harriman_industrial: this.props.blocks.block_harriman_industrial,

        hudson_valley_1: this.props.blocks.block_hudson_valley_1,
        hudson_nysw: this.props.blocks.block_hudson_nysw,

        hall_hudson_1: this.props.blocks.block_hall_hudson_1,
        hall_hudson_2: this.props.blocks.block_hall_hudson_2,
        hall_yard: this.props.blocks.block_hall_yard,
            
        howells_hall_1: this.props.blocks.block_howells_hall_1,
            
        ov_howells_1: this.props.blocks.block_ov_howells_1,
        ov_howells_2: this.props.blocks.block_ov_howells_2,

        bc_ov_1: this.props.blocks.block_bc_ov_1,

        port_bc_1: this.props.blocks.block_port_bc_1,
        pa_port_1: this.props.blocks.block_pa_port_1,
        pa_bc_2: this.props.blocks.block_pa_bc_2,
        port_yard_west: this.props.blocks.block_port_yard_west,
        port_yard_east: this.props.blocks.block_port_yard_east,

        buckleys_west: this.props.blocks.block_buckleys_west,
        buckleys_east: this.props.blocks.block_buckleys_east,

        sparrow_pa_1: this.props.blocks.block_sparrow_pa_1,
        sparrow_pa_2: this.props.blocks.block_sparrow_pa_2,
        sparrow_cripple: this.props.blocks.block_sparrow_cripple,

        bingo_sparrow: this.props.blocks.block_bingo_sparrow
    };

    componentWillReceiveProps(nextProps){
        this.setState({
            harriman_sterling_1: nextProps.blocks.block_harriman_sterling_1,

            valley_harriman_1: nextProps.blocks.block_valley_harriman_1,
            valley_harriman_2: nextProps.blocks.block_valley_harriman_2,
            harriman_industrial: nextProps.blocks.block_harriman_industrial,

            hudson_valley_1: nextProps.blocks.block_hudson_valley_1,
            hudson_nysw: nextProps.blocks.block_hudson_nysw,

            hall_hudson_1: nextProps.blocks.block_hall_hudson_1,
            hall_hudson_2: nextProps.blocks.block_hall_hudson_2,
            hall_yard: nextProps.blocks.block_hall_yard,
                
            howells_hall_1: nextProps.blocks.block_howells_hall_1,
                
            ov_howells_1: nextProps.blocks.block_ov_howells_1,
            ov_howells_2: nextProps.blocks.block_ov_howells_2,

            bc_ov_1: nextProps.blocks.block_bc_ov_1,

            port_bc_1: nextProps.blocks.block_port_bc_1,
            pa_port_1: nextProps.blocks.block_pa_port_1,
            pa_bc_2: nextProps.blocks.block_pa_bc_2,
            port_yard_west: nextProps.blocks.block_port_yard_west,
            port_yard_east: nextProps.blocks.block_port_yard_east,

            buckleys_west: nextProps.blocks.block_buckleys_west,
            buckleys_east: nextProps.blocks.block_buckleys_east,

            sparrow_pa_1: nextProps.blocks.block_sparrow_pa_1,
            sparrow_pa_2: nextProps.blocks.block_sparrow_pa_2,
            sparrow_cripple: nextProps.blocks.block_sparrow_cripple,

            bingo_sparrow: nextProps.blocks.block_bingo_sparrow
        });
    }

    render() { 
        return (  
            <div>
                {/* Tags */}
                <div className="port_jervis_tag_1">Port Jervis</div>
                <div className="port_jervis_tag_2">Yard</div>
                <div className="crippple_tag">Cripple</div>
                <div className="hall_yard_tag">Campbell Hall Yard</div>
                <div className="hudson_nysw_tag">NYS&W RR</div>
                <div className="harriman_int_tag">Harriman</div>
                <div className="harriman_int_tag_2">Industrial</div>

                {/* First Line */}
                {/* Sterling to Harriman */}
                <div className="s_sterling_harriman" style={{background: this.state.harriman_sterling_1}}></div>

                {/* Harriman to Screen */}
                <div className="s_screen_harriman_1" style={{background: this.state.valley_harriman_1}}></div>
                <div className="s_screen_harriman_2" style={{background: this.state.valley_harriman_2}}></div>
                <div className="s_harriman_industrial" style={{background: this.state.harriman_industrial}}></div>


                {/* Second Line */}
                {/* Screen to Central Valley */}
                <div className="s_central_valley_screen_2" style={{background: this.state.valley_harriman_2}}></div>
                <div className="s_central_valley_screen_1" style={{background: this.state.valley_harriman_1}}></div>

                {/* Central Valley to Hudson Junction */}
                <div className="s_hudson_valley" style={{background: this.state.hudson_valley_1}}></div>

                {/* NYS&W Hudson Junction Lead */}
                <div className="s_hudson_nysw" style={{background: this.state.hudson_nysw}}></div>

                {/* Hudson Junction to Hall */}
                <div className="s_hall_hudson_2" style={{background: this.state.hall_hudson_2}}></div>
                <div className="s_hall_hudson_1" style={{background: this.state.hall_hudson_1}}></div>

                {/* Howells to Hall */}
                <div className="s_howells_hall" style={{background: this.state.howells_hall_1}}></div>

                {/* Hall Yard Lead */}
                <div className="s_hall_yard" style={{background: this.state.hall_yard}}></div>

                {/* Howells to Screen */}
                <div className="s_screen_howells_2" style={{background: this.state.ov_howells_2}}></div>
                <div className="s_screen_howells_1" style={{background: this.state.ov_howells_1}}></div>


                {/* Third Line */}
                {/* Screen to OV */}
                <div className="s_ov_screen_2" style={{background: this.state.ov_howells_2}}></div>
                <div className="s_ov_screen_1" style={{background: this.state.ov_howells_1}}></div>

                {/* OV to BC */}
                <div className="s_ov_bc" style={{background: this.state.bc_ov_1}}></div>

                {/* BC to Port Jervis */}
                <div className="s_bc_port_1" style={{background: this.state.port_bc_1}}></div>

                {/* Port Jervis to PA */}
                <div className="s_port_pa_1" style={{background: this.state.pa_port_1}}></div>
                <div className="s_bc_pa_2" style={{background: this.state.pa_bc_2}}></div>

                {/* Port Jervis Yard */}
                <div className="s_port_yard_west" style={{background: this.state.port_yard_west}}></div>
                <div className="s_port_yard_east" style={{background: this.state.port_yard_east}}></div>

                {/* PA to Sparrow */}
                <div className="s_sparrow_pa_1" style={{background: this.state.sparrow_pa_1}}></div>
                <div className="s_sparrow_pa_2" style={{background: this.state.sparrow_pa_2}}></div>

                {/* Sparrow Cripple */}
                <div className="s_sparrow_cripple" style={{background: this.state.sparrow_cripple}}></div>

                {/* Sparrow to Screen */}
                <div className="s_screen_sparrow" style={{background: this.state.bingo_sparrow}}></div>
            </div>
        );
    }
}
 
export default SouthernTierTracks;