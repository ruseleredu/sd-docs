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
      <Link to="/utfpr/ELT72B/intro">
        Sistemas Digitais
      </Link>
    ),
    Svg: require('@site/static/img/office-svgrepo-com.svg').default,
    description: (
      <>
        Possibilitar ao aluno analisar, sintetizar e desenvolver circuitos digitais combinacionais e sequenciais.
      </>
    ),
  },
  {
    title: (
      <Link to="/lab/intro">
        Laboratório de Sistemas Digitais
      </Link>
    ),
    Svg: require('@site/static/img/lab-medical-test-svgrepo-com.svg').default,
    description: (
      <>
        Descrição do curso de laboratório de sistemas digitais.
      </>
    ),
  },
  {
    title: (
      <Link to="/ead/intro">
        Ensino a Distância
      </Link>
    ),
    Svg: require('@site/static/img/online-seminar-svgrepo-com.svg').default,
    description: (
      <>
        Descrição do curso de ensino a distância.
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
