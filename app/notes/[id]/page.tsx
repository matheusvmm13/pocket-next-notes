import styles from "../Notes.module.css";

async function getNote(noteId: string) {
  const result = await fetch(
    `http://127.0.0.1:8090/api/collections/notes/records/${noteId}`,
    { next: { revalidate: 10 } }
  );
  const data = await result.json();
  return data;
}

export default async function NotePage({ params }: any) {
  const note = await getNote(params.id);

  return (
    <div>
      <h1>notes/{note.id}</h1>
      <div className={styles.note}>
        <h2>{note.title}</h2>
        <h5>{note.field}</h5>
        <p>{note.created}</p>
      </div>
    </div>
  );
}
