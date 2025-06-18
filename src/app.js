const express = require('express');
const cores = require('cors');
const dotenv = require('dotenv');
const uploadRoutes = require('./routes/uploadRoutes');
const logROutes = require('./routes/logRoutes');
const exportRoutes = require('./routes/exportRoutes');
const connectDB = require('./config/db');
const { connect } = require('mongoose');
const errorHandler = require('./middlewares/errorMiddleware');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./config/swagger');
const authRoutes = require('./routes/authRoutes');

require('dotenv').config();
const app = express();

app.use(cores());
app.use(express.json());
app.use('/api/upload/', uploadRoutes);
app.use('/api/logs/', logROutes);
app.use('/api/export/', exportRoutes);
app.use('/api/auth/', authRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on port ${PORT}`); 
});