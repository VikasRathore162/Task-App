const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{
    useNewUrlParser : true,
    useCreateIndex :true,
    useUnifiedTopology: true
})

const User =mongoose.model('User',{
    name:{
        type: String
    },
    age :{
        type : Number

    }
})

const me= new User({
    name : 'Vikas',
    age :23
})

me.save().then((me)=>{
    console.log(me)


}).catch(e=>{
    console.log(e)
})