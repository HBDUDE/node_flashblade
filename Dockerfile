FROM node:alpine
WORKDIR /app
COPY package.json ./app
RUN npm install
COPY . ./app
CMD /bin/sh -c 'while true; do node index.js; sleep ${refresh_seconds:-60}; done;'
# Credit to d-nix.nl for showing me how to do the refresh!