const Courses = require('../models/Course');
const { mongooseToObject } = require('../../util/mongo'); // sử lý lỗi của hsb
const { mutipleMongooseToObject } = require('../../util/mongo');
class CourseControllers {
    // [GET] /course
    course(req, res, next) {
        // res.send('check error');
        Courses.find({})
            .then((Courses) => {
                res.render('course', {
                    Courses: mutipleMongooseToObject(Courses) // lấy ra obj từ db
                });
            })
            .catch((next) => {
                // next(err);
            });
        // res.render('home');
    }

    // [GET] /course/:slug
    show(req, res, next) {
        // res.send('course test:' + req.params.slug);

        // lấy 1 data từ db
        Courses.findOne({ slug: req.params.slug })
            .then((course) => {
                res.render('course/show', {
                    course: mongooseToObject(course)
                });
            })
            .catch(next);
    }
}

module.exports = new CourseControllers // khởi tạo đối tượng NewsControllers