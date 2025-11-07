import type { ReactNode } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from "@docusaurus/Link";

type FeatureItem = {
  title: React.ReactNode; // Changed to ReactNode to allow links
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
   title: (
      <Link to="/ead/intro">
        Easy to Use with Link
      </Link>
    ),
    Svg: require('@site/static/img/binary-code-algorithm-svgrepo-com.svg').default,
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
         {" "}
        <a href="https://www.arduino.cc/" target="_blank">
          Arduino
        </a>{" "} used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: 'Powered by React',
    Svg: require('@site/static/img/lab-medical-test-svgrepo-com.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/online-seminar-svgrepo-com.svg').default,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your <Link to="/docs/intro">docs</Link> into the <code>docs</code> directory.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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
