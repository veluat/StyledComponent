import {GlobalStyle} from "@assets/style/GlobalStyle.ts";
import {App} from "@/App.tsx";
import {createRoot} from "react-dom/client";
import {ThemeProvider} from 'styled-components'
import {theme} from '@assets/style/Theme'

createRoot(document.getElementById('root') as HTMLElement).render(
    <ThemeProvider theme={theme}>
        <GlobalStyle/>
        <App/>
    </ThemeProvider>
)
