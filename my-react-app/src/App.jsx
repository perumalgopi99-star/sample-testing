import React from 'react';

const features = [
  {
    title: 'Fast setup',
    description: 'A clean starter interface ready for content, products, or dashboards.',
  },
  {
    title: 'Responsive layout',
    description: 'Looks great on desktop, tablet, and mobile with simple flexible sections.',
  },
  {
    title: 'Easy to extend',
    description: 'Built with small, readable components so you can add real features quickly.',
  },
];

function App() {
  return (
    <main className="app-shell">
      <section className="hero-card">
        <div className="hero-copy">
          <span className="eyebrow">Starter App</span>
          <h1>Build something useful, fast.</h1>
          <p>
            This React app gives you a modern starting point with a polished landing page,
            feature highlights, and a clear call to action.
          </p>
          <div className="actions">
            <button type="button" className="primary-btn">Get started</button>
            <button type="button" className="secondary-btn">Learn more</button>
          </div>
        </div>

        <div className="hero-panel" aria-label="App summary panel">
          <div>
            <strong>Project status</strong>
            <p>Ready for customization</p>
          </div>
          <div>
            <strong>Stack</strong>
            <p>React + Vite</p>
          </div>
          <div>
            <strong>Best for</strong>
            <p>Landing pages, dashboards, demos</p>
          </div>
        </div>
      </section>

      <section className="features-grid" aria-label="Features">
        {features.map((feature) => (
          <article className="feature-card" key={feature.title}>
            <h2>{feature.title}</h2>
            <p>{feature.description}</p>
          </article>
        ))}
      </section>
    </main>
  );
}

export default App;
