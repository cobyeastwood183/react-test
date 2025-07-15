import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://fe3aeb39db9590ea8885c801e3c6c62d@o4508337845829632.ingest.us.sentry.io/4509138107826177",
  integrations: [
    Sentry.consoleLoggingIntegration({ levels: ["log", "error", "warn"] }),
  ],
  _experiments: {
    enableLogs: true,
    beforeSendLog: (event) => {
      return event;
    },
  },
  debug: true,
});
