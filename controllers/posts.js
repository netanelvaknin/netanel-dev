const Post = require("../models/posts");
const Newsletter = require("../models/newsletters");
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const addPost = async (req, res) => {
  const post = req.body;

  try {
    const doc = await Post.create(post);
    if (doc) {
      res.status(200).send("Success!");
    }
  } catch (e) {
    res.status(400).send("Something is wrong with your request");
  }
  
  // const post = req.body;

  // Newsletter.find()
  //   .then((users) => {
  //     if (users) {
  //       const emails = users.map((user) => {
  //         return user.email;
  //       });

  //       return emails;
  //     }
  //   })
  //   .then((emails) => {
  //     Post.create(post).then((post) => {
  //       if (post) {
  //         res.status(200).send("Success!");
  //       }
  //     });

  //     // Send emails to :
  //     const msg = {
  //       from: "easydevdotdev@gmail.com",
  //       to: emails,
  //       template_id: 'd-6c3d464c4c3c472b8cb2aa37be7236ec',
  //       dynamicTemplateData: {
  //         subject: 'עדכון על מאמר חדש',
  //       },
  //       subject: "Hello world",
  //       text: "Hello plain world!",
  //       html: "<p>Hello HTML world!</p>",
  //     };

  //     sgMail.sendMultiple(msg).then((info) => {
  //       console.log('Emails sent successfully');
  //     }).catch((err) => {
  //       console.log('*********** ERROR SENDING EMAILS ********* ', err);
  //     })
  //   })
  //   .catch(() => {
  //     res.status(400).send("Something is wrong with your request");
  //   });
};

const deletePost = async (req, res) => {
  try {
    const doc = await Post.findOneAndDelete({ _id: req.body._id });
    if (doc) {
      res.status(200).send("Success!");
    } else {
      res.status(404).send(`Cant find user with id: ${req.body._id}`);
    }
  } catch {
    res.status(400).send("Please provide _id");
  }
};

const updatePost = async (req, res) => {
  try {
    const doc = await Post.findOneAndUpdate(
      { _id: req.body._id },
      { ...req.body }
    );

    if (doc) {
      res.status(200).send("Success!");
    } else {
      res.status(404).send(`Cant find user with id : ${req.body._id}`);
    }
  } catch {
    res.status(400).send("Please provide _id");
  }
};

const getPosts = async (req, res) => {
  try {
    let posts;
    if (req.params.id) {
      posts = await Post.find({ _id: req.params.id });
    } else {
      posts = await Post.find();
    }

    res.status(200).send(posts);
  } catch (e) {
    console.log("ERROR: ", e);
    res.status(400).send("Something went wrong");
  }
};

const getRecentPosts = async (req, res) => {
  try {
    const recentPosts = await Post.find().sort({ $natural: -1 }).limit(3);
    if (recentPosts) {
      res.send(recentPosts);
    }
  } catch (e) {
    res.status(400).send(e);
  }
};

module.exports = {
  addPost,
  deletePost,
  updatePost,
  getPosts,
  getRecentPosts,
};
