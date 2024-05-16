FROM node:20
# Create app directory
WORKDIR /usr/src/app
# Install app dependencies


COPY package*.json ./
# Copy app source code
RUN npm install
COPY . .

#Expose port and start application
EXPOSE 4000
CMD ["npm", "run", "start"]