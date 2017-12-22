FROM mhart/alpine-node:8.9.1
ENV NODE_ENV=production
RUN addgroup -S app && adduser -S -g app app && mkdir /app && chown app /app
USER app
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
EXPOSE 3000
CMD ["node","server"]