import NoteCard from "../../components/NoteCard/NoteCard"
import * as noteApi from "../../utilities/note-api"
import { useState, useEffect } from "react"
export default function NewNotePage() {
  const [newNote, setNewNote] = useState({
    text:""
  })
  const [notes, setNotes] = useState([])
  useEffect(function(){
    async function getNotes() {
      const notes = await noteApi.getAllNotes()
      setNotes(notes)
    }
    getNotes()
  },[newNote]);
  
  async function handleNewNote(evt){
    evt.preventDefault();
    const newNote1 = await noteApi.createNote(newNote)
    setNewNote({text:""})
    
  }
 
  const notesList = notes.map((note,idx) =>{ 
  let date_time = new Date(note.createdAt)
  date_time = date_time.toLocaleString()  
  return <NoteCard note={note} key={idx} created={date_time} />
})
 
  return (
    <>
   
    <h1 className="text-4xl mt-20 ">Create Note</h1>
    <form onSubmit={handleNewNote} className="flex mt-4 ml-14 items-center justify-center">
      <input className="h-12" value={newNote.text} onChange={(evt)=> setNewNote({text:evt.target.value})} />
      <button className="h-12 flex items-center" type="submit">submit</button>
    </form>
    <h1 className="text-4xl mt-6">All notes</h1>
    <ul className="flex flex-col justify-center items-center mt-4">
      {/* {notes.map((note,idx) => <li key={idx}>{note.text}</li>)} */}

     {notesList[0]? notesList: <h1 className="text-2xl text-grey-200 mt-20">No Notes Yet!</h1>}
    </ul>
    </>
  );
}