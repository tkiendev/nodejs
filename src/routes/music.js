const express = require('express');
const router = express.Router(); // cấu hình mặc định
const MusicControllers = require('../app/controllers/MusicControllers');

// cấu hình đường dẫn

router.delete('/:id', MusicControllers.deleteMusic);

router.post('/musicAdd', MusicControllers.musicAdd);
router.get('/:slug', MusicControllers.showMusic);
router.get('/', MusicControllers.musics);


module.exports = router; // xuất ra cấu hình router để dùng cho file index.js