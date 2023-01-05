import Avatar from "@components/UI/Atom/Avatar";
import Comment from "@components/UI/Molecule/Comment";
import { IPost } from "@interfaces/index";
import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import * as S from "./styles";

const Post = ({ author, content, publishedAt }: IPost) => {
  const [comments, setComments] = useState(["Post muito bacana, hein?"]);
  const [commentText, setCommentText] = useState("");

  const publishedDateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBR,
    }
  );

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  const createNewCommentHandle = (event: FormEvent) => {
    event.preventDefault();
    setComments([...comments, commentText]);
    setCommentText("");
  };

  const handleNewCommentInvalid = (
    event: InvalidEvent<HTMLTextAreaElement>
  ) => {
    event.target.setCustomValidity("Esse campo é obrigatório");
  };

  const deleteCommentHandle = (commentToDelete: string) => {
    const commentsWithoutDeletedOne = comments.filter((comment) => {
      return comment !== commentToDelete;
    });
    setComments(commentsWithoutDeletedOne);
  };

  const isNewCommentEmpty = commentText.length === 0;

  return (
    <S.PostContainer>
      <header>
        <S.Author>
          <Avatar src={author.avatarUrl} hasBorder={true} />
          <S.AuthorInfo>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </S.AuthorInfo>
        </S.Author>
        <S.Time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </S.Time>
      </header>
      <S.Content>
        {content.map((line, index) => {
          if (line.type === "paragraph") {
            return <p key={line.content}>{line.content}</p>;
          } else if (line.type === "link") {
            return (
              <p key={line.content}>
                <a href="#">{line.content}</a>
              </p>
            );
          }
        })}
      </S.Content>
      <S.FormContainer onSubmit={createNewCommentHandle}>
        <strong>Deixe seu feedback</strong>
        <textarea
          name="feedback"
          id="feedback"
          placeholder="Escreva alguma coisa..."
          onChange={(e) => setCommentText(e.target.value)}
          value={commentText}
          onInvalid={handleNewCommentInvalid}
          required
        />
        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
            Publicar
          </button>
        </footer>
      </S.FormContainer>
      <S.CommentList id="comment-list">
        {comments.map((comment) => (
          <Comment
            key={comment}
            content={comment}
            deleteCommentHandle={deleteCommentHandle}
          />
        ))}
      </S.CommentList>
    </S.PostContainer>
  );
};

export default Post;
