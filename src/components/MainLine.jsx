import React, { Component } from 'react';
import '../css/mainLine.css';

class MainLine extends Component {
    render() { 
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
                <div className="m_westSecaucus_mill_1" id="m_westSecaucus_mill_1"></div>
                <div className="m_westSecaucus_mill_2" id="m_westSecaucus_mill_2"></div>

                {/* Mill to Suscon */}
                <div className="m_suscon_mill_1" id="m_suscon_mill_1"></div>
                <div className="m_suscon_mill_2" id="m_suscon_mill_2"></div>

                {/* Suscon to Ridgewood Junction */}
                <div className="m_ridgewood_suscon_1" id="m_ridgewood_suscon_1"></div>
                <div className="m_ridgewood_suscon_2" id="m_ridgewood_suscon_2"></div>
            </div>
        );
    }
}
 
export default MainLine;