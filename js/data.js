/**
 * NEXUS PORTFOLIO — SINGLE SOURCE OF TRUTH (DATA STORE)
 * Clean, human-first, verified data store.
 */

const PORTFOLIO_DATA = {
  profile: {
    name: "Nandan Bhole",
    shortName: "Nandan",
    role: "Product Management Intern Candidate",
    headline: "Building high-density AI products & defensible user loops.",
    bio: "I am Nandan, a 21-year-old final-year engineering student at VNIT Nagpur. I build software to solve acute cognitive bottlenecks, analyze consumer product friction, and design distribution strategies.",
    socials: {
      linkedin: "https://www.linkedin.com/in/nandan-bhole-",
      github: "https://github.com/Nandan2701",
      email: "nandanbhole27@gmail.com"
    }
  },

  // 1. PRODUCTS (Built & Active)
  products: [
    {
      id: "saarum",
      name: "Saarum",
      tagline: "The Cognitive Friction Journal",
      headline: "Turn fast AI answers into lasting memory",
      subheadline: "AI compresses 10 days of research into 5 minutes, but effortless learning rarely sticks. Saarum helps you capture your daily takeaways, so you can go back into past days and easily remember what you learned from AI.",
      status: "Live Application",
      statusType: "live",
      shortSummary: "AI compresses 10 days of research into 5 minutes, but effortless learning rarely sticks. Saarum helps you capture your daily takeaways, so you can go back into past days and easily remember what you learned from AI.",
      features: [
        "Hourly 24-hr ledger with hard 140-char constraint",
        "Infinite voice dictation & raw stream canvas",
        "Zero-latency Chrome local storage (0ms sync)",
        "Bedtime active recall prompt engine"
      ],
      metrics: "0ms Local Latency • 100% Offline Capable • Zero Bloat",
      liveUrl: "https://saarum.vercel.app/",
      githubUrl: "https://github.com/Nandan2701/Saarum",
      videoDesc: "A 60-second walkthrough showing the hourly 1–2 bullet ledger and bedtime active recall consolidation in action.",
      tags: ["Productivity"]
    },
    {
      id: "tulam",
      name: "Tulam",
      tagline: "The Visual Priority Scale with Silk Typing",
      headline: "Find the tasks that make the biggest difference",
      subheadline: "Tulam helps you see the clear difference between tasks that drive massive progress, everyday productive work, and pointless busywork. By organizing your workload across a simple visual scale, it helps you manage all your daily tasks and focus on the moves that actually count.",
      status: "Live Utility",
      statusType: "live",
      shortSummary: "Tulam helps you see the clear difference between tasks that drive massive progress, everyday productive work, and pointless busywork. By organizing your workload across a simple visual scale, it helps you manage all your daily tasks and focus on the moves that actually count.",
      features: [
        "60 FPS smooth caret typing experience",
        "Instant quadrant shifts via keyboard shortcuts",
        "Zero cloud lock-in, client-side persistence",
        "High-density task triage for fast-paced builders"
      ],
      metrics: "60 FPS Input • Keyboard-First • Distraction-Free",
      liveUrl: "https://impact-framework.vercel.app",
      githubUrl: "https://github.com/Nandan2701/Tulam",
      videoDesc: "A 60-second walkthrough demonstrating Google Docs-style silk typing and instant 4-quadrant task triage.",
      videoUrl: "assets/videos/Tulam.mp4",
      tags: ["Productivity"]
    }
  ],

  // 2. PRODUCT TEARDOWN (Rapido Only)
  teardown: {
    id: "rapido",
    company: "Rapido",
    title: "The Rapido Trust Gap: Why Riders Cancel the Moment a Driver is Allocated",
    subtitle: "A 12-Step Product Teardown on Solving 'Black-Box Anxiety' to Increase User Retention",
    heroMetric: "-21% Cancellation Rate",
    dataAttribution: "Data: Bangalore, Hyderabad & Metro Transit Corridors • 450+ Grievances Analyzed",
    summary: "Deep investigation into rider psychology and pre-boarding anxiety. When a driver is matched, riders face acute information opacity—fearing cash disputes, incorrect vehicle arrivals, and driver ghosting. Engineered the 'Safety Engine' UI with progressive social proof to eliminate pre-ride churn.",
    steps: [
      {
        num: "01",
        name: "Business Goal & North Star",
        detail: "Protect peak-hour fulfillment rates and maximize captain hourly net earnings without inflating passenger fares."
      },
      {
        num: "02",
        name: "Target Personas Mapping",
        detail: "Profiled both the Time-Constrained Tech Commuter and the Full-Time Captain optimizing for daily take-home pay."
      },
      {
        num: "03",
        name: "Reddit & Forum Mining",
        detail: "Extracted 450+ grievances across Reddit, Twitter, and driver WhatsApp groups in Bangalore, Hyderabad, and Nagpur."
      },
      {
        num: "04",
        name: "Driver Field Interviews",
        detail: "Direct on-the-ground interactions with 18 captains at transit junctions to uncover why they call and cancel."
      },
      {
        num: "05",
        name: "Journey & Friction Point Analysis",
        detail: "Isolated the acute friction moment: post-acceptance destination opacity causing the famous 'Bhaiya, kahan jana hai?' call."
      },
      {
        num: "06",
        name: "Root Cause: Deadhead Mile Anxiety",
        detail: "Captains cancel because dropping off in residential dead-zones results in 40+ minutes of unpaid return travel."
      },
      {
        num: "07",
        name: "Deadhead Mitigation Guarantee",
        detail: "An automated fuel and return-ride guarantee algorithm that protects captains heading into low-density zones."
      },
      {
        num: "08",
        name: "Corridor Batching & Wireframes",
        detail: "Designed the 5-second glanceable dispatch screen showing destination demand tags and return-ride probability."
      },
      {
        num: "09",
        name: "Metrics & Success Guardrails",
        detail: "Modeled a 21% drop in post-acceptance cancellations and a 14% lift in supply availability during peak windows."
      },
      {
        num: "10",
        name: "Rollout & Risk Mitigation",
        detail: "Phased rollout plan starting with high-volume peak corridors across Bangalore, Hyderabad, and Nagpur."
      }
    ]
  },

  // 3. ARTICLES (Approved Visual Thesis Matrix)
  articles: [
    {
      id: "product-naming-psychology",
      title: "How to Name a Product: Cognitive Fluency, Phonosemantics & The Radio Test",
      hook: "Why most startup names leak retention before launch, how sound symbolism shapes perceived competence, and the 2-syllable rule for viral word-of-mouth.",
      category: "Product Strategy & Linguistics",
      readTime: "5 MIN READ",
      date: "26 Sep 2026",
      image: "assets/images/articles/article_4_product_naming_psychology.jpg",
      slug: "04-product-naming-psychology"
    },
    {
      id: "ai-retention-debt",
      title: "The AI Retention Debt & The 90-Second Friction Loop",
      hook: "Why effortless AI summaries create an illusion of mastery, and how intentional friction restores human retention.",
      category: "Cognitive Design",
      readTime: "4 MIN READ",
      date: "14 Aug 2026",
      image: "assets/images/articles/article_1_ai_retention_debt.jpg",
      slug: "01-ai-retention-debt"
    },
    {
      id: "distribution-mechanics",
      title: "Distribution Mechanics for Solo AI Builders in 2026",
      hook: "Building software has zero marginal cost. True defensibility now comes from unsolicited high-signal teardowns.",
      category: "Growth & GTM",
      readTime: "5 MIN READ",
      date: "02 Sep 2026",
      image: "assets/images/articles/article_2_distribution_mechanics.jpg",
      slug: "02-distribution-mechanics"
    },
    {
      id: "inversion-pm",
      title: "Inversion in Product Execution: Eliminating Failure Modes",
      hook: "Instead of chasing success, catalog every condition that guarantees failure and methodically sever those paths.",
      category: "Mental Models",
      readTime: "4 MIN READ",
      date: "18 Sep 2026",
      image: "assets/images/articles/article_3_inversion_in_pm.jpg",
      slug: "03-inversion-in-pm"
    }
  ],

  // 4. HOW I WORK
  howIWork: {
    title: "The Inversion Framework",
    subtitle: "Borrowing from Jacobi and Munger: 'Man muss immer umkehren' (Invert, always invert).",
    stages: [
      {
        num: "Stage 01",
        title: "Cataloging & Cutting Off Failure Vectors",
        description: "Before writing a line of code or PRD, I write down every conceivable reason the feature or product could fail: latency traps, input friction, cognitive overload, and drop-off cliffs. Execution becomes an intentional effort to eliminate those failure modes."
      },
      {
        num: "Stage 02",
        title: "Pre-Execution Mental Simulation",
        description: "I simulate the entire user journey mentally under extreme conditions: a distracted user on 3% phone battery in a noisy transit corridor. When every edge case is pre-solved, building flows automatically with zero rework."
      }
    ]
  }
};

// Global export for direct local file:// run
if (typeof window !== "undefined") {
  window.PORTFOLIO_DATA = PORTFOLIO_DATA;
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { PORTFOLIO_DATA };
}
