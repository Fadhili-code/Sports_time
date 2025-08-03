# Sports-time

A modern football-focused chat application powered by Google's Gemini 1.5 Flash AI. Features a beautiful interface with European football team colors and a comprehensive database of top 50 European teams.

DockerHub url = https://hub.docker.com/u/fadhiliberacah/
Demo Video = https://drive.google.com/file/d/1NaASHdcQKfwMxX_1IZDeVYjvUQVU8QQC/view?usp=sharing
Proof of Load Balancing = https://drive.google.com/file/d/1Db07MNS-ct2zdwWdKzOtoOmqS4KWZE8k/view?usp=sharing
## Features

-  Real-time chat with Gemini 1.5 Flash AI
-  Top 50 European teams database
-  Filter teams by league (Premier League, La Liga, Bundesliga, Serie A, Ligue 1, Champions League)
-  Beautiful European football team color scheme
-  Responsive design for mobile and desktop
-  Fast and smooth animations
-  Loading states and error handling
-  Enter key support for sending messages

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure API Key

The application is already configured with a Gemini API key. If you need to use your own:

1. Get a free API key from [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Update the `.env` file with your API key:

```
GEMINI_API_KEY=your_actual_api_key_here
PORT=3001
```

### 3. Start the Server

```bash
npm start
```

The application will be available at: http://localhost:3001

## Usage

1. Open your browser and navigate to http://localhost:3001
2. **Browse Teams**: Use the left sidebar to browse top 50 European teams
3. **Filter by League**: Use the dropdown to filter teams by specific leagues
4. **Quick Chat**: Click on any team to automatically ask about them
5. **Manual Chat**: Type your own questions in the chat input
6. Press Enter or click "Send" to chat with the AI

## Teams Included

### Premier League
- Manchester City, Arsenal, Manchester United, Liverpool, Chelsea, Tottenham, Newcastle, Aston Villa, Brighton, West Ham

### La Liga
- Real Madrid, Barcelona, Atletico Madrid, Sevilla, Valencia, Villarreal, Athletic Bilbao, Real Sociedad, Real Betis, Celta Vigo

### Bundesliga
- Bayern Munich, Borussia Dortmund, RB Leipzig, Bayer Leverkusen, VfB Stuttgart, Eintracht Frankfurt, Hoffenheim, SC Freiburg, VfL Wolfsburg, 1. FC Heidenheim

### Serie A
- Inter Milan, AC Milan, Juventus, Napoli, Atalanta, Roma, Lazio, Fiorentina, Torino, Bologna

### Ligue 1
- PSG, Monaco, Lyon, Marseille, Lille, Nice, Lens, Reims, Strasbourg, Nantes

### Champions League
- Porto, Benfica, Ajax, PSV Eindhoven, Red Bull Salzburg, Shakhtar Donetsk, Red Star Belgrade, Dinamo Zagreb, Young Boys, Slovan Bratislava

## API Endpoint

- `GET /api/chat?message={message}` - Send a message to Gemini AI


## Features

- **European Football Theme**: Colors inspired by top European football teams
- **Team Database**: 50 top European teams with authentic team colors
- **League Filtering**: Filter teams by Premier League, La Liga, Bundesliga, Serie A, Ligue 1, or Champions League
- **Quick Team Selection**: Click any team to instantly ask about them
- **Modern UI**: Gradient backgrounds, smooth animations, and football-themed design
- **Real-time Chat**: Instant responses from Gemini 1.5 Flash
- **Error Handling**: Graceful error messages and loading states
- **Responsive**: Works on all device sizes
- **Accessible**: Keyboard navigation and clear visual feedback

## Troubleshooting

- **"API key not configured" error**: Check that your `.env` file contains the GEMINI_API_KEY
- **Server won't start**: Make sure no other application is using port 3001
- **Slow responses**: The AI model may take a few seconds to generate responses

## Project Structure

```
Sports_time/
├── server.js          
├── package.json       
├── .env              
├── public/
│   ├── index.html    
│   ├── script.js     
│   └── style.css     
└── README.md        
```

## Technologies Used

- **Backend**: Node.js, Express.js
- **AI**: Google Gemini 1.5 Flash API
- **Frontend**: Vanilla JavaScript, HTML5, CSS3

##Docker

## Quick Start

1. Start the services:
   bash
   docker-compose up --build -d
   

2. Access your website:
   - Main site: http://localhost:8080

3. Stop the services:
   bash
   docker-compose down
   

## Architecture

- 2 Web Servers (Nginx) serving your static files
- 1 HAProxy Load Balancer distributing traffic
- Custom Docker Network for secure communication

## Features

- Round-robin load balancing
- Health checks and automatic failover
- Response headers showing which server handled the request
- Easy scaling and management

## Files

- docker-compose.yml - Main orchestration file
- Dockerfile - Web server container definition
- haproxy/haproxy.cfg - Load balancer configuration

### Step 1: Build and Start the Services

1. Open a terminal/command prompt in your project directory

2. Build and start all services:
   bash
   docker-compose up --build -d
   

   This command will:
   - Build the web server images
   - Create a custom Docker network
   - Start 2 web servers and 1 HAProxy load balancer
   - Run everything in detached mode (-d flag)

### Step 2: Verify the Deployment

1. Check if all containers are running:
   bash
   docker-compose ps
   

   You should see 3 containers running:
   - haproxy-lb (load balancer)
   - web-server-01 (web server 1)
   - web-server-02 (web server 2)

2. Check container logs:
   bash
   docker-compose logs
   

3. Access your website:
   - Open your web browser
   - Go to http://localhost
   - Your website should load with load balancing




