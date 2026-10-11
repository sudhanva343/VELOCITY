* {
  box-sizing: border-box;
}

:root {
  --bg: #071a2d;
  --bg-alt: #0e2541;
  --panel: rgba(12, 28, 48, 0.92);
  --panel-soft: rgba(18, 35, 58, 0.9);
  --sidebar: rgba(7, 20, 34, 0.96);
  --primary: #5cc8ff;
  --primary-strong: #1e9ae6;
  --secondary: #83f7d1;
  --text: #edf6ff;
  --muted: #b7cde8;
  --line: rgba(150, 176, 220, 0.25);
  --card: rgba(17, 36, 59, 0.96);
  --shadow: 0 20px 50px rgba(2, 7, 16, 0.35);
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  min-height: 100vh;
  font-family: Inter, 'Segoe UI', sans-serif;
  background:
    radial-gradient(circle at top left, rgba(92, 200, 255, 0.22), transparent 28%),
    linear-gradient(180deg, #061522 0%, #0b1d31 100%);
  color: var(--text);
}

button,
input,
select {
  font: inherit;
}

button {
  cursor: pointer;
}

#root {
  min-height: 100vh;
}

.app-shell {
  display: flex;
  min-height: 100vh;
}

.sidebar {
  width: 270px;
  background: rgba(6, 17, 28, 0.94);
  border-right: 1px solid var(--line);
  padding: 24px 18px;
  position: sticky;
  top: 0;
  height: 100vh;
}

.brand-block {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 10px 20px;
  border-bottom: 1px solid var(--line);
}

.brand-mark {
  display: grid;
  place-items: center;
  width: 42px;
  height: 42px;
  border-radius: 12px;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  color: #061522;
  font-weight: 800;
}

.brand-name {
  display: block;
  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: 0.08em;
}

.brand-block small {
  color: var(--muted);
}

.nav-menu {
  margin-top: 22px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.nav-item {
  width: 100%;
  text-align: left;
  background: transparent;
  color: var(--muted);
  border: 1px solid transparent;
  border-radius: 12px;
  padding: 12px 14px;
  font-weight: 600;
  transition: all 0.2s ease;
}

.nav-item:hover,
.nav-item:focus-visible,
.nav-item.active {
  background: rgba(92, 200, 255, 0.12);
  color: var(--text);
  border-color: rgba(92, 200, 255, 0.25);
}

.content-area {
  flex: 1;
  min-width: 0;
}

.topbar {
  position: sticky;
  top: 0;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(9, 20, 33, 0.75);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--line);
  padding: 18px 28px;
}

.menu-toggle {
  display: none;
  background: rgba(92, 200, 255, 0.1);
  border: 1px solid var(--line);
  color: var(--text);
  border-radius: 10px;
  padding: 8px 12px;
}

.topbar-actions {
  display: flex;
  gap: 12px;
  align-items: center;
}

.primary-button,
.secondary-button,
.ghost-button {
  border-radius: 12px;
  border: none;
  padding: 0.9rem 1.2rem;
  font-weight: 700;
  transition: transform 0.2s ease, opacity 0.2s ease;
}

.primary-button {
  background: linear-gradient(135deg, var(--primary), var(--primary-strong));
  color: #061522;
}

.secondary-button {
  background: rgba(131, 247, 209, 0.12);
  color: var(--text);
  border: 1px solid rgba(131, 247, 209, 0.2);
}

.ghost-button {
  background: transparent;
  color: var(--text);
  border: 1px solid var(--line);
}

.primary-button:hover,
.secondary-button:hover,
.ghost-button:hover {
  transform: translateY(-1px);
}

.page-content {
  padding: 28px;
}

.content-panel {
  display: block;
  max-width: 1200px;
  margin: 0 auto;
}

.hero-panel {
  display: grid;
  grid-template-columns: 1.3fr 0.7fr;
  gap: 18px;
  padding: 28px;
  background: linear-gradient(135deg, rgba(14, 37, 65, 0.96), rgba(10, 30, 52, 0.9));
}

.hero-copy h1 {
  margin: 0;
  font-size: clamp(2.2rem, 4vw, 4rem);
  line-height: 1.08;
  max-width: 620px;
}

.eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: var(--secondary);
  font-size: 0.73rem;
  margin-bottom: 0.8rem;
  font-weight: 700;
}

