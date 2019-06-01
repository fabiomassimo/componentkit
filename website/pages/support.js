import React from 'react';
import Layout from '@theme/Layout';

function Support() {
  return (
    <Layout>
      <div className="container">
        <div className="margin-vert--xl">
          <h1>Need help?</h1>
          <p>
            The{' '}
            <a href="https://github.com/facebook/componentkit/issues">
              GitHub issues
            </a>{' '}
            page is a good place to ask questions, find answers, and report
            issues.
          </p>
          <p>
            <a href="https://twitter.com/componentkit">@componentkit</a> and{' '}
            <a href="https://twitter.com/search?q=componentkit">
              #componentkit
            </a>{' '}
            are used on Twitter to keep up with the latest news on ComponentKit.
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default Support;
