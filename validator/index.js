const mongoose=require('mongoose');
const validator=require('validator');
mongoose.connect('mongodb://localhost:27017/db_test').catch((err)=>{
    console.log(err);
});
const schema=mongoose.Schema({
    name:String,
    email:{
        type:String,
        validate(value)
        {
            if(!validator.isEmail(value))
            {
                throw new Error('invalid email');
            }
        }
    },
});
const validtest=mongoose.model('validtest',schema);
// (async()=>{
//     const result= await validtest.find();
//     console.log(result);
// })();
(async ()=>{
    try {
        const obj1=new validtest({
            name:'tarandeep singh',
            email:'wrongemail'
        });
        const result= await validtest.insertMany([obj1]);
        console.log(result);
    } catch (error) {
        console.log('invalid email');
    } 
})();