const dotenv=require('dotenv')
dotenv.config()
const express=require(`express`)
const cors=require('cors')
const app=express()
const cookieParser = require('cookie-parser')
const connectToDb=require('./db/db')
const userRoutes = require('./routes/user.routes')
const captainRoutes = require('./routes/captain.routes');



connectToDb()

app.use(cors())
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get(`/`,(req,res)=>{
    res.send("hello world this is our setup")
})


app.use('/users', userRoutes);
app.use('/captains', captainRoutes);

module.exports=app;