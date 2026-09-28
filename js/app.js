/**
 * NEXUS PORTFOLIO — CLIENT-SIDE ROUTER & APP CONTROLLER (app.js)
 * Zero-dependency, hash-based instant view switcher.
 * Works 100% locally via file:// and on web hosting.
 */

// Full markdown HTML bodies for articles
const ARTICLE_BODIES = {
  "product-naming-psychology": `
    <h1>How to Name a Product: Cognitive Fluency, Phonosemantics & The Radio Test</h1>
    <div style="font-family: var(--font-mono); font-size: var(--text-xs); color: var(--color-text-tertiary); margin: var(--space-3) 0 var(--space-6); border-bottom: 1px solid var(--color-border); padding-bottom: var(--space-3);">
      By Nandan Bhole • Product Strategy & Linguistics • 26 Sep 2026 • 5 min read
    </div>
    <p>A solo founder or product engineer will spend 400 hours fine-tuning Postgres database indexes, designing pixel-perfect Figma components, and testing edge cases.</p>
    <p>And then, forty-eight hours before launch, they spend fifteen minutes picking a name from a thesaurus or an arbitrary Latin word generator.</p>
    <p><strong>This is one of the most expensive micro-mistakes in early-stage product development.</strong></p>
    <p>A bad product name is not merely an aesthetic flaw—it is a continuous, invisible friction tax paid on every verbal recommendation, every investor pitch, and every search query. If potential users stumble over your name, they will subconsciously project that friction onto the software itself.</p>

    <h2>1. The First Law: Cognitive Processing Fluency</h2>
    <p>In cognitive psychology, <strong>Processing Fluency</strong> measures how effortlessly the human brain perceives and decodes incoming stimuli.</p>
    <ul>
      <li>When a name is phonetically effortless to pronounce, the subconscious automatically attributes <strong>higher competence, reliability, and security</strong> to the underlying product.</li>
      <li>When the vocal chords hesitate or the brain must pause to calculate spelling, the brain encounters <em>cognitive resistance</em>.</li>
      <li>In a crowded marketplace where software switching costs are near zero, cognitive resistance translates directly into drop-offs before the user ever touches your signup flow.</li>
    </ul>

    <h2>2. The 2-Syllable Heuristic (The Golden Rule of SaaS)</h2>
    <p>Examine the most defensible, viral tools built over the past decade:</p>
    <blockquote>Slack, Stripe, Notion, Linear, Figma, Loom, Raycast, Docker, GitHub, Vercel, Apple.</blockquote>
    <p>Notice the structural pattern: <strong>every single one has one or two syllables.</strong></p>
    <p>This is not a coincidence—it is dictated by the limits of human working memory chunking. In conversational word-of-mouth (<em>"Have you tried X?"</em>), two syllables roll off the tongue in under 300 milliseconds. When a name reaches three or four syllables, users either organically truncate it (Kubernetes &rarr; K8s) or stop recommending it verbally.</p>

    <h2>3. Phonosemantics: The Sound Symbolism (The Bouba-Kiki Effect)</h2>
    <p>Linguists have long proven that phonemes (speech sounds) carry intrinsic meaning before the brain even decodes the definition of a word:</p>
    <ul>
      <li><strong>Sharp, High-Frequency Consonants (K, T, P, X, Z):</strong> Elicit feelings of speed, sharp edges, and technological precision (e.g., <em>Stripe, Apex, Linear, Raycast</em>).</li>
      <li><strong>Soft Plosives & Sonants (M, N, L, R, W):</strong> Evoke warmth, calm, human memory, and psychological safety (e.g., <em>Loom, Notion, Calm, Bloom</em>).</li>
      <li><strong>Front Vowels (i, e):</strong> Higher acoustic pitch signals lightness, speed, and zero friction (e.g., <em>Mint, Kindle, Linear</em>).</li>
    </ul>
    <p>If you are building high-velocity developer infrastructure, you want crisp, front-vowel phonemes with sharp stops. If you are building an intimate personal reflection ledger, you want soft, grounding sonorants.</p>

    <h2>4. The 2×2 Naming Matrix & The "Moderate Congruency" Sweet Spot</h2>
    <p>All product names fall into four structural quadrants:</p>
    <ul>
      <li><strong>Descriptive:</strong> States literally what the product does (e.g., <em>Whole Foods, Weather App</em>). Safe, but boring and impossible to trademark.</li>
      <li><strong>Compound / Deviant:</strong> Two combined or slightly altered real words (e.g., <em>Postman, Instacart, Netflix</em>).</li>
      <li><strong>Neologisms:</strong> Completely coined, invented words (e.g., <em>Figma, Vercel, Spotify</em>). High legal defensibility, but expensive to build cognitive associations from scratch.</li>
      <li><strong>Associative / Metaphoric:</strong> Evokes a consequence, mental model, or emotion (e.g., <em>Notion, Slack, Stripe, Kindle</em>). <strong>This is the YC and modern SaaS sweet spot.</strong></li>
    </ul>
    <p>The key psychological mechanism is <strong>Moderate Congruence</strong>. If a name is 100% literal (<em>"Daily-Task-Priority-Grid"</em>), it feels like a school assignment. If it is 100% abstract (<em>"Xylophia"</em>), users scratch their heads. The ideal name provides a subtle mental puzzle that delivers a subconscious 0.2-second dopamine "Aha!" moment when the user discovers why it was named that.</p>

    <h2>5. The Two Pre-Launch Elimination Tests</h2>
    <p>Before committing to a product name, run it through two elimination filters:</p>
    <h3>Test A: The "Radio Test" (The Noisy Bar Test)</h3>
    <p>Say the name out loud to someone across a crowded room or over a podcast:</p>
    <blockquote>"Check out my new product, it's called [Name]."</blockquote>
    <p>If they have to ask: <em>"Is that with a C or a K?"</em>, <em>"Is there a hyphen?"</em>, or <em>"How do you spell that?"</em>—<strong>the name fails</strong>. You leak up to 40% of viral word-of-mouth if users cannot type the domain on the first attempt without looking.</p>
    <h3>Test B: The SMILE & SCRATCH Framework</h3>
    <p>Developed by naming strategist Alexandra Watkins, this framework highlights what to pursue and what to eliminate:</p>
    <ul>
      <li><strong>SMILE (Keep):</strong> <strong>S</strong>uggestive (hints at the benefit) • <strong>M</strong>eaningful (resonates with ICP) • <strong>I</strong>magery (visually evoke a mental picture) • <strong>L</strong>egs (room to expand) • <strong>E</strong>motional (creates clarity or relief).</li>
      <li><strong>SCRATCH (Discard):</strong> <strong>S</strong>pelling-challenged • <strong>C</strong>opycat • <strong>R</strong>estrictive • <strong>A</strong>nnoying • <strong>T</strong>ame (bland) • <strong>C</strong>urse of Knowledge (only the developer gets it) • <strong>H</strong>ard to pronounce.</li>
    </ul>

    <h2>Conclusion: The Name is Your First UI Component</h2>
    <p>The product name is the very first user interface component anyone encounters. It enters their auditory and visual cortex before they ever load your CSS, read your copy, or benchmark your API latency.</p>
    <p>Treat naming not as marketing fluff, but as an architectural constraint: minimize syllables, maximize cognitive fluency, eliminate pronunciation friction, and pass the Radio Test.</p>
  `,

  "ai-retention-debt": `
    <h1>The AI Retention Debt & The 90-Second Cognitive Friction Loop</h1>
    <div style="font-family: var(--font-mono); font-size: var(--text-xs); color: var(--color-text-tertiary); margin: var(--space-3) 0 var(--space-6); border-bottom: 1px solid var(--color-border); padding-bottom: var(--space-3);">
      By Nandan Bhole • Cognitive Architecture & PM • 14 Aug 2026 • 4 min read
    </div>
    <p>In 2026, anyone with access to frontier AI models can consume 50 pages of dense technical research or competitive teardowns in under 45 minutes.</p>
    <p>The summaries are flawless. The syntax is clean. The experience feels effortless.</p>
    <p><strong>And yet, two hours later, you remember almost none of it.</strong></p>
    <p>This is what I call the <em>AI Retention Debt</em>: the compounding gap between the volume of information we passively ingest and the tiny fraction our brain retains for active synthesis and decision-making.</p>
    <h2>Why Recognition is Not Retrieval</h2>
    <p>Cognitive psychology explains this through the <strong>Fluency Illusion</strong>:</p>
    <ul>
      <li>When text is effortlessly readable, the brain assumes mastery.</li>
      <li>Because you experienced zero struggle while reading the AI's distilled answer, the hippocampus tags the information as ephemeral context and discards it during the next sleep cycle.</li>
      <li>Traditional solutions fail: Notion journaling causes burnout by day 4, while Anki flashcards fail for dynamic architectural thinking.</li>
    </ul>
    <h2>The Solution: The 90-Second Cognitive Friction Loop</h2>
    <p>When designing <strong>Saarum</strong>, I stripped away all tag hierarchies, folders, and markdown editors. The product enforces one strict constraint:</p>
    <blockquote>"You are only allowed 1 to 2 distilled bullet points per hour."</blockquote>
    <p>By limiting the input space to 140 characters per hour, the user is physically forced to stop and ask:</p>
    <ul>
      <li><em>What was the single non-obvious insight from this hour?</em></li>
      <li><em>What did I actually learn that changed my mental model?</em></li>
    </ul>
    <p>That 90 seconds of cognitive friction forces <strong>active retrieval</strong>. The struggle is not a bug—it is the biological mechanism that converts fleeting sensory input into long-term mental models.</p>
  `,

  "distribution-mechanics": `
    <h1>Distribution Mechanics for Solo AI Builders in 2026</h1>
    <div style="font-family: var(--font-mono); font-size: var(--text-xs); color: var(--color-text-tertiary); margin: var(--space-3) 0 var(--space-6); border-bottom: 1px solid var(--color-border); padding-bottom: var(--space-3);">
      By Nandan Bhole • Growth Strategy & PM • 02 Sep 2026 • 5 min read
    </div>
    <p>The marginal cost of software development has plummeted toward zero. A solo engineer equipped with AI coding workflows can build and deploy a functional SaaS product over a single weekend.</p>
    <p>Consequently, <strong>the product itself is no longer the moat.</strong></p>
    <p>When a hundred competitors can replicate your feature set in 72 hours, how does a modern product builder establish durable distribution?</p>
    <h2>The Three Laws of Modern Distribution</h2>
    <h3>1. Inbound Through Unsolicited Value (The Teardown Funnel)</h3>
    <p>Traditional cold outreach says: <em>"Hey, check out my tool, can we chat for 15 mins?"</em> Conversion is under 2%.</p>
    <p>Modern high-signal outreach says: <em>"I spent 4 hours using your checkout flow, identified these two friction points causing mobile cart drop-offs, and mocked up a proposed solution with wireframes."</em></p>
    <p>When you provide asymmetric value upfront, founders and product leaders cannot ignore you. Your portfolio becomes a living catalog of proof-of-work rather than a resume.</p>
    <h3>2. The Micro-Utility Distribution Hook</h3>
    <p>Instead of trying to sell a monolithic platform, launch a laser-focused, single-utility micro-product that solves one agonizing problem with zero friction: no login wall, no onboarding survey, and 100% client-side instant execution.</p>
    <h3>3. Building in the Open with Intellectual Rigor</h3>
    <p>Sharing screenshots of vanity metrics is noise. Sharing the exact failure modes you encountered, why a specific UX pattern failed, and how you altered your architecture is signal. People follow minds that think from first principles.</p>
  `,

  "inversion-pm": `
    <h1>Inversion in Product Execution: Why We Eliminate Failure Modes First</h1>
    <div style="font-family: var(--font-mono); font-size: var(--text-xs); color: var(--color-text-tertiary); margin: var(--space-3) 0 var(--space-6); border-bottom: 1px solid var(--color-border); padding-bottom: var(--space-3);">
      By Nandan Bhole • Product Management & Mental Models • 18 Sep 2026 • 4 min read
    </div>
    <p>Carl Gustav Jacob Jacobi, the 19th-century mathematician, solved intractable mathematical problems with a single heuristic: <em>"Man muss immer umkehren"</em> — Invert, always invert.</p>
    <p>Charlie Munger later brought this principle into business strategy: <em>"Tell me where I'm going to die, that is, so I'll never go there."</em></p>
    <p>In modern product development, 95% of teams start with the forward question: <em>"How do we make this feature blow up?"</em> This optimism bias leads directly to bloated interfaces, delayed releases, and catastrophic blind spots.</p>
    <h2>My Two-Step Operational Playbook</h2>
    <h3>Step 1: The Pre-Mortem Catalog (Cataloging Failure Vectors)</h3>
    <p>Before writing a single line of code or designing a single UI component, I write down every single way the project can fail:</p>
    <ul>
      <li>Will the mobile keyboard obscure the submit button on 375px screens?</li>
      <li>Will the user get confused by having more than 5 choices on the front page?</li>
      <li>Will third-party API latency destroy perceived app responsiveness?</li>
      <li>Will the value proposition take more than 15 seconds to understand?</li>
    </ul>
    <p>Once the failure catalog is exhaustive, <strong>my entire execution energy is spent methodically cutting off those paths.</strong> If you systematically eliminate every path to failure, success is the only remaining outcome.</p>
    <h3>Step 2: Pre-Execution Mental Simulation</h3>
    <p>Before touching an IDE, I run an end-to-end simulation of the user flow in my mind. What does the user see in the first 3 seconds? What micro-hesitation occurs before they click the main CTA?</p>
    <p>When the mental simulation is vivid and complete, the actual engineering phase becomes effortless—it is simply transcribing a system that already works into code.</p>
  `
};

