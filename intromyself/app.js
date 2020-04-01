var express = require('express');
var app = express();
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'harry@jet-link.com.tw',
        pass: 'jetlink123'
    }
});
app.set('view engine', 'ejs');//讓程式可以使用EJS模板(後端連到前端)
app.use(express.static(__dirname));   //讓ejs可以link css

app.get('/', function (req, res,next) {
    return res.render('index');//開啟D:\jetlink\try\views下的index.ejs
});

app.get('/born', function (req, res,next) {
    return res.render('born');
});

app.get('/school', function (req, res,next) {
    return res.render('school');
});

app.get('/work', function (req, res,next) {
    return res.render('work');
});

app.get('/dream', function (req, res,next) {
    return res.render('dream');
});

app.get('/message', function (req, res,next) {
    return res.render('message');
});

app.get('/message/send', function (req, res,next) {
    var name = req.query.account;
    var mail = req.query.mail;
    console.log(req.query.inputtext)
    var text = req.query.inputtext;
    var options = {
        from: mail,
        //收件者
        to: 'h0921524434@gmail.com', 
        //主旨
        subject: name+'的留言', // Subject line
        //純文字
        text: text
    };
    transporter.sendMail(options, function(error, info){
        if(error){
            console.log(error);
        }else{
            console.log('訊息發送: ' + info.response);
        }
    });
    return res.render('index');
});
module.exports = app;