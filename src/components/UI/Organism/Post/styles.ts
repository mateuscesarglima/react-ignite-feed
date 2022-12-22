import styled from "styled-components";

export const PostContainer = styled.article`
  background: var(--gray-800);
  padding: 2.5rem;
  border-radius: 8px;

  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.5rem;
  }
`;

export const Author = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const AuthorInfo = styled.div`
  display: flex;
  flex-direction: column;

  strong {
    color: var(--gray-100);
    line-height: 1.6;
  }

  span {
    font-size: 0.875rem;
    color: var(--gray-400);
    line-height: 1.6rem;
  }
`;

export const Time = styled.time``;

export const Content = styled.div`
  line-height: 1.6;
  color: var(--gray-300);
  margin-top: 1.5rem;

  p {
    margin-top: 1rem;
  }

  a {
    font-weight: bold;
    color: var(--green-500);
    text-decoration: none;

    &:hover {
      color: var(--green-300);
    }
  }
`;

export const FormContainer = styled.form`
  border-top: 1px solid var(--gray-600);
  margin-top: 1.5rem;

  > strong {
    display: block;
    margin-top: 1.5rem;
    color: #fff;
  }

  > textarea {
    width: 100%;
    height: 6rem;
    background: var(--gray-900);
    border-radius: 8px;
    border-color: var(--green-300);
    margin-top: 1rem;
  }

  > button {
    margin-top: 1rem;
    padding: 1rem 1.5rem;
    background: var(--green-500);
    border: none;
    border-radius: 8px;
    color: #fff;
    font-weight: bold;
    cursor: pointer;

    &:hover {
      background: var(--green-300);
    }
  }
`;