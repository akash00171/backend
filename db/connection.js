const mongoose = require('mongoose');

const connDb = () => {
    mongoose.connect(process.env.DB_URI)
    .then(()=>{
        console.log("Database connected sussessfully")
    }).catch((err)=>{
        console.log(err,"Connection failed")
    })
}

module.exports = connDb;