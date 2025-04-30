from flask import Flask, jsonify
from flask_cors import CORS
import random

app = Flask(__name__)
CORS(app)

quotes = [
    "Do not watch the clock. Do what it does. Keep going.",
    "Believe you can and you're halfway there.",
    "Your limitation-it's only your imagination.",
    "Push yourself, because no one else is going to do it for you.",
    "Skibidi.",
    "Believe in yourself & you will be unstoppable.",
    "When you get tired, learn to rest, not quit.",
    "The most effective way to do it, is do it."
]

@app.route('/api/quote')
def quote():
    return jsonify({"quote": random.choice(quotes)})

if __name__ == '__main__':
    app.run(debug=True)