import Avatar from "@components/UI/Atom/Avatar";
import { IComment } from "@interfaces/index";
import { ThumbsUp, Trash } from "phosphor-react";
import React, { useState } from "react";
import * as S from "./styles";

const Comment = ({ content, deleteCommentHandle }: IComment) => {
  const [likeCount, setLikeCount] = useState<number>(0);

  return (
    <S.CommentContainer>
      <Avatar src="https://github.com/mateuscesarglima.png" hasBorder={false} />
      <S.CommentBox>
        <S.CommentContent>
          <header>
            <S.authorAndTime>
              <strong>Mateus Cesar</strong>
              <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:30">
                Cerca de 1h
              </time>
            </S.authorAndTime>
            <button
              onClick={() => deleteCommentHandle(content)}
              title="Deletar Comentário"
            >
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </S.CommentContent>
        <S.CommentFooter>
          <button onClick={() => setLikeCount(likeCount + 1)}>
            <ThumbsUp size={20} />
            Aplaudir &#8226; <span>{likeCount}</span>
          </button>
        </S.CommentFooter>
      </S.CommentBox>
    </S.CommentContainer>
  );
};

export default Comment;
