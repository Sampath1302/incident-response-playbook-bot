require('dotenv').config();
const { App } = require('@slack/bolt');
const { exec } = require('child_process');

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  appToken: process.env.SLACK_APP_TOKEN,
  socketMode: true
});

app.event('app_mention', async ({ event, say }) => {
  const text = event.text.toLowerCase();

  console.log("Received:", text);

  // QUARANTINE COMMAND (CHECK FIRST)
  if (text.includes('quarantine')) {
    await say(`🚨 Quarantine command received. Executing...`);

    exec(
      `powershell.ex
