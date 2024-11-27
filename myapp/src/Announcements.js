import React, { useState, useEffect } from "react";
import { FaUserFriends, FaMusic, FaBible } from "react-icons/fa";
import { AiTwotoneHome } from "react-icons/ai";

function Announcements() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [announcement, setAnnouncement] = useState("Attendance:\nMen-\nWomen-\nChildren-\nTotal=\n\nWeekly Activities:\nWednesday-\nFriday-\n\nOther Announcements:\n1:\n2:\n3:\n4:\n5:");
  const [pastAnnouncements, setPastAnnouncements] = useState([]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const storedAnnouncements = JSON.parse(localStorage.getItem('announcements')) || [];
    setPastAnnouncements(storedAnnouncements);
  }, []);

  const handleAnnouncementChange = (e) => {
    setAnnouncement(e.target.value);
  };

  const saveAnnouncement = () => {
    const newAnnouncement = {
      date: currentTime.toLocaleDateString(),
      time: currentTime.toLocaleTimeString(),
      text: announcement,
    };
    const updatedAnnouncements = [...pastAnnouncements, newAnnouncement];
    setPastAnnouncements(updatedAnnouncements);
    localStorage.setItem('announcements', JSON.stringify(updatedAnnouncements));
    alert('Announcement saved!');
  };

  const viewPastAnnouncements = () => {
    const storedAnnouncements = JSON.parse(localStorage.getItem('announcements')) || [];
    let announcementList = "Past Announcements:\n";
    storedAnnouncements.forEach((ann, index) => {
      announcementList += `\n${index + 1}. Date: ${ann.date}, Time: ${ann.time}\n${ann.text}\n`;
    });
    alert(announcementList);
  };

  return (
    <div style={{ backgroundColor: 'black', width: '100vw', height: '100vh', margin: 0, padding: 0, position: 'fixed', top: 0, left: 0, overflow: 'hidden' }}>
      <div style={{ backgroundColor: '#383737', height: '9vh', width: '100vw', position: 'fixed', top: 0, left: 0, zIndex: 1 }}>
        <a href='/'><AiTwotoneHome style={{ marginTop: '2vh', width: '2vw', height: '4vh', marginLeft: '1vw', color: '#00bfff', boxShadow: '0px 0px 10px 2px rgba(0,191,255,0.7)' }} /></a>
        <a href='/Songs'><FaMusic style={{ marginTop: '2vh', width: '2vw', height: '4vh', marginLeft: '1vw', color: '#ffff00', boxShadow: '0px 0px 10px 2px rgba(255,255,0,0.7)' }} /></a>
        <a href='/Scripture'><FaBible style={{ marginTop: '2vh', width: '2vw', height: '4vh', marginLeft: '1.5vw', color: '#32cd32', boxShadow: '0px 0px 10px 2px rgba(50,205,50,0.7)' }} /></a>
        <a href='/Members'><FaUserFriends style={{ marginTop: '2vh', width: '2vw', height: '4vh', marginLeft: '1vw', color: '#ff00ff', boxShadow: '0px 0px 10px 2px rgba(255,0,255,0.7)' }} /></a>
        <h1 style={{ marginLeft: '45vw', marginTop: '-4vh', color: 'gold', fontSize: '25px' }}>{currentTime.toLocaleDateString()}</h1>
        <h2 style={{ marginLeft: '89vw', marginTop: '-7vh', color: 'gold' }}>{currentTime.toLocaleTimeString()}</h2>
      </div>

      <div style={{ color: 'white', marginTop: '12vh', textAlign: 'center', position: 'relative' }}>
      <textarea value={announcement} onChange={handleAnnouncementChange} style={{ marginTop: '5vh', width: '98vw', height: '77vh', padding: '1vh', fontSize: '1.5rem', backgroundColor: '#383737', color: 'white', border: '1px solid white', borderRadius: '5px', whiteSpace: 'pre-wrap',}}/>
      <button onClick={saveAnnouncement} style={{ position: 'absolute', top: '-2.5vh', right: '59.5vw', backgroundColor: 'blue', borderRadius: '5px', height: '6vh', width: '20vw', color: 'white', border: 'none', cursor: 'pointer'}}>Save Announcements</button>
      </div>

      <div style={{ textAlign: 'center', marginTop: '2vh' }}>
      <button onClick={viewPastAnnouncements} style={{ backgroundColor: 'green', borderRadius: '5px', height: '6vh', width: '20vw', color: 'white', border: 'none', cursor: 'pointer', position: 'absolute', top: '9.5vh', right: '80vw',}}>View Past Announcements</button>
      </div>
    </div>
  );
}

export default Announcements;
