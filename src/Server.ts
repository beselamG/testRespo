import express from "express";
import mongoose from "mongoose";
import { MONGO_URL, MONGO_USER, PORT } from "./config/Config";

const app =  express()


mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("db connected");
   // StartServer()
  })
  .catch((error) => {
    console.log("error on db connection");
  });

  


const StartServer = () => {

  app.use((req, res) => {
        res.status(404).json({"message":"not found"})
    })

    app.get("/ping" , (req, res) => {
        res.status(200).json({"id":1})
    } )

  
    app.listen(PORT, ()=>{

    })
} 

StartServer()