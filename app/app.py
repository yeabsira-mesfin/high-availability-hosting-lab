from flask import Flask, jsonify
from prometheus_flask_exporter import PrometheusMetrics
import os, socket, time

app = Flask(__name__)
metrics = PrometheusMetrics(app)
metrics.info('app_info', 'High-availability lab application', version='1.0.0')
START = time.time()

@app.get('/health')
def health():
    return jsonify(status='healthy', host=socket.gethostname()), 200

@app.get('/')
def index():
    return jsonify(
        service='high-availability hosting lab',
        instance=socket.gethostname(),
        environment=os.getenv('APP_ENV', 'development'),
        uptime_seconds=round(time.time() - START, 2)
    )

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
