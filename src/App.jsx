import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="hero">
        <div>
          <p className="eyebrow">Sample React App</p>
          <h1>Build fast, ship faster.</h1>
          <p className="subtitle">
            A clean starter using Vite + React with a modern, accessible layout.
          </p>
          <div className="actions">
            <a className="primary" href="https://react.dev" target="_blank" rel="noreferrer">
              React Docs
            </a>
            <a className="secondary" href="https://vitejs.dev" target="_blank" rel="noreferrer">
              Vite Docs
            </a>
          </div>
        </div>
        <div className="card">
          <h2>What's inside</h2>
          <ul>
            <li>Vite-based build pipeline</li>
            <li>Responsive layout with gradients</li>
            <li>Accessible color contrast</li>
          </ul>
          <button className="cta" type="button">Get Started</button>
        </div>
      </header>
    </div>
  );
}

export default App;
