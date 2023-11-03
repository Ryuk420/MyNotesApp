import { useState } from "react";

function AddNote({handleAddNote}) {

    const [noteText,setNoteText] = useState("");
    const [noteTitle,setNoteTitle] = useState("");
    const charlimitText = 200;
    //const charlimitTitle = 20;

    function handleChangeTitle(event) {
        setNoteTitle(event.target.value);
    }

    function handleChangeText(event) {
        if(charlimitText-event.target.value.length >=0) {
            setNoteText(event.target.value);
        }

    }

    function handleSaveClick () {
        if(noteText.trim().length > 0 && noteTitle.trim().length > 0){
            handleAddNote(noteTitle,noteText);
            setNoteText('');
            setNoteTitle('');
        }
        
    }

    return (
        <div className="note new">
            <textarea 
                rows='2' 
                cols='10' 
                placeholder="Title... "
                onChange = {handleChangeTitle}
                value={noteTitle}>
            </textarea>
            <textarea 
                rows='8' 
                cols='10' 
                placeholder="Type to add note... "
                onChange = {handleChangeText}
                value={noteText}>
            </textarea>
            <div className="note-footer">
                <small>{charlimitText-noteText.length} Remaining</small>
                <button className="save" onClick={handleSaveClick}>Add Note</button>
            </div>
        </div>
    );
}

export default AddNote;