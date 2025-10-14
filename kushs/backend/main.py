from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Union, List
import httpx
import os

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


class Message(BaseModel):
    role: str
    content: str

class ChatRequest(BaseModel):
    messages: List[Message]
    model: str = "claude-3-sonnet-20240229"
    max_tokens: int = 1024

@app.post("/api/chat")
async def chat_with_claude(request: ChatRequest):
    try:
        # Get API key from environment variables
        api_key = os.getenv("REACT_APP_CLAUDE_API_KEY")
        if not api_key:
            raise HTTPException(status_code=500, detail="Claude API key not configured")
        
        async with httpx.AsyncClient() as client:
            response = await client.post(
                "https://api.anthropic.com/v1/messages",
                headers={
                    "Content-Type": "application/json",
                    "x-api-key": api_key,
                    "anthropic-version": "2023-06-01"
                },
                json={
                    "model": request.model,
                    "max_tokens": request.max_tokens,
                    "messages": [{"role": msg.role, "content": msg.content} for msg in request.messages]
                }
            )
            
            if response.status_code != 200:
                raise HTTPException(status_code=response.status_code, detail=f"Claude API error: {response.text}")
            
            return response.json()
            
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}
