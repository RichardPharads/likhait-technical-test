FROM node:18-bullseye

WORKDIR /app
# Copy package files

COPY package*.json ./

#Remove node_modules and package-lock.json and install dependencies
RUN rm -rf node_modules package-lock.json && \
    npm install --legacy-peer-deps

# Copy the rest of the application
COPY . .

# Build the application
RUN npm run build

# Expose port
EXPOSE 5173

# Start the development server
CMD ["npm", "run", "dev", "--", "--host"]