// file cấu hình model trong mô hình MVC

const mongoose = require('mongoose');// cấu hình đường dẫn đến thư viện quản lý db

const Schema = mongoose.Schema; // lấy dữ liệu ra từ db dưới dạng obj

const slug = require('mongoose-slug-generator'); // thư viện tạo slug
mongoose.plugin(slug); // cấu hình mặc định của thư viện tao slug

const Music = new Schema({
    name: { type: String, maxLength: 100, default: '' },
    videoId: { type: String, maxLength: 100, default: '' },
    slug: { type: String, slug: 'name' },
}, { timestamps: true });

module.exports = mongoose.model('music', Music);