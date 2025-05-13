FROM node:lts AS build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:lts-slim

WORKDIR /app
ENV PORT=8080
ENV HOST=0.0.0.0
ENV NODE_ENV=production

# Copy only the necessary files
COPY --from=build /app/build build/
COPY --from=build /app/package.json .
COPY --from=build /app/package-lock.json .

# Install only production dependencies
RUN npm ci --omit=dev

EXPOSE 8080

# Start the server using the correct entry point
CMD ["node", "build/index.js"]
