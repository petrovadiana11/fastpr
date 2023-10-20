from fastapi import FastAPI
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles

app=FastAPI()
app.mount("/static", StaticFiles(directory="static"))

@app.get("/")
def root():
    return FileResponse("static/index.html")