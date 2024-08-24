const Course = require('../models/Course');
const { mongooseToObject } = require('../../util/mongo'); // sử lý lỗi của hsb
const { arrayMongooseToObject } = require('../../util/mongo');
class CourseControllers {
    // [GET] /course
    list(req, res, next) {
        // res.send('check error');
        Course.find({})
            .then((courses) => {
                res.render('course', {
                    courses: arrayMongooseToObject(courses), // lấy ra obj từ db
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

        // lấy 1 obj data từ db findOne({key : value})
        Course.findOne({ slug: req.params.slug })
            .then((course) => {
                res.render('course/showCourse', {
                    course: mongooseToObject(course)
                });
            })
            .catch(next);
    }

    // [GET] /course/create
    create(req, res, next) {
        res.render('course/create')
    }

    // [POST] /course/store
    store(req, res, next) {
        // res.json(req.body); // hiển thị dữ liệu ra màn hình
        const fomData = req.body; // khởi tạo 1 biến chứ giá trị đc tải lên từ phái người dùng
        fomData.img = `https://img.youtobe.com/vi/${fomData.videoID}/sddefault.jpg`;
        const course = new Course(req.body); // đưa dữ liệu về dạng obj

        course.save()
            .then(() => {
                // khi save chuyển hướng trang về trang course
                res.redirect('/me/stored/courses');
            })
            .catch((error) => {

            })
    }

    // [GET] /course/:_id/edit
    edit(req, res, next) {
        // res.send('course test:' + req.params.slug);

        // lấy 1 obj data từ db findOne({key : value})
        Course.findById({ _id: req.params.id }) // truy xuất db từ id
            .then((course) => {
                res.render('course/edit', {
                    course: mongooseToObject(course)
                });
            })
            .catch(next);
    }

    // [PUT] /course/:id
    update(req, res, next) {
        // Course.updateOne({ _id: req.params.id }, req.body)
        //     .then(() => {
        //         res.redirect('/me/stored/courses');
        //     })
        //     .catch(next)
        const courseId = req.params.id.trim();
        const updateData = req.body;

        Course.findByIdAndUpdate(courseId, updateData)
            .then(() => {
                // res.send(req.body)
                res.redirect('/me/stored/courses')
            })
            .catch(next);
    }

    // [DELETE] /course/:id
    destroy(req, res, next) {
        Course.delete({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    // [PATCH] /course/:id/restore

    // check fix bug
    restore(req, res, next) {
        // res.send(req.params.id);
        Course.restore({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    // [DELETE] /course/:id/ force
    forceDestroy(req, res, next) {
        Course.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }
}

module.exports = new CourseControllers // khởi tạo đối tượng NewsControllers