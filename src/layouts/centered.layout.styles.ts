import { css } from '@emotion/css';
import { theme } from 'core/theme';
// Estilos para el componente de centrar el layout
export const root = css`
  display: flex;
  flex-direction: column;
  width: 80%;
  min-height: 100vh;
  margin: 0 auto;
  align-items: center;
  @media (min-width: ${theme.breakpoints.values.sm}px) {
    justify-items: center;
  }
`;
