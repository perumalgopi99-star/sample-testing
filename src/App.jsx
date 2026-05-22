const features = [
  {
    title: "Fast Vite Setup",
    description: "Blazing-fast dev server and optimized build output.",
  },
  {
    title: "Reusable Components",
    description: "Simple structure to extend with new features.",
  },
  {
    title: "Clean UI",
    description: "Modern, accessible layout with responsive design.",
  },
];

export default function App() {
  return (
    <div className="page">
      <header className="hero">
        <span className="pill">React Sample App</span>
        <h1>Build something great on this branch.</h1>
        <p>
          This starter app gives you a clean React + Vite setup with a simple,
          modern UI.
        </p>
        <div className="actions">
          <button type="button">Get Started</button>
          <button type="button" className="secondary">
            View Docs
          </button>
        </div>
      </header>

      <section className="grid">
        {features.map((feature) => (
          <article key={feature.title}>
            <h2>{feature.title}</h2>
            <p>{feature.description}</p>
          </article>
        ))}
      </section>

      <footer className="footer">
        <span>Ready to customize? Start editing src/App.jsx.</span>
      </footer>
    </div>
  );
}
