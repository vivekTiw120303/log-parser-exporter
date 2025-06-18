const fs = require('fs');
const path = require('path');
const { parseLogFile } = require('../utils/logParser');
const { addLogs } = require('../utils/logStore');
const Log = require('../models/Log'); 

const handleUpload = async (req, res) => {
  try {
    if (!req.file) {
      res.status(400);
      throw new Error('No file uploaded');
    }

    const filePath = path.join(__dirname, '../../', req.file.path);
    const parsedLogs = await parseLogFile(filePath);
    
    // console.log('Parsed Logs:', parsedLogs);
    await Log.insertMany(parsedLogs);
    addLogs(parsedLogs);

    res.status(200).json({
      message: 'File uploaded and parsed successfully',
      total: parsedLogs.length,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = { handleUpload };
