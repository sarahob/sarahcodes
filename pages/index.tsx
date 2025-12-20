import type { GetStaticProps } from "next";
import Head from "next/head";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import ProjectsList from "../components/ProjectsList";
import { Project } from "../types/project";
import projectsData from "../data/projects";
import SkillsPanel from "../components/SkillsPanel";
import TechTicker from "../components/TechTicker";
import AnimatedBackground from "../components/AnimatedBackground";

type Props = {
  projects: Project[];
};

export default function Home({ projects }: Props) {
  return (
    <Layout>
      <Head>
        <title>Sarah — Full Stack Engineer</title>
        <meta name="description" content="Portfolio of a Full Stack Engineer — TypeScript, React/Preact, Java, realtime visualizations, SDKs" />
      </Head>

      <Hero />

      <main>
        <section className="container">
          <div className="skills-panel">
            <div>
              <h2>Selected Projects</h2>
              <ProjectsList projects={projects} />
            </div>
            <aside>
              <SkillsPanel projects={projects} />
              <div style={{marginTop: '1rem'}}>
                <h4>Tech I enjoy</h4>
                <TechTicker items={["TypeScript","React","Preact","WebGL","WebSockets","D3","Node.js","Java","Next.js"]} />
              </div>
            </aside>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  // Static data for portfolio projects — SSR-friendly via getStaticProps
  return {
    props: {
      projects: projectsData,
    },
  };
};
