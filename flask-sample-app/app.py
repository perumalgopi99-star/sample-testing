from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html', title='Flask Sample App')

@app.route('/api/status')
def status():
    return {'status': 'active', 'message': 'Flask server is running'}

if __name__ == '__main__':
    app.run(debug=True)
