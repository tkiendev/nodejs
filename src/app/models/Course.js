// file cấu hình model trong mô hình MVC

const mongoose = require('mongoose');// cấu hình đường dẫn đến thư viện quản lý db

const Schema = mongoose.Schema; // lấy dữ liệu ra từ db dưới dạng obj

const mongooseDelete = require('mongoose-delete'); // thư viện hỗ trợ soft delete 'mongoose-delete'

const slug = require('mongoose-slug-generator'); // thư viện tạo slug

const Course = new Schema({
    name: { type: String, maxLength: 100, default: '', required: true, },
    description: { type: String, default: '', required: true, },
    img: { type: String, default: '' },
    slug: { type: String, slug: 'name' }, // thêm slug vào đối tượng db
    videoID: { type: String, default: '', },
}, { timestamps: true, });

mongoose.plugin(slug); // cấu hình mặc định của thư viện tao slug
Course.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all',
}); // cấu hình xóa mền thư viện 'mongoose-Delete'

module.exports = mongoose.model('Course', Course);


