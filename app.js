// Blog Data Structure (Simulated Backend)
const blogPosts = [
  {
    id: 1,
    title: "Slowing Down: My Morning Coffee Ritual & Mindful Journaling",
    category: "mindful",
    categoryName: "Mindful Living",
    date: "June 24, 2026",
    readingTime: "5 min read",
    excerpt: "There was a time when my mornings were a sprint. But lately, I've reclaimed the first thirty minutes of my day. No emails, no news, just the quiet whistle of the kettle, a warm ceramic mug between my hands, and a blank journal page. Here is what this slow ritual has taught me about transition and self-care in my forties...",
    image: "cozy_flatlay.png",
    likes: 124,
    comments: 18
  },
  {
    id: 2,
    title: "The Art of Slow Fermentation: Tending My First Sourdough Starter",
    category: "culinary",
    categoryName: "Sourdough & Cooking",
    date: "June 18, 2026",
    readingTime: "8 min read",
    excerpt: "Her name is Penelope, and she lives in a glass jar on my kitchen counter. At first, baking sourdough felt intimidating—all those percentages, hydration ratios, and temperature calculations. But once I let go of perfection, I realized that feeding a starter is less about chemistry and more about intuition, patience, and learning to listen to the rhythm of your home...",
    image: "blogger_profile.png", // Osnat in her kitchen
    likes: 215,
    comments: 34
  },
  {
    id: 3,
    title: "Steeping Peace: Tending My Garden & Taming the Evening Chaos",
    category: "home",
    categoryName: "Home & Hearth",
    date: "June 10, 2026",
    readingTime: "6 min read",
    excerpt: "After a long afternoon of tending to my sage bushes and lavender patches, there is nothing quite like brewing a fresh, garden-to-mug herbal tea. It has become my signature way to transition from the busy chaos of the day to a peaceful evening. Today, I'm sharing my favorite bedtime herbal blend and some thoughts on creating a home sanctuary...",
    image: "herbal_tea.png",
    likes: 189,
    comments: 27
  }
];

// Cozy Quotes Array
const cozyQuotes = [
  { text: "Sometimes the most productive thing you can do is let the dough rise.", author: "Osnat" },
  { text: "My garden teaches me every day that growth cannot be rushed. It requires patience, sunlight, and a little dirt.", author: "Osnat" },
  { text: "Happiness is a warm mug of chamomile, a half-read book, and a rain-streaked window.", author: "Osnat" },
  { text: "In my twenties, I wanted to change the world. In my forties, I just want a peaceful kitchen and healthy soil.", author: "Osnat" },
  { text: "We don't need a perfectly organized life to have a beautiful, joyful life.", author: "Osnat" },
  { text: "Sipping slow coffee in the morning is a form of prayer.", author: "Osnat" }
];

// Document Elements
document.addEventListener("DOMContentLoaded", () => {
  initGreeting();
  initQuoteGenerator();
  initBlogFeed();
  initSearchAndFilters();
  initNewsletterForm();
  initCookieBanner();
  initLikeButtons();
});

// 1. Warm Greeting Based on Local Time
function initGreeting() {
  const greetingEl = document.getElementById("cozy-greeting");
  if (!greetingEl) return;
  
  const hour = new Date().getHours();
  let greeting = "Welcome, friend";
  
  if (hour < 12) {
    greeting = "Good morning, friend";
  } else if (hour < 18) {
    greeting = "Good afternoon, friend";
  } else {
    greeting = "Good evening, friend";
  }
  
  greetingEl.textContent = greeting;
}

// 2. Cozy Quote Generator
function initQuoteGenerator() {
  const quoteTextEl = document.getElementById("quote-text");
  const quoteAuthorEl = document.getElementById("quote-author");
  const quoteBtn = document.getElementById("quote-btn");
  
  if (!quoteTextEl || !quoteAuthorEl || !quoteBtn) return;
  
  let currentIdx = 0;
  
  quoteBtn.addEventListener("click", () => {
    // Elegant fade-out, change, fade-in transition
    quoteTextEl.style.opacity = "0";
    quoteAuthorEl.style.opacity = "0";
    
    setTimeout(() => {
      let newIdx;
      do {
        newIdx = Math.floor(Math.random() * cozyQuotes.length);
      } while (newIdx === currentIdx && cozyQuotes.length > 1);
      
      currentIdx = newIdx;
      const selected = cozyQuotes[currentIdx];
      
      quoteTextEl.textContent = `"${selected.text}"`;
      quoteAuthorEl.textContent = selected.author;
      
      quoteTextEl.style.opacity = "1";
      quoteAuthorEl.style.opacity = "1";
    }, 250);
  });
  
  // Style transition on elements
  quoteTextEl.style.transition = "opacity 0.25s ease";
  quoteAuthorEl.style.transition = "opacity 0.25s ease";
}

