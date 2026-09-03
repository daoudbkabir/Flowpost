import { useState } from "react";
import WorkspaceShell from "./components/WorkspaceShell";
import Dashboard from "./pages/Dashboard";

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
];

const workflowSteps = [
  {
    number: "01",
    title: "Discover",
    text: "Find trends, niches, and content opportunities worth exploring.",
  },
  {
    number: "02",
    title: "Develop",
    text: "Turn research and opportunities into clear, stronger content ideas.",
  },
  {
    number: "03",
    title: "Create",
    text: "Build scripts, assets, and platform-ready content around your idea.",
  },
  {
    number: "04",
    title: "Publish",
    text: "Adapt and prepare content for distribution across your platforms.",
  },
  {
    number: "05",
    title: "Learn",
    text: "Review performance signals and use them to decide what to create next.",
  },
];

const dashboardStats = [
  ["Ideas", "24"],
  ["In Progress", "8"],
  ["Ready", "12"],
  ["Scheduled", "16"],
  ["Published", "48"],
];

const trends = [
  "AI Agents",
  "AI Video",
  "Creator Economy",
];

const faqs = [
  {
    question: "What is FlowPost?",
    answer:
      "FlowPost is being developed as a creator workflow platform that connects the full content journey: Discover → Develop → Create → Publish → Learn. The goal is to give creators one focused workspace for moving from an opportunity or idea toward published content and learning from what they create.",
  },
  {
    question: "Which platforms is FlowPost designed for?",
    answer:
      "The FlowPost product direction includes Facebook, Instagram, YouTube, TikTok, Bilibili, Snapchat, X, and other platforms over time. These platform representations describe the intended workflow and do not mean live integrations are currently available.",
  },
  {
    question: "How is FlowPost being developed?",
    answer:
      "FlowPost is being developed in phases. Phase 1 establishes the core creator workflow and product direction. More advanced discovery, creation, publishing integrations, and analytics capabilities are planned for future phases.",
  },
  {
    question: "Will FlowPost replace my existing creation tools?",
    answer:
      "No. FlowPost is being positioned as a connected creator workflow rather than a replacement for every specialized creation tool. The goal is to help creators organize the journey from discovery and ideas through creation, publishing, and learning.",
  },
  {
    question: "Is the dashboard showing real data?",
    answer:
      "No. The dashboard shown on this landing page is a static product preview used to communicate the intended FlowPost experience. The numbers, trends, and workflow shown are illustrative mock data.",
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
  const [workspaceOpen, setWorkspaceOpen] = useState(false);
  const [activeWorkspacePage, setActiveWorkspacePage] =
    useState("dashboard");

  const navigateTo = (id) => {
    scrollTo(id);
    setMenuOpen(false);
  };

  const openWorkspace = () => {
    setWorkspaceOpen(true);
    setMenuOpen(false);
    setActiveWorkspacePage("dashboard");
  };

  const closeWorkspace = () => {
    setWorkspaceOpen(false);
    setMenuOpen(false);
  };

  const handleWorkspaceNavigate = (page) => {
    setActiveWorkspacePage(page);
  };

  if (workspaceOpen) {
    return (
      <WorkspaceShell
        activePage={activeWorkspacePage}
        onNavigate={handleWorkspaceNavigate}
      >
        {activeWorkspacePage === "dashboard" && <Dashboard />}

        {activeWorkspacePage !== "dashboard" && (
          <section className="workspace-page">
            <div className="workspace-page-header">
              <span className="section-label">
                {activeWorkspacePage.toUpperCase()}
              </span>

              <h1>
                {activeWorkspacePage.charAt(0).toUpperCase() +
                  activeWorkspacePage.slice(1)}
              </h1>

              <p>
                This FlowPost workspace module is being developed
                as part of the next phase.
              </p>

              <button
                className="primary-button"
                type="button"
                onClick={() =>
                  setActiveWorkspacePage("dashboard")
                }
                style={{ marginTop: "24px" }}
              >
                Back to Dashboard
                <span aria-hidden="true">→</span>
              </button>
            </div>
          </section>
        )}
      </WorkspaceShell>
    );
  }

  return (
    <div className="app">
      {/* Header */}
      <header className="site-header">
        <div className="container header-inner">
          <button
            className="brand"
            type="button"
            onClick={() => navigateTo("home")}
            aria-label="Go to FlowPost home"
          >
            <span
              className="brand-mark"
              aria-hidden="true"
            >
              F
            </span>

            <span>FlowPost</span>
          </button>

          <button
            className={`menu-button ${
              menuOpen ? "is-open" : ""
            }`}
            type="button"
            onClick={() => setMenuOpen((value) => !value)}
            aria-expanded={menuOpen}
            aria-controls="site-navigation"
            aria-label={
              menuOpen
                ? "Close navigation"
                : "Open navigation"
            }
          >
            <span />
            <span />
            <span />
          </button>

          <nav
            id="site-navigation"
            className={`nav ${
              menuOpen ? "nav-open" : ""
            }`}
            aria-label="Primary navigation"
          >
            <button
              type="button"
              onClick={() => navigateTo("features")}
            >
              Features
            </button>

            <button
              type="button"
              onClick={() => navigateTo("how-it-works")}
            >
              How it works
            </button>

            <button
              type="button"
              onClick={() => navigateTo("platforms")}
            >
              Platforms
            </button>

            <button
              type="button"
              onClick={() => navigateTo("faq")}
            >
              FAQ
            </button>

            <button
              className="nav-cta"
              type="button"
              onClick={openWorkspace}
            >
              Get started
            </button>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section
          className="hero"
          id="home"
          aria-labelledby="hero-title"
        >
          <div className="hero-grid container">
            <div className="hero-copy">
              <div className="eyebrow">
                <span
                  className="status-dot"
                  aria-hidden="true"
                />

                <span>
                  Creator workflow · Phase 1
                </span>
              </div>

              <h1 id="hero-title">
                From idea to published content,
                <span> in one flow.</span>
              </h1>

              <p className="hero-text">
                A creator workspace designed to connect
                discovery, ideas, creation, publishing, and
                learning in one flow.
              </p>

              <div className="hero-actions">
                <button
                  className="primary-button"
                  type="button"
                  onClick={openWorkspace}
                >
                  Explore FlowPost
                  <span aria-hidden="true">→</span>
                </button>

                <button
                  className="secondary-button"
                  type="button"
                  onClick={() =>
                    navigateTo("how-it-works")
                  }
                >
                  See how it works
                </button>
              </div>

              <div
                className="trust-row"
                aria-label="FlowPost product highlights"
              >
                <span>Free-first foundation</span>

                <span
                  className="trust-separator"
                  aria-hidden="true"
                >
                  •
                </span>

                <span>Simple workflow</span>

                <span
                  className="trust-separator"
                  aria-hidden="true"
                >
                  •
                </span>

                <span>Creator focused</span>
              </div>
            </div>

            {/* Product Preview */}
            <div
              className="hero-dashboard"
              aria-label="Static FlowPost creator workspace preview"
            >
              <div className="dashboard-window">
                <div className="window-bar">
                  <div
                    className="window-dots"
                    aria-hidden="true"
                  >
                    <span />
                    <span />
                    <span />
                  </div>

                  <span className="window-title">
                    FlowPost Workspace
                  </span>

                  <span className="window-status">
                    Preview
                  </span>
                </div>

                <div className="dashboard-content">
                  <aside
                    className="mini-sidebar"
                    aria-hidden="true"
                  >
                    <div className="mini-logo">
                      F
                    </div>

                    <div className="mini-nav active">
                      ⌂
                    </div>

                    <div className="mini-nav">
                      ◫
                    </div>

                    <div className="mini-nav">
                      ◷
                    </div>

                    <div className="mini-nav">
                      ⚙
                    </div>
                  </aside>

                  <div className="mini-main">
                    <div className="mini-heading">
                      <div>
                        <small>WORKSPACE</small>

                        <h3>
                          Content overview
                        </h3>
                      </div>

                      <span className="mini-create">
                        + Create
                      </span>
                    </div>

                    <div className="mini-stats mini-stats-five">
                      {dashboardStats.map(
                        ([label, value]) => (
                          <div key={label}>
                            <small>
                              {label}
                            </small>

                            <strong>
                              {value}
                            </strong>
                          </div>
                        )
                      )}
                    </div>

                    <div className="mini-card">
                      <div className="mini-card-head">
                        <div>
                          <small>
                            TRENDING NOW
                          </small>

                          <strong>
                            Content opportunities
                          </strong>
                        </div>

                        <span className="badge">
                          Preview
                        </span>
                      </div>

                      <div className="platform-list trend-list">
                        {trends.map(
                          (trend, index) => (
                            <div
                              className="platform-item"
                              key={trend}
                            >
                              <span
                                className={`platform-icon icon-${index}`}
                                aria-hidden="true"
                              >
                                {index + 1}
                              </span>

                              <span>
                                {trend}
                              </span>

                              <span
                                className="check"
                                aria-hidden="true"
                              >
                                ↗
                              </span>
                            </div>
                          )
                        )}
                      </div>
                    </div>

                    <div className="mini-progress next-up-card">
                      <div>
                        <small>
                          NEXT UP
                        </small>

                        <span>
                          Research → AI Video
                          Script → Review →
                          Productivity Reel
                        </span>
                      </div>

                      <div
                        className="progress-track"
                        aria-hidden="true"
                      >
                        <span />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="hero-glow hero-glow-one"
              aria-hidden="true"
            />

            <div
              className="hero-glow hero-glow-two"
              aria-hidden="true"
            />
          </div>
        </section>

        {/* Platforms */}
        <section
          className="platform-strip"
          id="platforms"
          aria-labelledby="platforms-title"
        >
          <div className="container">
            <div className="strip-copy">
              <span className="section-label">
                PLATFORM WORKFLOW
              </span>

              <p id="platforms-title">
                Create once. Adapt everywhere.
              </p>

              <small>
                Platform-native workflows are part of
                the FlowPost product direction.
              </small>
            </div>

            <div
              className="platforms"
              aria-label="Supported platform direction"
            >
              {platforms.map((platform) => (
                <span key={platform}>
                  <b aria-hidden="true">
                    {platform.charAt(0)}
                  </b>

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

        {/* Features */}
        <section
          className="section"
          id="features"
          aria-labelledby="features-title"
        >
          <div className="container">
            <div className="section-heading">
              <span className="section-label">
                FEATURES
              </span>

              <h2 id="features-title">
                Everything you need to keep content moving.
              </h2>

              <p>
                FlowPost brings the major stages of the
                creator workflow into one connected
                workspace without making the experience
                unnecessarily complicated.
              </p>
            </div>

            <div className="feature-grid">
              {features.map((feature) => (
                <article
                  className="feature-card"
                  key={feature.title}
                >
                  <div className="feature-topline">
                    <span className="feature-number">
                      {feature.number}
                    </span>

                    <span
                      className="feature-line"
                      aria-hidden="true"
                    />
                  </div>

                  <h3>{feature.title}</h3>

                  <p>{feature.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Workflow */}
        <section
          className="workflow-section"
          id="how-it-works"
          aria-labelledby="workflow-title"
        >
          <div className="container workflow-grid">
            <div className="section-heading left">
              <span className="section-label">
                HOW IT WORKS
              </span>

              <h2 id="workflow-title">
                From opportunity to learning,
                in one flow.
              </h2>

              <p>
                FlowPost is being developed around five
                connected stages:
                <strong>
                  {" "}
                  Discover, Develop, Create, Publish,
                  and Learn.
                </strong>
              </p>

              <div
                className="workflow-sequence"
                aria-label="FlowPost five-stage workflow"
              >
                {workflowSteps.map(
                  (step, index) => (
                    <span
                      className="workflow-sequence-item"
                      key={step.title}
                    >
                      <span>
                        {step.title}
                      </span>

                      {index <
                        workflowSteps.length - 1 && (
                        <i aria-hidden="true">
                          →
                        </i>
                      )}
                    </span>
                  )
                )}
              </div>
            </div>

            <div className="steps">
              {workflowSteps.map((step) => (
                <article
                  className="step"
                  key={step.number}
                >
                  <span aria-hidden="true">
                    {step.number}
                  </span>

                  <div>
                    <h3>{step.title}</h3>

                    <p>{step.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          className="cta-section"
          id="get-started"
          aria-labelledby="cta-title"
        >
          <div className="container">
            <div className="cta-card">
              <div>
                <span className="section-label">
                  FLOWPOST
                </span>

                <h2 id="cta-title">
                  Ready to simplify your content workflow?
                </h2>

                <p>
                  Start with a clean foundation designed
                  to grow into a complete multi-platform
                  creator workspace.
                </p>
              </div>

              <button
                className="primary-button"
                type="button"
                onClick={openWorkspace}
              >
                Explore the workflow
                <span aria-hidden="true">
                  →
                </span>
              </button>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section
          className="faq-section"
          id="faq"
          aria-labelledby="faq-title"
        >
          <div className="container">
            <div className="section-heading">
              <span className="section-label">
                FAQ
              </span>

              <h2 id="faq-title">
                Simple answers.
              </h2>

              <p>
                A few basics about what FlowPost is,
                what Phase 1 represents, and what comes
                next.
              </p>
            </div>

            <div className="faq-grid">
              {faqs.map((faq) => (
                <details key={faq.question}>
                  <summary>
                    <span>
                      {faq.question}
                    </span>

                    <span
                      className="faq-plus"
                      aria-hidden="true"
                    >
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

      {/* Footer */}
      <footer className="site-footer">
        <div className="container footer-main">
          <div className="footer-brand">
            <button
              className="brand"
              type="button"
              onClick={() => navigateTo("home")}
              aria-label="Go to FlowPost home"
            >
              <span
                className="brand-mark"
                aria-hidden="true"
              >
                F
              </span>

              <span>FlowPost</span>
            </button>

            <p>
              A creator workflow platform being developed
              to connect discovery, ideas, creation,
              publishing, and learning.
            </p>
          </div>

          <div className="footer-column">
            <h4>Product</h4>

            <button
              type="button"
              onClick={() => navigateTo("features")}
            >
              Features
            </button>

            <button
              type="button"
              onClick={() =>
                navigateTo("how-it-works")
              }
            >
              How it works
            </button>

            <button
              type="button"
              onClick={() => navigateTo("platforms")}
            >
              Platforms
            </button>
          </div>

          <div className="footer-column">
            <h4>Company</h4>

            <button type="button">
              About
            </button>

            <button type="button">
              Contact
            </button>

            <button type="button">
              Careers
            </button>
          </div>

          <div className="footer-column">
            <h4>Legal</h4>

            <button type="button">
              Privacy Policy
            </button>

            <button type="button">
              Terms of Service
            </button>

            <button type="button">
              Cookie Policy
            </button>
          </div>
        </div>

        <div className="container footer-bottom">
          <span>
            © 2026 FlowPost. All rights reserved.
          </span>

          <div
            className="social-links"
            aria-label="Social media links"
          >
            <button
              type="button"
              aria-label="Facebook"
            >
              f
            </button>

            <button
              type="button"
              aria-label="Instagram"
            >
              ◎
            </button>

            <button
              type="button"
              aria-label="YouTube"
            >
              ▶
            </button>

            <button
              type="button"
              aria-label="LinkedIn"
            >
              in
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
