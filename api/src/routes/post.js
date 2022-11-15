const { Router, response } = require("express");
const axios = require("axios");
const { Post, Comment } = require("../db");
const router = Router();
const { Op } = require("sequelize");

router.post("/", async (req, res) => {
  const { title, image, description } = req.body;
  try {
    if (title && description) {
      const createPost = await Post.create({
        title,
        description,
      });
      res.status(200).json(createPost);
    } else {
      res.send("Faltan parametros");
    }
  } catch (error) {
    console.log(error);
  }
});

router.get("/", async (req, res) => {
  let posts = [];
  return Post.findAll()
    .then((e) => {
      e.forEach((e) => posts.push(e));
      res.send(posts);
      description
    })
    .catch((error) => {
      console.log(error);
    });
    
});

router.get("/:id", async (req, res) => {
    try {
        const {id} = req.params;
        const post = await Post.findByPk(id);
        res.json(post ? post : []);
    } catch (error) {
        console.log(error);
    }
})

module.exports = router;
