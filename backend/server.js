require('dotenv').config();
const express = require('express');
const cors = require('cors');
const db = require('./models');

const app = express();
app.use(cors());
app.use(express.json());

const studentRoutes = require('./routes/student.routes');
app.use('/api/students', studentRoutes);

const PORT = process.env.PORT || 5000;

db.sequelize.sync().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
