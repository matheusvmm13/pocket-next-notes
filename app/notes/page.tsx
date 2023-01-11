import Note from "./Note";
import { NoteT } from "../types/Note";
import styles from './Notes.module.css';
import CreateNote from "./[id]/CreateNote";

async function getNotes() {
  const result = await fetch(
    "http://127.0.0.1:8090/api/collections/notes/records?page=1&perPage=30", 
    { cache: 'no-store'}
  );
  const data = await result.json();
  return data?.items as NoteT[];
}

export default async function NotesPage() {
  const notes = await getNotes();
  
  return (
    <div className={styles.grid}>
      <h1>Notes</h1>
      <div>
        {notes?.map((note) => {
          return <Note key={note.id} note={note} />;
        })}
      </div>
      <CreateNote />
    </div>
  );
}
