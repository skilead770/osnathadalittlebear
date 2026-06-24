// Detect if the document is running in Hebrew context (hebrew.html)
const isHebrewPage = document.documentElement.lang === 'he';

// Blog Data Structure (Simulated Backend)
const blogPosts = [
  {
    id: 4,
    title: "שבועיים מעניינים עברו במשפחתנו — יומן דרכים ומחשבות",
    titleHe: "שבועיים מעניינים עברו במשפחתנו — יומן דרכים ומחשבות",
    category: "mindful",
    categoryName: "Gentle Reflections",
    categoryNameHe: "הגיגים עדינים",
    date: "July 2, 2026",
    dateHe: "2 ביולי, 2026",
    readingTime: "10 min read",
    readingTimeHe: "קריאה של 10 דק'",
    excerpt: "שבועיים עמוסים ברגשות, טיפולים בבאר יעקב, נסיעות סוערות, מפגש משפחתי חם תחת סוכת הגפנים, רגעים קטנים של קירבה, ואריזה מהירה לקראת נסיעה מרגשת לגיאורגיה...",
    excerptHe: "שבועיים עמוסים ברגשות, טיפולים בבאר יעקב, נסיעות סוערות, מפגש משפחתי חם תחת סוכת הגפנים, רגעים קטנים של קירבה, ואריזה מהירה לקראת נסיעה מרגשת לגיאורגיה...",
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
        text: "יהודה חוזר הביתה אחרי יומיים של עבודה בחוות מגן אברהם, חיים חוזר מהישיבה, וישי והדר מגיעים אלינו מבית שאן הרחוקה — ממש כמו בפסוק: 'רְאִי, כֻּלָּם נִקְבְּצוּ בָאוּ לָך'. אנחנו עורכים מפגש קיץ משפחתי שמח של משפחת קדר אצלנו בחצר היפהפייה שנתנאל עיצב ומטפח באהבה. ישבנו יחד תחת סוכת הגפנים המרהיבה שיהודה וחיים ריתכו ובנו במו ידיהם ובכוחות עצמם."
      },
      {
        title: "יום שלישי ח' תמוז — אריזות ויאללה לגיאורגיה!",
        text: "נחשו מה? שוב נוסעים לבאר יעקב, והפעם בהפתעה - חוזרים לאריאל במהירות הבזק כדי להספיק למסיבת הסיום החגיגית של מוריה. במקביל, חנה חוגגת יום הולדת בטיול פריחה וטבע בנאות קדומים. חוזרים הביתה בערב, ואורזים בהתרגשות. נטע המקסימה לוקחת אותנו לנתב\"ג ויאללה — אנחנו בדרך לגיאורגיה! תודה ענקית מכל הלב לכל הנהגים המסורים שלנו שמלווים אותנו לאורך כל הדרך - החתן, הדוד והבת האהובה. ותודה רבה לסקודיאק הנאמנה שלנו ששירתה אותנו במסירות ובבטחה לאורך כל הנסיעות!"
      }
    ]
  },
  {
    id: 1,
    title: "Slowing Down: My Morning Coffee Ritual & Mindful Journaling",
    titleHe: "להאט את הקצב: טקס קפה הבוקר שלי וכתיבה מודעת ביומן",
    category: "mindful",
    categoryName: "Mindful Living",
    categoryNameHe: "חיים מודעים",
    date: "June 24, 2026",
    dateHe: "24 ביוני, 2026",
    readingTime: "5 min read",
    readingTimeHe: "קריאה של 5 דק'",
    excerpt: "There was a time when my mornings were a sprint. But lately, I've reclaimed the first thirty minutes of my day. No emails, no news, just the quiet whistle of the kettle, a warm ceramic mug between my hands, and a blank journal page. Here is what this slow ritual has taught me about transition and self-care in my forties...",
    excerptHe: "היה זמן שבו הבקרים שלי היו ריצה מטורפת. אבל לאחרונה, החזרתי לעצמי את שלושים הדקות הראשונות של היום. בלי מיילים, בלי חדשות, רק שריקה שקטה של הקומקום, ספל קרמי חם בין ידיי, ודף יומן ריק. הנה מה שהטקס האיטי הזה לימד אותי על מעברים ודאגה עצמית בשנות הארבעים לחיי...",
    image: "cozy_flatlay.png",
    likes: 124,
    comments: 18,
    body: `
      <p>There was a time when my mornings were a sprint. I would immediately check emails, scroll through the news, and plunge headfirst into a state of doing. But lately, in this chapter of my life, I have reclaimed the first thirty minutes of my day.</p>
      <p>No emails, no digital noise—just the quiet whistle of the kettle, a warm ceramic mug between my hands, and a blank journal page waiting for my thoughts.</p>
      <p>This slow morning ritual has taught me so much about gentle transitions, about protecting our peace before the world demands our attention, and about finding deep self-care in the simplest of habits.</p>
    `,
    bodyHe: `
      <p>היה זמן שבו הבקרים שלי היו ריצה מטורפת. מיהרתי לבדוק הודעות, לקרוא חדשות, ולהיכנס מיד למצב של עשייה. אבל לאחרונה, בפרק החיים הזה, החזרתי לעצמי את שלושים הדקות הראשונות של היום שלי.</p>
      <p>בלי מיילים, בלי רעש דיגיטלי—רק השריקה השקטה של הקומקום במטבח, המגע של ספל קרמי חם בין כפות ידיי, ודף נייר חלק שמחכה למילים שלי.</p>
      <p>הטקס היומיומי והאיטי הזה לימד אותי על החשיבות של מעברים רכים, של יצירת מרחב שקט לפני שהעולם מבקש את תשומת הלב שלנו, ושל מציאת שלווה פנימית עמוקה ברגעים הפשוטים ביותר.</p>
    `
  },
  {
    id: 2,
    title: "The Art of Slow Fermentation: Tending My First Sourdough Starter",
    titleHe: "אמנות התסיסה האיטית: לטפח את מחמצת השאור הראשונה שלי",
    category: "culinary",
    categoryName: "Sourdough & Cooking",
    categoryNameHe: "שאור ובישול",
    date: "June 18, 2026",
    dateHe: "18 ביוני, 2026",
    readingTime: "8 min read",
    readingTimeHe: "קריאה של 8 דק'",
    excerpt: "Her name is Penelope, and she lives in a glass jar on my kitchen counter. At first, baking sourdough felt intimidating—all those percentages, hydration ratios, and temperature calculations. But once I let go of perfection, I realized that feeding a starter is less about chemistry and more about intuition, patience, and learning to listen to the rhythm of your home...",
    excerptHe: "קוראים לה פנלופה, והיא חיה בצנצנת זכוכית על שיש המטבח שלי. בהתחלה, אפיית שאור נראתה לי מאיימת—כל האחוזים האלה, יחסי הידרציה וחישובי טמפרטורה. אבל ברגע ששחררתי את הרצון בשלמות, הבנתי שהזנת מחמצת היא פחות כימיה ויותר אינטואיציה, סבלנות, והקשבה למקצב של הבית שלך...",
    image: "blogger_profile.png", // Osnat in her kitchen
    likes: 215,
    comments: 34,
    body: `
      <p>Her name is Penelope, and she lives in a glass jar on my kitchen counter. At first, baking sourdough felt incredibly intimidating—all those baker's percentages, hydration ratios, and precise temperature calculations.</p>
      <p>But once I let go of mathematical perfection, I realized that feeding and keeping a starter is less about chemistry and more about intuition, patience, and learning to listen to the rhythm of your home and seasons.</p>
      <p>Today, Penelope yields rustic, golden-crusted loaves with an airy, wild crumb. She teaches me every day that the most rewarding things in life require time, temperature, and a little faith to rise.</p>
    `,
    bodyHe: `
      <p>קוראים לה פנלופה, והיא חיה בצנצנת זכוכית על שיש המטבח שלי. בהתחלה, הרעיון של אפיית לחם שאור ביתי הרגיש לי מאיים במיוחד—כל האחוזים האלה, יחסי הידרציה, זמני התפחה וחישובי טמפרטורה מדויקים.</p>
      <p>אבל ברגע ששחררתי את הצורך בשלמות אריתמטית, הבנתי שטיפוח והזנה של מחמצת הוא פחות שיעור בכימיה ויותר אימון באינטואיציה, קשב וסבלנות עמוקה. זה ללמוד להקשיב למקצב המשתנה של הבית שלך, של עונות השנה ושל הטבע עצמו.</p>
      <p>היום, פנלופה מעניקה לנו לחמים ריחניים, בעלי קרום זהוב ומתפצפץ וחלק פנימי רך ומלא בועות אוויר. היא מלמדת אותי יום-יום שדברים טובים באמת דורשים את הזמן שלהם כדי לתפוח ולצמוח.</p>
    `
  },
  {
    id: 3,
    title: "Steeping Peace: Tending My Garden & Taming the Evening Chaos",
    titleHe: "לחלוט שלווה: לטפח את הגינה שלי ולהרגיע את כאוס הערב",
    category: "home",
    categoryName: "Home & Hearth",
    categoryNameHe: "בית וחצר",
    date: "June 10, 2026",
    dateHe: "10 ביוני, 2026",
    readingTime: "6 min read",
    readingTimeHe: "קריאה של 6 דק'",
    excerpt: "After a long afternoon of tending to my sage bushes and lavender patches, there is nothing quite like brewing a fresh, garden-to-mug herbal tea. It has become my signature way to transition from the busy chaos of the day to a peaceful evening. Today, I'm sharing my favorite bedtime herbal blend and some thoughts on creating a home sanctuary...",
    excerptHe: "אחרי אחר צהריים ארוך של טיפול בשיחי המרווה וערוגות הלבנדר שלי, אין דבר שמשתווה לחליטת תה צמחים טרי, ישר מהגינה לספל. זה הפך לדרך המזוהה איתי לעבור מהכאוס העמוס של היום לערב רגוע. היום אני משתפת את חליטת הצמחים המועדפת עליי לפני השינה וכמה מחשבות על יצירת מרחב שקט...",
    image: "herbal_tea.png",
    likes: 189,
    comments: 27,
    body: `
      <p>After a long afternoon of weeding, trimming, and caring for my sage bushes and lavender patches, there is nothing quite like brewing a fresh, garden-to-mug herbal tea.</p>
      <p>It has become my signature way to transition from the busy chaos of the day's tasks to a peaceful evening. The warm water, the rising steam, and the fragrant herbs create a quiet boundary between the busy world and the sanctuary of my home.</p>
      <p>Today, I'm sharing my favorite bedtime herbal blend—a soothing combination of lemon verbena, lemon balm, and dried lavender—along with a few thoughts on creating a home sanctuary.</p>
    `,
    bodyHe: `
      <p>אחרי אחר צהריים ארוך של עידור, ניכוש עשבים וטיפול אוהב בשיחי המרווה וערוגות הלבנדר בחצר, אין דבר שמשתווה לחליטה חמה של תה צמחים טרי, שנקטף ישירות מהגינה אל תוך הספל.</p>
      <p>ההרגל הפשוט הזה הפך לדרך החתימה שלי למעבר רך ומודע מהכאוס של המשימות היומיומיות אל ערב שליו ומשפחתי. המים החמים, האדים העולים והניחוח המרגיע יוצרים גבול שקט בין המהומה שבחוץ למקדש הפנימי של הבית.</p>
      <p>בפוסט הזה אני גאה לשתף אתכם במתכון של חליטת הערב המנצחת שלי—שילוב של מליסה ריחנית, לואיזה רעננה ופרחי לבנדר שמיובשים באהבה, יחד עם כמה מחשבות על עיצוב הבית כמקלט שקט של רוגע.</p>
    `
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

// Cozy Quotes Array (Hebrew)
const cozyQuotesHe = [
  { text: "לפעמים הדבר הכי פרודוקטיבי שאתה יכול לעשות הוא לתת לבצק לתפוח.", author: "אסנת" },
  { text: "הגינה שלי מלמדת אותי כל יום שלא ניתן לזרז צמיחה. היא דורשת סבלנות, אור שמש וקצת אדמה.", author: "אסנת" },
  { text: "אושר הוא ספל חם של קמומיל, ספר חצי קרוא, וחלון מכוסה בטיפות גשם.", author: "אסנת" },
  { text: "בשנות העשרים שלי, רציתי לשנות את העולם. בשנות הארבעים שלי, אני רק רוצה מטבח שליו ואדמה בריאה.", author: "אסנת" },
  { text: "אנחנו לא צריכים חיים מאורגנים בצורה מושלמת כדי ליהנות מחיים יפים ומלאי שמחה.", author: "אסנת" },
  { text: "ללגום קפה איטי בבוקר זו סוג של תפילה.", author: "אסנת" }
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
  if (isHebrewPage) {
    initHebrewCalendarWidget();
  }
});

