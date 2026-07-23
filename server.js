import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// API route to proxy CSV requests to bypass CORS restrictions
app.get('/api/proxy', async (req, res) => {
  const targetUrl = req.query.url;
  if (!targetUrl || typeof targetUrl !== 'string') {
    return res.status(400).send('Missing or invalid url parameter');
  }
  try {
    const response = await fetch(targetUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/csv,text/plain,text/html,*/*'
      },
      redirect: 'follow'
    });
    if (!response.ok) {
      return res.status(response.status).send(`Failed to fetch target URL (status ${response.status})`);
    }
    const data = await response.text();
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.send(data);
  } catch (error) {
    console.error('Proxy error:', error);
    res.status(500).send('Proxy error: ' + error.message);
  }
});

// Serve static files from root directory
app.use(express.static(__dirname));

// Serve index.html for root or SPA fallback
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on http://0.0.0.0:${PORT}`);
});
