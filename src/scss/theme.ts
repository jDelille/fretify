import { createGlobalStyle, DefaultTheme } from 'styled-components';

interface ITheme extends DefaultTheme {
  body: string;
  text: string;
  button: string;
  border: string;
  borderMedium: string;
  borderLarge: string;
}

export const GlobalStyles = createGlobalStyle`
  html,
  .page,
  .navbar,
  .modal,
  .fretboard,
  .noteBackground,
  .inactiveNote {
    background: ${({ theme }: { theme: ITheme }) => theme.body};
    color: ${({ theme }: { theme: ITheme }) => theme.text};
  }
  .button,
  .playButton,
      .pauseButton,
  .rootNoteModal {
    background: ${({ theme }: { theme: ITheme }) => theme.button};
    color: ${({ theme }: { theme: ITheme }) => theme.text};
  } 
 

  .fret {
    border-right: ${({ theme }: { theme: ITheme }) => theme.borderMedium};
    color: ${({ theme }: { theme: ITheme }) => theme.text};
  }

  .fret:nth-child(1),
    {
    color: ${({ theme }: { theme: ITheme }) => theme.text};
    border-right: ${({ theme }: { theme: ITheme }) => theme.borderLarge};
    border-left: ${({ theme }: { theme: ITheme }) => theme.borderLarge};
    background: ${({ theme }: { theme: ITheme }) => theme.body};
  }
  .noteBackground {
    background: ${({ theme }: { theme: ITheme }) => theme.body};
  }

  .secondaryControls {
    border-bottom: ${({ theme }: { theme: ITheme }) => theme.borderMedium};
    }
 
`;

export const lightTheme: ITheme = {
  body: '#f1f1f1',
  text: '#262626',
  button: '#dddddd',
  border: '1px solid #d3d3d3',
  borderMedium: '2px solid #d3d3d3',
  borderLarge: '4px solid #d3d3d3',
};

export const darkTheme: ITheme = {
  body: '#262626',
  text: '#f1f1f1',
  button: '#454545',
  border: '1px solid #5e5e5e',
  borderMedium: '2px solid #5e5e5e',
  borderLarge: '4px solid #5e5e5e',
};
