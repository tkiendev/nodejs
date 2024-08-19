const Courses = require('../models/Course');
const { mutipleMongooseToObject } = require('../../util/mongo'); // sử lý lỗi của hsb
class SiteControllers {

    // [GET] /search
    search(req, res) {
        res.render('search');
    }

    // [GET] /home
    home(req, res) {
        res.render('home');
    }
}

module.exports = new SiteControllers // khởi tạo đối tượng "SiteControllers"