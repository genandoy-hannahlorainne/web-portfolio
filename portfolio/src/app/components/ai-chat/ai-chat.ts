import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Message {
  text: string;
  isUser: boolean;
  timestamp: Date;
}

@Component({
  selector: 'app-ai-chat',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ai-chat.html',
  styleUrls: ['./ai-chat.scss']
})
export class AiChatComponent {
  messages: Message[] = [];
  userInput: string = '';
  isLoading: boolean = false;
  isChatOpen: boolean = false;
  
  private apiKey = 'AIzaSyAu48xy_9Nvrl-GFUqPMj6JPxZ--0gkZyk';
  
  private systemContext = `You are an AI assistant for Hannah Lorainne Genandoy's portfolio website. 
  
  Here's information about Hannah:
  
  PERSONAL INFO:
  - Full Name: Hannah Lorainne Genandoy
  - Current Status: Diploma in Information Technology (DIT) student at Polytechnic University of the Philippines-Taguig (2023-Present)
  - Aspiring: Web Developer and Project Manager
  - Goal: To leverage technical skills and leadership experience to build impactful web applications that solve real-world problems
  - Birthday: April 3, 2005

  EDUCATION:
  1. Polytechnic University of the Philippines-Taguig (2023-Present)
     - Diploma in Information Technology
     - Specialized in full-stack web development, mobile applications, and database systems
     - Project Manager for Pomodify and Eventure applications
     - Developed 5+ applications including healthcare and social media platforms
  
  2. Bagumbayan National High School - Senior High (2021-2023)
     - Graduated with honors in STEM strand
     - Research: "Bioplastic as an Innovative Eco-Friendly Substitute Material for Plastic Bags"
  
  3. Bagumbayan National High School - Junior High (2017-2021)
     - Graduated with honors
  
  LEADERSHIP ROLES:
  - Class Secretary (3rd Year, 2nd Sem)
  - Public Information Officer (3rd Year, 1st Sem)
  - Internal Affairs Apprentice - Computer Society (Academic Org)
  - Technical Committee Member - iRock Campus (Non-Academic Org)
  
  TECHNICAL SKILLS:
  Frontend: HTML5, CSS3, JavaScript, TypeScript, Angular, Flutter, JavaFX
  Backend: PHP, Python, C++, MySQL, SQL Server
  Tools & Deployment: Docker, Netlify, Git, PowerShell, Cisco
  
  SOFT SKILLS:
  - Project Management
  - Leadership
  - Communication
  - Collaboration
  - Time Management
  - Adaptability
  
  PROJECTS:
  1. Pomodify - A customizable Pomodoro productivity tracker (Project Manager)
     Live: pomodify.site
  
  2. PawSight - Android utility app for pet owners with AI features (Flutter)
  
  3. DevHiveSpace - Cross-platform social media web app for developers
     Live: devhivespace.com
  
  4. Eventure - Modern event management system (Project Manager)
  
  5. PDMHS Student Medical Record System - Healthcare web application
  
  PERSONAL INTERESTS:
  - Listening to music
  - Binge-watching K-dramas, T-dramas, and American TV series
  - Continuously learning new tools and frameworks
  
  SOCIAL LINKS:
  - Instagram: @hann_.i
  - LinkedIn: hannah-lorainne-genandoy
  - GitHub: genandoy-hannahlorainne
  - Facebook: nothanya
  - YouTube: @hannahlorainnegenandoy7008
  
  Answer questions about Hannah in a friendly, professional manner. If asked about something not in this information, politely say you don't have that specific information but encourage them to reach out to Hannah directly through her social links or contact form.`;

  constructor() {
    this.messages.push({
      text: "Hi! I'm Hannah's AI assistant. Ask me anything about her education, projects, skills, or experience!",
      isUser: false,
      timestamp: new Date()
    });
  }

  toggleChat() {
    this.isChatOpen = !this.isChatOpen;
  }

  async sendMessage() {
    if (!this.userInput.trim() || this.isLoading) return;

    // Check if API key is set
    if (this.apiKey === 'YOUR_GEMINI_API_KEY') {
      this.messages.push({
        text: "⚠️ The AI chatbot needs to be configured with a Gemini API key. Please check the AI_CHAT_SETUP.md file for instructions on how to get a free API key from Google.",
        isUser: false,
        timestamp: new Date()
      });
      return;
    }

    const userMessage = this.userInput.trim();
    this.messages.push({
      text: userMessage,
      isUser: true,
      timestamp: new Date()
    });

    this.userInput = '';
    this.isLoading = true;

    try {
      const response = await this.callGeminiAPI(userMessage);
      this.messages.push({
        text: response,
        isUser: false,
        timestamp: new Date()
      });
    } catch (error) {
      console.error('Gemini API Error:', error);
      this.messages.push({
        text: "Sorry, I'm having trouble connecting right now. Please check the browser console for details or contact Hannah directly through her social links.",
        isUser: false,
        timestamp: new Date()
      });
    }

    this.isLoading = false;
    setTimeout(() => this.scrollToBottom(), 100);
  }

