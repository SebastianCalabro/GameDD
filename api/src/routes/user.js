const { Router, response } = require("express");
const axios = require("axios")
const {User} = require("../db");
const router = Router();
const { Op } = require("sequelize");

router.post("/", async (req,res) => {
    const {name, lastname, nickname, profpic, email,password} = req.body;
    try {
        if(name && lastname && nickname && email && password){
            const createUser = await User.create({
                name,
                lastname,
                nickname,
                email,
                password
            })
            res.status(200).json(createUser)
        }
    } catch (error) {
        console.log(error);
    }
})

router.get("/", async (req, res) => {
    let users = [];
    return User.findAll()
      .then((e) => {
        e.forEach((e) => users.push(e.nickname));
        res.send(users);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  router.get("/:nickname", async (req, res) => {
    try {
        const {nickname} = req.params;
        const user = await User.findByPk(nickname);
        res.json(user ? user : []);
    } catch (error) {
        console.log(error);
    }
})




module.exports = router;