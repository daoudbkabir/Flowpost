import { useState } from "react";

const platforms = [
  "Facebook",
  "Instagram",
  "YouTube",
  "TikTok",
  "Bilibili",
  "Snapchat",
  "X",
];

const features = [
  {
    title: "One workspace",
    text: "Bring your social content workflow into one clean workspace instead of managing every platform separately.",
  },
  {
    title: "Platform-ready content",
    text: "Prepare different titles, descriptions, keywords, hashtags, and media for each platform.",
  },
  {
    title: "Smart workflows",
    text: "Create reusable workflows for different channels, brands, campaigns, and content types.",
  },
  {
    title: "Schedule everything",
    text: "Plan your publishing calendar and prepare content for multiple platforms from one place.",
  },
  {
    title: "Built for creators",
    text: "Keep the experience simple, organized, and easy to understand even when you manage many channels.",
  },
  {
    title: "Free-first foundation",
    text: "FlowPost is designed around a zero-cost foundation, with paid services added only when absolutely necessary.",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
    setMenuOpen(false);
  };

  return (
    <div className="app">
      <header className="site-header">
        <div className="container header-inner">
          <button
            className="brand"
            onClick={() => scrollTo("home")}
            aria-label="FlowPost home"
          >
            <span className="brand-mark">F</span>
            <span>FlowPost</span>
          </button>

          <button
            className="menu-button"
            onClick={() => setMenuOpen((value) => !value)}
            aria-label="Toggle navigation"
          >
            <span />
            <span />
            <span />
          </button>

          <nav className={`nav ${menuOpen ? "nav-open" : ""}`}>
            <button onClick={() => scrollTo("features")}>Features</button>
            <button onClick={() => scrollTo("how-it-works")}>
              How it works
            </button>
            <button onClick={() => scrollTo("platforms")}>Platforms</button>
            <button onClick={() => scrollTo("faq")}>FAQ</button>
            <button
              className="nav-cta"
              onClick={() => scrollTo("get-started")}
            >
              Get started
            </button>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-glow hero-glow-one" />
          <div className="hero-glow hero-glow-two" />

          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow">
                <span className="status-dot" />
                One workflow. Every platform.
              </div>

              <h1>
                Your social media,
                <span> in one flow.</span>
              </h1>

              <p className="hero-text">
                Create, customize, schedule, and manage content for all your
                social platforms from one simple workspace.
              </p>

              <div className="hero-actions">
                <button
                  className="primary-button"
                  onClick={() => scrollTo("get-started")}
                >
                  Start for free
                  <span>→</span>
                </button>

                <button
                  className="secondary-button"
                  onClick={() => scrollTo("how-it-works")}
                >
                  See how it works
                </button>
              </div>

              <div className="trust-row">
                <span>No credit card required</span>
                <span className="trust-separator">•</span>
                <span>Simple workflow</span>
                <span className="trust-separator">•</span>
                <span>Creator focused</span>
              </div>
            </div>

            <div className="hero-dashboard">
              <div className="dashboard-window">
                <div className="window-bar">
                  <div className="window-dots">
                    <span />
                    <span />
                    <span />
                  </div>
                  <span className="window-title">FlowPost Workspace</span>
                  <span className="window-status">● Live</span>
                </div>

                <div className="dashboard-content">
                  <aside className="mini-sidebar">
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
                      <button>+ Create</button>
                    </div>

                    <div className="mini-stats">
                      <div>
                        <small>Workflows</small>
                        <strong>08</strong>
                      </div>
                      <div>
                        <small>Scheduled</small>
                        <strong>24</strong>
                      </div>
                      <div>
                        <small>Platforms</small>
                        <strong>07</strong>
                      </div>
                    </div>

                    <div className="mini-card">
                      <div className="mini-card-head">
                        <div>
                          <small>ACTIVE WORKFLOW</small>
                          <strong>Product Campaign</strong>
                        </div>
                        <span className="badge">Active</span>
                      </div>

                      <div className="platform-list">
                        {platforms.slice(0, 4).map((platform, index) => (
                          <div className="platform-item" key={platform}>
                            <span className={`platform-icon icon-${index}`}>
                              {platform.charAt(0)}
                            </span>
                            <span>{platform}</span>
                            <span className="check">✓</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="platform-strip" id="platforms">
          <div className="container">
            <p>Built around the platforms creators use every day</p>
            <div className="platforms">
              {platforms.map((platform) => (
                <span key={platform}>
                  <b>{platform.charAt(0)}</b>
                  {platform}
                </span>
              ))}
              <span>
                <b>+</b>
                Others
              </span>
            </div>
          </div>
        </section>

        <section className="section" id="features">
          <div className="container">
            <div className="section-heading">
              <span className="section-label">FEATURES</span>
              <h2>Everything you need to keep your content moving.</h2>
              <p>
                FlowPost brings the repetitive parts of social publishing
                together without making the interface complicated.
              </p>
            </div>

            <div className="feature-grid">
              {features.map((feature, index) => (
                <article className="feature-card" key={feature.title}>
                  <div className="feature-number">
                    {String(index + 1).padStart(2, "0")}
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
              <h2>From idea to published content in a clear flow.</h2>
              <p>
                Build a workflow once, define what each platform needs, and
                keep your publishing process organized.
              </p>
            </div>

            <div className="steps">
              <div className="step">
                <span>01</span>
                <div>
                  <h3>Create a workflow</h3>
                  <p>
                    Set up a dedicated workflow for a channel, brand,
                    campaign, or content series.
                  </p>
                </div>
              </div>

              <div className="step">
                <span>02</span>
                <div>
                  <h3>Add your platforms</h3>
                  <p>
                    Connect the platforms you want to manage inside that
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
                    Organize your publishing time and manage the content from
                    one dashboard.
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
                  Start with a clean workspace designed to grow with your
                  content operation.
                </p>
              </div>

              <button
                className="primary-button"
                onClick={() => scrollTo("home")}
              >
                Get started
                <span>→</span>
              </button>
            </div>
          </div>
        </section>

        <section className="faq-section" id="faq">
          <div className="container">
            <div className="section-heading">
              <span className="section-label">FAQ</span>
              <h2>Simple answers.</h2>
            </div>

            <div className="faq-grid">
              <details>
                <summary>What is FlowPost?</summary>
                <p>
                  FlowPost is a social media workflow platform designed to
                  manage content preparation, scheduling, and publishing from
                  one workspace.
                </p>
              </details>

              <details>
                <summary>Which platforms will FlowPost support?</summary>
                <p>
                  The planned platform layer includes Facebook, Instagram,
                  YouTube, TikTok, Bilibili, Snapchat, X, and an option for
                  additional platforms.
                </p>
              </details>

              <details>
                <summary>Will every platform have its own settings?</summary>
                <p>
                  Yes. The planned workflow interface separates platform
                  content so you can use different titles, descriptions,
                  hashtags, keywords, and media where required.
                </p>
              </details>

              <details>
                <summary>Will FlowPost require a credit card?</summary>
                <p>
                  The product is being designed around a zero-cost foundation.
                  No credit-card requirement is part of the planned basic
                  experience.
                </p>
              </details>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-main">
          <div className="footer-brand">
            <button className="brand" onClick={() => scrollTo("home")}>
              <span className="brand-mark">F</span>
              <span>FlowPost</span>
            </button>
            <p>
              A simpler way to organize, customize, schedule, and manage your
              social media workflow.
            </p>
          </div>

          <div className="footer-column">
            <h4>Product</h4>
            <button onClick={() => scrollTo("features")}>Features</button>
            <button onClick={() => scrollTo("how-it-works")}>
              How it works
            </button>
            <button onClick={() => scrollTo("platforms")}>Platforms</button>
          </div>

          <div className="footer-column">
            <h4>Company</h4>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
            <a href="#careers">Careers</a>
          </div>

          <div className="footer-column">
            <h4>Legal</h4>
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
            <a href="#cookies">Cookie Policy</a>
          </div>
        </div>

        <div className="container footer-bottom">
          <span>© 2026 FlowPost. All rights reserved.</span>

          <div className="social-links">
            <a href="#facebook" aria-label="Facebook">
              f
            </a>
            <a href="#instagram" aria-label="Instagram">
              ◎
            </a>
            <a href="#youtube" aria-label="YouTube">
              ▶
            </a>
            <a href="#linkedin" aria-label="LinkedIn">
              in
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
