const {MongoClient,ObjectID} = require('mongodb')

const connectionUrl ='mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectID()
console.log(id)

MongoClient.connect(connectionUrl,{useNewUrlParser : true}, (error,client)=>{
    if(error){
        return console.log(error)
    }
    const db = client.db(databaseName)

    // db.collection('users').insertOne({
    //     name : 'Vikas',
    //     age: 23
    // },(error,result)=>{
    //     if(error){
    //         return console.log('Unable to Insert')
    //     }
    //     console.log(result.ops[0]._id)
    // })

    
//     db.collection('tasks').insertMany([{
//         name : 'Vikas',
//         age: 23
//     },
//     {
//         name:'Visahal',
//         age:18
//     }
// ],(error,result)=>{
//         if(error){
//             return console.log('Unable to Insert')
//         }
//         console.log(result.ops)
//     })


})

