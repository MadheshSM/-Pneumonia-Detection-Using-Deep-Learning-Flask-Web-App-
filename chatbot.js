// DOM Elements
const chatBtn = document.getElementById("chat-btn");
const chatPopup = document.getElementById("chat-popup");
const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");

// Toggle chat popup
chatBtn.addEventListener("click", () => {
    chatPopup.style.display = chatPopup.style.display === "block" ? "none" : "block";
});

// Typing indicator
function appendTypingIndicator() {
    const typingDiv = document.createElement("div");
    typingDiv.classList.add("bot-msg");
    typingDiv.id = "typing-indicator";
    const span = document.createElement("span");
    span.classList.add("msg");
    span.textContent = "AI is typing...";
    typingDiv.appendChild(span);
    chatBox.appendChild(typingDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function removeTypingIndicator() {
    const el = document.getElementById("typing-indicator");
    if (el) el.remove();
}

// Load previous chat from localStorage
window.addEventListener("load", () => {
    const savedChat = JSON.parse(localStorage.getItem("chatHistory")) || [];
    savedChat.forEach(m => appendMessageToDOM(m.sender, m.message, false));
});

// Append message
function appendMessage(sender, message) {
    appendMessageToDOM(sender, message, true);
}

function appendMessageToDOM(sender, message, save) {
    const msgDiv = document.createElement("div");
    msgDiv.classList.add(sender);

    const span = document.createElement("span");
    span.classList.add("msg");

    // Make report links clickable
    if (typeof message === "string" && message.startsWith("/report")) {
        const a = document.createElement("a");
        a.href = message;
        a.textContent = "Download Report";
        a.target = "_blank";
        a.rel = "noopener";
        span.appendChild(a);
    } else {
        span.textContent = message;
    }

    msgDiv.appendChild(span);
    chatBox.appendChild(msgDiv);
    chatBox.scrollTop = chatBox.scrollHeight;

    if (save) saveMessage(sender, message);
}

function saveMessage(sender, message) {
    const chat = JSON.parse(localStorage.getItem("chatHistory")) || [];
    chat.push({ sender, message });
    localStorage.setItem("chatHistory", JSON.stringify(chat));
}

// Send message
async function sendMessage() {
    const message = userInput.value.trim();
    if (!message) return;

    appendMessage("user-msg", message);
    userInput.value = "";

    appendTypingIndicator();

    try {
        const response = await fetch("/chatbot", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message })
        });

        const data = await response.json();
        const reply = data.reply || "⚠️ Sorry, no reply.";

        removeTypingIndicator();
        appendMessage("bot-msg", reply);
    } catch (error) {
        console.error("Chatbot error:", error);
        removeTypingIndicator();
        appendMessage("bot-msg", "⚠️ Sorry, I’m having trouble responding right now.");
    }
}

// Event listeners
if (sendBtn) sendBtn.addEventListener("click", sendMessage);
if (userInput) userInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") sendMessage();
});
