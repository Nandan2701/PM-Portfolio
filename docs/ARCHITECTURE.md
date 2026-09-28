# Nexus Portfolio — Technical Architecture Documentation

## Overview
Nexus Portfolio is a zero-build-step, high-performance static web application built to serve as an authoritative, high-signal representation of Nandan Bhole's Product Management work.

## Architectural Principles
1. **Zero Hydration Latency (FCP < 150ms):**
   - Pure Semantic HTML5 and modular Vanilla CSS3.
   - Zero React/Next.js/Node runtime dependencies.
   - Zero compilation overhead; runs locally by opening `index.html`.

2. **Data-Driven Decoupling:**
   - All dynamic content (Products, Teardowns, Articles, Profiles) is defined declaratively in `js/data.js`.
   - Adding a new product or teardown requires zero HTML alterations.

3. **Distraction-Free Reading Engine (Slide-Over Drawer):**
   - Articles and in-depth teardowns open in an in-context slide-over drawer (`css/drawer.css`).
   - Preserves user scroll position on the main landing page, eliminating cognitive friction.
   - Supports keyboard `Escape` closing, backdrop dismissal, and body scroll locking.

4. **Authentic Feedback Loop:**
   - Interactive comment engine (`js/comments.js`) powered by `localStorage` persistence with immediate feedback posting.

5. **Editorial Typography Hierarchy:**
   - Headings: `Newsreader` (Google Fonts Editorial Serif)
   - Interface & Body: `Plus Jakarta Sans`
   - Technical & Status: `JetBrains Mono`


---
## Session Start: 2026-09-23


---
## Session Start: 2026-09-24


---
## Session Start: 2026-09-24


---
## Session Start: 2026-09-26


---
## Session Start: 2026-09-27


---
## Session Start: 2026-09-28
