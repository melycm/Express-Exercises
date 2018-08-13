var express = require("express");
var app = express();

app.use(express.static('public'));

// 1
app.get('/', function(request, response, next){
    response.send("Hello world!"); 
    next();
})

// 2
app.get('/cats', function(request, response, next){
    response.send("Meow"); 
    next();
})

app.get('/dogs', function(request, response, next){
    response.send("Woof"); 
    next();
})

app.get('/cats_and_dogs', function(request, response, next){
    response.send("Living together"); 
    next();
})

// 3
app.get('/greet/:name', function(request, response){
    var name = request.param("name");

    response.send("Hello" + " " + name + "!")    
})

// 4
app.get('/year', function(request, response){
    var age = request.query.age || age;
    var yearsNow = 2018 - age

    response.send("You were born in " + yearsNow);
})   

var server = app.listen(3000, () => {
    console.log("running on port 3000")
})