import styled, {css} from 'styled-components';

export const Header = styled.div`
  width: 100%;
  display: flex;
  background-color: grey;
`;

export const Button = styled.a<{isActive: boolean}>`
  width: 50%;
  text-align: center;
  font-size: 36px;
  text-decoration: none;
  color: black;

  ${({isActive}) =>
    isActive &&
    css`
      background-color: #f4f4f4;
      border-radius: 8px 8px 0 0;
    `};

  &:hover {
    text-decoration: underline;
  }
`;
