const Log = require('../models/Log');
const { Parser } = require('json2csv');

const exportLogs = async (req, res) => {
  try {
    const { format = 'json', level, date, contains } = req.query;

    const query = {};
    if (level) query.level = level.toUpperCase();
    if (date) query.timestamp = { $regex: date };
    if (contains) query.$or = [
      { message: { $regex: contains, $options: 'i' } },
      { request: { $regex: contains, $options: 'i' } },
    ];

    const logs = await Log.find(query);

    if (logs.length === 0) {
      return res.status(400).json({ error: 'No logs found for export' });
    }

    if (format === 'json') {
      res.setHeader('Content-Disposition', 'attachment; filename=logs.json');
      res.setHeader('Content-Type', 'application/json');
      return res.send(JSON.stringify(logs, null, 2));
    }

    if (format === 'csv') {
      const parser = new Parser({ fields: Object.keys(logs[0].toObject()) });
      const csv = parser.parse(logs.map(log => log.toObject()));
      res.setHeader('Content-Disposition', 'attachment; filename=logs.csv');
      res.setHeader('Content-Type', 'text/csv');
      return res.send(csv);
    }

    res.status(400);
    throw new Error('Unsupported format. Use "json" or "csv".');

  } catch (err) {
    next(err);
  }
};

module.exports = { exportLogs };