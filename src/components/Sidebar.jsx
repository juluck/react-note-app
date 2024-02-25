/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
// import React from 'react'
import "./Sidebar.css"


// eslint-disable-next-line react/prop-types
const Sidebar = ({
    onAddNote,
    onDeleteNote,
    notes,
    activeNote,
    setActiveNote }) => {

    const sortedNotes = notes.sort((a, b) => b.modDate - a.modDate);

    return (
        <div className="appSidebar">
            <div className="app-sidebar-header">
                <h1>ノート</h1>
                <button onClick={onAddNote}>ページ追加</button>
            </div>
            <div className="app-sidebar-notes">
                {sortedNotes.map((note) => (
                    <div className={`app-sidebar-note ${note.id === activeNote && "active"}`} key={note.id} onClick={() => setActiveNote(note.id)} >
                        <div className="sidebar-note-title">
                            <strong>{note.title}</strong>
                            <button onClick={() => onDeleteNote(note.id)}>削除</button>
                        </div>
                        <p>
                            {note.content}
                        </p>
                        <small>最終更新日：
                            {new Date(note.modDate).toLocaleDateString('ja-JP',
                                { hour: "2-digit", minute: "2-digit" })}
                        </small>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Sidebar
