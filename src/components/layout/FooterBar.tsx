import './FooterBar.scss'
export default function FooterBar(prop: any) {
    return (
        <>
            <div className="footer-bar">
                <div className="container">
                    <div className="d-flex mb-2 p-3">
                        <a
                            className="w-100 text-center font-weight-lighter text-decoration-none text-secondary"
                            href="https://www.linkedin.com/in/fernando-barros-dev/"
                            target="_blank"
                        >
                            Fernando Barros
                        </a>
                    </div>

                    {prop.children}
                </div>
            </div>
        </>
    )
}