const express = require('express');
const router = express.Router(); // cấu hình mặc định

const CourseControllers = require('../app/controllers/CourseController'); // cấu hình đường dẫn đến file "NewController"
// newsControllers.index // lấy ra phương thức index trong đối tượng "newsControllers"

// :name truyền giá trị params dưới dạng key:value
router.get('/:slug', CourseControllers.show);
router.get('/', CourseControllers.course);
module.exports = router;