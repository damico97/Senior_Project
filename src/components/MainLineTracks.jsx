import React, { Component } from 'react';
import '../css/mainLine.css';

const Empty = '#999999';
const Route = '#75fa4c';
const Occupied = '#eb3323';

class MainLineTracks extends Component {
    state = {
        block_westSecaucus_mill_1: Empty,
        block_westSecaucus_mill_2: Empty,
        block_suscon_mill_1: this.props.blocks.block_1,
        block_suscon_mill_2: this.props.blocks.block_2,
        block_ridgewood_suscon_1: Empty,
        block_ridgewood_suscon_2: Empty
    };

    render() { 
        //console.log(this.props);
        return (  
            <div>
                {/* West End to Laurel */}
                <div className="m_westEnd_laurel_1"></div>
                <div className="m_westEnd_laurel_2"></div>
                <div className="m_westEnd_laurel_3"></div>
                <div className="m_westEnd_laurel_4"></div>

                {/* Laurel to West Secaucus */}
                <div className="m_laurel_westSecaucus_1"></div>
                <div className="m_laurel_westSecaucus_2"></div>

                {/* West Secaucus To Mill */}
                <div className="m_westSecaucus_mill_1" id="m_westSecaucus_mill_1" style={{background: this.state.block_westSecaucus_mill_1}}></div>
                <div className="m_westSecaucus_mill_2" id="m_westSecaucus_mill_2" style={{background: this.state.block_westSecaucus_mill_2}}></div>

                {/* Mill to Suscon */}
                <div className="m_suscon_mill_1" id="m_suscon_mill_1" style={{background: this.state.block_suscon_mill_1}}></div>
                <div className="m_suscon_mill_2" id="m_suscon_mill_2" style={{background: this.state.block_suscon_mill_2}}></div>

                {/* Suscon to Ridgewood Junction */}
                <div className="m_ridgewood_suscon_1" id="m_ridgewood_suscon_1" style={{background: this.state.block_ridgewood_suscon_1}}></div>
                <div className="m_ridgewood_suscon_2" id="m_ridgewood_suscon_2" style={{background: this.state.block_ridgewood_suscon_2}}></div>
            </div>
        );
    }
}
 
export default MainLineTracks;