import React, { Component } from 'react';

import Clock from '../../scripts/Trains/clock.js';

import MaineLine_CTC from '../../scripts/CTC/mainLine_ctc.js';
import Train from '../../scripts/Trains/train.js';

import MainLineTracks from '../Panel/Main_Line/MainLineTracks.jsx';
import Hilburn from '../Panel/Main_Line/Hilburn.jsx';
import SF from '../Panel/Main_Line/SF.jsx';
import WC from '../Panel/Main_Line/WC.jsx';
import RidgewoodJunction from '../Panel/Main_Line/RidgewoodJunction.jsx';
import Suscon from '../Panel/Main_Line/Suscon.jsx';
import Mill from '../Panel/Main_Line/Mill.jsx';
import WestSecaucus from '../Panel/Main_Line/WestSecaucus.jsx';
import Laurel from '../Panel/Main_Line/Laurel.jsx';

import BergenTracks from '../Panel/Bergen_County_Line/BergenTracks.jsx';
import BT from '../Panel/Bergen_County_Line/BT.jsx';
import PascackJunction from '../Panel/Bergen_County_Line/PascackJct.jsx';
import HX from '../Panel/Bergen_County_Line/HX.jsx';

import SouthernTierTracks from '../Panel/Southern_Tier_Line/SouthernTierTracks.jsx';
import Sparrow from '../Panel/Southern_Tier_Line/Sparrow.jsx';
import PA from '../Panel/Southern_Tier_Line/PA.jsx';
import Port from '../Panel/Southern_Tier_Line/Port.jsx';
import BC from '../Panel/Southern_Tier_Line/BC.jsx';
import OV from '../Panel/Southern_Tier_Line/OV.jsx';
import Howells from '../Panel/Southern_Tier_Line/Howells.jsx';
import Hall from '../Panel/Southern_Tier_Line/Hall.jsx';
import HudsonJunction from '../Panel/Southern_Tier_Line/HudsonJunction.jsx';
import CentralValley from '../Panel/Southern_Tier_Line/CentralValley.jsx';
import Harriman from '../Panel/Southern_Tier_Line/Harriman.jsx';
import Sterling from '../Panel/Southern_Tier_Line/Sterling.jsx';

const Empty = '#999999';
const Route = '#75fa4c';
const Occupied = '#eb3323';


var clock = new Clock();
var ctc = new MaineLine_CTC(clock);

clock.startClock;

//ctc.add_train(new Train("49", "1_suscon_mill", "suscon", 10));

setTimeout(function(){ 
    ctc.add_train(new Train("49", "3_yardEast_port", "mill", "EAST", 8));
    //ctc.add_train(new Train("50", "1_laurel_westEnd", "mill", "WEST", 8));
    //ctc.add_train(new Train("50", "1_pascack_hx", "mill", "WEST", 6));
    ctc.test_block(); 
}, 1500);  


