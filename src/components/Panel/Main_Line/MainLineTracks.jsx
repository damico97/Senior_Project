import React, { Component } from 'react';
import '../../../css/Main_Line/mainLine.css';

const Empty = '#999999';
const Route = '#75fa4c';
const Occupied = '#eb3323';

class MainLineTracks extends Component {
    state = {
        westEnd_laurel_1: this.props.blocks.block_westEnd_laurel_1,
        westEnd_laurel_2: this.props.blocks.block_westEnd_laurel_2,
        westEnd_laurel_3: this.props.blocks.block_westEnd_laurel_3,
        westEnd_laurel_4: this.props.blocks.block_westEnd_laurel_4,

        laurel_westSecaucus_1: this.props.blocks.block_laurel_westSecaucus_1,
        laurel_westSecaucus_2: this.props.blocks.block_laurel_westSecaucus_2,

        mill_westSecaucus_1: this.props.blocks.block_mill_westSecaucus_1,
        mill_westSecaucus_2: this.props.blocks.block_mill_westSecaucus_2,

        suscon_mill_1: this.props.blocks.block_suscon_mill_1,
        suscon_mill_2: this.props.blocks.block_suscon_mill_2,

        ridgewood_suscon_1: this.props.blocks.block_ridgewood_suscon_1,
        ridgewood_suscon_2: this.props.blocks.block_ridgewood_suscon_2,

        wc_ridgewood_3: this.props.blocks.block_wc_ridgewood_3,
        wc_ridgewood_1: this.props.blocks.block_wc_ridgewood_1,
        wc_ridgewood_2: this.props.blocks.block_wc_ridgewood_2,

        sf_wc_1: this.props.blocks.block_sf_wc_1,
        sf_wc_2: this.props.blocks.block_sf_wc_2,

        hilburn_sf: this.props.blocks.block_hilburn_sf,

        sterling_sf: this.props.blocks.block_sterling_sf,
        sterling_hilburn: this.props.blocks.block_sterling_hilburn,

        //Yard Leads
        hilburn_yard_west: this.props.blocks.block_hilburn_yard_west,
        hilburn_yard_east: this.props.blocks.block_hilburn_yard_east,
        wc_yard: this.props.blocks.block_wc_yard
    };

    componentWillReceiveProps(nextProps){
        this.setState({
            westEnd_laurel_1: nextProps.blocks.block_westEnd_laurel_1,
            westEnd_laurel_2: nextProps.blocks.block_westEnd_laurel_2,
            westEnd_laurel_3: nextProps.blocks.block_westEnd_laurel_3,
            westEnd_laurel_4: nextProps.blocks.block_westEnd_laurel_4,

            laurel_westSecaucus_1: nextProps.blocks.block_laurel_westSecaucus_1,
            laurel_westSecaucus_2: nextProps.blocks.block_laurel_westSecaucus_2,

            mill_westSecaucus_1: nextProps.blocks.block_mill_westSecaucus_1,
            mill_westSecaucus_2: nextProps.blocks.block_mill_westSecaucus_2,

            suscon_mill_1: nextProps.blocks.block_suscon_mill_1,
            suscon_mill_2: nextProps.blocks.block_suscon_mill_2,

            ridgewood_suscon_1: nextProps.blocks.block_ridgewood_suscon_1,
            ridgewood_suscon_2: nextProps.blocks.block_ridgewood_suscon_2,

            wc_ridgewood_3: nextProps.blocks.block_wc_ridgewood_3,
            wc_ridgewood_1: nextProps.blocks.block_wc_ridgewood_1,
            wc_ridgewood_2: nextProps.blocks.block_wc_ridgewood_2,

            sf_wc_1: nextProps.blocks.block_sf_wc_1,
            sf_wc_2: nextProps.blocks.block_sf_wc_2,

            hilburn_sf: nextProps.blocks.block_hilburn_sf,

            sterling_sf: nextProps.blocks.block_sterling_sf,
            sterling_hilburn: nextProps.blocks.block_sterling_hilburn,

            //Yard Leads
            hilburn_yard_west: nextProps.blocks.block_hilburn_yard_west,
            hilburn_yard_east: nextProps.blocks.block_hilburn_yard_east,
            wc_yard: nextProps.blocks.block_wc_yard
        });
    }
    
