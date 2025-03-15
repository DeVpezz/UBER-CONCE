const dotenv=require('dotenv')
dotenv.config()
const express=require(`express`)
const cors=require('cors')
const app=express()

const connectToDb=require('./db/db')
const userRoutes = require('./routes/user.routes');
const cookieParser = require('cookie-parser')


connectToDb()

app.use(cors())
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get(`/`,(req,res)=>{
    res.send("hello world this is our setup")
})


app.use('/users', userRoutes);

module.exports=app;