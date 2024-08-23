const express = require('express');
const router = express.Router(); // cấu hình mặc định

const CourseControllers = require('../app/controllers/CourseController'); // cấu hình đường dẫn đến file "NewController"
// newsControllers.index // lấy ra phương thức index trong đối tượng "newsControllers"

// :name truyền giá trị params dưới dạng key:value
router.put('/:id', CourseControllers.update); // sửa
router.delete('/:id', CourseControllers.delete); // xóa
router.patch('/:id/restore', CourseControllers.restore); // khôi phục

router.post('/store', CourseControllers.store);
router.get('/create', CourseControllers.create);
router.get('/:id/edit', CourseControllers.edit);
router.get('/:slug', CourseControllers.showCourse);
router.get('/', CourseControllers.course);
module.exports = router;