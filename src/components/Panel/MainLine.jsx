import React, { Component } from 'react';

import MaineLine_CTC from '../../scripts/mainLine_ctc.js';

import MainLineTracks from '../Panel/Main_Line/MainLineTracks.jsx';
import RidgewoodJunction from '../Panel/Main_Line/RidgewoodJunction.jsx';
import Suscon from '../Panel/Main_Line/Suscon.jsx';
import Mill from '../Panel/Main_Line/Mill.jsx';
import WestSecaucus from '../Panel/Main_Line/WestSecaucus.jsx';
import Laurel from '../Panel/Main_Line/Laurel.jsx';

import BergenTracks from '../Panel/Bergen_County_Line/BergenTracks.jsx';
import BT from '../Panel/Bergen_County_Line/BT.jsx';
import PascackJunction from '../Panel/Bergen_County_Line/PascackJct.jsx';
import HX from '../Panel/Bergen_County_Line/HX.jsx';


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