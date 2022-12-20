import Post from "@components/UI/Atom/Post";
import Header from "@components/UI/Organism/Header";
import GlobalStyles from "@styles/global.styles";
import * as S from "./styles";

function App() {
  return (
    <>
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
            author="Mateus Cesar"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Repellendus vel sunt praesentium deserunt delectus eaque eligendi voluptatem"
          />
        </S.MainContent>
      </S.Wrapper>
      <GlobalStyles />
    </>
  );
}

export default App;
