const { Router, response } = require("express");
const axios = require("axios");
const { Comment } = require("../db");
const router = Router();
const { Op } = require("sequelize");

router.post("/", async (req,res) => {
    const {description} = req.body
    try {
        const createComment = await Comment.create({
            description
        })
        res.send(200).json(createComment)
    } catch (error) {
        console.log(error)
    }
})

module.exports = router;