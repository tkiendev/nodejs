class NewsControllers {
    // [GET] /news
    news(req, res) {
        res.render('news');
    }

    // [GET] /news/slog
    show(req, res) {
        res.send('slug');
    }
}

module.exports = new NewsControllers // khởi tạo đối tượng NewsControllers