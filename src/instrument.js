import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://65767c9525699c15f9009e5980e6815e@o4508337845829632.ingest.us.sentry.io/4508405316714496",
  integrations: [
    Sentry.consoleLoggingIntegration({ levels: ["log", "error", "warn"] }),
  ],
  _experiments: {
    enableLogs: true,
    beforeSendLog: (event) => {
      console.log("beforeSendLog", event);
      return event;
    },
  },
  debug: true,
});
