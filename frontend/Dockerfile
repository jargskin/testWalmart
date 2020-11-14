FROM node:12.13.0-alpine
WORKDIR /app
COPY src ./src
COPY public ./public
COPY server.js ./
COPY package*.json ./
RUN npm install
RUN npm install react-scripts@3.0.1 -g
CMD ["npm","run","build:server"]
# CMD ["npm","start"]