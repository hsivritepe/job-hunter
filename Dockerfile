# Dockerfile

# Use standard Node image
FROM node:20

# Set the working directory.
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy Prisma schema
COPY prisma ./prisma/

# Generate Prisma Client
RUN npx prisma generate

# Set environment variables
ENV DATABASE_URL="mysql://root:root@db:3306/job-hunter-db"

# Expose the port.
EXPOSE 3000

# Run the application.
CMD ["npm", "run", "dev"]