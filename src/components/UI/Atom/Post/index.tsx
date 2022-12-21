import { IPost } from "@interfaces/index";

const Post = ({ author, content }: IPost) => {
  return (
    <div>
      <p>
        <strong>{author}</strong>
      </p>
      <p>{content}</p>
    </div>
  );
};

export default Post;