class PortfolioApp {
  constructor() {
    this.data = window.PORTFOLIO_DATA;
    this.initViews();
    this.bindRouting();
    this.renderHomeContent();
    this.renderDedicatedPages();
    this.initScrollExperience();
    this.handleRoute(true);
  }

  initScrollExperience() {
    const masthead = document.querySelector(".masthead");
    const bannerImg = document.querySelector(".panoramic-strip-img");

    // Dynamic Masthead Frosted Linen Elevation & Parallax on scroll
    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY;

      // 1. Frosted Linen Glass Elevation (>25px)
      if (masthead) {
        if (scrollY > 25) {
          masthead.classList.add("is-scrolled");
        } else {
          masthead.classList.remove("is-scrolled");
        }
      }

      // 2. Damped Panoramic Banner Parallax
      if (bannerImg && scrollY < 450) {
        bannerImg.style.transform = `translateY(${scrollY * 0.12}px)`;
      }

      // 3. Home View Section Scroll-Spy
      this.handleHomeScrollSpy(scrollY);
    }, { passive: true });

    // Saccadic Viewport Reveal Observer (GPU accelerated, non-intrusive)
    const observerOptions = {
      root: null,
      rootMargin: "0px 0px -35px 0px",
      threshold: 0.08
    };

    this.scrollObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-revealed");
        }
      });
    }, observerOptions);

    this.observeRevealNodes();
  }

  observeRevealNodes() {
    if (!this.scrollObserver) return;
    document.querySelectorAll(".reveal-node:not(.is-revealed)").forEach(el => {
      this.scrollObserver.observe(el);
    });
  }

  handleHomeScrollSpy(scrollY) {
    const homeView = this.views?.home;
    if (!homeView || !homeView.classList.contains("active")) return;

    const sections = [
      { id: "section-products-teaser", nav: "products" },
      { id: "section-case-study", nav: "case-study" },
      { id: "section-articles-teaser", nav: "articles" },
      { id: "contact-section", nav: "about" }
    ];

    const scrollCheck = scrollY + 180;
    let currentNav = "home";

    for (let i = 0; i < sections.length; i++) {
      const sec = document.getElementById(sections[i].id) || document.querySelector(`.${sections[i].id}`);
      if (sec && sec.offsetTop <= scrollCheck) {
        currentNav = sections[i].nav;
      }
    }

    this.updateActiveNav(currentNav);
  }

  initViews() {
    this.views = {
      home: document.getElementById("view-home"),
      products: document.getElementById("view-products"),
      teardown: document.getElementById("view-teardown"),
      "case-study": document.getElementById("view-teardown"),
      caseStudy: document.getElementById("view-teardown"),
      articles: document.getElementById("view-articles"),
      articleDetail: document.getElementById("view-article-detail"),
      "how-i-work": document.getElementById("view-how-i-work"),
      howIWork: document.getElementById("view-how-i-work"),
      about: document.getElementById("view-how-i-work")
    };
    this.navLinks = document.querySelectorAll(".nav-link");
  }

  bindRouting() {
    window.addEventListener("hashchange", () => this.handleRoute(false));

    // Intercept clicks to #contact so we smooth-scroll WITHOUT leaving sticky #contact in URL hash
    document.addEventListener("click", (e) => {
      const contactBtn = e.target.closest('a[href="#contact"]');
      if (contactBtn) {
        e.preventDefault();
        this.switchView("home");
        this.updateActiveNav("contact");
        const footer = document.getElementById("contact-section");
        if (footer) {
          footer.scrollIntoView({ behavior: "smooth" });
        }
      }
    });

    // Copy email button handlers
    document.querySelectorAll(".btn-copy-email").forEach(btn => {
      btn.addEventListener("click", () => {
        navigator.clipboard.writeText("nandanbhole27@gmail.com").then(() => {
          const originalText = btn.innerHTML;
          btn.innerHTML = "✓ Copied to Clipboard!";
          setTimeout(() => { btn.innerHTML = originalText; }, 2000);
        });
      });
    });
  }

  handleRoute(isInitial = false) {
    const rawHash = window.location.hash.slice(1) || "home";
    const [route, param] = rawHash.split("/");

    // Handle Contact smooth scroll on home page
    if (route === "contact") {
      if (isInitial) {
        // If user just opened/reloaded index.html with sticky #contact in URL, clear it and show home hero at top
        if (window.history.replaceState) {
          window.history.replaceState(null, null, window.location.pathname + window.location.search);
        }
        this.switchView("home");
        this.updateActiveNav("home");
        window.scrollTo(0, 0);
        if (document.documentElement) document.documentElement.scrollTop = 0;
        if (document.body) document.body.scrollTop = 0;
        return;
      }
      this.switchView("home");
      this.updateActiveNav("contact");
      setTimeout(() => {
        document.getElementById("contact-section")?.scrollIntoView({ behavior: "smooth" });
      }, 50);
      return;
    }

    if (route === "home" || !this.views[route]) {
      if (route.startsWith("article") && param) {
        this.renderArticleDetail(param);
        this.switchView("articleDetail");
        this.updateActiveNav("articles");
      } else {
        this.switchView("home");
        this.updateActiveNav("home");
      }
    } else {
      this.switchView(route);
      this.updateActiveNav(route);
    }

    window.scrollTo(0, 0);
    if (document.documentElement) document.documentElement.scrollTop = 0;
    if (document.body) document.body.scrollTop = 0;
  }

  switchView(viewName) {
    const targetEl = this.views[viewName];
    const uniqueViewEls = new Set(Object.values(this.views).filter(Boolean));
    uniqueViewEls.forEach(el => {
      el.classList.toggle("active", el === targetEl);
    });

    // Toggle home panoramic banner
    const bannerEl = document.getElementById("home-banner");
    if (bannerEl) {
      bannerEl.style.display = (viewName === "home") ? "block" : "none";
    }

    if (viewName === "home" && window.scaleDeckFrame) {
      setTimeout(window.scaleDeckFrame, 30);
    }

    // Refresh viewport scroll reveals for newly activated view
    setTimeout(() => {
      this.observeRevealNodes();
    }, 60);
  }

  updateActiveNav(currentRoute) {
    const routeMap = {
      teardown: "case-study",
      "case-study": "case-study",
      caseStudy: "case-study",
      howIWork: "about",
      "how-i-work": "about",
      about: "about",
      products: "products",
      articles: "articles",
      articleDetail: "articles",
      home: "home"
    };
    const normalized = routeMap[currentRoute] || currentRoute;
    this.navLinks.forEach(link => {
      const href = link.getAttribute("href") || "";
      const routeTarget = href.replace("#", "").split("/")[0];
      link.classList.toggle("active", routeTarget === normalized);
    });
  }

  /* ----------------------------------------------------
     RENDER FRONT PAGE (COMPACT, BITE-SIZED, HUMAN-FIRST)
  ---------------------------------------------------- */
  renderHomeContent() {
    // 1. Render Dual-Card Feature Products Grid (Approved Spec)
    const productsGrid = document.getElementById("home-products-grid");
    if (productsGrid) {
      productsGrid.innerHTML = this.data.products.map(p => `
        <article class="product-feature-card reveal-node" id="card-${p.id}">
          <div class="pfc-body">
            <h3 class="pfc-name">${p.name}</h3>
            <h4 class="pfc-headline">${p.headline}</h4>
            <p class="pfc-subheadline">
              ${p.subheadline}
            </p>
          </div>

          <footer class="pfc-action-row">
            <a href="${p.liveUrl}" target="_blank" rel="noopener noreferrer" class="pfc-btn-primary" id="btn-launch-${p.id}">
              <span>Launch Live App</span>
              <span class="pfc-btn-arrow">&nearr;</span>
            </a>
            <button type="button" class="pfc-btn-video" onmouseenter="warmVideo('${p.videoUrl || ''}')" onclick="openVideoModal('${p.name}', '${(p.videoDesc || '').replace(/'/g, "\\'")}', '${p.videoUrl || ''}', '${p.liveUrl || ''}')">
              <span class="pfc-play-icon">&#9654;</span>
              <span>Product Video</span>
            </button>
          </footer>
        </article>
      `).join("");
    }

    // 2. Render Rapido Feature Banner
    const teardownBanner = document.getElementById("home-teardown-feature");
    if (teardownBanner) {
      const td = this.data.teardown;
      teardownBanner.innerHTML = `
        <div class="teardown-feature-banner">
          <div class="tf-header">
            <div style="display: flex; align-items: center; gap: var(--space-3);">
              <span class="tf-company-badge">${td.company}</span>
              <span class="badge badge-accent">10-Step PM Diagnostics</span>
            </div>
            <span class="badge badge-live" style="font-size: var(--text-xs); font-weight: bold;">
              ${td.heroMetric}
            </span>
          </div>

          <div>
            <h3 class="tf-title">${td.title}</h3>
            <p class="tf-summary">${td.summary}</p>
          </div>

          <div>
            <div style="font-family: var(--font-mono); font-size: var(--text-2xs); text-transform: uppercase; color: var(--color-text-tertiary); margin-bottom: 0.35rem;">
              The 10-Step Diagnostics Process:
            </div>
            <div class="ten-steps-preview">
              ${td.steps.slice(0, 6).map(s => `
                <div class="step-chip"><span>${s.num}</span> ${s.name}</div>
              `).join("")}
              <div class="step-chip" style="color: var(--color-accent); font-weight: bold;">+4 More Steps</div>
            </div>
          </div>

          <div style="display: flex; align-items: center; justify-content: space-between; border-top: 1px solid var(--color-border-subtle); padding-top: var(--space-3); margin-top: var(--space-2); flex-wrap: wrap; gap: var(--space-2);">
            <a href="#teardown" class="btn btn-primary btn-sm">
              Read Complete 10-Step Teardown ↗
            </a>
            <span style="font-family: var(--font-mono); font-size: var(--text-2xs); color: var(--color-text-tertiary);">
              ${td.dataAttribution}
            </span>
          </div>
        </div>
      `;
    }

    // 3. Render Article Cards Grid (Approved Visual Thesis Cards)
    const articlesGrid = document.getElementById("home-articles-grid");
    if (articlesGrid) {
      articlesGrid.innerHTML = this.data.articles.map(art => `
        <a href="#article/${art.id}" class="article-card reveal-node" title="Read ${art.title}">
          <div class="card-media">
            <span class="card-badge">${art.category}</span>
            <img src="${art.image}" alt="${art.title}">
          </div>
          <div class="card-body">
            <h3 class="card-title">${art.title}</h3>
            <p class="card-hook">${art.hook}</p>
            <div class="card-footer">
              <span class="read-time">${art.readTime}</span>
              <span class="action-link">
                <span>Read Essay</span>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </span>
            </div>
          </div>
        </a>
      `).join("");
    }
  }

  /* ----------------------------------------------------
     RENDER DEDICATED SUB-PAGES
  ---------------------------------------------------- */
  renderDedicatedPages() {
    // 1. Dedicated Products Page (Enhanced Dual-Card Architecture)
    const productsView = document.getElementById("view-products");
    if (productsView) {
      productsView.innerHTML = `
        <div class="subpage-container" style="max-width: 1080px;">
          <div class="view-back-bar">
            <a href="#home" class="btn-back">← Back to Overview</a>
            <span style="font-family: var(--font-mono); font-size: var(--text-xs); color: var(--color-text-tertiary);">01 / Products</span>
          </div>

          <div class="subpage-header">
            <span class="subpage-tag">Live Products</span>
            <h2 class="subpage-title">Products Built and Deployed</h2>
            <p class="subpage-subtitle">Clean-slate software built to solve acute cognitive bottlenecks with zero latency and high execution craft.</p>
          </div>

          <div class="products-side-by-side-grid">
            ${this.data.products.map(p => `
              <div class="product-side-card reveal-node" id="detail-${p.id}">
                <div class="product-side-card-top">
                  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                    <span class="badge badge-live">● ${p.status}</span>
                    <span style="font-family: var(--font-mono); font-size: 11px; color: var(--color-accent); font-weight: 600; text-transform: uppercase;">${p.tagline}</span>
                  </div>
                  <h3 class="product-side-card-title">${p.name}</h3>
                  <h4 style="font-family: var(--font-sans); font-size: 17px; font-weight: 700; color: var(--color-text-primary); margin: 6px 0 10px; line-height: 1.35;">${p.headline}</h4>
                </div>

                <p class="product-side-card-desc">
                  ${p.subheadline}
                </p>

                <div style="font-family: var(--font-mono); font-size: 11px; background: var(--color-bg-subtle); border: 1px solid var(--color-border-subtle); padding: 7px 12px; border-radius: var(--radius-xs); color: var(--color-text-secondary); margin-bottom: var(--space-4);">
                  <strong style="color: var(--color-text-primary);">Core Spec:</strong> ${p.metrics}
                </div>

                <div class="product-side-card-features">
                  <div class="product-features-heading">Key Capabilities</div>
                  <ul class="product-side-features-list">
                    ${p.features.map(f => `
                      <li>✓ ${f}</li>
                    `).join("")}
                  </ul>
                </div>

                <div class="product-side-card-actions" style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px;">
                  <div style="display: flex; gap: 8px; align-items: center;">
                    <a href="${p.liveUrl}" target="_blank" rel="noopener noreferrer" class="pfc-btn-primary" style="font-size: 13px; padding: 8px 16px;">
                      <span>Launch App</span>
                      <span class="pfc-btn-arrow">&nearr;</span>
                    </a>
                    <button type="button" class="pfc-btn-video" onmouseenter="warmVideo('${p.videoUrl || ''}')" onclick="openVideoModal('${p.name}', '${(p.videoDesc || '').replace(/'/g, "\\'")}', '${p.videoUrl || ''}', '${p.liveUrl || ''}')">
                      <span class="pfc-play-icon">&#9654;</span>
                      <span>Product Video</span>
                    </button>
                  </div>
                  <a href="${p.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm" style="font-size: 12px; padding: 6px 12px;">
                    Source Code ↗
                  </a>
                </div>
              </div>
            `).join("")}
          </div>
        </div>
      `;
    }

    // 2. Dedicated Rapido Teardown & Case Study Page (12-Step Framework)
    const teardownView = document.getElementById("view-teardown");
    if (teardownView) {
      const td = this.data.teardown;
      teardownView.innerHTML = `
        <div class="subpage-container" style="max-width: 960px;">
          <div class="view-back-bar">
            <a href="#home" class="btn-back">← Back to Overview</a>
            <span style="font-family: var(--font-mono); font-size: var(--text-xs); color: var(--color-text-tertiary);">02 / Case Study</span>
          </div>

          <div class="subpage-header">
            <span class="subpage-tag">02. Product Teardown</span>
            <h2 class="subpage-title">${td.company}: ${td.title}</h2>
            <p class="subpage-subtitle">${td.subtitle}</p>

            <div style="display: flex; gap: 12px; align-items: center; margin-top: var(--space-4); flex-wrap: wrap;">
              <a href="#home" class="pfc-btn-primary" style="font-size: 13px; padding: 8px 16px;">
                <span>Explore 12-Slide Deck on Home</span>
                <span class="pfc-btn-arrow">&rarr;</span>
              </a>
              <a href="../../Standalone_Product_Rapido_Case_Study/index.html" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm" style="font-size: 12px; padding: 8px 14px;">
                Open Standalone Dossier ↗
              </a>
            </div>
          </div>

          <div style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: var(--radius-md); padding: var(--space-6); margin-bottom: var(--space-8); box-shadow: var(--shadow-sm);">
            <h4 style="font-family: var(--font-serif); font-size: var(--text-lg); color: var(--color-text-primary); margin-bottom: var(--space-2);">
              Executive Diagnosis & Trust Deficit
            </h4>
            <p style="font-size: var(--text-sm); color: var(--color-text-secondary); line-height: var(--leading-relaxed); margin-bottom: var(--space-4);">
              ${td.summary}
            </p>
            <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: var(--space-2); border-top: 1px solid var(--color-border-subtle); padding-top: var(--space-3);">
              <div style="display: inline-flex; align-items: center; gap: var(--space-2); background: var(--color-success-bg); border: 1px solid var(--color-success-border); padding: 0.35rem 0.85rem; border-radius: var(--radius-sm); font-family: var(--font-mono); font-size: var(--text-xs); color: var(--color-success); font-weight: bold;">
                Modeled Outcome: ${td.heroMetric} in peak corridor cancellations
              </div>
              <span style="font-family: var(--font-mono); font-size: var(--text-2xs); color: var(--color-text-tertiary);">
                ${td.dataAttribution}
              </span>
            </div>
          </div>

          <h3 style="font-family: var(--font-serif); font-size: var(--text-xl); color: var(--color-text-primary); margin-bottom: var(--space-4);">
            The Diagnostic Execution Framework
          </h3>

          <div class="ten-steps-list">
            ${td.steps.map(s => `
              <div class="teardown-step-card reveal-node">
                <div class="step-number-badge">${s.num}</div>
                <div class="step-card-content">
                  <h4 class="step-card-name">${s.name}</h4>
                  <p class="step-card-detail">${s.detail}</p>
                </div>
              </div>
            `).join("")}
          </div>
        </div>
      `;
    }

    // 3. Dedicated Articles Library Page (Visual Thesis Grid)
    const articlesView = document.getElementById("view-articles");
    if (articlesView) {
      articlesView.innerHTML = `
        <div class="subpage-container" style="max-width: 1080px;">
          <div class="view-back-bar">
            <a href="#home" class="btn-back">← Back to Overview</a>
            <span style="font-family: var(--font-mono); font-size: var(--text-xs); color: var(--color-text-tertiary);">03 / Articles</span>
          </div>

          <div class="subpage-header">
            <span class="subpage-tag">03. Perspectives & Essays</span>
            <h2 class="subpage-title">Articles & Written Thinking</h2>
            <p class="subpage-subtitle">First-principles thinking on cognitive architecture, distribution, and product execution.</p>
          </div>

          <div class="article-cards-grid">
            ${this.data.articles.map(art => `
              <a href="#article/${art.id}" class="article-card reveal-node" title="Read ${art.title}">
                <div class="card-media">
                  <span class="card-badge">${art.category}</span>
                  <img src="${art.image}" alt="${art.title}">
                </div>
                <div class="card-body">
                  <h3 class="card-title">${art.title}</h3>
                  <p class="card-hook">${art.hook}</p>
                  <div class="card-footer">
                    <span class="read-time">${art.readTime}</span>
                    <span class="action-link">
                      <span>Read Essay</span>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </span>
                  </div>
                </div>
              </a>
            `).join("")}
          </div>
        </div>
      `;
    }

    // 4. Dedicated How I Work Page
    const howIWorkView = document.getElementById("view-how-i-work");
    if (howIWorkView) {
      const hw = this.data.howIWork;
      howIWorkView.innerHTML = `
        <div class="subpage-container">
          <div class="view-back-bar">
            <a href="#home" class="btn-back">← Back to Overview</a>
            <span style="font-family: var(--font-mono); font-size: var(--text-xs); color: var(--color-text-tertiary);">04 / How I Work</span>
          </div>

          <div class="subpage-header">
            <span class="subpage-tag">Operating Philosophy</span>
            <h2 class="subpage-title">${hw.title}</h2>
            <p class="subpage-subtitle">${hw.subtitle}</p>
          </div>

          <div style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: var(--radius-md); padding: var(--space-8); margin-bottom: var(--space-8);">
            <h3 style="font-family: var(--font-serif); font-size: var(--text-xl); color: var(--color-text-primary); margin-bottom: var(--space-4);">
              Why Inversion Beats Optimism
            </h3>
            <p style="font-size: var(--text-base); color: var(--color-text-secondary); line-height: var(--leading-relaxed); margin-bottom: var(--space-6);">
              Most product teams waste 80% of sprint capacity designing forward features without addressing the catastrophic failure modes that cause users to abandon the experience. By cataloging failure modes first, execution becomes an intentional campaign of cutting off every failure vector until success is inevitable.
            </p>

            <div style="display: flex; flex-direction: column; gap: var(--space-6);">
              ${hw.stages.map(st => `
                <div style="border-left: 3px solid var(--color-accent); padding-left: var(--space-4);">
                  <div style="font-family: var(--font-mono); font-size: var(--text-xs); color: var(--color-accent); font-weight: bold; text-transform: uppercase;">${st.num}</div>
                  <h4 style="font-family: var(--font-serif); font-size: var(--text-lg); color: var(--color-text-primary); margin: var(--space-1) 0;">${st.title}</h4>
                  <p style="font-size: var(--text-sm); color: var(--color-text-secondary); line-height: var(--leading-relaxed);">${st.description}</p>
                </div>
              `).join("")}
            </div>
          </div>

          <div style="background: var(--color-bg-subtle); border: 1px solid var(--color-border); border-radius: var(--radius-md); padding: var(--space-6);">
            <h4 style="font-family: var(--font-serif); font-size: var(--text-lg); color: var(--color-text-primary); margin-bottom: var(--space-2);">
              About Nandan Bhole
            </h4>
            <p style="font-size: var(--text-sm); color: var(--color-text-secondary); line-height: var(--leading-relaxed);">
              Final-year undergraduate at <strong>Visvesvaraya National Institute of Technology (VNIT Nagpur)</strong>. Focused on marketplace product diagnostics, consumer retention mechanics, and zero-latency user flows.
            </p>
          </div>
        </div>
      `;
    }
  }

  /* ----------------------------------------------------
     RENDER SINGLE ARTICLE DETAIL VIEW
  ---------------------------------------------------- */
  renderArticleDetail(articleId) {
    const detailView = document.getElementById("view-article-detail");
    if (!detailView) return;

    const bodyHtml = ARTICLE_BODIES[articleId] || "<p>Article content not found.</p>";
    const art = this.data.articles.find(a => a.id === articleId);
    const mediaHtml = art && art.image ? `
      <div style="border-radius: var(--radius-md); overflow: hidden; margin-bottom: var(--space-8); border: 1px solid var(--color-border); box-shadow: var(--shadow-sm);">
        <img src="${art.image}" alt="${art.title}" style="width: 100%; aspect-ratio: 16/9; object-fit: cover; display: block;">
      </div>
    ` : "";

    detailView.innerHTML = `
      <div class="article-reader-container">
        <div class="view-back-bar">
          <a href="#articles" class="btn-back">← Back to Articles</a>
          <a href="#home" style="font-family: var(--font-mono); font-size: var(--text-xs); color: var(--color-text-tertiary); text-decoration: none;">Home</a>
        </div>

        ${mediaHtml}

        <div class="article-reader-body">
          ${bodyHtml}
        </div>

        <div style="margin-top: var(--space-12); border-top: 1px solid var(--color-border); padding-top: var(--space-6); display: flex; justify-content: space-between; align-items: center;">
          <a href="#articles" class="btn btn-secondary btn-sm">← All Articles</a>
          <a href="#contact" class="btn btn-primary btn-sm">Discuss with Nandan →</a>
        </div>
      </div>
    `;
  }
}

