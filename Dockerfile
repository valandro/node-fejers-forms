FROM node:10.15-slim
# Create app directory
WORKDIR /
# Copy important files to root folder
COPY package*.json ./
COPY .env ./
COPY gulpfile.js ./
# Install app dependencies
RUN npm install
RUN npm install gulp -g
# Bundle app source
COPY . .
CMD ["gulp"]