// file cấu hình model trong mô hình MVC

const mongoose = require('mongoose');// cấu hình đường dẫn đến thư viện quản lý db

const Schema = mongoose.Schema; // lấy dữ liệu ra từ db dưới dạng obj

const Course = new Schema({
    name: { type: String, maxLength: 100, default: '' },
    description: { type: String, maxLength: 255, default: '' },
    img: { type: String, default: '' },
    // createdAt: { type: Data, default: Data.now },
    // updateAT: { type: Data, default: Data.now },
});

module.exports = mongoose.model('Course', Course);