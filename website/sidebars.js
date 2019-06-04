/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
  Adds content only if building internal FB version of documentations
  e.g. ...FBInternalOnly({'sected-id'})
*/
function FBInternalOnly(...elements) {
   return process.env.FB_INTERNAL ? elements : [];
}

module.exports = {
  docs: {
    'Getting Started': ['getting-started', 'philosophy', 'uses'],
    'Reference': [
      'component-api',
      'composite-components',
      'views',
      'responder-chain',
      'actions',
      'state',
      'scopes',
      'component-controllers',
      'lifecycle-methods',
      'animation',
      'debugging',
    ],
    'Collection Views': [
      'datasource-overview',
      'datasource-basics',
      'datasource-changeset-api',
      'datasource-gotchas',
      'datasource-dive-deeper',
    ],
    'Best Practices': [
      'never-subclass-components',
      'avoid-overrides',
      'indentation',
      'avoid-local-variables',
      'avoid-single-use-constants',
      'no-underscores',
      'pass-in-actions',
      'no-side-effects',
      'pass-in-immutable-objects',
      'components-cant-be-delegates',
      'avoid-excessive-branching',
      'check-for-nil',
      'avoid-push-back',
      'under-300-lines',
      'avoid-width-100-percent',
      'use-designated-initializer-style',
      'break-out-composites',
      'keep-controller-in-component',
    ],
    Infrastructure: ['component-hosting-view'],
    Appendix: ['why-cpp', 'advanced-views'],
  },
};
