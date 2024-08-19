const mongoose = require('mongoose'); // cấu hình đường dẫn đến thư viện quản lý db

// hàm kết nối db
async function connect() {
    // sử lý lỗi
    try {
        await mongoose.connect('mongodb://localhost:27017/nodejs_dev'); // kết nối đến db
        console.log('Db Mongodb:  mongodb://127.0.0.1:27017/nodejs_dev');
    }
    catch (error) {
        // nếu ko thể kết nối đc đến db
        console.log('no db');
    }
}
module.exports = { connect };