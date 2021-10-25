import React, { useState, useEffect } from "react";
import "./App.css";
import NotesContainer from "./components/NotesContainer/NotesContainer";
import SideBar from "./components/SideBar/SideBar";

function App() {
  const [notes, setnotes] = useState(
    JSON.parse(localStorage.getItem("notes-app")) || []
  );
  const addnote = (colors) => {
    const tempnote = [...notes];
    tempnote.push({
      id: Date.now() + "" + Math.floor(Math.random() * 78),
      text: "",
      date: Date.now(),
      colors,
    });
    setnotes(tempnote);
  };
  const deleteNote = (id) => {
    const tempNotes = [...notes];

    const index = tempNotes.findIndex((item) => item.id === id);
    if (index < 0) return;

    tempNotes.splice(index, 1);
    setnotes(tempNotes);
  };
  const updateText = (text, id) => {
    const tempNotes = [...notes];

    const index = tempNotes.findIndex((item) => item.id === id);
    if (index < 0) return;

    tempNotes[index].text = text;
    setnotes(tempNotes);
  };

  useEffect(() => {
    localStorage.setItem("notes-app", JSON.stringify(notes));
  }, [notes]);

  return (
    <div className="App">
      <SideBar addnote={addnote} />
      <NotesContainer
        notes={notes}
        deleteNote={deleteNote}
        updateText={updateText}
      />
    </div>
  );
}

export default App;
