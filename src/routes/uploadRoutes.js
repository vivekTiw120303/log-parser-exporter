const express = require('express');
const router = express.Router();
const multer = require('multer');
const { handleUpload } = require('../controllers/uploadController');
const swaggerJSDoc = require('swagger-jsdoc');
const protect = require('../middlewares/authMiddleware');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({ storage });

/**
 * @swagger
 * /api/upload:
 *  post:
 *   summary: Upload a log file
 *   consumes:
 *     - multipart/form-data
 *   parameters:
 *     - in: formData
 *       name: logFile
 *       type: file
 *       required: true
 *       description: The log file to upload
 *   responses:
 *     200:
 *       description: File uploaded successfully
 */

router.post('/', protect, upload.single('logFile'), handleUpload);

module.exports = router;