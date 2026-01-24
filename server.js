const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
require('dotenv').config();

const app = express();
const port = 8000;

// Enable CORS for all routes
app.use(cors({
  origin: ['http://localhost:3000', 'https://kushs.org'],
  credentials: true
}));

// Parse JSON bodies
app.use(express.json());

// Health check endpoint
app.get('/', (req, res) => {
  res.json({ status: 'Backend running', message: 'Claude chat API proxy' });
});

// Claude chat proxy endpoint
app.post('/api/chat', async (req, res) => {
  try {
    console.log('Received chat request:', req.body);
    
    const apiKey = process.env.REACT_APP_CLAUDE_API_KEY;
    if (!apiKey) {
      return res.status(500).json({ 
        error: { message: 'Claude API key not configured' }
      });
    }

    const { messages, model = 'claude-sonnet-4-20250514', max_tokens = 1024 } = req.body;

    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ 
        error: { message: 'Messages array is required' }
      });
    }

    console.log('Calling Claude API with', messages.length, 'messages');

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model,
        max_tokens,
        messages
      })
    });

    const responseData = await response.json();
    
    if (!response.ok) {
      console.error('Claude API error:', response.status, responseData);
      return res.status(response.status).json({
        error: { message: responseData.error?.message || 'Claude API request failed' }
      });
    }

    console.log('Claude API response received successfully');
    res.json(responseData);

  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ 
      error: { message: error.message || 'Internal server error' }
    });
  }
});

app.listen(port, () => {
  console.log(`Backend server running at http://localhost:${port}`);
  console.log(`API key available: ${process.env.REACT_APP_CLAUDE_API_KEY ? 'Yes' : 'No'}`);
});