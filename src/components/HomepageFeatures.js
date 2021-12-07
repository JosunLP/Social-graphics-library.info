import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Working for a Community isn\'t easy',
    Svg: require('../../static/img/3441.svg').default,
    description: (
      <>
        Equipping a constantly changing gaming community with the latest social media graphics is a huge effort.
        There is a simpler solution, especially when equipping esport teams!
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('../../static/img/458.svg').default,
    description: (
      <>
        By using the social graphics library in your own tools,
         the resources of the design team can be focused on the really important projects!
      </>
    ),
  },
  {
    title: 'Modular and Simple',
    Svg: require('../../static/img/666.svg').default,
    description: (
      <>
        Thanks to the very clear template system, fresh ones can be created extreme quickly. The system is therefore very flexible!
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
