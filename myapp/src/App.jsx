import React, { useState, useEffect }  from 'react';
import home from './home.jpg';
import { FaUserFriends } from "react-icons/fa";
import { FaMusic } from "react-icons/fa";
import { FaBible } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";

function App() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ backgroundImage: `url(${home})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '100vh', width: '100vw', margin: 0, padding: 0, overflow: 'hidden', position: 'fixed', top: 0, left: 0, }}>
        <div style={{ backgroundColor: '#383737', height: '9vh', width: '100vw', }}>
        <a href='/Songs'><FaMusic style={{ marginTop: '2vh', width: '2vw', height: '4vh', marginLeft: '1vw', color: '#ffff00', boxShadow: '0px 0px 10px 2px rgba(255,255,0,0.7)' }} /></a>
        <a href='/Scripture'><FaBible style={{ marginTop: '2vh', width: '2vw', height: '4vh', marginLeft: '1.5vw', color: '#32cd32', boxShadow: '0px 0px 10px 2px rgba(50,205,50,0.7)' }} /></a>
        <a href='/Members'><FaUserFriends style={{ marginTop: '2vh', width: '2vw', height: '4vh', marginLeft: '1vw', color: '#ff00ff', boxShadow: '0px 0px 10px 2px rgba(255,0,255,0.7)' }} /></a>
        <a href='Announcements'><FaBookOpen style={{ marginTop: '2vh', width: '2vw', height: '4vh', marginLeft: '1vw', color: '#FF0000', boxShadow: '0px 0px 10px 2px rgba(255,0,0,0.7)' }} /></a>
        <h1 style={{ marginLeft: '45vw', marginTop: '-4vh', color: 'gold', fontSize: '25px' }}>{currentTime.toLocaleDateString()}</h1>
        <h2 style={{ marginLeft: '89vw', marginTop: '-7vh', color: 'gold' }}>{currentTime.toLocaleTimeString()}</h2>
        </div>
      <h1 style={{ color: 'gold', fontSize: '3rem', marginLeft: '14vw', marginTop: '10vh', }}>Welcome To The HillTop Church Of Christ</h1>
    </div>
  );
}

export default App;
