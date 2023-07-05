import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';

const FeatureList = [
  {
    title: 'Hard Skill',
    Svg: require('../../static/img/homepage/undraw_programming_re_kg9v.svg').default,
    description: (
      <>
        熟 C# 程式設計、TSQL<br/>
        熟.Net、.Net Core<br/>
        熟 Web API 整合 JWT 認證授權<br/>
        熟 Seq 平台整合 LineNotify 第三方App通知<br/>
      </>
    ), 
    lightSrc: '/img/undraw_code_light.svg',
    darkSrc: '/img/undraw_code_dark.svg',
  },
  {
    title: 'Soft Skill',
    Svg: require('../../static/img/homepage/undraw_creation_process_re_kqa9.svg').default,
    description: (
      <>
        
        敏捷開發(Scrum)<br/>
        系統潛在問題分析與解決提案<br/>
        新技術研究與導入<br/>
      </>
    ),
    lightSrc: '/img/undraw_code_light.svg',
    darkSrc: '/img/undraw_code_dark.svg',
    TextDecoder: "text-left"
  },
  {
    title: 'Jobs I looking for',
    Svg: require('../../static/img/homepage/undraw_startup_life_re_8ow9 copy.svg').default,
    description: (
      <>
        系統架構師<br/>
        Scurm Master<br/>
        .Net 生態圈<br/>
      </>
    ),
    lightSrc: '/img/undraw_code_light.svg',
    darkSrc: '/img/undraw_code_dark.svg',
  },
];

const JobList =[
  {
    JobTitle: "系統設計師",
    JobContent: "系統架構規劃與實作、系統效能調校、跨系統Log架構規劃、團隊技術支援",
    CompanyName: "新光人壽保險股份有限公司",
    CompanyIcon: "",
    Years: "10",
    LoginDate: "2012/12/02",
    LeaveDate: "",
  },

]


function Feature({Svg, title, description, lightSrc, darkSrc}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg}  alt={title} />
        {/* <ThemedImage
            alt="Docusaurus themed image"
            sources={{
              light: useBaseUrl(lightSrc),
              dark: useBaseUrl(darkSrc),
            }}
            width="200" height="200"
          /> */}
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
        <div className="row">

        </div>
      </div>
    </section>
  );
}
