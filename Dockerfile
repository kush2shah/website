# Frontend build
FROM node:16 as build
WORKDIR /workspace/frontend
COPY ./kushs/package.json /workspace/frontend/
COPY ./kushs/tsconfig.json /workspace/frontend/
RUN npm install
COPY ./kushs/src /workspace/frontend/src
RUN npm run build

# Backend build 
FROM python:3.10
WORKDIR /workspace/backend
COPY ./kushs/backend/requirements.txt /workspace/backend/
RUN pip install --no-cache-dir -r requirements.txt
COPY ./kushs/backend /workspace/backend

# Bring frontend build into image
COPY --from=build /workspace/frontend/build /workspace/frontend/build

# Setup commands
CMD ["python", "main.py"]
EXPOSE 8080