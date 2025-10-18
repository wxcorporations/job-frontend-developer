# Definir a imagem base 
# AS define o nome da imagem.
FROM node:20-alpine AS octoplay

# definir hoot do projeto toda aplicação sera definida dentro dessa pasta
WORKDIR /app

# Copiar os arquivos de dependencia - para instalação posterior
COPY ./package*.json ./

# instalar dependencias na imagem e limpa o cache.
RUN npm install && npm cache clean --force;

# expor porta 3000 
# Aqui estamo espondo a porta 3000
EXPOSE 3000

# Aqui setamos o que deve ser executado para executar nossa aplicação seja prod ou dev
# Neste exemplo estamo executando modo dev.
CMD ["npm", "run", "start"]