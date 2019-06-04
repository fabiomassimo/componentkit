import React from 'react';
import withBaseUrl from '@docusaurus/withBaseUrl';

function Image(props) {
  return <img {...props} src={props.src} />;
}

export default Image;
