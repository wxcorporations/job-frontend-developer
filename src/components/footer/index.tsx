import React from "react";
import { CCircle, Github, Linkedin } from "react-bootstrap-icons";

import './style.scss'
export default function FooterRef () {
    return (
        <>
            <div className="w-100">
                <div className="container">
                    <div className="footer">
                        <span className="footer__disclamer"><CCircle /> Dash 2025 Todos os direitos reservados</span>
                        <div className="footer__dev">
                            <span className="footer__dev-infor">Desenvolvido por Fernando Barros</span>

                            <a
                                aria-label="icone da rede social linkedin"
                                className="text-center font-weight-lighter text-decoration-none d-inline-block"
                                href="https://www.linkedin.com/in/fernando-barros-dev/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <Linkedin className="footer__dev-linkedin"/>
                            </a>

                            <a
                                aria-label="icone da rede social github"
                                className="text-center font-weight-lighter text-decoration-none text-secondary d-inline-block"
                                href="https://github.com/wxcorporations"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <Github className="footer__dev-github"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}