import Avatar from "@components/UI/Atom/Avatar";
import Comment from "@components/UI/Molecule/Comment";
import { IPost } from "@interfaces/index";
import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import * as S from "./styles";

const Post = ({ author, content, publishedAt }: IPost) => {
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
  return (
    <S.PostContainer>
      <header>
        <S.Author>
          <Avatar img={author.avatarUrl} hasBorder={true} />
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
        {content.map((line) => {
          if (line.type === "paragraph") {
            return <p>{line.content}</p>;
          } else if (line.type === "link") {
            return (
              <p>
                <a href="#">{line.content}</a>
              </p>
            );
          }
        })}
      </S.Content>
      <S.FormContainer>
        <strong>Deixe seu feedback</strong>
        <textarea
          name="feedback"
          id="feedback"
          placeholder="Escreva alguma coisa..."
        />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </S.FormContainer>
      <S.CommentList id="comment-list">
        <Comment />
        <Comment />
        <Comment />
      </S.CommentList>
    </S.PostContainer>
  );
};

export default Post;
