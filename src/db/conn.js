const mongoose = require( 'mongoose' );


// creating database
mongoose.connect("mongodb://localhost:27017/thapadynamic",{
    // useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
console.log('connected to the database');
})
.catch((err)=>{
    console.error(err);
});