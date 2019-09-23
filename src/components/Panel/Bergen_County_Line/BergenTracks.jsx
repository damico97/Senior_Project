/**
 * @file BergenTracks.jsx
 * @author Joey Damico
 * @date September 25, 2019
 * @brief React JSX Component Class that is for The Tracks of the Bergen County Line
 *
 * Extends the React Component Class and is the UI part of the Bergen County Line Tracks,
 * this class controls all the drawings of routes, and also gives a visual reprenstation
 * of that status of the interlocking
 */

// Import React Component
import React, { Component } from 'react';
// Import CSS style sheet
import '../../../css/Bergen_County_Line/bergenCounty.css';


/**
 * CLASS BergenTracks
 * @brief The React JSX Component Class for the Tracks in the Bergen County Line portion
 * 
 * This class is a JSX React Component for the Bergen County Line Tracks, this will control all the UI for the comonent,
 * showing what blocks are occupied by a train
 */
class BergenTracks extends Component {
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
        symbol_ridgewood_bt_1: this.props.symbols.symbol_ridgewood_bt_1,
        symbol_ridgewood_bt_2: this.props.symbols.symbol_ridgewood_bt_2,
        symbol_bt_pascack_1: this.props.symbols.symbol_bt_pascack_1,
        symbol_bt_pascack_2: this.props.symbols.symbol_bt_pascack_2,
        symbol_bt_nysw: this.props.symbols.symbol_bt_nysw,
        symbol_pascack_hx_1: this.props.symbols.symbol_pascack_hx_1,
        symbol_pascack_hx_2: this.props.symbols.symbol_pascack_hx_2,
        symbol_hx_laurel_1: this.props.symbols.symbol_hx_laurel_1,
        symbol_hx_laurel_2: this.props.symbols.symbol_hx_laurel_2,
        symbol_hx_croxton_1: this.props.symbols.symbol_hx_croxton_1,
        symbol_hx_croxton_2: this.props.symbols.symbol_hx_croxton_2,

        // Blocks
        block_hx_laurel_1: this.props.blocks.block_hx_laurel_1,
        block_hx_laurel_2: this.props.blocks.block_hx_laurel_2,

        block_pascack_hx_1: this.props.blocks.block_pascack_hx_1,
        block_pascack_hx_2: this.props.blocks.block_pascack_hx_2,

        block_bt_pascack_1: this.props.blocks.block_bt_pascack_1,
        block_bt_pascack_2: this.props.blocks.block_bt_pascack_2,

        block_ridgewood_bt_1: this.props.blocks.block_ridgewood_bt_1,
        block_ridgewood_bt_2: this.props.blocks.block_ridgewood_bt_2,