// 1. Warm Greeting Based on Local Time
function initGreeting() {
  const greetingEl = document.getElementById("cozy-greeting");
  if (!greetingEl) return;
  
  const hour = new Date().getHours();
  let greeting = isHebrewPage ? "ברוכים הבאים, חברים" : "Welcome, friend";
  
  if (hour < 12) {
    greeting = isHebrewPage ? "בוקר טוב, חברים" : "Good morning, friend";
  } else if (hour < 18) {
    greeting = isHebrewPage ? "צהריים טובים, חברים" : "Good afternoon, friend";
  } else {
    greeting = isHebrewPage ? "ערב טוב, חברים" : "Good evening, friend";
  }
  
  greetingEl.textContent = greeting;
}

// 2. Cozy Quote Generator
function initQuoteGenerator() {
  const quoteTextEl = document.getElementById("quote-text");
  const quoteAuthorEl = document.getElementById("quote-author");
  const quoteBtn = document.getElementById("quote-btn");
  
  if (!quoteTextEl || !quoteAuthorEl || !quoteBtn) return;
  
  const activeQuotes = isHebrewPage ? cozyQuotesHe : cozyQuotes;
  let currentIdx = 0;
  
  quoteBtn.addEventListener("click", () => {
    // Elegant fade-out, change, fade-in transition
    quoteTextEl.style.opacity = "0";
    quoteAuthorEl.style.opacity = "0";
    
    setTimeout(() => {
      let newIdx;
      do {
        newIdx = Math.floor(Math.random() * activeQuotes.length);
      } while (newIdx === currentIdx && activeQuotes.length > 1);
      
      currentIdx = newIdx;
      const selected = activeQuotes[currentIdx];
      
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
    const emptyTitle = isHebrewPage ? "לא נמצאו הגיגים" : "No musings found";
    const emptyText = isHebrewPage ? "נסו לשנות את החיפוש או לבחור קטגוריה אחרת." : "Try refining your search or category filter to find what you are looking for.";
    
    feedContainer.innerHTML = `
      <div class="animate-fade-in" style="text-align: center; padding: 4rem; border: 1px dashed var(--color-border); border-radius: var(--radius-md); background: var(--color-bg-card);">
        <h3 style="font-size: 1.5rem; color: var(--color-text-muted); margin-bottom: 0.5rem;">${emptyTitle}</h3>
        <p style="color: var(--color-text-muted); font-size: 0.95rem;">${emptyText}</p>
      </div>
    `;
    return;
  }
  
  feedContainer.innerHTML = postsToRender.map(post => {
    const title = isHebrewPage ? (post.titleHe || post.title) : post.title;
    const categoryName = isHebrewPage ? (post.categoryNameHe || post.categoryName) : post.categoryName;
    const date = isHebrewPage ? (post.dateHe || post.date) : post.date;
    const readingTime = isHebrewPage ? (post.readingTimeHe || post.readingTime) : post.readingTime;
    const excerpt = isHebrewPage ? (post.excerptHe || post.excerpt) : post.excerpt;
    const readMoreText = isHebrewPage ? "קראו עוד" : "Read Musings";
    const likesText = isHebrewPage ? "לייקים" : "likes";

    return `
      <article class="blog-post-card animate-fade-in" data-category="${post.category}">
        <a href="#post-${post.id}">
          <div class="post-img-container">
            <img class="post-img" src="${post.image}" alt="${title}" loading="lazy" />
            <div class="post-category-tag">${categoryName}</div>
          </div>
        </a>
        <div class="post-content">
          <div class="post-meta">
            <span><i class="far fa-calendar"></i> ${date}</span>
            <span><i class="far fa-clock"></i> ${readingTime}</span>
          </div>
          <a href="#post-${post.id}">
            <h2 class="post-title">${title}</h2>
          </a>
          <p class="post-excerpt">${excerpt}</p>
          <div class="post-footer">
            <a href="#post-${post.id}" class="read-more-btn">
              ${readMoreText} <span>&rarr;</span>
            </a>
            <button class="post-likes" data-post-id="${post.id}">
              <i class="far fa-heart"></i> <span class="like-count">${post.likes}</span> ${likesText}
            </button>
          </div>
        </div>
      </article>
    `;
  }).join('');
  
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
      const title = isHebrewPage ? (post.titleHe || post.title) : post.title;
      const excerpt = isHebrewPage ? (post.excerptHe || post.excerpt) : post.excerpt;
      const categoryName = isHebrewPage ? (post.categoryNameHe || post.categoryName) : post.categoryName;
      
      const matchesSearch = title.toLowerCase().includes(searchQuery) || 
                            excerpt.toLowerCase().includes(searchQuery) ||
                            categoryName.toLowerCase().includes(searchQuery);
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
      
      showToast(isHebrewPage ? `☕ תודה רבה! שלחנו מכתב-תה חגיגי ל-${email}. בדקו את תיבת הדואר שלכם בקרוב!` : `☕ Thank you! We've sent a welcome tea-letter to ${email}. Check your inbox soon!`);
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
    showToast(isHebrewPage ? "🍪 העוגיות אושרו! נזכור את ההגדרות החמימות שלך." : "🍪 Cookies accepted! We'll remember your cozy settings.");
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
        showToast(isHebrewPage ? "💖 תודה על הלייק שלכם! זה מחמם את הלב ומחזיק את הבלוג פעיל." : "💖 Thanks for loving this post! It keeps my cozy kitchen running.");
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
  
  // Use event delegation for Read Musings, Title Links, and Card Images in the feed
  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".read-more-btn, a[href^=\"#post-\"]");
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
    // Standard post layout (IDs 1, 2, 3)
    if (isHebrewPage) {
      const title = post.titleHe || post.title;
      const date = post.dateHe || post.date;
      const readingTime = post.readingTimeHe || post.readingTime;
      const categoryName = post.categoryNameHe || post.categoryName;
      const excerpt = post.excerptHe || post.excerpt;
      const body = post.bodyHe || post.body;
      const likedLabel = "לייקים";
      const lovedTitleHe = "אהבת את ההגיג?";
      const lovedTextHe = "השאירו לב קטן כדי לעזור לבלוג להמשיך לצמוח.";
      const likeBtnTextHe = "אהבתי";

      modalBody.innerHTML = `
        <div class="hebrew-modal-container" style="color: var(--color-text); line-height: 1.8; text-align: right; direction: rtl;">
          <div style="border-bottom: 2px solid var(--color-border); padding-bottom: 1.5rem; margin-bottom: 2rem;">
            <h1 style="font-size: 2.2rem; color: var(--color-primary); margin-bottom: 0.8rem; font-family: var(--font-title);">${title}</h1>
            <div style="display: flex; gap: 1.5rem; color: var(--color-text-muted); font-size: 0.9rem;">
              <span><i class="far fa-calendar" style="margin-left: 0.4rem; color: var(--color-secondary);"></i> ${date}</span>
              <span><i class="far fa-clock" style="margin-left: 0.4rem; color: var(--color-secondary);"></i> ${readingTime}</span>
              <span><i class="far fa-folder" style="margin-left: 0.4rem; color: var(--color-secondary);"></i> ${categoryName}</span>
            </div>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <img src="${post.image}" alt="${title}" style="width: 100%; height: auto; max-height: 400px; object-fit: cover; border-radius: var(--radius-md); box-shadow: var(--shadow-sm); border: 1px solid var(--color-border);" />
          </div>
          
          <p style="font-size: 1.1rem; margin-bottom: 1.5rem; font-weight: 500; color: var(--color-primary); font-style: italic;">${excerpt}</p>
          
          <div style="font-size: 1.05rem; display: flex; flex-direction: column; gap: 1.5rem; font-family: var(--font-body);">
            ${body}
          </div>
          
          <div style="margin-top: 3rem; padding-top: 2rem; border-top: 2px dashed var(--color-border); text-align: center;">
            <h3 style="font-family: var(--font-title); color: var(--color-secondary); margin-bottom: 0.5rem;">${lovedTitleHe}</h3>
            <p style="color: var(--color-text-muted); font-size: 0.95rem; margin-bottom: 1.5rem;">${lovedTextHe}</p>
            <button class="post-likes" data-post-id="${post.id}" style="background: var(--color-bg-card); border: 1px solid var(--color-border); padding: 0.8rem 2rem; border-radius: 30px; font-family: var(--font-body); font-size: 1rem; cursor: pointer; color: var(--color-text-muted); display: inline-flex; align-items: center; gap: 0.6rem; transition: var(--transition);">
              <i class="far fa-heart" style="color: var(--color-primary);"></i> <span class="like-count">${post.likes}</span> ${likeBtnTextHe}
            </button>
          </div>
        </div>
      `;
    } else {
      // English post layout (IDs 1, 2, 3)
      const body = post.body || `
        <p>This is a full reflection about slow living, mindful patterns, and kitchen experiments. Osnat's blog represents a sanctuary where life unfolds at its own cozy rhythm. We observe and absorb the changing seasons, the quiet rise of sourdough starters, and the gentle breeze sweeping through the herbal garden.</p>
        <p>By learning to listen to the whispers of our homes, we find that the middle chapters of our lives are often the richest, most rewarding, and filled with deep self-discovery.</p>
      `;

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
            ${body}
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
    }
    
    // Wire up like button inside standard modal (handles both English and Hebrew versions)
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
          
          const thanksMessage = isHebrewPage 
            ? "💖 תודה על הלייק שלכם! זה מחמם את הלב ומחזיק את הבלוג פעיל."
            : "💖 Thanks for loving this post! It keeps my cozy kitchen running.";
          showToast(thanksMessage);
          
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

// 9. Dynamic Hebrew Calendar Widget using @hebcal/core
async function initHebrewCalendarWidget() {
  const dateEl = document.getElementById("hebrew-date-str");
  const parashaEl = document.getElementById("hebrew-parasha-str");
  if (!dateEl || !parashaEl) return;

  try {
    // Dynamically import HDate and HebrewCalendar from @hebcal/core ESM on CDN
    const { HDate, HebrewCalendar } = await import('https://cdn.jsdelivr.net/npm/@hebcal/core/+esm');
    
    const today = new HDate();
    // Render in Gematriya with vowels suppressed for readability (true)
    const dateStr = today.renderGematriya(true); 
    
    // Calculate the upcoming Shabbat events to find the Parashat Hashavua
    const options = {
      start: today,
      end: new HDate(today.abs() + 7), // look ahead 7 days
      il: true, // Israel calendar
      shabbatPortal: true
    };
    const events = HebrewCalendar.calendar(options);
    
    let parashaStr = "";
    for (const ev of events) {
      const desc = ev.getDesc();
      if (desc && desc.startsWith("Parashat")) {
        parashaStr = ev.render('he'); // e.g. "פרשת חקת"
        break;
      }
    }
    
    dateEl.textContent = dateStr;
    if (parashaStr) {
      parashaEl.textContent = `שבת הקרובה: ${parashaStr}`;
    } else {
      parashaEl.textContent = "שבוע שקט ומבורך";
    }
  } catch (err) {
    console.warn("Failed to load @hebcal/core:", err);
    // Silent fallback if offline or CDN is blocked
    const fallbackDate = new Date();
    dateEl.textContent = fallbackDate.toLocaleDateString('he-IL', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    parashaEl.textContent = "שבוע טוב ומבורך";
  }
}

