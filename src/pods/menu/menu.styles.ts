import { css } from '@emotion/css';

export const menu = css`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const menuBody = css`
  display: flex;
`;

export const item = css`
  justify-items: center;
  font-size: 20vw;
`;

export const items = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  width: 33%;
  color: #ff69b4;
`;

export const text = css`
  text-align: center;
  font-weight: bold;
  font-size: 1.2rem;
  font-family: 'Courier New', Courier, monospace;
`;

export const button = css`
  color: #ff69b4;
  &:hover {
    background-color: transparent;
  }
`;
