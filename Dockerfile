FROM node:lts AS build

WORKDIR /app
COPY package*.json ./
COPY tsconfig.json ./
COPY svelte.config.js ./
COPY vite.config.js ./
RUN npm install
COPY . .
RUN npm run build

FROM node:lts-slim

WORKDIR /app

# Copy only the necessary files
COPY --from=build /app/build .
COPY --from=build /app/package.json .
COPY --from=build /app/package-lock.json .
COPY --from=build /app/vite.config.js .
COPY --from=build /app/svelte.config.js .
COPY --from=build /app/tsconfig.json .

# Install only production dependencies
RUN npm ci --omit=dev

EXPOSE 3000

# Start the server using the correct entry point
CMD ["node", "."]
