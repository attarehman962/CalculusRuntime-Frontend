import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useProgress } from "../context/ProgressContext";
import "./AISolver.css";

const STREAMLIT_URL = "https://dapeaqzot5jtellyuyxjrf.streamlit.app/";

function AISolver() {
  const { user } = useAuth();
  const { addSolverHistory, recordVisit } = useProgress();

  useEffect(() => {
    recordVisit("ai-solver");
  }, [recordVisit]);

  const handleOpenSolver = () => {
    if (user) {
      addSolverHistory({ page: "ai-solver", url: STREAMLIT_URL });
    }
  };

  return (
    <main className="ai-solver-page">
      <div className="ai-solver-header">
        <div className="ai-solver-title-row">
          <span className="ai-solver-icon">🤖</span>
          <div>
            <h1 className="ai-solver-title">AI Calculus Solver</h1>
            <p className="ai-solver-sub">
              Powered by CalculusSolver — a neural tree-to-tree transformer trained on 5.5M calculus problems.
              Solves derivatives, integrals, gradients, Lagrange multipliers, and more with step-by-step explanations.
            </p>
          </div>
        </div>

        <div className="ai-solver-badges">
          <span className="ai-badge">Partial Derivatives</span>
          <span className="ai-badge">Integration</span>
          <span className="ai-badge">Gradients</span>
          <span className="ai-badge">Chain Rule</span>
          <span className="ai-badge">Lagrange Multipliers</span>
          <span className="ai-badge">Taylor Series</span>
        </div>

        {!user && (
          <div className="ai-solver-notice">
            <span>💡</span>
            <span>
              <a href="/signup">Create a free account</a> to save your solver history and track usage.
            </span>
          </div>
        )}
      </div>

      <div className="ai-solver-launch">
        <div className="ai-solver-launch-copy">
          <div className="ai-solver-launch-kicker">Hosted solver</div>
          <h2>Open CalculusSolver in a dedicated tab</h2>
          <p>
            Streamlit Cloud uses an authentication redirect that browsers block
            inside embedded frames. Opening it directly avoids the frame error
            and gives the solver the full page to work with.
          </p>
        </div>
        <a
          href={STREAMLIT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="ai-solver-open-btn"
          onClick={handleOpenSolver}
        >
          Open solver
        </a>
      </div>

      <div className="ai-solver-info">
        <div className="ai-info-card">
          <div className="ai-info-icon">🧠</div>
          <div>
            <div className="ai-info-title">Neural Architecture</div>
            <div className="ai-info-desc">Tree-to-tree transformer with 8 layers, 512 hidden dims, specialized rule head for calculus operations.</div>
          </div>
        </div>
        <div className="ai-info-card">
          <div className="ai-info-icon">📊</div>
          <div>
            <div className="ai-info-title">Training Data</div>
            <div className="ai-info-desc">5.5M synthetic + real calculus problems including AP Calculus, MIT OCW, and multivariable problems.</div>
          </div>
        </div>
        <div className="ai-info-card">
          <div className="ai-info-icon">✅</div>
          <div>
            <div className="ai-info-title">Verified Answers</div>
            <div className="ai-info-desc">Solutions are numerically verified at 50 random test points using the SLaNg math library.</div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default AISolver;
