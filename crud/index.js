const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/db_test').catch((err)=>{
    console.log(err);
});
const mySchema=mongoose.Schema({
    name:String,
    age:Number,
    email:String,
    bool:Boolean,
});
const mytest=new mongoose.model("mytest",mySchema);

const crud_insert = async ()=>{
    try{
        const obj1=new mytest({
            name:'rahul',
            age:22,
            email:'rahul@gmail.com',
            bool:true
        })
        // const result= await obj1.save(); single
        const obj2=new mytest({
            name:'suyash',
            age:22,
            email:'suyash@gmail.com',
            bool:true
        })
        const obj3=new mytest({
            name:'yogesh',
            age:22,
            email:'yogesh@gmail.com',
            bool:true
        })
        const obj4=new mytest({
            name:'ram',
            age:22,
            email:'ram@gmail.com',
            bool:true
        })

        const result= await mytest.insertMany([obj1,obj2,obj3,obj4]);
    }
    catch(err){
        console.log(err);
    }
}
const crud_read = async ()=>{
    try{
        const result = await mytest.find({bool:true}).select({name:1});
    // const result = await mytest.find({bool:true}).select({name:1}).countDocuments();
    // const result = await mytest.find({bool:true}).select({name:1}).sort({name:1}); 1/-1
    console.log(result);
    }catch(err){
        console.log(err);
    }
} 
const idresult = async(name)=>{
    try{
        return await mytest.find({name}).select({id:1});
    }
    catch(err){
        console.log(err);
    }
}
const crud_update = async()=>{
    try{
        // const result= await mytest.updateOne({_id: await idresult('ram')},{$set:{age:20}}); with id
        // const result= await mytest.updateOne({name:'ram'},{$set:{age:20}}); without id
        console.log(result);
        }
    catch(err){
        console.log(err);
    }
}
const crud_updateandreturn = async()=>{
    try{
        const id=await idresult('ram');
        // const result= await mytest.findByIdAndUpdate({_id: id[0]._id},{$set:{age:20}}); return old data
        // const result= await mytest.findByIdAndUpdate({_id: id[0]._id},{$set:{age:22}},{new:true}); return new data
        console.log(result);
    }catch(err){
        console.log(err);
    }
}
const crud_delete = async ()=>{
    try {
        const id=await idresult('rahul');
        console.log(id);
        const result= await mytest.deleteOne(id[0]);
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}
const crud_deleteandreturn = async ()=>{
    try {
        const id=await idresult('ram');
        console.log(id);
        const result= await mytest.findByIdAndDelete(id[0]);
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}




