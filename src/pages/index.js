import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import styles from './index.module.css';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();

  // 假设背景图片的尺寸为 1200x800
  const headerStyle = {
    backgroundImage: `url('https://pic.imgdb.cn/item/65d892e69f345e8d03beebd7.png')`, // 替换为你的背景图片路径
    height: '1200px', // 设置与背景图片相同的高度
    backgroundSize: 'cover', // 让背景图片充满整个区域
    backgroundPosition: 'center' // 将背景图片居中
  };

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header
        className={styles.heroBanner}
        style={headerStyle}>
        <div className="container">
          <h1 className="hero__title">
            {siteConfig.title}
          </h1>
          <div className={styles.buttons}>
            <a
              className="button button--secondary button--lg"
              href="https://www.spacex.com/"> {/* 修改为你想要链接的地址 */}
              SpaceX Official Website
            </a>
          </div>
        </div>
      </header>
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
