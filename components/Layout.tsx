import Link from "next/link";
import React from "react";
import AnimatedBackground from "./AnimatedBackground";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div>
      <AnimatedBackground />
      <header className="site-header">
        <div className="container nav">
          <h1 className="brand">Sarah</h1>
          <nav>
            <Link href="/">Home</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/about">About</Link>
          </nav>
        </div>
      </header>

      {children}

      <footer className="site-footer">
        <div className="container">
          <small>© {new Date().getFullYear()} Sarah — Built with TypeScript & Next.js</small>
        </div>
      </footer>
    </div>
  );
}
