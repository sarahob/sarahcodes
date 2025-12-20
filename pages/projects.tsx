import Layout from "../components/Layout";
import Head from "next/head";
import ProjectsList from "../components/ProjectsList";
import projectsData from "../data/projects";

export default function Projects() {
  return (
    <Layout>
      <Head>
        <title>Projects — Sarah</title>
      </Head>

      <main className="container">
        <h1>Projects</h1>
        <ProjectsList projects={projectsData} />
      </main>
    </Layout>
  );
}
