import { createGlobalStyle, DefaultTheme } from 'styled-components';

interface ITheme extends DefaultTheme {
  body: string;
  button: string;
  text: string;
  modal: string;
  hover: string;
  border: string;
  borderMedium: string;
  borderLarge: string;
  container: string;
  footer: string;
  unselected: string;
  white: string;
}

export const GlobalStyles = createGlobalStyle`
  html,
  .page,
  .navbar,
  .fretboard,
  .fretboardFlipped,
  .noteBackground,
  .inactiveNote {
    background: ${({ theme }: { theme: ITheme }) => theme.body};
    color: ${({ theme }: { theme: ITheme }) => theme.text};
  }

  .modal {
    background: ${({ theme }: { theme: ITheme }) => theme.modal};
    color: ${({ theme }: { theme: ITheme }) => theme.text};
  }

  .scale:hover,
  .bottomRow,
  .content,
  .controls {
    background: ${({ theme }: { theme: ITheme }) => theme.hover};
  }

  .pill,
  .rootNoteModal,
  .noteButton {
    background: ${({ theme }: { theme: ITheme }) => theme.button};
    color: ${({ theme }: { theme: ITheme }) => theme.text};
  }
  
  .fret {
    border-right: ${({ theme }: { theme: ITheme }) => theme.borderMedium};
    color: ${({ theme }: { theme: ITheme }) => theme.text};
  }

  .toggle,
  .position,
  .naturalNotes {
    border: ${({ theme }: { theme: ITheme }) => theme.borderMedium};
  }

  .rootNote {
    background: ${({ theme }: { theme: ITheme }) => theme.text};
    color: ${({ theme }: { theme: ITheme }) => theme.body};
  }

  .unselected,
  .option,
  .displayOption,
  .checkbox:hover,
  .position:hover {
    background: ${({ theme }: { theme: ITheme }) => theme.unselected};
    color: ${({ theme }: { theme: ITheme }) => theme.text};
  }

  .unselected:hover,
  .natural:hover,
  .sharp:hover,
  .flat:hover,
  .position {
    background: ${({ theme }: { theme: ITheme }) => theme.button};
  }

  .content,
  .controls,
  .checkbox {
    background: ${({ theme }: { theme: ITheme }) => theme.button};
    color: ${({ theme }: { theme: ITheme }) => theme.text};
  }

  .fret:nth-child(1) {
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
 
  footer {
    background: ${({ theme }: { theme: ITheme }) => theme.footer};
  }
`;

export const lightTheme: ITheme = {
  body: '#E8E8E8',
  white: '#fff',
  text: '#262626',
  button: '#ffffff',
  border: '1px solid #d3d3d3',
  borderMedium: '2px solid #d3d3d3',
  borderLarge: '4px solid #d3d3d3',
  modal: '#E8E8E8',
  unselected: '#F2F2F2',
  hover: '#ffffff',
  container: '#d3d3d3',
  footer: '#fff',
};

export const darkTheme: ITheme = {
  body: '#262626',
  text: '#f1f1f1',
  white: '#fff',
  button: '#333333',
  border: '1px solid #5e5e5e',
  borderMedium: '2px solid #5e5e5e',
  borderLarge: '4px solid #5e5e5e',
  modal: '#262626',
  unselected: '#4F4F4F',
  hover: '#6B6B6B',
  container: '#5e5e5e',
  footer: '#222',
};
