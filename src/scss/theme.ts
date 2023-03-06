import { createGlobalStyle, DefaultTheme } from 'styled-components';

interface ITheme extends DefaultTheme {
  body: string;
  text: string;
  button: string;
}

export const GlobalStyles = createGlobalStyle`
  .page,
  .navbar,
  .modal {
    background: ${({ theme }: { theme: ITheme }) => theme.body};
    color: ${({ theme }: { theme: ITheme }) => theme.text};
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }
  .button {
    background: ${({ theme }: { theme: ITheme }) => theme.button};
    color: ${({ theme }: { theme: ITheme }) => theme.text};
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }
  .rootNoteModal {
    background: ${({ theme }: { theme: ITheme }) => theme.button};
    color: ${({ theme }: { theme: ITheme }) => theme.text};
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }
`;

export const lightTheme: ITheme = {
  body: '#f1f1f1',
  text: '#121620',
  button: '#dddddd',
};

export const darkTheme: ITheme = {
  body: '#262626',
  text: '#f1f1f1',
  button: '#454545',
};
