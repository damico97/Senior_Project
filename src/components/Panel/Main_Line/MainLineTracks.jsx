/**
 * @file MainLineTracks.jsx
 * @author Joey Damico
 * @date September 25, 2019
 * @brief React JSX Component Class that is for The Tracks of the Main Line
 *
 * Extends the React Component Class and is the UI part of the Main Line Tracks,
 * this class controls all the drawings of routes, and also gives a visual reprenstation
 * of that status of the interlocking
 */

// Import React Component
import React, { Component } from 'react';
// Import CSS style sheet
import '../../../css/Main_Line/mainLine.css';


/**
 * The React JSX Component Class for the Tracks in the Main Line portion
 * 
 * This class is a JSX React Component for the Main Line Tracks, this will control all the UI for the comonent,
 * showing what blocks are occupied by a train
 */
class MainLineTracks extends Component {
    /**
     * State
     * @brief Object that holds the state or status information for the component
     * 
     * This object holds all the information for the tracks that is required to display the routes 
     * correctly
     * 
     * Anything that has "this.props." is passed down from the CTC interlocking class
     */
    state = {
        // Symbols
        symbol_sterling_sf_1: this.props.symbols.symbol_sterling_sf_1,
        symbol_sterling_hilburn_2: this.props.symbols.symbol_sterling_hilburn_2,
        symbol_hilburn_sf_2: this.props.symbols.symbol_hilburn_sf_2,
        symbol_hilburn_yardWest: this.props.symbols.symbol_hilburn_yardWest,
        symbol_hilburn_yardEast: this.props.symbols.symbol_hilburn_yardEast,
        symbol_sf_wc_1: this.props.symbols.symbol_sf_wc_1,
        symbol_sf_wc_2: this.props.symbols.symbol_sf_wc_2,
        symbol_wc_yard: this.props.symbols.symbol_wc_yard,
        symbol_wc_ridgewood_1: this.props.symbols.symbol_wc_ridgewood_1,
        symbol_wc_ridgewood_2: this.props.symbols.symbol_wc_ridgewood_2,
        symbol_wc_ridgewood_3: this.props.symbols.symbol_wc_ridgewood_3,
        // Second Row
        symbol_ridgewood_suscon_1: this.props.symbols.symbol_ridgewood_suscon_1,
        symbol_ridgewood_suscon_2: this.props.symbols.symbol_ridgewood_suscon_2,
        symbol_suscon_mill_1: this.props.symbols.symbol_suscon_mill_1,
        symbol_suscon_mill_2: this.props.symbols.symbol_suscon_mill_2,
        symbol_mill_westSecaucus_1: this.props.symbols.symbol_mill_westSecaucus_1,
        symbol_mill_westSecaucus_2: this.props.symbols.symbol_mill_westSecaucus_2,
        symbol_westSecaucus_laurel_1: this.props.symbols.symbol_westSecaucus_laurel_1,
        symbol_westSecaucus_laurel_2: this.props.symbols.symbol_westSecaucus_laurel_2,
        symbol_laurel_westEnd_1: this.props.symbols.symbol_westEnd_laurel_1,
        symbol_laurel_westEnd_2: this.props.symbols.symbol_westEnd_laurel_2,
        symbol_laurel_westEnd_3: this.props.symbols.symbol_westEnd_laurel_3,
        symbol_laurel_westEnd_4: this.props.symbols.symbol_westEnd_laurel_4,

        
        // Blocks
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

    /**
     * componentWillReceiveProps()
     * @brief Function that updates the state of the component
     * 
     * The data that is being changed is passed down from the CTC classes in the simulation backend
     * 
     * @param nextProps, the new data to set the component state too
     */
    componentWillReceiveProps(nextProps){
        this.setState({
            // Symbols
            // Symbols
            symbol_sterling_sf_1: nextProps.symbols.symbol_sterling_sf_1,
            symbol_sterling_hilburn_2: nextProps.symbols.symbol_sterling_hilburn_2,
            symbol_hilburn_sf_2: nextProps.symbols.symbol_hilburn_sf_2,
            symbol_hilburn_yardWest: nextProps.symbols.symbol_hilburn_yardWest,
            symbol_hilburn_yardEast: nextProps.symbols.symbol_hilburn_yardEast,
            symbol_sf_wc_1: nextProps.symbols.symbol_sf_wc_1,
            symbol_sf_wc_2: nextProps.symbols.symbol_sf_wc_2,
            symbol_wc_yard: nextProps.symbols.symbol_wc_yard,
            symbol_wc_ridgewood_1: nextProps.symbols.symbol_wc_ridgewood_1,
            symbol_wc_ridgewood_2: nextProps.symbols.symbol_wc_ridgewood_2,
            symbol_wc_ridgewood_3: nextProps.symbols.symbol_wc_ridgewood_3,
            // Second Row
            symbol_ridgewood_suscon_1: nextProps.symbols.symbol_ridgewood_suscon_1,
            symbol_ridgewood_suscon_2: nextProps.symbols.symbol_ridgewood_suscon_2,
            symbol_suscon_mill_1: nextProps.symbols.symbol_suscon_mill_1,
            symbol_suscon_mill_2: nextProps.symbols.symbol_suscon_mill_2,
            symbol_mill_westSecaucus_1: nextProps.symbols.symbol_mill_westSecaucus_1,
            symbol_mill_westSecaucus_2: nextProps.symbols.symbol_mill_westSecaucus_2,
            symbol_westSecaucus_laurel_1: nextProps.symbols.symbol_westSecaucus_laurel_1,
            symbol_westSecaucus_laurel_2: nextProps.symbols.symbol_westSecaucus_laurel_2,
            symbol_laurel_westEnd_1: nextProps.symbols.symbol_laurel_westEnd_1,
            symbol_laurel_westEnd_2: nextProps.symbols.symbol_laurel_westEnd_2,
            symbol_laurel_westEnd_3: nextProps.symbols.symbol_laurel_westEnd_3,
            symbol_laurel_westEnd_4: nextProps.symbols.symbol_laurel_westEnd_4,

            // Blocks
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
    // ---- END componentWillReceiveProps() ----
    
    /**
     * render()
     * @brief standard React function that draws the interlocking to the screen
     */
    render() { 
        return (  
            <div>
                {/* Tags */}
                <div className="wc_yard_tag">Waldwick Yard</div>
                <div className="hilburn_yard_tag">Hilburn Yard</div>

                {/* Symbols */}
                {/* First Row */}
                <div className="symbol_sterling_sf_1">{this.state.symbol_sterling_sf_1}</div>
                <div className="symbol_sterling_hilburn_2">{this.state.symbol_sterling_hilburn_2}</div>
                <div className="symbol_hilburn_sf_2">{this.state.symbol_hilburn_sf_2}</div>
                <div className="symbol_hilburn_yardWest">{this.state.symbol_hilburn_yardWest}</div>
                <div className="symbol_hilburn_yardEast">{this.state.symbol_hilburn_yardEast}</div>
                <div className="symbol_sf_wc_1">{this.state.symbol_sf_wc_1}</div>
                <div className="symbol_sf_wc_2">{this.state.symbol_sf_wc_2}</div>
                <div className="symbol_wc_yard">{this.state.symbol_wc_yard}</div>
                <div className="symbol_wc_ridgewood_1">{this.state.symbol_wc_ridgewood_1}</div>
                <div className="symbol_wc_ridgewood_2">{this.state.symbol_wc_ridgewood_2}</div>
                <div className="symbol_wc_ridgewood_3">{this.state.symbol_wc_ridgewood_3}</div>
                {/* Second Row */}
                <div className="symbol_ridgewood_suscon_1">{this.state.symbol_ridgewood_suscon_1}</div>
                <div className="symbol_ridgewood_suscon_2">{this.state.symbol_ridgewood_suscon_2}</div>
                <div className="symbol_suscon_mill_1">{this.state.symbol_suscon_mill_1}</div>
                <div className="symbol_suscon_mill_2">{this.state.symbol_suscon_mill_2}</div>
                <div className="symbol_mill_westSecaucus_1">{this.state.symbol_mill_westSecaucus_1}</div>
                <div className="symbol_mill_westSecaucus_2">{this.state.symbol_mill_westSecaucus_2}</div>
                <div className="symbol_westSecaucus_laurel_1">{this.state.symbol_westSecaucus_laurel_1}</div>
                <div className="symbol_westSecaucus_laurel_2">{this.state.symbol_westSecaucus_laurel_2}</div>
                <div className="symbol_laurel_westEnd_4">{this.state.symbol_laurel_westEnd_3}</div>
                <div className="symbol_laurel_westEnd_3">{this.state.symbol_laurel_westEnd_1}</div>
                <div className="symbol_laurel_westEnd_1">{this.state.symbol_laurel_westEnd_2}</div>
                <div className="symbol_laurel_westEnd_2">{this.state.symbol_laurel_westEnd_4}</div>

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
    // ---- END render() ----
}
 
// Export the tracks to be drawn on the screen
export default MainLineTracks;