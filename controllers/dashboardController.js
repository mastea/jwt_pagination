const jwt = require('jsonwebtoken');
const Blog = require("../models/blog.model");
const User = require("../models/user.model");

module.exports.dashboard_get = async (req, res) => {
    const token = req.cookies.jwt;
    const decoded = jwt.verify(token, 'moy sekret');
    let user = await User.findById(decoded.param).then(foundUser=>{
        return foundUser.email;
    });
    const author = user;

    Blog.find({ author }).then((blogs) => {
        res.render("dashboard", { blogs });
    });
}

module.exports.dashboard_delete = async (req, res) => {
    const blogId = req.params._id;
    await Blog.deleteOne({ _id: blogId });
    res.send('done');
 }

module.exports.edit_get = async (req, res) => {
    const blogId = req.params._id;
    const foundBlog = await Blog.findOne({ _id: blogId });
    res.render("edit", { title: foundBlog.title, content: foundBlog.content, id: foundBlog._id });
}

module.exports.edit_put = async (req, res) => {
    
    const blogId = req.params._id;
    const { title, content } = req.body;
    try {
        const text = await Blog.updateOne({ _id: blogId }, {$set: { title, content }});
        res.json(text);
    } catch (error) {
        console.log(error);
    }
 }