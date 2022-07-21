import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus{
        outline: 0;
        box-shadow: 0 0 0 2px ${props => props.theme['blue-3']}}

    body{
        background: ${props => props.theme['blue-2']};
        -webkit-font-smoothing: antialiased;
    }

    border-style, input, text-area, button{
        font-family: 'Nunito', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }

    h1, h2{
        font-family: 'Nova Round', cursive;
    }
`