import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html{
    @media (max-width: 1700px){
        font-size:75%;
    }
}

body{
    background-color: #1b1b1b;
    font-family: 'Inter', sans-serif;
    /*アニメーションでスケールアップしたさいに横スクロールが生まれていたのを隠す */
    overflow-x: hidden;
}
button{
    font-weight: bold;
    font-size: 1.1.rem;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 3px solid #23d997;
    /* button の背景色を透明にしているので、body色が表れている */
    background: transparent;
    color: white;
    transition: all 0.5s ease;
    font-family: 'Inter', sans-serif;
    &:hover{
        background-color: #23d997;
        color: white;
    }
}
h2{
        font-weight: lighter;
        font-size: 4rem;
}
h3{
    color: white;
}
a{
    font-size: 1.1rem;
}
h4{
    font-size: 2rem;
    font-weight: bold;
}
span{
    font-weight: bold;
    color: #23d997;
}
p{
    padding: 3rem 0rem;
    color: #ccc;
    font-size: 1.4rem;
    line-height: 150%;
}

`;

export default GlobalStyle;
