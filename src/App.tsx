import { useMemo, useState } from 'react';
import { examHighlights, featureCards, navItems, stats, timeline } from './data/siteData';

const App = () => {
  const [activeNav, setActiveNav] = useState('Overview');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const currentContent = useMemo(() => {
    switch (activeNav) {
      case 'Exam Library':
        return (
          <section className="content-panel">
            <div className="section-header">
              <div>
                <p className="eyebrow">Exam Library</p>
                <h2>Structured prep for every major academic track</h2>
              </div>
              <button className="primary-button">Browse all exams</button>
            </div>

            <div className="exam-grid">
              {examHighlights.map((exam) => (
                <article key={exam.title} className="card exam-card">
                  <div className="exam-badge">{exam.badge}</div>
                  <h3>{exam.title}</h3>
                  <p>{exam.description}</p>
                  <ul>
                    {exam.subjects.map((subject) => (
                      <li key={subject}>{subject}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>
        );
      case 'Practice Mode':
        return (
          <section className="content-panel">
            <div className="section-header">
              <div>
                <p className="eyebrow">Practice Mode</p>
                <h2>Timed, review-friendly exam simulation</h2>
              </div>
              <button className="primary-button">Start timed test</button>
            </div>

            <div className="stack-grid">
              <div className="card">
                <h3>Test controls</h3>
                <ul className="check-list">
                  <li>Question navigation and previous/next controls</li>
                  <li>Mark for review and flagging</li>
                  <li>Question palette with answered vs unanswered status</li>
                  <li>Countdown timer with auto-submit on expiry</li>
                </ul>
              </div>

              <div className="card">
                <h3>Results experience</h3>
                <ul className="check-list">
                  <li>Score, accuracy, and subject breakdown</li>
                  <li>Review mode with selected answers and explanations</li>
                  <li>Performance summary for quick reflection</li>
                </ul>
              </div>
            </div>
          </section>
        );
      case 'Progress Tracker':
        return (
          <section className="content-panel">
            <div className="section-header">
              <div>
                <p className="eyebrow">Progress Tracker</p>
                <h2>Track your improvement over time</h2>
              </div>
              <button className="primary-button">Add new test</button>
            </div>

            <div className="stats-grid">
              <div className="card metric-card light">
                <span>Total tests</span>
                <strong>18</strong>
              </div>
              <div className="card metric-card light">
                <span>Average score</span>
                <strong>81%</strong>
              </div>
              <div className="card metric-card light">
                <span>Best score</span>
                <strong>94%</strong>
              </div>
            </div>

            <div className="card chart-card">
              <h3>Recent trend</h3>
              <div className="bars" aria-label="Performance graph">
                {[42, 58, 62, 74, 80, 88, 91].map((value, index) => (
                  <span key={value + index} style={{ height: `${value}%` }}></span>
                ))}
              </div>
            </div>
          </section>
        );
      case 'Coding Academy':
        return (
          <section className="content-panel">
            <div className="section-header">
              <div>
                <p className="eyebrow">Coding &amp; extracurricular</p>
                <h2>Build confidence beyond the syllabus</h2>
              </div>
              <button className="primary-button">Explore lessons</button>
            </div>

            <div className="stack-grid">
              <div className="card">
                <h3>Python foundations</h3>
                <ul className="check-list">
                  <li>Beginner-friendly lesson flow</li>
                  <li>Practice tasks and mini projects</li>
                  <li>Concept explanations and code walkthroughs</li>
                </ul>
              </div>
              <div className="card">
                <h3>Extracurricular checklist</h3>
                <ul className="check-list">
                  <li>Reading, leadership, and hobby tracking</li>
                  <li>Project ideas and milestone planning</li>
                  <li>Goal completion progress</li>
                </ul>
              </div>
            </div>
          </section>
        );
      case 'Resources':
        return (
          <section className="content-panel">
            <div className="section-header">
              <div>
                <p className="eyebrow">Resource Hub</p>
                <h2>Organized notes and subject material</h2>
              </div>
              <button className="primary-button">Open resource board</button>
            </div>

            <div className="stack-grid">
              <div className="card">
                <h3>RD Sharma library</h3>
                <ul className="check-list">
                  <li>Class and chapter-based structure</li>
                  <li>Topic-level topic reference points</li>
                  <li>Notes and practice links for self-study</li>
                </ul>
              </div>
              <div className="card">
                <h3>SAT Reading &amp; Writing</h3>
                <ul className="check-list">
                  <li>Dedicated SAT → Reading and Writing section</li>
                  <li>Separate from SAT Math</li>
                  <li>Structured topic and question grouping</li>
                </ul>
              </div>
            </div>
          </section>
        );
      case 'Overview':
      default:
        return (
          <section className="content-panel">
            <div className="hero-panel card">
              <div className="hero-copy">
                <p className="eyebrow">Built for ambitious students</p>
                <h1>Prepare harder. Perform better. Stay consistent.</h1>
                <p className="hero-text">
                  VELOCITY brings together exam prep, mock tests, performance tracking,
                  coding lessons, and organized resources in one clean, student-first dashboard.
                </p>
                <div className="hero-actions">
                  <button className="primary-button">Start learning</button>
                  <button className="secondary-button">See roadmap</button>
                </div>
              </div>

              <div className="hero-visual" aria-label="Learning dashboard preview">
                <div className="mini-card">
                  <span>Today</span>
                  <strong>2 Chapters</strong>
                  <small>Physics + Maths</small>
                </div>
                <div className="mini-card highlight">
                  <span>Weekly streak</span>
                  <strong>6 days</strong>
                  <small>+18% improvement</small>
                </div>
              </div>
            </div>

            <div className="stats-row">
              {stats.map((stat) => (
                <div key={stat.label} className="stat-card card">
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>

            <div className="feature-grid">
              {featureCards.map((feature) => (
                <article key={feature.title} className="card feature-card">
                  <div className="feature-icon">{feature.icon}</div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </article>
              ))}
            </div>

            <div className="timeline card">
              <div className="section-header compact-header">
                <div>
                  <p className="eyebrow">Roadmap</p>
                  <h2>Build your preparation journey</h2>
                </div>
              </div>

              <ol className="timeline-list">
                {timeline.map((step) => (
                  <li key={step.title}>
                    <span>{step.step}</span>
                    <div>
                      <h3>{step.title}</h3>
                      <p>{step.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </section>
        );
    }
  }, [activeNav]);

  return (
    <div className="app-shell">
      <aside className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="brand-block">
          <div className="brand-mark">V</div>
          <div>
            <span className="brand-name">VELOCITY</span>
            <small>Student platform</small>
          </div>
        </div>

        <nav aria-label="Main navigation" className="nav-menu">
          {navItems.map((item) => (
            <button
              key={item}
              type="button"
              className={item === activeNav ? 'nav-item active' : 'nav-item'}
              onClick={() => {
                setActiveNav(item);
                setIsSidebarOpen(false);
              }}
            >
              {item}
            </button>
          ))}
        </nav>
      </aside>

      <div className="content-area">
        <header className="topbar">
          <button
            type="button"
            className="menu-toggle"
            onClick={() => setIsSidebarOpen((value) => !value)}
            aria-label="Toggle navigation"
          >
            ☰
          </button>

          <div className="topbar-actions">
            <button className="ghost-button" type="button">
              Sign in
            </button>
            <button className="primary-button" type="button">
              Join now
            </button>
          </div>
        </header>

        <main className="page-content">{currentContent}</main>
      </div>
    </div>
  );
};

export default App;
