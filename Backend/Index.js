import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'

import cors from 'cors'
const app = express()

app.use(cors())//Middleware
app.use(express.json()) //Middleware
import bookRoute from './Route/Book_route.js'
import userRoute from './Route/User_route.js'

dotenv.config();
const port = process.env.PORT || 3001
const URI = process.env.MongoDBURI

//Connect to MongoDB

try{
  mongoose.connect(URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  console.log('Connected to MongoDB');
}catch(error){
  console.log("Error:", error);

}

//Defining Routes

app.use("/book",bookRoute)
app.use("/user",userRoute)



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})