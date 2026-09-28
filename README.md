# Nexus Portfolio — Nandan Bhole

> **Award-Caliber, Editorial Product Management Portfolio**  
> Built with zero build dependencies, zero runtime hydration delay, and 100% adherence to the 18 Nexus specifications.

---

## ⚡ Quick Start (Run Locally)

You can view the portfolio in any modern browser immediately:

```bash
# Option 1: Double click index.html or open via browser
# In Windows Powershell:
Start-Process "index.html"

# Option 2: Run via local static server (optional)
npx serve .
# or
python -m http.server 8000
```

---

## 🏛️ Directory Architecture

```
Nexus-Portfolio/
├── index.html                  # Single unified front page with clean 4-5 core sections
│
├── css/                        # Modular Design System Stylesheets
│   ├── reset.css               # Modern browser reset & typography smoothing
│   ├── tokens.css              # Editorial color palette, fluid clamp typography, shadows
│   ├── layout.css              # Sticky masthead, section vertical rhythm, grid system
│   ├── components.css          # Product cards, teardown cards, buttons, comment box
│   ├── drawer.css              # Slide-over reading drawer for articles & teardowns
│   └── responsive.css          # Mobile-first adaptive layout rules (<768px and <480px)
│
├── js/                         # Vanilla ES6 Modular Logic
│   ├── app.js                  # Main DOM controller, drawer toggles, smooth scroll
│   ├── data.js                 # Central single source of truth for products & essays
│   └── comments.js             # Interactive comment engine with localStorage persistence
│
├── content/                    # Raw Markdown Essays & Teardowns
│   ├── articles/               # Deep-dive essays on AI retention, distribution, inversion
│   └── case-studies/           # Real product teardowns (Rapido, Google Maps)
│
├── docs/                       # Architecture & Product Documentation
│   ├── ARCHITECTURE.md         # Technical architecture & design decisions
│   └── SPECIFICATION.md        # Product requirements & user journey matrix
│
└── README.md                   # Quickstart and overview
```

---

## 🎯 Key Features Implemented

1. **Zero Cognitive Load Masthead:**
   - Highlights Nandan's active status: *Seeking 6-Month On-Site PM Internship in Bangalore / Mumbai / Gurugram / Pune / Hyderabad*.
   - 1-click links to LinkedIn, GitHub, and email.
2. **1-Click Live Product Launching:**
   - Products (Saarum, Focus-Matrix) with <100-word summaries, technical metrics, and 1-click launch.
3. **Interactive Community Comments:**
   - Allows visitors to post feedback and read authentic comments directly on product cards without server overhead.
4. **Distraction-Free Slide-Over Reading Drawer:**
   - Deep-dive teardowns and essays open in an in-context slide-over drawer with zero scroll-position loss and keyboard `ESC` dismissal.
5. **The Inversion Framework:**
   - Clearly documents Nandan's unique execution approach: cataloging all failure vectors and mentally simulating user journeys before writing a single line of code.
