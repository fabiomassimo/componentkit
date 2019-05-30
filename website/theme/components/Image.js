import React from 'react'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

function Image (props) {
  return (
    <img {...props} src={props.src}/>
  );
}

function StaticImage (props) {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  const {
    baseUrl,
  } = siteConfig;
  const src = baseUrl + props.src;
  return (
    <Image {...props} src={src}/>
  );
}

export default Image;
