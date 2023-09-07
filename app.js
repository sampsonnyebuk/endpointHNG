const express = require('express');
const moment = require('moment-timezone');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/info', (req, res) => {
  // Slack name
  const slackName = req.query.slack_name || 'nyebuk inyang';

  // Current day of the week
  const currentDay = moment().tz('UTC').format('dddd');

  // Current UTC time
  const utcTime = moment().tz('UTC').format('YYYY-MM-DDTHH:mm:ss[Z]');

  // Track
  const track = 'Backend';

  // GitHub username and repository name
  const githubUsername = 'sampsonnyebuk';
  const repositoryName = 'endpoint-project';

  // GitHub URL of the file being run
  const githubFileUrl = `https://github.com/${githubUsername}/${repositoryName}/blob/main/app.js`;

  // GitHub URL of the full source code
  const githubRipoUrl = `https://github.com/${githubUsername}/${repositoryName}`;

  const data = {
    slack_name: slackName,
    current_day: currentDay,
    utc_time: utcTime,
    track: track,
    github_file_Url: githubFileUrl,
    github_ripo_url: githubRipoUrl,
    status_code: 200,
  };

  res.status(200).json(data);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
