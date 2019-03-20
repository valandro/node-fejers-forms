FROM node:10.15-slim
# Create app directory
WORKDIR /usr/src/app
# Install app dependencies
COPY package*.json ./
COPY .env ./
RUN npm install
RUN npm install gulp -g
# Bundle app source
COPY . .
CMD ["gulp"]