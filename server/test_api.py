import requests

# API endpoint
url = "http://127.0.0.1:5000/predict"

# Sample input (same format as your model expects)
data = {
    "Math_Score": 85,
    "Logic_Score": 90,
    "Creativity": 0,         # 0 = Low
    "Communication": 1,      # 1 = Medium
    "Preferred_Subject": 1   # 1 = CS (based on your encoding)
}

# Send POST request
response = requests.post(url, json=data)

# Show result
print("✅ Response from API:")
print(response.json())
