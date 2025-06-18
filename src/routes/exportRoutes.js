const express = require('express');
const { exportLogs } = require('../controllers/exportController');
const router = express.Router();

/**
 * @swagger
 * /api/export:
 *   get:
 *     summary: Export logs
 *     description: Export logs as JSON or CSV with optional filters.
 *     parameters:
 *       - in: query
 *         name: format
 *         schema:
 *           type: string
 *           enum: [json, csv]
 *         required: true
 *         description: Export format (json or csv)
 *       - in: query
 *         name: level
 *         schema:
 *           type: string
 *         description: Filter by log level
 *       - in: query
 *         name: date
 *         schema:
 *           type: string
 *         description: Filter by timestamp date
 *       - in: query
 *         name: contains
 *         schema:
 *           type: string
 *         description: Keyword in message or request
 *     responses:
 *       200:
 *         description: Exported logs as a downloadable file
 */


router.get('/', exportLogs);

module.exports = router;