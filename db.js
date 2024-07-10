import mongoose from "mongoose"

export const mongoDB = async() => {
    await mongoose.connect(process.env.MONGO_URL, {
        dbName: 'fdDB',
        useNewUrlParser:true
    }).then(() => { 
        console.log('DB connected succesfully')
    }).catch((e) => {
        console.log(e)
    })
}   