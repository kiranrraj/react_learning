from fastapi import FastAPI
from motor.motor_asyncio import AsyncIOMotorClient
from contextlib import asynccontextmanager
from dotenv import load_dotenv
import os

load_dotenv()

MONGO_URI = os.getenv("MONGO_URI")
MONGO_DB_NAME = os.getenv("MONGO_DB_NAME")
MONGO_COL_NAME = os.getenv("MONGO_COL_NAME")
client = None
db = None

print(f"{MONGO_URI} {MONGO_DB_NAME } {MONGO_COL_NAME}")

app = FastAPI()

@asynccontextmanager
async def lifespan(app: FastAPI):
    global client, db
    try:
        client = AsyncIOMotorClient(MONGO_URI)
        db = client[MONGO_DB_NAME]
        coll = db[MONGO_COL_NAME]
        print("MongoDB connection established")
        yield
    finally:
        if client:
            client.close()
            print("MongoDB Connection Closed")

app.lifespan = lifespan

@app.get("/")
async def handle_root():
    return {"messsage" : "Welcome to home page"}

@app.get('/todos')
async def get_todo():
    return {"message" : "Here is your todos"}

@app.post("/todos")
async def create_todos():
    return {"message" : "To do list created"}

@app.put("/todos/{id}")
async def update_todo(todo_id: str):
    return {"message" : f"Updated todo with id {id}"}

@app.delete("/todos/{todo_id}")
async def delete_todo(todo_id: str):
    return {"message" : f"Deleted todo with id {todo_id}"}