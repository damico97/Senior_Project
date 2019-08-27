import React, { Component } from 'react';

import MaineLine_CTC from '../scripts/mainLine_ctc.js';

import MainLineTracks from '../components/MainLineTracks.jsx';
import Suscon from '../components/Suscon.jsx';
import Mill from '../components/Mill.jsx';

const Empty = '#999999';
const Route = '#75fa4c';
const Occupied = '#eb3323';

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

        //var status_suscon = this.ctc.get_suscon().get_interlocking_status();

        //console.log(this.ctc.get_suscon().get_interlocking_status());

        return (  
            <div>
                <MainLineTracks blocks={track_blocks}/>
                <Suscon 
                    status={this.state.status_suscon} 
                    throw_sw_1={this.suscon_throw_sw_1} 
                    throw_sw_3={this.suscon_throw_sw_3}
                />
                <Mill />
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