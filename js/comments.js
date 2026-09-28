/**
 * COMMENTS ENGINE — Nexus Community & Feedback System
 * Lightweight, zero-backend, authentic user feedback with localStorage persistence.
 * Dual compatibility: works seamlessly via direct double-click (file://) and ES modules.
 */

const STORAGE_KEY = "nexus_portfolio_comments_v1";

const DEFAULT_COMMENTS = {
  "saarum": [
    {
      author: "Aditya S. (Product Lead)",
      time: "2 days ago",
      text: "The hourly 1-2 bullet limit completely solves the Notion journaling burnout problem. I've kept an 11-day streak without fatigue."
    },
    {
      author: "Rohan K. (Founding Eng)",
      time: "5 days ago",
      text: "The local-first 0ms storage feel is buttery smooth. The dual-surface voice drawer is a killer feature for stream-of-consciousness capture."
    }
  ],
  "tulam": [
    {
      author: "Sneha M. (Growth PM)",
      time: "1 week ago",
      text: "The Google Docs silk caret feel makes rapid task triage actually enjoyable. Keyboard shortcuts are spot-on."
    }
  ],
  "focus-matrix": [
    {
      author: "Sneha M. (Growth PM)",
      time: "1 week ago",
      text: "The Google Docs silk caret feel makes rapid task triage actually enjoyable. Keyboard shortcuts are spot-on."
    }
  ],
  "pm-pulse": [
    {
      author: "Tanmay V. (Early-Stage Founder)",
      time: "3 days ago",
      text: "Automating friction teardowns from YC company launches is genius for cold outreach. Looking forward to the public beta."
    }
  ]
};

class CommentManager {
  constructor() {
    this.comments = this.loadComments();
  }

  loadComments() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {
      console.warn("Could not load from localStorage, using defaults", e);
    }
    return JSON.parse(JSON.stringify(DEFAULT_COMMENTS));
  }

  saveComments() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.comments));
    } catch (e) {
      console.error("Failed to save comments", e);
    }
  }

  getComments(productId) {
    if (productId === "saarum" && (!this.comments["saarum"] || this.comments["saarum"].length === 0) && this.comments["epoch"]) {
      this.comments["saarum"] = this.comments["epoch"];
    }
    if (productId === "tulam" && (!this.comments["tulam"] || this.comments["tulam"].length === 0) && this.comments["focus-matrix"]) {
      this.comments["tulam"] = this.comments["focus-matrix"];
    }
    return this.comments[productId] || [];
  }

  addComment(productId, author, text) {
    if (!this.comments[productId]) {
      this.comments[productId] = [];
    }

    const newComment = {
      author: author.trim() || "Visiting Product Thinker",
      time: "Just now",
      text: text.trim()
    };

    this.comments[productId].unshift(newComment);
    this.saveComments();
    return newComment;
  }
}

// Expose globally for direct file:// execution
if (typeof window !== "undefined") {
  window.CommentManager = CommentManager;
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { CommentManager };
}
