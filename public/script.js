// Use the backend server for AI chat
const baseUrl = '/api';

// Top 50 European teams data
const europeanTeams = [
  // Premier League
  { name: "Manchester City", league: "premier-league", country: "England", color: "#6CABDD" },
  { name: "Arsenal", league: "premier-league", country: "England", color: "#EF0107" },
  { name: "Manchester United", league: "premier-league", country: "England", color: "#DA291C" },
  { name: "Liverpool", league: "premier-league", country: "England", color: "#C8102E" },
  { name: "Chelsea", league: "premier-league", country: "England", color: "#034694" },
  { name: "Tottenham", league: "premier-league", country: "England", color: "#132257" },
  { name: "Newcastle", league: "premier-league", country: "England", color: "#241F20" },
  { name: "Aston Villa", league: "premier-league", country: "England", color: "#95BFE5" },
  { name: "Brighton", league: "premier-league", country: "England", color: "#0057B8" },
  { name: "West Ham", league: "premier-league", country: "England", color: "#7A263A" },
  
  // La Liga
  { name: "Real Madrid", league: "la-liga", country: "Spain", color: "#FDB913" },
  { name: "Barcelona", league: "la-liga", country: "Spain", color: "#A50044" },
  { name: "Atletico Madrid", league: "la-liga", country: "Spain", color: "#CB5E3C" },
  { name: "Sevilla", league: "la-liga", country: "Spain", color: "#D71920" },
  { name: "Valencia", league: "la-liga", country: "Spain", color: "#FF6B35" },
  { name: "Villarreal", league: "la-liga", country: "Spain", color: "#FFED02" },
  { name: "Athletic Bilbao", league: "la-liga", country: "Spain", color: "#ED2939" },
  { name: "Real Sociedad", league: "la-liga", country: "Spain", color: "#1F4E79" },
  { name: "Real Betis", league: "la-liga", country: "Spain", color: "#008000" },
  { name: "Celta Vigo", league: "la-liga", country: "Spain", color: "#87CEEB" },
  
  // Bundesliga
  { name: "Bayern Munich", league: "bundesliga", country: "Germany", color: "#DC052C" },
  { name: "Borussia Dortmund", league: "bundesliga", country: "Germany", color: "#FDB913" },
  { name: "RB Leipzig", league: "bundesliga", country: "Germany", color: "#0D141C" },
  { name: "Bayer Leverkusen", league: "bundesliga", country: "Germany", color: "#E30613" },
  { name: "VfB Stuttgart", league: "bundesliga", country: "Germany", color: "#FF0000" },
  { name: "Eintracht Frankfurt", league: "bundesliga", country: "Germany", color: "#E00000" },
  { name: "Hoffenheim", league: "bundesliga", country: "Germany", color: "#1E3A8A" },
  { name: "SC Freiburg", league: "bundesliga", country: "Germany", color: "#000000" },
  { name: "VfL Wolfsburg", league: "bundesliga", country: "Germany", color: "#65B32E" },
  { name: "1. FC Heidenheim", league: "bundesliga", country: "Germany", color: "#1E3A8A" },
  
  // Serie A
  { name: "Inter Milan", league: "serie-a", country: "Italy", color: "#0066CC" },
  { name: "AC Milan", league: "serie-a", country: "Italy", color: "#FF0000" },
  { name: "Juventus", league: "serie-a", country: "Italy", color: "#000000" },
  { name: "Napoli", league: "serie-a", country: "Italy", color: "#0099FF" },
  { name: "Atalanta", league: "serie-a", country: "Italy", color: "#000000" },
  { name: "Roma", league: "serie-a", country: "Italy", color: "#FF0000" },
  { name: "Lazio", league: "serie-a", country: "Italy", color: "#87CEEB" },
  { name: "Fiorentina", league: "serie-a", country: "Italy", color: "#800080" },
  { name: "Torino", league: "serie-a", country: "Italy", color: "#8B0000" },
  { name: "Bologna", league: "serie-a", country: "Italy", color: "#8B0000" },
  
  // Ligue 1
  { name: "PSG", league: "ligue-1", country: "France", color: "#004170" },
  { name: "Monaco", league: "ligue-1", country: "France", color: "#FF0000" },
  { name: "Lyon", league: "ligue-1", country: "France", color: "#0000FF" },
  { name: "Marseille", league: "ligue-1", country: "France", color: "#0000FF" },
  { name: "Lille", league: "ligue-1", country: "France", color: "#FF0000" },
  { name: "Nice", league: "ligue-1", country: "France", color: "#FF0000" },
  { name: "Lens", league: "ligue-1", country: "France", color: "#FFD700" },
  { name: "Reims", league: "ligue-1", country: "France", color: "#FF0000" },
  { name: "Strasbourg", league: "ligue-1", country: "France", color: "#0000FF" },
  { name: "Nantes", league: "ligue-1", country: "France", color: "#00FF00" },
  
  // Champions League (top teams from all leagues)
  { name: "Porto", league: "champions-league", country: "Portugal", color: "#0000FF" },
  { name: "Benfica", league: "champions-league", country: "Portugal", color: "#FF0000" },
  { name: "Ajax", league: "champions-league", country: "Netherlands", color: "#FF0000" },
  { name: "PSV Eindhoven", league: "champions-league", country: "Netherlands", color: "#FF0000" },
  { name: "Red Bull Salzburg", league: "champions-league", country: "Austria", color: "#FF0000" },
  { name: "Shakhtar Donetsk", league: "champions-league", country: "Ukraine", color: "#FFD700" },
  { name: "Red Star Belgrade", league: "champions-league", country: "Serbia", color: "#FF0000" },
  { name: "Dinamo Zagreb", league: "champions-league", country: "Croatia", color: "#0000FF" },
  { name: "Young Boys", league: "champions-league", country: "Switzerland", color: "#FFD700" },
  { name: "Slovan Bratislava", league: "champions-league", country: "Slovakia", color: "#0000FF" }
];

