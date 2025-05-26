from pymongo import AsyncMongoClient
from dotenv import load_dotenv
import os

load_dotenv()

mongo_uri = os.getenv("MONGODB_URI")
client = AsyncMongoClient(mongo_uri)
db = client['my-portfolio']
projects_coll = db['projects']