# incident-response-playbook-bot
A Slack-based Incident Response (IR) chatbot built using Node.js and PowerShell to automate common IR actions such as host quarantine, log collection, and rollback, with built-in safety controls, approvals, and audit logging.

📌 Project Overview

The Incident Response Playbook Bot enables security analysts to trigger predefined IR actions directly from Slack using simple commands.
The bot executes PowerShell scripts on Windows systems and returns real-time execution status back to Slack.

The project follows a SOAR-style (Security Orchestration, Automation, and Response) approach by combining automation with human-in-the-loop approvals to prevent accidental or unauthorized actions.

✨ Key Features

💬 Slack-based command interface

🚨 Host quarantine with approval & confirmation

🔓 Rollback (unquarantine) support

📥 Remote log collection

🔐 Host allow-listing for safety

👮 Approver-based authorization

🧾 Audit logging of all actions

🔄 Local testing using Slack Socket Mode

🛠️ Technologies Used

Node.js – Bot logic and orchestration

Slack Bolt SDK – Slack bot framework

PowerShell – Incident response automation

Slack Socket Mode – Secure local testing without public webhooks

Windows Firewall / System Tools – Host isolation and logging

📂 Project Structure
incident-response-playbook-bot/
│
├── index.js              # Main Slack bot logic
├── package.json          # Node.js dependencies
├── .gitignore            # Ignored files (node_modules, secrets)
├── README.md             # Project documentation
└── scripts/
    ├── quarantine.ps1
    ├── unquarantine.ps1
    └── collect-logs.ps1

🧑‍💻 Supported Commands

All commands are issued in Slack by mentioning the bot.

@IR-Bot quarantine HOST1
@IR-Bot approve <approval_id>
@IR-Bot confirm <confirmation_id>
@IR-Bot unquarantine HOST1
@IR-Bot collect logs HOST1

🔐 Safety & Control Mechanisms

Host Allow-List
Only predefined hosts can be targeted.

Approval Workflow
Destructive actions require approval from authorized users.

Command Confirmation
Final confirmation is required before execution.

Audit Logging
All actions are logged with timestamps for accountability.

🚀 Deployment & Local Testing

The bot runs locally using Slack Socket Mode

No public HTTP endpoint or cloud deployment required

Socket Mode replaces ngrok while serving the same purpose for local testing

📸 Demo

A demo conversation includes:

Quarantine request

Approval and confirmation flow

Successful PowerShell execution

Status response in Slack

⚠️ Disclaimer

This project is intended for educational and lab environments only.
Do not deploy in production environments without proper security hardening and authorization controls.

👤 Author

Sampath Kumar
GitHub: https://github.com/Sampath1302

📡 Local Testing with ngrok (Optional)

During development, ngrok can be used to expose a local HTTP endpoint for Slack Event Subscriptions.

In this project, **Slack Socket Mode** is used as the primary local testing method, as it provides a secure outbound-only connection without requiring a public webhook. However, ngrok can be used as an alternative approach.

### Using ngrok for Local Testing

1. Install ngrok from: https://ngrok.com/
2. Start a local HTTP server for the bot
3. Run ngrok to expose the local port:


ngrok http 3000

4. Copy the generated HTTPS URL
5. Configure the Slack App **Event Subscriptions** Request URL:


https://<ngrok-id>.ngrok.io/slack/events

6. Verify the endpoint using Slack’s URL verification

### Note
Slack Socket Mode was selected for this project to simplify setup and improve security during local testing. Both approaches satisfy the requirement for local development without cloud deployment.
