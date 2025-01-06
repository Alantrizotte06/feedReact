import { format, formatDistanceToNow } from "date-fns";
import ptBr from "date-fns/locale/pt-BR";

import { Comment } from "./Comment";
import { Avatar } from "./Avatar";

import styles from "./Post.module.css";
import { useState } from "react";

export function Post({ author, publishedAt, content }) {
  const [comments, setComments] = useState(["post muito bacana hein!"]); //Estado

  const [newCommentText, setNewCommentText] = useState(""); //Estado

  const publishedDateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBr,
    }
  );

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBr,
    addSuffix: true,
  });

  const isNewCommentEmpty = newCommentText.length == 0;

  function handleCreateNewComment() {
    event.preventDefault();

    setComments([...comments, newCommentText]); //Utilizado para adicionar um novo comentário
    setNewCommentText(""); // Utilizando o estado para limpar a textarea
  }

  function handleNewCommentChange() {
    event.target.setCustomValidity("");
    setNewCommentText(event.target.value); // Utilizado para armazenar o valor digitado em textarea
  }

  function handleNewCommentInvalid() {
    event.target.setCustomValidity("Este campo é obrigatório!");
  }

  function deleteComment(commentToDelete) {
    const commentsWithoutDeleteOne = comments.filter((comment) => {
      return comment != commentToDelete;
    });

    setComments(commentsWithoutDeleteOne);
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((line) => {
          if (line.type == "paragraph") {
            return <p key={line.content}>{line.content}</p>;
          } else if (line.type == "link") {
            return (
              <p key={line.content}>
                <a href="#">{line.content}</a>
              </p>
            );
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          name="comment"
          value={newCommentText} // Declarando que o valor deve ser armazenado dentro deste estado
          placeholder="Deixe um comentário"
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        />

        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
            Comentar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => {
          return (
            <Comment
              key={comment}
              content={comment}
              onDeleteComment={deleteComment} // Passamos esta função para o componente Comment
            />
          );
        })}
      </div>
    </article>
  );
}
