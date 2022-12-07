import React, { useEffect } from 'react'
import './style/Sidebar.css'


const Sidebar = ({onAddNote, notes, onDeleteNote, activeNote, setActiveNote}) => {
    const sortedNotes = notes.sort((a, b) => b.modDate - a.modDate);

  return (
    <div className='app-sidebar'>
        <div className='app-sidebar-header'>
            <h1>筆記</h1>
            <button onClick={onAddNote}>新增</button>
        </div>
        <div className='app-sidebar-notes'>
            {sortedNotes.map((note) => (
                <div className={`app-sidebar-note ${note.id === activeNote && 'active'}`} key={note.id} onClick={() => setActiveNote(note.id)}>
                    <div className='sidebar-title'>
                        <strong>{note.title}</strong>
                        <button onClick={() => onDeleteNote(note.id)}>刪除</button>
                    </div>
                    <p>{note.content}</p>
                    <small>
                        最後的修正日期:{new Date(note.modDate).toLocaleDateString('zh-tw', {
                        hour: "2-digit",
                        minute: "2-digit"
                        })}
                    </small>
                </div>
            ))}

        </div>
    </div>
  )
}

export default Sidebar