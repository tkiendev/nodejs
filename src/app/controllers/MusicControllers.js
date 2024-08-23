const { mongooseToObject } = require('../../util/mongo'); // sử lý lỗi của hsb
const { arrayMongooseToObject } = require('../../util/mongo');
const Music = require('../models/Music');

class MusicsControllers {
    // [GET] /musics
    musics(req, res, next) {
        Music.find({})
            .then((musics) => {
                res.render('musics', {
                    musics: arrayMongooseToObject(musics),
                });
            })
            .catch((next) => {
                // next(err);
            });
    }

    // [GET] /musics/:slug
    showMusic(req, res, next) {
        Music.findOne({ slug: req.params.slug })
            .then((music) => {
                res.render('music/showMusic', {
                    music: mongooseToObject(music)
                })
            })
            .catch(next)
    }

    // [POST] /musics/:id
    musicAdd(req, res, next) {
        // res.json(req.body);
        const formMusic = req.body;
        // formMusic.slug = formMusic.videoId;
        const addMusic = new Music(formMusic);
        addMusic.save()
            .then(() => {
                // chuyển hướng về trang /music
                res.redirect('/music');
            })
            .catch(next)
    }

    // [DELETE] /musics/:id
    deleteMusic(req, res, next) {
        Music.deleteOne({ _id: req.params.id }, req.body)
            .then(() => {
                // chuyển hướng về trang /music
                res.redirect('back');
            })
            .catch(next)
    }
}

module.exports = new MusicsControllers;