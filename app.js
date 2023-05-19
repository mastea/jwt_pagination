const express = require('express');
const ejs = require('ejs');
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/authRoutes.js');
const homeRoutes = require('./routes/homeRoutes.js');
const dashboardRoutes = require('./routes/dashboardRoutes.js');
const { verifyAuth, checkUser } = require('./middleware/authMiddleware.js');

const mongoose = require('mongoose');
const db = require('./dbconnect');
db();

const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser());

app.set('view engine', 'ejs');
app.listen(port, (err)=>{
    err ? console.log(err) : console.log(`Server running on port ${port}`);
});

app.get('*', checkUser);
app.use(authRoutes);
app.use(homeRoutes);
app.use(dashboardRoutes);


// нужно менять input type из text в email на
//  страницах вход/зарегистрироваться.
// нужно добавить http status code для каждого res.status()
// нужно сделать обработчик ошибок, который выведет
//  информативное сообщение при неправильном.
// нужно добавить файл .dotenv
