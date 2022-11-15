const { Router, response } = require("express");
const axios = require("axios");
const { Category } = require("../db");
const router = Router();
const { Op } = require("sequelize");

router.post("/", async (req,res) => {
    const {name} = req.body
    try {
        if(name){
            const categoryCreate = await Category.create({
                name
            })
            res.status(200).json(categoryCreate)
        }
    } catch (error) {
        console.log(error);
    }
})

router.get("/", async (req,res) => {
    let categories = [];
    return Category.findAll()
    .then((e) => {

    
    e.forEach((e) => categories.push(e.name))
    res.send(categories);
    })
    .catch((error) => {
        console.log(error);
    })
})

module.exports = router;