import styles from "./Post.module.css";
import { Comment } from "./Comment";
import { Avatar } from "./Avatar";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/Diegotgagliardi.png" />
          <div className={styles.authorInfo}>
            <strong>Alan Trizotte</strong>
            <span>Full Stack Developer</span>
          </div>
        </div>

        <time dateTime="2024-08-07 18:10:30">Publicado há 1h atrás</time>
      </header>

      <div className={styles.content}>
        <p>What is Lorem Ipsum?</p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the s standard dummy text ever since
          the 1500s, when an unknown printer took a galley of type and scrambled
          it to make a type specimen book. It has survived not only five
          centuries, but also the leap into electronic typesetting, remaining
          essentially unchanged. It was popularised in the 1960s with the
          release of Letraset sheets containing Lorem Ipsum passages, and more
          recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <p>
          Link para projeto:{" "}
          <a href="https://github.com/Alantrizotte06/ProjetoReact">
            Clique aqui
          </a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Deixe um comentário" />

        <footer>
          <button type="submit">Comentar</button>
        </footer>
      </form>

      <div className="styles.commentList">
        <Comment />
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
