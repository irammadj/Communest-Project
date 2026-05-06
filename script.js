// ========================================
// COMMUNEST - INTERACTIVE JAVASCRIPT
// ========================================

// ========== DOM Elements ==========
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll(".section");
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const filterSelects = document.querySelectorAll(".filter-select");
const rentButtons = document.querySelectorAll(".rent-button, .apply-rent-btn");
const chatbotToggle = document.getElementById("chatbotToggle");
const chatbotWindow = document.getElementById("chatbotWindow");
const kenyaMapContainer = document.getElementById("kenyaMap");

// ========== Initialization ==========
document.addEventListener("DOMContentLoaded", function () {
  console.log("✓ Communest platform loaded successfully");
  console.log("✓ All interactive features are ready");
  console.log("✓ Version: 1.0.0");

  renderKenyaMap();
  initializeNavigation();
  initializeHamburgerMenu();
  initializeRentButtons();
  initializeFilterListeners();
  initializeChatbot();
  addSmoothScrolling();
  logPageInfo();
});

// ========== Kenya Map Rendering ==========
function renderKenyaMap() {
  if (!kenyaMapContainer) return;

  const kenyaMapSvg = `
    <svg viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg" style="width:100%; height:100%;">
        <defs>
            <linearGradient id="kenyaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:#00A8E8;stop-opacity:0.8" />
                <stop offset="100%" style="stop-color:#64B5F6;stop-opacity:0.6" />
            </linearGradient>
        </defs>
        
        <!-- Background -->
        <rect width="400" height="500" fill="#112240"/>
        
        <!-- Kenya mainland shape -->
        <path d="M 180 80 L 220 70 L 240 90 L 250 130 L 260 170 L 280 200 L 290 240 L 280 280 L 260 300 L 240 310 L 200 330 L 160 340 L 130 320 L 110 280 L 100 240 L 90 200 L 85 160 L 95 120 L 120 90 Z" 
              fill="url(#kenyaGradient)" stroke="#00A8E8" stroke-width="2" opacity="0.9"/>
        
        <!-- Major cities markers -->
        <circle cx="140" cy="200" r="6" fill="#FF6B6B" stroke="#00A8E8" stroke-width="2"/>
        <text x="140" y="220" text-anchor="middle" fill="#E8EBF0" font-size="11" font-weight="bold">Nairobi</text>
        
        <circle cx="110" cy="130" r="5" fill="#FFD93D" stroke="#00A8E8" stroke-width="1.5"/>
        <text x="110" y="115" text-anchor="middle" fill="#E8EBF0" font-size="9">Kisumu</text>
        
        <circle cx="220" cy="140" r="5" fill="#FFD93D" stroke="#00A8E8" stroke-width="1.5"/>
        <text x="220" y="125" text-anchor="middle" fill="#E8EBF0" font-size="9">Nakuru</text>
        
        <circle cx="260" cy="280" r="5" fill="#FFD93D" stroke="#00A8E8" stroke-width="1.5"/>
        <text x="260" y="300" text-anchor="middle" fill="#E8EBF0" font-size="9">Mombasa</text>
        
        <!-- Decorative elements -->
        <circle cx="140" cy="200" r="12" fill="none" stroke="#00A8E8" stroke-width="1" opacity="0.3" style="animation: pulse 2s ease-in-out infinite;"/>
        
        <!-- Title -->
        <text x="200" y="430" text-anchor="middle" fill="#00A8E8" font-size="14" font-weight="bold">Kenya Real Estate Map</text>
        <text x="200" y="450" text-anchor="middle" fill="#64B5F6" font-size="11">Discover properties nationwide</text>
        
        <style>
            @keyframes pulse {
                0%, 100% { opacity: 0.3; r: 12; }
                50% { opacity: 0.8; r: 16; }
            }
        </style>
    </svg>
    `;

  kenyaMapContainer.innerHTML = kenyaMapSvg;
  console.log("✓ Kenya map rendered successfully");
}

