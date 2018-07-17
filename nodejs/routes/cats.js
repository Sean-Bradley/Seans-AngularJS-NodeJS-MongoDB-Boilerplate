import express from 'express'
const router = express.Router();

import Cat from '../models/cat.js';

router.route('/cats')
    .post(function (req, res) {
        let cat = new Cat();
        cat.name = req.body.name;
        cat.lastFedDate = Date.now();
        cat.save(function (err) {
            if (err)
                res.send(err);

            res.json({ message: 'Cat created!' });
        });
    })
    .get(function (req, res) {
        Cat.find(function (err, cats) {
            if (err)
                res.send(err);

            res.json(cats);
        });
    });

router.route('/cats/:_id')
    .put(function (req, res) {
        Cat.findByIdAndUpdate(req.params._id, req.body, function (err, post) {
            if (err)
                res.send(err);
            res.json(post);
        });
    })
    .delete(function (req, res) {
        Cat.remove({
            _id: req.params._id
        }, function (err, bear) {
            if (err)
                res.send(err);
            res.json({ message: 'Cat deleted' });
        });
    });

// router.route('/').get(function (req, res) {
//     console.dir(req);
// });

//export default router;
module.exports = router;