import { useState } from "react";

const platforms = [
  "Facebook",
  "Instagram",
  "YouTube",
  "TikTok",
  "Bilibili",
  "Snapchat",
  "X",
  "Others",
];

const features = [
  {
    number: "01",
    title: "Trend Discovery",
    text: "Spot trends, niches, and content opportunities worth exploring before you create.",
  },
  {
    number: "02",
    title: "Ideas & Research",
    text: "Turn research and opportunities into stronger content ideas with a clear place to develop them.",
  },
  {
    number: "03",
    title: "Content Creation",
    text: "Organize scripts, assets, and platform-ready content around one core idea.",
  },
  {
    number: "04",
    title: "Repurposing",
    text: "Adapt one core piece of content into versions that fit different platforms and formats.",
  },
  {
    number: "05",
    title: "Multi-platform Publishing",
    text: "Prepare and distribute content across your channels while keeping the original context connected.",
  },
  {
    number: "06",
    title: "Analytics & Learning",
    text: "Learn from content performance and use those signals to decide what to create next.",
  },

  const workflowSteps = [
  {
    number: "01",
    title: "Discover",
    text: "Find trends, niches and content opportunities.",
  },
  {
    number: "02",
    title: "Develop",
    text: "Turn research and opportunities into strong content ideas.",
  },
  {
    number: "03",
    title: "Create",
    text: "Build scripts, assets and platform-ready content.",
  },
  {
    number: "04",
    title: "Publish",
    text: "Adapt and distribute content across platforms.",
  },
  {
    number: "05",
    title: "Learn",
    text: "Analyze performance and decide what to create next.",
  },
];

const dashboardStats = [
  ["Ideas", "24"],
  ["In Progress", "8"],
  ["Ready", "12"],
  ["Scheduled", "16"],
  ["Published", "48"],
];

const trends = ["AI Agents", "AI Video", "Creator Economy"];

];
const faqs = [
  {
    question: "What is FlowPost?",
    answer:
      "FlowPost is being designed as a simple social media workflow platform for organizing content creation, customization, scheduling, and publishing from one workspace.",
  },
  {
    question: "Which platforms will FlowPost support?",
    answer:
      "The planned platform layer includes Facebook, Instagram, YouTube, TikTok, Bilibili, Snapchat, X, and additional platforms over time. These integrations are part of the roadmap and are not yet connected in this Phase 1 landing page.",
  },
  {
    question: "Will every platform have its own settings?",
    answer:
      "Yes. The planned workflow is designed to allow platform-specific media, titles, descriptions, hashtags, keywords, and other publishing requirements.",
  },
  {
    question: "Will FlowPost require a credit card?",
    answer:
      "The basic product experience is being designed around a no-credit-card-required, free-first foundation.",
  },
];

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigateTo = (id) => {
    scrollTo(id);
    setMenuOpen(false);
  };

  return (
    <div className="app">
      <header className="site-header">
        <div className="container header-inner">
          <button
            className="brand"
            onClick={() => navigateTo("home")}
            aria-label="Go to FlowPost home"
          >
            <span className="brand-mark" aria-hidden="true">
              F
            </span>
            <span>FlowPost</span>
          </button>

          <button
            className={`menu-button ${menuOpen ? "is-open" : ""}`}
            onClick={() => setMenuOpen((value) => !value)}
            aria-expanded={menuOpen}
            aria-controls="site-navigation"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          >
            <span />
            <span />
            <span />
          </button>

          <nav
            id="site-navigation"
            className={`nav ${menuOpen ? "nav-open" : ""}`}
            aria-label="Primary navigation"
          >
            <button onClick={() => navigateTo("features")}>Features</button>
            <button onClick={() => navigateTo("how-it-works")}>
              How it works
            </button>
            <button onClick={() => navigateTo("platforms")}>Platforms</button>
            <button onClick={() => navigateTo("faq")}>FAQ</button>
            <button
              className="nav-cta"
              onClick={() => navigateTo("get-started")}
            >
              Get started
            </button>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-grid container">
            <div className="hero-copy">
              <div className="eyebrow">
                <span className="status-dot" aria-hidden="true" />
                <span>One workflow. Every platform.</span>
              </div>

              <h1>
                Your social media,
                <span> in one flow.</span>
              </h1>

              <p className="hero-text">
                Create, customize, schedule, and organize your social content
                from one simple workspace.
              </p>

              <div className="hero-actions">
                <button
                  className="primary-button"
                  onClick={() => navigateTo("get-started")}
                >
                  Start for free
                  <span aria-hidden="true">→</span>
                </button>

                <button
                  className="secondary-button"
                  onClick={() => navigateTo("how-it-works")}
                >
                  See how it works
                </button>
              </div>

              <div className="trust-row" aria-label="Product highlights">
                <span>No credit card required</span>
                <span className="trust-separator" aria-hidden="true">
                  •
                </span>
                <span>Simple workflow</span>
                <span className="trust-separator" aria-hidden="true">
                  •
                </span>
                <span>Creator focused</span>
              </div>
            </div>

            <div className="hero-dashboard" aria-label="FlowPost workspace preview">
              <div className="dashboard-window">
                <div className="window-bar">
                  <div className="window-dots" aria-hidden="true">
                    <span />
                    <span />
                    <span />
                  </div>
                  <span className="window-title">FlowPost Workspace</span>
                  <span className="window-status">Preview</span>
                </div>

                <div className="dashboard-content">
                  <aside className="mini-sidebar" aria-hidden="true">
                    <div className="mini-logo">F</div>
                    <div className="mini-nav active">⌂</div>
                    <div className="mini-nav">◫</div>
                    <div className="mini-nav">◷</div>
                    <div className="mini-nav">⚙</div>
                  </aside>

                  <div className="mini-main">
                    <div className="mini-heading">
                      <div>
                        <small>WORKSPACE</small>
                        <h3>Content overview</h3>
                      </div>
                      <span className="mini-create">+ Create</span>
                    </div>

                    <div className="mini-stats mini-stats-five">
  {dashboardStats.map(([label, value]) => (
    <div key={label}>
      <small>{label}</small>
      <strong>{value}</strong>
    </div>
  ))}
</div>

                    <div className="mini-card">
  <div className="mini-card-head">
    <div>
      <small>TRENDING NOW</small>
      <strong>Content opportunities</strong>
    </div>
    <span className="badge">Preview</span>
  </div>

  <div className="platform-list trend-list">
    {trends.map((trend, index) => (
      <div className="platform-item" key={trend}>
        <span
          className={`platform-icon icon-${index}`}
          aria-hidden="true"
        >
          {index + 1}
        </span>
        <span>{trend}</span>
        <span className="check" aria-hidden="true">
          ↗
        </span>
      </div>
    ))}
  </div>
</div>

                    <div className="mini-progress next-up-card">
  <div>
    <small>NEXT UP</small>
    <span>
      Research → AI Video Script → Review → Productivity Reel
    </span>
  </div>

  <div
    className="progress-track"
    aria-hidden="true"
  >
    <span />
  </div>
</div>

          <div className="hero-glow hero-glow-one" aria-hidden="true" />
          <div className="hero-glow hero-glow-two" aria-hidden="true" />
        </section>

        <section className="platform-strip" id="platforms">
          <div className="container">
            <div className="strip-copy">
              <span className="section-label">PLATFORM ROADMAP</span>
              <p>Designed around the platforms creators use every day</p>
            </div>

            <div className="platforms">
              {platforms.map((platform) => (
                <span key={platform}>
                  <b aria-hidden="true">{platform.charAt(0)}</b>
                  {platform}
                </span>
              ))}
              <span>
                <b aria-hidden="true">+</b>
                More over time
              </span>
            </div>
          </div>
        </section>

        <section className="section" id="features">
          <div className="container">
            <div className="section-heading">
              <span className="section-label">FEATURES</span>
              <h2>Everything you need to keep content moving.</h2>
              <p>
                FlowPost brings repetitive social publishing work into a
                clearer workflow without making the interface complicated.
              </p>
            </div>

            <div className="feature-grid">
              {features.map((feature) => (
                <article className="feature-card" key={feature.title}>
                  <div className="feature-topline">
                    <span className="feature-number">{feature.number}</span>
                    <span className="feature-line" aria-hidden="true" />
                  </div>
                  <h3>{feature.title}</h3>
                  <p>{feature.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="workflow-section" id="how-it-works">
          <div className="container workflow-grid">
            <div className="section-heading left">
              <span className="section-label">HOW IT WORKS</span>
              <h2>One clear flow from idea to publishing.</h2>
              <p>
                The planned FlowPost workflow keeps each stage visible and
                makes platform-specific preparation easier to manage.
              </p>

              <div className="workflow-sequence" aria-hidden="true">
                <span>Create</span>
                <i>→</i>
                <span>Customize</span>
                <i>→</i>
                <span>Schedule</span>
                <i>→</i>
                <span>Publish</span>
              </div>
            </div>

            <div className="steps">
              <div className="step">
                <span>01</span>
                <div>
                  <h3>Create a workflow</h3>
                  <p>
                    Set up a dedicated workflow for a channel, brand,
                    campaign, or recurring content series.
                  </p>
                </div>
              </div>

              <div className="step">
                <span>02</span>
                <div>
                  <h3>Add your channels</h3>
                  <p>
                    Define the social channels you plan to manage inside that
                    workflow.
                  </p>
                </div>
              </div>

              <div className="step">
                <span>03</span>
                <div>
                  <h3>Customize each post</h3>
                  <p>
                    Prepare platform-specific media, titles, descriptions,
                    hashtags, and keywords.
                  </p>
                </div>
              </div>

              <div className="step">
                <span>04</span>
                <div>
                  <h3>Schedule and publish</h3>
                  <p>
                    Organize publishing times and manage your content from a
                    single workflow.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="cta-section" id="get-started">
          <div className="container">
            <div className="cta-card">
              <div>
                <span className="section-label">FLOWPOST</span>
                <h2>Ready to simplify your content workflow?</h2>
                <p>
                  Start with a clean foundation designed to grow into a
                  complete multi-platform workspace.
                </p>
              </div>

              <button
                className="primary-button"
                onClick={() => navigateTo("home")}
              >
                Get started
                <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>
        </section>

        <section className="faq-section" id="faq">
          <div className="container">
            <div className="section-heading">
              <span className="section-label">FAQ</span>
              <h2>Simple answers.</h2>
              <p>
                A few basics about what FlowPost is and what is planned next.
              </p>
            </div>

            <div className="faq-grid">
              {faqs.map((faq) => (
                <details key={faq.question}>
                  <summary>
                    <span>{faq.question}</span>
                    <span className="faq-plus" aria-hidden="true">
                      +
                    </span>
                  </summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-main">
          <div className="footer-brand">
            <button
              className="brand"
              onClick={() => navigateTo("home")}
              aria-label="Go to FlowPost home"
            >
              <span className="brand-mark" aria-hidden="true">
                F
              </span>
              <span>FlowPost</span>
            </button>
            <p>
              A simpler way to organize, customize, schedule, and manage your
              social media workflow.
            </p>
          </div>

          <div className="footer-column">
            <h4>Product</h4>
            <button onClick={() => navigateTo("features")}>Features</button>
            <button onClick={() => navigateTo("how-it-works")}>
              How it works
            </button>
            <button onClick={() => navigateTo("platforms")}>Platforms</button>
          </div>

          <div className="footer-column">
            <h4>Company</h4>
            <button type="button">About</button>
            <button type="button">Contact</button>
            <button type="button">Careers</button>
          </div>

          <div className="footer-column">
            <h4>Legal</h4>
            <button type="button">Privacy Policy</button>
            <button type="button">Terms of Service</button>
            <button type="button">Cookie Policy</button>
          </div>
        </div>

        <div className="container footer-bottom">
          <span>© 2026 FlowPost. All rights reserved.</span>

          <div className="social-links" aria-label="Social media links">
            <button type="button" aria-label="Facebook">
              f
            </button>
            <button type="button" aria-label="Instagram">
              ◎
            </button>
            <button type="button" aria-label="YouTube">
              ▶
            </button>
            <button type="button" aria-label="LinkedIn">
              in
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