// ========== Navigation ==========
function initializeNavigation() {
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const sectionId = this.getAttribute("data-section");
      switchSection(sectionId);

      // Close hamburger menu on mobile
      if (navMenu.classList.contains("active")) {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
      }
    });
  });
}

function switchSection(sectionId) {
  // Remove active class from all sections
  sections.forEach((section) => {
    section.classList.remove("active");
  });

  // Remove active class from all nav links
  navLinks.forEach((link) => {
    link.classList.remove("active");
  });

  // Add active class to selected section
  const selectedSection = document.getElementById(sectionId);
  if (selectedSection) {
    selectedSection.classList.add("active");

    // Add active class to corresponding nav link
    const activeLink = document.querySelector(`[data-section="${sectionId}"]`);
    if (activeLink) {
      activeLink.classList.add("active");
    }

    // Scroll to top smoothly
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    console.log(
      `✓ Switched to: ${sectionId.charAt(0).toUpperCase() + sectionId.slice(1)} section`,
    );
  }
}

// ========== Hamburger Menu ==========
function initializeHamburgerMenu() {
  if (hamburger) {
    hamburger.addEventListener("click", function () {
      this.classList.toggle("active");
      navMenu.classList.toggle("active");
    });
  }

  // Close menu when clicking on nav links
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    });
  });
}

// ========== Chatbot Functionality ==========
function initializeChatbot() {
  const chatbotToggle = document.getElementById("chatbotToggle");
  if (chatbotToggle) {
    chatbotToggle.addEventListener("click", toggleChatbot);
  }
  console.log("✓ Chatbot initialized");
}

function toggleChatbot() {
  const chatbotWindow = document.getElementById("chatbotWindow");
  if (chatbotWindow) {
    chatbotWindow.classList.toggle("active");
  }
}

function handleChatbotInput(event) {
  if (event.key === "Enter") {
    sendChatbotMessage();
  }
}

function sendChatbotMessage() {
  const chatbotInput = document.getElementById("chatbotInput");
  const chatbotMessages = document.getElementById("chatbotMessages");

  if (!chatbotInput.value.trim()) return;

  const userMessage = chatbotInput.value;

  // Add user message
  const userMessageDiv = document.createElement("div");
  userMessageDiv.className = "chatbot-message user";
  userMessageDiv.innerHTML = `<p>${escapeHtml(userMessage)}</p>`;
  chatbotMessages.appendChild(userMessageDiv);

  // Clear input
  chatbotInput.value = "";

  // Simulate bot response
  setTimeout(() => {
    const botResponse = getChatbotResponse(userMessage);
    const botMessageDiv = document.createElement("div");
    botMessageDiv.className = "chatbot-message bot";
    botMessageDiv.innerHTML = `<p>${botResponse}</p>`;
    chatbotMessages.appendChild(botMessageDiv);

    // Auto scroll to bottom
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
  }, 500);

  // Auto scroll to bottom
  chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

function getChatbotResponse(message) {
  const lowerMessage = message.toLowerCase();

  // Define chatbot responses
  const responses = {
    hello:
      "👋 Hello! Welcome to Communest. How can I help you find your perfect home?",
    hi: "👋 Hi there! Looking for properties in Kenya? I can help!",
    properties:
      "🏠 We have over 5000 properties available across Kenya. Visit our Estates page to browse!",
    price:
      "💰 Our prices in Kenyan Shillings range from KES 180,000 to KES 450,000+ per month.",
    contact:
      "📞 You can reach us at info@communest.com or call +1 (234) 567-890. We're available 24/7!",
    nairobi:
      "🏙️ We have many properties in Nairobi! Check out our Estates section to see available options.",
    help: "🆘 I can help you with information about properties, pricing, contact details, and more. What would you like to know?",
    rent: '📋 To apply for rent, click the "Apply to Rent" button on any property card. Our team will contact you shortly!',
    verify:
      "✅ All our properties are 100% verified. We ensure transparency and trust in every transaction.",
    about:
      "ℹ️ Communest is a digital platform making house renting and estate management seamless for everyone. Visit our About page to learn more!",
    features:
      "⭐ We offer: property verification, secure payments, direct landlord communication, and 24/7 support!",
    default:
      "🤔 That's a great question! For more detailed information, please visit our website or contact our support team.",
  };

  // Check for keywords
  for (const [key, response] of Object.entries(responses)) {
    if (lowerMessage.includes(key)) {
      return response;
    }
  }

  return responses.default;
}

function escapeHtml(text) {
  const map = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

// ========== Authentication Modal ==========
function showAuthModal(type) {
  const message =
    type === "login"
      ? "Sign In\n\nEnter your email and password to access your account.\n\nEmail: (not implemented - demo only)\nPassword: (not implemented - demo only)\n\nFor now, you can browse properties as a guest!"
      : "Create Account\n\nJoin Communest to manage your rentals or property search.\n\nThis registration is a demo. Full functionality coming soon!\n\nBenefits:\n✓ Save favorite properties\n✓ Track applications\n✓ Direct messaging\n✓ Manage your account";

  alert(message);
  console.log(
    `✓ ${type === "login" ? "Sign In" : "Registration"} dialog opened`,
  );
}

// ========== Navigation ==========
function initializeRentButtons() {
  rentButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault();
      showRentDialog();
    });
  });
}