    render() { 
        return (  
            <div>
                {/* Tags */}
                <div className="wc_yard_tag">Waldwick Yard</div>
                <div className="hilburn_yard_tag">Hilburn Yard</div>

                {/* Symbols */}
                {/* First Row */}
                <div className="symbol_sterling_sf_1">TEST</div>
                <div className="symbol_sterling_hilburn_2">TEST</div>
                <div className="symbol_hilburn_sf_2">TEST</div>
                <div className="symbol_hilburn_yardWest">TEST</div>
                <div className="symbol_hilburn_yardEast">TEST</div>
                <div className="symbol_sf_wc_1">TEST</div>
                <div className="symbol_sf_wc_2">TEST</div>
                <div className="symbol_wc_yard">TEST</div>
                <div className="symbol_wc_ridgewood_1">TEST</div>
                <div className="symbol_wc_ridgewood_2">TEST</div>
                <div className="symbol_wc_ridgewood_3">TEST</div>
                {/* Second Row */}
                <div className="symbol_ridgewood_suscon_1">TEST</div>
                <div className="symbol_ridgewood_suscon_2">TEST</div>
                <div className="symbol_suscon_mill_1">TEST</div>
                <div className="symbol_suscon_mill_2">TEST</div>
                <div className="symbol_mill_westSecaucus_1">TEST</div>
                <div className="symbol_mill_westSecaucus_2">TEST</div>
                <div className="symbol_westSecaucus_laurel_1">TEST</div>
                <div className="symbol_westSecaucus_laurel_2">TEST</div>
                <div className="symbol_laurel_westEnd_4">TEST</div>
                <div className="symbol_laurel_westEnd_3">TEST</div>
                <div className="symbol_laurel_westEnd_1">TEST</div>
                <div className="symbol_laurel_westEnd_2">TEST</div>

                {/* First Row */}
                {/* West End to Laurel */}
                <div className="m_westEnd_laurel_1" style={{background: this.state.westEnd_laurel_2}}></div>
                <div className="m_westEnd_laurel_2" style={{background: this.state.westEnd_laurel_4}}></div>
                <div className="m_westEnd_laurel_3" style={{background: this.state.westEnd_laurel_1}}></div>
                <div className="m_westEnd_laurel_4" style={{background: this.state.westEnd_laurel_3}}></div>

                {/* Laurel to West Secaucus */}
                <div className="m_laurel_westSecaucus_1" style={{background: this.state.laurel_westSecaucus_1}}></div>
                <div className="m_laurel_westSecaucus_2" style={{background: this.state.laurel_westSecaucus_2}}></div>

                {/* West Secaucus To Mill */}
                <div className="m_westSecaucus_mill_1" style={{background: this.state.mill_westSecaucus_1}}></div>
                <div className="m_westSecaucus_mill_2" style={{background: this.state.mill_westSecaucus_2}}></div>

                {/* Mill to Suscon */}
                <div className="m_suscon_mill_1" style={{background: this.state.suscon_mill_1}}></div>
                <div className="m_suscon_mill_2" style={{background: this.state.suscon_mill_2}}></div>

                {/* Suscon to Ridgewood Junction */}
                <div className="m_ridgewood_suscon_1" style={{background: this.state.ridgewood_suscon_1}}></div>
                <div className="m_ridgewood_suscon_2" style={{background: this.state.ridgewood_suscon_2}}></div>

                {/* Ridgewood Junction to Screen */}
                <div className="m_screen_ridgewood_3" style={{background: this.state.wc_ridgewood_3}}></div>
                <div className="m_screen_ridgewood_1" style={{background: this.state.wc_ridgewood_1}}></div>
                <div className="m_screen_ridgewood_2" style={{background: this.state.wc_ridgewood_2}}></div>


                {/* Second Row */}
                {/* Screen to WC */}
                <div className="m_wc_screen_3" style={{background: this.state.wc_ridgewood_3}}></div>
                <div className="m_wc_screen_1" style={{background: this.state.wc_ridgewood_1}}></div>
                <div className="m_wc_screen_2" style={{background: this.state.wc_ridgewood_2}}></div>

                <div className="m_wc_yard " style={{background: this.state.wc_yard}}></div>

                {/* WC to SF */}
                <div className="m_sf_wc_1" style={{background: this.state.sf_wc_1}}></div>
                <div className="m_sf_wc_2" style={{background: this.state.sf_wc_2}}></div>

                {/* SF to Hilburn */}
                <div className="m_hilburn_sf" style={{background: this.state.hilburn_sf}}></div>

                {/* Hilburn Yard */}
                <div className="m_hilburn_yard_west" style={{background: this.state.hilburn_yard_west}}></div>
                <div className="m_hilburn_yard_east" style={{background: this.state.hilburn_yard_east}}></div>

                {/* SF to Sterling [Track 1]*/}
                <div className="m_sterling_sf_1" style={{background: this.state.sterling_sf}}></div>

                {/* Hilburn to Sterling [Track 2] */}
                <div className="m_sterling_hilburn_2" style={{background: this.state.sterling_hilburn}}></div>
            </div>
        );
    }
}
 
export default MainLineTracks;