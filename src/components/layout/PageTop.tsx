import { createRoot } from "react-dom/client";

export default function PageTop() {
    return {
        init() {
            const pageTop = createRoot(document.getElementById('page-top')!);
            pageTop.render(
                <>
                    <title>Fernando jose gomes</title>
                </>
            )
        }
    }
}