// 3. Render Blog Feed Dynamically
function renderPosts(postsToRender) {
  const feedContainer = document.getElementById("blog-feed-container");
  if (!feedContainer) return;
  
  if (postsToRender.length === 0) {
    feedContainer.innerHTML = `
      <div class="animate-fade-in" style="text-align: center; padding: 4rem; border: 1px dashed var(--color-border); border-radius: var(--radius-md); background: var(--color-bg-card);">
        <h3 style="font-size: 1.5rem; color: var(--color-text-muted); margin-bottom: 0.5rem;">No musings found</h3>
        <p style="color: var(--color-text-muted); font-size: 0.95rem;">Try refining your search or category filter to find what you are looking for.</p>
      </div>
    `;
    return;
  }
  
  feedContainer.innerHTML = postsToRender.map(post => `
    <article class="blog-post-card animate-fade-in" data-category="${post.category}">
      <div class="post-img-container">
        <img class="post-img" src="${post.image}" alt="${post.title}" loading="lazy" />
        <div class="post-category-tag">${post.categoryName}</div>
      </div>
      <div class="post-content">
        <div class="post-meta">
          <span><i class="far fa-calendar"></i> ${post.date}</span>
          <span><i class="far fa-clock"></i> ${post.readingTime}</span>
        </div>
        <a href="#post-${post.id}">
          <h2 class="post-title">${post.title}</h2>
        </a>
        <p class="post-excerpt">${post.excerpt}</p>
        <div class="post-footer">
          <a href="#post-${post.id}" class="read-more-btn">
            Read Musings <span>&rarr;</span>
          </a>
          <button class="post-likes" data-post-id="${post.id}">
            <i class="far fa-heart"></i> <span class="like-count">${post.likes}</span> likes
          </button>
        </div>
      </div>
    </article>
  `).join('');
  
  // Re-initialize like button event listeners
  initLikeButtons();
}

function initBlogFeed() {
  renderPosts(blogPosts);
}

// 4. Client-side Real-time Search and Filtering
function initSearchAndFilters() {
  const searchInput = document.getElementById("search-input");
  const filterButtons = document.querySelectorAll(".filter-btn");
  
  if (!searchInput || filterButtons.length === 0) return;
  
  let activeCategory = "all";
  let searchQuery = "";
  
  const filterAndSearch = () => {
    const filtered = blogPosts.filter(post => {
      const matchesCategory = activeCategory === "all" || post.category === activeCategory;
      const matchesSearch = post.title.toLowerCase().includes(searchQuery) || 
                            post.excerpt.toLowerCase().includes(searchQuery) ||
                            post.categoryName.toLowerCase().includes(searchQuery);
      return matchesCategory && matchesSearch;
    });
    renderPosts(filtered);
  };
  
  // Real-time search keyup/input event
  searchInput.addEventListener("input", (e) => {
    searchQuery = e.target.value.toLowerCase().trim();
    filterAndSearch();
  });
  
  // Category button click event
  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      
      activeCategory = btn.getAttribute("data-filter");
      filterAndSearch();
    });
  });
}

// 5. Simulated Newsletter Form with Custom Toast Notification
function initNewsletterForm() {
  const forms = document.querySelectorAll(".newsletter-form");
  
  forms.forEach(form => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const input = form.querySelector(".newsletter-input");
      if (!input || !input.value.trim()) return;
      
      const email = input.value.trim();
      input.value = "";
      
      showToast(`☕ Thank you! We've sent a welcome tea-letter to ${email}. Check your inbox soon!`);
    });
  });
}

// Custom Toast Notification System
function showToast(message) {
  // Check if toast element exists, if not create it
  let toastEl = document.getElementById("cozy-toast");
  if (!toastEl) {
    toastEl = document.createElement("div");
    toastEl.id = "cozy-toast";
    toastEl.className = "toast";
    document.body.appendChild(toastEl);
  }
  
  toastEl.innerHTML = `<i class="fas fa-check-circle" style="color: var(--color-primary);"></i> <span>${message}</span>`;
  toastEl.classList.add("show");
  
  setTimeout(() => {
    toastEl.classList.remove("show");
  }, 5000);
}

// 6. Interactive Cookie Banner
function initCookieBanner() {
  const banner = document.getElementById("cookie-banner");
  const acceptBtn = document.getElementById("cookie-accept");
  const declineBtn = document.getElementById("cookie-decline");
  
  if (!banner || !acceptBtn || !declineBtn) return;
  
  // Check localStorage
  const cookiePreference = localStorage.getItem("cozy-cookies-accepted");
  if (cookiePreference === null) {
    // Show banner after 1.5s delay
    setTimeout(() => {
      banner.classList.add("show");
    }, 1500);
  }
  
  acceptBtn.addEventListener("click", () => {
    localStorage.setItem("cozy-cookies-accepted", "true");
    banner.classList.remove("show");
    showToast("🍪 Cookies accepted! We'll remember your cozy settings.");
  });
  
  declineBtn.addEventListener("click", () => {
    localStorage.setItem("cozy-cookies-accepted", "false");
    banner.classList.remove("show");
  });
}

// 7. Blog Likes Counter with Toggle State
const likedPosts = new Set();

function initLikeButtons() {
  const likeBtns = document.querySelectorAll(".post-likes");
  
  likeBtns.forEach(btn => {
    const postId = parseInt(btn.getAttribute("data-post-id"), 10);
    const icon = btn.querySelector("i");
    const countEl = btn.querySelector(".like-count");
    
    // Set active state if already liked
    if (likedPosts.has(postId)) {
      icon.className = "fas fa-heart";
      btn.style.color = "var(--color-primary)";
    }
    
    // Reset click handler to avoid duplicate triggers
    btn.onclick = (e) => {
      e.preventDefault();
      
      const post = blogPosts.find(p => p.id === postId);
      if (!post) return;
      
      if (likedPosts.has(postId)) {
        // Unlike post
        likedPosts.delete(postId);
        post.likes--;
        icon.className = "far fa-heart";
        btn.style.color = "var(--color-text-muted)";
        icon.style.transform = "scale(0.8)";
        setTimeout(() => icon.style.transform = "scale(1)", 200);
      } else {
        // Like post
        likedPosts.add(postId);
        post.likes++;
        icon.className = "fas fa-heart";
        btn.style.color = "var(--color-primary)";
        icon.style.transform = "scale(1.4)";
        setTimeout(() => icon.style.transform = "scale(1)", 200);
        showToast("💖 Thanks for loving this post! It keeps my cozy kitchen running.");
      }
      
      countEl.textContent = post.likes;
    };
  });
}
