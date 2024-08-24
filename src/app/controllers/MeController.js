const Course = require('../models/Course');
const { mongooseToObject } = require('../../util/mongo'); // sử lý lỗi của hsb
const { arrayMongooseToObject } = require('../../util/mongo');
class MeControllers {

    // [GET] /me/sorted/courses
    sortedCourses(req, res, next) {
        // xử lý bất đồng bộ
        Promise.all([Course.find({}), Course.countDocumentsDeleted()])
            .then(([courses, deleteCount]) => {
                res.render('me/sorted-courses', {
                    courses: arrayMongooseToObject(courses),
                    deleteCount,
                });
            })
            .catch(next);

        // // đếm các khóa học trong thùng rác
        // Course.countDocumentsDeleted()
        //     .then((deleteCount) => {
        //         console.log("===check số lượng đã xóa===" + deleteCount);
        //     })
        //     .catch(next)

        // // reder danh sách khóa học trên trang /me
        // Course.find({})
        //     .then((courses) => {
        //         res.render('me/sorted-courses', {
        //             courses: arrayMongooseToObject(courses)
        //         });
        //     })
        //     .catch(next)
    }

    // [GET] /me/trash/courses

    // render ra các khóa học trong vùng xóa ảo
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