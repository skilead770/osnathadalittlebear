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
  },
  {
    id: 4,
    title: "שבועיים מעניינים עברו במשפחתנו — יומן דרכים ומחשבות",
    category: "mindful",
    categoryName: "Gentle Reflections",
    date: "July 2, 2026",
    readingTime: "10 min read",
    excerpt: "שבועיים עמוסים ברגשות, טיפולים בבאר יעקב, נסיעות סוערות, מפגש משפחתי חם תחת סוכת הגפנים, רגעים קטנים של קירבה, ואריזה מהירה לקראת נסיעה מרגשת לגיאורגיה...",
    image: "cozy_flatlay.png", // Fallback banner image
    likes: 342,
    comments: 15,
    isHebrew: true,
    days: [
      {
        title: "יום ראשון כ\"ט סיון — הטיפול והנסיעה דרומה",
        text: "נסיעה באוטובוס לרמת גן כדי לפגוש את דוד הראל, שיקח אותי לבאר יעקב בשביל הטיפול שלי. במקביל, נתנאל ויהודה מדרימים בסקודיאק."
      },
      {
        title: "יום שני ל' סיוון — ערב כיתה חם",
        text: "כיתה ד' 4 חוגגת אצלנו בערב כיתה שמח במיוחד."
      },
      {
        title: "יום שלישי א' תמוז — חתונה מרגשת ופקק אינסופי",
        text: "נסיעה ליקב פסגות לחתונתם של עדו ונועה, שריגשו אותנו כל כך. חזרנו דרך כביש 60, עם פקק ארוווך (עמידה של 40 דקות בצומת המשטרה הבריטית). במקביל, הילדים מתפזרים איש-איש למקומו: חיים חוזר לישיבה, נטע למדרשה, וישי והדר עושים את דרכם לבית שאן."
      },
      {
        title: "יום רביעי ב' תמוז — יום הולדת ושיעור מרתק",
        text: "יום הולדת לחתן! חוגגים עם טיפול קטמין בבאר יעקב, ויאללה - אל ספר המדבר. נוסעים יחד עם מוריה וחנה למסיבת סיום במעון, שומעים שיעור מרתק של הרב נתן ומתוודעים לשנה המיוחדת והמופלאה שעברה על נטע שלנו."
      },
      {
        title: "יום חמישי ג' תמוז — פגישת חברות ברעננה",
        text: "בקטנה - נסיעה קלילה לפגוש חברות אהובות ברעננה."
      },
      {
        title: "שבת פרשת חקת — יום הולדת משולש בחיק המשפחה",
        text: "שבת בבית בהרכב מצומצם אך איכותי ושווה במיוחד. אנחנו חוגגים יום הולדת משולש לנתנאל, חנה והדר. החתן עלה לתורה וקרא בצורה מדויקת, יפה, מוטעמת ונעימה לאוזן."
      },
      {
        title: "יום ראשון ו' תמוז — טקס סיום מרגש ומעבר פרק",
        text: "כרגיל בנוהל - נוסעים לבאר יעקב, עוברים את הטיפול ונמצאים קצת בעירפול חושים מתוק, ומיד ממשיכים הלאה לנווה דניאל לטקס מעמד הסיום המרגש של חיים בישיבת מקור חיים (מקו\"ח) — הלב התרחב וזה היה מרגש כל כך. במקביל, נטע חוזרת סוף סוף הביתה לאחר 3 שנים מלאות שמחה, רוויות בעשייה ברוכה ובלימוד משמעותי."
      },
      {
        title: "יום שני ז' תמוז — מפגש משפחתי תחת הגפנים",
        text: "יהודה חוזר הביתה אחרי יומיים של עבודה בחוות מגן אברהם, חיים חוזר מהישיבה, וישי והדר מגיעים אלינו מבית שאן הרחוקה — ממש כמו בפסוק: 'רְאִי, כֻּלָּם נִקְבְּצוּ בָאוּ לָךְ'. אנחנו עורכים מפגש קיץ משפחתי שמח של משפחת קדר אצלנו בחצר היפהפייה שנתנאל עיצב ומטפח באהבה. ישבנו יחד תחת סוכת הגפנים המרהיבה שיהודה וחיים ריתכו ובנו במו ידיהם ובכוחות עצמם."
      },
      {
        title: "יום שלישי ח' תמוז — אריזות ויאללה לגיאורגיה!",
        text: "נחשו מה? שוב נוסעים לבאר יעקב, והפעם בהפתעה - חוזרים לאריאל במהירות הבזק כדי להספיק למסיבת הסיום החגיגית של מוריה. במקביל, חנה חוגגת יום הולדת בטיול פריחה וטבע בנאות קדומים. חוזרים הביתה בערב, ואורזים בהתרגשות. נטע המקסימה לוקחת אותנו לנתב\"ג ויאללה — אנחנו בדרך לגיאורגיה! תודה ענקית מכל הלב לכל הנהגים המסורים שלנו שמלווים אותנו לאורך כל הדרך - החתן, הדוד והבת האהובה. ותודה רבה לסקודיאק הנאמנה שלנו ששירתה אותנו במסירות ובבטחה לאורך כל הנסיעות!"
      }
    ]
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
  initPostModal(); // Initialize premium post reading modal overlay
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

// 8. Premium Post Reading Modal System
function initPostModal() {
  const modal = document.getElementById("post-modal");
  const modalClose = document.getElementById("modal-close");
  const modalBody = document.getElementById("modal-body-content");
  
  if (!modal || !modalClose || !modalBody) return;
  
  // Close modal when close button is clicked
  modalClose.addEventListener("click", () => {
    modal.classList.remove("active");
    document.body.style.overflow = ""; // Restore body scrolling
  });
  
  // Close modal when clicking outside the container
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("active");
      document.body.style.overflow = "";
    }
  });
  
  // Use event delegation for Read Musings buttons in the feed
  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".read-more-btn");
    if (!btn) return;
    
    e.preventDefault();
    
    // Extract ID from href like "#post-4" or a data-post-id attribute
    const href = btn.getAttribute("href");
    const idMatch = href.match(/#post-(\d+)/);
    if (!idMatch) return;
    
    const postId = parseInt(idMatch[1], 10);
    const post = blogPosts.find(p => p.id === postId);
    if (!post) return;
    
    openPostModal(post, modal, modalBody);
  });
}