  private async callGeminiAPI(userMessage: string): Promise<string> {
    // Simple FAQ-based responses
    const faqResponses: {[key: string]: string} = {
      'birthday': "Hannah was born on April 3, 2005.",
      'age': "Hannah is 20 years old.",
      'goal': "Hannah aims to build impactful web applications that solve real-world problems using her technical skills and leadership experience.",
      'education': "Hannah is currently a Diploma in Information Technology student at PUP-Taguig (2023-Present). She graduated with honors from Bagumbayan National High School, STEM strand (2021-2023).",
      'school': "Hannah studies at Polytechnic University of the Philippines-Taguig.",
      'technical': "Frontend: HTML5, CSS3, JavaScript, TypeScript, Angular, Flutter, JavaFX\nBackend: PHP, Python, C++, MySQL, SQL Server\nTools: Docker, Netlify, Git, PowerShell, Cisco",
      'tech': "Frontend: HTML5, CSS3, JavaScript, TypeScript, Angular, Flutter, JavaFX\nBackend: PHP, Python, C++, MySQL, SQL Server\nTools: Docker, Netlify, Git, PowerShell, Cisco",
      'soft': "Project Management, Leadership, Communication, Collaboration, Time Management, and Adaptability.",
      'projects': "1. Pomodify - Pomodoro productivity tracker (pomodify.site)\n2. PawSight - Android app for pet owners with AI\n3. DevHiveSpace - Social media for developers (devhivespace.com)\n4. Eventure - Event management system\n5. PDMHS - Student Medical Record System",
      'pomodify': "Pomodify is a customizable Pomodoro productivity tracker. Hannah was the Project Manager. Visit: pomodify.site",
      'pawsight': "PawSight is an Android utility app for pet owners built with Flutter, featuring smart AI capabilities.",
      'devhive': "DevHiveSpace is a cross-platform social media web application for developers to connect and collaborate. Visit: devhivespace.com",
      'eventure': "Eventure is a modern event management system designed to streamline event planning and monitoring. Hannah was the Project Manager.",
      'leadership': "Class Secretary (3rd Year, 2nd Sem), Public Information Officer (3rd Year, 1st Sem), Internal Affairs Apprentice at Computer Society, Technical Committee Member at iRock Campus.",
      'contact': "Instagram: @hann_.i\nLinkedIn: hannah-lorainne-genandoy\nGitHub: genandoy-hannahlorainne\nFacebook: nothanya\nYouTube: @hannahlorainnegenandoy7008",
      'social': "Instagram: @hann_.i\nLinkedIn: hannah-lorainne-genandoy\nGitHub: genandoy-hannahlorainne\nFacebook: nothanya\nYouTube: @hannahlorainnegenandoy7008",
      'interests': "Hannah enjoys listening to music and binge-watching K-dramas, T-dramas, and American TV series.",
      'hobby': "Listening to music and watching K-dramas, T-dramas, and American TV series.",
      'name': "Hannah Lorainne Genandoy",
      'full name': "Hannah Lorainne Genandoy",
      'experience': "Project Manager for Pomodify and Eventure. Developed 5+ applications including healthcare and social media platforms. Specialized in full-stack web development and mobile applications.",
      'strand': "Hannah graduated with honors in the STEM (Science, Technology, Engineering, and Mathematics) strand.",
      'research': "Hannah's research was titled 'Bioplastic as an Innovative Eco-Friendly Substitute Material for Plastic Bags' during Senior High School."
    };

    // Simple keyword matching
    const lowerMessage = userMessage.toLowerCase();
    
    for (const [keyword, response] of Object.entries(faqResponses)) {
      if (lowerMessage.includes(keyword)) {
        return response;
      }
    }
    
    // Default response
    return "I can answer questions about Hannah's education, skills, projects, leadership roles, goals, interests, or contact information. What would you like to know?";
  }

  private scrollToBottom() {
    const chatMessages = document.querySelector('.chat-messages');
    if (chatMessages) {
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }
  }

  handleKeyPress(event: KeyboardEvent) {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      this.sendMessage();
    }
  }
}
