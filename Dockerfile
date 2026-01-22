FROM node:18-slim

# Install libatomic1 with optimized apt commands
RUN apt-get update && \
    apt-get install -y --no-install-recommends libatomic1 && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy application files
COPY . .

# Expose port (Railway handles this automatically, but good practice)
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