        block_bt_nysw: this.props.blocks.block_bt_nysw,
        block_hx_croxton_1: this.props.blocks.block_hx_croxton_1,
        block_hx_croxton_1: this.props.blocks.block_hx_croxton_2
    };

    /**
     * componentWillReceiveProps()
     * @brief Function that updates the state of the component
     * 
     * The data that is being changed is passed down from the CTC classes in the simulation backend
     * 
     * @param nextProps, the new data to set the component state too
     */
    componentWillReceiveProps(nextProps) {
        this.setState({
            // Symbols
            symbol_ridgewood_bt_1: nextProps.symbols.symbol_ridgewood_bt_1,
            symbol_ridgewood_bt_2: nextProps.symbols.symbol_ridgewood_bt_2,
            symbol_bt_pascack_1: nextProps.symbols.symbol_bt_pascack_1,
            symbol_bt_pascack_2: nextProps.symbols.symbol_bt_pascack_2,
            symbol_bt_nysw: nextProps.symbols.symbol_bt_nysw,
            symbol_pascack_hx_1: nextProps.symbols.symbol_pascack_hx_1,
            symbol_pascack_hx_2: nextProps.symbols.symbol_pascack_hx_2,
            symbol_hx_laurel_1: nextProps.symbols.symbol_hx_laurel_1,
            symbol_hx_laurel_2: nextProps.symbols.symbol_hx_laurel_2,
            symbol_hx_croxton_1: nextProps.symbols.symbol_hx_croxton_1,
            symbol_hx_croxton_2: nextProps.symbols.symbol_hx_croxton_2,

            // Blocks
            block_hx_laurel_1: nextProps.blocks.block_hx_laurel_1,
            block_hx_laurel_2: nextProps.blocks.block_hx_laurel_2,

            block_pascack_hx_1: nextProps.blocks.block_pascack_hx_1,
            block_pascack_hx_2: nextProps.blocks.block_pascack_hx_2,

            block_bt_pascack_1: nextProps.blocks.block_bt_pascack_1,
            block_bt_pascack_2: nextProps.blocks.block_bt_pascack_2,

            block_ridgewood_bt_1: nextProps.blocks.block_ridgewood_bt_1,
            block_ridgewood_bt_2: nextProps.blocks.block_ridgewood_bt_2,
            
            block_bt_nysw: nextProps.blocks.block_bt_nysw,
            block_hx_croxton_1: nextProps.blocks.block_hx_croxton_1,
            block_hx_croxton_2: nextProps.blocks.block_hx_croxton_2
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
                <div className="bt_nysw_tag">NYS&W RR</div>
                <div className="hx_line_tag">Norfolk Southern Croxton Yard</div>

                {/* Symbols */}
                <div className="symbol_ridgewood_bt_1">{this.state.symbol_ridgewood_bt_1}</div>
                <div className="symbol_ridgewood_bt_2">{this.state.symbol_ridgewood_bt_2}</div>
                <div className="symbol_bt_pascack_1">{this.state.symbol_bt_pascack_1}</div>
                <div className="symbol_bt_pascack_2">{this.state.symbol_bt_pascack_2}</div>
                <div className="symbol_bt_nysw">{this.state.symbol_bt_nysw}</div>
                <div className="symbol_pascack_hx_1">{this.state.symbol_pascack_hx_1}</div>
                <div className="symbol_pascack_hx_2">{this.state.symbol_pascack_hx_2}</div>
                <div className="symbol_hx_laurel_1">{this.state.symbol_hx_laurel_1}</div>
                <div className="symbol_hx_laurel_2">{this.state.symbol_hx_laurel_2}</div>
                <div className="symbol_hx_croxton_1">{this.state.symbol_hx_croxton_1}</div>
                <div className="symbol_hx_croxton_2">{this.state.symbol_hx_croxton_2}</div>

                {/* Tracks */}
                {/* Yard Leads */}
                <div className="b_croxton_1" style={{background: this.state.block_hx_croxton_1}}></div>
                <div className="b_croxton_2" style={{background: this.state.block_hx_croxton_2}}></div>
                <div className="b_nysw" style={{background: this.state.block_bt_nysw}}></div>

                {/* Laurel to HX */}
                <div className="b_laurel_hx_1_west" style={{background: this.state.block_hx_laurel_1}}></div>
                <div className="b_laurel_hx_1_diag" style={{background: this.state.block_hx_laurel_1}}></div>
                <div className="b_laurel_hx_1_east" style={{background: this.state.block_hx_laurel_1}}></div>
                <div className="b_laurel_hx_2_west" style={{background: this.state.block_hx_laurel_2}}></div>
                <div className="b_laurel_hx_2_diag" style={{background: this.state.block_hx_laurel_2}}></div>
                <div className="b_laurel_hx_2_east" style={{background: this.state.block_hx_laurel_2}}></div>

                {/* HX to Pascack Junction */}
                <div className="b_hx_pascack_1" style={{background: this.state.block_pascack_hx_1}}></div>
                <div className="b_hx_pascack_2" style={{background: this.state.block_pascack_hx_2}}></div>

                {/* Pascack Junction to BT */}
                <div className="b_pascack_bt_1" style={{background: this.state.block_bt_pascack_1}}></div>
                <div className="b_pascack_bt_2" style={{background: this.state.block_bt_pascack_2}}></div>

                {/* BT to Ridgewood Junction */}
                <div className="b_bt_ridgewood_1_east" style={{background: this.state.block_ridgewood_bt_1}}></div>
                <div className="b_bt_ridgewood_1_diag" style={{background: this.state.block_ridgewood_bt_1}}></div>
                <div className="b_bt_ridgewood_1_west" style={{background: this.state.block_ridgewood_bt_1}}></div>
                <div className="b_bt_ridgewood_2_east" style={{background: this.state.block_ridgewood_bt_2}}></div>
                <div className="b_bt_ridgewood_2_diag" style={{background: this.state.block_ridgewood_bt_2}}></div>
                <div className="b_bt_ridgewood_2_west" style={{background: this.state.block_ridgewood_bt_2}}></div>
            </div>
        );
    }
    // ---- END render() ----
}
 
// Export the tracks to be drawn on the screen
export default BergenTracks;