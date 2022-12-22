import styled from "styled-components";

export const Aside = styled.aside`
  background-color: var(--gray-800);
  border-radius: 8px;
  overflow: hidden;
`;

export const AsideHeaderImage = styled.img`
  width: 100%;
  height: 72px;
  object-fit: cover;
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: calc(0px - 1.5rem - 6px);

  strong {
    margin-top: 1rem;
    color: var(--gray-100);
    line-height: 1.6;
  }

  span {
    font-size: 0.875rem;
    color: var(--gray-400);
    line-height: 1.6rem;
  }
`;

export const Footer = styled.footer`
  border-top: 1px solid var(--gray-600);
  margin-top: 1.5rem;
  padding: 1.5rem 2rem 2rem;

  a {
    width: 100%;
    height: 50px;

    background: transparent;
    display: block;

    border-radius: 8px;
    color: var(--green-300);
    border: 1px solid var(--green-300);

    padding: 0 1.5rem;
    font-weight: 700;
    text-decoration: none;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    transition: 0.2s;

    &:hover {
      background: var(--green-300);
      color: #fff;
    }
  }
`;
