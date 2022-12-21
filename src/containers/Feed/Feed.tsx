import Post from "@components/UI/Atom/Post";
import Header from "@components/UI/Organism/Header";
import React from "react";

import * as S from "./styles";

const Feed = () => {
  return (
    <div>
      <Header />
      <S.Wrapper>
        <S.SideBar>Sidebar</S.SideBar>
        <S.MainContent>
          <Post
            author="Mateus Cesar"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Repellendus vel sunt praesentium deserunt delectus eaque eligendi voluptatem"
          />
          <Post
            author="Joaozinho dez ano"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Repellendus vel sunt praesentium deserunt delectus eaque eligendi voluptatem"
          />
        </S.MainContent>
      </S.Wrapper>
    </div>
  );
};

export default Feed;
