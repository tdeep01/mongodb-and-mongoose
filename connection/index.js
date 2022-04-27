const mongoose=require('mongoose');
mongoose.connect("mongodb://localhost:27017/db_test").then(()=>{
    console.log("success");
}).catch((err)=>{
    console.log(err);
});

const testschema=mongoose.Schema({
    name:{
        type:String,
        required:true
        },
    age:Number,
    marks:Number,  
    bool:Boolean,
    date:{
        type:Date,
        default:Date.now
    },

});
const test=new mongoose.model("test",testschema);
const createdocument = async ()=>{
    try{
            const test1=new test({
            name:"rahul bajaj",
            age:23,
            marks:99,
            bool:true,
        });
        const result = await test1.save();
        console.log(result);
    }
    catch(err)
    {
        console.log(err);
    }
};// for new database
createdocument();

// const mongoose=require('mongoose');
// mongoose.connect('mongodb://localhost:27017/db_test').catch((err)=>{
//     console.log(err);
// });
// const schema=mongoose.Schema({});
// const mytest=mongoose.model('mytests',schema);
// (async()=>{
//     const result= await mytest.find();
//     console.log(result);
// })(); for existing database