import { MdDeleteForever } from 'react-icons/md'

function Note({ id, title, content, date, handleDeleteNote }) {
    return (<div className="note">
        <div className='note-header'>
            <h2>{title}</h2>
        </div>
        <span>{content}</span>
        <div className="note-footer">
            <small>{date}</small>
            <MdDeleteForever
                onClick={() => handleDeleteNote(id)}
                className='delete-icon'
                size='1.3em' />
        </div>

    </div>);
}

export default Note;