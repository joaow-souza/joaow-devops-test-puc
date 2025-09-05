# Etapa de build
FROM node:20-alpine AS builder

# Define o diretório de trabalho
WORKDIR /app

# Copia apenas os arquivos de dependência para otimizar cache
COPY package*.json ./

# Instala as dependências
RUN npm install --production

# Copia o restante do código
COPY . .

# Expõe a porta que a aplicação vai usar
EXPOSE 3000

# Comando para rodar a aplicação
CMD ["node", "index.js"]