function showRentDialog() {
  // Create a simple alert for demonstration
  const dialogMessage = `
✓ Application Submitted Successfully!

Thank you for your interest. A member of our team will contact you shortly to discuss your application and answer any questions you may have.

Features:
• Transparent verification process
• Secure documentation handling
• Fast response time
• Expert guidance

For immediate assistance, contact us at: info@communest.com
    `;

  alert(dialogMessage);
  console.log("✓ Rental application dialog triggered");
}

// ========== Filter Listeners ==========
function initializeFilterListeners() {
  filterSelects.forEach((select) => {
    select.addEventListener("change", function () {
      const filterType = this.previousElementSibling.textContent.toLowerCase();
      const filterValue = this.value || "all";

      console.log(`✓ Filter applied: ${filterType} = ${filterValue}`);

      // Animate the filter application
      const estatesGrid = document.querySelector(".estates-grid");
      if (estatesGrid) {
        estatesGrid.style.opacity = "0.8";
        setTimeout(() => {
          estatesGrid.style.opacity = "1";
        }, 300);
      }
    });
  });
}

// ========== Smooth Scrolling for Anchor Links ==========
function addSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href");

      // Skip if it's a section navigation link (already handled)
      if (!this.classList.contains("nav-link") && href !== "#") {
        e.preventDefault();

        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    });
  });
}

// ========== Scroll Event Listeners ==========
window.addEventListener("scroll", function () {
  // Add scroll effect to navbar
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.style.boxShadow = "0 8px 32px rgba(0, 0, 0, 0.5)";
  } else {
    navbar.style.boxShadow = "var(--shadow-md)";
  }

  // Optional: Highlight nav link based on scroll position
  updateActiveNavOnScroll();
});

function updateActiveNavOnScroll() {
  const scrollPosition = window.scrollY;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (
      scrollPosition >= sectionTop - 100 &&
      scrollPosition < sectionTop + sectionHeight
    ) {
      const sectionId = section.getAttribute("id");

      navLinks.forEach((link) => {
        link.classList.remove("active");
      });

      const activeLink = document.querySelector(
        `[data-section="${sectionId}"]`,
      );
      if (activeLink) {
        activeLink.classList.add("active");
      }
    }
  });
}

