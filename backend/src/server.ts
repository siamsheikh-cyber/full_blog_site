
import mongoose from "mongoose";
import app from "./app.js";
import { envVars } from "./app/config/env.js";






let server


const bootstrap = () => {

    mongoose.connect(envVars.DB_URI);
    console.log("DB_CONNECT");


    server = app.listen(envVars.PORT, () => {
        console.log(`Example app listening on port ${envVars.PORT}`)
    })
}


bootstrap()