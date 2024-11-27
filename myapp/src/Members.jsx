import React from 'react';
import Table from './Table';
import { AiTwotoneHome } from "react-icons/ai";
import { FaMusic } from "react-icons/fa";
import { FaBible } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";

function Members() {
    return (
        <div style={{ backgroundColor: 'black', width: '100vw', height: '100vh', margin: 0, padding: 0, position: 'fixed', top: 0, left: 0, overflow: 'hidden' }}>
            <div style={{ backgroundColor: '#383737', height: '9vh', width: '100vw', position: 'fixed', top: 0, left: 0, zIndex: 1 }}>
            <a href='/'><AiTwotoneHome style={{ marginTop: '2vh', width: '2vw', height: '4vh', marginLeft: '1vw', color: '#00bfff', boxShadow: '0px 0px 10px 2px rgba(0,191,255,0.7)' }} /></a>
        <a href='/Songs'><FaMusic style={{ marginTop: '2vh', width: '2vw', height: '4vh', marginLeft: '1vw', color: '#ffff00', boxShadow: '0px 0px 10px 2px rgba(255,255,0,0.7)' }} /></a>
        <a href='/Scripture'><FaBible style={{ marginTop: '2vh', width: '2vw', height: '4vh', marginLeft: '1.5vw', color: '#32cd32', boxShadow: '0px 0px 10px 2px rgba(50,205,50,0.7)' }} /></a>
        <a href='Announcements'><FaBookOpen style={{ marginTop: '2vh', width: '2vw', height: '4vh', marginLeft: '1vw', color: '#FF0000', boxShadow: '0px 0px 10px 2px rgba(255,0,0,0.7)' }} /></a>
            </div>
            <div style={{ marginTop: '9vh', height: 'calc(100vh - 9vh)', overflowY: 'auto', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                <Table />
            </div>
            <style jsx>{`
                div::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </div>
    );
}

export default Members;
