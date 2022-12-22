import Avatar from "@components/UI/Atom/Avatar";
import { IPost } from "@interfaces/index";
import * as S from "./styles";

const Post = ({ img }: IPost) => {
  return (
    <S.PostContainer>
      <header>
        <S.Author>
          <Avatar img={img} />
          <S.AuthorInfo>
            <strong>Adamor Henner</strong>
            <span>Backend Developer</span>
          </S.AuthorInfo>
        </S.Author>
        <S.Time title="11 de Maio às 8:13" dateTime="2022-05-11 08:13:00">
          Publicado há 1h
        </S.Time>
      </header>
      <S.Content>
        <p>Fala galeraa 👋 </p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀{" "}
        </p>
        <p>
          👉 <a href="#"> jane.design/doctorcare </a>
        </p>

        <p>
          {" "}
          <a href=""> #novoprojeto #nlw #rocketseat </a>
        </p>
      </S.Content>
      <S.FormContainer>
        <strong>Deixe seu feedback</strong>
        <textarea name="feedback" id="feedback" />
        <button>Publicar</button>
      </S.FormContainer>
    </S.PostContainer>
  );
};

export default Post;
