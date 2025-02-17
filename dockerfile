# Use the official Node.js 18 image as a base
FROM node:18 AS build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install
RUN npm cache clean --force
RUN npm audit fix --force


# Copy the rest of the application
COPY . .

# Build the application
RUN npm run build

# Use NGINX to serve the built files
FROM nginx:alpine

# Copy the built files from the previous stage
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start NGINX
CMD ["nginx", "-g", "daemon off;"]