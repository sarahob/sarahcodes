import NerdBadge from "./NerdBadge";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="h-row">
          <h2>Hi, I'm Sarah</h2>
          <NerdBadge />
        </div>
        <p className="lead">
          Full Stack Engineer — TypeScript, React/Preact, Java. I build high-performance,
          SSR-first experiences, real-time visualizations, SDKs, and secure payment
          authentication systems.
        </p>

        <div style={{marginTop: '1.2rem'}}>
          <div className="fun-terminal">
            <code>~$ git clone git@github.com:sarahob/creative-experiments && cd creative-experiments</code>
          </div>
        </div>
      </div>
    </section>
  );
}
