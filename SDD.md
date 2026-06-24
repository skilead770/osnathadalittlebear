# Software Design Document (SDD) — Osnat Had a Little Bear

This document outlines the architecture, layout system, component structure, and future development roadmap for **Osnat Had a Little Bear** (לאסנת היה דובון), a personalized slow-living blog designed for a vintage, nostalgic, and warm aesthetic.

---

## 1. System Architecture & Tech Stack

The application is built as an ultra-lightweight, high-performance static web application optimized for instant rendering and deployment on **GitHub Pages**.

*   **HTML5**: Semantic tags (`<header>`, `<main>`, `<aside>`, `<article>`, `<footer>`) for SEO and accessibility.
*   **Vanilla CSS3**: Tailored CSS Custom Properties (variables), CSS Grid, Flexbox, custom animations, and responsive breakpoints.
*   **Vanilla JavaScript (ES6)**: Pure client-side state management for real-time interactions, search filters, state toggling, and alerts.
*   **Assets**: Optimized local PNG images, integrated Google Fonts (*Playfair Display*, *Outfit*), and FontAwesome CDN icons.

---

## 2. Directory Structure

```
C:\Users\gh7358\Documents\my-coding-project\
├── index.html          # Main HTML structure and SEO markup
├── style.css           # Global design system, layout, and micro-animations
├── app.js              # State logic, search/filtering, and interactive widgets
├── SDD.md              # Living Software Design Document (This file)
├── README.md           # Quickstart and project overview
├── blogger_profile.png # Elena/Osnat kitchen profile photo
├── cozy_flatlay.png    # Morning ritual blog post banner
└── herbal_tea.png      # Evening garden tea blog post banner
```

---

## 3. Design System (CSS Tokens)

Our custom design system is governed by CSS variables in `style.css` to maintain strict design cohesion across all present and future modules:

| Variable | Token Name | Hex Value | Purpose |
| :--- | :--- | :--- | :--- |
| `--color-primary` | Terracotta | `#B56C60` | Brand identity, primary buttons, logo highlight |
| `--color-secondary` | Sage Green | `#7D9382` | Secondary brand color, tags, active headers |
| `--color-accent` | Antique Gold | `#E5A93B` | Highlights, specialty icons, and warm alerts |
| `--color-bg` | Warm Alabaster | `#FDFBF7` | Comforting, low-strain main page background |
| `--color-bg-card` | Crisp White | `#FFFFFF` | Contrasting card and widget container background |
| `--color-text` | Deep Slate | `#2C302E` | High-readability dark grey body text |
| `--color-text-muted` | Soft Slate | `#646E6B` | Meta tags, timestamps, secondary captions |

---

## 4. Feature & Component Specification

### A. Responsive Header & Navigation
*   **Sticky Position**: Blurs the background content on scroll using `backdrop-filter: blur(12px)` for a premium, glassmorphic appearance.
*   **Branding Logo**: Custom serif text with italics, displaying "Osnat Had a Little Bear" and subtitle.
*   **Social Connectivity**: Floating round social profile buttons with hover transitions.

### B. Client-Side Real-Time Filter & Search
*   **Search Box**: Evaluates keyboard inputs instantly, running a client-side text match on post titles, excerpts, and category names.
*   **Category Tags**: Interactive round pills ("All", "Mindful Living", "Sourdough", "Home") that filter the blog feed instantaneously without reloading the page.

### C. Sidebar Interactive Modules
*   **Meet the Writer**: A bio widget displaying Osnat's avatar, background story, and social links.
*   **Osnat's Notebook (Quote Generator)**: An interactive card featuring a random quote cycle with an elegant `opacity` transition on state change.
*   **Book Nightstand Tracker**: A custom visual widget showing reading progress (currently *Wintering* by Katherine May) using a dynamic progress bar.
*   **Chapter Explorer**: Category index directories showing post counts.

### D. Simulated Server Interactions
*   **Persistent Likes**: Standard heart counters on posts that toggle filled states, increment count dynamically, and fire a personalized thank-you toast alert.
*   **Newsletter Form**: Intercepts submit events, resets values silently, and launches a floating custom checkmark notification toast.
*   **Cookie Preferences**: Generates a custom bottom banner on load and saves preference locally via `localStorage.setItem()`.

---

## 5. Development Roadmap (Feature Backlog)

These items represent planned expansions that can be built incrementally, continuing our cooperative **SDD (Software Design Document)**-driven approach:

- [ ] **Phase 1: Hydration Calculator Widget**
      *   Add an interactive sourdough calculator tool in the sidebar. Let users input the flour weight and toggle hydration percentage to output water, starter, and salt calculations.
- [ ] **Phase 2: Post Detail Overlays / Modal View**
      *   Enable clicking "Read Musings" to open a beautifully styled reading overlay/modal with the full blog post text and an interactive comment section.
- [ ] **Phase 3: Cozy Night Mode Toggle**
      *   Add an elegant sun/moon switch in the navigation bar to toggle to a dark, cozy reading palette (e.g., deep charcoal background with muted warm cream text).
- [ ] **Phase 4: Seasonal Garden Checklist**
      *   Introduce an interactive checklist widget indicating what to plant, prune, or harvest depending on the current season (Spring, Summer, Autumn, Winter).
