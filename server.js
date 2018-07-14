import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'

import mongoose from 'mongoose'
mongoose.connect('mongodb://localhost:27017/seanwasere', { useNewUrlParser: true });

var Cat = require('./models/cat.js');

var app = express();
var port = process.env.PORT || 8080; 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(express.static(path.join(__dirname, 'www')));

var router = express.Router();
router.route('/cats')
    .post(function (req, res) {
        var cat = new Cat();
        cat.name = req.body.name;
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
        console.dir(req.body);
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
            res.json({ message: 'Successfully deleted' });
        });
    });

app.use('/api', router);

app.listen(port);

console.log('nodejs server started : \nhttp://127.0.0.1:' + port);

