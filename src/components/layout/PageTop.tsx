import React from "react";
import { createRoot } from "react-dom/client";

import logo from '@assets/logo-dash.png'

export default function PageTop() {
    return {
        init() {
            const pageTop = createRoot(document.getElementById('page-top')!);

            pageTop.render(
                <>
                    <title>Dash-corp</title>
                    <link rel="icon" type="image/png" href={logo}></link>
                </>
            )
        }
    }
}