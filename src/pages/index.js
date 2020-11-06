import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'The Handbook',
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
       The Metaman is the central repository for how we run the company.
       It's open to the world and we gladdly welcome feedback.
       Please <a href='https://github.com/metadot/metaman/issues'>
         open an issue</a> or a pull request to suggest improvements.
      </>
    ),
  },
  {
    title: 'Engage a worldwide team',
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
       The Metaman is helps our virtual teams to get their work done,
       grow as professional and continually improve themselves and 
       the products their work on. 
      </>
    ),
  },
  {
    title: 'A tighly knit team',
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        When done correctly, engaging remote workers who can feel isolated
        or lost now feel like working as a team the same location. 
        Most of the challenges of working remotly are addressed
         and the end result is surprisingly great.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
