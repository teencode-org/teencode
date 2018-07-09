import Raven from 'raven-js';

Raven.config(process.env.SENTRY_DSN, {
  environment: process.env.NODE_ENV,
  shouldSendCallback: () => process.env.NODE_ENV !== 'development',
  tags: {version: 'DEPLOYED_VERSION'}
}).install();
