from fastapi import FastAPI
from pydantic import BaseModel
from model import classify_text
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "https://www.youtube.com",
    # Add other origins as needed
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["POST"],  # Adjust HTTP methods as needed
    allow_headers=["*"],     # Allow all headers, you can adjust as needed
)

# Define a Pydantic model to handle request body
class InputText(BaseModel):
    text: str

# Define an endpoint to classify text
@app.post("/classify/")
async def classify(input_text: InputText):
    # Extract input text from request body
    text = input_text.text

    # Call the classify_text function from the model module
    predictions = classify_text([text])

    # Return the predictions
    return {"predictions": predictions}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
