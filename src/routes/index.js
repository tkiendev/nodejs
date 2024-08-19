const newRouter = require('./news');
const siteRouter = require('./site');
const coursesRouter = require('./courses');

function route(app) {
    // 2. trọc vào "resources/views/file.hbs" để lẫy data từ các "file.hbs" gán lại cho "main.hbs"
    // app.get('/home', (req, res) => {
    //     res.render('home');
    // });
    // viết theo kiểu cũ
    // app.get('/news', (req, res) => {
    //     res.render('news');
    // });

    // viết  theo mô hình MVC
    app.use('/news', newRouter);
    app.use('/course', coursesRouter);
    app.use('/', siteRouter);
}

module.exports = route;