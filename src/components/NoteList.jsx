import Note from "./Note";
import AddNote from "./AddNote"
function NoteList({ notes , handleAddNote , handleDeleteNote}) {
    return (
        <div className="notes-list">
            {notes.map((note) => (
                <Note
                    id={note.key}
                    title={note.title}
                    content={note.content}
                    date={note.date}
                    handleDeleteNote={handleDeleteNote} />))}
            <AddNote handleAddNote={handleAddNote}/>
        </div>
    );
}

export default NoteList;