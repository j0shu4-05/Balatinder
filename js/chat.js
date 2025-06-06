const matchList = document.querySelector(".match-list");
const chatWith = document.getElementById("chatWith");
const msgContainer = document.getElementById("messages");
const input = document.getElementById("inputMsg");

const totalMatches = 5;
let currentUser = null;
const chats = {}; // Historial de cada Joker

// Genera la lista de matches con imágenes aleatorias
for (let i = 1; i <= totalMatches; i++) {
  const jokerId = Math.floor(Math.random() * 150) + 1;
  const matchName = `Joker ${i}`;

  const matchDiv = document.createElement("div");
  matchDiv.className = "match";
  matchDiv.onclick = () => selectMatch(matchName);

  matchDiv.innerHTML = `
    <img src="../images/Jokers${jokerId}.png" alt="${matchName}">
    <span>${matchName}</span>
  `;
  matchList.appendChild(matchDiv);

  // Inicializa historial vacío para cada Joker
  chats[matchName] = [];
}

function selectMatch(name) {
  currentUser = name;
  chatWith.textContent = `Chat con ${name}`;
  renderMessages();
}

// Renderiza los mensajes del chat actual
function renderMessages() {
  msgContainer.innerHTML = "";
  const messages = chats[currentUser] || [];

  messages.forEach(({ text, from }) => {
    const message = document.createElement("div");
    message.classList.add("message", from);
    message.textContent = text;
    msgContainer.appendChild(message);
  });

  msgContainer.scrollTop = msgContainer.scrollHeight;
}

function sendMessage() {
  const msg = input.value.trim();
  if (msg === "" || !currentUser) return;

  // Guarda y muestra mensaje del usuario
  chats[currentUser].push({ text: msg, from: "user" });
  renderMessages();
  input.value = "";

  // Respuesta automática "Balatro"
  setTimeout(() => {
    chats[currentUser].push({ text: "Balatro", from: "bot" });
    renderMessages();
  }, 500);
}

input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    e.preventDefault(); // evita salto de línea
    sendMessage();
  }
});

