import useBaseUrl from '@docusaurus/useBaseUrl';
import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

type FeatureItem = {
  title: string;
  image: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Pawnee311',
    image: '/img/noun-info-1260855.png',
    description: (
      <>
        Non-emergency services
      </>
    ),
  },
  {
    title: 'FAQs',
    image: '/img/noun-faq-3237506.png',
    description: (
      <>
        Don't know where to start, this is the place.
      </>
    )
  },
  {
    title: 'News',
    image: '/img/noun-news-518193.png',
    description: (
      <>
        Lastest from Pawnee, Indiana
      </>
    )
  }
];

function Feature({ title, image, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img
          className={styles.featureSvg}
          alt={title}
          src={useBaseUrl(image)}
        />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
