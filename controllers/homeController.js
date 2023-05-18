const blog = require("../models/blog.model");

module.exports.home_get = (req, res) => {
  const page = req.query.p || 1;
  const limit = 4;
  blog
    .paginate({}, { offset: (page - 1) * limit, limit: limit })
    .then((blogs) => {
      res.render("home", { blogs });
    });
};

// вывести все данные из бд в одну страницу
// module.exports.home_get = (req, res) => {
//   blog.find().then((blogs) => {
//     res.render("home", { blogs });
//   });
// };
