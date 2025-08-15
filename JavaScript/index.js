document.addEventListener("DOMContentLoaded", function() {
    let bars = document.querySelectorAll('.progress-bar');
    let options = { threshold: 0.5 };

    let observer = new IntersectionObserver(function(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          let value = entry.target.getAttribute('aria-valuenow');
          entry.target.style.width = value + '%';
        }
      });
    }, options);

    bars.forEach(bar => {
      observer.observe(bar);
    });
});

document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault(); // Stop default form submission

    // Show success message
    const successMsg = document.getElementById("successMessage");
    successMsg.style.display = "block";

    this.reset();

    // Hide message after 4 seconds
    setTimeout(() => {
        successMsg.style.display = "none";
    }, 4000);
});

// Chatbot Functionality 

  const openChat = document.getElementById('openChat');
  const closeChat = document.getElementById('closeChat');
  const chatbot = document.getElementById('chatbot');
  const sendBtn = document.getElementById('sendBtn');
  const questionSelect = document.getElementById('questionSelect');
  const chatBody = document.getElementById('chatBody');

  const answers = {
    q1: "HTML stands for HyperText Markup Language. It is the backbone of web pages.",
    q2: "CSS stands for Cascading Style Sheets. It styles and beautifies web pages.",
    q3: "JavaScript makes websites interactive and dynamic.",
    q4: "Bootstrap is a framework for building responsive websites quickly."
  };

  openChat.addEventListener('click', () => {
    chatbot.style.display = 'flex';
    openChat.style.display = 'none';
  });

  closeChat.addEventListener('click', () => {
    chatbot.style.display = 'none';
    openChat.style.display = 'block';
  });

  sendBtn.addEventListener('click', () => {
    const selected = questionSelect.value;
    if (selected && answers[selected]) {
      chatBody.innerHTML += `<p><strong>You:</strong> ${questionSelect.options[questionSelect.selectedIndex].text}</p>`;
      chatBody.innerHTML += `<p><strong>TechBot:</strong> ${answers[selected]}</p>`;
      chatBody.scrollTop = chatBody.scrollHeight;
    }
});

if (window.location.pathname!=="/index.html" && performance.getEntriesByType("navigation")[0].type === "reload" ) {
    window.location.href = "index.html"       
}
