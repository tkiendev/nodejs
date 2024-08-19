const express = require('express');
const router = express.Router(); // cấu hình mặc định

const SiteControllers = require('../app/controllers/SiteController'); // cấu hình đường dẫn đến file "NewController"

// lấy ra phương thức index trong đối tượng "newsControllers"
router.get('/search', SiteControllers.search);
router.get('/', SiteControllers.home);
module.exports = router;