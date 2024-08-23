const Course = require('../models/Course');
const { mongooseToObject } = require('../../util/mongo'); // sử lý lỗi của hsb
const { arrayMongooseToObject } = require('../../util/mongo');
class MeControllers {

    // [GET] /me/sorted/courses
    sortedCourses(req, res, next) {
        Course.find({})
            .then((courses) => {
                res.render('me/sorted-courses', {
                    courses: arrayMongooseToObject(courses)
                });
            })
            .catch(next)
    }

    // [GET] /me/trash/courses
    trashCourses(req, res, next) {
        Course.findDeleted()
            .then((courses) => {
                res.render('me/trash-courses', {
                    courses: arrayMongooseToObject(courses)
                });
            })
            .catch(next)
    }
}

module.exports = new MeControllers // khởi tạo đối tượng NewsControllers