const express = require('express');
const router = express.Router();
const { index, store } = require("../controllers/user.controller")


router.get('/',index)

router.post('/save',store)


module.exports = router;
