import connectDB from "./config/db.js";
import mongoose from "mongoose";
import app from "./app.js";

const PORT= process.env.PORT || 5000;

connectDB().then(()=>{
    console.log("Trying to start server...");

    app.listen(PORT,()=>{
        console.log(`Server Listening on PORT:${PORT}`);
    })
})