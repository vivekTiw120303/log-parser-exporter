# Use Node LTS image
FROM node:18

# Create app directory
WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy entire app source
COPY . .

# Expose backend port
EXPOSE 5000

# Start server
CMD ["node", "src/app.js"]
