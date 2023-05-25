const jwt = require('jsonwebtoken');
const blog = require("../models/blog.model");
const User = require("../models/user.model");

module.exports.dashboard_get = async (req, res) => {

    const token = req.cookies.jwt;
    const decoded = jwt.verify(token, 'moy sekret');
    let user = await User.findById(decoded.param).then(foundUser=>{
        return foundUser.email;
    });
    const author = user;

    blog.find({ author }).then((blogs) => {
        res.render("dashboard", { blogs });
    });
}
