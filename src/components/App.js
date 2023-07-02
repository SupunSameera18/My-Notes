import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import AddNote from "./AddNote";
import NoteFeed from "./NoteFeed";

function App() {
  const [noteList, setNoteList] = useState([]);

  function addNote(note) {
    setNoteList((prevNotes) => [...prevNotes, note]);
  }

  function deleteNote(id) {
    setNoteList((prevNotes) => {
      return prevNotes.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <AddNote onAdd={addNote} />
      <NoteFeed notes={noteList} onDelete={deleteNote} />
      <Footer />
    </div>
  );
}

export default App;
