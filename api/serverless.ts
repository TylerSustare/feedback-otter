import type { Serverless, Functions } from "serverless/aws";

const serverlessConfiguration: Serverless = {
  org: "tylersustare",
  app: "feedback-otter",
  service: "feedback-otter-api",
  frameworkVersion: "3",
  plugins: ["serverless-plugin-typescript", "serverless-offline"],
  provider: {
    name: "aws",
    runtime: "nodejs18.x",
    region: "us-west-2",
  },
  functions: {
    health: {
      handler: "src/handler.hello",
      events: [
        {
          httpApi: {
            path: "/health",
            method: "get",
          },
        },
      ],
    },
  },
};

module.exports = serverlessConfiguration;
