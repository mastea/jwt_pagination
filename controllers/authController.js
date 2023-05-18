const User = require('../models/user.model');
const jwt = require('jsonwebtoken');

const maxAge = 3 * 24 * 60 * 60;
const createToken = (param) =>{
    return jwt.sign({param}, 'moy sekret', {
        expiresIn: maxAge
    });
}

module.exports.signup_get = (req, res)=>{
    res.render('signup');
}

module.exports.login_get = (req, res)=>{
    res.render('login');
}

module.exports.signup_post = async (req, res)=>{
    const { email, password } = req.body;
    
    try {
        const user = await User.create({ email, password });
        const token = createToken(user._id);
        res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
        res.json({user: user._id});
        
    } catch (error) {
        console.log(error);
        res.send('Error, user not created');
    }
}

module.exports.login_post = async (req, res)=>{
    const { email, password } = req.body;

    try {
        const user = await User.login(email, password);
        const token = createToken(user._id);
        res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
        res.json({user: user._id});
        
    } catch (error) {
        console.log(error);
        res.send('Can not login');
    }
}

module.exports.logout_get = (req, res)=>{
    res.cookie('jwt', '', { maxAge: 1 });
    res.redirect('/login');
}