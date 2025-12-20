import Layout from "../components/Layout";
import Head from "next/head";

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About — Sarah</title>
      </Head>

      <main className="container">
        <h1>About Me</h1>
        <p>
          I am a Full Stack Engineer specialized in TypeScript, React/Preact, and Java.
          I build high-performance, SSR-capable apps, SDKs, and real-time visualizations for
          mission-critical systems including finance and payment authentication.
        </p>

        <h2>Skills</h2>
        <ul>
          <li>TypeScript, React, Preact</li>
          <li>Node.js, Java, backend systems</li>
          <li>Real-time visualizations (WebSockets, Web Workers, WebGL)</li>
          <li>Building SDKs and developer tooling</li>
          <li>Performance optimization & server-side rendering</li>
        </ul>
      </main>
    </Layout>
  );
}
