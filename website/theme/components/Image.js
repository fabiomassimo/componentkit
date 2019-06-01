import React from 'react';
import withBaseUrl from '@docusaurus/withBaseUrl';

function Image(props) {
  return <img {...props} src={withBaseUrl(props.src)} />;
}

export default Image;
