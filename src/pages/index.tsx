import useBaseUrl from '@docusaurus/useBaseUrl';
import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Fan site of Pawnee, Indiana">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <section className={styles.features}>
          <div className="container">
            <div className='row'>
              <h1>From the Mayor</h1>
            </div>
            <div className="row">
              <div className={clsx('col col--4')}>
                <div className="text--center">
                  <img src={useBaseUrl('/img/Jerry_Gergich.jpg')} />
                </div>
              </div>
              <div className={clsx('col col--4')}>
                <p>Welcome to Pawnee!</p>
                <p>-Gerry</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