.hero-text {
  color: var(--muted);
  font-size: 1.05rem;
  line-height: 1.75;
  max-width: 640px;
  margin: 1.2rem 0 1.6rem;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.hero-visual {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 18px;
}

.mini-card {
  background: rgba(92, 200, 255, 0.08);
  border: 1px solid var(--line);
  border-radius: 18px;
  padding: 18px;
  box-shadow: var(--shadow);
}

.mini-card span,
.mini-card small {
  display: block;
  color: var(--muted);
}

.mini-card strong {
  display: block;
  font-size: 1.7rem;
  margin: 10px 0 6px;
}

.mini-card.highlight {
  background: linear-gradient(135deg, rgba(92, 200, 255, 0.12), rgba(131, 247, 209, 0.08));
}

.card {
  background: rgba(17, 36, 59, 0.96);
  border: 1px solid var(--line);
  border-radius: 20px;
  box-shadow: var(--shadow);
}

.stats-row,
.feature-grid,
.exam-grid,
.stats-grid,
.stack-grid {
  display: grid;
  gap: 18px;
  margin-top: 20px;
}

.stats-row {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.stat-card {
  padding: 20px 18px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.stat-card strong {
  font-size: 2rem;
}

.stat-card span {
  color: var(--muted);
}

.feature-grid {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.feature-card {
  padding: 20px;
}

.feature-icon {
  font-size: 1.8rem;
  margin-bottom: 12px;
}

.feature-card h3,
.exam-card h3,
.metric-card strong {
  margin: 0 0 10px;
}

.feature-card p,
.exam-card p,
.card p,
.check-list li {
  color: var(--muted);
  line-height: 1.7;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  margin-top: 28px;
}

.section-header h2 {
  margin: 0;
  font-size: clamp(1.65rem, 2vw, 2.4rem);
}

.compact-header {
  margin-top: 0;
}

.timeline,
.chart-card {
  padding: 24px;
  margin-top: 22px;
}

.timeline-list {
  list-style: none;
  margin: 18px 0 0;
  padding: 0;
  display: grid;
  gap: 18px;
}

.timeline-list li {
  display: grid;
  grid-template-columns: 60px 1fr;
  gap: 18px;
  align-items: start;
  padding-top: 10px;
  border-top: 1px solid var(--line);
}

.timeline-list li:first-child {
  border-top: none;
  padding-top: 0;
}

.timeline-list span {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 52px;
  height: 52px;
  border-radius: 16px;
  background: rgba(92, 200, 255, 0.12);
  color: var(--primary);
  font-weight: 800;
}

.timeline-list h3 {
  margin: 0 0 6px;
}

.exam-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.exam-card {
  padding: 20px;
}

.exam-badge {
  display: inline-flex;
  align-items: center;
  margin-bottom: 12px;
  padding: 6px 10px;
  border-radius: 999px;
  background: rgba(92, 200, 255, 0.1);
  color: var(--primary);
  font-size: 0.8rem;
  font-weight: 700;
}

.exam-card ul,
.check-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 8px;
}

.exam-card li,
.check-list li {
  position: relative;
  padding-left: 18px;
}

.exam-card li::before,
.check-list li::before {
  content: '•';
  position: absolute;
  left: 0;
  color: var(--secondary);
}

.stack-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.stack-grid .card {
  padding: 22px;
}

.stats-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.metric-card {
  padding: 18px 20px;
}

.metric-card.light {
  background: linear-gradient(135deg, rgba(92, 200, 255, 0.1), rgba(17, 36, 59, 0.96));
}

.metric-card span {
  color: var(--muted);
}

.metric-card strong {
  font-size: 2rem;
  margin-bottom: 0;
}

.bars {
  display: flex;
  align-items: end;
  gap: 12px;
  height: 180px;
  margin-top: 18px;
  padding-top: 12px;
}

.bars span {
  flex: 1;
  min-height: 30px;
  border-radius: 12px 12px 0 0;
  background: linear-gradient(180deg, var(--primary), var(--secondary));
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.12);
}

@media (max-width: 980px) {
  .sidebar {
    position: fixed;
    left: -290px;
    top: 0;
    height: 100vh;
    z-index: 30;
    transition: left 0.2s ease;
  }

  .sidebar.open {
    left: 0;
  }

  .menu-toggle {
    display: inline-flex;
  }

  .hero-panel,
  .feature-grid,
  .stats-row,
  .exam-grid,
  .stats-grid,
  .stack-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 600px) {
  .page-content,
  .topbar {
    padding-left: 16px;
    padding-right: 16px;
  }

  .topbar-actions {
    gap: 8px;
  }

  .primary-button,
  .secondary-button,
  .ghost-button {
    padding: 0.75rem 1rem;
  }
}
