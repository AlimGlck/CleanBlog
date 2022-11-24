const Post = require('../models/Post');

exports.photoUpload =async (req, res) => {
    await Post.create(req.body);
    res.redirect('/');
  }

  exports.photoUpdate = async (req, res) => {
    await Post.findByIdAndUpdate(req.params.id, {
      title: req.body.title,
      detail: req.body.detail,
    });
    res.redirect('/post/' + req.params.id);
  }

  exports.photoDelete = async (req, res) => {
    await Post.findByIdAndRemove(req.params.id);
    res.redirect('/');
  }