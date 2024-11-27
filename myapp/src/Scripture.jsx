import React, { useState, useEffect } from 'react';
import newKjv from './new_kjv.json';
import { AiTwotoneHome } from "react-icons/ai";
import { FaMusic, FaUserFriends } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";

const Scripture = () => {
  const [selectedBook, setSelectedBook] = useState('');
  const [selectedChapter, setSelectedChapter] = useState('');
  const [startVerse, setStartVerse] = useState('');
  const [endVerse, setEndVerse] = useState('');
  const [chapters, setChapters] = useState([]);
  const [verses, setVerses] = useState([]);
  const [bibleText, setBibleText] = useState('');

  const books = newKjv.books;

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (selectedBook) {
      const book = books.find(b => b.name === selectedBook);
      if (book) {
        setChapters(book.chapters);
        setSelectedChapter('');
        setStartVerse('');
        setEndVerse('');
        setVerses([]);
        setBibleText('');
      }
    }
  }, [books, selectedBook]);

  useEffect(() => {
    if (selectedChapter && selectedBook) {
      const book = books.find(b => b.name === selectedBook);
      if (book) {
        const chapter = book.chapters.find(ch => ch.chapter === parseInt(selectedChapter));
        if (chapter) {
          setVerses(chapter.verses);
          setStartVerse('');
          setEndVerse('');
          setBibleText('');
        }
      }
    }
  }, [selectedChapter, selectedBook, books]);

  const getPassageText = () => {
    if (selectedBook && selectedChapter && startVerse && endVerse) {
      const book = books.find(b => b.name === selectedBook);
      if (book) {
        const chapter = book.chapters.find(ch => ch.chapter === parseInt(selectedChapter));
        if (chapter) {
          const selectedVerses = chapter.verses.filter(v => v.verse >= parseInt(startVerse) && v.verse <= parseInt(endVerse));
          const passageText = selectedVerses.map(v => `${v.verse}: ${v.text}`).join('\n');
          setBibleText(passageText);
          return;
        }
      }
      setBibleText('Verse(s) not found');
    } else {
      setBibleText('Please select a valid passage range.');
    }
  };

  return (
    <div style={{ backgroundColor: '#1F1E1E', width: '100vw', height: '100vh', margin: 0, padding: 0, position: 'fixed', top: 0, left: 0 }}>
      <div style={{ backgroundColor: '#383737', height: '9vh', width: '100vw' }}>
        <a href='/'><AiTwotoneHome style={{ marginTop: '2vh', width: '2vw', height: '4vh', marginLeft: '1vw', color: '#00bfff', boxShadow: '0px 0px 10px 2px rgba(0,191,255,0.7)' }} /></a>
        <a href='/Songs'><FaMusic style={{ marginTop: '2vh', width: '2vw', height: '4vh', marginLeft: '1vw', color: '#ffff00', boxShadow: '0px 0px 10px 2px rgba(255,255,0,0.7)' }} /></a>
        <a href='/Members'><FaUserFriends style={{ marginTop: '2vh', width: '2vw', height: '4vh', marginLeft: '1vw', color: '#ff00ff', boxShadow: '0px 0px 10px 2px rgba(255,0,255,0.7)' }} /></a>
        <a href='Announcements'><FaBookOpen style={{ marginTop: '2vh', width: '2vw', height: '4vh', marginLeft: '1vw', color: '#FF0000', boxShadow: '0px 0px 10px 2px rgba(255,0,0,0.7)' }} /></a>
        <h1 style={{ marginLeft: '45vw', marginTop: '-4vh', color: 'gold', fontSize: '25px' }}>{currentTime.toLocaleDateString()}</h1>
        <h2 style={{ marginLeft: '89vw', marginTop: '-7vh', color: 'gold' }}>{currentTime.toLocaleTimeString()}</h2>
      </div>
      <h2 style={{ color: 'white', textAlign: 'center' }}>Select a Bible Passage</h2>

      <div style={{ margin: '20px', color: 'white' }}>
        <label htmlFor="book-select" style={{ color: 'gold' }}>Book: </label>
        <select
          id="book-select"
          value={selectedBook}
          onChange={(e) => setSelectedBook(e.target.value)}
          style={{ marginRight: '10px', color: 'black' }}>
          <option value="">Select a book</option>
          {books.map(book => (
            <option key={book.name} value={book.name}>
              {book.name}
            </option>
          ))}
        </select>

        <label htmlFor="chapter-select" style={{ color: 'gold' }}>Chapter: </label>
        <select
          id="chapter-select"
          value={selectedChapter}
          onChange={(e) => setSelectedChapter(e.target.value)}
          disabled={!selectedBook}
          style={{ marginRight: '10px', color: 'black' }}>
          <option value="">Select a chapter</option>
          {chapters.map(ch => (
            <option key={ch.chapter} value={ch.chapter}>
              Chapter {ch.chapter}
            </option>
          ))}
        </select>

        <label htmlFor="start-verse-select" style={{ color: 'gold' }}>Start Verse: </label>
        <select
          id="start-verse-select"
          value={startVerse}
          onChange={(e) => setStartVerse(e.target.value)}
          disabled={!selectedChapter}
          style={{ marginRight: '10px', color: 'black' }}>
          <option value="">Select start verse</option>
          {verses.map(v => (
            <option key={v.verse} value={v.verse}>
              Verse {v.verse}
            </option>
          ))}
        </select>

        <label htmlFor="end-verse-select" style={{ color: 'gold' }}>End Verse: </label>
        <select
          id="end-verse-select"
          value={endVerse}
          onChange={(e) => setEndVerse(e.target.value)}
          disabled={!startVerse}
          style={{ marginRight: '10px', color: 'black' }}>
          <option value="">Select end verse</option>
          {verses.filter(v => v.verse >= parseInt(startVerse)).map(v => (
            <option key={v.verse} value={v.verse}>Verse {v.verse}</option>
          ))}
        </select>

        <button onClick={getPassageText}
          style={{ padding: '10px 20px', fontSize: '16px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
          Show Passage</button>
      </div>

      <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '5px', margin: '20px', overflowY: 'auto', height:'65vh' }}>
        <h2 style={{ textAlign: 'center', color: 'white' }}>Selected Passage</h2>
        <p style={{ fontSize: '20px', lineHeight: '1.5', color: 'gold', whiteSpace: 'pre-wrap' }}>
          {bibleText}
        </p>
      </div>
    </div>
  );
};

export default Scripture;
