ARG NODE_VERSION=20.11.0

FROM node:${NODE_VERSION}-alpine

RUN npm install -g pm2
WORKDIR /app


COPY . ./

RUN npm install --ignore-scripts=false --foreground-scripts --verbose sharp
RUN npm install --platform=linuxmusl --arch=x64 sharp

RUN NODE_ENV=production npm run build
RUN  npm run build
COPY . .

USER node



CMD ["pm2-runtime", "ecosystem.config.js"]
