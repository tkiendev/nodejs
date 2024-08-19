const express = require('express');
const router = express.Router(); // cấu hình mặc định

const newsControllers = require('../app/controllers/NewController'); // cấu hình đường dẫn đến file "NewController"

// newsControllers.index // lấy ra phương thức index trong đối tượng "newsControllers"
router.get('/:slug', newsControllers.show);
router.get('/', newsControllers.news);

module.exports = router;