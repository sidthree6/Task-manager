const mongoose = require('mongoose')

const connectionString = 'mongodb+srv://seed:12345@nodeexpressprojects.r749y.mongodb.net/TASK-MANAGER?retryWrites=true&w=majority'

mongoose
    .connect(connectionString, {useNewUrlParser:true, useCreateIndex:true, useFindAndModify: false, useUnifiedTopology:true})
    .then(()=>console.log('CONNECTED TO THE DB...'))
    .catch((err)=>console.log(err))