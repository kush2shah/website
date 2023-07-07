from typing import Union

from fastapi import FastAPI

app = FastAPI()

# List of allowed origins
page = [
    "https://kushs.org/",
]

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=page,
    allow_credentials=True,
    allow_methods=page,
    allow_headers=page,
)

@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}
