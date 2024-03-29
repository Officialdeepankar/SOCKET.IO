const express=require("express");
const app=express();//express servere
const {createServer}=require("http");

const server=createServer(app);// http server mein apna app server de diya ;

app.get("/",(req,res)=>{
    res.send("Your are at home page!");
})


server.listen(3000,()=>{
    console.log(`http://localhost:${3000}`);//http server chall jayega 
})




