import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <a className="button button--outline button--secondary button--lg" href="/docs/">Get Started </a>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <div className="downloads">
          <a href="https://raw.githubusercontent.com/Social-graphics-library/Social-graphics-library/master/dist/sgl.js" target="_blank" download>
            <button id="downloadScript" className="button button--outline button--secondary button--lg">Download Script</button>
          </a>
          <div className="downloadsContent">
            clone the code from <a href="https://github.com/Social-graphics-library/Social-graphics-library" target="_blank">Github </a>
            <br /><br />or use <code>npm i social-graphics-library</code>
          </div>
        </div>
        <div className="exampleImplementation">
          <div className="exampleInput">
            Player Name:
            <input type="text" id="uName" alt="Name"></input>
            Team Name:
            <input type="text" id="tName" alt="Name"></input>
            <button type="submit" className="button button--outline button--secondary" id="generate">Generate</button>
          </div>
          <div className="profile">
            <div className="profilePic">
              <div id="img-container-1"></div>
            </div>
            <div className="profileBanner">
              <div id="img-container-2"></div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
