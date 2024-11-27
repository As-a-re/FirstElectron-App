import React, { useState,useEffect } from "react";
import GifPlayer from 'react-gif-player';
import myGif from './1bg.gif';
import sound from './sicons.png';
import ice from './search.png';
import { AiTwotoneHome } from "react-icons/ai";
import { FaBible } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";
import SongDisplay from './Songdisplay';

function Songs() {
    const [selectedHymn, setSelectedHymn] = useState(null);

    const handleBackClick = () => {
        setSelectedHymn(null);
    };

    const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

    return (
        <div style={{ backgroundColor: '#0C0C0C', width: '100vw', height: '100vh', margin: 0, padding: 0, position: 'fixed', top: 0, left: 0, overflow: 'hidden', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            <div style={{ backgroundColor: '#383737', height: '9vh', width: '100vw', display: 'flex', alignHymns: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignHymns: 'center' }}>
                    <a href='/'><AiTwotoneHome style={{ marginTop: '2vh', width: '2vw', height: '4vh', marginLeft: '1vw', color: '#00bfff', boxShadow: '0px 0px 10px 2px rgba(0,191,255,0.7)' }} /></a>
                    <a href='/Scripture'><FaBible style={{ marginTop: '2vh', width: '2vw', height: '4vh', marginLeft: '1.5vw', color: '#32cd32', boxShadow: '0px 0px 10px 2px rgba(50,205,50,0.7)' }} /></a>
                    <a href='/Members'><FaUserFriends style={{ marginTop: '2vh', width: '2vw', height: '4vh', marginLeft: '1vw', color: '#ff00ff', boxShadow: '0px 0px 10px 2px rgba(255,0,255,0.7)' }} /></a>
                    <a href='Announcements'><FaBookOpen style={{ marginTop: '2vh', width: '2vw', height: '4vh', marginLeft: '1vw', color: '#FF0000', boxShadow: '0px 0px 10px 2px rgba(255,0,0,0.7)' }} /></a>
                    <h2 style={{ marginLeft: '77vw', marginTop: '2vh', color: 'gold' }}>{currentTime.toLocaleTimeString()}</h2>
                </div>
                <div style={{ display: 'flex', alignHymns: 'center' }}>
                    <input type="text" placeholder="Search for songs" style={{ marginTop: '2vh', backgroundColor: 'white', width: '20vw', height: '3.5vh', marginLeft: '-65vw', border: '2px solid gold' }} />
                    <img src={ice} alt="chain" style={{ marginTop: '2vh', height: '4vh', width: '2vw', marginLeft: '-2vw' }}></img>
                </div>
                <a href onClick={handleBackClick}>
                    <img src={sound} alt="back" style={{ marginTop: '2vh', height: '4vh', width: '3vw', marginLeft: '-43vw' }}></img>
                </a>
            </div>
            <div style={{ position: 'relative', width: '100vw', height: '90vh' }}>
                <GifPlayer gif={myGif} style={{ width: '100%', height: '100%' }} />
                <div style={{ height: '100%', overflowY: 'auto', textAlign:'center', width: '100vw', marginTop: "-197vh" }}>
                    <SongDisplay selectedHymn={selectedHymn} setSelectedHymn={setSelectedHymn} />
                </div>
            </div>
        </div>
    );
}

export default Songs;
