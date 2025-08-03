const express = require('express');
const { GoogleGenerativeAI } = require('@google/generative-ai');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Initialize Google Gemini AI
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Enable CORS so frontend can make requests
app.use(cors());

// Serve static files (like index.html)
app.use(express.static('public'));

// API route for AI chat
app.get('/api/chat', async (req, res) => {
  const message = req.query.message;

  if (!message) {
    return res.status(400).json({ error: 'Message is required' });
  }

  // Check if API key is available
  if (!process.env.GEMINI_API_KEY) {
    return res.status(500).json({ 
      error: 'Gemini API key not configured. Please add GEMINI_API_KEY to your .env file' 
    });
  }

  try {
    // Use Gemini 1.5 Flash model
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    
    const result = await model.generateContent(message);
    const response = await result.response;
    const text = response.text();
    
    res.json({ 
      response: text,
      model: "gemini-1.5-flash"
    });

  } catch (error) {
    console.error('Gemini API Error:', error);
    res.status(500).json({ 
      error: 'Failed to get response from Gemini API',
      details: error.message 
    });
  }
});

// Add a health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'Server is running',
    apiKeyConfigured: !!process.env.GEMINI_API_KEY,
    model: 'gemini-1.5-flash'
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
