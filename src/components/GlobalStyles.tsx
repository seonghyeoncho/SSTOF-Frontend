import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
    ${reset};
    html {
    }
    body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        /* @import url(https://fonts.googleapis.com/earlyaccess/notosanskr.css);
        
        font-family: "Noto Sans KR", sans-serif; */
        background-color: #06090F;
        margin: 0;
        padding: 0;

        font-size: 16px;
    }
    h1 {
        font-size: 2em;
        font-weight: border;
        color: white;
    } 
    h2 {
        font-size: 1.5em;
        font-weight: border;
        color: white;
    }
    h3 {
        font-size: 1.17em;
        font-weight: border;
        color: white;
    }
    h4 {
        font-size: 1em;
        font-weight: border;
        color: white;
    }
    
    a {
        text-decoration-line: none;
    }
    * {
       
    }
   
`;

export default globalStyles;
