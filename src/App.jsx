// import { useState } from 'react'
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import { useEffect, useState } from "react"
import uuid from "react-uuid"

import './App.css';

function App() {
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem("notes")) || []);
  const [activeNote, setActiveNote] = useState(null);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes])

  useEffect(() => {
    setActiveNote(notes[0].id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onAddNote = () => {
    const newNote = {
      "id": uuid(),
      "title": "New Note",
      "content": "",
      "modDate": Date.now(),
    };
    setNotes([...notes, newNote]);
    // console.log(notes);
  };

  const onDeleteNote = (id) => {
    const filterNotes = notes.filter((note) => note.id !== id);
    setNotes(filterNotes);
  };

  const onUpdateNote = (updatedNote) => {
    // 修正された新しいノートの配列
    const updateNotesArray = notes.map((note) => {
      if (note.id === updatedNote.id) {
        return updatedNote;
      } else {
        return note;
      }
    });

    setNotes(updateNotesArray);

  }

  const getActiveNote = () => {
    // console.log("click getActiveNote")
    return notes.find((note) => note.id === activeNote);
  }

  return (
    <div className="App">
      {/* 左側 */}
      <Sidebar
        onAddNote={onAddNote}
        notes={notes}
        onDeleteNote={onDeleteNote}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
      />
      {/* 右側 */}
      <Main activeNote={getActiveNote()}
        onUpdateNote={onUpdateNote} />
    </div>
  )
}

export default App
