# AI Chat Setup Guide

This portfolio includes an AI chatbot powered by Google's Gemini API that can answer questions about Hannah.

## Getting Your Free Gemini API Key

1. Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Click "Get API Key" or "Create API Key"
4. Copy your API key

## Setting Up the API Key

1. Open `portfolio/src/app/components/ai-chat/ai-chat.ts`
2. Find this line (around line 23):
   ```typescript
   private apiKey = 'YOUR_GEMINI_API_KEY';
   ```
3. Replace `YOUR_GEMINI_API_KEY` with your actual API key:
   ```typescript
   private apiKey = 'AIzaSyC...your-actual-key-here';
   ```

## Important Notes

- **Free Tier**: Gemini API offers a generous free tier with 60 requests per minute
- **Security**: For production, move the API key to environment variables or a backend service
- **Never commit**: Add your API key to `.gitignore` to avoid exposing it in version control

## Alternative: Using Environment Variables (Recommended for Production)

1. Create a file `portfolio/src/environments/environment.ts`:
   ```typescript
   export const environment = {
     production: false,
     geminiApiKey: 'YOUR_GEMINI_API_KEY'
   };
   ```

2. Update `ai-chat.ts` to use it:
   ```typescript
   import { environment } from '../../../environments/environment';
   
   private apiKey = environment.geminiApiKey;
   ```

3. Add to `.gitignore`:
   ```
   /src/environments/environment.ts
   ```

## Features

The AI chatbot can answer questions about:
- Hannah's education and academic background
- Technical skills and expertise
- Projects and work experience
- Leadership roles and achievements
- Personal interests and goals
- Contact information and social links

## Testing

Once set up, click the chat button in the bottom-right corner and try asking:
- "What projects has Hannah worked on?"
- "What are Hannah's technical skills?"
- "Tell me about Hannah's education"
- "What leadership roles has Hannah held?"