// Initialize on DOM load
document.addEventListener("DOMContentLoaded", () => {
  window.portfolioApp = new PortfolioApp();
});

// =========================================================================
// IN-SITU PRODUCT VIDEO MODAL CONTROLLERS (GLOBAL ACCESS)
// Instant in-browser HTML5 playback with zero lag & sound management
// =========================================================================
window.warmVideo = function (url) {
  if (!url) return;
  const videoPlayer = document.getElementById("videoModalPlayer");
  if (videoPlayer && !videoPlayer.getAttribute("data-preloaded")) {
    videoPlayer.src = url;
    videoPlayer.setAttribute("data-preloaded", "true");
    videoPlayer.load();
  }
};

window.openVideoModal = function (title, desc, videoUrl, liveUrl) {
  const modal = document.getElementById("videoModal");
  const dialog = modal ? modal.querySelector(".video-modal-dialog") : null;
  const titleEl = document.getElementById("videoModalTitle");
  const subEl = document.getElementById("videoModalSub");
  const descEl = document.getElementById("videoModalDesc");
  const videoPlayer = document.getElementById("videoModalPlayer");
  const videoWrapper = document.getElementById("videoPlayerWrapper");
  const placeholderWrapper = document.getElementById("videoPlaceholderWrapper");
  const modalLaunchBtn = document.getElementById("videoModalLaunchBtn");

  if (titleEl) titleEl.innerText = title + " — Product Walkthrough";
  if (subEl) subEl.innerText = title + " 60-Second Demonstration";
  if (descEl) descEl.innerText = desc || "A focused product walkthrough playing directly in this space.";

  if (modalLaunchBtn) {
    if (liveUrl) {
      modalLaunchBtn.href = liveUrl;
      modalLaunchBtn.style.display = "inline-flex";
    } else {
      modalLaunchBtn.style.display = "none";
    }
  }

  if (videoUrl && videoPlayer) {
    if (dialog) dialog.classList.add("has-video");
    if (videoWrapper) videoWrapper.style.display = "block";
    if (placeholderWrapper) placeholderWrapper.style.display = "none";

    // Set source if not already active
    if (!videoPlayer.src || !videoPlayer.src.includes(videoUrl)) {
      videoPlayer.src = videoUrl;
      videoPlayer.load();
    }

    videoPlayer.currentTime = 0;
    const playPromise = videoPlayer.play();
    if (playPromise !== undefined) {
      playPromise.catch(function () {
        // Autoplay policy fallback: User can click the video to play
      });
    }
  } else {
    if (dialog) dialog.classList.remove("has-video");
    if (videoWrapper) videoWrapper.style.display = "none";
    if (placeholderWrapper) placeholderWrapper.style.display = "flex";
    if (videoPlayer) {
      videoPlayer.pause();
    }
  }

  if (modal) {
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  }
};

window.closeVideoModal = function (e) {
  const modal = document.getElementById("videoModal");
  const videoPlayer = document.getElementById("videoModalPlayer");
  if (videoPlayer) {
    videoPlayer.pause();
  }
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }
};

// =========================================================================
// FULL VNIT CAMPUS PLAZA LIGHTBOX CONTROLLERS (GLOBAL ACCESS)
// =========================================================================
window.openCampusModal = function () {
  const modal = document.getElementById("campusModal");
  if (modal) {
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  }
};

window.closeCampusModal = function (e) {
  const modal = document.getElementById("campusModal");
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }
};

// Keyboard ESC listener
window.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    window.closeVideoModal();
    window.closeCampusModal();
  }
});

// Enforce top-lock on page load (prevents browser restoring bottom scroll or jumping on file launch)
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

window.addEventListener('load', () => {
  const currentHash = window.location.hash;
  if (!currentHash || currentHash === '#home' || currentHash === '#contact') {
    window.scrollTo(0, 0);
    if (document.documentElement) document.documentElement.scrollTop = 0;
    if (document.body) document.body.scrollTop = 0;
  }
});


