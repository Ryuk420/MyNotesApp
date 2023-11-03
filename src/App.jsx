import NoteList from "./components/NoteList";
import Notes from "./notes";
import { useState } from "react";
import { nanoid } from "nanoid";
import Search from "./components/Search";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {

  const [notes, setNotes] = useState(Notes);

  const [searchText, setSearchText] = useState("");

  const [darkMode, setDarkMode] = useState(false);

  function addNote(title, text) {
    const date = new Date();
    const newNote = {
      key: nanoid(),
      title: title,
      content: text,
      date: date.toLocaleDateString()
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);

  }

  function deleteNote(id) {
    const newNotes = notes.filter((note) => note.key !== id);
    setNotes(newNotes);
  }

  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode} />
        <Search handleSearchNote={setSearchText} />
        <NoteList
          notes={notes.filter((note) => note.title.toLowerCase().includes(searchText))}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote} />
      </div>
      <Footer/>
    </div>

  );
}

export default App;
