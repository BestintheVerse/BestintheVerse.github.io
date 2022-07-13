// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    bg: string;
    fg: string;
    fgSecondary: string;
    border: string;
    primary: string;
    primaryBlend: string;
    primaryShadow: string;
  }
}
