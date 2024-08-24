const express = require('express');
const router = express.Router(); // cấu hình mặc định

const MeControllers = require('../app/controllers/MeController'); // cấu hình đường dẫn đến file "NewController"
// newsControllers.index // lấy ra phương thức index trong đối tượng "newsControllers"

// :name truyền giá trị params dưới dạng key:value
router.get('/stored/courses', MeControllers.sortedCourses); // reder danh sách khóa học trên trang
router.get('/trash/courses', MeControllers.trashCourses);  // render ra các khóa học trong vùng xóa ảo


module.exports = router; 