import React from 'react'
import Highlight from '../HighLight'
import './About.scss'

export default function About() {
    return (
        <>
            <div className="about">
                <Highlight title="SOBRE" description="SOBRE"></Highlight>
            </div>

            <h2>Objetivo</h2>

            <p>
                Este projeto se trata de um laboratório com o objetivo de organizar playlists de vídeos para estudo.
            </p>

            <p>
                Com ele, foi possível aprimorar técnicas de performance, utilizando métricas de Web Vitals e ferramentas como Performance DevTools e Lighthouse.
            </p>

            <h2>Feitos</h2>

            <dl>
                <dt>Melhoria na renderização</dt>
                <dd>Memoização de processamento e componentes.</dd>
                <dd>Uso de virtualização de listas.</dd>
                <dd>Melhora da gestao de stado local e global</dd>
            </dl>

            <dl>
                <dt>Melhorias no carregamento</dt>
                <dd>Otimização de imagens.</dd>
                <dd>Atualização no formato das imagens.</dd>
                <dd>Lazy load em rotas.</dd>
                <dd>Bundles divididos com foco em cache HTTP.</dd>
                <dd>Remoção de libs subutilizadas.</dd>
                <dd>Bundle agrupado por funcionalidade.</dd>
                <dd>Assets otimizados (imagens, fontes, JS, CSS, HTML).</dd>
                <dd>Uso de imports dinâmicos.</dd>
                <dd>Cache para solicitações recorrentes</dd>
            </dl>
        </>
    )
}