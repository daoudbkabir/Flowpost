import { useEffect, useState } from "react";

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

const discoverOpportunities = [
  {
    category: "AI",
    title: "AI Agents for everyday workflows",
    description:
      "Explore practical ways creators can use AI agents for research, planning, and repetitive productivity tasks.",
    platforms: ["YouTube", "LinkedIn", "X"],
    signal: "High interest",
  },
  {
    category: "VIDEO",
    title: "AI video creation workflows",
    description:
      "Explore how creators are combining AI tools to move from an idea to a short-form video faster.",
    platforms: ["TikTok", "Instagram", "YouTube"],
    signal: "Rising",
  },
  {
    category: "CREATOR",
    title: "The creator economy playbook",
    description:
      "Break down practical systems creators can use to turn content consistency into a sustainable workflow.",
    platforms: ["Instagram", "LinkedIn", "YouTube"],
    signal: "Growing",
  },
  {
    category: "PRODUCTIVITY",
    title: "One idea, multiple content formats",
    description:
      "Show how one research-backed idea can become a reel, carousel, short, thread, and long-form piece.",
    platforms: ["Instagram", "TikTok", "X", "YouTube"],
    signal: "Strong",
  },
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
  const [workspaceView, setWorkspaceView] = useState("Dashboard");
  const [savedIdeas, setSavedIdeas] = useState(() => {
    try {
      const storedIdeas = window.localStorage.getItem("flowpost-saved-ideas");
      return storedIdeas ? JSON.parse(storedIdeas) : [];
    } catch {
      return [];
    }
  });
  const [researchData, setResearchData] = useState(() => {
    try {
      const storedResearch = window.localStorage.getItem("flowpost-research");
      return storedResearch ? JSON.parse(storedResearch) : {};
    } catch {
      return {};
    }
  });

  const [activeResearchId, setActiveResearchId] = useState(null);
  const [createData, setCreateData] = useState(() => {
    try {
      const storedCreate = window.localStorage.getItem("flowpost-create");
      return storedCreate ? JSON.parse(storedCreate) : {};
    } catch {
      return {};
    }
  });
  const [activeCreateId, setActiveCreateId] = useState(null);

  useEffect(() => {
    try {
      window.localStorage.setItem(
        "flowpost-saved-ideas",
        JSON.stringify(savedIdeas)
      );
    } catch {
      // Local storage may be unavailable in some browser environments.
    }
  }, [savedIdeas]);
  useEffect(() => {
    try {
      window.localStorage.setItem(
        "flowpost-research",
        JSON.stringify(researchData)
      );
    } catch {
      // Local storage may be unavailable in some browser environments.
    }
  }, [researchData]);

  useEffect(() => {
    try {
      window.localStorage.setItem(
        "flowpost-create",
        JSON.stringify(createData)
      );
    } catch {
      // Local storage may be unavailable in some browser environments.
    }
  }, [createData]);

  const navigateTo = (id) => {
    scrollTo(id);
    setMenuOpen(false);
  };

  const openWorkspace = () => {
    setWorkspaceOpen(true);
    setWorkspaceView("Dashboard");
    setMenuOpen(false);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const openWorkspaceView = (view) => {
    setWorkspaceView(view);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const closeWorkspace = () => {
    setWorkspaceOpen(false);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const saveIdea = (opportunity) => {
    setSavedIdeas((currentIdeas) => {
      if (currentIdeas.some((idea) => idea.title === opportunity.title)) {
        return currentIdeas;
      }

      return [
        ...currentIdeas,
        {
          ...opportunity,
          id: `${opportunity.category}-${opportunity.title}`,
          status: "Saved",
        },
      ];
    });

    openWorkspaceView("Ideas");
  };

  const removeIdea = (ideaId) => {
    setSavedIdeas((currentIdeas) =>
      currentIdeas.filter((idea) => idea.id !== ideaId)
    );
  };

  const startResearch = (idea) => {
    setResearchData((currentResearch) => ({
      ...currentResearch,
      [idea.id]: {
        ...(currentResearch[idea.id] || {}),
        ideaId: idea.id,
        title: idea.title,
        category: idea.category,
        notes: currentResearch[idea.id]?.notes || "",
        findings: currentResearch[idea.id]?.findings || "",
        sources: currentResearch[idea.id]?.sources || "",
        updatedAt: new Date().toISOString(),
      },
    }));

    setSavedIdeas((currentIdeas) =>
      currentIdeas.map((currentIdea) =>
        currentIdea.id === idea.id
          ? { ...currentIdea, status: "Researching" }
          : currentIdea
      )
    );

    setActiveResearchId(idea.id);
    openWorkspaceView("Research");
  };

  const updateResearchField = (field, value) => {
    if (!activeResearchId) return;

    setResearchData((currentResearch) => ({
      ...currentResearch,
      [activeResearchId]: {
        ...(currentResearch[activeResearchId] || {}),
        [field]: value,
        updatedAt: new Date().toISOString(),
      },
    }));
  };

  const saveResearch = () => {
    if (!activeResearchId) return;

    setSavedIdeas((currentIdeas) =>
      currentIdeas.map((currentIdea) =>
        currentIdea.id === activeResearchId
          ? { ...currentIdea, status: "Researching" }
          : currentIdea
      )
    );
  };

  const openCreateForResearch = (researchId) => {
    const research = researchData[researchId];
    if (!research) {
      openWorkspaceView("Research");
      return;
    }

    setCreateData((currentCreate) => ({
      ...currentCreate,
      [researchId]: {
        ...(currentCreate[researchId] || {}),
        ideaId: researchId,
        title: currentCreate[researchId]?.title || research.title,
        format: currentCreate[researchId]?.format || "Short-form video",
        platform: currentCreate[researchId]?.platform || "Instagram",
        brief: currentCreate[researchId]?.brief || research.findings || "",
        hook: currentCreate[researchId]?.hook || "",
        script: currentCreate[researchId]?.script || "",
        cta: currentCreate[researchId]?.cta || "",
        status: currentCreate[researchId]?.status || "Draft",
        updatedAt: new Date().toISOString(),
      },
    }));

    setActiveCreateId(researchId);
    openWorkspaceView("Create");
  };

  const updateCreateField = (field, value) => {
    if (!activeCreateId) return;

    setCreateData((currentCreate) => ({
      ...currentCreate,
      [activeCreateId]: {
        ...(currentCreate[activeCreateId] || {}),
        [field]: value,
        updatedAt: new Date().toISOString(),
      },
    }));
  };

  const saveCreateDraft = () => {
    if (!activeCreateId) return;

    setCreateData((currentCreate) => ({
      ...currentCreate,
      [activeCreateId]: {
        ...(currentCreate[activeCreateId] || {}),
        status: "Draft saved",
        updatedAt: new Date().toISOString(),
      },
    }));
  };

  const openCreateFromResearch = () => {
    if (activeResearchId) {
      openCreateForResearch(activeResearchId);
      return;
    }

    const firstResearchId = Object.keys(researchData)[0];
    if (firstResearchId) {
      openCreateForResearch(firstResearchId);
      return;
    }

    openWorkspaceView("Ideas");
  };

  const openResearchForIdea = (idea) => {
    if (!researchData[idea.id]) {
      startResearch(idea);
      return;
    }

    setActiveResearchId(idea.id);
    openWorkspaceView("Research");
  };

  return (
    <div className="app">
      {workspaceOpen ? (
        <section className="workspace-shell">
          <aside className="workspace-sidebar">
            <div className="workspace-brand">
              <span className="brand-mark">F</span>
              <span>FlowPost</span>
            </div>

            <nav className="workspace-nav" aria-label="Workspace navigation">
              {[
                ["Dashboard", "⌂"],
                ["Discover", "◫"],
                ["Ideas", "✦"],
                ["Research", "⌕"],
                ["Create", "✎"],
                ["Publish", "◷"],
                ["Analytics", "↗"],
              ].map(([label, icon]) => (
                <button
                  className={`workspace-nav-item ${workspaceView === label ? "active" : ""}`}
                  type="button"
                  key={label}
                  onClick={() => openWorkspaceView(label)}
                >
                  <span aria-hidden="true">{icon}</span>
                  {label}
                </button>
              ))}
            </nav>

            <div className="workspace-sidebar-bottom">
              <button
                className={`workspace-nav-item ${workspaceView === "Settings" ? "active" : ""}`}
                type="button"
                onClick={() => openWorkspaceView("Settings")}
              >
                <span aria-hidden="true">⚙</span>
                Settings
              </button>

              <button className="workspace-back" type="button" onClick={closeWorkspace}>
                ← Back to FlowPost
              </button>
            </div>
          </aside>

          <main className="workspace-main">
            {workspaceView === "Dashboard" && (
              <>
                <header className="workspace-header">
                  <div>
                    <span className="section-label">WORKSPACE</span>
                    <h1>Content overview</h1>
                    <p>Your creator workflow, from discovery to publishing.</p>
                  </div>

                  <button
                    className="primary-button"
                    type="button"
                    onClick={() => openWorkspaceView("Create")}
                  >
                    + Create
                  </button>
                </header>

                <div className="workspace-stats">
                  {dashboardStats.map(([label, value]) => (
                    <div className="workspace-stat-card" key={label}>
                      <span>{label}</span>
                      <strong>
                        {label === "Ideas"
                          ? Number(value) + savedIdeas.length
                          : value}
                      </strong>
                    </div>
                  ))}
                </div>

                <div className="workspace-grid">
                  <section className="workspace-card">
                    <div className="workspace-card-header">
                      <div>
                        <span className="section-label">TRENDING NOW</span>
                        <h2>Content opportunities</h2>
                      </div>
                      <span className="badge">Preview</span>
                    </div>

                    <div className="workspace-trends">
                      {trends.map((trend, index) => (
                        <button
                          className="workspace-trend"
                          type="button"
                          key={trend}
                          onClick={() => openWorkspaceView("Discover")}
                        >
                          <span className="workspace-trend-number">0{index + 1}</span>
                          <span>{trend}</span>
                          <span aria-hidden="true">→</span>
                        </button>
                      ))}
                    </div>
                  </section>

                  <section className="workspace-card">
                    <div className="workspace-card-header">
                      <div>
                        <span className="section-label">NEXT UP</span>
                        <h2>Your content workflow</h2>
                      </div>
                    </div>

                    <div className="workspace-flow">
                      <span>Research</span>
                      <i aria-hidden="true">→</i>
                      <span>AI Video Script</span>
                      <i aria-hidden="true">→</i>
                      <span>Review</span>
                      <i aria-hidden="true">→</i>
                      <span>Publish</span>
                    </div>
                  </section>
                </div>
              </>
            )}

            {workspaceView === "Discover" && (
              <>
                <header className="workspace-header">
                  <div>
                    <span className="section-label">DISCOVER</span>
                    <h1>Content opportunities</h1>
                    <p>Find topics and signals worth developing before you start creating.</p>
                  </div>
                  <span className="badge">Phase 1 Preview</span>
                </header>

                <section className="workspace-card workspace-discover-intro">
                  <div className="workspace-card-header">
                    <div>
                      <span className="section-label">OPPORTUNITY FEED</span>
                      <h2>What could you create next?</h2>
                    </div>
                  </div>

                  <p>
                    These are illustrative opportunities for the FlowPost Phase 1
                    experience. They are not live trend data or external platform metrics.
                  </p>
                </section>

                <div className="workspace-discover-grid">
                  {discoverOpportunities.map((opportunity) => (
                    <article className="workspace-card workspace-opportunity" key={opportunity.title}>
                      <div className="workspace-opportunity-top">
                        <span className="section-label">{opportunity.category}</span>
                        <span className="workspace-signal">{opportunity.signal}</span>
                      </div>

                      <h2>{opportunity.title}</h2>
                      <p>{opportunity.description}</p>

                      <div className="workspace-platform-tags">
                        {opportunity.platforms.map((platform) => (
                          <span key={platform}>{platform}</span>
                        ))}
                      </div>

                      <button
                        className="secondary-button workspace-save-button"
                        type="button"
                        onClick={() => saveIdea(opportunity)}
                      >
                        {savedIdeas.some(
                          (idea) => idea.title === opportunity.title
                        )
                          ? "Saved to Ideas"
                          : "Save to Ideas"}
                        <span aria-hidden="true">→</span>
                      </button>
                    </article>
                  ))}
                </div>
              </>
            )}

            {workspaceView === "Ideas" && (
              <>
                <header className="workspace-header">
                  <div>
                    <span className="section-label">IDEAS</span>
                    <h1>Saved ideas</h1>
                    <p>
                      Keep promising opportunities in one place and develop them when
                      you are ready.
                    </p>
                  </div>

                  <span className="badge">
                    {savedIdeas.length} saved
                  </span>
                </header>

                {savedIdeas.length === 0 ? (
                  <section className="workspace-empty">
                    <span className="section-label">IDEAS LIBRARY</span>
                    <h1>No saved ideas yet</h1>
                    <p>
                      Go to Discover and save an opportunity you want to explore.
                      Your saved ideas will stay here when you return.
                    </p>
                    <button
                      className="primary-button"
                      type="button"
                      onClick={() => openWorkspaceView("Discover")}
                    >
                      Explore Discover
                      <span aria-hidden="true">→</span>
                    </button>
                  </section>
                ) : (
                  <div className="workspace-discover-grid">
                    {savedIdeas.map((idea) => (
                      <article
                        className="workspace-card workspace-opportunity"
                        key={idea.id}
                      >
                        <div className="workspace-opportunity-top">
                          <span className="section-label">{idea.category}</span>
                          <span className="workspace-signal">{idea.status}</span>
                        </div>

                        <h2>{idea.title}</h2>
                        <p>{idea.description}</p>

                        <div className="workspace-platform-tags">
                          {idea.platforms.map((platform) => (
                            <span key={platform}>{platform}</span>
                          ))}
                        </div>

                        <div className="workspace-opportunity-actions">
                          <button
                            className="primary-button"
                            type="button"
                            onClick={() => startResearch(idea)}
                          >
                            Start Research
                            <span aria-hidden="true">→</span>
                          </button>

                          <button
                            className="secondary-button workspace-save-button"
                            type="button"
                            onClick={() => removeIdea(idea.id)}
                          >
                            Remove from Ideas
                            <span aria-hidden="true">×</span>
                          </button>
                        </div>
                      </article>
                    ))}
                  </div>
                )}
              </>
            )}

            {workspaceView === "Research" && (
              <>
                <header className="workspace-header">
                  <div>
                    <span className="section-label">RESEARCH</span>
                    <h1>Develop your idea</h1>
                    <p>
                      Turn a saved opportunity into a research-backed content direction.
                    </p>
                  </div>

                  <span className="badge">
                    {activeResearchId && researchData[activeResearchId]
                      ? "Researching"
                      : "Start with an idea"}
                  </span>
                </header>

                {!activeResearchId || !researchData[activeResearchId] ? (
                  <section className="workspace-empty">
                    <span className="section-label">RESEARCH LIBRARY</span>
                    <h1>Select an idea to research</h1>
                    <p>
                      Start from a saved idea in your Ideas workspace and build the
                      research behind it.
                    </p>
                    <button
                      className="primary-button"
                      type="button"
                      onClick={() => openWorkspaceView("Ideas")}
                    >
                      Open Ideas
                      <span aria-hidden="true">→</span>
                    </button>
                  </section>
                ) : (
                  <div className="workspace-research">
                    <section className="workspace-card workspace-research-brief">
                      <div className="workspace-card-header">
                        <div>
                          <span className="section-label">
                            {researchData[activeResearchId].category}
                          </span>
                          <h2>{researchData[activeResearchId].title}</h2>
                        </div>
                        <span className="badge">Saved idea</span>
                      </div>

                      <p>
                        Build enough context to decide what the content should say,
                        who it should help, and why it is worth creating.
                      </p>
                    </section>

                    <div className="workspace-research-grid">
                      <section className="workspace-card workspace-research-panel">
                        <div className="workspace-card-header">
                          <div>
                            <span className="section-label">NOTES</span>
                            <h2>Research notes</h2>
                          </div>
                        </div>

                        <textarea
                          value={researchData[activeResearchId].notes || ""}
                          onChange={(event) =>
                            updateResearchField("notes", event.target.value)
                          }
                          placeholder="Capture context, questions, audience needs, competitors, examples, or useful observations..."
                          rows={9}
                        />
                      </section>

                      <section className="workspace-card workspace-research-panel">
                        <div className="workspace-card-header">
                          <div>
                            <span className="section-label">FINDINGS</span>
                            <h2>Key findings</h2>
                          </div>
                        </div>

                        <textarea
                          value={researchData[activeResearchId].findings || ""}
                          onChange={(event) =>
                            updateResearchField("findings", event.target.value)
                          }
                          placeholder="Summarize the strongest facts, patterns, insights, or angles you discovered..."
                          rows={9}
                        />
                      </section>
                    </div>

                    <section className="workspace-card workspace-research-panel">
                      <div className="workspace-card-header">
                        <div>
                          <span className="section-label">SOURCES</span>
                          <h2>Sources & references</h2>
                        </div>
                        <span className="badge">Add your references</span>
                      </div>

                      <textarea
                        value={researchData[activeResearchId].sources || ""}
                        onChange={(event) =>
                          updateResearchField("sources", event.target.value)
                        }
                        placeholder="Paste source URLs, reports, articles, studies, or other references used for your research..."
                        rows={6}
                      />

                      <div className="workspace-research-actions">
                        <button
                          className="secondary-button"
                          type="button"
                          onClick={() => openWorkspaceView("Ideas")}
                        >
                          ← Back to Ideas
                        </button>

                        <button
                          className="primary-button"
                          type="button"
                          onClick={saveResearch}
                        >
                          Save Research
                          <span aria-hidden="true">✓</span>
                        </button>

                        <button
                          className="primary-button"
                          type="button"
                          onClick={() => openWorkspaceView("Create")}
                        >
                          Move to Create
                          <span aria-hidden="true">→</span>
                        </button>
                      </div>
                    </section>
                  </div>
                )}
              </>
            )}

            {workspaceView === "Create" && (
              <>
                <header className="workspace-header">
                  <div>
                    <span className="section-label">CREATE</span>
                    <h1>Turn your research into content</h1>
                    <p>Build a focused draft from the idea and research you have already developed.</p>
                  </div>

                  <span className="badge">{activeCreateId && createData[activeCreateId]?.status ? createData[activeCreateId].status : "Draft"}</span>
                </header>

                {!activeCreateId || !createData[activeCreateId] ? (
                  <section className="workspace-empty">
                    <span className="section-label">CONTENT BUILDER</span>
                    <h1>Start from researched ideas</h1>
                    <p>Choose a researched idea first, then turn it into a platform-ready content draft.</p>
                    <button
                      className="primary-button"
                      type="button"
                      onClick={() => openWorkspaceView("Research")}
                    >
                      Open Research
                      <span aria-hidden="true">→</span>
                    </button>
                  </section>
                ) : (
                  <div className="workspace-create">
                    <section className="workspace-card workspace-create-brief">
                      <div className="workspace-card-header">
                        <div>
                          <span className="section-label">CONTENT BRIEF</span>
                          <h2>{createData[activeCreateId].title}</h2>
                        </div>
                        <span className="badge">Research connected</span>
                      </div>
                      <p>Use the research as the source of truth for your content angle, audience need, and key message.</p>
                    </section>

                    <div className="workspace-create-grid">
                      <section className="workspace-card workspace-create-panel">
                        <div className="workspace-card-header">
                          <div>
                            <span className="section-label">SETUP</span>
                            <h2>Content setup</h2>
                          </div>
                        </div>

                        <div className="workspace-form-grid">
                          <label>
                            <span>Title</span>
                            <input
                              value={createData[activeCreateId].title || ""}
                              onChange={(event) => updateCreateField("title", event.target.value)}
                              placeholder="Give your content a working title"
                            />
                          </label>

                          <label>
                            <span>Format</span>
                            <select
                              value={createData[activeCreateId].format || "Short-form video"}
                              onChange={(event) => updateCreateField("format", event.target.value)}
                            >
                              <option>Short-form video</option>
                              <option>Carousel</option>
                              <option>Social post</option>
                              <option>Thread</option>
                              <option>Long-form video</option>
                            </select>
                          </label>

                          <label>
                            <span>Platform</span>
                            <select
                              value={createData[activeCreateId].platform || "Instagram"}
                              onChange={(event) => updateCreateField("platform", event.target.value)}
                            >
                              {platforms.filter((platform) => platform !== "Others").map((platform) => (
                                <option key={platform}>{platform}</option>
                              ))}
                            </select>
                          </label>
                        </div>
                      </section>

                      <section className="workspace-card workspace-create-panel">
                        <div className="workspace-card-header">
                          <div>
                            <span className="section-label">BRIEF</span>
                            <h2>Content direction</h2>
                          </div>
                        </div>

                        <textarea
                          value={createData[activeCreateId].brief || ""}
                          onChange={(event) => updateCreateField("brief", event.target.value)}
                          placeholder="What should this content explain, show, or help the audience do?"
                          rows={8}
                        />
                      </section>
                    </div>

                    <section className="workspace-card workspace-create-panel">
                      <div className="workspace-card-header">
                        <div>
                          <span className="section-label">DRAFT</span>
                          <h2>Build the content</h2>
                        </div>
                      </div>

                      <div className="workspace-create-stack">
                        <label>
                          <span>Hook</span>
                          <input
                            value={createData[activeCreateId].hook || ""}
                            onChange={(event) => updateCreateField("hook", event.target.value)}
                            placeholder="Write the opening line that earns attention"
                          />
                        </label>

                        <label>
                          <span>Script / Caption</span>
                          <textarea
                            value={createData[activeCreateId].script || ""}
                            onChange={(event) => updateCreateField("script", event.target.value)}
                            placeholder="Develop the main content here..."
                            rows={12}
                          />
                        </label>

                        <label>
                          <span>Call to action</span>
                          <input
                            value={createData[activeCreateId].cta || ""}
                            onChange={(event) => updateCreateField("cta", event.target.value)}
                            placeholder="What should the audience do next?"
                          />
                        </label>
                      </div>

                      <div className="workspace-create-actions">
                        <button
                          className="secondary-button"
                          type="button"
                          onClick={() => openWorkspaceView("Research")}
                        >
                          ← Back to Research
                        </button>

                        <button
                          className="secondary-button"
                          type="button"
                          onClick={saveCreateDraft}
                        >
                          Save Draft
                          <span aria-hidden="true">✓</span>
                        </button>

                        <button
                          className="primary-button"
                          type="button"
                          onClick={() => openWorkspaceView("Publish")}
                        >
                          Move to Publish
                          <span aria-hidden="true">→</span>
                        </button>
                      </div>
                    </section>
                  </div>
                )}
              </>
            )}

            {workspaceView !== "Dashboard" &&
              workspaceView !== "Discover" &&
              workspaceView !== "Ideas" &&
              workspaceView !== "Research" &&
              workspaceView !== "Create" && (
                <section className="workspace-empty">
                  <span className="section-label">
                    {workspaceView.toUpperCase()}
                  </span>

                  <h1>
                    {workspaceView === "Publish" && "Publishing workspace"}
                    {workspaceView === "Analytics" && "Analytics & learning"}
                    {workspaceView === "Settings" && "Workspace settings"}
                  </h1>

                  <p>
                    This section is part of the FlowPost product direction and will be
                    developed in the next phase.
                  </p>

                  <span className="badge">Coming next</span>
                </section>
              )}
          </main>
        </section>
      ) : (
        <>
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
                onClick={() =>
                  setMenuOpen((value) => !value)
                }
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
                  onClick={() =>
                    navigateTo("how-it-works")
                  }
                >
                  How it works
                </button>

                <button
                  type="button"
                  onClick={() =>
                    navigateTo("platforms")
                  }
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
                    A creator workspace designed to
                    connect discovery, ideas, creation,
                    publishing, and learning in one flow.
                  </p>

                  <div className="hero-actions">
                    <button
                      className="primary-button"
                      type="button"
                      onClick={openWorkspace}
                    >
                      Explore FlowPost
                      <span aria-hidden="true">
                        →
                      </span>
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
                    <span>
                      Free-first foundation
                    </span>

                    <span
                      className="trust-separator"
                      aria-hidden="true"
                    >
                      •
                    </span>

                    <span>
                      Simple workflow
                    </span>

                    <span
                      className="trust-separator"
                      aria-hidden="true"
                    >
                      •
                    </span>

                    <span>
                      Creator focused
                    </span>
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
                            <small>
                              WORKSPACE
                            </small>

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
                              (
                                trend,
                                index
                              ) => (
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
                    Platform-native workflows are part
                    of the FlowPost product direction.
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
                    Everything you need to keep content
                    moving.
                  </h2>

                  <p>
                    FlowPost brings the major stages of
                    the creator workflow into one
                    connected workspace without making
                    the experience unnecessarily
                    complicated.
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
                    FlowPost is being developed around
                    five connected stages:
                    <strong>
                      {" "}
                      Discover, Develop, Create,
                      Publish, and Learn.
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
                            workflowSteps.length -
                              1 && (
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
                      Ready to simplify your content
                      workflow?
                    </h2>

                    <p>
                      Start with a clean foundation
                      designed to grow into a complete
                      multi-platform creator workspace.
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
                    what Phase 1 represents, and what
                    comes next.
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
                  onClick={() =>
                    navigateTo("home")
                  }
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
                  A creator workflow platform being
                  developed to connect discovery, ideas,
                  creation, publishing, and learning.
                </p>
              </div>

              <div className="footer-column">
                <h4>Product</h4>

                <button
                  type="button"
                  onClick={() =>
                    navigateTo("features")
                  }
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
                  onClick={() =>
                    navigateTo("platforms")
                  }
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
        </>
      )}
    </div>
  );
}

export default App;
