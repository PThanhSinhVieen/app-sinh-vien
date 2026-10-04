const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

// Route 1: Kiểm tra Server chạy trên Vercel
app.get('/', (req, res) => {
  res.json({
    status: 'Success',
    message: '🚀 Server Node.js Express đang chạy thành công trên Vercel!',
    time: new Date().toISOString()
  });
});

// Route 2: Kiểm tra kết nối MongoDB Atlas
app.get('/api/test-db', async (req, res) => {
  try {
    const mongoUri = process.env.MONGO_URI;
    if (!mongoUri) {
      return res.status(400).json({
        status: 'Error',
        message: 'Chưa cấu hình biến môi trường MONGO_URI trên Vercel!'
      });
    }

    if (mongoose.connection.readyState !== 1) {
      await mongoose.connect(mongoUri);
    }

    res.json({
      status: 'Success',
      message: '✅ Kết nối tới MongoDB Atlas thành công!'
    });
  } catch (error) {
    res.status(500).json({
      status: 'Error',
      message: '❌ Lỗi kết nối MongoDB',
      error: error.message
    });
  }
});

// Chạy ở môi trường Local
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server local đang chạy tại http://localhost:${PORT}`);
});

module.exports = app;