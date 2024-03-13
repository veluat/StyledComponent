import React from 'react';
import {GlobalStyle} from "@assets/style/GlobalStyle.ts";
import {App} from "@/App.tsx";
import {createRoot} from "react-dom/client";

createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <GlobalStyle/>
        <App/>
    </React.StrictMode>
);
