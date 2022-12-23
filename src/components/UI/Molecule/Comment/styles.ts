import styled from "styled-components";

export const CommentContainer = styled.div`
  margin-top: 1.5rem;
  display: flex;
  gap: 1rem;
  > img {
    width: 3rem;
    height: 3rem;
    border-radius: 8px;
  }
`;

export const CommentBox = styled.div`
  // Faz com que ocupe o maximo de espaco possivel
  flex: 1;
`;

export const CommentContent = styled.div`
  background: var(--gray-700);
  padding: 1rem;
  border-radius: 8px;
  width: 100%;

  > header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    button {
      background: transparent;
      color: var(--gray-400);
      border: none;
      width: 1.5rem;
      height: 1.5rem;
      cursor: pointer;
      font-size: 0;
      border-radius: 4px;

      &:hover {
        color: var(--red-500);
      }
    }
  }

  > p {
    margin-top: 1rem;
  }
`;

export const CommentFooter = styled.footer`
  margin-top: 1rem;

  > button {
    background: transparent;
    border: 0;
    color: var(--gray-400);
    cursor: pointer;
    display: flex;
    align-items: center;
    border-radius: 4px;

    &:hover {
      color: var(--green-500);
    }

    > span {
      margin-left: 0.3rem;
    }

    > svg {
      margin-right: 0.7rem;
    }
  }
`;

export const authorAndTime = styled.div`
  display: flex;
  flex-direction: column;

  > strong {
    line-height: 1.6;
    font-size: 0.875rem;
  }

  > time {
    line-height: 1.6;
    font-size: 0.75rem;
    color: var(--gray-400);
  }
`;
