import styled from "styled-components";

export const Avatar = styled.img<{ hasBorder: boolean }>`
  width: calc(3rem + 12px);
  height: calc(3rem + 12px);
  border-radius: 8px;
  border: ${({ hasBorder }) =>
    hasBorder ? `4px solid var(--gray-800)` : null};
  outline: ${({ hasBorder }) =>
    hasBorder ? `2px solid var(--green-300)` : null};
`;