class MainLine extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            status_sparrow: ctc.get_sparrow().get_interlocking_status(),
            status_pa: ctc.get_pa().get_interlocking_status(),
            status_port: ctc.get_port().get_interlocking_status(),  
            status_bc: ctc.get_bc().get_interlocking_status(),
            status_ov: ctc.get_ov().get_interlocking_status(),
            status_howells: ctc.get_howells().get_interlocking_status(),
            status_hall: ctc.get_hall().get_interlocking_status(),
            status_hudson: ctc.get_hudson().get_interlocking_status(),
            status_valley: ctc.get_valley().get_interlocking_status(),
            status_harriman: ctc.get_harriman().get_interlocking_status(),
            status_sterling: ctc.get_sterling().get_interlocking_status(),

            status_hilburn: ctc.get_hilburn().get_interlocking_status(),
            status_sf: ctc.get_sf().get_interlocking_status(),
            status_wc: ctc.get_wc().get_interlocking_status(),
            status_ridgewood: ctc.get_ridgewood().get_interlocking_status(),
            status_suscon: ctc.get_suscon().get_interlocking_status(),
            status_mill: ctc.get_mill().get_interlocking_status(),
            status_westSecaucus: ctc.get_westSecaucus().get_interlocking_status(),
            status_laurel: ctc.get_laurel().get_interlocking_status(),

            status_bt: ctc.get_bt().get_interlocking_status(),
            status_pascack: ctc.get_pascack().get_interlocking_status(),
            status_hx: ctc.get_hx().get_interlocking_status(),

            status_mainLine: ctc.get_mainLine_blocks_status(),
            status_bergenLine: ctc.get_bergen_blocks_status(),
            status_tier: ctc.get_tier_block_status()
        };
    }

    update_blocks = () => {
        ctc.update_route_blocks();
        ctc.test_block();
        this.setState({
            status_mainLine: ctc.get_mainLine_blocks_status(),
            status_bergenLine: ctc.get_bergen_blocks_status(),
            status_tier: ctc.get_tier_block_status(),
        });
    }

    update_trains = () => {
        ctc.update_trains();
        ctc.update_interlockings();
        this.setState({
            status_mainLine: ctc.get_mainLine_blocks_status(),
            status_bergenLine: ctc.get_bergen_blocks_status(),
            status_tier: ctc.get_tier_block_status(),
        
            status_sparrow: ctc.get_sparrow().get_interlocking_status(),
            status_pa: ctc.get_pa().get_interlocking_status(),
            status_port: ctc.get_port().get_interlocking_status(),  
            status_bc: ctc.get_bc().get_interlocking_status(),
            status_ov: ctc.get_ov().get_interlocking_status(),
            status_howells: ctc.get_howells().get_interlocking_status(),
            status_hall: ctc.get_hall().get_interlocking_status(),
            status_hudson: ctc.get_hudson().get_interlocking_status(),
            status_valley: ctc.get_valley().get_interlocking_status(),
            status_harriman: ctc.get_harriman().get_interlocking_status(),
            status_sterling: ctc.get_sterling().get_interlocking_status(),

            status_hilburn: ctc.get_hilburn().get_interlocking_status(),
            status_sf: ctc.get_sf().get_interlocking_status(),
            status_wc: ctc.get_wc().get_interlocking_status(),
            status_ridgewood: ctc.get_ridgewood().get_interlocking_status(),
            status_suscon: ctc.get_suscon().get_interlocking_status(),
            status_mill: ctc.get_mill().get_interlocking_status(),
            status_westSecaucus: ctc.get_westSecaucus().get_interlocking_status(),

            status_bt: ctc.get_bt().get_interlocking_status(),
            status_pascack: ctc.get_pascack().get_interlocking_status(),
            status_hx: ctc.get_hx().get_interlocking_status(),
        });
    }

    componentDidMount() {
        this.interval = setInterval(() => this.update_blocks(), 1000);
        this.interval_2 = setInterval(() => this.update_trains(), 2000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() { 
        return (  
            <div>
                <SouthernTierTracks 
                    blocks={this.state.status_tier}
                />
                <Sparrow 
                    status={this.state.status_sparrow}
                    click_sig_2w_1={this.sparrow_click_sig_2w_1}
                    click_sig_2w_2={this.sparrow_click_sig_2w_2}
                    click_sig_2w_3={this.sparrow_click_sig_2w_3}
                    click_sig_2e={this.sparrow_click_sig_2e}
                    throw_sw_1={this.sparrow_throw_sw_1}
                    throw_sw_3={this.sparrow_throw_sw_3}
                />
                <PA 
                    status={this.state.status_pa}
                    click_sig_2w_1={this.pa_click_sig_2w_1}
                    click_sig_2w_2={this.pa_click_sig_2w_2}
                    click_sig_4w={this.pa_click_sig_4w}
                    click_sig_2e={this.pa_click_sig_2e}
                    click_sig_4e={this.pa_click_sig_4e}
                    throw_sw_1={this.pa_throw_sw_1}
                    throw_sw_3={this.pa_throw_sw_3}
                />
                <Port 
                    status={this.state.status_port}
                    click_sig_2w={this.port_click_sig_2w}
                    click_sig_2e_1={this.port_click_sig_2e_1}
                    click_sig_2e_2={this.port_click_sig_2e_2}
                    throw_sw_1={this.port_throw_sw_1}
                />
                <BC 
                    status={this.state.status_bc}
                    click_sig_2w={this.bc_click_sig_2w}
                    click_sig_2e={this.bc_click_sig_2e}
                    click_sig_4e={this.bc_click_sig_4e}
                    throw_sw_1={this.bc_throw_sw_1}
                />
                <OV 
                    status={this.state.status_ov}
                    click_sig_2w={this.ov_click_sig_2w}
                    click_sig_2ws={this.ov_click_sig_2ws}
                    click_sig_2e={this.ov_click_sig_2e}
                    throw_sw_1={this.ov_throw_sw_1}
                />
                <Howells 
                    status={this.state.status_howells}
                    click_sig_2w={this.howells_click_sig_2w}
                    click_sig_2e={this.howells_click_sig_2e}
                    click_sig_2es={this.howells_click_sig_2es}
                    throw_sw_3={this.howells_throw_sw_3}
                />
                <Hall 
                    status={this.state.status_hall}
                    click_sig_2w={this.hall_click_sig_2w}
                    click_sig_4w={this.hall_click_sig_4w}
                    click_sig_2e={this.hall_click_sig_2e}
                    click_sig_4e={this.hall_click_sig_4e}
                    throw_sw_1={this.hall_throw_sw_1}
                />
                <HudsonJunction 
                    status={this.state.status_hudson}
                    click_sig_2w={this.hudson_click_sig_2w}
                    click_sig_2ws={this.hudson_click_sig_2ws}
                    click_sig_2e={this.hudson_click_sig_2e}
                    click_sig_2es={this.hudson_click_sig_2es}
                    throw_sw_1={this.hudson_throw_sw_1}
                    throw_sw_3={this.hudson_throw_sw_3}
                />
                <CentralValley 
                    status={this.state.status_valley}
                    click_sig_1w={this.valley_click_sig_1w}
                    click_sig_2w={this.valley_click_sig_2w}
                    click_sig_1e={this.valley_click_sig_1e}
                    throw_sw_21={this.valley_throw_sw_21}
                />
                <Harriman 
                    status={this.state.status_harriman}
                    click_sig_1w={this.harriman_click_sig_1w}
                    click_sig_1e={this.harriman_click_sig_1e}
                    click_sig_2e={this.harriman_click_sig_2e}
                    click_sig_3e={this.harriman_click_sig_3e}
                    throw_sw_21={this.harriman_throw_sw_21}
                    throw_sw_32={this.harriman_throw_sw_32}
                />
                <Sterling 
                    status={this.state.status_sterling}
                    click_sig_2w={this.sterling_click_sig_2w}
                    click_sig_2ws={this.sterling_click_sig_2ws}
                    click_sig_1e={this.sterling_click_sig_1e}
                    throw_sw_21={this.sterling_throw_sw_21}
                />


                <BergenTracks 
                    blocks={this.state.status_bergenLine}
                />
                <BT 
                    status={this.state.status_bt}
                    click_sig_2w1={this.bt_click_sig_2w1}
                    click_sig_2w2={this.bt_click_sig_2w2}
                    click_sig_4w={this.bt_click_sig_4w}
                    click_sig_2e={this.bt_click_sig_2e}
                    click_sig_4e={this.bt_click_sig_4e}
                    throw_sw_1={this.bt_throw_sw_1}
                    throw_sw_3={this.bt_throw_sw_3}
                    throw_sw_5={this.bt_throw_sw_5}
                />
                <PascackJunction 
                    status={this.state.status_pascack}
                    click_sig_2w={this.pascack_click_sig_2w}
                    click_sig_4w={this.pascack_click_sig_4w}
                    click_sig_2e={this.pascack_click_sig_2e}
                    click_sig_4e={this.pascack_click_sig_4e}
                    throw_sw_1={this.pascack_throw_sw_1}
                    throw_sw_3={this.pascack_throw_sw_3}
                />
                <HX 
                    status={this.state.status_hx}
                    click_sig_2w1={this.hx_click_sig_2w1}
                    click_sig_2w2={this.hx_click_sig_2w2}
                    click_sig_2w3={this.hx_click_sig_2w3}
                    click_sig_4w={this.hx_click_sig_4w}
                    click_sig_2e={this.hx_click_sig_2e}
                    click_sig_4e={this.hx_click_sig_4e}
                    throw_sw_1={this.hx_throw_sw_1}
                    throw_sw_3={this.hx_throw_sw_3}
                    throw_sw_5={this.hx_throw_sw_5}
                />


                <MainLineTracks 
                    blocks={this.state.status_mainLine}
                />
                <Hilburn 
                    status={this.state.status_hilburn}
                    click_sig_2w_1={this.hilburn_click_sig_2w_1}
                    click_sig_2w_2={this.hilburn_click_sig_2w_2}
                    click_sig_2e={this.hilburn_click_sig_2e}
                    click_sig_4e={this.hilburn_click_sig_4e}
                    throw_sw_1={this.hilburn_throw_sw_1}
                />
                <SF 
                    status={this.state.status_sf}
                    click_sig_2w={this.sf_click_sig_2w}
                    click_sig_4w={this.sf_click_sig_4w}
                    click_sig_2e={this.sf_click_sig_2e}
                    click_sig_4e_1={this.sf_click_sig_4e_1}
                    click_sig_4e_2={this.sf_click_sig_4e_2}
                    throw_sw_1={this.sf_throw_sw_1}
                    throw_sw_3={this.sf_throw_sw_3}
                />
                <WC 
                    status={this.state.status_wc}
                    click_sig_2w_1={this.wc_click_sig_2w_1}
                    click_sig_2w_2={this.wc_click_sig_2w_2}
                    click_sig_4w={this.wc_click_sig_4w}
                    click_sig_2e_1={this.wc_click_sig_2e_1}
                    click_sig_2e_2={this.wc_click_sig_2e_2}
                    click_sig_4e={this.wc_click_sig_4e}
                    throw_sw_1={this.wc_throw_sw_1}
                    throw_sw_3={this.wc_throw_sw_3}
                    throw_sw_5={this.wc_throw_sw_5}
                    throw_sw_7={this.wc_throw_sw_7}
                />
                <RidgewoodJunction 
                    status={this.state.status_ridgewood}
                    click_sig_2w_1={this.ridgewood_click_sig_2w_1}
                    click_sig_2w_2={this.ridgewood_click_sig_2w_2}
                    click_sig_4w={this.ridgewood_click_sig_4w}
                    click_sig_6w={this.ridgewood_click_sig_6w}
                    click_sig_2e={this.ridgewood_click_sig_2e}
                    click_sig_4e={this.ridgewood_click_sig_4e}
                    click_sig_6e={this.ridgewood_click_sig_6e}
                    throw_sw_1={this.ridgewood_throw_sw_1}
                    throw_sw_3={this.ridgewood_throw_sw_3}
                    throw_sw_5={this.ridgewood_throw_sw_5}
                    throw_sw_7={this.ridgewood_throw_sw_7}
                    throw_sw_9={this.ridgewood_throw_sw_9}
                />
                <Suscon 
                    status={this.state.status_suscon} 
                    click_sig_2w={this.suscon_click_sig_2w}
                    click_sig_2e={this.suscon_click_sig_2e}
                    click_sig_4w={this.suscon_click_sig_4w}
                    click_sig_4e={this.suscon_click_sig_4e}
                    throw_sw_1={this.suscon_throw_sw_1} 
                    throw_sw_3={this.suscon_throw_sw_3}
                />
                <Mill 
                    status={this.state.status_mill}
                    click_sig_2w={this.mill_click_sig_2w}
                    click_sig_2e={this.mill_click_sig_2e}
                    click_sig_4w={this.mill_click_sig_4w}
                    click_sig_4e={this.mill_click_sig_4e}
                    throw_sw_1={this.mill_throw_sw_1}
                    throw_sw_3={this.mill_throw_sw_3}
                />
                <WestSecaucus 
                    status={this.state.status_westSecaucus}
                    click_sig_2w={this.westSecaucus_click_sig_2w}
                    click_sig_2e={this.westSecaucus_click_sig_2e}
                    click_sig_4w={this.westSecaucus_click_sig_4w}
                    click_sig_4e={this.westSecaucus_click_sig_4e}
                    throw_sw_1={this.westSecaucus_throw_sw_1}
                    throw_sw_3={this.westSecaucus_throw_sw_3}
                />
                <Laurel 
                    status={this.state.status_laurel}
                    click_sig_2w={this.laurel_click_sig_2w}
                    click_sig_4w={this.laurel_click_sig_4w}
                    click_sig_8w={this.laurel_click_sig_8w}
                    click_sig_10w={this.laurel_click_sig_10w}
                    click_sig_6e={this.laurel_click_sig_6e}
                    click_sig_12e={this.laurel_click_sig_12e}
                    click_sig_4e={this.laurel_click_sig_4e}
                    click_sig_8e={this.laurel_click_sig_8e}
                    throw_sw_1={this.laurel_throw_sw_1}
                    throw_sw_3={this.laurel_throw_sw_3}
                    throw_sw_7={this.laurel_throw_sw_7}
                    throw_sw_9={this.laurel_throw_sw_9}
                    throw_sw_11={this.laurel_throw_sw_11}
                    throw_sw_13={this.laurel_throw_sw_13}
                />
            </div>
        );
    }

    hx_click_sig_2w1 = () => {
        ctc.get_hx().click_sig_2w1(
            this.state.status_bergenLine.block_pascack_hx_1,
            this.state.status_bergenLine.block_pascack_hx_2
        );
        this.setState({status_hx: ctc.get_hx().get_interlocking_status()});
    }

    hx_click_sig_2w2 = () => {
        ctc.get_hx().click_sig_2w2(
            this.state.status_bergenLine.block_pascack_hx_1,
            this.state.status_bergenLine.block_pascack_hx_2
        );
        this.setState({status_hx: ctc.get_hx().get_interlocking_status()});
    }

    hx_click_sig_2w3 = () => {
        ctc.get_hx().click_sig_2w3(
            this.state.status_bergenLine.block_pascack_hx_1,
            this.state.status_bergenLine.block_pascack_hx_2
        );
        this.setState({status_hx: ctc.get_hx().get_interlocking_status()});
    }

    hx_click_sig_4w = () => {
        ctc.get_hx().click_sig_4w(
            this.state.status_bergenLine.block_pascack_hx_2
        );
        this.setState({status_hx: ctc.get_hx().get_interlocking_status()});
    }

    hx_click_sig_2e = () => {
        ctc.get_hx().click_sig_2e(
            this.state.status_bergenLine.block_hx_laurel_1,
            this.state.status_bergenLine.block_hx_croxton_2,
            this.state.status_bergenLine.block_hx_croxton_1
        );
        this.setState({status_hx: ctc.get_hx().get_interlocking_status()});
    }

    hx_click_sig_4e = () => {
        ctc.get_hx().click_sig_4e(
            this.state.status_bergenLine.block_hx_laurel_1,
            this.state.status_bergenLine.block_hx_laurel_2,
            this.state.status_bergenLine.block_hx_croxton_2,
            this.state.status_bergenLine.block_hx_croxton_1
        );
        this.setState({status_hx: ctc.get_hx().get_interlocking_status()});
    }

    hx_throw_sw_1 = () => {
        ctc.get_hx().throw_sw_1();
        this.setState({status_hx: ctc.get_hx().get_interlocking_status()});
    }

    hx_throw_sw_3 = () => {
        ctc.get_hx().throw_sw_3();
        this.setState({status_hx: ctc.get_hx().get_interlocking_status()});
    }

    hx_throw_sw_5 = () => {
        ctc.get_hx().throw_sw_5();
        this.setState({status_hx: ctc.get_hx().get_interlocking_status()});
    }



    pascack_click_sig_2w = () => {
        ctc.get_pascack().click_sig_2w(
            this.state.status_bergenLine.block_bt_pascack_1,
            this.state.status_bergenLine.block_bt_pascack_2
        );
        this.setState({status_pascack: ctc.get_pascack().get_interlocking_status()});
    }

    pascack_click_sig_4w = () => {
        ctc.get_pascack().click_sig_4w(
            this.state.status_bergenLine.block_bt_pascack_1,
            this.state.status_bergenLine.block_bt_pascack_2
        );
        this.setState({status_pascack: ctc.get_pascack().get_interlocking_status()});
    }

    pascack_click_sig_2e = () => {
        ctc.get_pascack().click_sig_2e(
            this.state.status_bergenLine.block_pascack_hx_1,
            this.state.status_bergenLine.block_pascack_hx_2
        );
        this.setState({status_pascack: ctc.get_pascack().get_interlocking_status()});
    }

    pascack_click_sig_4e = () => {
        ctc.get_pascack().click_sig_4e(
            this.state.status_bergenLine.block_pascack_hx_1,
            this.state.status_bergenLine.block_pascack_hx_2
        );
        this.setState({status_pascack: ctc.get_pascack().get_interlocking_status()});
    }

    pascack_throw_sw_1 = () => {
        ctc.get_pascack().throw_sw_1();
        this.setState({status_pascack: ctc.get_pascack().get_interlocking_status()});
    }

    pascack_throw_sw_3 = () => {
        ctc.get_pascack().throw_sw_3();
        this.setState({status_pascack: ctc.get_pascack().get_interlocking_status()});
    }



    bt_click_sig_2w1 = () => {
        ctc.get_bt().click_sig_2w1(
            this.state.status_bergenLine.block_ridgewood_bt_1,
            this.state.status_bergenLine.block_ridgewood_bt_2
        );
        this.setState({status_bt: ctc.get_bt().get_interlocking_status()});
    }

    bt_click_sig_2w2 = () => {
        ctc.get_bt().click_sig_2w2(
            this.state.status_bergenLine.block_ridgewood_bt_1,
            this.state.status_bergenLine.block_ridgewood_bt_2
        );
        this.setState({status_bt: ctc.get_bt().get_interlocking_status()});
    }

    bt_click_sig_4w = () => {
        ctc.get_bt().click_sig_4w(
            this.state.status_bergenLine.block_ridgewood_bt_1,
            this.state.status_bergenLine.block_ridgewood_bt_2
        );
        this.setState({status_bt: ctc.get_bt().get_interlocking_status()});
    }

    bt_click_sig_2e = () => {
        ctc.get_bt().click_sig_2e(
            this.state.status_bergenLine.block_bt_pascack_1,
            this.state.status_bergenLine.block_bt_pascack_2,
            this.state.status_bergenLine.block_bt_nysw
        );
        this.setState({status_bt: ctc.get_bt().get_interlocking_status()});
    }

    bt_click_sig_4e = () => {
        ctc.get_bt().click_sig_4e(
            this.state.status_bergenLine.block_bt_pascack_1,
            this.state.status_bergenLine.block_bt_pascack_2,
            this.state.status_bergenLine.block_bt_nysw
        );
        this.setState({status_bt: ctc.get_bt().get_interlocking_status()});
    }

    bt_throw_sw_1 = () => {
        ctc.get_bt().throw_sw_1();
        this.setState({status_bt: ctc.get_bt().get_interlocking_status()});
    }

    bt_throw_sw_3 = () => {
        ctc.get_bt().throw_sw_3();
        this.setState({status_bt: ctc.get_bt().get_interlocking_status()});
    }

    bt_throw_sw_5 = () => {
        ctc.get_bt().throw_sw_5();
        this.setState({status_bt: ctc.get_bt().get_interlocking_status()});
    }



    sparrow_click_sig_2w_1 = () => {
        ctc.get_sparrow().click_sig_2w_1(
            this.state.status_tier.block_bingo_sparrow
        );
        this.setState({status_sparrow: ctc.get_sparrow().get_interlocking_status()});
    }

    sparrow_click_sig_2w_2 = () => {
        ctc.get_sparrow().click_sig_2w_2(
            this.state.status_tier.block_bingo_sparrow
        );
        this.setState({status_sparrow: ctc.get_sparrow().get_interlocking_status()});
    }

    sparrow_click_sig_2w_3 = () => {
        ctc.get_sparrow().click_sig_2w_3(
            this.state.status_tier.block_bingo_sparrow
        );
        this.setState({status_sparrow: ctc.get_sparrow().get_interlocking_status()});
    }

    sparrow_click_sig_2e = () => {
        ctc.get_sparrow().click_sig_2e(
            this.state.status_tier.block_sparrow_pa_1,
            this.state.status_tier.block_sparrow_pa_2,
            this.state.status_tier.block_sparrow_cripple
        );
        this.setState({status_sparrow: ctc.get_sparrow().get_interlocking_status()});
    }

    sparrow_throw_sw_1 = () => {
        ctc.get_sparrow().throw_sw_1();
        this.setState({status_sparrow: ctc.get_sparrow().get_interlocking_status()});
    }

    sparrow_throw_sw_3 = () => {
        ctc.get_sparrow().throw_sw_3();
        this.setState({status_sparrow: ctc.get_sparrow().get_interlocking_status()});
    }



    pa_click_sig_2w_1 = () => {
        ctc.get_pa().click_sig_2w_1(
            this.state.status_tier.block_sparrow_pa_1,
            this.state.status_tier.block_sparrow_pa_2,
            this.state.status_tier.block_buckleys_west
        );
        this.setState({status_pa: ctc.get_pa().get_interlocking_status()});
    }

    pa_click_sig_2w_2 = () => {
        ctc.get_pa().click_sig_2w_2(
            this.state.status_tier.block_sparrow_pa_1,
            this.state.status_tier.block_sparrow_pa_2,
            this.state.status_tier.block_buckleys_west
        );
        this.setState({status_pa: ctc.get_pa().get_interlocking_status()});
    }

    pa_click_sig_4w = () => {
        ctc.get_pa().click_sig_4w(
            this.state.status_tier.block_sparrow_pa_2,
            this.state.status_tier.block_buckleys_west
        );
        this.setState({status_pa: ctc.get_pa().get_interlocking_status()});
    }

    pa_click_sig_2e = () => {
        ctc.get_pa().click_sig_2e(
            this.state.status_tier.block_pa_port_1,
            this.state.status_tier.block_port_yard_west
        );
        this.setState({status_pa: ctc.get_pa().get_interlocking_status()});
    }

    pa_click_sig_4e = () => {
        ctc.get_pa().click_sig_4e(
            this.state.status_tier.block_pa_port_1,
            this.state.status_tier.block_pa_bc_2,
            this.state.status_tier.block_port_yard_west
        );
        this.setState({status_pa: ctc.get_pa().get_interlocking_status()});
    }

    pa_throw_sw_1 = () => {
        ctc.get_pa().throw_sw_1();
        this.setState({status_pa: ctc.get_pa().get_interlocking_status()});
    }

    pa_throw_sw_3 = () => {
        ctc.get_pa().throw_sw_3();
        this.setState({status_pa: ctc.get_pa().get_interlocking_status()});
    }



    port_click_sig_2w = () => {
        ctc.get_port().click_sig_2w(
            this.state.status_tier.block_pa_port_1,
            this.state.status_tier.block_port_yard_east
        );
        this.setState({status_port: ctc.get_port().get_interlocking_status()});
    }

    port_click_sig_2e_1 = () => {
        ctc.get_port().click_sig_2e_1(
            this.state.status_tier.block_port_bc_1
        );
        this.setState({status_port: ctc.get_port().get_interlocking_status()});
    }

    port_click_sig_2e_2 = () => {
        ctc.get_port().click_sig_2e_2(
            this.state.status_tier.block_port_bc_1
        );
        this.setState({status_port: ctc.get_port().get_interlocking_status()});
    }

    port_throw_sw_1 = () => {
        ctc.get_port().throw_sw_1();
        this.setState({status_port: ctc.get_port().get_interlocking_status()});
    }



    bc_click_sig_2w = () => {
        ctc.get_bc().click_sig_2w(
            this.state.status_tier.block_port_bc_1,
            this.state.status_tier.block_pa_bc_2
        );
        this.setState({status_bc: ctc.get_bc().get_interlocking_status()});
    }

    bc_click_sig_2e = () => {
        ctc.get_bc().click_sig_2e(
            this.state.status_tier.block_bc_ov_1
        );
        this.setState({status_bc: ctc.get_bc().get_interlocking_status()});
    }

    bc_click_sig_4e = () => {
        ctc.get_bc().click_sig_4e(
            this.state.status_tier.block_bc_ov_1
        );
        this.setState({status_bc: ctc.get_bc().get_interlocking_status()});
    }

    bc_throw_sw_1 = () => {
        ctc.get_bc().throw_sw_1();
        this.setState({status_bc: ctc.get_bc().get_interlocking_status()});
    }



    ov_click_sig_2w = () => {
        ctc.get_ov().click_sig_2w(
            this.state.status_tier.block_bc_ov_1
        );
        this.setState({status_ov: ctc.get_ov().get_interlocking_status()});
    }

    ov_click_sig_2ws = () => {
        ctc.get_ov().click_sig_2ws(
            this.state.status_tier.block_bc_ov_1
        );
        this.setState({status_ov: ctc.get_ov().get_interlocking_status()});
    }
    ov_click_sig_2e = () => {
        ctc.get_ov().click_sig_2e(
            this.state.status_tier.block_ov_howells_1,
            this.state.status_tier.block_ov_howells_2
        );
        this.setState({status_ov: ctc.get_ov().get_interlocking_status()});
    }

    ov_throw_sw_1 = () => {
        ctc.get_ov().throw_sw_1();
        this.setState({status_ov: ctc.get_ov().get_interlocking_status()});
    }



    howells_click_sig_2w = () => {
        ctc.get_howells().click_sig_2w(
            this.state.status_tier.block_ov_howells_1,
            this.state.status_tier.block_ov_howells_2
        );
        this.setState({status_howells: ctc.get_howells().get_interlocking_status()});
    }

    howells_click_sig_2e = () => {
        ctc.get_howells().click_sig_2e(
            this.state.status_tier.block_howells_hall_1
        );
        this.setState({status_howells: ctc.get_howells().get_interlocking_status()});
    }

    howells_click_sig_2es = () => {
        ctc.get_howells().click_sig_2es(
            this.state.status_tier.block_howells_hall_1
        );
        this.setState({status_howells: ctc.get_howells().get_interlocking_status()});
    }

    howells_throw_sw_3 = () => {
        ctc.get_howells().throw_sw_3();
        this.setState({status_howells: ctc.get_howells().get_interlocking_status()});
    }



    hall_click_sig_2w = () => {
        ctc.get_hall().click_sig_2w(
            this.state.status_tier.block_howells_hall_1
        );
        this.setState({status_hall: ctc.get_hall().get_interlocking_status()});
    }

    hall_click_sig_4w = () => {
        ctc.get_hall().click_sig_4w(
            this.state.status_tier.block_howells_hall_1,
            this.state.status_tier.block_hall_yard
        );
        this.setState({status_hall: ctc.get_hall().get_interlocking_status()});
    }

    hall_click_sig_2e = () => {
        ctc.get_hall().click_sig_2e(
            this.state.status_tier.block_hall_hudson_1,
            this.state.status_tier.block_hall_hudson_2
        );
        this.setState({status_hall: ctc.get_hall().get_interlocking_status()});
    }

    hall_click_sig_4e = () => {
        ctc.get_hall().click_sig_4e(
            this.state.status_tier.block_hall_hudson_2
        );
        this.setState({status_hall: ctc.get_hall().get_interlocking_status()});
    }

    hall_throw_sw_1 = () => {
        ctc.get_hall().throw_sw_1();
        this.setState({status_hall: ctc.get_hall().get_interlocking_status()});
    }



    hudson_click_sig_2w = () => {
        ctc.get_hudson().click_sig_2w(
            this.state.status_tier.block_hall_hudson_1,
            this.state.status_tier.block_hall_hudson_2
        );
        this.setState({status_hudson: ctc.get_hudson().get_interlocking_status()});
    }

    hudson_click_sig_2ws = () => {
        ctc.get_hudson().click_sig_2ws(
            this.state.status_tier.block_hall_hudson_1,
            this.state.status_tier.block_hall_hudson_2
        );
        this.setState({status_hudson: ctc.get_hudson().get_interlocking_status()});
    }

    hudson_click_sig_2e = () => {
        ctc.get_hudson().click_sig_2e(
            this.state.status_tier.block_hudson_valley_1,
            this.state.status_tier.block_hudson_nysw
        );
        this.setState({status_hudson: ctc.get_hudson().get_interlocking_status()});
    }

    hudson_click_sig_2es = () => {
        ctc.get_hudson().click_sig_2es(
            this.state.status_tier.block_hudson_valley_1,
            this.state.status_tier.block_hudson_nysw
        );
        this.setState({status_hudson: ctc.get_hudson().get_interlocking_status()});
    }

    hudson_throw_sw_1 = () => {
        ctc.get_hudson().throw_sw_1();
        this.setState({status_hudson: ctc.get_hudson().get_interlocking_status()});
    }

    hudson_throw_sw_3 = () => {
        ctc.get_hudson().throw_sw_3();
        this.setState({status_hudson: ctc.get_hudson().get_interlocking_status()});
    }



    valley_click_sig_1w = () => {
        ctc.get_valley().click_sig_1w(
            this.state.status_tier.block_hudson_valley_1
        );
        this.setState({status_valley: ctc.get_valley().get_interlocking_status()});
    }

    valley_click_sig_2w = () => {
        ctc.get_valley().click_sig_2w(
            this.state.status_tier.block_hudson_valley_1
        );
        this.setState({status_valley: ctc.get_valley().get_interlocking_status()});
    }

    valley_click_sig_1e = () => {
        ctc.get_valley().click_sig_1e(
            this.state.status_tier.block_valley_harriman_1,
            this.state.status_tier.block_valley_harriman_2
        );
        this.setState({status_valley: ctc.get_valley().get_interlocking_status()});
    }

    valley_throw_sw_21 = () => {
        ctc.get_valley().throw_sw_21();
        this.setState({status_valley: ctc.get_valley().get_interlocking_status()});
    }


    harriman_click_sig_1w = () => {
        ctc.get_harriman().click_sig_1w(
            this.state.status_tier.block_valley_harriman_1,
            this.state.status_tier.block_valley_harriman_2,
            this.state.status_tier.block_harriman_industrial
        );
        this.setState({status_harriman: ctc.get_harriman().get_interlocking_status()});
    }

    harriman_click_sig_1e = () => {
        ctc.get_harriman().click_sig_1e(
            this.state.status_tier.block_harriman_sterling_1
        );
        this.setState({status_harriman: ctc.get_harriman().get_interlocking_status()});
    }

    harriman_click_sig_2e = () => {
        ctc.get_harriman().click_sig_2e(
            this.state.status_tier.block_harriman_sterling_1
        );
        this.setState({status_harriman: ctc.get_harriman().get_interlocking_status()});
    }

    harriman_click_sig_3e = () => {
        ctc.get_harriman().click_sig_3e(
            this.state.status_tier.block_harriman_sterling_1
        );
        this.setState({status_harriman: ctc.get_harriman().get_interlocking_status()});
    }

    harriman_throw_sw_21 = () => {
        ctc.get_harriman().throw_sw_21();
        this.setState({status_harriman: ctc.get_harriman().get_interlocking_status()});
    }

    harriman_throw_sw_32 = () => {
        ctc.get_harriman().throw_sw_32();
        this.setState({status_harriman: ctc.get_harriman().get_interlocking_status()});
    }



    sterling_click_sig_2w = () => {
        ctc.get_sterling().click_sig_2w(
            this.state.status_tier.block_harriman_sterling_1
        );
        this.setState({status_sterling: ctc.get_sterling().get_interlocking_status()});
    }

    sterling_click_sig_2ws = () => {
        ctc.get_sterling().click_sig_2ws(
            this.state.status_tier.block_harriman_sterling_1
        );
        this.setState({status_sterling: ctc.get_sterling().get_interlocking_status()});
    }

    sterling_click_sig_1e = () => {
        ctc.get_sterling().click_sig_1e(
            this.state.status_tier.block_sterling_sf,
            this.state.status_tier.block_sterling_hilburn
        );
        this.setState({status_sterling: ctc.get_sterling().get_interlocking_status()});
    }

    sterling_throw_sw_21 = () => {
        ctc.get_sterling().throw_sw_21();
        this.setState({status_sterling: ctc.get_sterling().get_interlocking_status()});
    }



    hilburn_click_sig_2w_1 = () => {
        ctc.get_hilburn().click_sig_2w_1(
            this.state.status_mainLine.block_sterling_hilburn
        );
        this.setState({status_hilburn: ctc.get_hilburn().get_interlocking_status()});
    }

    hilburn_click_sig_2w_2 = () => {
        ctc.get_hilburn().click_sig_2w_2(
            this.state.status_mainLine.block_sterling_hilburn
        );
        this.setState({status_hilburn: ctc.get_hilburn().get_interlocking_status()});
    }

    hilburn_click_sig_2e = () => {
        ctc.get_hilburn().click_sig_2e(
            this.state.status_mainLine.block_hilburn_sf,
            this.state.status_mainLine.block_hilburn_yard_west
        );
        this.setState({status_hilburn: ctc.get_hilburn().get_interlocking_status()});
    }

    hilburn_throw_sw_1 = () => {
        ctc.get_hilburn().throw_sw_1();
        this.setState({status_hilburn: ctc.get_hilburn().get_interlocking_status()});
    }



    sf_click_sig_2w = () => {
        ctc.get_sf().click_sig_2w(
            this.state.status_mainLine.block_sterling_sf,
            this.state.status_mainLine.block_hilburn_sf,
            this.state.status_mainLine.block_hilburn_yard_east
        );
        this.setState({status_sf: ctc.get_sf().get_interlocking_status()});
    }

    sf_click_sig_4w = () => {
        ctc.get_sf().click_sig_4w(
            this.state.status_mainLine.block_hilburn_sf,
            this.state.status_mainLine.block_hilburn_yard_east
        );
        this.setState({status_sf: ctc.get_sf().get_interlocking_status()});
    }

    sf_click_sig_2e = () => {
        ctc.get_sf().click_sig_2e(
            this.state.status_mainLine.block_sf_wc_1
        );
        this.setState({status_sf: ctc.get_sf().get_interlocking_status()});
    }

    sf_click_sig_4e_1 = () => {
        ctc.get_sf().click_sig_4e_1(
            this.state.status_mainLine.block_sf_wc_1,
            this.state.status_mainLine.block_sf_wc_2
        );
        this.setState({status_sf: ctc.get_sf().get_interlocking_status()});
    }

    sf_click_sig_4e_2 = () => {
        ctc.get_sf().click_sig_4e_2(
            this.state.status_mainLine.block_sf_wc_1,
            this.state.status_mainLine.block_sf_wc_2
        );
        this.setState({status_sf: ctc.get_sf().get_interlocking_status()});
    }

    sf_throw_sw_1 = () => {
        ctc.get_sf().throw_sw_1();
        this.setState({status_sf: ctc.get_sf().get_interlocking_status()});
    }

    sf_throw_sw_3 = () => {
        ctc.get_sf().throw_sw_3();
        this.setState({status_sf: ctc.get_sf().get_interlocking_status()});
    }



    wc_click_sig_2w_1 = () => {
        ctc.get_wc().click_sig_2w_1(
            this.state.status_mainLine.block_sf_wc_1,
            this.state.status_mainLine.block_sf_wc_2,
            this.state.status_mainLine.block_wc_yard
        );
        this.setState({status_wc: ctc.get_wc().get_interlocking_status()});
    }

    wc_click_sig_2w_2 = () => {
        ctc.get_wc().click_sig_2w_2(
            this.state.status_mainLine.block_sf_wc_1,
            this.state.status_mainLine.block_sf_wc_2,
            this.state.status_mainLine.block_wc_yard
        );
        this.setState({status_wc: ctc.get_wc().get_interlocking_status()});
    }

    wc_click_sig_4w = () => {
        ctc.get_wc().click_sig_4w(
            this.state.status_mainLine.block_sf_wc_1,
            this.state.status_mainLine.block_sf_wc_2,
            this.state.status_mainLine.block_wc_yard
        )
        this.setState({status_wc: ctc.get_wc().get_interlocking_status()});
    }

    wc_click_sig_2e_1 = () => {
        ctc.get_wc().click_sig_2e_1(
            this.state.status_mainLine.block_wc_ridgewood_1,
            this.state.status_mainLine.block_wc_ridgewood_2,
            this.state.status_mainLine.block_wc_ridgewood_3
        );
        this.setState({status_wc: ctc.get_wc().get_interlocking_status()});
    }

    wc_click_sig_2e_2 = () => {
        ctc.get_wc().click_sig_2e_2(
            this.state.status_mainLine.block_wc_ridgewood_1,
            this.state.status_mainLine.block_wc_ridgewood_2,
            this.state.status_mainLine.block_wc_ridgewood_3
        );
        this.setState({status_wc: ctc.get_wc().get_interlocking_status()});
    }

    wc_click_sig_4e = () => {
        ctc.get_wc().click_sig_4e(
            this.state.status_mainLine.block_wc_ridgewood_1,
            this.state.status_mainLine.block_wc_ridgewood_2,
            this.state.status_mainLine.block_wc_ridgewood_3
        );
        this.setState({status_wc: ctc.get_wc().get_interlocking_status()});
    }

    wc_throw_sw_1 = () => {
        ctc.get_wc().throw_sw_1();
        this.setState({status_wc: ctc.get_wc().get_interlocking_status()});
    }

    wc_throw_sw_3 = () => {
        ctc.get_wc().throw_sw_3();
        this.setState({status_wc: ctc.get_wc().get_interlocking_status()});
    }

    wc_throw_sw_5 = () => {
        ctc.get_wc().throw_sw_5();
        this.setState({status_wc: ctc.get_wc().get_interlocking_status()});
    }

    wc_throw_sw_7 = () => {
        ctc.get_wc().throw_sw_7();
        this.setState({status_wc: ctc.get_wc().get_interlocking_status()});
    }



    ridgewood_click_sig_2w_1 = () => {
        ctc.get_ridgewood().click_sig_2w1(
            this.state.status_mainLine.block_wc_ridgewood_1,
            this.state.status_mainLine.block_wc_ridgewood_2,
            this.state.status_mainLine.block_wc_ridgewood_3,
        );
        this.setState({status_ridgewood: ctc.get_ridgewood().get_interlocking_status()});
    }

    ridgewood_click_sig_2w_2 = () => {
        ctc.get_ridgewood().click_sig_2w2(
            this.state.status_mainLine.block_wc_ridgewood_1,
            this.state.status_mainLine.block_wc_ridgewood_2,
            this.state.status_mainLine.block_wc_ridgewood_3,
        );
        this.setState({status_ridgewood: ctc.get_ridgewood().get_interlocking_status()});
    }

    ridgewood_click_sig_4w = () => {
        ctc.get_ridgewood().click_sig_4w(
            this.state.status_mainLine.block_wc_ridgewood_1,
            this.state.status_mainLine.block_wc_ridgewood_2,
            this.state.status_mainLine.block_wc_ridgewood_3,
        );
        this.setState({status_ridgewood: ctc.get_ridgewood().get_interlocking_status()});
    }

    ridgewood_click_sig_6w = () => {
        ctc.get_ridgewood().click_sig_6w(
            this.state.status_mainLine.block_wc_ridgewood_1,
            this.state.status_mainLine.block_wc_ridgewood_2,
            this.state.status_mainLine.block_wc_ridgewood_3,
        );
        this.setState({status_ridgewood: ctc.get_ridgewood().get_interlocking_status()});
    }

    ridgewood_click_sig_2e = () => {
        ctc.get_ridgewood().click_sig_2e(
            this.state.status_mainLine.block_ridgewood_suscon_1,
            this.state.status_mainLine.block_ridgewood_suscon_2,
            this.state.status_mainLine.block_ridgewood_suscon_3,
            this.state.status_mainLine.block_ridgewood_suscon_4
        );
        this.setState({status_ridgewood: ctc.get_ridgewood().get_interlocking_status()});
    }

    ridgewood_click_sig_4e = () => {
        ctc.get_ridgewood().click_sig_4e(
            this.state.status_mainLine.block_ridgewood_suscon_1,
            this.state.status_mainLine.block_ridgewood_suscon_2,
            this.state.status_mainLine.block_ridgewood_suscon_3,
            this.state.status_mainLine.block_ridgewood_suscon_4
        );
        this.setState({status_ridgewood: ctc.get_ridgewood().get_interlocking_status()});
    }

    ridgewood_click_sig_6e = () => {
        ctc.get_ridgewood().click_sig_6e(
            this.state.status_mainLine.block_ridgewood_suscon_1,
            this.state.status_mainLine.block_ridgewood_suscon_2,
            this.state.status_mainLine.block_ridgewood_suscon_3,
            this.state.status_mainLine.block_ridgewood_suscon_4
        );
        this.setState({status_ridgewood: ctc.get_ridgewood().get_interlocking_status()});
    }

    ridgewood_throw_sw_1 = () => {
        ctc.get_ridgewood().throw_sw_1();
        this.setState({status_ridgewood: ctc.get_ridgewood().get_interlocking_status()});
    }

    ridgewood_throw_sw_3 = () => {
        ctc.get_ridgewood().throw_sw_3();
        this.setState({status_ridgewood: ctc.get_ridgewood().get_interlocking_status()});
    }

    ridgewood_throw_sw_5 = () => {
        ctc.get_ridgewood().throw_sw_5();
        this.setState({status_ridgewood: ctc.get_ridgewood().get_interlocking_status()});
    }

    ridgewood_throw_sw_7 = () => {
        ctc.get_ridgewood().throw_sw_7();
        this.setState({status_ridgewood: ctc.get_ridgewood().get_interlocking_status()});
    }

    ridgewood_throw_sw_9 = () => {
        ctc.get_ridgewood().throw_sw_9();
        this.setState({status_ridgewood: ctc.get_ridgewood().get_interlocking_status()});
    }


    suscon_click_sig_2w = () => {
        ctc.get_suscon().click_sig(
            "2W", 
            this.state.status_mainLine.block_ridgewood_suscon_1,
            this.state.status_mainLine.block_ridgewood_suscon_2
        );
        this.setState({status_suscon: ctc.get_suscon().get_interlocking_status()});
    }

    suscon_click_sig_2e = () => {
        ctc.get_suscon().click_sig(
            "2E",
            this.state.status_mainLine.block_suscon_mill_1,
            this.state.status_mainLine.block_suscon_mill_2
        );
        this.setState({status_suscon: ctc.get_suscon().get_interlocking_status()});
    }

    suscon_click_sig_4w = () => {
        ctc.get_suscon().click_sig(
            "4W",
            this.state.status_mainLine.block_ridgewood_suscon_1,
            this.state.status_mainLine.block_ridgewood_suscon_2
        );
        this.setState({status_suscon: ctc.get_suscon().get_interlocking_status()});
    }

    suscon_click_sig_4e = () => {
        ctc.get_suscon().click_sig(
            "4E",
            this.state.status_mainLine.block_suscon_mill_1,
            this.state.status_mainLine.block_suscon_mill_2
        );
        this.setState({status_suscon: ctc.get_suscon().get_interlocking_status()});
    }

    suscon_throw_sw_1 = () => {
        ctc.get_suscon().throw_sw_1();
        this.setState({status_suscon: ctc.get_suscon().get_interlocking_status()});
    }

    suscon_throw_sw_3 = () => {
        ctc.get_suscon().throw_sw_3();
        this.setState({status_suscon: ctc.get_suscon().get_interlocking_status()});
    }


    mill_click_sig_2w = () => {
        ctc.get_mill().click_sig(
            "2W", 
            this.state.status_mainLine.block_suscon_mill_1,
            this.state.status_mainLine.block_suscon_mill_2
        );
        this.setState({status_mill: ctc.get_mill().get_interlocking_status()});
    }

    mill_click_sig_2e = () => {
        ctc.get_mill().click_sig(
            "2E", 
            this.state.status_mainLine.block_mill_westSecaucus_1,
            this.state.status_mainLine.block_mill_westSecaucus_2
        );
        this.setState({status_mill: ctc.get_mill().get_interlocking_status()});
    }

    mill_click_sig_4w = () => {
        ctc.get_mill().click_sig(
            "4W", 
            this.state.status_mainLine.block_suscon_mill_1,
            this.state.status_mainLine.block_suscon_mill_2
        );
        this.setState({status_mill: ctc.get_mill().get_interlocking_status()});
    }

    mill_click_sig_4e = () => {
        ctc.get_mill().click_sig(
            "4E", 
            this.state.status_mainLine.block_mill_westSecaucus_1,
            this.state.status_mainLine.block_mill_westSecaucus_2
        );
        this.setState({status_mill: ctc.get_mill().get_interlocking_status()});
    }

    mill_throw_sw_1 = () => {
        ctc.get_mill().throw_sw_1();
        this.setState({status_mill: ctc.get_mill().get_interlocking_status()});
    }

    mill_throw_sw_3 = () => {
        ctc.get_mill().throw_sw_3();
        this.setState({status_mill: ctc.get_mill().get_interlocking_status()});
    }


    westSecaucus_click_sig_2w = () => {
        ctc.get_westSecaucus().click_sig(
            "2W", 
            this.state.status_mainLine.block_mill_westSecaucus_1,
            this.state.status_mainLine.block_mill_westSecaucus_2
        );
        this.setState({status_westSecaucus: ctc.get_westSecaucus().get_interlocking_status()});
    }

    westSecaucus_click_sig_2e = () => {
        ctc.get_westSecaucus().click_sig(
            "2E", 
            this.state.status_mainLine.block_westSecaucus_laurel_1,
            this.state.status_mainLine.block_westSecaucus_laurel_2
        );
        this.setState({status_westSecaucus: ctc.get_westSecaucus().get_interlocking_status()});
    }

    westSecaucus_click_sig_4w = () => {
        ctc.get_westSecaucus().click_sig(
            "4W", 
            this.state.status_mainLine.block_mill_westSecaucus_1,
            this.state.status_mainLine.block_mill_westSecaucus_2
        );
        this.setState({status_westSecaucus: ctc.get_westSecaucus().get_interlocking_status()});
    }

    westSecaucus_click_sig_4e = () => {
        ctc.get_westSecaucus().click_sig(
            "4E", 
            this.state.status_mainLine.block_westSecaucus_laurel_1,
            this.state.status_mainLine.block_westSecaucus_laurel_2
        );
        this.setState({status_westSecaucus: ctc.get_westSecaucus().get_interlocking_status()});
    }

    westSecaucus_throw_sw_1 = () => {
        ctc.get_westSecaucus().throw_sw_1();
        this.setState({status_westSecaucus: ctc.get_westSecaucus().get_interlocking_status()});
    }

    westSecaucus_throw_sw_3 = () => {
        ctc.get_westSecaucus().throw_sw_3();
        this.setState({status_westSecaucus: ctc.get_westSecaucus().get_interlocking_status()});
    }


    laurel_click_sig_2w = () => {
        ctc.get_laurel().click_sig_2w(
            this.state.status_mainLine.block_hx_laurel_2,
            this.state.status_mainLine.block_westSecaucus_laurel_1,
            this.state.status_mainLine.block_hx_laurel_1
        );
        this.setState({status_laurel: ctc.get_laurel().get_interlocking_status()});
    }

    laurel_click_sig_4w = () => {
        ctc.get_laurel().click_sig_4w(
            this.state.status_mainLine.block_hx_laurel_2,
            this.state.status_mainLine.block_westSecaucus_laurel_1,
            this.state.status_mainLine.block_hx_laurel_1
        );
        this.setState({status_laurel: ctc.get_laurel().get_interlocking_status()});
    }

    laurel_click_sig_8w = () => {
        ctc.get_laurel().click_sig_8w(
            this.state.status_mainLine.block_hx_laurel_2,
            this.state.status_mainLine.block_westSecaucus_laurel_1,
            this.state.status_mainLine.block_hx_laurel_1,
            this.state.status_mainLine.block_westSecaucus_laurel_2
        );
        this.setState({status_laurel: ctc.get_laurel().get_interlocking_status()});
    }

    laurel_click_sig_10w = () => {
        ctc.get_laurel().click_sig_10w(
            this.state.status_mainLine.block_hx_laurel_2,
            this.state.status_mainLine.block_westSecaucus_laurel_1,
            this.state.status_mainLine.block_hx_laurel_1,
        );
        this.setState({status_laurel: ctc.get_laurel().get_interlocking_status()});
    }

    laurel_click_sig_6e = () => {
        ctc.get_laurel().click_sig_6e(
            this.state.status_mainLine.block_westEnd_laurel_1,
            this.state.status_mainLine.block_westEnd_laurel_2,
            this.state.status_mainLine.block_westEnd_laurel_3,
            this.state.status_mainLine.block_westEnd_laurel_4
        );
        this.setState({status_laurel: ctc.get_laurel().get_interlocking_status()});
    }

    laurel_click_sig_12e = () => {
        ctc.get_laurel().click_sig_12e(
            this.state.status_mainLine.block_westEnd_laurel_1,
            this.state.status_mainLine.block_westEnd_laurel_2,
            this.state.status_mainLine.block_westEnd_laurel_3,
            this.state.status_mainLine.block_westEnd_laurel_4
        );
        this.setState({status_laurel: ctc.get_laurel().get_interlocking_status()});
    }

    laurel_click_sig_4e = () => {
        ctc.get_laurel().click_sig_4e(
            this.state.status_mainLine.block_westEnd_laurel_1,
            this.state.status_mainLine.block_westEnd_laurel_2,
            this.state.status_mainLine.block_westEnd_laurel_3,
            this.state.status_mainLine.block_westEnd_laurel_4
        );
        this.setState({status_laurel: ctc.get_laurel().get_interlocking_status()});
    }

    laurel_click_sig_8e = () => {
        ctc.get_laurel().click_sig_8e(
            this.state.status_mainLine.block_westEnd_laurel_4
        );
        this.setState({status_laurel: ctc.get_laurel().get_interlocking_status()});
    }

    laurel_throw_sw_1 = () => {
        ctc.get_laurel().throw_sw_1();
        this.setState({status_laurel: ctc.get_laurel().get_interlocking_status()});
    }

    laurel_throw_sw_3 = () => {
        ctc.get_laurel().throw_sw_3();
        this.setState({status_laurel: ctc.get_laurel().get_interlocking_status()});
    }

    laurel_throw_sw_7 = () => {
        ctc.get_laurel().throw_sw_7();
        this.setState({status_laurel: ctc.get_laurel().get_interlocking_status()});
    }

    laurel_throw_sw_9 = () => {
        ctc.get_laurel().throw_sw_9();
        this.setState({status_laurel: ctc.get_laurel().get_interlocking_status()});
    }

    laurel_throw_sw_11 = () => {
        ctc.get_laurel().throw_sw_11();
        this.setState({status_laurel: ctc.get_laurel().get_interlocking_status()});
    }

    laurel_throw_sw_13 = () => {
        ctc.get_laurel().throw_sw_13();
        this.setState({status_laurel: ctc.get_laurel().get_interlocking_status()});
    }
}

export default MainLine;