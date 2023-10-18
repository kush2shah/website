from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware  # Make sure to import this
from typing import Union

app = FastAPI()

# List of allowed origins
origins = [
    "http://localhost",  # For testing
    "http://localhost:3000",  # For testing with React's default port
    "https://kushs.org",
]

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],  # Or specify: ["GET", "POST"]
    allow_headers=["*"],
)


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}
