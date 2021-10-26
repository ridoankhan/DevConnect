const express = require('express');
const router = express.Router();


// @route   GET /api/v1/posts/test
// @desc    get all the posts
// @access  public
router.get('/test', (req, res) => {
    res.json({
        msg: 'posts are working'
    })
});

module.exports = router;