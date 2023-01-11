import Link from "next/link";
import styles from "../notes/Notes.module.css";

export default function Note({ note }: any) {
  const { title, field, created, id } = note || {};
  return (
    <Link href={`/notes/${id}`}>
      <div className={styles.note}>
        <h2>{title}</h2>
        <h5>{field}</h5>
        <p>{created}</p>
      </div>
    </Link>
  );
}
