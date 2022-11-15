const { Router } = require('express');
// Importar todos los routers;
const post = require('./post');
const user = require('./user')
const category = require('./category')
const comment = require('./comment')

const router = Router();

router.use('/post', post);
router.use('/user', user);
router.use('/category' , category)
router.use('/comment' , comment)

module.exports = router;