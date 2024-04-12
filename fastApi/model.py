from transformers import pipeline

# Load the hate speech classification model
model_name = "IMSyPP/hate_speech_en"
classifier = pipeline("text-classification", model=model_name)

# Define label mapping
label_mapping = {
    'LABEL_0': 'acceptable',
    'LABEL_1': 'inappropriate',
    'LABEL_2': 'offensive',
    'LABEL_3': 'violent'
}

# Function to classify text
def classify_text(texts):
    results = classifier(texts)
    return [{'comment': text, 'label': label_mapping[result['label']]} for text, result in zip(texts, results)]
