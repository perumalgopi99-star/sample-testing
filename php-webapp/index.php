<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP Sample App</title>
    <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #eef2f3; margin: 0; display: flex; align-items: center; justify-content: center; height: 100vh; }
        .card { background: white; padding: 3rem; border-radius: 15px; box-shadow: 0 10px 25px rgba(0,0,0,0.1); border-top: 5px solid #4F5B93; text-align: center; }
        h1 { color: #4F5B93; margin-bottom: 0.5rem; }
        .info { color: #666; margin-bottom: 1.5rem; }
        #api-result { font-family: monospace; background: #f8f9fa; padding: 10px; border-radius: 5px; color: #333; }
    </style>
</head>
<body>
    <div class="card">
        <h1>PHP Web App</h1>
        <p class="info">Minimalist PHP application.</p>
        <div id="api-result">Loading API data...</div>
    </div>
    <script>
        fetch('api.php')
            .then(res => res.json())
            .then(data => {
                document.getElementById('api-result').innerText = data.message;
            });
    </script>
</body>
</html>
