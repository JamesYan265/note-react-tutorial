import React from 'react'
import './style/Main.css'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

const Main = ({activeNote, onUpdateNote}) => {

  const onEditNote = (key, value) => {
    onUpdateNote({
      ...activeNote,
      [key]:value,
      modDate: Date.now(),
    })
  }

  if(!activeNote) {
    return <div className='no-active-note'>沒有選擇任何筆記</div>
  }

  return (
    <div className='app-main'>
      <div className="app-main-note-edit">
        <input type="text" value={activeNote.title} id='title' onChange={(e) => onEditNote('title', e.target.value)} />
        <textarea id='content' placeholder='輸入筆記中的內容' value={activeNote.content} onChange={(e) => onEditNote('content', e.target.value)}></textarea>
      </div>
      <div className="app-main-note-preview">
        <h1 className="preview-title">{activeNote.title}</h1>
        <ReactMarkdown className="markdown-preview">{activeNote.content}</ReactMarkdown>
      </div>
    </div>
  )
}

export default Main