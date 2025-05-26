from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from typing import List
from pydantic import BaseModel
from config import projects_coll

app = FastAPI(title="Lemuel Torrefiel Portfolio API", description="This FastAPI server is dedicated for the portfolio website of Lemuel Torrefiel.")

# Allow CORS for your frontend (adjust origins as needed)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Replace with your frontend URL in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# class Project(BaseModel):
#     id: int
#     name: str
#     description: str
#     url: str

# @app.get("/projects", response_model=List[Project])
@app.get("/projects")
async def get_projects():
    projects = await projects_coll.find({}, {"_id": 0}).to_list(None)
    return projects
