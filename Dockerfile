# Build frontend
FROM node:16 as frontend

COPY ./kushs /workspace

WORKDIR /workspace

RUN npm install

RUN npm run build

# Build backend
FROM python:3.10 as backend
WORKDIR /workspace
COPY ./kushs/backend/requirements.txt /workspace/
RUN pip install --no-cache-dir -r requirements.txt
COPY ./kushs/backend /workspace

# Bring it all together
FROM python:3.10
WORKDIR /app
COPY --from=frontend /workspace/build /app/build
COPY --from=backend /workspace /app
CMD ["python", "main.py"]
EXPOSE 8080