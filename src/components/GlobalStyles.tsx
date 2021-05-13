import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
    ${reset};
    body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        /* @import url(https://fonts.googleapis.com/earlyaccess/notosanskr.css);

        font-family: "Noto Sans KR", sans-serif; */
        background-color: #06090F;
        
    }
    a {
        text-decoration-line: none;
    }
   
    * {
        margin: 0;
        padding: 0;
    }
`;

export default globalStyles;
