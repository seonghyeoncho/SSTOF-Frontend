import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    backgroundColor: string;
    hoverBlueColor: string;
    onFocusBackgroundColor: string;
  }
}
