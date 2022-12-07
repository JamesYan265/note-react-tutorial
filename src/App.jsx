import { useEffect, useState } from 'react'
import './App.css'
import Main from './components/Main'
import Sidebar from './components/Sidebar'
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes')) || []);
  const [activeNote, setActiveNote] = useState(false);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  },[notes])

  useEffect(() => {
    setActiveNote(notes[0].id);
  },[])

  const onAddNote = () => {
    const newNote = {
      id: uuidv4(),
      title: '新筆記',
      content: '新筆記的內容',
      modDate: Date.now(),
    };
    setNotes([...notes, newNote]);
  };

  const getActiveNote = () => {
    return notes.find((note) => note.id === activeNote)
  }

  const onUpdateNote = (updatedNote) => {
    const updateNotesArray = notes.map((note) => {
      if(note.id === updatedNote.id) {
        return updatedNote;
      } else {
        return note;
      }
    });

    setNotes(updateNotesArray);
  }

  const onDeleteNote = (id) => {
    const filterNotes = notes.filter((note) => note.id !== id);
    setNotes(filterNotes);
  }

  return (
    <div className="App">
      <Sidebar onAddNote={onAddNote} onDeleteNote={onDeleteNote} notes={notes} activeNote={activeNote} setActiveNote={setActiveNote}/>
      <Main activeNote={getActiveNote()} onUpdateNote={onUpdateNote}/>
    </div>
  )
}

export default App
