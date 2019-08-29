import React, { Component } from 'react';

import MaineLine_CTC from '../scripts/mainLine_ctc.js';

import MainLineTracks from '../components/MainLineTracks.jsx';
import RidgewoodJunction from '../components/RidgewoodJunction.jsx';
import Suscon from '../components/Suscon.jsx';
import Mill from '../components/Mill.jsx';
import WestSecaucus from '../components/WestSecaucus.jsx';
import Laurel from '../components/Laurel.jsx';

import BergenTracks from '../components/BergenTracks.jsx';
import BT from '../components/BT.jsx';
import PascackJunction from '../components/PascackJct.jsx';
import HX from '../components/HX.jsx';


var ctc = new MaineLine_CTC();

class MainLine extends Component {
    
    state = {  
        status_suscon: ctc.get_suscon().get_interlocking_status()
    };


    render() { 

        var track_blocks = {
            block_1: ctc.get_block_1_status(),
            block_2: ctc.get_block_2_status()
        };

        return (  
            <div>
                <BergenTracks />
                <BT />
                <PascackJunction />
                <HX />

                <MainLineTracks blocks={track_blocks}/>
                <RidgewoodJunction />
                <Suscon 
                    status={this.state.status_suscon} 
                    throw_sw_1={this.suscon_throw_sw_1} 
                    throw_sw_3={this.suscon_throw_sw_3}
                />
                <Mill />
                <WestSecaucus />
                <Laurel />
            </div>
        );
    }

    suscon_throw_sw_1 = () => {
        ctc.get_suscon().throw_sw_1();
        this.setState({status_suscon: ctc.get_suscon().get_interlocking_status()});
    }

    suscon_throw_sw_3 = () => {
        ctc.get_suscon().throw_sw_3();
        this.setState({status_suscon: ctc.get_suscon().get_interlocking_status()});
    }
}
 
export default MainLine;