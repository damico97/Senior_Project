import React, { Component } from 'react';
import '../../../css/Bergen_County_Line/bergenCounty.css';

const Empty = '#999999';
const Route = '#75fa4c';
const Occupied = '#eb3323';

class BergenTracks extends Component {
    state = {  
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

    componentWillReceiveProps(nextProps) {
        this.setState({
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
    render() { 
        return (  
            <div>
                <div className="bt_nysw_tag">NYS&W RR</div>
                <div className="hx_line_tag">Norfolk Southern Croxton Yard</div>

                <div className="b_croxton_1" style={{background: this.state.block_hx_croxton_1}}></div>
                <div className="b_croxton_2" style={{background: this.state.block_hx_croxton_2}}></div>

                <div className="b_laurel_hx_1_west" style={{background: this.state.block_hx_laurel_1}}></div>
                <div className="b_laurel_hx_1_diag" style={{background: this.state.block_hx_laurel_1}}></div>
                <div className="b_laurel_hx_1_east" style={{background: this.state.block_hx_laurel_1}}></div>
                <div className="b_laurel_hx_2_west" style={{background: this.state.block_hx_laurel_2}}></div>
                <div className="b_laurel_hx_2_diag" style={{background: this.state.block_hx_laurel_2}}></div>
                <div className="b_laurel_hx_2_east" style={{background: this.state.block_hx_laurel_2}}></div>

                <div className="b_hx_pascack_1" style={{background: this.state.block_pascack_hx_1}}></div>
                <div className="b_hx_pascack_2" style={{background: this.state.block_pascack_hx_2}}></div>

                <div className="b_pascack_bt_1" style={{background: this.state.block_bt_pascack_1}}></div>
                <div className="b_pascack_bt_2" style={{background: this.state.block_bt_pascack_2}}></div>

                <div className="b_nysw" style={{background: this.state.block_bt_nysw}}></div>

                <div className="b_bt_ridgewood_1_east" style={{background: this.state.block_ridgewood_bt_1}}></div>
                <div className="b_bt_ridgewood_1_diag" style={{background: this.state.block_ridgewood_bt_1}}></div>
                <div className="b_bt_ridgewood_1_west" style={{background: this.state.block_ridgewood_bt_1}}></div>
                <div className="b_bt_ridgewood_2_east" style={{background: this.state.block_ridgewood_bt_2}}></div>
                <div className="b_bt_ridgewood_2_diag" style={{background: this.state.block_ridgewood_bt_2}}></div>
                <div className="b_bt_ridgewood_2_west" style={{background: this.state.block_ridgewood_bt_2}}></div>
            </div>
        );
    }
}
 
export default BergenTracks;