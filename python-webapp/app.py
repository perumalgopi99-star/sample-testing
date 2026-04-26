from flask import Flask, render_template, jsonify

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/api/status')
def status():
    return jsonify({"status": "healthy", "framework": "Flask"})

if __name__ == '__main__':
    app.run(debug=True, port=5000)
