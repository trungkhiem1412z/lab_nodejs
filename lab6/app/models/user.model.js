const db = require('../config/connectDB');

// Tạo tài khoản user
const create_account = (data, callback) => {
  let sql = 'INSERT INTO (username, password, ho, ten, email, gioitinh, detail) VALUES (?, ?, ?, ?, ?, ?, ?)';
  const data = [data.username, data.password, data.ho, data.ten, data.email, data.gioitinh, data.detail];
};

module.exports = {
  create_account,
};
