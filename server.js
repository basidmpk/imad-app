var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleOne={ title: `article one`,
            heading:`article-one`,
            content:` <p>  This is  article one. I am studing how to make webpage.</p> `
    
};
function createTemplate(data)
{
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var content=data.conttent;
var htmlTemplate=`<html>
<head>
    <title>
        s{title}
    </title>
    <link href="/ui/style.css" rel="stylesheet" />
        </head>
<body>
    <div class='container'>
   
 <div>
 <a href="/">Home</a>    
 </div>   
 <hr/>
 <h3>
     s{heading}
 </h3>
 <div>
     s{date}
 </div>
 <div>
   s{content}
 </div>

 </div>
 </body>
 </html>`;
return htmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one',function(req,res){
    res.send(createTemplate(article-one));
    
});

app.get('/article-two',function(req,res){
     res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/article-three',function(req,res){
     res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});

app.get('/ui/style.css', function (req, res) {
 res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/maim.js', function (req, res) {
 res.sendFile(path.join(__dirname, 'ui', 'main.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
