const path = require('path');
const express = require('express');
const morgan = require('morgan'); // require thư viện "morgan"
const engines = require('express-handlebars').engine; // require thư viện "Template engine"

const route = require('./routes') // cấu hình các file để lấy các đường dẫn
const db = require('./config/db'); // cấu hình db

const methodOverride = require('method-override'); // cấu hình đến thư viện để thay đổi method

// connect to db
db.connect();

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public'))); // cấu hình đưường dẫn đến thư mục "public"
// từ lúc cấu hình đường dẫn thì sẽ sử dụng đc các file trong thư mục 

// thiết lập để nhận dữ liệu từ người dùng với phương thức post
app.use(express.urlencoded(
    { extended: true }
));
app.use(express.json());

// method
app.use(methodOverride('_method'));

// HTTP logger
app.use(morgan('combined')); // thư viện morgan

// Template engine
app.engine('hbs', engines({
    extname: '.hbs',
    // tọa hàm trên thư viện 'express-handlebars'
    helpers: {
        sum: (a, b) => a + b
    }
}));
app.set('view engine', 'hbs'); // sử dụng "view engine"
app.set('views', path.join(__dirname, 'resources', 'views')); // gọi đường dẫn đến thư mục "resources/views"

// check đường dẫn thư mục
// console.log(path.join("PAST:", __dirname, 'resources/views'));
// 1. đầu tiên sẽ trọc vào "resources/views/layouts/mani.hbs" để lẫy data từ file "main.hbs"

// run app
route(app);
app.listen(port, () => {
    console.log('\nWeb Server Run:')
    console.log(`App Web:  http://localhost:${port}`);
});