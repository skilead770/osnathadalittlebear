---
name: mobile-friendliness
description: Guidelines and utility tools to make web pages highly readable, optimized, and exceptionally beautiful on mobile devices, ensuring premium responsive layout design and perfect typography.
---

# Mobile Friendliness & Premium Responsive Design Skill

This skill provides a comprehensive framework and behavioral instructions to transform desktop-first or partially responsive web designs into stunning, highly-readable, premium mobile interfaces.

## 1. Core Principles of Mobile Readability

### A. Responsive Typography
*   **Viewport-relative sizing**: Use `clamp()` for main headings so they transition smoothly between desktop and mobile.
    ```css
    h1 {
      font-size: clamp(2rem, 5vw, 3.5rem);
    }
    ```
*   **Optimal Line Height & Length**: Mobile body text should have a line height of `1.6` to `1.75` for maximum legibility. Line lengths should stay between 45–75 characters.
*   **Prevent Font Wrapping Failures**: Avoid narrow absolute container widths that force long words (especially in Hebrew/German) to wrap mid-word. Use `word-break: break-word` and `hyphens: auto` where appropriate.

### B. Spacing & Grid Reductions
*   **Maximize Content Area**: On screens `< 768px`, reduce large horizontal paddings (e.g., from `3rem` to `1rem` or `1.5rem`) to prevent squeezed text columns.
*   **Flex/Grid Direction Shifts**: Always shift multi-column layouts (`row`) to a single column (`column`) on mobile devices.
    ```css
    @media (max-width: 768px) {
      .grid-layout {
        grid-template-columns: 1fr;
        gap: 1.5rem;
      }
    }
    ```

### C. Touch Target Design
*   **Interactive Target Sizing**: Ensure all interactive elements (buttons, links, form inputs) are at least `44px x 44px` to accommodate human fingers comfortably.
*   **Sufficient Spacing**: Avoid placing text-links tightly together. Use flex gaps or margins of at least `8px` between touchable items.

### D. Layout Safeguards
*   **No Horizontal Scrolling**: Ensure that no container exceeds the viewport width. Use `max-width: 100%` on images, iframes, videos, and tables.
*   **Scrollable Elements**: If a table, code block, or tab-bar must be wide, wrap it in a container with `overflow-x: auto` and a subtle indicator for horizontal scrolling.

---

## 2. Implementation Guidelines

### Phase 1: Viewport Inspection
1. Confirm `<meta name="viewport" content="width=device-width, initial-scale=1.0">` is present in the HTML `<head>`.
2. Inspect CSS for hardcoded width properties (e.g. `width: 800px`) and replace them with responsive units (`width: 100%`, `max-width: 800px`).

### Phase 2: Navigation Optimization
1. Convert complex desktop horizontal navigation bars into:
   * A clean drawer menu (hamburger menu toggle).
   * Or a modern horizontal scrolling tab-bar for flat architectures.

### Phase 3: Spacing & Media Scaling
1. Apply media queries to scale down padding, gaps, and margins of body, headers, and footer cards.
2. Ensure full-width images use `object-fit: cover` and proper `aspect-ratio` to maintain visual elegance without skewing.
