import type { Serverless } from 'serverless/aws';

const serverlessConfiguration: Serverless = {
  org: 'tylersustare',
  app: 'feedback-otter',
  service: 'feedback-otter-api',
  frameworkVersion: '3',
  plugins: ['serverless-plugin-typescript', 'serverless-offline'],
  package: {
    individually: true,
  },
  provider: {
    name: 'aws',
    runtime: 'nodejs18.x',
    region: 'us-west-2',
    apiGateway: {
      apiKeys: ['feedback-otter-test-api-key'],
    },
  },
  functions: {
    health: {
      handler: 'src/handler.hello',
      events: [
        {
          http: {
            path: '/health',
            method: 'get',
            private: true,
          },
        },
      ],
    },
  },
};

module.exports = serverlessConfiguration;
