const jwt = require('jsonwebtoken');
const User = require('../models/user.model');

const verifyAuth = (req, res, next) => {
    const token = req.cookies.jwt;
    if (token) {
        jwt.verify(token, 'moy sekret', (err, decoded)=>{
            if (err) {
                console.log(err);
                res.redirect('/login');
            } else {
                console.log(decoded);
                next();
            }
        });
    } else {
        res.redirect('/login');
    }
}


const checkUser = (req, res, next) => {
    const token = req.cookies.jwt;
    if (token) {
        jwt.verify(token, 'moy sekret', async (err, decoded)=>{
            if (err) {
                console.log(err);
                res.locals.user = null;
                next();
            } else {
                // console.log(decoded);
                let user = await User.findById(decoded.param);
                res.locals.user = user;
                next();
            }
        });
    } else {
        res.locals.user = null;
        next();
    }
}
module.exports = { verifyAuth, checkUser };

