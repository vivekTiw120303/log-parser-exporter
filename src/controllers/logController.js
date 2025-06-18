const Log = require('../models/Log');

const getFilteredLogs = async (req, res) => {
  try {
    const { level, date, contains, page = 1, limit = 10 } = req.query;

    const query = {};

    if (level) query.level = level.toUpperCase();
    if (date) query.timestamp = { $regex: date };
    if (contains) query.$or = [
      { message: { $regex: contains, $options: 'i' } },
      { request: { $regex: contains, $options: 'i' } },
    ];

    const skip = (parseInt(page) - 1) * parseInt(limit);
    const total = await Log.countDocuments(query);
    const logs = await Log.find(query).skip(skip).limit(parseInt(limit));

    res.json({ total, page: parseInt(page), limit: parseInt(limit), data: logs });
  } catch (err) {
    next(err);
  }
};

const getLogStats = async (req, res, next) => {
  try{
    const totalLogs = await Log.countDocuments();
    
    const logsBylevel = await Log.aggregate([
      {
        $group: {
          _id: '$level',
          count: { $sum: 1 }
        }
      }
    ]);
    
    const logsPerDay = await Log.aggregate([
      {
        $group: {
          _id: { $substr: ['$timestamp', 0, 10] },
          count: { $sum: 1 },
        },
      },
      { $sort: { _id: 1 } }
    ]);

    res.json({
      totalLogs,
      logsBylevel,
      logsPerDay
    })

  }catch (err) {
    next(err);
  }
}

module.exports = { getFilteredLogs, getLogStats };