// ========== Intersection Observer for Animations ==========
function initializeIntersectionObserver() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe cards and sections
  document
    .querySelectorAll(
      ".property-card, .estate-card, .stat-card, .benefit-item, .value-card",
    )
    .forEach((element) => {
      element.style.opacity = "0";
      element.style.transform = "translateY(20px)";
      element.style.transition =
        "opacity 0.6s ease-out, transform 0.6s ease-out";
      observer.observe(element);
    });
}

// ========== Keyboard Navigation ==========
document.addEventListener("keydown", function (e) {
  // Escape key to close mobile menu
  if (e.key === "Escape") {
    if (navMenu && navMenu.classList.contains("active")) {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    }
  }

  // Number keys for quick navigation (1=Home, 2=Estates, 3=About)
  if (e.ctrlKey || e.metaKey) {
    switch (e.key) {
      case "1":
        switchSection("home");
        e.preventDefault();
        break;
      case "2":
        switchSection("estates");
        e.preventDefault();
        break;
      case "3":
        switchSection("about");
        e.preventDefault();
        break;
    }
  }
});

// ========== Theme Toggle (Future Feature) ==========
function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("communest-theme", newTheme);

  console.log(`✓ Theme switched to: ${newTheme}`);
}

// ========== Utility Functions ==========
function logPageInfo() {
  console.log(
    "%c🏢 Communest Platform",
    "font-size: 16px; font-weight: bold; color: #00A8E8;",
  );
  console.log("%cPlatform Status: Online", "color: #10B981; font-size: 12px;");
  console.log("%cKeyboard Shortcuts:", "font-weight: bold; color: #00A8E8;");
  console.log("  • Ctrl+1: Go to Home");
  console.log("  • Ctrl+2: Go to Estates");
  console.log("  • Ctrl+3: Go to About");
  console.log("  • Esc: Close mobile menu");
  console.log(
    "%cThank you for visiting Communest!",
    "color: #64B5F6; font-style: italic;",
  );
}

function getRandomProperty() {
  const properties = [
    "Sunset Heights Apartments",
    "Green Valley Villa",
    "Prime Plaza Penthouse",
    "Riverside Residences",
    "Metropolitan Lofts",
    "Executive Townhouses",
  ];

  return properties[Math.floor(Math.random() * properties.length)];
}

function getPropertyStats() {
  return {
    totalProperties: 5000,
    happyTenants: 50000,
    verificationRate: 100,
    supportAvailability: "24/7",
  };
}

// ========== Form Validation (Future Feature) ==========
function validateRentalApplication(formData) {
  const requiredFields = ["name", "email", "phone", "propertyId"];

  for (let field of requiredFields) {
    if (!formData[field] || formData[field].trim() === "") {
      console.warn(`✗ Validation failed: ${field} is required`);
      return false;
    }
  }

  console.log("✓ Form validation passed");
  return true;
}

// ========== Performance Monitoring ==========
window.addEventListener("load", function () {
  if (window.performance) {
    const perfData = window.performance.timing;
    const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;

    console.log(`✓ Page load time: ${pageLoadTime}ms`);
  }
});

// ========== Export Functions for External Use ==========
window.Communest = {
  switchSection: switchSection,
  toggleTheme: toggleTheme,
  getRandomProperty: getRandomProperty,
  getPropertyStats: getPropertyStats,
  validateRentalApplication: validateRentalApplication,
  showRentDialog: showRentDialog,
  toggleChatbot: toggleChatbot,
  sendChatbotMessage: sendChatbotMessage,
  handleChatbotInput: handleChatbotInput,
  showAuthModal: showAuthModal,
};

// ========== Initialize Animations on Page Load ==========
setTimeout(function () {
  initializeIntersectionObserver();
}, 100);

// ========== Console Welcome Message ==========
console.log(
  "%c✓ Communest v1.0.0 Ready",
  "background: #0A192F; color: #00A8E8; padding: 8px 12px; border-radius: 4px; font-weight: bold;",
);
