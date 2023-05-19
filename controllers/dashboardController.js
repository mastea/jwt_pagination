const blog = require("../models/blog.model");

module.exports.dashboard_get = (req, res) => {
    blog.find().then((blogs) => {
        res.render("dashboard", { blogs });
    });
}

module.exports.addnew_get = (req, res) => {
    res.render('addnew');
}

module.exports.addnew_post = (req, res) => {
    res.render('addnew');
}