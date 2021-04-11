import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    backgroundColor: string;
    blueColor: string;
    onFocusBackgroundColor: string;
    greenColor: string;
    redColor: string;
    mainColor: string;
    mobile: string,
    tablet: string,
    desktop: string,
  }
  
}
