"use client";
import styles from './CreateNote.module.css';
import { useState } from "react";

export default function CreateNote() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const create = async () => {
    await fetch("http://127.0.0.1:8090/api/collections/notes/records", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        content,
      }),
    });

    setContent("");
    setTitle("");
  };

  return (
    <form className={styles.form} onSubmit={create}>
      <input 
        className={styles.title}
        type="text"
        placeholder="Title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <textarea
        className={styles.content}
        placeholder="Content"
        value={content}
        onChange={(event) => setContent(event.target.value)}
      />
      <button 
        className={styles.button}
        type="submit">
          Take note
      </button>
    </form>
  );
}