function populateTeams() {
  const teamsList = document.getElementById('teamsList');
  teamsList.innerHTML = '';
  
  europeanTeams.forEach(team => {
    const teamDiv = document.createElement('div');
    teamDiv.className = 'team-item';
    teamDiv.style.borderLeft = `4px solid ${team.color}`;
    teamDiv.innerHTML = `
      <div class="team-name">${team.name}</div>
      <div class="team-league">${team.country}</div>
    `;
    teamDiv.onclick = () => selectTeam(team);
    teamsList.appendChild(teamDiv);
  });
}

function filterTeams() {
  const selectedLeague = document.getElementById('leagueFilter').value;
  const teamsList = document.getElementById('teamsList');
  teamsList.innerHTML = '';
  
  const filteredTeams = selectedLeague === 'all' 
    ? europeanTeams 
    : europeanTeams.filter(team => team.league === selectedLeague);
  
  filteredTeams.forEach(team => {
    const teamDiv = document.createElement('div');
    teamDiv.className = 'team-item';
    teamDiv.style.borderLeft = `4px solid ${team.color}`;
    teamDiv.innerHTML = `
      <div class="team-name">${team.name}</div>
      <div class="team-league">${team.country}</div>
    `;
    teamDiv.onclick = () => selectTeam(team);
    teamsList.appendChild(teamDiv);
  });
}

function selectTeam(team) {
  const message = `Tell me about ${team.name} football club`;
  document.getElementById('userMessage').value = message;
  sendMessage();
}

async function sendMessage() {
  const userMessage = document.getElementById('userMessage').value;
  
  if (!userMessage.trim()) {
    return;
  }

  // Add user message to chat
  addMessageToChat('user', userMessage);
  
  // Clear input
  document.getElementById('userMessage').value = '';

  // Show loading state
  addMessageToChat('assistant', 'Thinking...', true);

  try {
    const response = await fetch(`${baseUrl}/chat?message=${encodeURIComponent(userMessage)}`);
    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.error || `HTTP ${response.status}: ${response.statusText}`);
    }
    
    // Remove loading message and add AI response
    removeLastMessage();
    addMessageToChat('assistant', data.response);
    
  } catch (error) {
    console.error('Error getting AI response:', error);
    removeLastMessage();
    addMessageToChat('assistant', `Error: ${error.message}`, false, true);
  }
}

function addMessageToChat(sender, message, isLoading = false, isError = false) {
  const messagesContainer = document.getElementById('chat-messages');
  const messageDiv = document.createElement('div');
  messageDiv.className = `message ${sender}-message`;
  
  if (isLoading) {
    messageDiv.className += ' loading';
  }
  
  if (isError) {
    messageDiv.className += ' error';
  }
  
  messageDiv.innerHTML = `
    <div class="message-content">
      <div class="message-sender">${sender === 'user' ? 'You' : 'AI'}</div>
      <div class="message-text">${message}</div>
    </div>
  `;
  
  messagesContainer.appendChild(messageDiv);
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function removeLastMessage() {
  const messagesContainer = document.getElementById('chat-messages');
  const messages = messagesContainer.querySelectorAll('.message');
  if (messages.length > 0) {
    messagesContainer.removeChild(messages[messages.length - 1]);
  }
}

// Handle Enter key in input
document.addEventListener('DOMContentLoaded', function() {
  const input = document.getElementById('userMessage');
  input.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      sendMessage();
    }
  });
  
  // Populate teams list
  populateTeams();
  
  // Add welcome message
  addMessageToChat('assistant', 'Hello! I\'m your football AI assistant powered by Gemini 1.5 Flash. Ask me about any European team or football topic!');
});

