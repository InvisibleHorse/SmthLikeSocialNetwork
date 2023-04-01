const express = require("express")
const mongoose = require ("mongoose")
const bodyParser = require("body-parser")
const ejs = require("ejs")
const cors = require('cors');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.use(cors({
    origin: 'http://localhost:3000'
}));

mongoose.connect("mongodb://127.0.0.1:27017/users");

const usersSchema = {
    name: String,
    img: String,
    from: String,
    born: String,
    career: String, 
    followed:Boolean
};
 
const User = mongoose.model("User", usersSchema); 

app.route ("/users") 
.get(async function(req, res){
    try {
        const foundusers = await User.find({}).then(value => res.send(value));

    } catch(error) {
        res.send(error)
    }
})
.post(function (req, res){

    const newUser = new User({
        name: req.body.name,
        img: req.body.img,
        from: req.body.from,
        born: req.body.born,
        career: req.body.career, 
        followed:req.body.followed
    }); 
    
    newUser.save();
    })
.delete(function(req, res){
    User.deleteMany().then(value => res.send(value));
});


app.listen (3001, function(){
    console.log("Server started on port 3000");
});