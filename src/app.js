const express = require( 'express' );
const path= require( "path" ) ;
require("./db/conn")
const hbs  = require('hbs');
const User = require("./models/usermessage");

const app=express();
const port=process.env.PORT || 3000;
//setting tha path
const staticpath= path.join(__dirname,"../public");
const templatespath= path.join(__dirname,"../templates/views");
const partialspath= path.join(__dirname,"../templates/partials");


// middleware
app.use('/css',express.static(path.join(__dirname,'../node_modules/bootstrap/dist/css')));
app.use('/js',express.static(path.join(__dirname,'../node_modules/bootstrap/dist/js')));
app.use('/jq',express.static(path.join(__dirname,'../node_modules/jquery/dist')));

app.use(express.urlencoded({extended:false}))
 app.use(express.static(staticpath));
 app.set("view engine","hbs");
app.set("views",templatespath);
hbs.registerPartials(partialspath);





app.get("/", (req, res) => {
    res.render( "index" )
});

// app.get("/contact", (req,res)=>{    
//     res.render( "Contact" );
// });

app.post("/contact",async(req,res)=>{
    try{
    //   res.send(req.body);
    const userData = new User(req.body);
  await  userData.save();
  res.status(201).render("index");
    }
    catch(error){
       res.status(600).send(error);
    }
})

app.listen(port, ()=>{
    console.log("Server is running on Port: "+port);
    });
