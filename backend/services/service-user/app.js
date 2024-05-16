const express = require("express");
const app = express();
const ErrorHandler = require("../../middleware/error");
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");
const bodyParser = require("body-parser");
const path = require("path");
const connectDatabase = require("../../db/Database.js");

app.use(express.json());
app.use(cookieParser());

app.use(bodyParser.urlencoded({extended:true,limit:"50mb"}));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

app.use(fileUpload({useTempFiles: true}));

// config
if(process.env.NODE_ENV!=="PRODUCTION"){
    require("dotenv").config({
        path:"backend/config/.env"
    })}
connectDatabase(); 
const user = require("../../routes/UserRoute.js");
app.use("/api/v2",user);

// app.use(express.static(path.join(__dirname,"../frontend/build")));

// app.get("*",(req,res) =>{
//     res.sendFile(path.resolve(__dirname,"../frontend/build/index.html"));
// })

// it's for errorHandeling
app.use(ErrorHandler);

// module.exports = app


const PORT = 4003;

const server = app.listen(PORT,() =>{
    console.log(`Server is working on http://localhost:${PORT}`)
})