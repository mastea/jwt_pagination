const blog = require("../models/blog.model");

module.exports.addnew_get = (req, res) => {
    res.render('addnew');
}

module.exports.addnew_post = async (req, res) => {
    const { title, content, author } = req.body;
    const date = new Date();

    try {
       const text = await blog.create({ author, date, title, content });
       res.json(text);
        
    } catch (error) {
        console.log(error);
    }
}