import { createRoot } from "react-dom/client";

export default function PageTop() {
    return {
        init() {
            const pageTop = createRoot(document.getElementById('page-top')!);

            pageTop.render(
                <>
                    <title>OCTO-PLAY</title>
                    <link rel="icon" type="image/png" href="/assets/octocat-icon.png"></link>
                </>
            )
        }
    }
}