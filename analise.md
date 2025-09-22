## Objetivo 
----------------------------------------------
Buscador de bandas e artistas
visualidar informações, listar e reproduzir videos.

## Fontes de dados
----------------------------------------------
Youtube
ticketMater

## Caso de uso 
----------------------------------------------

### Busca Artista ou Banda

**descricao**
Usuario entra como nome da banda|artista dados são solicitados
as fontes, apos carregados dados dever ser carregados na página.

**requisitos**
campos deve conter algo para busca.
não será possivel relizar a busca seguidamente "cache".

**etapas**
entra com a busca
click em buscar
sistema exibir componente load
sistema verifica se busca e válida
    - sanitização
    - diferente de vazio
Sistema acessa as fontes externas.
    - Youtube
    - ticketMater
sistema carrega informaçoes em background
sistema remove load


### Reproduzir video

**descricao**
Usuario clica em um item da lista de videos, o item clicado deve
ser carregado no embed do youtube.

**requisitos**
O video deve pertencer a lista carregada na aplicação

**etapas**
usuario clicar em um item da lista
sistema carrega embed na tela
sistema carrega mais informações sobre o video [opcional]

----------------------------------------------

## Template 

### Página de Busca

**Estado: inicial**
Deve conter um campo de busca.


**Estado: busca realizada**
Deve fixar o campo de busca no topo da pagina.


**Estado: busca finalizada com sucesso**
Exibir uma seção com uma imagem do cantor|banda e seus dados
Exibir lista de videos cada video deve conter thumb, titulo


**Estado: Video carregado.**
Deve ser exibido: [ ]