// Temporary local state for Hebrew comments inside this session
const localComments = {
  4: [
    { author: "שירה", text: "יומן כל כך מרגש ומקסים! שתהיה נסיעה מדהימה לגיאורגיה! ✈️💖", date: "לפני יומיים" },
    { author: "אמא", text: "איזה יופי של תיעוד אסנתי, כל כך שמחה על המפגש תחת סוכת הגפנים 🍇🏡", date: "אתמול" }
  ]
};

function openPostModal(post, modal, modalBody) {
  // Prevent background scrolling
  document.body.style.overflow = "hidden";
  
  if (post.isHebrew) {
    // Generate Hebrew timeline HTML
    const timelineHtml = post.days.map((day, index) => `
      <div class="timeline-day-card">
        <div class="timeline-marker"></div>
        <div class="timeline-day-content">
          <div class="timeline-day-title">
            <i class="far fa-calendar-check" style="color: var(--color-primary);"></i>
            <span>${day.title}</span>
          </div>
          <p class="timeline-day-text">${day.text}</p>
        </div>
      </div>
    `).join('');
    
    // Generate Guestbook Comments list HTML
    const commentsList = localComments[post.id] || [];
    const commentsHtml = commentsList.map(c => `
      <div class="hebrew-comment-card">
        <div class="hebrew-comment-header">
          <span class="hebrew-comment-author">${c.author}</span>
          <span class="hebrew-comment-date">${c.date}</span>
        </div>
        <p class="hebrew-comment-text">${c.text}</p>
      </div>
    `).join('');
    
    modalBody.innerHTML = `
      <div class="rtl-container">
        <div class="rtl-post-header">
          <h1 class="rtl-post-title">${post.title}</h1>
          <div class="rtl-post-meta">
            <span><i class="far fa-calendar"></i> ${post.date}</span>
            <span><i class="far fa-clock"></i> ${post.readingTime}</span>
            <span><i class="far fa-folder"></i> ${post.categoryName}</span>
          </div>
        </div>
        
        <div class="hebrew-timeline">
          ${timelineHtml}
        </div>
        
        <!-- Media Gallery -->
        <div class="story-media-gallery">
          <h2 class="gallery-title">📁 גלריית תמונות מהיומן</h2>
          <div class="media-grid">
            <div class="media-card">
              <div class="media-card-img-placeholder">
                <img src="cozy_flatlay.png" alt="Osnat's cozy journal" />
              </div>
              <div class="media-card-caption">היומן שלי ורגעי כתיבה שקטים ברגעים קטנים של הפסקה 🌸</div>
            </div>
            <div class="media-card">
              <div class="media-card-img-placeholder">
                <img src="blogger_profile.png" alt="Osnat's Kitchen and Sourdough" />
              </div>
              <div class="media-card-caption">מכינים ארוחות מפנקות ומחכים שכולם יחזרו הביתה 🥖🏡</div>
            </div>
            <div class="media-card">
              <div class="media-card-img-placeholder">
                <img src="herbal_tea.png" alt="Garden and Pergola" />
              </div>
              <div class="media-card-caption">סוכת הגפנים היפה שבנו הבנים יהודה וחיים בחצר 🌿🍇</div>
            </div>
          </div>
          
          <h2 class="gallery-title">🎥 סרטון מרגש מטקס הסיום המלא (מקור חיים)</h2>
          <div class="video-player-widget">
            <div class="video-container" style="position: relative; width: 100%; aspect-ratio: 16/9; background: #000;">
              <iframe width="100%" height="100%" src="https://www.youtube.com/embed/h2FIdWJRFZ8?rel=0" title="טקס סיום ישיבת מקור חיים" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="position: absolute; top:0; left:0; width:100%; height:100%; border:none;"></iframe>
            </div>
          </div>
        </div>
        
        <!-- Social Interactions Section -->
        <div class="hebrew-comments-section">
          <h2 class="comment-form-title">💬 השאירו ברכה חמה לאסנת ומשפחתה</h2>
          
          <form class="hebrew-comment-form" id="hebrew-comment-form-el">
            <div class="hebrew-input-group">
              <input type="text" class="hebrew-input" id="hebrew-comment-author-input" placeholder="השם שלך..." required />
            </div>
            <textarea class="hebrew-textarea" id="hebrew-comment-text-input" placeholder="כתבו משהו חם ואוהב..." required></textarea>
            <button type="submit" class="hebrew-submit-btn">שלחו ברכה ❤️</button>
          </form>
          
          <div class="hebrew-comments-list" id="hebrew-comments-list-container">
            ${commentsHtml}
          </div>
        </div>
      </div>
    `;
    
    // Wire up custom simulated Video Player behavior
    const videoPlayTrigger = document.getElementById("video-play-trigger");
    const videoOverlay = document.getElementById("video-overlay");
    const videoEl = document.getElementById("story-video");
    
    if (videoPlayTrigger && videoOverlay && videoEl) {
      videoPlayTrigger.addEventListener("click", () => {
        videoOverlay.style.opacity = "0";
        setTimeout(() => {
          videoOverlay.style.display = "none";
          videoEl.style.display = "block";
          videoEl.play().catch(err => {
            console.log("Auto-play blocked or video missing, displaying controls.");
          });
        }, 350);
      });
    }
    
    // Wire up Hebrew Guestbook submit handler
    const commentForm = document.getElementById("hebrew-comment-form-el");
    const commentsContainer = document.getElementById("hebrew-comments-list-container");
    
    if (commentForm && commentsContainer) {
      commentForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const authorInput = document.getElementById("hebrew-comment-author-input");
        const textInput = document.getElementById("hebrew-comment-text-input");
        
        if (!authorInput || !textInput) return;
        
        const author = authorInput.value.trim();
        const text = textInput.value.trim();
        
        if (!author || !text) return;
        
        const newComment = { author, text, date: "ממש עכשיו" };
        
        if (!localComments[post.id]) {
          localComments[post.id] = [];
        }
        localComments[post.id].unshift(newComment);
        
        // Clear form
        authorInput.value = "";
        textInput.value = "";
        
        // Re-render list
        const updatedListHtml = localComments[post.id].map(c => `
          <div class="hebrew-comment-card animate-fade-in">
            <div class="hebrew-comment-header">
              <span class="hebrew-comment-author">${c.author}</span>
              <span class="hebrew-comment-date">${c.date}</span>
            </div>
            <p class="hebrew-comment-text">${c.text}</p>
          </div>
        `).join('');
        commentsContainer.innerHTML = updatedListHtml;
        
        showToast("✨ הברכה החמה שלך נשלחה בהצלחה לאסנת!");
      });
    }
    
  } else {
    // English post layout (IDs 1, 2, 3)
    modalBody.innerHTML = `
      <div class="english-modal-container" style="color: var(--color-text); line-height: 1.8;">
        <div style="border-bottom: 2px solid var(--color-border); padding-bottom: 1.5rem; margin-bottom: 2rem;">
          <h1 style="font-size: 2.2rem; color: var(--color-primary); margin-bottom: 0.8rem; font-family: var(--font-title);">${post.title}</h1>
          <div style="display: flex; gap: 1.5rem; color: var(--color-text-muted); font-size: 0.9rem;">
            <span><i class="far fa-calendar" style="margin-right: 0.4rem; color: var(--color-secondary);"></i> ${post.date}</span>
            <span><i class="far fa-clock" style="margin-right: 0.4rem; color: var(--color-secondary);"></i> ${post.readingTime}</span>
            <span><i class="far fa-folder" style="margin-right: 0.4rem; color: var(--color-secondary);"></i> ${post.categoryName}</span>
          </div>
        </div>
        
        <div style="margin-bottom: 2rem;">
          <img src="${post.image}" alt="${post.title}" style="width: 100%; height: auto; max-height: 400px; object-fit: cover; border-radius: var(--radius-md); box-shadow: var(--shadow-sm); border: 1px solid var(--color-border);" />
        </div>
        
        <p style="font-size: 1.1rem; margin-bottom: 1.5rem; font-weight: 500; color: var(--color-primary); font-style: italic;">${post.excerpt}</p>
        
        <div style="font-size: 1.05rem; display: flex; flex-direction: column; gap: 1.5rem; font-family: var(--font-body);">
          <p>This is a full reflection about slow living, mindful patterns, and kitchen experiments. Osnat's blog represents a sanctuary where life unfolds at its own cozy rhythm. We observe and absorb the changing seasons, the quiet rise of sourdough starters, and the gentle breeze sweeping through the herbal garden.</p>
          <p>By learning to listen to the whispers of our homes, we find that the middle chapters of our lives are often the richest, most rewarding, and filled with deep self-discovery.</p>
        </div>
        
        <div style="margin-top: 3rem; padding-top: 2rem; border-top: 2px dashed var(--color-border); text-align: center;">
          <h3 style="font-family: var(--font-title); color: var(--color-secondary); margin-bottom: 0.5rem;">Loved this reflection?</h3>
          <p style="color: var(--color-text-muted); font-size: 0.95rem; margin-bottom: 1.5rem;">Leave a heart and keep the cozy fires burning.</p>
          <button class="post-likes" data-post-id="${post.id}" style="background: var(--color-bg-card); border: 1px solid var(--color-border); padding: 0.8rem 2rem; border-radius: 30px; font-family: var(--font-body); font-size: 1rem; cursor: pointer; color: var(--color-text-muted); display: inline-flex; align-items: center; gap: 0.6rem; transition: var(--transition);">
            <i class="far fa-heart" style="color: var(--color-primary);"></i> <span class="like-count">${post.likes}</span> Likes
          </button>
        </div>
      </div>
    `;
    
    // Wire up like button inside English modal
    const innerLikeBtn = modalBody.querySelector(".post-likes");
    if (innerLikeBtn) {
      const icon = innerLikeBtn.querySelector("i");
      const countEl = innerLikeBtn.querySelector(".like-count");
      
      if (likedPosts.has(post.id)) {
        icon.className = "fas fa-heart";
        innerLikeBtn.style.color = "var(--color-primary)";
      }
      
      innerLikeBtn.addEventListener("click", () => {
        if (likedPosts.has(post.id)) {
          likedPosts.delete(post.id);
          post.likes--;
          icon.className = "far fa-heart";
          innerLikeBtn.style.color = "var(--color-text-muted)";
          
          // Sync feed button if visible
          const feedBtn = document.querySelector(`.blog-feed .post-likes[data-post-id="${post.id}"]`);
          if (feedBtn) {
            feedBtn.querySelector("i").className = "far fa-heart";
            feedBtn.style.color = "var(--color-text-muted)";
            feedBtn.querySelector(".like-count").textContent = post.likes;
          }
        } else {
          likedPosts.add(post.id);
          post.likes++;
          icon.className = "fas fa-heart";
          innerLikeBtn.style.color = "var(--color-primary)";
          showToast("💖 Thanks for loving this post! It keeps my cozy kitchen running.");
          
          // Sync feed button if visible
          const feedBtn = document.querySelector(`.blog-feed .post-likes[data-post-id="${post.id}"]`);
          if (feedBtn) {
            feedBtn.querySelector("i").className = "fas fa-heart";
            feedBtn.style.color = "var(--color-primary)";
            feedBtn.querySelector(".like-count").textContent = post.likes;
          }
        }
        countEl.textContent = post.likes;
      });
    }
  }
  
  // Show the modal
  modal.classList.add("active");
}

