import React, { useState } from 'react';
import songsData from './songs.json';

const SongDisplay = ({ selectedHymn, setSelectedHymn }) => {
  const [currentDiv, setCurrentDiv] = useState(1);
  const hymnsPerPage = 25;

  const hymn = selectedHymn !== null ? songsData.find(song => song.id === selectedHymn) : null;

  const buttonStyle = {
    backgroundColor: 'white',
    width: '50%',
    height: '5vh',
    border: '1px solid black',
    padding: '10px',
    cursor: 'pointer'
  };

  const hymnLinksStyle = {
    backgroundColor: '#0C0C0C',
    width: '25vw',
    height: '90vh',
    position: 'absolute',
    top: 0,
    left: 0,
    opacity: 0.8,
    overflowY: 'auto' // Enable scrolling if content overflows
  };

  const hymnTextStyle = {
    color: 'gold',
    margin: '20px 0',
    cursor: 'pointer'
  };

  const hymnDisplayStyle = {
    textAlign: 'center',
    width: '100vw',
    height: '110vw',
    overflowY: 'auto',
    padding: '20px' // Add padding for better text positioning
  };

  const totalDivs = Math.ceil(songsData.length / hymnsPerPage);

  const handleNext = () => {
    setCurrentDiv(currentDiv === totalDivs ? 1 : currentDiv + 1);
  };

  const handlePrevious = () => {
    setCurrentDiv(currentDiv === 1 ? totalDivs : currentDiv - 1);
  };

  // Calculate the range of hymns to display in the current div
  const startIndex = (currentDiv - 1) * hymnsPerPage;
  const endIndex = startIndex + hymnsPerPage;
  const hymnsToShow = songsData.slice(startIndex, endIndex);

  return (
    <div>
      {/* Conditional rendering for the hymn links div */}
      {selectedHymn === null && (
        <div style={hymnLinksStyle}>
          <div style={{ display: 'flex', width: '100%' }}>
            <button onClick={handlePrevious} style={buttonStyle} disabled={totalDivs <= 1 && currentDiv === 1}>
              Previous
            </button>
            <button onClick={handleNext} style={buttonStyle}>
              Next
            </button>
          </div>

          <ul style={{ padding: 0, listStyleType: 'none' }}>
            {hymnsToShow.map(song => (
              <li key={song.id}>
                <a href onClick={() => setSelectedHymn(song.id)} style={{ textDecoration: 'none' }}>
                  <span style={hymnTextStyle}>Hymn {song.id}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Conditional rendering for the hymn display */}
      {hymn && (
        <div style={hymnDisplayStyle}>
          <h2 style={{ color: 'gold' }}>{hymn.title}</h2>
          {hymn.slides.map(slide => (
            <div key={slide.slide_number} style={{ marginTop: '50vh', width: '50vw', marginLeft: '25vw' }}>
              <p style={{ color: 'white', fontSize: '50px' }}>{slide.text}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SongDisplay;
