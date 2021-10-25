import React from "react";
import Note from "../notes/Notes";
import "./NotesContainer.css";

function NotesContainer(props) {
  const arrayreverse = (arr) => {
    const array = [];
    for (let i = arr.length - 1; i >= 0; --i) {
      array.push(arr[i]);
    }
    return array;
  };
  const notes = arrayreverse(props.notes);
  return (
    <div className="notes-container">
      <h2>Notes</h2>
      <div className="notes-container_notes custom-scroll">
        {notes?.length > 0 ? (
          notes.map((item) => (
            <Note
              key={item.id}
              note={item}
              deleteNote={props.deleteNote}
              updateText={props.updateText}
            />
          ))
        ) : (
          <h2>Pls Add Note!! </h2>
        )}
      </div>
    </div>
  );
}

export default NotesContainer;
