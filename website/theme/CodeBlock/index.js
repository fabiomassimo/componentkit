/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import classnames from 'classnames';
import Highlight, {defaultProps} from 'prism-react-renderer';
import theme from './github';
import styles from './styles.module.css';

export default ({children, className: languageClassName}) => {
  const language =
    languageClassName && languageClassName.replace(/language-/, '');
  const highlightStyle = languageClassName && languageClassName.replace(/language-(.*)-/, '');
  const isRedHighlight = highlightStyle && (highlightStyle === 'redhighlight');
  return (
    <Highlight
      {...defaultProps}
      theme={theme}
      code={children.trim()}
      language={language}>
      {({className, style, tokens, getLineProps, getTokenProps}) => (
        <pre className={classnames(className, styles.codeBlock, isRedHighlight ? styles.redhighlight : null)} style={style}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({line, key: i})}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({token, key})} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};
