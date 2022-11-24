const express = require('express');
const mongoose = require('mongoose');
const ejs = require('ejs');
const methodOverride = require('method-override');

const path = require('path');

const Post = require('./models/Post');
const pageController = require('./controllers/pageController');
const postController = require('./controllers/postController');

const app = express();

mongoose.connect('mongodb://localhost/cleanblog-test-db');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  methodOverride('_method', {
    methods: ['POST', 'GET'],
  })
);

app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
  const posts = await Post.find({});
  res.render('index', {
    posts,
  });
});



app.get('/about', pageController.getAboutPage);
app.get('/add_post', pageController.getAddingPage);
app.get('/post/:id', pageController.getPostPage);
app.get('/post/edit/:id', pageController.getEditPage );

app.post('/post', postController.photoUpload);
app.put('/post/:id', postController.photoUpdate);
app.delete('/post/:id', postController.photoDelete);




const port = 5000;
app.listen(port, () => {
  console.log(`Server ${port} portunda başlatıldı`);
});
