const fs = require('fs');
const readline = require('readline');

function parseApacheLog(line) {
  const regex = /^(\S+) - - \[(.*?)\] "(.*?)" (\d{3}) (\d+)$/;
  const match = line.match(regex);
  if (match) {
    return {
      ip: match[1],
      timestamp: match[2],
      request: match[3],
      status: parseInt(match[4]),
      size: parseInt(match[5]),
    };
  }
  return null;
}

async function parseLogFile(filePath) {
  const extension = filePath.split('.').pop();

  const logs = [];
  const rl = readline.createInterface({
    input: fs.createReadStream(filePath),
    crlfDelay: Infinity,
  });

  for await (const line of rl) {
    if (extension === 'json') {
      try {
        logs.push(JSON.parse(line));
      } catch (_) {
        // Skip malformed JSON lines
      }
    } else {
      const parsed = parseApacheLog(line);
      if (parsed) logs.push(parsed);
    }
  }

  return logs;
}

module.exports = { parseLogFile };
