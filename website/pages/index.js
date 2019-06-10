import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import withBaseUrl from '@docusaurus/withBaseUrl';
import Link from '@docusaurus/Link';
import classnames from 'classnames';

import styles from './index.module.css';

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  const { title, tagline } = siteConfig;

  return (
    <Layout title={title}>
      <div className={classnames('hero', 'hero--primary', styles.heroTilted)}>
        <div className="container">
          <div className="row">
            <div className="col padding-top--lg">
              <h1 className="hero__title">{tagline}</h1>
              <p className="hero__subtitle">
                ComponentKit is an Objective-C++ view framework for iOS that is
                heavily inspired by React.
              </p>
              <div>
                <Link
                  className={classnames(
                    'button button--secondary button--lg margin-right--md',
                    styles.ctaButton,
                  )}
                  to={withBaseUrl('docs/getting-started')}
                >
                  Get Started
                </Link>
                <Link
                  className={classnames(
                    'button button--secondary button--outline button--lg',
                    styles.ctaButtonSecondary,
                  )}
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="col text--center">
              <img
                alt="ComponentKit Hero Logo"
                src={withBaseUrl('img/ck_hero_logo.png')}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col col--5">
            <div className={styles.featureImageColumn}>
              <img alt="Declarative" src={withBaseUrl('img/declarative.png')} />
            </div>
          </div>
          <div className="col col--5 col--offset-2 padding-vert--xl">
            <h2>Declarative</h2>
            <p className={styles.featureDescription}>
              ComponentKit uses a declarative API to define UI components. You
              simply describe the layout for your UI based on a set of immutable
              inputs and the framework takes care of the rest. With code
              generation, ComponentKit can perform optimisations for your UI
              under the hood, while keeping your code simple and easy to
              maintain.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col col--5 padding-vert--xl">
            <h2>Asynchronous Layout</h2>
            <p className={styles.featureDescription}>
              ComponentKit can measure and layout your UI ahead of time without
              blocking the UI thread. By decoupling its layout system from the
              traditional Android View system, ComponentKit can drop the UI
              thread constraint imposed by iOS.
            </p>
          </div>
          <div className="col col--5 col--offset-2">
            <div className={styles.featureImageColumn}>
              <img
                alt="Asynchronous Layout"
                src={withBaseUrl('img/async_layout.png')}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col col--5">
            <div className={styles.featureImageColumn}>
              <img
                alt="Flatter View Hierarchies"
                src={withBaseUrl('img/flatter_view.png')}
              />
            </div>
          </div>
          <div className="col col--5 col--offset-2 padding-vert--xl">
            <h2>Flatter View Hierarchies</h2>
            <p className={styles.featureDescription}>
              ComponentKit uses Yoga for layout and automatically reduces the
              number of ViewGroups that your UI contains. This, in addition to
              ComponentKit's text optimizations, allows for much smaller view
              hierarchies and improves both memory and scroll performance.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col col--5 padding-vert--xl">
            <h2>Fine-grained Recycling</h2>
            <p className={styles.featureDescription}>
              With ComponentKit, each UI item such as text, image, or video is
              recycled individually. As soon as an item goes off screen, it can
              be reused anywhere in the UI and pieced together with other items
              to create new UI elements. Such recycling reduces the need of
              having multiple view types and improves memory usage and scroll
              performance.
            </p>
          </div>
          <div className="col col--5 col--offset-2 ">
            <div className={styles.featureImageColumn}>
              <img alt="Declarative" src={withBaseUrl('img/recycling.png')} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
