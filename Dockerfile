FROM node:20-alpine AS build

WORKDIR /Frontend-angular-js

COPY package*.json ./
RUN npm install
RUN npm install -g @angular/cli
Run npm install @supabase/supabase-js
COPY . .
EXPOSE 4200
CMD ["ng", "serve", "--host", "0.0.0.0", "--port", "4200", "--poll=2000"]

