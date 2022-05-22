FROM node:18-alpine as builder
LABEL org.opencontainers.image.authors="Natta Wang <xenogew@gmail.com>"

WORKDIR /app

RUN apk --no-cache add curl
RUN curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm@7
RUN pnpm config set store-dir .pnpm-store

COPY .npmrc package.json pnpm-lock.yaml ./

RUN pnpm install

COPY . .

RUN pnpm run build

FROM node:18-alpine

WORKDIR /app

COPY --from=builder /app/target .
COPY package.json ./

EXPOSE 3000
CMD ["node", "index.js"]
