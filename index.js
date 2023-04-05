const express=require('express')
const cors=require('cors')
const mysql=require('mysql')
const db=require('./models')

const postRouter=require('./routes/Posts')
const commentsRouter=require("./routes/Comments");
const userRouter=require('./routes/Users')
const likeRouter=require("./routes/Likes");

const cookieParser = require('cookie-parser')
const app=express();
app.use(cors())
app.use(express.json())
// app.use(cookieParser())
// app.use(express.urlencoded({extended: true}));
// app.use(express.json());

app.use('/auth',userRouter);
app.use('/posts',postRouter);
app.use('/comments',commentsRouter);
app.use('/likes',likeRouter);

db.sequelize.sync().then(()=>{
    app.listen(3001,()=>{
        console.log("Running in port 3001");
    });
});



