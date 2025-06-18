const express = require('express');
const { getFilteredLogs } = require('../controllers/logController');
const router = express.Router();
const { getLogStats } = require('../controllers/logController');
const protect = require('../middlewares/authMiddleware');

/**
 * @swagger
 * /api/logs/stats:
 *   get:
 *     summary: Get log statistics
 *     description: Returns total logs, counts per level, and logs per day.
 *     responses:
 *       200:
 *         description: Log stats returned
 */
router.get('/stats', protect, getLogStats);

/**
 * @swagger
 * /api/logs:
 *   get:
 *     summary: Get filtered logs
 *     description: Retrieve logs from MongoDB with filtering, search, and pagination.
 *     parameters:
 *       - in: query
 *         name: level
 *         schema:
 *           type: string
 *         description: Log level (INFO, ERROR, WARN, etc.)
 *       - in: query
 *         name: date
 *         schema:
 *           type: string
 *         description: Filter logs by date (e.g., 2025-06-17)
 *       - in: query
 *         name: contains
 *         schema:
 *           type: string
 *         description: Filter logs by keyword in message or request
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         description: Page number for pagination
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *         description: Number of logs per page
 *     responses:
 *       200:
 *         description: List of logs with pagination info
 */
router.get('/', getFilteredLogs);

module.exports = router;