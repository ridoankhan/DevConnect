const express = require('express');
const router = express.Router();


// @route   GET /api/v1/posts/test
// @desc    get all the profiles
// @access  public
router.get('/test', (req, res) => {
    res.json({
        msg: 'profile are working'
    })
});

module.exports = router;