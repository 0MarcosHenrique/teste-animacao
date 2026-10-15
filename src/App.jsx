import { useState } from 'react';
import Topography from './components/Topography';

export default function App() {
  const [paused, setPaused] = useState(false);

  return (
    <main className="landing">
      <div className="landscape" aria-hidden="true">
        <Topography
          color="#4f7cff"
          lineCount={22}
          lineWidth={1.2}
          elevation={1}
          foreground={0.2}
          tilt={32}
          speed={paused ? 0 : 0.25}
          morph={paused ? 0 : 0.2}
          direction="forward"
          glow={0.6}
          depthOfField={0.4}
          fog={0.35}
          hoverEffect="lift"
          clickEffect="pulse"
        />
      </div>
      <div className="vignette" aria-hidden="true" />
      <header className="masthead">
        <a className="brand" href="./" aria-label="Início">
          <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
            <path d="m3 23 8-15 6 10 4-7 8 12H3Z" />
            <path d="m7 23 5-8 5 8m0-5 3 5" />
          </svg>
          teste<span> / </span>animação
        </a>
        <span className="edition">Teste 01</span>
      </header>

      <section className="hero" aria-labelledby="title">
        <div className="eyebrow"><span /> Topography · React Bits</div>
        <h1 id="title">Teste de<br /><span>animação</span></h1>
        <p>Uma página para testar o relevo em movimento.<br />Passe o mouse e veja como ele reage.</p>
        <button type="button" aria-pressed={paused} onClick={() => setPaused(value => !value)}>
          {paused ? 'Retomar movimento' : 'Pausar movimento'}
          <span aria-hidden="true">{paused ? '▶' : 'Ⅱ'}</span>
        </button>
        <span className="interaction-hint">Clique ou toque no fundo para criar uma onda.</span>
      </section>

      <footer>
        <span className="status"><i /> {paused ? 'Movimento pausado' : 'Animação em movimento'}</span>
        <span>Feito com React Bits <span className="footer-star">✳</span></span>
      </footer>
    </main>
  );
}
