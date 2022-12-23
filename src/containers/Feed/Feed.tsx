import Post from "@components/UI/Organism/Post";
import Sidebar from "@components/UI/Molecule/Sidebar";
import Header from "@components/UI/Organism/Header";
import { posts } from "@constants/posts";

import * as S from "./styles";

const Feed = () => {
  return (
    <div>
      <Header />
      <S.Wrapper>
        <Sidebar
          backgroundCoverImg="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZGV2ZWxvcGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=40"
          avatarImg="https://avatars.githubusercontent.com/u/75099576?v=4"
        />
        <S.MainContent>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </S.MainContent>
      </S.Wrapper>
    </div>
  );
};

export default Feed;
