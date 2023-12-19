import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
  ${reset}
  /* other styles */
  
  body {
    font-size: 16px;
    line-height: 1.6;
    font-family: 'Noto Sans KR', sans-serif;
    color:#333;
    background: #333;
    h2{color:#fff}
    p{color:#fff}
    span{color:#fff}
    h3{color:#fff}
    td{color:#fff}
    th{color:#fff}
    a{color:#fff}
  }
  a {
    text-decoration: none;
    color:#333; 
  }
  li { list-style:none;}
  img { vertical-align: top; }
  
  .inner { width:1400px; margin:auto; box-sizing:border-box; position:relative }
  .main { width: 100%; }
  .main h2 { text-align: center; font-size: 40px; margin-bottom: 50px; }
  button { border:none; cursor: pointer;  }
`

export default GlobalStyle;